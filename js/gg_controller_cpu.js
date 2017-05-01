gg.controller_cpu = {};
gg.controller_cpu.data = {};
gg.controller_cpu.callback;
gg.controller_cpu.data.map;
gg.controller_cpu.data.area_map;
gg.controller_cpu.data.zoom;
gg.controller_cpu.data.army;
gg.controller_cpu.data.army_number;
gg.controller_cpu.data.result;

//gg.controller_cpu.start = function(army, map, army_number, zoom, callback, area_map) {
gg.controller_cpu.start = function(info, callback) {
	
	
	var active_unit_count = 0;
	for (var j = 0; j < info.army[info.army_number].unit.length; j++) {
		if (info.army[info.army_number].unit[j].fatigue <= 0 &&
			info.army[info.army_number].unit[j].dead_count_down == -1) {
			active_unit_count += 1;
		}
	}
	if (active_unit_count == 0) {
		callback();
		return;
	}
    gg.controller_cpu.callback = callback;
    //gg.controller_cpu.data.map = JSON.parse(JSON.stringify(info.map));
    gg.controller_cpu.data.map = info.map;
    //gg.controller_cpu.data.area_map = JSON.parse(JSON.stringify(info.area_map));
    gg.controller_cpu.data.area_map = info.area_map;
    gg.controller_cpu.data.army = JSON.parse(JSON.stringify(info.army));
    gg.controller_cpu.data.zoom = info.zoom;
    gg.controller_cpu.data.army_number = info.army_number;
    
    var my_army = gg.controller_cpu.data.army[info.army_number];
    var area_list = [];
	var temp_area_list;
	var max_level = 0;
	var uper_unit_number = 0;
	var dead_count = 0;
	var min_hitpoint = 100;
	var temp_hitpoint;
    for (var i = 0; i < my_army.unit.length; i++) {
        if (my_army.unit[i].fatigue == 0 && my_army.unit[i].dead_count_down == -1) {
		
			temp_area_list = gg.parts.cal_area(gg.controller_cpu.data.army,
														   gg.controller_cpu.data.map,
														   gg.controller_cpu.data.army_number, i,
														   gg.controller_cpu.data.area_map);
			for (var j = 0; j < temp_area_list.length; j++) {
				max_level = 0;
				uper_unit_number = 0;
				dead_count = 0;
				min_hitpoint = 100;
				if (temp_area_list[j].attack == null) {
					temp_area_list[j].max_level = max_level;
					temp_area_list[j].uper_unit_number = uper_unit_number;
					temp_area_list[j].dead_count = dead_count;
					temp_area_list[j].min_hitpoint = min_hitpoint;					
					continue;
				}
				for (var k = 0; k < temp_area_list[j].attack.list.length; k++) {
					if (temp_area_list[j].attack.list[k].army_number == info.army_number ||
						temp_area_list[j].attack.list[k].damage == null ||
						temp_area_list[j].attack.list[k].damage == 0) {
						continue;
					}
					//
					if (info.army[temp_area_list[j].attack.list[k].army_number].unit[temp_area_list[j].attack.list[k].unit_number].level > max_level) {
						max_level = info.army[temp_area_list[j].attack.list[k].army_number].unit[temp_area_list[j].attack.list[k].unit_number].level;
					}
					if (info.army[temp_area_list[j].attack.list[k].army_number].unit[temp_area_list[j].attack.list[k].unit_number].tye < 50) {
						uper_unit_number += 1;
					}
					temp_hitpoint = info.army[temp_area_list[j].attack.list[k].army_number].unit[temp_area_list[j].attack.list[k].unit_number].hitpoint -
					                temp_area_list[j].attack.list[k].damage;
					if (temp_hitpoint <= 0) {
						dead_count += 1;
						temp_hitpoint = 0;
					}
					if (temp_hitpoint < min_hitpoint) {
						min_hitpoint = temp_hitpoint;
					}
					// TODO rescue
					
				}
				temp_area_list[j].max_level = max_level;
				temp_area_list[j].uper_unit_number = uper_unit_number;
				temp_area_list[j].dead_count = dead_count;
				temp_area_list[j].min_hitpoint = min_hitpoint;
			}
			//console.dir(temp_area_list);
			temp_area_list.sort(function(a, b) {
				if (a.position_wait < b.position_wait) {
					return 1;
				} else  if (a.position_wait > b.position_wait) {
					return -1;
				} else {
					if (a.dead_count < b.dead_count) {
						return 1;
					} else if (a.dead_count > b.dead_count) {
						return -1;
					} else {
						if ((a.class_down_flag == null ||
							 a.class_down_flag == false) &&
							(b.class_down_flag != null &&
							 b.class_down_flag == true)) {
							return 1;
						} else if ((a.class_down_flag != null &&
							        a.class_down_flag == true) &&
							       (b.class_down_flag == null ||
							        b.class_down_flag == false)) {
							return -1;
						} else {
							if (a.no_passive_sum_damage < b.no_passive_sum_damage) {
								return 1;
							} else if (a.no_passive_sum_damage > b.no_passive_sum_damage) {
								return -1;
							} else {
								if (a.min_hitpoint < b.min_hitpoint) {
									return -1;
								} else if (a.min_hitpoint > b.min_hitpoint) {
									return 1;
								} else {
									if (a.max_level < b.max_level) {
										return 1;
									} else if (a.max_level > b.max_level) {
										return -1;
									} else {
										if (a.uper_unit_number < b.uper_unit_number) {
											return 1;
										} else if (a.uper_unit_number > b.uper_unit_number) {
											return -1;
										} else {
											if (a.area_point < b.area_point) {
												return 1;
											} else if (a.area_point > b.area_point) {
												return -1;
											} else {
												if (a.fatigue > b.fatigue) {
													return 1;
												} else if (a.fatigue < b.fatigue) {
													return -1;
												} else {
													if (info.map[a.y][a.x] < info.map[b.y][b.x]) {
														return 1;
													} else 	if (info.map[a.y][a.x] > info.map[b.y][b.x]) {
														return -1;
													} else{
														if (a.unit_number < b.unit_number) {
															return 1;
														} else if (a.unit_number > b.unit_number) {
															return -1;
														} else {
															if (a.attack !== undefined && b.attack !== undefined) {
                                                                if (a.attack.unit_number < b.attack.unit_number) {
																	return 1;
                                                                } else {
																	return -1;
																}
                                                            }

														}
													}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			});
			if (temp_area_list[0].no_passive_sum_damage <= 0 && temp_area_list[0].attack == null) {
				temp_area_list.sort(function(a, b) {
					if (a.enemy_distance < b.enemy_distance) {
						return -1;
					} else if (a.enemy_distance > b.enemy_distance) {
						return 1;
					} else {
						if (a.area_point < b.area_point) {
							return 1;
						} else if (a.area_point > b.area_point) {
							return -1;
						} else {
							if (info.map[a.y][a.x] < info.map[b.y][b.x]) {
								return 1;
							} else {
								return -1;
							}
						}
					}
				});
		
			}
			area_list.push(JSON.parse(JSON.stringify(temp_area_list[0])));
			temp_area_list = null;
        }
    }
    area_list.sort(function(a, b) {
		if (a.position_wait < b.position_wait) {
			return 1;
		} else  if (a.position_wait > b.position_wait) {
			return -1;
		} else {
			if (a.dead_count < b.dead_count) {
				return 1;
			} else  if (a.dead_count > b.dead_count) {
				return -1;
			} else {
				if (a.no_passive_sum_damage < b.no_passive_sum_damage) {
					return 1;
				} else  if (a.no_passive_sum_damage > b.no_passive_sum_damage) {
					return -1;
				} else {
					if (a.min_hitpoint < b.min_hitpoint) {
						return -1;
					} else  if (a.min_hitpoint > b.min_hitpoint) {
						return 1;
					} else {
						if (a.max_level < b.max_level) {
							return 1;
						} else  if (a.max_level > b.max_level) {
							return -1;
						} else {
							if (a.uper_unit_number < b.uper_unit_number) {
								return 1;
							} else if (a.uper_unit_number > b.uper_unit_number) {
								return -1;
							} else {
								if (a.area_point < b.area_point) {
									return 1;
								} else if (a.area_point > b.area_point) {
									return -1;
								} else {
									if (a.fatigue > b.fatigue) {
										return 1;
									} else if (a.fatigue < b.fatigue) {
										return -1;
									} else {
										if (info.map[a.y][a.x] < info.map[b.y][b.x]) {
											return 1;
										} else if (info.map[a.y][a.x] > info.map[b.y][b.x]){
												return -1;
										} else {
											if (a.unit_number < b.unit_number) {
												return 1;
											} else if (a.unit_number > b.unit_number) {
												return -1;
											} else {
												if (a.attack !== undefined && b.attack !== undefined) {
                                                     if (a.attack.unit_number < b.attack.unit_number) {
														return 1;
                                                     } else {
														return -1;
													}
                                                 }
											}														
										}
									}
								}
							}
						}
					}
				}
			}
		}
    });
	
	//console.dir(area_list);
	for (var i = 0; i < area_list.length; i++) {
		//console.log('no_passive_sum_damage:' + i + ':' + area_list[i].no_passive_sum_damage)
		if (isNaN(area_list[i].no_passive_sum_damage)) {
			console.log('NG');
		}
	}

    if (area_list[0].no_passive_sum_damage == 0 && area_list[0].attack_animation == null) {
		area_list.sort(function(a, b) {
			if (a.enemy_distance < b.enemy_distance) {
				return -1;
			} else  if (a.enemy_distance > b.enemy_distance) {
				return 1;
			} else {
				if (a.area_point < b.area_point) {
					return 1;
				} else  if (a.area_point > b.area_point) {
					return -1;
				} else {
	
					//if (a.map_position < b.map_position) {
					if (info.map[a.y][a.x] < info.map[b.y][b.x]) {
						return 1;
					} else {
						return -1;
					}
				}
			}
		});

	}
	var select_result = JSON.parse(JSON.stringify(area_list[0]));
	area_list = null;
    gg.controller_cpu.data.result = select_result;
    if (select_result.x != my_army.unit[select_result.unit_number].x ||
        select_result.y != my_army.unit[select_result.unit_number].y) {
		my_army.unit[select_result.unit_number].x = select_result.x;
		my_army.unit[select_result.unit_number].y = select_result.y;
        // data change
        var animation_obj = {};
		
        animation_obj.route_count = select_result.route.length;
        animation_obj.list = [{x: select_result.x, y: select_result.y,
                         route: select_result.route, army_number: info.army_number,
                         unit_number: select_result.unit_number,
                         attack_route: select_result.attack_route,
                         start_x: info.army[info.army_number].unit[select_result.unit_number].x,
                         start_y: info.army[info.army_number].unit[select_result.unit_number].y,
                         kind: GG_DATA_ANIMATION_UNIT}];
        if (select_result.moved != null) {
			gg.controller_cpu.data.army[select_result.moved.army_number].unit[select_result.moved.unit_number].x = select_result.moved.x;
			gg.controller_cpu.data.army[select_result.moved.army_number].unit[select_result.moved.unit_number].y = select_result.moved.y;
            animation_obj.list.push({
                         route: select_result.moved.route,
						 army_number: select_result.moved.army_number,
                         unit_number: select_result.moved.unit_number,
                         start_x: select_result.moved.start_x,
                         start_y: select_result.moved.start_y,
                         kind: GG_DATA_ANIMATION_UNIT
                });
            
        }
    }
    
    // animation

    if (animation_obj != null) {
        gg.animation.set_move_animation2(gg.controller_cpu.data.map,
										 gg.controller_cpu.data.army, animation_obj,
										 gg.controller_cpu.data.zoom,
										 gg.controller_cpu.set_animation,
										 gg.controller_cpu.data.area_map, [], true);
		
    } else if (select_result.attack != null) {
		
        gg.controller_cpu.set_animation();
    } else {
        gg.controller_cpu.end();
    }
    
};

gg.controller_cpu.set_animation = function() {
    var obj = {army_number: gg.controller_cpu.data.army_number, unit_number: gg.controller_cpu.data.result.unit_number,
                    x: gg.controller_cpu.data.result.x, y: gg.controller_cpu.data.result.y};
    gg.controller.set_data(obj);
   
    
    if (gg.controller_cpu.data.result.moved != null) {
        obj = {army_number: gg.controller_cpu.data.result.moved.army_number, unit_number: gg.controller_cpu.data.result.moved.unit_number,
               x: gg.controller_cpu.data.result.moved.x, y: gg.controller_cpu.data.result.moved.y};
        gg.controller.set_data(obj);

    }
    if (gg.controller_cpu.data.result.attacked_x != null) {
        obj = {army_number: gg.controller_cpu.data.result.army_number,
               unit_number: gg.controller_cpu.data.result.unit_number,
			   enemy_flag: true,
               x: gg.controller_cpu.data.result.attacked_x, y: gg.controller_cpu.data.result.attacked_y};
        gg.controller.set_data(obj);
		gg.controller_cpu.data.army[gg.controller_cpu.data.result.army_number].unit[gg.controller_cpu.data.result.unit_number].x =
			gg.controller_cpu.data.result.attacked_x;
		gg.controller_cpu.data.army[gg.controller_cpu.data.result.army_number].unit[gg.controller_cpu.data.result.unit_number].y =
			gg.controller_cpu.data.result.attacked_y;
    }
    if (gg.controller_cpu.data.result.attack != null) {
        for (var i = 0; i < gg.controller_cpu.data.result.attack.list.length; i++) {
            if (gg.controller_cpu.data.result.attack.list[i].x != null) {
                obj = {army_number: gg.controller_cpu.data.result.attack.list[i].army_number,
                        unit_number: gg.controller_cpu.data.result.attack.list[i].unit_number,
						enemy_flag: true,
                        x: gg.controller_cpu.data.result.attack.list[i].x, y: gg.controller_cpu.data.result.attack.list[i].y};
                gg.controller.set_data(obj);
				gg.controller_cpu.data.army[gg.controller_cpu.data.result.attack.list[i].army_number].unit[gg.controller_cpu.data.result.attack.list[i].unit_number].x =
					gg.controller_cpu.data.result.attack.list[i].x;
				gg.controller_cpu.data.army[gg.controller_cpu.data.result.attack.list[i].army_number].unit[gg.controller_cpu.data.result.attack.list[i].unit_number].y =
					gg.controller_cpu.data.result.attack.list[i].y;
            }
        }
    }
    
    if (gg.controller_cpu.data.result.attack != null) {
        gg.parts.set_animation(gg.controller_cpu.data.map, gg.controller_cpu.data.area_map,
                               gg.controller_cpu.data.zoom, gg.controller_cpu.data.army,
                               gg.controller_cpu.data.result, gg.controller_cpu.end);
        //code
    } else {
        gg.parts.set_not_attack_animation(gg.controller_cpu.data.map, gg.controller_cpu.data.area_map,
                                          gg.controller_cpu.data.zoom, gg.controller_cpu.data.army,
                                          gg.controller_cpu.data.result, gg.controller_cpu.end);
    }
};

gg.controller_cpu.end = function() {
    //var result = gg.controller_cpu.data.result;
    var attacked_army_number;
    var attacked_unit_number;
    if (gg.controller_cpu.data.result.attack != null &&
		gg.controller_cpu.data.result.attack.attacked_army_number != null &&
		gg.controller_cpu.data.result.attack.attacked_unit_number != null) {
        attacked_army_number = gg.controller_cpu.data.result.attack.attacked_army_number;
        attacked_unit_number = gg.controller_cpu.data.result.attack.attacked_unit_number;
    }
	var temp_status_change_done;
	if (gg.controller_cpu.data.result.attack == null) {
		temp_status_change_done = false;
	} else {
		temp_status_change_done = gg.controller_cpu.data.result.attack.status_change_done;
		
	}
    var obj = {army_number: gg.controller_cpu.data.army_number,
	           unit_number: gg.controller_cpu.data.result.unit_number,
               x: gg.controller_cpu.data.result.x,
			   y: gg.controller_cpu.data.result.y,
               move_end_x: gg.controller_cpu.data.result.move_end_x,
			   move_end_y: gg.controller_cpu.data.result.move_end_y,
			   fatigue: gg.controller_cpu.data.result.fatigue,
               exp: gg.controller_cpu.data.result.exp,
			   damage: gg.controller_cpu.data.result.damage,
			   attacked_army_number: attacked_army_number,
			   attacked_unit_number: attacked_unit_number, 
               status: GG_DATA_STATUS_ACTION, 
			   done_flag: true,
			   status_change_done: temp_status_change_done,
			   status_changed: gg.controller_cpu.data.result.status_change
			   };
    gg.controller.set_data(obj);
                         
    if (gg.controller_cpu.data.result.rob_area_point != null) {
		obj = {rob_area_point: gg.controller_cpu.data.result.rob_area_point};
        gg.controller.set_data(obj);
    }

    if (gg.controller_cpu.data.result.rescue != null) {
		for (var i = 0; i < gg.controller_cpu.data.result.rescue.length; i++) {
			obj = {army_number: gg.controller_cpu.data.result.rescue[i].army_number,
				   unit_number: gg.controller_cpu.data.result.rescue[i].unit_number,
				   recovery:    gg.controller_cpu.data.result.rescue[i].recovery};
			gg.controller.set_data(obj);
		}
    }
    if (gg.controller_cpu.data.result.recovery != null) {
        obj = {army_number: gg.controller_cpu.data.result.recovery.army_number,
               unit_number: gg.controller_cpu.data.result.recovery.unit_number,
               recovery:    gg.controller_cpu.data.result.recovery.recovery};
        gg.controller.set_data(obj);
    }
    if (gg.controller_cpu.data.result.status_changes != null) {
		for (var i = 0; i < gg.controller_cpu.data.result.status_changes.length; i++) {
			obj = {army_number: gg.controller_cpu.data.result.status_changes[i].army_number,
				   unit_number: gg.controller_cpu.data.result.status_changes[i].unit_number,
				   status_changed:    gg.controller_cpu.data.result.status_changes[i].status_changed};
			gg.controller.set_data(obj);
		}
    }


    if (gg.controller_cpu.data.result.attack != null) {
        for (var i = 0; i < gg.controller_cpu.data.result.attack.list.length; i++) {
            obj = {army_number:          gg.controller_cpu.data.result.attack.list[i].army_number,
                   unit_number:          gg.controller_cpu.data.result.attack.list[i].unit_number,
                   damage:               gg.controller_cpu.data.result.attack.list[i].damage,
                   status_change_done:   gg.controller_cpu.data.result.attack.list[i].status_change_done,
                   attacked_army_number: gg.controller_cpu.data.result.attack.list[i].attacked_army_number,
                   attacked_unit_number: gg.controller_cpu.data.result.attack.list[i].attacked_unit_number,
				   enemy_flag:           true,
                   x:                    gg.controller_cpu.data.result.attack.list[i].x,
                   y:                    gg.controller_cpu.data.result.attack.list[i].y,
                   exp:                  gg.controller_cpu.data.result.attack.list[i].exp,
				   class_down_flag:      gg.controller_cpu.data.result.attack.list[i].class_down_flag};
			if (gg.controller_cpu.data.result.attack.list[i].second_damage != undefined &&
				obj.damage != undefined) {
				obj.damage += gg.controller_cpu.data.result.attack.list[i].second_damage;
			}
            if (gg.controller_cpu.data.result.attack.list[i].fatigue != null ) {
                obj.fatigue = gg.controller_cpu.data.result.attack.list[i].fatigue;
            }
            gg.controller.set_data(obj);
        }
    }
	gg.controller_cpu.data.result = null;
    var new_army = gg.controller.get_data();

    gg.animation.set_etc_animation2(gg.controller_cpu.data.map, new_army, [],
                                    gg.controller_cpu.data.zoom, gg.controller_cpu.callback, 0,
                                    gg.controller_cpu.data.area_map, [], 0, true, false);
	gg.controller_cpu.data = null;
	gg.controller_cpu.data = {};

};
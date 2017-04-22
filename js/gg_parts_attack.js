gg.parts.check_attack = function (map, army, army_number, unit_number, x, y,
                                  attack_min_range, attack_max_range, attack_type, moved_unit,
								  org_x, org_y) {
	var my_unit = army[army_number].unit[unit_number];
	if (my_unit.status_changed == GG_DATA_STATUS_CHANGE_UP_MOVE) {
		var temp_move_point = my_unit.move_point + GG_DATA_DEFAULT_STATUS_CHANGE_MOVE_POINT;
		if (temp_move_point > 10) {
			temp_move_point = 10;
		}
	} else {
		var temp_move_point = my_unit.move_point;
	}
    var attack_list = [];
    var xabs, yabs, range;
    var max_map_x = GG_DATA_MAP_SIZE.max_x;
    var max_map_y = GG_DATA_MAP_SIZE.max_y;
    var min_map_x = GG_DATA_MAP_SIZE.min_x;
    var min_map_y = GG_DATA_MAP_SIZE.min_y;
	var org_distance = 0;
	var temp_add_attack_point;
    
    for (var i = 0; i < army.length; i++) {
        if (i == army_number) {//
            continue;
        }
        for (var j = 0; j < army[i].unit.length; j++) {
			if (army[i].unit[j].dead_count_down != -1) {
				continue;
			}
			
            if (attack_type != GG_DATA_ATTACK_TYPE_CHAINE) {
                
                xabs = Math.abs(x - army[i].unit[j].x);
                yabs = Math.abs(y - army[i].unit[j].y);
                if (yabs > xabs) {
                    range = yabs;
                } else {
                    range = (xabs + yabs) / 2;
                }
                if (range >= attack_min_range && range <= attack_max_range) {
                    attack_list.push({army_number: i, unit_number: j,
                                      attack_x: army[i].unit[j].x,
									  attack_y: army[i].unit[j].y
									  ,exp: 0
									  ,no_passive_sum_damage: 0
									 ,move_list: []
                        });
                }
            } else if (attack_type == GG_DATA_ATTACK_TYPE_CHAINE) {

                xabs = Math.abs(x - army[i].unit[j].x);
                yabs = Math.abs(y - army[i].unit[j].y);
                if (yabs > xabs) {
                    range = yabs;
                } else {
                    range = (xabs + yabs) / 2;
                }
                for (var m = 0; m < GG_PARTS_CHAIN_PATTERN.length; m++) {
                    if (x + GG_PARTS_CHAIN_PATTERN[m].x != army[i].unit[j].x ||
                        y + GG_PARTS_CHAIN_PATTERN[m].y != army[i].unit[j].y) {
                        continue;
                    }
                    var chain_flag = true;                        
                    for (var k = 0; k < army.length; k++) {
                        for (var l = 0; l < army[k].unit.length; l++) {
                            if (k == army_number && l == unit_number) {
                                continue;
                            }
                            //////////////
                            if (army[k].unit[l].x == x + GG_PARTS_CHAIN_PATTERN[m].moved_x &&
                                army[k].unit[l].y == y + GG_PARTS_CHAIN_PATTERN[m].moved_y) {
                                chain_flag = false;
                                break;
                            } else if (map[y + GG_PARTS_CHAIN_PATTERN[m].moved_y][x + GG_PARTS_CHAIN_PATTERN[m].moved_x] == -1) {
                                chain_flag = false;
                                break;
                            }
                        }
                        if (chain_flag == false) {
                            break;
                        }
                    }
                    if (chain_flag == true) {
                        attack_list.push({army_number: i, unit_number: j,
                                          chain_route: m,
                                          attack_x: army[i].unit[j].x, attack_y: army[i].unit[j].y,
                                          select_x: x + GG_PARTS_CHAIN_PATTERN[m].moved_x,
										  select_y: y + GG_PARTS_CHAIN_PATTERN[m].moved_y
									  ,exp: 0
									  ,no_passive_sum_damage: 0
										  ,move_list: []
										  });
                        break;
                    }
                }
            }
        }
    }
	// end
	// attacker push check start
	// Hammer check start
    var enemy_push_list = [];
	var space_check;
	var enemy_push_now_flag = false;
	var attack_target_check;
    for (var i = 0; i < attack_list.length; i++) {
		enemy_push_list = [];
        for (var j = 0; j < army.length; j++) {
            if (j == army_number) {
                continue;
            }
            for (var k = 0; k < army[j].unit.length; k++) {
                if (army[j].unit[k].defence_type != GG_DATA_DEFENCE_TYPE_ENEMY_PUSH
					|| army[j].unit[k].fatigue != 0
					|| army[j].unit[k].dead_count_down != -1
					) {
                    continue;
                }
				attack_target_check = false;
				if (attack_list[i].army_number == j &&
					attack_list[i].unit_number == k) {
					attack_target_check = true;
				}
				//for (var list_count = 0; list_count < attack_list[i].list.length; list_count++) {
				//	if (attack_list[i].list[list_count].army_number == j &&
				//		attack_list[i].list[list_count].unit_number == k) {
				//		attack_target_check = true;
				//		break;
				//	}
					
				//}
				if (attack_target_check == true) {
					continue;
				}

                var pusher_unit = army[j].unit[k];
                xabs = Math.abs(x - pusher_unit.x);
                yabs = Math.abs(y - pusher_unit.y);
                if (yabs > xabs) {
                    range = yabs;
                } else {
                    range = (xabs + yabs) / 2;
                }
				if (range != 1) {
					continue;
				}
				// push space
				for (var l = 0; l < GG_PARTS_PUSH_SPACE.length; l++) {
					if (pusher_unit.x + GG_PARTS_PUSH_SPACE[l].x != x ||
						pusher_unit.y + GG_PARTS_PUSH_SPACE[l].y != y) {
						continue;
					}
					var space_check = true;
					for (var m = 0; m < GG_PARTS_PUSH_SPACE[l].push_space.length; m++) {
						space_check = true;
						if (x + GG_PARTS_PUSH_SPACE[l].push_space[m].x < min_map_x
							|| x + GG_PARTS_PUSH_SPACE[l].push_space[m].x > max_map_x
							|| y + GG_PARTS_PUSH_SPACE[l].push_space[m].y < min_map_y
							|| y + GG_PARTS_PUSH_SPACE[l].push_space[m].y > max_map_y
							) {
							space_check = false;
							continue;
						}

						for (var n = 0; n < army.length; n++) {
							for (var o = 0; o < army[n].unit.length; o++){
								if (n == army_number && o == unit_number) {
									continue;
								}
								if (army[n].unit[o].x == x + GG_PARTS_PUSH_SPACE[l].push_space[m].x &&
									army[n].unit[o].y == y + GG_PARTS_PUSH_SPACE[l].push_space[m].y) {
									space_check = false;
								}
							}
							if (space_check == false) {
								break;
							}
						}
						if (space_check == true) {
							break;
						}
					}
					if (space_check == true) {
						enemy_push_list.push({push_army_number: j, push_unit_number:k,
						                                  push_space: { x: GG_PARTS_PUSH_SPACE[l].push_space[m].x
														               ,y: GG_PARTS_PUSH_SPACE[l].push_space[m].y
																	   ,route: GG_PARTS_PUSH_SPACE[l].push_space[m].route
																	   ,push_x:GG_PARTS_PUSH_SPACE[l].x
																	   ,push_y: GG_PARTS_PUSH_SPACE[l].y
																	   ,push_route: GG_PARTS_PUSH_SPACE[l].route
																	   ,unit_dir: GG_PARTS_PUSH_SPACE[l].push_space[m].unit_dir}});
					}
					break;
				}
			}
		}
		if (enemy_push_list.length != 0) {
			//
			enemy_push_now_flag = true;
			//attack_list[i].exp = 0;
			//attack_list[i].fatigue = 0;
			
			attack_list[i].enemy_push_now_flag = true;
			attack_list[i].change_attacked_x = attack_list[i].attack_x + enemy_push_list[0].push_space.x;
			attack_list[i].change_attacked_y = attack_list[i].attack_y + enemy_push_list[0].push_space.y;
			attack_list[i].move_end_x = x + enemy_push_list[0].push_space.x;
			attack_list[i].move_end_y = y + enemy_push_list[0].push_space.y;
			attack_list[i].move_end_route = enemy_push_list[0].push_space.route;
			attack_list[i].unit_dir = enemy_push_list[0].push_space.unit_dir;
			
			//attack_list[i].push_attack_x = attack_list[i].attack_x + enemy_push_list[0].push_space.x;
			//attack_list[i].push_attack_y = attack_list[i].attack_y + enemy_push_list[0].push_space.y;

            attack_list[i].move_list[0] = {
                        army_number: army_number ,
                        unit_number: unit_number,
                        start_x: x,
                        start_y: y,
                        x: attack_list[i].move_end_x,
                        y: attack_list[i].move_end_y,
                        route: attack_list[i].move_end_route,
						unit_dir: enemy_push_list[0].push_space.unit_dir,
						enemy_push_now_flag: true
						};

			attack_list[i].list = [];
			attack_list[i].list[0] = {   army_number: enemy_push_list[0].push_army_number
										,unit_number: enemy_push_list[0].push_unit_number
										,enemy_push_now_flag: true
										,exp: 1
										,fatigue: army[enemy_push_list[0].push_army_number].unit[enemy_push_list[0].push_unit_number].defence_fatigue
				};
			attack_list[i].move_list = [];
			var unit_dir = 0;
			if (y < army[enemy_push_list[0].push_army_number].unit[enemy_push_list[0].push_unit_number].y) {
				unit_dir = 3;
			} else if (y == army[enemy_push_list[0].push_army_number].unit[enemy_push_list[0].push_unit_number].y) {
				if (x > army[enemy_push_list[0].push_army_number].unit[enemy_push_list[0].push_unit_number].x) {
					unit_dir = 1;
				} else {
					unit_dir = 2;
				}
			}
            attack_list[i].move_list.push({
                                army_number: enemy_push_list[0].push_army_number,
                                unit_number: enemy_push_list[0].push_unit_number,
                                x: army[enemy_push_list[0].push_army_number].unit[enemy_push_list[0].push_unit_number].x,
                                y: army[enemy_push_list[0].push_army_number].unit[enemy_push_list[0].push_unit_number].y,
								unit_dir: unit_dir,
								route: [enemy_push_list[0].push_space.push_route],
                                enemy_push_now_flag: true});
			//
			attack_list[i].army_number = -1;
			attack_list[i].unit_number = -1;
			if (attack_type != GG_DATA_ATTACK_TYPE_CHAINE) {
				for (var army_count = 0; army_count < army.length; army_count++) {
					for (var unit_count = 0; unit_count < army[army_count].unit.length; unit_count++) {
						if (army_count == army_number && unit_count == unit_number) {
							continue;
						}
						if (army[army_count].unit[unit_count].dead_count_down != -1) {
							continue;
						}
						if (army[army_count].unit[unit_count].x == attack_list[i].change_attacked_x &&
							army[army_count].unit[unit_count].y == attack_list[i].change_attacked_y) {
							
							attack_list[i].army_number = army_count;
							attack_list[i].unit_number = unit_count;
							break;
						}
					}
					if (attack_list[i].army_number != -1) {
						break;
					}
				}
			} else if (attack_type == GG_DATA_ATTACK_TYPE_CHAINE) {
				for (var army_count = 0; army_count < army.length; army_count++) {
					chain_flag = false;
					for (var unit_count = 0; unit_count < army[army_count].unit.length; unit_count++) {
						if (army[army_count].unit[unit_count].x != attack_list[i].change_attacked_x ||
							army[army_count].unit[unit_count].y != attack_list[i].change_attacked_y) {
							continue;
						}
						
						for (var m = 0; m < GG_PARTS_CHAIN_PATTERN.length; m++) {
							if (attack_list[i].move_end_x + GG_PARTS_CHAIN_PATTERN[m].x != army[army_count].unit[unit_count].x ||
								attack_list[i].move_end_y + GG_PARTS_CHAIN_PATTERN[m].y != army[army_count].unit[unit_count].y) {
								continue;
							}
							var chain_flag = true;                        
							for (var k = 0; k < army.length; k++) {
								for (var l = 0; l < army[k].unit.length; l++) {
									if (k == army_number && l == unit_number) {
										continue;
									}
									//////////////
									if (army[k].unit[l].x == attack_list[i].move_end_x + GG_PARTS_CHAIN_PATTERN[m].moved_x &&
										army[k].unit[l].y == attack_list[i].move_end_y + GG_PARTS_CHAIN_PATTERN[m].moved_y) {
										chain_flag = false;
										break;
									} else if (map[attack_list[i].move_end_y + GG_PARTS_CHAIN_PATTERN[m].moved_y][attack_list[i].move_end_x
																												  + GG_PARTS_CHAIN_PATTERN[m].moved_x] == -1) {
										chain_flag = false;
										break;
									}
								}
								if (chain_flag == false) {
									break;
								}
							}
							if (chain_flag == true) {
								attack_list[i].army_number = army_count;
								attack_list[i].unit_number = unit_count;
								attack_list[i].chain_route = m;
								attack_list[i].select_x = attack_list[i].move_end_x + GG_PARTS_CHAIN_PATTERN[m].moved_x;
								attack_list[i].select_y = attack_list[i].move_end_y + GG_PARTS_CHAIN_PATTERN[m].moved_y;
								
								//attack_list.push({army_number: i, unit_number: j,
								//				  chain_route: m,
								//				  attack_x: army[i].unit[j].x, attack_y: army[i].unit[j].y,
								//				  select_x: x + GG_PARTS_CHAIN_PATTERN[m].moved_x,
								//				  select_y: y + GG_PARTS_CHAIN_PATTERN[m].moved_y
								//				  ,move_list: []
								//				  });
								break;
							}
						}
						if (chain_flag == true) {
							break;
						}
					}
					if (chain_flag == true) {
						break;
					}
				}
			}

		}
	}
	// end
	
    var damage, second_damage;
	var enemy_unit;
    var route;
	var status_change_done;
	var temp_enemy_defence_point = 0;
	var enemy_status_change_done;
	var temp_x, temp_y;

    for (var i = 0; i < attack_list.length; i++) {
		if (attack_list[i].army_number == -1) {
			continue;
		}
        
        if (attack_type == GG_DATA_ATTACK_TYPE_NORMAL ||
			attack_type == GG_DATA_ATTACK_TYPE_MACE ||
			attack_type == GG_DATA_ATTACK_TYPE_MORNINGSTAR ||
			attack_type == GG_DATA_ATTACK_TYPE_HOSPITAL) {
            
            enemy_unit = army[attack_list[i].army_number].unit[attack_list[i].unit_number];
			
			xabs = Math.abs(org_x - enemy_unit.x);
            yabs = Math.abs(org_y - enemy_unit.y);
            if (yabs > xabs) {
                org_distance = yabs;
            } else {
                org_distance = (xabs + yabs) / 2;
            }
			// assault check
			temp_add_attack_point = 0;
			if (attack_max_range + temp_move_point / 2 + 1 <= org_distance) {
				temp_add_attack_point = GG_DATA_DEFAULT_STATUS_CHANGE_ATTACK_POINT;
			}
			status_change_done = false;
			if (temp_add_attack_point == 0 &&
				my_unit.status_changed == GG_DATA_STATUS_CHANGE_UP_ATTACK) {
				temp_add_attack_point = GG_DATA_DEFAULT_STATUS_CHANGE_ATTACK_POINT;
				status_change_done = true;
			}
			if (my_unit.status_changed == GG_DATA_STATUS_CHANGE_DOWN_ATTACK) {
				temp_add_attack_point -= GG_DATA_DEFAULT_STATUS_CHANGE_ATTACK_POINT;
				status_change_done = true;
			}
			
			// class down
			attack_list[i].class_down_flag = false;
			if (attack_max_range + temp_move_point / 2 + 1 <= org_distance &&
				map[enemy_unit.y][enemy_unit.x] - map[y][x] >= 2) {
				if ((my_unit.type > GG_DATA_CHAR_MIDDLE_UNIT &&
					 enemy_unit.type < GG_DATA_CHAR_MIDDLE_UNIT) ||
					(my_unit.type > GG_DATA_CHAR_HIGH_UNIT &&
					 enemy_unit.type < GG_DATA_CHAR_HIGH_UNIT)) {
					attack_list[i].class_down_flag = true;
				}
			}			
			
			if (enemy_unit.status_changed == GG_DATA_STATUS_CHANGE_UP_DEFENCE) {
				temp_enemy_defence_point = enemy_unit.defence_point + GG_DATA_DEFAULT_STATUS_CHANGE_DEFENCE_POINT;
				enemy_status_change_done = true;
			} else {
				temp_enemy_defence_point = enemy_unit.defence_point;
				enemy_status_change_done = false;
			}
			if (attack_list[i].enemy_push_now_flag == true) {
				temp_x = attack_list[i].move_end_x;
				temp_y = attack_list[i].move_end_y;
			} else {
				temp_x = x;
				temp_y = y;
				
			}

            damage = (my_unit.attack_point + temp_add_attack_point) + map[temp_y][temp_x] * 2 -
                      temp_enemy_defence_point -
                      map[enemy_unit.y][enemy_unit.x] * 2;
            if (damage < 0) {
                damage = 0;
            }
            
            attack_list[i].fatigue = my_unit.attack_fatigue * 2;
			attack_list[i].assault_flag = false;
			attack_list[i].status_change_done = status_change_done;

			if (temp_add_attack_point > 0 && status_change_done == false) {				
	            attack_list[i].fatigue += my_unit.attack_fatigue * GG_DATA_DEFAULT_STATUS_CHANGE_ATTACK_FATIGUE;
				attack_list[i].assault_flag = true;
			}
			if (temp_add_attack_point > 0 && status_change_done == true &&
				my_unit.status_changed == GG_DATA_STATUS_CHANGE_UP_ATTACK) {				
	            attack_list[i].fatigue += my_unit.attack_fatigue * GG_DATA_DEFAULT_STATUS_CHANGE_ATTACK_FATIGUE;
			}
			//if (attack_list[i].class_down_flag == true) {
	        //    attack_list[i].fatigue += my_unit.attack_fatigue;
			//}
			
			attack_list[i].no_passive_sum_damage = damage;
			if (attack_list[i].list == undefined) {
	            attack_list[i].list = [];
			}
            attack_list[i].list.push({
				damage: damage
				,status_change_done: enemy_status_change_done
				,attacked_army_number: army_number
				,attacked_unit_number: unit_number
				,x: army[attack_list[i].army_number].unit[attack_list[i].unit_number].x
				,y: army[attack_list[i].army_number].unit[attack_list[i].unit_number].y
				,army_number: attack_list[i].army_number
				,unit_number: attack_list[i].unit_number
				,exp: 1
				,fatigue: 0
				,class_down_flag: attack_list[i].class_down_flag
			});
            attack_list[i].exp = damage;
            //
            ///////////////////////
            for (var j = 0; j < GG_PARTS_ATTACK_NORMAL.length; j++) {
                if (x + GG_PARTS_ATTACK_NORMAL[j].x == army[attack_list[i].army_number].unit[attack_list[i].unit_number].x &&
                    y + GG_PARTS_ATTACK_NORMAL[j].y == army[attack_list[i].army_number].unit[attack_list[i].unit_number].y) {
                    attack_list[i].route = GG_PARTS_ATTACK_NORMAL[j].route;
                    break;
                }
            }

		} else if (attack_type == GG_DATA_ATTACK_TYPE_SABER) {
            
            enemy_unit = army[attack_list[i].army_number].unit[attack_list[i].unit_number];
			
			xabs = Math.abs(org_x - enemy_unit.x);
            yabs = Math.abs(org_y - enemy_unit.y);
            if (yabs > xabs) {
                org_distance = yabs;
            } else {
                org_distance = (xabs + yabs) / 2;
            }
			// assault check
			temp_add_attack_point = 0;
			if (attack_max_range + temp_move_point / 2 + 1 <= org_distance) {
				temp_add_attack_point = GG_DATA_DEFAULT_STATUS_CHANGE_ATTACK_POINT;
			}
			status_change_done = false;
			if (temp_add_attack_point == 0 &&
				my_unit.status_changed == GG_DATA_STATUS_CHANGE_UP_ATTACK) {
				temp_add_attack_point = GG_DATA_DEFAULT_STATUS_CHANGE_ATTACK_POINT;
				status_change_done = true;
			}
			if (my_unit.status_changed == GG_DATA_STATUS_CHANGE_DOWN_ATTACK) {
				temp_add_attack_point -= GG_DATA_DEFAULT_STATUS_CHANGE_ATTACK_POINT;
				status_change_done = true;
			}
			
			// class down
			attack_list[i].class_down_flag = false;
			if (attack_max_range + temp_move_point / 2 + 1 <= org_distance &&
				map[enemy_unit.y][enemy_unit.x] - map[y][x] >= 2) {
				if ((my_unit.type > GG_DATA_CHAR_MIDDLE_UNIT &&
					 enemy_unit.type < GG_DATA_CHAR_MIDDLE_UNIT) ||
					(my_unit.type > GG_DATA_CHAR_HIGH_UNIT &&
					 enemy_unit.type < GG_DATA_CHAR_HIGH_UNIT)) {
					attack_list[i].class_down_flag = true;
				}
			}			
			
			if (enemy_unit.status_changed == GG_DATA_STATUS_CHANGE_UP_DEFENCE) {
				temp_enemy_defence_point = enemy_unit.defence_point + GG_DATA_DEFAULT_STATUS_CHANGE_DEFENCE_POINT;
				enemy_status_change_done = true;
			} else {
				temp_enemy_defence_point = enemy_unit.defence_point;
				enemy_status_change_done = false;
			}
			if (attack_list[i].enemy_push_now_flag == true) {
				temp_x = attack_list[i].move_end_x;
				temp_y = attack_list[i].move_end_y;
			} else {
				temp_x = x;
				temp_y = y;
				
			}

            damage = (my_unit.attack_point + temp_add_attack_point) + map[temp_y][temp_x] * 2 -
                      temp_enemy_defence_point -
                      map[enemy_unit.y][enemy_unit.x] * 2;
            if (damage < 0) {
                damage = 0;
            }
            
            attack_list[i].fatigue = my_unit.attack_fatigue * 2;
			attack_list[i].assault_flag = false;
			attack_list[i].status_change_done = status_change_done;

			if (temp_add_attack_point > 0 && status_change_done == false) {				
	            attack_list[i].fatigue += my_unit.attack_fatigue * GG_DATA_DEFAULT_STATUS_CHANGE_ATTACK_FATIGUE * 2;
				attack_list[i].assault_flag = true;
			}
			if (temp_add_attack_point > 0 && status_change_done == true) {				
	            attack_list[i].fatigue += my_unit.attack_fatigue * GG_DATA_DEFAULT_STATUS_CHANGE_ATTACK_FATIGUE * 2;
			}
			//if (attack_list[i].class_down_flag == true) {
	        //    attack_list[i].fatigue += my_unit.attack_fatigue;
			//}
			
			attack_list[i].no_passive_sum_damage = damage * 2;
			if (attack_list[i].list == undefined) {
	            attack_list[i].list = [];
			}
            attack_list[i].list.push({
				damage: damage
				,second_damage: damage
				,status_change_done: enemy_status_change_done
				,attacked_army_number: army_number
				,attacked_unit_number: unit_number
				,x: army[attack_list[i].army_number].unit[attack_list[i].unit_number].x
				,y: army[attack_list[i].army_number].unit[attack_list[i].unit_number].y
				,army_number: attack_list[i].army_number
				,unit_number: attack_list[i].unit_number
				,exp: 1
				,fatigue: 0
				,class_down_flag: attack_list[i].class_down_flag
			});
            attack_list[i].exp = damage * 2;
            //
            ///////////////////////
            for (var j = 0; j < GG_PARTS_ATTACK_NORMAL.length; j++) {
                if (x + GG_PARTS_ATTACK_NORMAL[j].x == army[attack_list[i].army_number].unit[attack_list[i].unit_number].x &&
                    y + GG_PARTS_ATTACK_NORMAL[j].y == army[attack_list[i].army_number].unit[attack_list[i].unit_number].y) {
                    attack_list[i].route = GG_PARTS_ATTACK_NORMAL[j].route;
                    break;
                }
            }
            //attack_list[i].route = route;
        } else if (attack_type == GG_DATA_ATTACK_TYPE_CHAINE) {

            enemy_unit = army[attack_list[i].army_number].unit[attack_list[i].unit_number];
            xabs = Math.abs(org_x - enemy_unit.x);
            yabs = Math.abs(org_y - enemy_unit.y);
            if (yabs > xabs) {
                org_distance = yabs;
            } else {
                org_distance = (xabs + yabs) / 2;
            }
			// assault check
			temp_add_attack_point = 0;
			if (attack_max_range + temp_move_point / 2 + 1 <= org_distance) {
				temp_add_attack_point = GG_DATA_DEFAULT_STATUS_CHANGE_ATTACK_POINT;
			}
			status_change_done = false;
			if (temp_add_attack_point == 0 &&
				my_unit.status_changed == GG_DATA_STATUS_CHANGE_UP_ATTACK) {
				status_change_done = true;
				//temp_add_attack_point = Math.floor(my_unit.attack_point * GG_DATA_DEFAULT_STATUS_CHANGE_ATTACK_POINT);
				temp_add_attack_point = GG_DATA_DEFAULT_STATUS_CHANGE_ATTACK_POINT;
			}
			if (my_unit.status_changed == GG_DATA_STATUS_CHANGE_DOWN_ATTACK) {
				status_change_done = true;
				temp_add_attack_point -= GG_DATA_DEFAULT_STATUS_CHANGE_ATTACK_POINT;
			}

			// class down
			attack_list[i].class_down_flag = false;

			if (enemy_unit.status_changed == GG_DATA_STATUS_CHANGE_UP_DEFENCE) {
				temp_enemy_defence_point = enemy_unit.defence_point + GG_DATA_DEFAULT_STATUS_CHANGE_DEFENCE_POINT;
				enemy_status_change_done = true;
			} else {
				temp_enemy_defence_point = enemy_unit.defence_point;
				enemy_status_change_done = false;
			}
			if (attack_list[i].enemy_push_now_flag == true) {
				temp_x = attack_list[i].move_end_x;
				temp_y = attack_list[i].move_end_y;
			} else {
				temp_x = x;
				temp_y = y;
			}
			
            damage = (my_unit.attack_point + temp_add_attack_point)  +
                     map[temp_y][temp_x] * 2 -
                     //enemy_unit.defence_point -
                     temp_enemy_defence_point -
                     map[enemy_unit.y + GG_PARTS_CHAIN_PATTERN[attack_list[i].chain_route].defence_y][enemy_unit.x + GG_PARTS_CHAIN_PATTERN[attack_list[i].chain_route].defence_x] * 2;
            if (damage < 0) {
                damage = 0;
            }

            attack_list[i].fatigue = my_unit.attack_fatigue + my_unit.attack_fatigue;
			attack_list[i].assault_flag = false;
			attack_list[i].status_change_done = status_change_done;
			if (temp_add_attack_point > 0 && status_change_done == false) {
	            attack_list[i].fatigue += my_unit.attack_fatigue * GG_DATA_DEFAULT_STATUS_CHANGE_ATTACK_FATIGUE;
				attack_list[i].assault_flag = true;
			}
			if (temp_add_attack_point > 0 && status_change_done == true) {
	            attack_list[i].fatigue += my_unit.attack_fatigue * GG_DATA_DEFAULT_STATUS_CHANGE_ATTACK_FATIGUE;
			}
			attack_list[i].no_passive_sum_damage = damage;

			if (attack_list[i].list == undefined) {
	            attack_list[i].list = [];
			}
            attack_list[i].list.push({
				damage: damage
				,status_change_done: enemy_status_change_done
				,attacked_army_number: army_number
				,attacked_unit_number: unit_number
				,x: temp_x + GG_PARTS_CHAIN_PATTERN[attack_list[i].chain_route].moved_x
				,y: temp_y + GG_PARTS_CHAIN_PATTERN[attack_list[i].chain_route].moved_y	
				,army_number: attack_list[i].army_number
				,unit_number: attack_list[i].unit_number
				,exp: 1
				,fatigue: 0
				,class_down_flag: attack_list[i].class_down_flag
				});
            attack_list[i].exp = damage;

            attack_list[i].route = GG_PARTS_CHAIN_PATTERN[attack_list[i].chain_route].route.attack;
            /////
			if (attack_list[i].move_list == undefined) {
	            attack_list[i].move_list = [];
			}
            attack_list[i].move_list.push({
                            army_number: attack_list[i].list[attack_list[i].list.length - 1].army_number ,
                            unit_number: attack_list[i].list[attack_list[i].list.length - 1].unit_number,
                            start_x: army[attack_list[i].list[attack_list[i].list.length - 1].army_number].unit[attack_list[i].list[attack_list[i].list.length - 1].unit_number].x,
                            start_y: army[attack_list[i].list[attack_list[i].list.length - 1].army_number].unit[attack_list[i].list[attack_list[i].list.length - 1].unit_number].y,
                            route: GG_PARTS_CHAIN_PATTERN[attack_list[i].chain_route].route.defence,
							//avoidance_now_flag: false,
							//cover_now_flag: false,
							//friend_pull_now_flag: false
							});
            
        } else if (attack_type == GG_DATA_ATTACK_TYPE_BOW ||
                   attack_type == GG_DATA_ATTACK_TYPE_LONGBOW ||
				   attack_type == GG_DATA_ATTACK_TYPE_WITCH ||
				   attack_type == GG_DATA_ATTACK_TYPE_TAKT ||
				   attack_type == GG_DATA_ATTACK_TYPE_HARP) {

            enemy_unit = army[attack_list[i].army_number].unit[attack_list[i].unit_number];
            xabs = Math.abs(org_x - enemy_unit.x);
            yabs = Math.abs(org_y - enemy_unit.y);
            if (yabs > xabs) {
                org_distance = yabs;
            } else {
                org_distance = (xabs + yabs) / 2;
            }
			
            //var avoidance_now_flag = null;
			temp_add_attack_point = 0;

			if (attack_max_range + temp_move_point / 2 + 1 <= org_distance) {
				temp_add_attack_point = GG_DATA_DEFAULT_STATUS_CHANGE_ATTACK_POINT;
			}
			status_change_done = false;
			if (temp_add_attack_point == 0 &&
				my_unit.status_changed == GG_DATA_STATUS_CHANGE_UP_ATTACK) {
				status_change_done = true;
				//temp_add_attack_point = Math.floor(my_unit.attack_point * GG_DATA_DEFAULT_STATUS_CHANGE_ATTACK_POINT);
				temp_add_attack_point = GG_DATA_DEFAULT_STATUS_CHANGE_ATTACK_POINT;
			}
			if (my_unit.status_changed == GG_DATA_STATUS_CHANGE_DOWN_ATTACK) {
				status_change_done = true;
				temp_add_attack_point -= GG_DATA_DEFAULT_STATUS_CHANGE_ATTACK_POINT;
			}
			// class down
			attack_list[i].class_down_flag = false;
			if (attack_max_range + temp_move_point / 2 + 1 <= org_distance &&
				map[enemy_unit.y][enemy_unit.x] - map[y][x] >= 2) {
				if ((my_unit.type > GG_DATA_CHAR_MIDDLE_UNIT &&
					 enemy_unit.type < GG_DATA_CHAR_MIDDLE_UNIT) ||
					(my_unit.type > GG_DATA_CHAR_HIGH_UNIT &&
					 enemy_unit.type < GG_DATA_CHAR_HIGH_UNIT)) {
					attack_list[i].class_down_flag = true;
				}
			}			
			if (enemy_unit.status_changed == GG_DATA_STATUS_CHANGE_UP_DEFENCE) {
				temp_enemy_defence_point = enemy_unit.defence_point + GG_DATA_DEFAULT_STATUS_CHANGE_DEFENCE_POINT;
				enemy_status_change_done = true;
			} else {
				temp_enemy_defence_point = enemy_unit.defence_point;
				enemy_status_change_done = false;
			}
			if (attack_list[i].enemy_push_now_flag == true) {
				temp_x = attack_list[i].move_end_x;
				temp_y = attack_list[i].move_end_y;
			} else {
				temp_x = x;
				temp_y = y;
				
			}

            damage = (my_unit.attack_point + temp_add_attack_point)  + map[temp_y][temp_x] * 2 -
                      //enemy_unit.defence_point -
                      temp_enemy_defence_point -
                      map[enemy_unit.y][enemy_unit.x] * 2;
            if (damage < 0) {
                damage = 0;
            }
			attack_list[i].x = x;
			attack_list[i].y = y;
            attack_list[i].fatigue = my_unit.attack_fatigue;
			attack_list[i].assault_flag = false;
			attack_list[i].status_change_done = status_change_done;
			if (temp_add_attack_point > 0 && status_change_done == false) {
	            attack_list[i].fatigue += my_unit.attack_fatigue * GG_DATA_DEFAULT_STATUS_CHANGE_ATTACK_FATIGUE;
				attack_list[i].assault_flag = true;
			}
			if (temp_add_attack_point > 0 && status_change_done == true) {
	            attack_list[i].fatigue += my_unit.attack_fatigue * GG_DATA_DEFAULT_STATUS_CHANGE_ATTACK_FATIGUE;
			}
			//if (attack_list[i].class_down_flag == true) {
	        //    attack_list[i].fatigue += my_unit.attack_fatigue;
			//}
			attack_list[i].no_passive_sum_damage = damage;

			if (attack_list[i].list == undefined) {
	            attack_list[i].list = [];
			}
            attack_list[i].list.push({
				damage: damage
				,status_change_done: enemy_status_change_done
				,attacked_army_number: army_number
				,attacked_unit_number: unit_number
				,x: army[attack_list[i].army_number].unit[attack_list[i].unit_number].x
				,y: army[attack_list[i].army_number].unit[attack_list[i].unit_number].y
				,army_number: attack_list[i].army_number
				,unit_number: attack_list[i].unit_number
				,fatigue: 0
				,exp: 1
				,class_down_flag: attack_list[i].class_down_flag
			});
			
            attack_list[i].exp = damage;
            attack_list[i].end_x = army[attack_list[i].army_number].unit[attack_list[i].unit_number].x;
            attack_list[i].end_y = army[attack_list[i].army_number].unit[attack_list[i].unit_number].y;

        } else if (attack_type == GG_DATA_ATTACK_TYPE_WIND ||
				   attack_type == GG_DATA_ATTACK_TYPE_THUNDER) {

            var enemy_unit = army[attack_list[i].army_number].unit[attack_list[i].unit_number];
            xabs = Math.abs(org_x - enemy_unit.x);
            yabs = Math.abs(org_y - enemy_unit.y);
            if (yabs > xabs) {
                org_distance = yabs;
            } else {
                org_distance = (xabs + yabs) / 2;
            }
			
            //var avoidance_now_flag = null;
			temp_add_attack_point = 0;
			if (attack_max_range + temp_move_point / 2 + 1 <= org_distance) {
				temp_add_attack_point = GG_DATA_DEFAULT_STATUS_CHANGE_ATTACK_POINT;
			}
			status_change_done = false;
			if (temp_add_attack_point == 0 &&
				my_unit.status_changed == GG_DATA_STATUS_CHANGE_UP_ATTACK) {
				status_change_done = true;
				//temp_add_attack_point = Math.floor(my_unit.attack_point * GG_DATA_DEFAULT_STATUS_CHANGE_ATTACK_POINT);
				temp_add_attack_point = GG_DATA_DEFAULT_STATUS_CHANGE_ATTACK_POINT;
			}
			if (my_unit.status_changed == GG_DATA_STATUS_CHANGE_DOWN_ATTACK) {
				status_change_done = true;
				temp_add_attack_point -= GG_DATA_DEFAULT_STATUS_CHANGE_ATTACK_POINT;
			}

			attack_list[i].class_down_flag = false;
			if (enemy_unit.status_changed == GG_DATA_STATUS_CHANGE_UP_DEFENCE) {
				temp_enemy_defence_point = enemy_unit.defence_point + GG_DATA_DEFAULT_STATUS_CHANGE_DEFENCE_POINT;
				enemy_status_change_done = true;
			} else {
				temp_enemy_defence_point = enemy_unit.defence_point;
				enemy_status_change_done = false;
			}
			if (attack_list[i].enemy_push_now_flag == true) {
				temp_x = attack_list[i].move_end_x;
				temp_y = attack_list[i].move_end_y;
			} else {
				temp_x = x;
				temp_y = y;
			}

            damage = (my_unit.attack_point + temp_add_attack_point) + map[temp_y][temp_x] * 2 -
                      temp_enemy_defence_point -
                      map[enemy_unit.y][enemy_unit.x] * 2;
            if (damage < 0) {
                damage = 0;
            }
			temp_exp = damage;
			attack_list[i].attack_area = [];
			attack_list[i].attack_area.push({x: enemy_unit.x, y: enemy_unit.y});
            attack_list[i].fatigue = my_unit.attack_fatigue;
			attack_list[i].assault_flag = false;
			attack_list[i].status_change_done = status_change_done;
			//if (temp_add_attack_point > 0 && status_change_done == false) {
	        //    attack_list[i].fatigue += my_unit.attack_fatigue * 2;
			//	attack_list[i].assault_flag = true;
			//}
			//if (temp_add_attack_point > 0 && status_change_done == true) {
	        //    attack_list[i].fatigue += my_unit.attack_fatigue * GG_DATA_DEFAULT_STATUS_CHANGE_ATTACK_FATIGUE;
			//}
			attack_list[i].no_passive_sum_damage = damage;
			if (attack_list[i].list == undefined) {
	            attack_list[i].list = [];
			}
            attack_list[i].list.push({
				damage: damage
				,status_change_done: enemy_status_change_done
				,attacked_army_number: army_number
				,attacked_unit_number: unit_number				
				,x: army[attack_list[i].army_number].unit[attack_list[i].unit_number].x
				,y: army[attack_list[i].army_number].unit[attack_list[i].unit_number].y
				,army_number: attack_list[i].army_number
				,unit_number: attack_list[i].unit_number
				,fatigue: 0
				,exp: 1
				,class_down_flag: attack_list[i].class_down_flag
				});
			//
            if (attack_type == GG_DATA_ATTACK_TYPE_THUNDER ) {
                var list = GG_PARTS_ATTACK_THUNDER;
            } else if (attack_type == GG_DATA_ATTACK_TYPE_WIND) {
                var list = GG_PARTS_ATTACK_WIND;
            }
            var count = attack_list[i].list.length - 1;

            for (var j = 0; j < list.length; j++) {
                enemy_unit = army[attack_list[i].army_number].unit[attack_list[i].unit_number];

                if (list[j].x == enemy_unit.x - temp_x &&
                    list[j].y == enemy_unit.y - temp_y) {

					if (attack_type == GG_DATA_ATTACK_TYPE_WIND) {
						attack_list[i].wind_id = j;
					}
                    //var temp_sum_damage = 0; 
                    for (var k = 0; k < list[j].list.length; k++) {
						attack_list[i].attack_area.push({x: temp_x + list[j].list[k].x, y: temp_y + list[j].list[k].y});

                        var check_enemy = false;
                        for (var l = 0; l < army.length; l++) {
                            for (var m = 0;m < army[l].unit.length; m++) {
                                if ((l == army_number && m == unit_number) ||
									army[l].unit[m].dead_count_down != -1) {
                                    continue;
                                }
                                if (army[l].unit[m].x == temp_x + list[j].list[k].x &&
                                    army[l].unit[m].y == temp_y + list[j].list[k].y) {
                                    count++;
									if (army[l].unit[m].status_changed == GG_DATA_STATUS_CHANGE_UP_DEFENCE) {
										temp_enemy_defence_point = army[l].unit[m].defence_point + GG_DATA_DEFAULT_STATUS_CHANGE_DEFENCE_POINT;
										enemy_status_change_done = true;
									} else {
										temp_enemy_defence_point = army[l].unit[m].defence_point;
										enemy_status_change_done = false;
									}

                                    damage = (my_unit.attack_point + temp_add_attack_point) 
									          + map[temp_y][temp_x] * 2 -
                                             //army[l].unit[m].defence_point -
                                             temp_enemy_defence_point -
                                             map[army[l].unit[m].y][army[l].unit[m].x] * 2;
                                    if (damage < 0) {
                                        damage = 0;
                                    }
                                    if (l != army_number) {
                                        temp_exp += damage;
                                    }
									attack_list[i].list[count] = {};
                                    attack_list[i].list[count].damage = damage;
                                    attack_list[i].list[count].status_change_done = enemy_status_change_done;
									attack_list[i].list[count].attacked_army_number = army_number;
									attack_list[i].list[count].attacked_unit_number = unit_number;

                                    attack_list[i].list[count].army_number = l;
                                    attack_list[i].list[count].unit_number = m;
                                    attack_list[i].list[count].fatigue = 0;
                                    if (l != army_number) {
                                        attack_list[i].list[count].exp = 1;
										attack_list[i].no_passive_sum_damage += damage;
                                    } else {
                                        attack_list[i].list[count].exp = 0;
										attack_list[i].no_passive_sum_damage -= damage;
                                    }
                                    check_enemy = true;
                                    break;
                                }
                            }
                            if (check_enemy == true) {
                                break;
                            }
                        }
                    }
                    break;
                }
                //
            }
            /////

            attack_list[i].exp = temp_exp;
            attack_list[i].fatigue = (count + 1) * my_unit.attack_fatigue;
			attack_list[i].assault_flag = false;
			if (temp_add_attack_point > 0 && status_change_done == false) {
	            attack_list[i].fatigue += (count + 1) * my_unit.attack_fatigue * GG_DATA_DEFAULT_STATUS_CHANGE_ATTACK_FATIGUE;
				attack_list[i].assault_flag = true;
			}
			if (temp_add_attack_point > 0 && status_change_done == true) {
	            attack_list[i].fatigue += (count + 1) * my_unit.attack_fatigue * GG_DATA_DEFAULT_STATUS_CHANGE_ATTACK_FATIGUE;
			}
            
            attack_list[i].end_x = army[attack_list[i].army_number].unit[attack_list[i].unit_number].x;
            attack_list[i].end_y = army[attack_list[i].army_number].unit[attack_list[i].unit_number].y;
            //attack_list[i].range = attack_max_range;

        } else if (attack_type == GG_DATA_ATTACK_TYPE_LASER) {

            var enemy_unit = army[attack_list[i].army_number].unit[attack_list[i].unit_number];
            xabs = Math.abs(org_x - enemy_unit.x);
            yabs = Math.abs(org_y - enemy_unit.y);
            if (yabs > xabs) {
                org_distance = yabs;
            } else {
                org_distance = (xabs + yabs) / 2;
            }
			
			temp_add_attack_point = 0;
			if (attack_max_range + temp_move_point / 2 + 1 <= org_distance) {
				temp_add_attack_point = GG_DATA_DEFAULT_STATUS_CHANGE_ATTACK_POINT;
			}
			status_change_done = false;
			if (temp_add_attack_point == 0 &&
				my_unit.status_changed == GG_DATA_STATUS_CHANGE_UP_ATTACK) {
				status_change_done = true;
				temp_add_attack_point = GG_DATA_DEFAULT_STATUS_CHANGE_ATTACK_POINT;
			}
			if (my_unit.status_changed == GG_DATA_STATUS_CHANGE_DOWN_ATTACK) {
				status_change_done = true;
				temp_add_attack_point -= GG_DATA_DEFAULT_STATUS_CHANGE_ATTACK_POINT;
			}

			attack_list[i].class_down_flag = false;
			if (enemy_unit.status_changed == GG_DATA_STATUS_CHANGE_UP_DEFENCE) {
				temp_enemy_defence_point = enemy_unit.defence_point + GG_DATA_DEFAULT_STATUS_CHANGE_DEFENCE_POINT;
				enemy_status_change_done = true;
			} else {
				temp_enemy_defence_point = enemy_unit.defence_point;
				enemy_status_change_done = false;
			}
			if (attack_list[i].enemy_push_now_flag == true) {
				temp_x = attack_list[i].move_end_x;
				temp_y = attack_list[i].move_end_y;
			} else {
				temp_x = x;
				temp_y = y;
			}

            damage = (my_unit.attack_point + temp_add_attack_point) + map[temp_y][temp_x] * 2 -
                      temp_enemy_defence_point -
                      map[enemy_unit.y][enemy_unit.x] * 2;
            if (damage < 0) {
                damage = 0;
            }
			temp_exp = damage;
            attack_list[i].fatigue = my_unit.attack_fatigue;
			attack_list[i].assault_flag = false;
			attack_list[i].status_change_done = status_change_done;

			attack_list[i].no_passive_sum_damage = damage;
			if (attack_list[i].list == undefined) {
	            attack_list[i].list = [];
			}
            attack_list[i].list.push({
				damage: damage
				,status_change_done: enemy_status_change_done
				,attacked_army_number: army_number
				,attacked_unit_number: unit_number
				,x: army[attack_list[i].army_number].unit[attack_list[i].unit_number].x
				,y: army[attack_list[i].army_number].unit[attack_list[i].unit_number].y
				,army_number: attack_list[i].army_number
				,unit_number: attack_list[i].unit_number
				,fatigue: 0
				,exp: 1
				,class_down_flag: attack_list[i].class_down_flag
				});
			//
			var diff_x = enemy_unit.x - temp_x;
			var diff_y = enemy_unit.y - temp_y;
			var target_x, target_y;
			var end_x = enemy_unit.x;
			var end_y = enemy_unit.y;
            var count = attack_list[i].list.length - 1;			
			
			for (var j = 2; j <= GG_DATA_ATTACK_LASER_RENAGE; j++) {
				target_x = temp_x + diff_x * j;
				target_y = temp_y + diff_y * j;
				if (map[target_y][target_x] == -1) {
					break;
				}
				end_x = target_x;
				end_y = target_y;
				
                var check_enemy = false;
                for (var l = 0; l < army.length; l++) {
                    for (var m = 0; m < army[l].unit.length; m++) {
                        if ((l == army_number && m == unit_number) ||
							army[l].unit[m].dead_count_down != -1) {
                            continue;
                        }
                        if (army[l].unit[m].x == target_x &&
                            army[l].unit[m].y == target_y) {
                            count++;
							if (army[l].unit[m].status_changed == GG_DATA_STATUS_CHANGE_UP_DEFENCE) {
								temp_enemy_defence_point = army[l].unit[m].defence_point + GG_DATA_DEFAULT_STATUS_CHANGE_DEFENCE_POINT;
								enemy_status_change_done = true;
							} else {
								temp_enemy_defence_point = army[l].unit[m].defence_point;
								enemy_status_change_done = false;
							}

                            damage = (my_unit.attack_point + temp_add_attack_point) 
									          + map[temp_y][temp_x] * 2 -
                                             temp_enemy_defence_point -
                                             map[army[l].unit[m].y][army[l].unit[m].x] * 2;
                            if (damage < 0) {
                                damage = 0;
                            }
                            if (l != army_number) {
                                temp_exp += damage;
                            }
							attack_list[i].list[count] = {};
                            attack_list[i].list[count].damage = damage;
                            attack_list[i].list[count].status_change_done = enemy_status_change_done;
							attack_list[i].list[count].attacked_army_number = army_number;
							attack_list[i].list[count].attacked_unit_number = unit_number;

                            attack_list[i].list[count].army_number = l;
                            attack_list[i].list[count].unit_number = m;
                            attack_list[i].list[count].fatigue = 0;
                            if (l != army_number) {
                                attack_list[i].list[count].exp = 1;
								attack_list[i].no_passive_sum_damage += damage;
                            } else {
                                attack_list[i].list[count].exp = 0;
								attack_list[i].no_passive_sum_damage -= damage;
                            }
                            check_enemy = true;
                            break;
                        }
                    }
                    if (check_enemy == true) {
                        break;
                    }
                }
			}
            

            attack_list[i].exp = temp_exp;
            attack_list[i].fatigue = (count + 1) * my_unit.attack_fatigue;
			attack_list[i].assault_flag = false;
			if (temp_add_attack_point > 0 && status_change_done == false) {
	            attack_list[i].fatigue += (count + 1) * my_unit.attack_fatigue * GG_DATA_DEFAULT_STATUS_CHANGE_ATTACK_FATIGUE;
				attack_list[i].assault_flag = true;
			}
			if (temp_add_attack_point > 0 && status_change_done == true) {
	            attack_list[i].fatigue += (count + 1) * my_unit.attack_fatigue * GG_DATA_DEFAULT_STATUS_CHANGE_ATTACK_FATIGUE;
			}
			
            attack_list[i].end_x = end_x;
            attack_list[i].end_y = end_y;
                     
        } else if (attack_type == GG_DATA_ATTACK_TYPE_AX || attack_type == GG_DATA_ATTACK_TYPE_SPEAR) {
            //
            enemy_unit = army[attack_list[i].army_number].unit[attack_list[i].unit_number];
			
			xabs = Math.abs(org_x - enemy_unit.x);
            yabs = Math.abs(org_y - enemy_unit.y);
            if (yabs > xabs) {
                org_distance = yabs;
            } else {
                org_distance = (xabs + yabs) / 2;
            }
			// assault check
			temp_add_attack_point = 0;
			if (attack_max_range + temp_move_point / 2 + 1 <= org_distance) {
				temp_add_attack_point = GG_DATA_DEFAULT_STATUS_CHANGE_ATTACK_POINT;
			}
			status_change_done = false;
			if (temp_add_attack_point == 0 &&
				my_unit.status_changed == GG_DATA_STATUS_CHANGE_UP_ATTACK) {
				status_change_done = true;
				//temp_add_attack_point = Math.floor(my_unit.attack_point / 2);
				temp_add_attack_point = GG_DATA_DEFAULT_STATUS_CHANGE_ATTACK_POINT;
			}
			if (my_unit.status_changed == GG_DATA_STATUS_CHANGE_DOWN_ATTACK) {
				status_change_done = true;
				temp_add_attack_point -= GG_DATA_DEFAULT_STATUS_CHANGE_ATTACK_POINT;
			}

			attack_list[i].class_down_flag = false;
			if (enemy_unit.status_changed == GG_DATA_STATUS_CHANGE_UP_DEFENCE) {
				temp_enemy_defence_point = enemy_unit.defence_point + GG_DATA_DEFAULT_STATUS_CHANGE_DEFENCE_POINT;
				enemy_status_change_done = true;
			} else {
				temp_enemy_defence_point = enemy_unit.defence_point;
				enemy_status_change_done = false;
			}
			if (attack_list[i].enemy_push_now_flag == true) {
				temp_x = attack_list[i].move_end_x;
				temp_y = attack_list[i].move_end_y;
			} else {
				temp_x = x;
				temp_y = y;
			}

            damage = (my_unit.attack_point + temp_add_attack_point) + map[temp_y][temp_x] * 2 -
                     //enemy_unit.defence_point -
                     temp_enemy_defence_point -
                     map[enemy_unit.y][enemy_unit.x] * 2;
            if (damage < 0) {
                damage = 0;
            }
			attack_list[i].no_passive_sum_damage = damage;
			if (attack_list[i].list == undefined) {
	            attack_list[i].list = [];
			}
            attack_list[i].list.push({
				damage: damage
				,status_change_done: enemy_status_change_done
				,attacked_army_number: army_number
				,attacked_unit_number: unit_number
				,x: army[attack_list[i].army_number].unit[attack_list[i].unit_number].x
				,y: army[attack_list[i].army_number].unit[attack_list[i].unit_number].y
				,army_number: attack_list[i].army_number
				,unit_number: attack_list[i].unit_number
				,fatigue: 0
				,exp: 1
				,class_down_flag: attack_list[i].class_down_flag
				});
            var temp_exp = damage;
            var route = [];
            if (attack_type == GG_DATA_ATTACK_TYPE_AX ) {
                var list = GG_PARTS_ATTACK_AX;
            } else if (attack_type == GG_DATA_ATTACK_TYPE_SPEAR) {
                var list = GG_PARTS_ATTACK_SPEAR;
            }
            var count = attack_list[i].list.length - 1;
            for (var j = 0; j < list.length; j++) {
                var enemy_unit = army[attack_list[i].army_number].unit[attack_list[i].unit_number];
                
                if (list[j].x == enemy_unit.x - temp_x &&
                    list[j].y == enemy_unit.y - temp_y) {
                    route = list[j].route;
                    //var temp_sum_damage = 0; 
                    for (var k = 0; k < list[j].list.length; k++) {
                        var check_enemy = false;
                        for (var l = 0; l < army.length; l++) {
                            for (var m = 0;m < army[l].unit.length; m++) {
                                if ((l == army_number && m == unit_number) ||
									army[l].unit[m].dead_count_down != -1) {
                                    continue;
                                }
                                if (army[l].unit[m].x == temp_x + list[j].list[k].x &&
                                    army[l].unit[m].y == temp_y + list[j].list[k].y) {
                                    count++;
									if (army[l].unit[m].status_changed == GG_DATA_STATUS_CHANGE_UP_DEFENCE) {
										temp_enemy_defence_point = army[l].unit[m].defence_point + GG_DATA_DEFAULT_STATUS_CHANGE_DEFENCE_POINT;
										enemy_status_change_done = true;
									} else {
										temp_enemy_defence_point = army[l].unit[m].defence_point;
										enemy_status_change_done = false;
									}
                                    damage = (my_unit.attack_point + temp_add_attack_point)  + map[temp_y][temp_x] * 2 -
                                             //army[l].unit[m].defence_point -
                                             temp_enemy_defence_point -
                                             map[army[l].unit[m].y][army[l].unit[m].x] * 2;
                                    if (damage < 0) {
                                        damage = 0;
                                    }
                                    if (l != army_number) {
                                        //temp_sum_damage -= damage;
                                            
                                    //} else {
                                        //temp_sum_damage += damage;
                                        temp_exp += damage;
                                    }
									attack_list[i].list[count] = {};
                                    attack_list[i].list[count].damage = damage;
                                    attack_list[i].list[count].status_change_done = enemy_status_change_done;
									
									attack_list[i].list[count].attacked_army_number = army_number;
									attack_list[i].list[count].attacked_unit_number = unit_number;

                                    attack_list[i].list[count].army_number = l;
                                    attack_list[i].list[count].unit_number = m;
                                    attack_list[i].list[count].fatigue = 0;

                                    if (l != army_number) {
                                        attack_list[i].list[count].exp = 1;
										attack_list[i].no_passive_sum_damage += damage;
                                    } else {
                                        attack_list[i].list[count].exp = 0;
										attack_list[i].no_passive_sum_damage -= damage;
                                    }
                                    check_enemy = true;
                                    break;
                                }
                            }
                            if (check_enemy == true) {
                                break;
                            }
                        }
                    }
                    break;
                }
                //
            }
            /////

            attack_list[i].exp = temp_exp;
            attack_list[i].fatigue = (count + 1) * my_unit.attack_fatigue;
			attack_list[i].assault_flag = false;
			attack_list[i].status_change_done = status_change_done;
			if (temp_add_attack_point > 0 && status_change_done == false) {
	            attack_list[i].fatigue += (count + 1) * my_unit.attack_fatigue * GG_DATA_DEFAULT_STATUS_CHANGE_ATTACK_FATIGUE;
				attack_list[i].assault_flag = true;
			}
			if (temp_add_attack_point > 0 && status_change_done == true) {
	            attack_list[i].fatigue += (count + 1) * my_unit.attack_fatigue * GG_DATA_DEFAULT_STATUS_CHANGE_ATTACK_FATIGUE;
			}

            attack_list[i].route = route;
        }
    }

    ///////////////////////
    var target;
	var counter_temp_x, counter_temp_y;
    // avoidance & counter & attack_down
    for (var i = 0; i < attack_list.length; i++) {
        for (var j = 0; j < attack_list[i].list.length; j++) {
			if (attack_list[i].list[j].enemy_push_now_flag != undefined &&
				attack_list[i].list[j].enemy_push_now_flag == true) {
				continue;
			}
            if (attack_list[i].list[j].army_number == army_number) {
                continue;
            }
            target = army[attack_list[i].list[j].army_number].unit[attack_list[i].list[j].unit_number];
            xabs = Math.abs(x - target.x);
            yabs = Math.abs(y - target.y);
            if (yabs > xabs) {
                range = yabs;
            } else {
                range = (xabs + yabs) / 2;
            }
            if (target.defence_type == GG_DATA_DEFENCE_TYPE_AVOIDANCE &&
				target.fatigue == 0) {
				if (attack_type == GG_DATA_ATTACK_TYPE_THUNDER &&
					j == 0) {
					continue;
				}
				
				if (attack_type == GG_DATA_ATTACK_TYPE_CHAINE) {
					attack_list[i].select_x = army[attack_list[i].list[j].army_number].unit[attack_list[i].list[j].unit_number].x;
					attack_list[i].select_y = army[attack_list[i].list[j].army_number].unit[attack_list[i].list[j].unit_number].y;
				}
                attack_list[i].exp -= attack_list[i].list[j].damage;

				if (attack_type == GG_DATA_ATTACK_TYPE_SABER) {
	                attack_list[i].exp -= attack_list[i].list[j].second_damage;
	                attack_list[i].list[j].second_damage = 0;
	                attack_list[i].list[j].damage = 0;
				} else {
	                attack_list[i].list[j].damage = 0;
				}
                attack_list[i].list[j].status_change_done = false;
                attack_list[i].list[j].fatigue = target.defence_fatigue;
                attack_list[i].list[j].avoidance_now_flag = true;
                attack_list[i].list[j].class_down_flag = false;
                if (attack_list[i].list[j].x != null) {
                    attack_list[i].list[j].x = null;
                }
                if (attack_list[i].list[j].y != null) {
                    attack_list[i].list[j].y = null;
                }
                xabs = Math.abs(x - target.x);
                yabs = Math.abs(y - target.y);
                if (yabs > xabs) {
                    range = yabs;
                } else {
                    range = (xabs + yabs) / 2;
                }
                var pattern;
                if (range == 1 && attack_type == GG_DATA_ATTACK_TYPE_SPEAR) {
                    pattern = GG_PARTS_AVOID_MOVE_PATTERN.spear[0];
                } else if (attack_type == GG_DATA_ATTACK_TYPE_THUNDER) {
                    pattern = GG_PARTS_AVOID_MOVE_PATTERN.normal[0];
                } else if (attack_type == GG_DATA_ATTACK_TYPE_LASER) {
					pattern = GG_PARTS_AVOID_MOVE_PATTERN.laser[range - 1];
                } else {
                    pattern = GG_PARTS_AVOID_MOVE_PATTERN.normal[range - 1];
                }
				var temp_x = x;
				var temp_y = y;
				if (attack_type == GG_DATA_ATTACK_TYPE_THUNDER) {
					if (attack_list[i].enemy_push_now_flag == true) {
						temp_x = attack_list[i].list[1].x;
						temp_y = attack_list[i].list[1].y;
					} else {
						temp_x = attack_list[i].list[0].x;
						temp_y = attack_list[i].list[0].y;
						
					}
				}
                for (var k = 0; k < pattern.list.length; k++) {
                    if (pattern.list[k].x == temp_x - target.x &&
                        pattern.list[k].y == temp_y - target.y) {
                        
                        if (range == 2 && attack_type == GG_DATA_ATTACK_TYPE_CHAINE) {
                            attack_list[i].move_list[attack_list[i].move_list.length - 1].route= [
                                pattern.list[k].route[0],
                                6, pattern.list[k].route[1], 6
                                ];
							attack_list[i].move_list[attack_list[i].move_list.length - 1].avoidance_now_flag = true;
                            //attack_list[i].move_list[0].avoidance_now_flag = true;
                        } else {
                            attack_list[i].move_list.push({
                                army_number:attack_list[i].list[j].army_number ,
                                unit_number:attack_list[i].list[j].unit_number,
                                start_x:target.x,
                                start_y:target.y,
                                route: pattern.list[k].route,
                                avoidance_now_flag: true});                            
                        }
                        break;
                    }
                }
                
            } else if (target.defence_type == GG_DATA_DEFENCE_TYPE_COUNTER &&
					   target.fatigue == 0 && 
                       (range == 1 || attack_type == GG_DATA_ATTACK_TYPE_CHAINE) ) {

                attack_list[i].exp++;
                attack_list[i].list[j].fatigue += army[attack_list[i].list[j].army_number].unit[attack_list[i].list[j].unit_number].defence_fatigue;// +
				                                  //army[attack_list[i].list[j].army_number].unit[attack_list[i].list[j].unit_number].attack_fatigue;
                attack_list[i].list[j].counter_now_flag = true;
                
                ///////////

                //var temp_x, temp_y;
				if (attack_list[i].enemy_push_now_flag == true) {
					temp_x = attack_list[i].move_end_x;
					temp_y = attack_list[i].move_end_y;
				} else {
					temp_x = x;
					temp_y = y;
					
				}
				if (attack_list[i].list[j].x == null) {
                    counter_temp_x = target.x;
                    counter_temp_y = target.y;
                } else {
                    counter_temp_x = attack_list[i].list[j].x;
                    counter_temp_y = attack_list[i].list[j].y;                    
                }
				//status_change_done = false;
				temp_add_attack_point = 0;
								
                damage = target.attack_point + temp_add_attack_point+ map[counter_temp_y][counter_temp_x] * 2 -
                         my_unit.defence_point -
                         map[temp_y][temp_x] * 2;
                if (damage < 0) {
                    damage = 0;
                }
				attack_list[i].list[j].exp += damage;

                attack_list[i].damage = damage;
				
                attack_list[i].attacked_army_number = attack_list[i].list[j].army_number;
                attack_list[i].attacked_unit_number = attack_list[i].list[j].unit_number;
                
                ////////////////////////////////
                for (var k = 0; k < GG_PARTS_COUNTER_PATTERN.length; k++) {
                    if (GG_PARTS_COUNTER_PATTERN[k].x == temp_x - counter_temp_x &&
                        GG_PARTS_COUNTER_PATTERN[k].y == temp_y - counter_temp_y) {
                        
                        if (attack_type == GG_DATA_ATTACK_TYPE_CHAINE && range == 2) {
                            attack_list[i].move_list[attack_list[i].move_list.length - 1].route.push(GG_PARTS_COUNTER_PATTERN[k].route[2]);
                            attack_list[i].move_list[attack_list[i].move_list.length - 1].route.push(GG_PARTS_COUNTER_PATTERN[k].route[3]);
                            attack_list[i].move_list[attack_list[i].move_list.length - 1].counter_now_flag = true;
                        } else {
                            attack_list[i].move_list.push({
                                army_number:attack_list[i].list[j].army_number ,
                                unit_number:attack_list[i].list[j].unit_number,
                                start_x: target.x,
                                start_y: target.y,
                                route: GG_PARTS_COUNTER_PATTERN[k].route,
                                counter_now_flag: true});                            
                        }
                            
                        break;
                    }
                }
            } else if (target.defence_type == GG_DATA_DEFENCE_TYPE_ATTACK_DOWN &&
					   target.fatigue == 0 && 
                       (range == 1 || attack_type == GG_DATA_ATTACK_TYPE_CHAINE) ) {
                attack_list[i].exp++;
                attack_list[i].list[j].fatigue += army[attack_list[i].list[j].army_number].unit[attack_list[i].list[j].unit_number].defence_fatigue;// +
				                                  //army[attack_list[i].list[j].army_number].unit[attack_list[i].list[j].unit_number].attack_fatigue;
                attack_list[i].list[j].counter_now_flag = true;
                
                ///////////
				if (attack_list[i].enemy_push_now_flag == true) {
					temp_x = attack_list[i].move_end_x;
					temp_y = attack_list[i].move_end_y;
				} else {
					temp_x = x;
					temp_y = y;
					
				}
				if (attack_list[i].list[j].x == null) {
                    counter_temp_x = target.x;
                    counter_temp_y = target.y;
                } else {
                    counter_temp_x = attack_list[i].list[j].x;
                    counter_temp_y = attack_list[i].list[j].y;                    
                }

                //var temp_x, temp_y;
                //if (attack_list[i].list[j].x == null) {
                //    temp_x = target.x;
                //    temp_y = target.y;
                //} else {
                //    temp_x = attack_list[i].list[j].x;
                //    temp_y = attack_list[i].list[j].y;                    
                //}
								
				attack_list[i].list[j].exp += 1;
					   
				attack_list[i].status_change = GG_DATA_STATUS_CHANGE_DOWN_ATTACK;
                attack_list[i].list[j].fatigue += army[attack_list[i].list[j].army_number].unit[attack_list[i].list[j].unit_number].defence_fatigue;// +
                attack_list[i].list[j].attack_down_now_flag = true;
                attack_list[i].list[j].exp += 1;
				
				
				attack_list[i].status_changes = [];
				attack_list[i].status_changes.push({x: temp_x,
				                                       y: temp_y,
													   status_changed: GG_DATA_STATUS_CHANGE_DOWN_ATTACK,
  										               army_number: army_number,
										               unit_number: unit_number,
													   attack_down_flag: true
													   //enemy_x:attack_list[i].list[j].x,
													   //enemy_y:attack_list[i].list[j].y,
													   //enemy_army_number:attack_list[i].list[j].army_number,
													   //enemy_unit_number:attack_list[i].list[j].unit_number
					});	
                				
                ////////////////////////////////
                for (var k = 0; k < GG_PARTS_COUNTER_PATTERN.length; k++) {
                    if (GG_PARTS_COUNTER_PATTERN[k].x == temp_x - counter_temp_x &&
                        GG_PARTS_COUNTER_PATTERN[k].y == temp_y - counter_temp_y) {
                        
                        if (attack_type == GG_DATA_ATTACK_TYPE_CHAINE && range == 2) {
                            attack_list[i].move_list[attack_list[i].move_list.length - 1].route.push(GG_PARTS_COUNTER_PATTERN[k].route[2]);
                            attack_list[i].move_list[attack_list[i].move_list.length - 1].route.push(GG_PARTS_COUNTER_PATTERN[k].route[3]);
                            attack_list[i].move_list[attack_list[i].move_list.length - 1].attack_down_now_flag = true;
                        } else {
                            attack_list[i].move_list.push({
                                army_number:attack_list[i].list[j].army_number ,
                                unit_number:attack_list[i].list[j].unit_number,
                                start_x: target.x,
                                start_y: target.y,
                                route: GG_PARTS_COUNTER_PATTERN[k].route,
                                attack_down_now_flag: true});                            
                        }
                            
                        break;
                    }
                }
            }
        }
    }
    // cover
    var cover_list = [];
    for (var i = 0; i < attack_list.length; i++) {
        for (var j = 0; j < army.length; j++) {
            if (j == army_number) {
                continue;
            }
            for (var k = 0; k < army[j].unit.length; k++) {
                if (army[j].unit[k].defence_type != GG_DATA_DEFENCE_TYPE_COVER || army[j].unit[k].fatigue != 0
					|| army[j].unit[k].dead_count_down != -1) {
                    continue;
                }
                var check1 = true;
                for (var l = 0; l < attack_list[i].list.length; l++) {
                    if (attack_list[i].list[l].army_number == j &&
                        attack_list[i].list[l].unit_number == k) {
                        check1 = false;
                        break;
                    }
                }
                if (check1 == false) {
                    continue;
                }
                /////////////////////
                var cover1_unit = army[j].unit[k];
                cover_list.push({army_number: j, unit_number:k, list:[]});

                for (var l = 0; l < attack_list[i].list.length; l++) {
                    if (attack_list[i].list[l].army_number != j) {
                        continue;
                    }
                    if (attack_list[i].list[l].counter_now_flag == true ||
                        attack_list[i].list[l].avoidance_now_flag == true ||
                        attack_list[i].list[l].attack_down_now_flag == true ||
						attack_list[i].list[l].enemy_push_now_flag == true) {
                        continue;
                    }
                    var cover2_unit = army[attack_list[i].list[l].army_number].unit[attack_list[i].list[l].unit_number];
                    xabs = Math.abs(cover1_unit.x - cover2_unit.x);
                    yabs = Math.abs(cover1_unit.y - cover2_unit.y);
                    if (yabs > xabs) {
                        range = yabs;
                    } else {
                        range = (xabs + yabs) / 2;
                    }
                    if (range == 1) {
                        cover_list[cover_list.length - 1].list.push({army_number: attack_list[i].list[l].army_number,
                                                                     unit_number: attack_list[i].list[l].unit_number,
                                                                     hitpoint: cover2_unit.hitpoint,
                                                                     defence_point: cover2_unit.defence_point,
                                                                     exp: cover2_unit.exp,
                                                                     list_number: l,
                                                                     attack_list_number: i
                                                                     });
                    }
                }
            }
        }
    }
    
    for (var i = 0; i < cover_list.length; i++) {
        if (cover_list[i].list == undefined || cover_list[i].list.length == 0) {
            continue;
        }
        cover_list[i].list.sort(function(a, b) {
            if (a.hitpoint > b.hitpoint) {
                return 1;
            } else  if (a.hitpoint < b.hitpoint) {
                return -1;
            } else {
                if (a.defence_point > b.defence_point) {
                    return 1;
                } else  if (a.defence_point < b.defence_point) {
                    return -1;
                } else {
                    if (a.exp > b.exp) {
                        return 1;
                    } else  if (a.exp < b.exp) {
                        return -1;
                    } else {
                        if (a.unit_number > b.unit_number) {
                            return 1;
                        } else  {
                            return -1;
                        }
                    }
                }
            }
        });
        /////////////
        // move_list
        // damge
        // exp
        var cover2_unit = army[cover_list[i].list[0].army_number].unit[cover_list[i].list[0].unit_number];
		
		xabs = Math.abs(org_x - cover2_unit.x);
        yabs = Math.abs(org_y - cover2_unit.y);
        if (yabs > xabs) {
            org_distance = yabs;
        } else {
            org_distance = (xabs + yabs) / 2;
        }
		// assault check
		temp_add_attack_point = 0;
		if (attack_max_range + my_unit.move_point / 2 + 1 == org_distance) {
			temp_add_attack_point = Math.floor(my_unit.attack_point / 2);

		}
		if (temp_add_attack_point == 0 &&
			my_unit.status_changed == GG_DATA_STATUS_CHANGE_UP_ATTACK) {
			temp_add_attack_point = GG_DATA_DEFAULT_STATUS_CHANGE_ATTACK_POINT;
		}
		if (my_unit.status_changed == GG_DATA_STATUS_CHANGE_DOWN_ATTACK) {
			temp_add_attack_point -= GG_DATA_DEFAULT_STATUS_CHANGE_ATTACK_POINT;
		}
		
		if (army[cover_list[i].army_number].unit[cover_list[i].unit_number].status_changed == GG_DATA_STATUS_CHANGE_UP_DEFENCE) {
			temp_enemy_defence_point = army[cover_list[i].army_number].unit[cover_list[i].unit_number].defence_point + GG_DATA_DEFAULT_STATUS_CHANGE_DEFENCE_POINT;
			enemy_status_change_done = true;
		} else {
			temp_enemy_defence_point = army[cover_list[i].army_number].unit[cover_list[i].unit_number].defence_point;
			enemy_status_change_done = false;
		}
		//
		if (attack_list[cover_list[i].list[0].attack_list_number].enemy_push_now_flag == true) {
			temp_x = attack_list[cover_list[i].list[0].attack_list_number].move_end_x;
			temp_y = attack_list[cover_list[i].list[0].attack_list_number].move_end_y;
		} else {
			temp_x = x;
			temp_y = y;
		}
			
        damage = my_unit.attack_point + temp_add_attack_point + map[temp_y][temp_x] * 2 -
                 temp_enemy_defence_point -
                 map[cover2_unit.y][cover2_unit.x] * 2;
        if (damage < 0) {
            damage = 0;
        }		

        var attack_list_number = cover_list[i].list[0].attack_list_number;

        attack_list[attack_list_number].exp -= attack_list[attack_list_number].list[cover_list[i].list[0].list_number].damage;        
		if (attack_type == GG_DATA_ATTACK_TYPE_SABER) {
	        attack_list[attack_list_number].exp -= attack_list[attack_list_number].list[cover_list[i].list[0].list_number].second_damage;        
		}
        attack_list[attack_list_number].list[cover_list[i].list[0].list_number].damage = damage;
		if (attack_type == GG_DATA_ATTACK_TYPE_SABER) {
	        attack_list[attack_list_number].list[cover_list[i].list[0].list_number].second_damage = damage;
		}

        attack_list[attack_list_number].list[cover_list[i].list[0].list_number].status_change_done = enemy_status_change_done;
        attack_list[attack_list_number].list[cover_list[i].list[0].list_number].exp = 2;
		if (attack_type == GG_DATA_ATTACK_TYPE_SABER) {
	        attack_list[attack_list_number].list[cover_list[i].list[0].list_number].exp += 1;
		}
		if (attack_type == GG_DATA_ATTACK_TYPE_CHAINE) {
			attack_list[i].select_x = army[attack_list[i].list[0].army_number].unit[attack_list[i].list[0].unit_number].x;
			attack_list[i].select_y = army[attack_list[i].list[0].army_number].unit[attack_list[i].list[0].unit_number].y;
		}

        attack_list[attack_list_number].list[cover_list[i].list[0].list_number].cover_before_army_number = attack_list[attack_list_number].list[cover_list[i].list[0].list_number].army_number;
        attack_list[attack_list_number].list[cover_list[i].list[0].list_number].cover_before_unit_number = attack_list[attack_list_number].list[cover_list[i].list[0].list_number].unit_number;

        attack_list[attack_list_number].list[cover_list[i].list[0].list_number].army_number = cover_list[i].army_number;
        attack_list[attack_list_number].list[cover_list[i].list[0].list_number].unit_number = cover_list[i].unit_number;
        attack_list[attack_list_number].list[cover_list[i].list[0].list_number].cover_now_flag = true;
        attack_list[attack_list_number].list[cover_list[i].list[0].list_number].fatigue += army[cover_list[i].army_number].unit[cover_list[i].unit_number].defence_fatigue;

        if (attack_list[attack_list_number].list[cover_list[i].list[0].list_number].x != null) {
            attack_list[attack_list_number].list[cover_list[i].list[0].list_number].x = null;
        }
        if (attack_list[attack_list_number].list[cover_list[i].list[0].list_number].y != null) {
            attack_list[attack_list_number].list[cover_list[i].list[0].list_number].y = null;
        }

        attack_list[attack_list_number].exp += damage;
		if (attack_type == GG_DATA_ATTACK_TYPE_SABER) {
	        attack_list[attack_list_number].exp += damage;
		}

        ////////////////
        for (var j = 0; j < GG_PARTS_COVER_PATTERN.length; j++) {
            if (cover2_unit.x == army[cover_list[i].army_number].unit[cover_list[i].unit_number].x + GG_PARTS_COVER_PATTERN[j].x &&
                cover2_unit.y == army[cover_list[i].army_number].unit[cover_list[i].unit_number].y + GG_PARTS_COVER_PATTERN[j].y) {
          
                if (attack_type == GG_DATA_ATTACK_TYPE_CHAINE) {
                    attack_list[attack_list_number].move_list[attack_list[attack_list_number].move_list.length - 1] ={
                            army_number: cover_list[i].army_number ,
                            unit_number: cover_list[i].unit_number,
                            start_x: army[cover_list[i].army_number].unit[cover_list[i].unit_number].x,
                            start_y: army[cover_list[i].army_number].unit[cover_list[i].unit_number].y,
                            route: GG_PARTS_COVER_PATTERN[j].route,
                            cover_now_flag: true};
                } else {
                    attack_list[attack_list_number].move_list.push({
                            army_number: cover_list[i].army_number ,
                            unit_number: cover_list[i].unit_number,
                            start_x: army[cover_list[i].army_number].unit[cover_list[i].unit_number].x,
                            start_y: army[cover_list[i].army_number].unit[cover_list[i].unit_number].y,
                            route: GG_PARTS_COVER_PATTERN[j].route,
                            cover_now_flag: true});
                    
                }
                break;
            }
        }
    }
	
	////////////////////////////////////////////////////////
	// scythe(friend pull)

	var scythe_result = gg.parts.check_friend_pull(attack_list, army, army_number, unit_number, map, x, y);
	for (var i = 0; i < scythe_result.length; i++) {
		for (var j = 0; j < scythe_result[i].army.length; j++) {
			if (scythe_result[i].army[j].pull_action == null) {
				continue;
			}
			// damage & list add
			if (attack_type == GG_DATA_ATTACK_TYPE_CHAINE) {
				attack_list[i].select_x = army[attack_list[i].list[scythe_result[i].army[j].pull_action.pulled.id].army_number].unit[attack_list[i].list[scythe_result[i].army[j].pull_action.pulled.id].unit_number].x;
				attack_list[i].select_y = army[attack_list[i].list[scythe_result[i].army[j].pull_action.pulled.id].army_number].unit[attack_list[i].list[scythe_result[i].army[j].pull_action.pulled.id].unit_number].y;
			}

			attack_list[i].exp -= attack_list[i].list[scythe_result[i].army[j].pull_action.pulled.id].damage;
			if (attack_type == GG_DATA_ATTACK_TYPE_SABER) {
				attack_list[i].exp -= attack_list[i].list[scythe_result[i].army[j].pull_action.pulled.id].second_damage;
			}
			attack_list[i].friend_pull_now_flag = true;
			attack_list[i].list[scythe_result[i].army[j].pull_action.pulled.id].damage = 0;
			if (attack_type == GG_DATA_ATTACK_TYPE_SABER) {
				attack_list[i].list[scythe_result[i].army[j].pull_action.pulled.id].second_damage = 0;
			}
			attack_list[i].list[scythe_result[i].army[j].pull_action.pulled.id].status_change_done = false;
			attack_list[i].list[scythe_result[i].army[j].pull_action.pulled.id].class_down_flag = false;
			attack_list[i].list[scythe_result[i].army[j].pull_action.pulled.id].exp = 0;
			attack_list[i].list[scythe_result[i].army[j].pull_action.pulled.id].x = scythe_result[i].army[j].pull_action.pulled.x;
			attack_list[i].list[scythe_result[i].army[j].pull_action.pulled.id].y = scythe_result[i].army[j].pull_action.pulled.y;
			attack_list[i].list[scythe_result[i].army[j].pull_action.pulled.id].friend_pull_now_flag = true;
			attack_list[i].list.push({army_number: scythe_result[i].army[j].pull_action.puller.army_number,
									  unit_number: scythe_result[i].army[j].pull_action.puller.unit_number,
									  x: scythe_result[i].army[j].pull_action.puller.x,
									  y: scythe_result[i].army[j].pull_action.puller.y,
									  fatigue: scythe_result[i].army[j].pull_action.puller.fatigue,
									  exp: 1, friend_pull_now_flag: true});
			
			if (attack_type == GG_DATA_ATTACK_TYPE_CHAINE) {
	            attack_list[i].move_list[attack_list[i].move_list.length - 1] = {
                            army_number: scythe_result[i].army[j].pull_action.pulled.army_number ,
                            unit_number: scythe_result[i].army[j].pull_action.pulled.unit_number,
                            start_x: army[scythe_result[i].army[j].pull_action.pulled.army_number].unit[scythe_result[i].army[j].pull_action.pulled.unit_number].x,
                            start_y: army[scythe_result[i].army[j].pull_action.pulled.army_number].unit[scythe_result[i].army[j].pull_action.pulled.unit_number].y,
							x: scythe_result[i].army[j].pull_action.pulled.x,
							y: scythe_result[i].army[j].pull_action.pulled.y,
                            route: scythe_result[i].army[j].pull_action.pulled.route,
                            friend_pull_now_flag: true};
			} else {
	            attack_list[i].move_list.push({
                            army_number: scythe_result[i].army[j].pull_action.pulled.army_number ,
                            unit_number: scythe_result[i].army[j].pull_action.pulled.unit_number,
                            start_x: army[scythe_result[i].army[j].pull_action.pulled.army_number].unit[scythe_result[i].army[j].pull_action.pulled.unit_number].x,
                            start_y: army[scythe_result[i].army[j].pull_action.pulled.army_number].unit[scythe_result[i].army[j].pull_action.pulled.unit_number].y,
							x: scythe_result[i].army[j].pull_action.pulled.x,
							y: scythe_result[i].army[j].pull_action.pulled.y,
                            route: scythe_result[i].army[j].pull_action.pulled.route,
                            friend_pull_now_flag: true});
			}

            attack_list[i].move_list.push({
                            army_number: scythe_result[i].army[j].pull_action.puller.army_number ,
                            unit_number: scythe_result[i].army[j].pull_action.puller.unit_number,
                            start_x: army[scythe_result[i].army[j].pull_action.puller.army_number].unit[scythe_result[i].army[j].pull_action.puller.unit_number].x,
                            start_y: army[scythe_result[i].army[j].pull_action.puller.army_number].unit[scythe_result[i].army[j].pull_action.puller.unit_number].y,
							x: scythe_result[i].army[j].pull_action.puller.x,
							y: scythe_result[i].army[j].pull_action.puller.y,
                            route: scythe_result[i].army[j].pull_action.puller.route,
                            friend_pull_now_flag: true});
		}
	}

    //// Attack Enemy Push
    if (attack_type == GG_DATA_ATTACK_TYPE_LONGBOW) {
        for (var n = 0; n < attack_list.length; n++) {
			var passive_check = -1;
			for (var m = 0; m < attack_list[n].list.length; m++) {
				if (attack_list[n].list[m].avoidance_now_flag == true ||
					attack_list[n].list[m].cover_now_flag == true ||
					attack_list[n].list[m].enemy_push_now_flag == true ||
					attack_list[n].list[m].friend_pull_now_flag == true
					) {
					continue;
				} else {
					passive_check = m;
				}
			}
			if (passive_check == -1) {
				continue;
			}
			
			var temp_number = -1;
			var temp_x, temp_y;
			if (attack_list[n].enemy_push_now_flag == true) {
				temp_x = attack_list[n].move_end_x;
				temp_y = attack_list[n].move_end_y;
			} else {
				temp_x = x;
				temp_y = y;
			}

            for (var k = 0; k < GG_PARTS_LONGBOW_PUSH.length; k++) {
				if (attack_list[n].list[passive_check].x - temp_x == GG_PARTS_LONGBOW_PUSH[k].x &&
					attack_list[n].list[passive_check].y - temp_y == GG_PARTS_LONGBOW_PUSH[k].y) {
					temp_number = k;
					break;
				}
			}
			var flag = true;
			var push_route = {};
			if (temp_number == -1) {
				continue;
			}

			for (var k = 0; k < GG_PARTS_LONGBOW_PUSH[temp_number].list.length; k++) {
				flag = true;
				if (attack_list[n].list[passive_check].x + GG_PARTS_LONGBOW_PUSH[temp_number].list[k][GG_PARTS_LONGBOW_PUSH[temp_number].list[k].length - 1].x > max_map_x ||
					attack_list[n].list[passive_check].x + GG_PARTS_LONGBOW_PUSH[temp_number].list[k][GG_PARTS_LONGBOW_PUSH[temp_number].list[k].length - 1].x < min_map_x ||
					attack_list[n].list[passive_check].y + GG_PARTS_LONGBOW_PUSH[temp_number].list[k][GG_PARTS_LONGBOW_PUSH[temp_number].list[k].length - 1].y < min_map_y ||
					attack_list[n].list[passive_check].y + GG_PARTS_LONGBOW_PUSH[temp_number].list[k][GG_PARTS_LONGBOW_PUSH[temp_number].list[k].length - 1].y > max_map_y) {
					flag = false
					continue;
				}
				var list_number = -1;
				for (var l = 0; l < GG_PARTS_LONGBOW_PUSH[temp_number].list[k].length; l++) {
					if (army[attack_list[n].list[passive_check].army_number].unit[attack_list[n].list[passive_check].unit_number].x + GG_PARTS_LONGBOW_PUSH[temp_number].list[k][l].x > max_map_x ||
						army[attack_list[n].list[passive_check].army_number].unit[attack_list[n].list[passive_check].unit_number].x + GG_PARTS_LONGBOW_PUSH[temp_number].list[k][l].x < min_map_x ||
						army[attack_list[n].list[passive_check].army_number].unit[attack_list[n].list[passive_check].unit_number].y + GG_PARTS_LONGBOW_PUSH[temp_number].list[k][l].y > max_map_y ||
						army[attack_list[n].list[passive_check].army_number].unit[attack_list[n].list[passive_check].unit_number].y + GG_PARTS_LONGBOW_PUSH[temp_number].list[k][l].y < min_map_y
						) {
						flag = false
						break;
					}

					for (var i = 0; i < army.length; i++) {
						for (var j = 0; j < army[i].unit.length; j++) {
							if (army[attack_list[n].list[passive_check].army_number].unit[attack_list[n].list[passive_check].unit_number].x +
								GG_PARTS_LONGBOW_PUSH[temp_number].list[k][l].x ==
								army[i].unit[j].x &&
								army[attack_list[n].list[passive_check].army_number].unit[attack_list[n].list[passive_check].unit_number].y +
								GG_PARTS_LONGBOW_PUSH[temp_number].list[k][l].y ==
								army[i].unit[j].y) {
								flag = false
								break;
							}
						}
						if (flag == false) {
							break;
						}
					}
				}
				if (flag == true) {
					push_route = GG_PARTS_LONGBOW_PUSH[temp_number].list[k];
					break;
				}
			}
			if (flag == true) {
				// animation
				var unit_dir;
				var dir_array = GG_PARTS_ATTACK_DIRECTION[3];
				
				for (var k = 0; k < dir_array.length; k++) {
					if (temp_x - army[attack_list[n].list[passive_check].army_number].unit[attack_list[n].list[passive_check].unit_number].x == dir_array[k].x &&
						temp_y - army[attack_list[n].list[passive_check].army_number].unit[attack_list[n].list[passive_check].unit_number].y == dir_array[k].y) {
						unit_dir = dir_array[k].unit_dir;
						break;
					}
				}
				
				attack_list[n].list[passive_check].x = army[attack_list[n].list[passive_check].army_number].unit[attack_list[n].list[passive_check].unit_number].x + push_route[push_route.length - 1].x;
				attack_list[n].list[passive_check].y = army[attack_list[n].list[passive_check].army_number].unit[attack_list[n].list[passive_check].unit_number].y + push_route[push_route.length - 1].y;
				attack_list[n].list[passive_check].attack_enemy_push_now_flag = true;
				attack_list[n].attack_enemy_push_now_flag = true;
				if (attack_list[n].move_list == undefined) {
					attack_list[n].move_list = [];
				}
				var temp_route = [];
				for (var route_count = 0; route_count < push_route.length; route_count++) {
					temp_route.push(push_route[route_count]);
				}
                attack_list[n].move_list.push({
                        army_number: attack_list[n].list[passive_check].army_number ,
                        unit_number: attack_list[n].list[passive_check].unit_number,
                        start_x:     army[attack_list[n].list[passive_check].army_number].unit[attack_list[n].list[passive_check].unit_number].x,
                        start_y:     army[attack_list[n].list[passive_check].army_number].unit[attack_list[n].list[passive_check].unit_number].y,
                        x:           army[attack_list[n].list[passive_check].army_number].unit[attack_list[n].list[passive_check].unit_number].x,
                        y:           army[attack_list[n].list[passive_check].army_number].unit[attack_list[n].list[passive_check].unit_number].y,
                        route:       temp_route,
						unit_dir:    unit_dir,
						attack_enemy_push_now_flag: true
						});
				
				// fatigue
                attack_list[n].fatigue += my_unit.attack_fatigue * temp_route.length;
				
			} else {
				attack_list[n].list[passive_check].attack_enemy_push_now_flag = false;
			}
		}
	}
	// recovery
	var temp_x, temp_y;
    if (attack_type == GG_DATA_ATTACK_TYPE_MACE ||
		attack_type == GG_DATA_ATTACK_TYPE_TAKT ||
		attack_type == GG_DATA_ATTACK_TYPE_HOSPITAL) {
		//
		for (var i = 0; i < attack_list.length; i++) {
			if (attack_list[i].army_number == -1) {
				continue;
			}
			
			if (attack_type == GG_DATA_ATTACK_TYPE_MACE
				) {
				if (attack_list[i].enemy_push_now_flag == true) {
					rescue_point = attack_list[i].list[1].damage;
				} else {
					rescue_point = attack_list[i].list[0].damage;
				}
				if (rescue_point == 0) {
					continue;
				}
			}
			//
			if (attack_list[i].enemy_push_now_flag == true) {
				temp_x = attack_list[i].move_end_x;
				temp_y = attack_list[i].move_end_y;
			} else {
				temp_x = x;
				temp_y = y;
			}
			var temp_rescue_array = [];
			for (var j = 0; j < army[army_number].unit.length; j++){
				if (j == unit_number) {
					continue;
				}
				if (army[army_number].unit[j].hitpoint >= army[army_number].unit[j].max_hitpoint) {
					continue;
				}
				//
				xabs = Math.abs(temp_x - army[army_number].unit[j].x);
		        yabs = Math.abs(temp_y - army[army_number].unit[j].y);
		        if (yabs > xabs) {
		            distance = yabs;
		        } else {
		            distance = (xabs + yabs) / 2;
		        }

				//
				if (distance >= army[army_number].unit[unit_number].attack_min_range &&
					distance <= army[army_number].unit[unit_number].attack_max_range) {
					temp_rescue_array.push({id: j, hitpoint: army[army_number].unit[j].hitpoint,
										    defence_point: army[army_number].unit[j].defence_point,
										    exp: army[army_number].unit[j].exp});
				}
			}
			if (temp_rescue_array.length > 0) {
				// sort
				temp_rescue_array.sort(function(a, b) {
					if (a.hitpoint > b.hitpoint) {
						return 1;
					} else  if (a.hitpoint < b.hitpoint) {
						return -1;
					} else {
						if (a.exp < b.exp) {
							return 1;
						} else  if (a.exp > b.exp) {
							return -1;
						} else {
							if (a.defence_point > b.defence_point) {
								return 1;
							} else  if (a.defence_point < b.defence_point) {
								return -1;
							} else {
	
								if (a.unit_number > b.unit_number) {
									return 1;
								} else  {
									return -1;
								}
							}
						}
					}
				});
				
				//
				var rescue_point = 0;
				if (attack_type == GG_DATA_ATTACK_TYPE_MACE) {
					if (attack_list[i].enemy_push_now_flag == true) {
						rescue_point = attack_list[i].list[1].damage;
					} else {
						rescue_point = attack_list[i].list[0].damage;
						
					}
				} else if (attack_type == GG_DATA_ATTACK_TYPE_TAKT) {
					rescue_point = army[army_number].unit[unit_number].big_recovery;
				} else if (attack_type == GG_DATA_ATTACK_TYPE_HOSPITAL) {
					rescue_point = army[army_number].unit[unit_number].small_recovery;
				}
				attack_list[i].exp += rescue_point;
				attack_list[i].fatigue += army[army_number].unit[unit_number].attack_fatigue;
				attack_list[i].rescue = [];
				attack_list[i].rescue[0] = {x: army[army_number].unit[temp_rescue_array[0].id].x,
				                         y: army[army_number].unit[temp_rescue_array[0].id].y,
										 recovery: rescue_point,
										 army_number: army_number,
										 unit_number: temp_rescue_array[0].id
					};	
			}
		}
	}
    if (attack_type == GG_DATA_ATTACK_TYPE_MORNINGSTAR) {
		//
		for (var i = 0; i < attack_list.length; i++) {
			//
			if (attack_list[i].enemy_push_now_flag == true) {
				temp_x = attack_list[i].move_end_x;
				temp_y = attack_list[i].move_end_y;
			} else {
				temp_x = x;
				temp_y = y;
			}
			var temp_rescue_array = [];
			for (var j = 0; j < army[army_number].unit.length; j++){
				if (j == unit_number) {
					continue;
				}
				if (army[army_number].unit[j].hitpoint >= army[army_number].unit[j].max_hitpoint) {
					continue;
				}
				//
				xabs = Math.abs(temp_x - army[army_number].unit[j].x);
		        yabs = Math.abs(temp_y - army[army_number].unit[j].y);
		        if (yabs > xabs) {
		            distance = yabs;
		        } else {
		            distance = (xabs + yabs) / 2;
		        }

				//
				if (distance >= army[army_number].unit[unit_number].attack_min_range &&
					distance <= army[army_number].unit[unit_number].attack_max_range) {
					temp_rescue_array.push({id: j, hitpoint: army[army_number].unit[j].hitpoint,
										    defence_point: army[army_number].unit[j].defence_point,
										    exp: army[army_number].unit[j].exp});
				}
			}
			if (temp_rescue_array.length > 0) {

				//
				var rescue_point = army[army_number].unit[unit_number].small_recovery;
				attack_list[i].exp += rescue_point * temp_rescue_array.length;
				attack_list[i].fatigue += army[army_number].unit[unit_number].attack_fatigue * temp_rescue_array.length;
				attack_list[i].rescue = [];
				for (var j = 0; j < temp_rescue_array.length; j++) {
					attack_list[i].rescue[j] = {x: army[army_number].unit[temp_rescue_array[j].id].x,
				                                y: army[army_number].unit[temp_rescue_array[j].id].y,
										        recovery: rescue_point,
										        army_number: army_number,
										        unit_number: temp_rescue_array[j].id
					};	
					
				}
			}
		}
	}

	///////// status change
    if (attack_type == GG_DATA_ATTACK_TYPE_HARP) {
		//
		for (var i = 0; i < attack_list.length; i++) {
			//
			if (attack_list[i].enemy_push_now_flag == true) {
				temp_x = attack_list[i].move_end_x;
				temp_y = attack_list[i].move_end_y;
			} else {
				temp_x = x;
				temp_y = y;
			}
			var temp_rescue_array = [];
			for (var j = 0; j < army[army_number].unit.length; j++){
				if (j == unit_number) {
					continue;
				}
				if (army[army_number].unit[j].status_changed != GG_DATA_STATUS_CHANGE_NONE &&
					army[army_number].unit[j].status_changed != GG_DATA_STATUS_CHANGE_DOWN_ATTACK) {
					continue;
				}
				//
				xabs = Math.abs(temp_x - army[army_number].unit[j].x);
		        yabs = Math.abs(temp_y - army[army_number].unit[j].y);
		        if (yabs > xabs) {
		            distance = yabs;
		        } else {
		            distance = (xabs + yabs) / 2;
		        }

				//
				if (distance >= army[army_number].unit[unit_number].attack_min_range &&
					distance <= army[army_number].unit[unit_number].attack_max_range) {
					//if (attack_type == GG_DATA_ATTACK_TYPE_TRUMPET) {
					//	var temp_fatigue_x = 1;
					//	if (map[army[army_number].unit[j].y][army[army_number].unit[j].x] == 0) {
					//		temp_fatigue_x = 2;
					//	}
					//	if (army[army_number].unit[j].fatigue > army[army_number].unit[j].recover_fatigue * temp_fatigue_x ) {
					//		temp_rescue_array.push({id: j, exp: army[army_number].unit[j].exp});
					//	}
					//} else {
					temp_rescue_array.push({id: j, exp: army[army_number].unit[j].exp});
					//}
				}
			}
			if (temp_rescue_array.length > 0) {
				
				//
				var max_targets_number = 0;
				var status_changed = GG_DATA_STATUS_CHANGE_NONE;
				if (attack_type == GG_DATA_ATTACK_TYPE_HARP) {
					status_changed = GG_DATA_STATUS_CHANGE_UP_ATTACK;
				}
				max_targets_number = temp_rescue_array.length;

				//if (my_unit.status_change_number >= temp_rescue_array.length) {
				//} else {
				//	max_targets_number = my_unit.status_change_number;
				//}

				attack_list[i].exp += temp_rescue_array.length;
				attack_list[i].fatigue += army[army_number].unit[unit_number].attack_fatigue * temp_rescue_array.length;
				attack_list[i].status_changes = [];
				for (var k = 0; k < temp_rescue_array.length; k++) {
					attack_list[i].status_changes.push({x: army[army_number].unit[temp_rescue_array[k].id].x,
				                                        y: army[army_number].unit[temp_rescue_array[k].id].y,
													    status_changed: status_changed,
  										                army_number: army_number,
										                unit_number: temp_rescue_array[k].id
					});	
				}
			}
		}
	}

	//////////////////////////////////////////////
    // sum_damage dead_count & uper unit number
    for (var i = 0; i < attack_list.length; i++) {
		// new animation data
		attack_list[i].attack_info = {};
		if (attack_list[i].route == undefined) {
			attack_list[i].route = [];
		}
		if (attack_list[i].enemy_push_now_flag == true &&
			attack_list[i].army_number != -1) {
			var attacked = {x: attack_list[i].change_attacked_x,
			                y: attack_list[i].change_attacked_y}; 
		} else if (attack_list[i].enemy_push_now_flag == true &&
			attack_list[i].army_number == -1) {
			var attacked = {x: -1,
			                y: -1}; 
		} else {
			var attacked = {x: attack_list[i].attack_x,
			                y: attack_list[i].attack_y}; 
		}
		attack_list[i].attack_info.my_unit = {
			 attacker:            {x: x, y: y}
			,attacked:            {x: attacked.x, y: attacked.y}
			,end:                 {x: attack_list[i].end_x, y: attack_list[i].end_y} // Rs
			,moved:               {x: attack_list[i].move_end_x, y: attack_list[i].move_end_y, 
			                       route: attack_list[i].move_end_route,
						           unit_dir: attack_list[i].unit_dir} // Hm
			,army_number:         army_number
			,unit_number:         unit_number
			,assault_flag:        attack_list[i].assault_flag
			,class_down_flag:     attack_list[i].class_down_flag
			,enemy_push_now_flag: attack_list[i].enemy_push_now_flag
			,route:               JSON.parse(JSON.stringify(attack_list[i].route)) // Ch
		};
		// end

		var temp_army = [];
		for (var j = 0; j < army.length; j++) {
			temp_army[j] ={};
			temp_army[j].unit = [];
			for (var k = 0; k < army[j].unit.length; k++) {
				temp_army[j].unit[k] = {x: army[j].unit[k].x, y: army[j].unit[k].y};
			}
		}
		//
		temp_army[army_number].unit[unit_number] = {x:x, y:y};
		if (moved_unit != null) {
			temp_army[moved_unit.army_number].unit[moved_unit.unit_number] = {x: moved_unit.x, y: moved_unit.y};
		}
		
		if (attack_type == GG_DATA_ATTACK_TYPE_CHAINE &&
			attack_list[i].list[0].avoidance_now_flag == false && attack_list[i].list[0].cover_now_flag == false) {
			temp_army[attack_list[i].list[0].army_number].unit[attack_list[i].list[0].unit_number] = {x: attack_list[i].list[0].x, y: attack_list[i].list[0].y};
		}

		if (attack_list[i].move_list == undefined) {
			attack_list[i].move_list = [];
		}
		
		// new animation data
		attack_list[i].attack_info.other_unit = [];
        for (var j = 0; j < attack_list[i].move_list.length; j++) {
			if (attack_list[i].move_list[j].route == undefined) {
				attack_list[i].move_list[j].route = [];
			}
			attack_list[i].attack_info.other_unit.push({
				 avoidance_now_flag: attack_list[i].move_list[j].avoidance_now_flag
				,friend_pull_now_flag: attack_list[i].move_list[j].friend_pull_now_flag
				,counter_now_flag: attack_list[i].move_list[j].counter_now_flag
				,cover_now_flag: attack_list[i].move_list[j].cover_now_flag
				,enemy_push_now_flag: attack_list[i].move_list[j].enemy_push_now_flag
				,attack_down_now_flag: attack_list[i].move_list[j].attack_down_now_flag
				,attack_enemy_push_now_flag: attack_list[i].move_list[j].attack_enemy_push_now_flag
				,start_x: attack_list[i].move_list[j].start_x
				,start_y: attack_list[i].move_list[j].start_y
				,route: JSON.parse(JSON.stringify(attack_list[i].move_list[j].route))
				,x: attack_list[i].move_list[j].x
				,y: attack_list[i].move_list[j].y
				,unit_dir: attack_list[i].move_list[j].unit_dir
				,army_number: attack_list[i].move_list[j].army_number
				,unit_number: attack_list[i].move_list[j].unit_number
			  });
		}	
    }
	
    return attack_list;
	
};
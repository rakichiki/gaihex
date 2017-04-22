gg.parts = {};

gg.parts.cal_area = function(army, map, army_number, unit_number, area_map) {
    var my_army = army[army_number];
    var my_unit = army[army_number].unit[unit_number];
    
    var move_point = army[army_number].unit[unit_number].move_point;
	if (my_unit.status_changed == GG_DATA_STATUS_CHANGE_UP_MOVE) {
		move_point += GG_DATA_DEFAULT_STATUS_CHANGE_MOVE_POINT;
		if (move_point > 10) {
			move_point = 10;
		}
	}

    var route_move_point = Math.ceil(move_point / 2);
    if (map[my_unit.y][my_unit.x] == 0) {
        route_move_point = 1;
    } else if (map[my_unit.y][my_unit.x] > 1) {
        route_move_point += 1;
    }
    
	var max_move_distance = move_point / 2;    
    var move_type = army[army_number].unit[unit_number].move_type;
    var enemy_flag = false;
    var max_map_x = GG_DATA_MAP_SIZE.max_x;
    var max_map_y = GG_DATA_MAP_SIZE.max_y;
	var min_map_x = GG_DATA_MAP_SIZE.min_x;
	var min_map_y = GG_DATA_MAP_SIZE.min_y;
    var before_x, before_y;
    var enemy_zoc_cost = 0;
    var xabs, yabs, range, map_zoc_cost;
    var area_result = [];
    var option_route;
	var move_option_friendr_route;
	var del_area_point;
    area_result.push({x: my_unit.x, 
                      y: my_unit.y,
					  org_x: my_unit.x,
					  org_y: my_unit.y,
                      route: [],
                      unit_number: unit_number,
                      moved: null,
                      fatigue: 0, move_add_attack_point:0});
            
	var moved_unit_info = null;
	var move_option_number = -1;
	
    for (var i = 0; i < GG_DATA_MOVE_PATTERN[route_move_point].length; i++) {
        //check out of map
        if (my_unit.x + GG_DATA_MOVE_PATTERN[route_move_point][i].x < min_map_x ||
            my_unit.y + GG_DATA_MOVE_PATTERN[route_move_point][i].y < min_map_y ||
            my_unit.y + GG_DATA_MOVE_PATTERN[route_move_point][i].y > max_map_y ||
            my_unit.x + GG_DATA_MOVE_PATTERN[route_move_point][i].x > max_map_x ||
            map[my_unit.y + GG_DATA_MOVE_PATTERN[route_move_point][i].y][my_unit.x + GG_DATA_MOVE_PATTERN[route_move_point][i].x] == -1) {
            continue;
        }
        //check enemy
        enemy_flag = true;
        for (var j = 0; j < army.length; j++) {
            if (j == army_number) {
                continue;
            }
            for (var k = 0; k < army[j].unit.length; k++) {
                if (my_unit.x + GG_DATA_MOVE_PATTERN[route_move_point][i].x == army[j].unit[k].x &&
                    my_unit.y + GG_DATA_MOVE_PATTERN[route_move_point][i].y == army[j].unit[k].y) {
                    enemy_flag = false;
                    break;
                }
            }
            if (enemy_flag == false) {
                break;
            }
        }
        if (enemy_flag == false) {
            continue;
        }
        ////////////////
        enemy_flag = true;
		move_option_number = -1;
		moved_unit_info = null;

		for (var k = 0; k < my_army.unit.length; k++) {
			if (k == unit_number) {
				continue;
			}
			if (my_unit.x + GG_DATA_MOVE_PATTERN[route_move_point][i].x == army[army_number].unit[k].x &&
				my_unit.y + GG_DATA_MOVE_PATTERN[route_move_point][i].y == army[army_number].unit[k].y) {
				move_option_number = k;
				break;
			}			
		}
		if (move_option_number != -1 &&
			(move_type == GG_DATA_MOVE_TYPE_NORMAL ||
             move_type == GG_DATA_MOVE_TYPE_THROUGH ||
             move_type == GG_DATA_MOVE_TYPE_PULL)) {
			continue;
		} else if (move_option_number != -1 && (move_type == GG_DATA_MOVE_TYPE_PUSH ||
			       move_type == GG_DATA_MOVE_TYPE_CHANGE)){

			// rnage
			xabs = Math.abs(my_unit.x - my_army.unit[move_option_number].x);
			yabs = Math.abs(my_unit.y - my_army.unit[move_option_number].y);
			if (yabs > xabs) {
			   range = yabs;
			} else {
			   range = (xabs + yabs) / 2;
			}
			if (move_type == GG_DATA_MOVE_TYPE_PUSH) {
				option_route = GG_PARTS_MOVE_ROUTE[range + 1];
			} else if (move_type == GG_DATA_MOVE_TYPE_CHANGE) {
				option_route = GG_PARTS_MOVE_ROUTE[range - 1];
			}
			var option_move_list = [];
			for (var l = 0; l < option_route.length; l++) {
				if (my_unit.x + option_route[l].x < min_map_x ||
					my_unit.x + option_route[l].x > max_map_x ||
					my_unit.y + option_route[l].y < min_map_y ||
					my_unit.y + option_route[l].y > max_map_y) {
					continue;
				}
				xabs = Math.abs(my_army.unit[move_option_number].x - my_unit.x - option_route[l].x);
				yabs = Math.abs(my_army.unit[move_option_number].y - my_unit.y - option_route[l].y);
				if (yabs > xabs) {
					range = yabs;
				} else {
					range = (xabs + yabs) / 2;
				}
				if (range != 1) {
					continue;
				}
				
				var option_move_flag = true;
				for (var army_count = 0; army_count < army.length; army_count++) {
					for (var unit_count = 0; unit_count < army[army_count].unit.length; unit_count++) {
						if (army_count == army_number && unit_count == unit_number) {
							continue;
						}
						if (army[army_count].unit[unit_count].x == my_unit.x + option_route[l].x &&
							army[army_count].unit[unit_count].y == my_unit.y + option_route[l].y) {
							option_move_flag = false;
							break;
						}
					}
					if (option_move_flag == false) {
						break;
					}
				}
				if (option_move_flag == true) {
					option_move_list.push({number: l, x: my_unit.x + option_route[l].x,
										   y: my_unit.y + option_route[l].y})
				}
			}
			var option_move = null
			if (option_move_list.length == 0) {
				continue;
			} else if (option_move_list.length == 1) {
				option_move = {x: option_move_list[0].x, y: option_move_list[0].y};
			} else if (option_move_list.length == 2) {
				if (option_move_list[option_move_list.length - 1].number >= option_route.length - 2) {
					option_move = {x: option_move_list[1].x, y: option_move_list[1].y};
				} else {
					option_move = {x: option_move_list[0].x, y: option_move_list[0].y};
				}
			} else if (option_move_list.length == 3) {
				if (option_move_list[option_move_list.length - 1].number == option_route.length - 1) {
					if (option_move_list[1].number + 1 == option_move_list[2].number) {
						option_move = {x: option_move_list[1].x, y: option_move_list[1].y};
						//code
					} else {
						option_move = {x: option_move_list[2].x, y: option_move_list[2].y};
						
					}
				} else {
					option_move = {x: option_move_list[0].x, y: option_move_list[0].y};
				}
			}
			for (var l = 0; l < 6; l++) {
				if (my_army.unit[move_option_number].x + GG_DATA_MOVE_DIRECTION[l].x == option_move.x &&
					my_army.unit[move_option_number].y + GG_DATA_MOVE_DIRECTION[l].y == option_move.y) {
					move_option_friendr_route = l;
					break;
				}
			}
			moved_unit_info = {unit_number: move_option_number, x: option_move.x, y: option_move.y, route: move_option_friendr_route};
		}

        var temp_x = my_unit.x;
        var temp_y = my_unit.y;
        var temp_move_point = move_point;
        var route_check = true;
		var normal_route_check = true;
		var normal_enemy_zoc_cost;
		var normal_map_zoc_cost;
		var normal_temp_move_point = my_unit.move_point;
        for (var l = 0; l < GG_DATA_MOVE_PATTERN[route_move_point][i].route.length - 1; l++) {

            before_x = temp_x;
            before_y = temp_y;
            temp_x += GG_DATA_MOVE_DIRECTION[GG_DATA_MOVE_PATTERN[route_move_point][i].route[l]].x;
            temp_y += GG_DATA_MOVE_DIRECTION[GG_DATA_MOVE_PATTERN[route_move_point][i].route[l]].y;
            
            // out of map
            if (temp_x < min_map_x ||
                temp_y < min_map_y ||
                temp_y > max_map_y ||
                temp_x > max_map_x ||
                map[temp_y][temp_x] == -1) {
                route_check = false;
                break;
            }

            // enemy check
            enemy_flag = true;
            for (var j = 0; j < army.length; j++) {
                if (j == army_number) {
                    continue;
                }
                for (var k = 0; k < army[j].unit.length; k++) {
                    if (temp_x == army[j].unit[k].x &&
                        temp_y == army[j].unit[k].y) {
                        enemy_flag = false;
                        break;
                    }
                }
                if (enemy_flag == false) {
                    break;
                }
            }

            enemy_zoc_cost = 0;
            var now_route_through = false;
            if (enemy_flag == false && move_type != GG_DATA_MOVE_TYPE_THROUGH) {
                route_check = false;
                break;
            } else if (enemy_flag == false && move_type == GG_DATA_MOVE_TYPE_THROUGH){
				normal_route_check = false;
                now_route_through = true;
			}
            // zoc cost
            for (var j = 0; j < army.length; j++) {
                if (j == army_number) {
                    continue;
                }
                for (var k = 0; k < army[j].unit.length; k++) {
                    if (army[j].unit[k].dead_count_down != -1) {
                        continue;
                    }
                    xabs = Math.abs(temp_x - army[j].unit[k].x);
                    yabs = Math.abs(temp_y - army[j].unit[k].y);
                    if (yabs > xabs) {
                        range = yabs;
                    } else {
                        range = (xabs + yabs) / 2;
                    }
                    if (range == 1 && enemy_zoc_cost <  army[j].unit[k].zoc_cost) {
                        enemy_zoc_cost = army[j].unit[k].zoc_cost;
                    }
                }
            }
			normal_enemy_zoc_cost = enemy_zoc_cost;
            if (now_route_through == true) {
                enemy_zoc_cost = 0;
			}

            // map move point
            map_zoc_cost = 0;
            if (map[temp_y][temp_x] == GG_DATA_MAP_RIVER ||
                map[before_y][before_x] ==  GG_DATA_MAP_RIVER) {
                map_zoc_cost = GG_DATA_MOVE_COST_RIVER;
                
            } else {
                if (map[before_y][before_x] < map[temp_y][temp_x]) {
                    map_zoc_cost = GG_DATA_MOVE_COST_UP * (map[temp_y][temp_x] - map[before_y][before_x]);
                } else if (map[before_y][before_x] > map[temp_y][temp_x]) {
                    map_zoc_cost = GG_DATA_MOVE_COST_DOWN;
                } else {
                    map_zoc_cost = GG_DATA_MOVE_COST_PLANE;
                }
            }
            temp_move_point = temp_move_point - enemy_zoc_cost - map_zoc_cost;
			normal_temp_move_point = normal_temp_move_point - normal_enemy_zoc_cost - map_zoc_cost;
            if (normal_temp_move_point <= 0) {
				normal_route_check = false;
			}
            if (temp_move_point <= 0) {
                route_check = false;
				normal_route_check = false;
                break;
            }
        }
        if (route_check == true) {

            var moved = null;
            var temp_fatigue = army[army_number].unit[unit_number].move_fatigue;
            var temp_route = GG_DATA_MOVE_PATTERN[route_move_point][i].route;
			if (moved_unit_info != null) {
                temp_fatigue += army[army_number].unit[unit_number].move_fatigue;
                moved = {};
                moved.unit_number = moved_unit_info.unit_number;
                moved.army_number = army_number;
                moved.x = moved_unit_info.x;
                moved.y = moved_unit_info.y;
                moved.start_x = army[army_number].unit[moved_unit_info.unit_number].x;
                moved.start_y = army[army_number].unit[moved_unit_info.unit_number].y;
                moved.route = [];
                for (var n = 0; n < GG_DATA_MOVE_PATTERN[route_move_point][i].route.length - 1; n++) {
                    moved.route.push(6);
                }
                moved.route.push(moved_unit_info.route);

			}
			// max move check
            xabs = Math.abs(GG_DATA_MOVE_PATTERN[route_move_point][i].x);
            yabs = Math.abs(GG_DATA_MOVE_PATTERN[route_move_point][i].y);
			var distance = 0;
            if (yabs > xabs) {
                distance = yabs;
            } else {
                distance = (xabs + yabs) / 2;
            }
            
            // PULL
			if (move_type == GG_DATA_MOVE_TYPE_PULL) {
				var temp_pull_list = [];
                var temp_moved_distance = distance;
                var temp_distance = 0;
                var temp_unit_distance = 0;
                var pull_position_list = [];

                for (var temp_count = 0; temp_count < 6; temp_count++) {
                    xabs = Math.abs(my_unit.x - my_unit.x - GG_DATA_MOVE_PATTERN[route_move_point][i].x - GG_DATA_MOVE_DIRECTION[temp_count].x);
                    yabs = Math.abs(my_unit.y - my_unit.y - GG_DATA_MOVE_PATTERN[route_move_point][i].y - GG_DATA_MOVE_DIRECTION[temp_count].y);
                    if (yabs > xabs) {
                        temp_distance = yabs;
                    } else {
                        temp_distance = (xabs + yabs) / 2;
                    }
                    if (temp_distance != temp_moved_distance - 1) {
                        continue;
                    }
                    
                    var unit_check_flag = true;
                    for (var army_count = 0; army_count < army.length; army_count++) {
                        for (var unit_count = 0; unit_count < army[army_count].unit.length; unit_count++) {
                            if (army_count == army_number && unit_count == unit_number) {
                                continue;
                            }
                            if (army[army_count].unit[unit_count].x == my_unit.x + GG_DATA_MOVE_PATTERN[route_move_point][i].x + GG_DATA_MOVE_DIRECTION[temp_count].x &&
                                army[army_count].unit[unit_count].y == my_unit.y + GG_DATA_MOVE_PATTERN[route_move_point][i].y + GG_DATA_MOVE_DIRECTION[temp_count].y) {
                                unit_check_flag = false;
                                break;
                            }
                        }
                        if (unit_check_flag == false) {
                            break;
                        }
                    }
                    if (unit_check_flag == true) {
                        pull_position_list.push({x: my_unit.x + GG_DATA_MOVE_PATTERN[route_move_point][i].x + GG_DATA_MOVE_DIRECTION[temp_count].x,
                                                 y: my_unit.y + GG_DATA_MOVE_PATTERN[route_move_point][i].y + GG_DATA_MOVE_DIRECTION[temp_count].y,
                                                 id: temp_count});
                    }
                }
                if (pull_position_list.length > 0) {
                    if (pull_position_list.length > 1) {
                        var four_flag = false;
                        for (var temp_count = 0; temp_count < pull_position_list.length; temp_count++) {
                            if (pull_position_list[temp_count].id >= 4) {
                                four_flag = true;
                                break;
                            }
                        }
                        if (four_flag == true) {
                            for (var temp_count = 0; temp_count < pull_position_list.length; temp_count++) {
                                if (pull_position_list[temp_count].id <= 1) {
                                    pull_position_list[temp_count].id += 6;
                                }
                            }
                        }
                        pull_position_list.sort(function(a, b) {
                            if (a.id > b.id) {
                                return 1;
                            } else {
                                return -1;
                            }
                        });
                    }
                                        
                    var pull_unit_list = [];
                        
                    for (var unit_count = 0; unit_count < army[army_number].unit.length; unit_count++) {
                        if (unit_count == unit_number) {
                            continue;
                        }
                        for (var temp_count = 0; temp_count < 6; temp_count++) {
                            xabs = Math.abs(my_unit.x + GG_DATA_MOVE_DIRECTION[temp_count].x - pull_position_list[0].x);
                            yabs = Math.abs(my_unit.y + GG_DATA_MOVE_DIRECTION[temp_count].y - pull_position_list[0].y);
                            if (yabs > xabs) {
                                temp_distance = yabs;
                            } else {
                                temp_distance = (xabs + yabs) / 2;
                            }
                            if (temp_distance != temp_moved_distance) {
                                continue;
                            }
    
                            xabs = Math.abs(my_unit.x + GG_DATA_MOVE_DIRECTION[temp_count].x - my_unit.x - GG_DATA_MOVE_PATTERN[route_move_point][i].x);
                            yabs = Math.abs(my_unit.y + GG_DATA_MOVE_DIRECTION[temp_count].y - my_unit.y - GG_DATA_MOVE_PATTERN[route_move_point][i].y);
                            if (yabs > xabs) {
                                temp_distance = yabs;
                            } else {
                                temp_distance = (xabs + yabs) / 2;
                            }
                            if (temp_distance != temp_moved_distance + 1) {
                                continue;
                            }
    
                            if (army[army_number].unit[unit_count].x == my_unit.x + GG_DATA_MOVE_DIRECTION[temp_count].x &&
                                army[army_number].unit[unit_count].y == my_unit.y + GG_DATA_MOVE_DIRECTION[temp_count].y) {
                                pull_unit_list.push({unit_number: unit_count, id: temp_count});
                                break;
                            }
                        }                     
                    }
                    if (pull_unit_list.length > 0){
                        //
                        if (pull_unit_list.length > 1) {
                            var four_flag = false;
                            for (var temp_count = 0; temp_count < pull_unit_list.length; temp_count++) {
                                if (pull_unit_list[temp_count].id >= 4) {
                                    four_flag = true;
                                    break;
                                }
                            }
                            if (four_flag == true) {
                                for (var temp_count = 0; temp_count < pull_unit_list.length; temp_count++) {
                                    if (pull_unit_list[temp_count].id <= 1) {
                                        pull_unit_list[temp_count].id += 6;
                                    }
                                }
                            }
                            pull_unit_list.sort(function(a, b) {
                                if (a.id > b.id) {
                                    return 1;
                                } else {
                                    return -1;
                                }
                            });
                        }
                        
                        //
                        temp_fatigue += my_unit.move_fatigue;
                        moved = {};
                        moved.unit_number = pull_unit_list[0].unit_number;
                        moved.army_number = army_number;
        
                        moved.x = pull_position_list[0].x;
                        moved.y = pull_position_list[0].y;
                        moved.start_x = my_army.unit[moved.unit_number].x;
                        moved.start_y = my_army.unit[moved.unit_number].y;
                        moved.route = [];
                        
                        for (var temp_count = 0; temp_count < GG_DATA_MOVE_PATTERN[temp_moved_distance].length; temp_count++) {
                            if (moved.start_x + GG_DATA_MOVE_PATTERN[temp_moved_distance][temp_count].x == moved.x &&
                                moved.start_y + GG_DATA_MOVE_PATTERN[temp_moved_distance][temp_count].y == moved.y) {
                                var temp_route_check_flag = true;
                                var temp_pull_position = {x: moved.start_x, y: moved.start_y};
                                for (var temp_route_count = 0; temp_route_count < GG_DATA_MOVE_PATTERN[temp_moved_distance][temp_count].route.length; temp_route_count++) {
                                    temp_pull_position.x += GG_DATA_MOVE_DIRECTION[GG_DATA_MOVE_PATTERN[temp_moved_distance][temp_count].route[temp_route_count]].x;;
                                    temp_pull_position.y += GG_DATA_MOVE_DIRECTION[GG_DATA_MOVE_PATTERN[temp_moved_distance][temp_count].route[temp_route_count]].y;
                                    if (temp_pull_position.x < min_map_x ||
                                        temp_pull_position.y < min_map_y ||
                                        temp_pull_position.y > max_map_y ||
                                        temp_pull_position.x > max_map_x) {
        
                                        temp_route_check_flag = false;
                                        break;
                                    }
                                }
                                
                                if (temp_route_check_flag == true) {
                                    moved.route = JSON.parse(JSON.stringify(GG_DATA_MOVE_PATTERN[temp_moved_distance][temp_count].route));
                                    break;
                                }
                                
                            }
                            
                        }
                        for (var n = 0; n < GG_DATA_MOVE_PATTERN[route_move_point][i].route.length - moved.route.length; n++) {
                            moved.route.push(6);
                        }
                    }
                }
			}
			
			/////
            area_result.push({x: my_unit.x + GG_DATA_MOVE_PATTERN[route_move_point][i].x,
                              y: my_unit.y + GG_DATA_MOVE_PATTERN[route_move_point][i].y,
                              route: temp_route,
                              unit_number: unit_number,
                              moved: JSON.parse(JSON.stringify(moved)),
                              fatigue: temp_fatigue,
							  //assault_flag: assault_flag,
							  org_x: my_unit.x,
							  org_y: my_unit.y});
            for (var j = i + 1; j < GG_DATA_MOVE_PATTERN[route_move_point].length; j++) {
                if (GG_DATA_MOVE_PATTERN[route_move_point][i].x == GG_DATA_MOVE_PATTERN[route_move_point][j].x &&
                    GG_DATA_MOVE_PATTERN[route_move_point][i].y == GG_DATA_MOVE_PATTERN[route_move_point][j].y) {
                    i++;
                } else {
                    break;
                }
            }
        }
    }
	/////////////////////////////////////////////////////////////////
    var result = [];
    var rob_area_point = null;
    var area_point = 0;
    var rob_area_point_fatigue = 0;
	var status_change_done = null;
    for (var i = 0; i < area_result.length; i++) {
		if (my_unit.status_changed == GG_DATA_STATUS_CHANGE_UP_MOVE &&
			(area_result[i].x != my_unit.x ||
			area_result[i].y != my_unit.y)) {
			status_change_done = true;
		} else {
			status_change_done = false;
		}
		
        //
        rob_area_point = null;
        rob_area_point_fatigue = 0;
        
        if (area_map[area_result[i].y][area_result[i].x] != -2 &&
            area_map[area_result[i].y][area_result[i].x] != -1 &&
            area_map[area_result[i].y][area_result[i].x] != my_army.color) {
            var rob_army_number = -1;
            for (var j = 0; j < army.length; j++) {
                if (army[j].color == area_map[area_result[i].y][area_result[i].x]) {
                    rob_army_number = j;
                    break;
                }
            }
            if (rob_army_number != -1) {
                rob_area_point = {my_army_number: army_number,
                                      enemy_army_number: rob_army_number,
                                      area_point: my_unit.add_area_point};
                rob_area_point_fatigue = GG_DATA_ROB_AREA_POINT_FATIGUE;
            }
        }

        ///// rescue cal
        area_point = 0;
        if (map[area_result[i].y][area_result[i].x] == 1 &&
            area_map[area_result[i].y][area_result[i].x] != army[army_number].color) {
            area_point = 1;
        }
        var enemy_distance = 99;
        for (var j = 0; j < army.length; j++) {
            if (j == army_number) {
                continue;
            }
            for (var k = 0; k < army[j].unit.length; k++) {
                xabs = Math.abs(area_result[i].x - army[j].unit[k].x);
                yabs = Math.abs(area_result[i].y - army[j].unit[k].y);
                if (yabs > xabs) {
                    range = yabs;
                } else {
                    range = (xabs + yabs) / 2;
                }
                if (range < enemy_distance) {
                    enemy_distance = range;
                }
            }
        }
		if (area_result[i].moved != null) {
            if (area_map[area_result[i].moved.y][area_result[i].moved.x] != army[army_number].color) {
                area_point++;
            }
		}

        var rescue = null;
        var temp_rescue_exp = 0;
        var temp_rescue_damage = 0;
        
		var position_wait = 0;
		var my_position_wait = 0;
		for (var k = 0; k < army.length; k++) {
	        for (var j = 0; j < army[k].unit.length; j++) {
	            xabs = Math.abs(area_result[i].x - army[k].unit[j].x);
	            yabs = Math.abs(area_result[i].y - army[k].unit[j].y);
	            if (yabs > xabs) {
	                range = yabs;
	            } else {
	                range = (xabs + yabs) / 2;
	            }
				if (range == 1) {
					if (k == army_number) {
		                my_position_wait++;
					} else {
		                position_wait++;
						
					}
	            }
	        }
		}

        if (army[army_number].unit[unit_number].type == GG_DATA_UNIT_LONGBOW ||
            army[army_number].unit[unit_number].type == GG_DATA_UNIT_THUNDER ||
            army[army_number].unit[unit_number].type == GG_DATA_UNIT_WIND ||
            army[army_number].unit[unit_number].type == GG_DATA_UNIT_WITCH ||
            army[army_number].unit[unit_number].type == GG_DATA_UNIT_TAKT ||
            army[army_number].unit[unit_number].type == GG_DATA_UNIT_HARP 
            ) {
			if (position_wait > 0) {
				position_wait = -1;
			} else {
				if (map[army[army_number].unit[unit_number].y][army[army_number].unit[unit_number].x] > map[area_result[i].y][area_result[i].x]) {
					position_wait = -1;
				} else {
					position_wait = 0;
				}
			}
		} else if (army[army_number].unit[unit_number].type == GG_DATA_UNIT_FALCHION ||
                   army[army_number].unit[unit_number].type == GG_DATA_UNIT_LASER) {
			if (position_wait > 1) {
				position_wait = -1;
			} else {
				if (map[army[army_number].unit[unit_number].y][army[army_number].unit[unit_number].x] > map[area_result[i].y][area_result[i].x]) {
					position_wait = -1;
				} else {
					position_wait = 0;
				}
			}
		} else if (army[army_number].unit[unit_number].type == GG_DATA_UNIT_SHILED ||
				   army[army_number].unit[unit_number].type == GG_DATA_UNIT_TRIDENT) {
			if (my_position_wait == 0) {
				position_wait = -1;
			} else {
				if (map[army[army_number].unit[unit_number].y][army[army_number].unit[unit_number].x] > map[area_result[i].y][area_result[i].x]) {
					position_wait = -1;
				} else {
					position_wait = 0;
				}
			}
        } else {
			position_wait = 0;
		}
		
		var temp_army = JSON.parse(JSON.stringify(army));
		if (area_result[i].moved != null) {
			temp_army[army_number].unit[area_result[i].moved.unit_number].x = area_result[i].moved.x;
			temp_army[army_number].unit[area_result[i].moved.unit_number].y = area_result[i].moved.y;
		}

		if (area_result[i].org_x == undefined) {
			console.log('BUG');
		}
        attack_list = gg.parts.check_attack(map, temp_army, army_number, unit_number,
                                            area_result[i].x, area_result[i].y,
                                            my_unit.attack_min_range, my_unit.attack_max_range,
                                            my_unit.attack_type, area_result[i].moved,
											area_result[i].org_x, area_result[i].org_y);

        area_result[i].exp = 0;
        var map_fatigue = GG_DATA_MAP_FATIGUE[map[area_result[i].y][area_result[i].x]];
        //var area_point = 0;
		if (rob_area_point != null) {
            rob_area_point.area_point = my_unit.add_area_point * GG_DATA_ROB_AREA_POINT_FATIGUE_NOACTION_TIMES;
        }
        if (area_map[area_result[i].y][area_result[i].x] == -1 &&
            map[area_result[i].y][area_result[i].x] == 1) {
            area_point += 1;
        } else if (area_map[area_result[i].y][area_result[i].x] != army_number &&
            map[area_result[i].y][area_result[i].x] == 1) {
            area_point += 2;
        }
        if (area_result[i].moved != null) {
            if (area_map[area_result[i].moved.y][area_result[i].moved.x] == -1 &&
                map[area_result[i].moved.y][area_result[i].moved.x] == 1) {
                area_point += 1;
            } else if (area_map[area_result[i].moved.y][area_result[i].moved.x] != army_number &&
                map[area_result[i].moved.y][area_result[i].moved.x] == 1) {
                area_point += 2;
            }
        }
        
        if (attack_list.length != 0) {
            for (var attack_count = 0; attack_count < attack_list.length; attack_count++) {
                
                var temp_recover = 0;
                if (rescue != null) {
                    temp_recover += rescue.recovery;
                }

                del_area_point = 0;
                for (var j = 0; j < attack_list[attack_count].list.length; j++) {
                    if (attack_list[attack_count].list[j].x != null) {
                        if (area_map[attack_list[attack_count].list[j].y][attack_list[attack_count].list[j].x] == -1 &&
                            map[attack_list[attack_count].list[j].y][attack_list[attack_count].list[j].x] == 1) {
                            del_area_point = -1;
                        } else if (area_map[attack_list[attack_count].list[j].y][attack_list[attack_count].list[j].x] !=
                                   attack_list[attack_count].list[j].army_number &&
                                   map[attack_list[attack_count].list[j].y][attack_list[attack_count].list[j].x] == 1) {
                            del_area_point = -2;
                        }
                    }
                }
                ///////////
                if (isNaN(attack_list[attack_count].no_passive_sum_damage)) {
                    console.log('Parts NG');
                }
                if (rob_area_point != null) {
                    rob_area_point.area_point = my_unit.add_area_point * GG_DATA_ROB_AREA_POINT_FATIGUE_ACTION_TIMES;
                }
				if (status_change_done == false &&
					attack_list[attack_count].status_change_done == true) {
					status_change_done = true;
				}
				if (attack_list[attack_count].status_changes != null) {
					var status_change_count = attack_list[attack_count].status_changes.length;
				} else {
					var status_change_count = 0;
				}
				if (attack_list[attack_count].move_end_x != 0) {
	                rob_area_point = null;
					rob_area_point_fatigue = 0;
				}

                result.push({x: area_result[i].x,
                             y: area_result[i].y,
							 move_end_x: attack_list[attack_count].move_end_x,
							 move_end_y: attack_list[attack_count].move_end_y,
                             route: area_result[i].route,
                             army_number: army_number,
                             unit_number: unit_number,
                             fatigue: area_result[i].fatigue + attack_list[attack_count].fatigue + map_fatigue + GG_DATA_ACTION_FATIGUE + rob_area_point_fatigue,
                             exp: attack_list[attack_count].exp + temp_rescue_exp,
                             attack: attack_list[attack_count],
                             attack_info: attack_list[attack_count].attack_info,
                             damage: attack_list[attack_count].damage,
                             rescue: attack_list[attack_count].rescue,
                             status_changes: attack_list[attack_count].status_changes,
                             my_status_change: attack_list[attack_count].my_status_change,
							 recovery: null,
                             moved: area_result[i].moved,
                             //rob_area_point: JSON.parse(JSON.stringify(rob_area_point)),
                             rob_area_point: rob_area_point,
                             attack_x: attack_list[attack_count].attack_x,
                             attack_y: attack_list[attack_count].attack_y,
                             end_x: attack_list[attack_count].end_x,
                             end_y: attack_list[attack_count].end_y,
                             no_passive_sum_damage: attack_list[attack_count].no_passive_sum_damage + temp_rescue_damage + status_change_count,
							 // sort
							 // move
                             position_wait: position_wait,
                             area_point: area_point - del_area_point,
							 status_change_done: status_change_done
                });
                
            }
        }
		var no_attack_fatigue = 0;
		var no_attack_recovery = 0;
		var recovery = null;
		var temp_recovery = 0;
		if (my_unit.hitpoint < my_unit.max_hitpoint) {
			recovery = {x: area_result[i].x, y: area_result[i].y,
								   recovery: my_unit.big_recovery,
								   army_number: army_number ,
								   unit_number: unit_number};
			no_attack_recovery = my_unit.big_recovery;
			no_attack_fatigue = GG_DATA_NO_ACTION_RECOVERY_FATIGUE;
			temp_recovery = no_attack_recovery;
			if (my_unit.max_hitpoint < my_unit.hitpoint + temp_recovery) {
				temp_recovery = my_unit.max_hitpoint - my_unit.hitpoint; 
			}
		}
		if (my_unit.status_changed == GG_DATA_STATUS_CHANGE_UP_MOVE &&
			(area_result[i].x != my_unit.x ||
			area_result[i].y != my_unit.y)) {
			status_change_done = true;
		} else {
			status_change_done = false;
		}

        result.push({x: area_result[i].x,
                     y: area_result[i].y,
                     route: area_result[i].route,
                     army_number: army_number,
                     unit_number: unit_number,
                     fatigue: area_result[i].fatigue + map_fatigue + no_attack_fatigue + GG_DATA_ACTION_FATIGUE + rob_area_point_fatigue,
                     exp: 0 + temp_rescue_exp,
                     //no_passive_sum_damage: temp_recovery,
                     no_passive_sum_damage: 0,
                     rescue: null,
					 status_changes: null,
					 //recovery: JSON.parse(JSON.stringify(recovery)),
					 recovery: recovery,
                     moved: area_result[i].moved,
                     enemy_distance: enemy_distance,
                     position_wait: position_wait - 3,
                     area_point: area_point,
                     //rob_area_point: JSON.parse(JSON.stringify(rob_area_point)),
                     rob_area_point: rob_area_point,
					 status_change_done: status_change_done
        });
            
    }
    /////////////////////
    return result;
    
};


gg.animation.make_attack_animation = function(attack_obj, army) {

	var result = {};
    /////// NEW ATTACK ANIMATION /////////
	var count;
	var unit_dir_number;
	var bin = GG_DATA_ANIMATION_BIN;
	var my_unit = army[attack_obj.my_unit.army_number].unit[attack_obj.my_unit.unit_number];
	var attack_type = my_unit.attack_type;
    result.attack_animation = [];
	var attack_start = null;
	var second_attack_start = null;

	var avoidance_now_flag = false;
	var friend_pull_now_flag = false;
	var counter_now_flag = false;
	var attack_down_now_flag = false;
	var cover_now_flag = false
	var attack_enemy_push_now_flag = false;
	var enemy_push_now_flag = false;

	var effect;
	var diff_x, diff_y;
	var unit_dir;
	var diff;
	
	for (var i = 0; i < attack_obj.other_unit.length; i++) {
		if (attack_obj.other_unit[i].avoidance_now_flag) {
			avoidance_now_flag = true;
		} else if (attack_obj.other_unit[i].friend_pull_now_flag) {
			friend_pull_now_flag = true;
		} else if (attack_obj.other_unit[i].counter_now_flag) {
			counter_now_flag = true;
		} else if (attack_obj.other_unit[i].attack_down_now_flag) {
			attack_down_now_flag = true;
		} else if (attack_obj.other_unit[i].cover_now_flag) {
			cover_now_flag = true;
		} else if (attack_obj.other_unit[i].attack_enemy_push_now_flag) {
			attack_enemy_push_now_flag = true;
		} else if (attack_obj.other_unit[i].enemy_push_now_flag) {
			enemy_push_now_flag = true;
		}
	}
	var attack_dir = GG_PARTS_ATTACK_DIRECTION[my_unit.attack_min_range];
	if (attack_type == GG_DATA_ATTACK_TYPE_CHAINE) {
		attack_dir = GG_PARTS_ATTACK_DIRECTION[my_unit.attack_min_range - 1];
	}
	//////////////////////////////////////
	
	if (enemy_push_now_flag == true &&
		attack_obj.my_unit.attacked.x == -1) {
		result.route_count = 2;
		for (var i = 0; i < 6; i++) {
	        result.attack_animation.push({x: attack_obj.my_unit.attacker.x, y: attack_obj.my_unit.attacker.y,
                                                     picture:GG_DATA_PICTURE_STATUS0,
                                                     picture_number: 0,
                                                     unit_dir:0});
		}
		diff_x = (attack_obj.my_unit.moved.x - attack_obj.my_unit.attacker.x) /12 ;
		diff_y = (attack_obj.my_unit.moved.y - attack_obj.my_unit.attacker.y) / 12;
		temp_x = attack_obj.my_unit.attacker.x;
		temp_y = attack_obj.my_unit.attacker.y;
		for (var i = 0; i < 12; i++) {
			temp_x += diff_x;
			temp_y += diff_y;
			result.attack_animation.push({x: temp_x,
												  y: temp_y,
												 picture:GG_DATA_PICTURE_MOVE,
												 picture_number: GG_PARTS_UNIQ_ANIMATION[i],
												 unit_dir: attack_obj.my_unit.moved.unit_dir
					});
		}
		
		for (var i = 0; i < 6; i++) {
	        result.attack_animation.push({x: attack_obj.my_unit.moved.x,
										  y: attack_obj.my_unit.moved.y,
                                                    picture: GG_DATA_PICTURE_STATUS0,
                                                     picture_number: 0,
                                                     unit_dir:0});
		}
		result.move_list = [];

		diff = {x: GG_DATA_MOVE_DIRECTION[attack_obj.other_unit[0].route[0]].x / 12,
		        y: GG_DATA_MOVE_DIRECTION[attack_obj.other_unit[0].route[0]].y / 12};

		result.move_list[0] = {};
		result.move_list[0].attack_animation = [];
		result.move_list[0].attack_animation.push({x: attack_obj.other_unit[0].x + diff.x * 1,
										           y: attack_obj.other_unit[0].y + diff.y * 1,
														 picture:GG_DATA_PICTURE_ATTACK1,
														 picture_number: 0,
														 unit_dir: attack_obj.other_unit[0].unit_dir});
		result.move_list[0].attack_animation.push({x: attack_obj.other_unit[0].x + diff.x * 2,
										 y: attack_obj.other_unit[0].y + diff.y * 2,
														 picture:GG_DATA_PICTURE_ATTACK1,
														 picture_number: 1,
														 unit_dir: attack_obj.other_unit[0].unit_dir});

		for (var i = 0; i < 20; i++) {
			result.move_list[0].attack_animation.push({x: attack_obj.other_unit[0].x + diff.x * 2,
										 y: attack_obj.other_unit[0].y + diff.y * 2,
														 picture:GG_DATA_PICTURE_ATTACK1,
														 picture_number: 2,
														 unit_dir: attack_obj.other_unit[0].unit_dir});
		}
														 

		result.move_list[0].attack_animation.push({x: attack_obj.other_unit[0].x + diff.x * 1,
										 y: attack_obj.other_unit[0].y + diff.y * 1,
														 picture:GG_DATA_PICTURE_MOVE,
														 picture_number: 1,
														 unit_dir: attack_obj.other_unit[0].unit_dir});
		result.move_list[0].attack_animation.push({x: attack_obj.other_unit[0].x,
										 y: attack_obj.other_unit[0].y,
														 picture:GG_DATA_PICTURE_MOVE,
														 picture_number: 1,
														 unit_dir: attack_obj.other_unit[0].unit_dir});
			
		//for (var i = 0; i < 12; i++) {
		//	result.move_list[0].attack_animation.push({x: attack_obj.other_unit[0].x,
		//								               y: attack_obj.other_unit[0].y,
		//												 picture:GG_DATA_PICTURE_STATUS0,
		//												 picture_number: 0,
		//												 unit_dir: 0});
		//	
		//}

	} else if (attack_type == GG_DATA_ATTACK_TYPE_NORMAL ||
		attack_type == GG_DATA_ATTACK_TYPE_SPEAR ||
		attack_type == GG_DATA_ATTACK_TYPE_AX ||
		attack_type == GG_DATA_ATTACK_TYPE_MACE ||
		attack_type == GG_DATA_ATTACK_TYPE_MORNINGSTAR ||
		//attack_type == GG_DATA_ATTACK_TYPE_BELL ||
		//attack_type == GG_DATA_ATTACK_TYPE_TRUMPET ||
		attack_type == GG_DATA_ATTACK_TYPE_HOSPITAL
		){
		
		result.route_count = 2;
		
        var start_wait = 6;
		var before_wait = 0;
		var after_wait = 6;
		var my_unit_del_before_wait = 0;
		if (enemy_push_now_flag == true) {
			result.route_count += 2;
			before_wait += 24;
			my_unit_del_before_wait += 24;
		}
		if (cover_now_flag == true) {
			result.route_count += 3;
			before_wait += 24;
			after_wait += 12;
		} else {
			if (friend_pull_now_flag == true) {
				result.route_count += 1;
				before_wait += 12;
			}
			if (counter_now_flag == true ||
				attack_down_now_flag == true) {
				result.route_count += 1;
				after_wait += 12;
			}
		}

		// my unit
		effect = GG_DATA_ANIMATION_EFFECT_NONE;
		if (attack_obj.my_unit.assault_flag == true) {
			effect = GG_DATA_ANIMATION_EFFECT_ASSAULT;
		}
		if (attack_obj.my_unit.class_down_flag == true) {
			effect = GG_DATA_ANIMATION_EFFECT_CLASS_DOWN;
		}
		////// enemy_push
		if (enemy_push_now_flag == true) {
			var attacker = {x: attack_obj.my_unit.moved.x,
			               y: attack_obj.my_unit.moved.y};
			for (var i = 0; i < 6; i++) {
				result.attack_animation.push({x: attack_obj.my_unit.attacker.x, y: attack_obj.my_unit.attacker.y,
														 picture:GG_DATA_PICTURE_STATUS0,
														 picture_number: 0,
														 unit_dir:0});
			}
			diff_x = (attack_obj.my_unit.moved.x - attack_obj.my_unit.attacker.x) /12 ;
			diff_y = (attack_obj.my_unit.moved.y - attack_obj.my_unit.attacker.y) / 12;
			temp_x = attack_obj.my_unit.attacker.x;
			temp_y = attack_obj.my_unit.attacker.y;
			for (var i = 0; i < 12; i++) {
				temp_x += diff_x;
				temp_y += diff_y;
				result.attack_animation.push({x: temp_x,
													  y: temp_y,
													 picture:GG_DATA_PICTURE_MOVE,
													 picture_number: GG_PARTS_UNIQ_ANIMATION[i],
													 unit_dir: attack_obj.my_unit.moved.unit_dir
						});
			}
			
			for (var i = 0; i < 6; i++) {
				result.attack_animation.push({x: attack_obj.my_unit.moved.x,
											  y: attack_obj.my_unit.moved.y,
														 picture: GG_DATA_PICTURE_STATUS0,
														 picture_number: 0,
														 unit_dir:0});
			}

		} else {
			var attacker = {x: attack_obj.my_unit.attacker.x,
			               y: attack_obj.my_unit.attacker.y};
			
		}
		//
        for (var j = 0; j < attack_dir.length; j++) {
            if (attack_obj.my_unit.attacked.x - attacker.x == attack_dir[j].x &&
                attack_obj.my_unit.attacked.y - attacker.y == attack_dir[j].y) {
                count = j;
                break;
            }
        }

        diff = {x:GG_DATA_MOVE_DIRECTION[attack_dir[count].move_dir].x / bin,
                y:GG_DATA_MOVE_DIRECTION[attack_dir[count].move_dir].y / bin};

		for (var j = 0; j < before_wait + start_wait - my_unit_del_before_wait; j++) {
            result.attack_animation.push({x: attacker.x, y: attacker.y,
                                                     picture:GG_DATA_PICTURE_MOVE,
                                                     picture_number: 1,
													 effect: effect,
                                                     unit_dir:attack_dir[count].unit_dir});
		}
		var damage_count = 0;
		if (attack_type != GG_DATA_ATTACK_TYPE_SPEAR) {
			attack_start = before_wait + start_wait + 4;
			damage_count = 4;
			result.attack_animation.push({x: attacker.x + diff.x * 1,
										 y: attacker.y + diff.y * 1,
														 picture:GG_DATA_PICTURE_ATTACK1,
														 effect: effect,
														 picture_number: 0,
														 unit_dir:attack_dir[count].unit_dir});
			result.attack_animation.push({x: attacker.x + diff.x * 1,
										 y: attacker.y + diff.y * 1,
														 picture:GG_DATA_PICTURE_ATTACK1,
														 effect: effect,
														 picture_number: 0,
														 unit_dir:attack_dir[count].unit_dir});
			
			result.attack_animation.push({x: attacker.x + diff.x * 2,
										 y: attacker.y + diff.y * 2,
														 picture:GG_DATA_PICTURE_ATTACK1,
														 effect: effect,
														 picture_number: 1,
														 unit_dir:attack_dir[count].unit_dir});
			for (var j = 0; j < 7; j++) {
				result.attack_animation.push({x: attacker.x + diff.x * 2,
											 y: attacker.y + diff.y * 2,
														 picture:GG_DATA_PICTURE_ATTACK1,
														 effect: effect,
														 picture_number: 2,
														 unit_dir:attack_dir[count].unit_dir});
			}
			for (var j = 1; j > -1; j--) {
				 result.attack_animation.push({x: attacker.x + diff.x * j,
											  y: attacker.y + diff.y * j,
														 picture:GG_DATA_PICTURE_MOVE,
														 effect: effect,
														 picture_number: GG_PARTS_UNIQ_ANIMATION[j],
														 unit_dir:attack_dir[count].unit_dir});
			}
		} else if (attack_type == GG_DATA_ATTACK_TYPE_SPEAR) {
			attack_start = before_wait + start_wait + 3;
			damage_count = 3;
			result.attack_animation.push({x: attacker.x + diff.x * 1,
										  y: attacker.y + diff.y * 1,
														 picture:GG_DATA_PICTURE_ATTACK1,
														 effect: effect,
														 picture_number: 0,
														 unit_dir:attack_dir[count].unit_dir});
			result.attack_animation.push({x: attacker.x + diff.x * 1,
										  y: attacker.y + diff.y * 1,
														 picture:GG_DATA_PICTURE_ATTACK1,
														 effect: effect,
														 picture_number: 0,
														 unit_dir:attack_dir[count].unit_dir});
			result.attack_animation.push({x: attacker.x + diff.x * 2,
										  y: attacker.y + diff.y * 2,
														 picture:GG_DATA_PICTURE_ATTACK1,
														 effect: effect,
														 picture_number: 1,
														 unit_dir:attack_dir[count].unit_dir});
			
			for (var j = 3; j < 6; j++) {
				result.attack_animation.push({x: attacker.x + diff.x * j,
											  y: attacker.y + diff.y * j,
															 picture:GG_DATA_PICTURE_ATTACK1,
															 effect: effect,
															 picture_number: 2,
															 unit_dir:attack_dir[count].unit_dir});
			}
			result.attack_animation.push({x: attacker.x + diff.x * 5,
										  y: attacker.y + diff.y * 5,
															 picture:GG_DATA_PICTURE_ATTACK1,
															 effect: effect,
															 picture_number: 2,
															 unit_dir:attack_dir[count].unit_dir});

			for (var j = 4; j > -1; j--) {
				 result.attack_animation.push({x: attacker.x + diff.x * j,
											   y: attacker.y + diff.y * j,
														 picture:GG_DATA_PICTURE_MOVE,
														 effect: effect,
														 picture_number: GG_PARTS_UNIQ_ANIMATION[j],
														 unit_dir:attack_dir[count].unit_dir});
			}
		}

		for (var j = 0; j < after_wait; j++) {
             result.attack_animation.push({x: attacker.x, y: attacker.y,
                                                     picture:GG_DATA_PICTURE_MOVE,
													 effect: effect,
                                                     picture_number: 1,
                                                     unit_dir:attack_dir[count].unit_dir});
		}
		result.move_list = [];
        for (var j = 0; j < attack_obj.other_unit.length; j++) {
			if (attack_obj.other_unit[j].avoidance_now_flag != true &&
				attack_obj.other_unit[j].friend_pull_now_flag != true &&
				attack_obj.other_unit[j].counter_now_flag != true &&
				attack_obj.other_unit[j].attack_down_now_flag != true &&
				attack_obj.other_unit[j].cover_now_flag != true &&
				attack_obj.other_unit[j].enemy_push_now_flag != true &&
				attack_obj.other_unit[j].attack_enemy_push_now_flag != true) {
				continue;
			}
			result.move_list[j] = {};
			result.move_list[j].attack_animation = [];

			if (attack_obj.other_unit[j].cover_now_flag == true) {
				
				var diff_x = GG_DATA_MOVE_DIRECTION[attack_obj.other_unit[j].route[0]].x / 12;
				var diff_y = GG_DATA_MOVE_DIRECTION[attack_obj.other_unit[j].route[0]].y / 12;

                for (var k = 0; k < start_wait + before_wait - 24; k++) {
					result.move_list[j].attack_animation.push({x: attack_obj.other_unit[j].start_x,
																       y: attack_obj.other_unit[j].start_y,
                                                     picture:GG_DATA_PICTURE_MOVE,
                                                     picture_number: 1,
                                                     unit_dir: 0
						});
				}

				var unit_dir = 0;
				if (attack_obj.other_unit[j].route[0] == 0 ||
			        attack_obj.other_unit[j].route[0] == 5 ) {
					unit_dir = 3;
				} else if (attack_obj.other_unit[j].route[0] == 1) {
					unit_dir = 1;
				} else if (attack_obj.other_unit[j].route[0] == 4) {
					unit_dir = 2;
				}
				for (var k = 0; k < 12; k++) {
					result.move_list[j].attack_animation.push({x: attack_obj.other_unit[j].start_x + diff_x * (k + 1),
																       y: attack_obj.other_unit[j].start_y + diff_y * (k + 1),
                                                     picture:GG_DATA_PICTURE_MOVE,
                                                     picture_number: GG_PARTS_UNIQ_ANIMATION[k],
                                                     unit_dir: unit_dir
						});
				}
				for (var k = 0; k < 12 + damage_count; k++) {
					result.move_list[j].attack_animation.push({x: attack_obj.other_unit[j].start_x + diff_x * 12,
																       y: attack_obj.other_unit[j].start_y + diff_y * 12,
                                                     //picture:GG_DATA_PICTURE_STATUS,
                                                     picture: 's7',
                                                     picture_number: GG_PARTS_UNIQ_ANIMATION[k],
                                                     unit_dir: 0
						});
				}
				for (var k = 0; k < 12 - damage_count; k++) {
					result.move_list[j].attack_animation.push({x: attack_obj.other_unit[j].start_x + diff_x * 12,
																       y: attack_obj.other_unit[j].start_y + diff_y * 12,
                                                     //picture:GG_DATA_PICTURE_STATUS,
                                                     picture: 's4',
                                                     picture_number: 0,
                                                     unit_dir: 0
						});
				}
				for (var k = 11; k > -1; k--) {
					result.move_list[j].attack_animation.push({x: attack_obj.other_unit[j].start_x + diff_x * k,
																       y: attack_obj.other_unit[j].start_y + diff_y * k,
                                                     picture:GG_DATA_PICTURE_MOVE,
                                                     picture_number: GG_PARTS_UNIQ_ANIMATION[k],
                                                     unit_dir: unit_dir
						});
				}

                for (var k = 0; k < after_wait - 12; k++) {
					result.move_list[j].attack_animation.push({x: attack_obj.other_unit[j].start_x,
																       y: attack_obj.other_unit[j].start_y,
                                                     picture:GG_DATA_PICTURE_MOVE,
                                                     picture_number: 1,
                                                     unit_dir: 0
						});
				}
                
			} else if (attack_obj.other_unit[j].avoidance_now_flag == true) {					
				var diff_x = GG_DATA_MOVE_DIRECTION[attack_obj.other_unit[j].route[0]].x / 12;
				var diff_y = GG_DATA_MOVE_DIRECTION[attack_obj.other_unit[j].route[0]].y / 12;

				var unit_dir = 0;
				if (attack_obj.other_unit[j].route[0] == 2 ||
			        attack_obj.other_unit[j].route[0] == 3 ) {
					unit_dir = 3;
				} else if (attack_obj.other_unit[j].route[0] == 4) {
					unit_dir = 1;
				} else if (attack_obj.other_unit[j].route[0] == 1) {
					unit_dir = 2;
				}
				for (var k = 0; k < before_wait + start_wait; k++) {
					result.move_list[j].attack_animation.push({x: attack_obj.other_unit[j].start_x,
																       y: attack_obj.other_unit[j].start_y,
                                                     //picture:GG_DATA_PICTURE_MOVE,
                                                     //picture_number: 1,
                                                     //unit_dir: unit_dir
                                                     picture: GG_DATA_PICTURE_STATUS0,
                                                     picture_number: 0,
                                                     unit_dir: 0
						});
				}

				for (var k = 0; k < 3; k++) {
					result.move_list[j].attack_animation.push({x: attack_obj.other_unit[j].start_x + diff_x * (k + 1),
																       y: attack_obj.other_unit[j].start_y + diff_y * (k + 1),
                                                     picture:GG_DATA_PICTURE_MOVE,
                                                     picture_number: GG_PARTS_UNIQ_ANIMATION[k],
                                                     unit_dir: unit_dir
						});
				}
				for (var k = 0; k < 6; k++) {
					result.move_list[j].attack_animation.push({x: attack_obj.other_unit[j].start_x + diff_x * 3,
																       y: attack_obj.other_unit[j].start_y + diff_y * 3,
                                                     picture:GG_DATA_PICTURE_MOVE,
                                                     picture_number: 1,
                                                     unit_dir: unit_dir
						});
				}
				for (var k = 2; k > -1; k--) {
					result.move_list[j].attack_animation.push({x: attack_obj.other_unit[j].start_x + diff_x * k,
																       y: attack_obj.other_unit[j].start_y + diff_y * k,
                                                     picture:GG_DATA_PICTURE_MOVE,
                                                     picture_number: GG_PARTS_UNIQ_ANIMATION[k],
                                                     unit_dir: unit_dir
						});
				}
				for (var k = 0; k < after_wait; k++) {
					result.move_list[j].attack_animation.push({x: attack_obj.other_unit[j].start_x,
																       y: attack_obj.other_unit[j].start_y,
                                                     picture:GG_DATA_PICTURE_MOVE,
                                                     picture_number: 1,
                                                     unit_dir: unit_dir
						});
				}
			} else if (attack_obj.other_unit[j].friend_pull_now_flag == true) {
                //
				var pull_wait = 0;
				if (before_wait == 24) {
					pull_wait = 12;
				} else if (before_wait == 36) {
					pull_wait = 24;
				}
                for (var k = 0; k < start_wait + pull_wait; k++) {
                    result.move_list[j].attack_animation.push({x: attack_obj.other_unit[j].start_x,
                                                                           y: attack_obj.other_unit[j].start_y,
                                                         picture:GG_DATA_PICTURE_MOVE,
                                                         picture_number: 1,
                                                         unit_dir: 0
                            });
                }

                if (attack_obj.other_unit[j].route.length == 1) {
                    // 6 wait
                    for (var k = 0; k < 6; k++) {
                        result.move_list[j].attack_animation.push({x: attack_obj.other_unit[j].start_x,
                                                                           y: attack_obj.other_unit[j].start_y,
                                                         picture:GG_DATA_PICTURE_MOVE,
                                                         picture_number: 1,
                                                         unit_dir: 0
                            });
                    }
                    // 12 back
    				diff_x = GG_DATA_MOVE_DIRECTION[attack_obj.other_unit[j].route[0]].x / 12;
    				diff_y = GG_DATA_MOVE_DIRECTION[attack_obj.other_unit[j].route[0]].y / 12;
                    unit_dir = 0;
                    if (attack_obj.other_unit[j].route[0] == 2 ||
                        attack_obj.other_unit[j].route[0] == 3) {
                        unit_dir = 3;
                    } else if (attack_obj.other_unit[j].route[0] == 1) {
                        unit_dir = 2;
                    } else if (attack_obj.other_unit[j].route[0] == 4) {
                        unit_dir = 1;
                    }
                    for (var k = 0; k < 12; k++) {
                        result.move_list[j].attack_animation.push({x:attack_obj.other_unit[j].start_x + diff_x * k,
                                                                          y:attack_obj.other_unit[j].start_y + diff_y * k,
                                                                     picture: GG_DATA_PICTURE_MOVE,
                                                                     picture_number: GG_PARTS_UNIQ_ANIMATION[k],
                                                                     unit_dir: unit_dir});

                    }
                    // 6 wait
                    for (var k = 0; k < 6; k++) {
                        result.move_list[j].attack_animation.push({x: attack_obj.other_unit[j].x,
                                                                           y: attack_obj.other_unit[j].y,
                                                         picture:GG_DATA_PICTURE_MOVE,
                                                         picture_number: 1,
                                                         unit_dir: 0
                            });
                    }
                    
                } else if (attack_obj.other_unit[j].route.length == 2) {

                    // 6 f
    				diff_x = GG_DATA_MOVE_DIRECTION[attack_obj.other_unit[j].route[0]].x / 12;
    				diff_y = GG_DATA_MOVE_DIRECTION[attack_obj.other_unit[j].route[0]].y / 12;
                    unit_dir = 0;
                    if (attack_obj.other_unit[j].route[0] == 0 ||
                        attack_obj.other_unit[j].route[0] == 5) {
                        unit_dir = 3;
                    } else if (attack_obj.other_unit[j].route[0] == 1) {
                        unit_dir = 1;
                    } else if (attack_obj.other_unit[j].route[0] == 4) {
                        unit_dir = 2;
                    }
                    for (var k = 0; k < 6; k++) {
                        result.move_list[j].attack_animation.push({x:attack_obj.other_unit[j].start_x + diff_x * k,
                                                                          y:attack_obj.other_unit[j].start_y + diff_y * k,
                                                                     picture: GG_DATA_PICTURE_MOVE,
                                                                     picture_number: GG_PARTS_UNIQ_ANIMATION[k],
                                                                     unit_dir: unit_dir});
                    }
                    // 6 b
                    for (var k = 0; k < 6; k++) {
                        result.move_list[j].attack_animation.push({x:attack_obj.other_unit[j].start_x + diff_x * 6 - diff_x * k,
                                                                          y:attack_obj.other_unit[j].start_y + diff_y * 6 - diff_y * k,
                                                                     picture: GG_DATA_PICTURE_MOVE,
                                                                     picture_number: GG_PARTS_UNIQ_ANIMATION[k],
                                                                     unit_dir: unit_dir});
                    }
                    // 12 b
    				diff_x = GG_DATA_MOVE_DIRECTION[attack_obj.other_unit[j].route[1]].x / 12;
    				diff_y = GG_DATA_MOVE_DIRECTION[attack_obj.other_unit[j].route[1]].y / 12;
                    unit_dir = 0;
                    if (attack_obj.other_unit[j].route[1] == 2 ||
                        attack_obj.other_unit[j].route[1] == 3) {
                        unit_dir = 3;
                    } else if (attack_obj.other_unit[j].route[1] == 1) {
                        unit_dir = 2;
                    } else if (attack_obj.other_unit[j].route[1] == 4) {
                        unit_dir = 1;
                    }
                    for (var k = 0; k < 12; k++) {
                        result.move_list[j].attack_animation.push({x:attack_obj.other_unit[j].start_x + diff_x * k,
                                                                          y:attack_obj.other_unit[j].start_y + diff_y * k,
                                                                     picture: GG_DATA_PICTURE_MOVE,
                                                                     picture_number: GG_PARTS_UNIQ_ANIMATION[k],
                                                                     unit_dir: unit_dir});
                    }
                }
                // attack + after 
				for (var k = 0; k < after_wait; k++) {
					result.move_list[j].attack_animation.push({x: attack_obj.other_unit[j].x,
																       y: attack_obj.other_unit[j].y,
                                                     picture:GG_DATA_PICTURE_MOVE,
                                                     picture_number: 1,
                                                     unit_dir: 0
						});
				}
            
			} else if (attack_obj.other_unit[j].counter_now_flag == true) {
				
				diff_x = GG_DATA_MOVE_DIRECTION[attack_obj.other_unit[j].route[2]].x / 12;
				diff_y = GG_DATA_MOVE_DIRECTION[attack_obj.other_unit[j].route[2]].y / 12;

				unit_dir = 0;
				if (attack_obj.other_unit[j].route[2] == 0 ||
			        attack_obj.other_unit[j].route[2] == 5 ) {
					unit_dir = 3;
				} else if (attack_obj.other_unit[j].route[2] == 1) {
					unit_dir = 1;
				} else if (attack_obj.other_unit[j].route[2] == 4) {
					unit_dir = 2;
				}
				for (var k = 0; k < before_wait + start_wait + damage_count; k++) {
					result.move_list[j].attack_animation.push({x: attack_obj.other_unit[j].start_x,
																       y: attack_obj.other_unit[j].start_y,
                                                     picture:GG_DATA_PICTURE_MOVE,
                                                     picture_number: 1,
                                                     unit_dir: 0
						});
				}

				for (var k = 0; k < 12 - damage_count; k++) {
				//for (var k = 0; k < damage_count; k++) {
					result.move_list[j].attack_animation.push({x: attack_obj.other_unit[j].start_x,
																       y: attack_obj.other_unit[j].start_y,
                                                     //picture:GG_DATA_PICTURE_STATUS,
                                                     picture: 's4',
                                                     picture_number: 0,
                                                     unit_dir: 0
						});
				}
				
				result.move_list[j].attack_animation.push({x:attack_obj.other_unit[j].start_x + diff_x * 1,
																  y:attack_obj.other_unit[j].start_y + diff_y * 1,
															 picture:GG_DATA_PICTURE_ATTACK2,
															 picture_number: 0,
															 unit_dir:unit_dir});
				result.move_list[j].attack_animation.push({x:attack_obj.other_unit[j].start_x + diff_x * 1,
																  y:attack_obj.other_unit[j].start_y + diff_y * 1,
															 picture:GG_DATA_PICTURE_ATTACK2,
															 picture_number: 0,
															 unit_dir:unit_dir});
				result.move_list[j].attack_animation.push({x:attack_obj.other_unit[j].start_x + diff_x * 2,
																  y:attack_obj.other_unit[j].start_y + diff_y * 2,
															 picture:GG_DATA_PICTURE_ATTACK2,
															 picture_number: 1,
															 unit_dir:unit_dir});
				second_attack_start = before_wait + start_wait + 12 + 4;
				
				for (var k = 0; k < 7; k++) {
					result.move_list[j].attack_animation.push({x:attack_obj.other_unit[j].start_x + diff_x * 2,
																  y:attack_obj.other_unit[j].start_y + diff_y * 2,
															 picture:GG_DATA_PICTURE_ATTACK2,
															 picture_number: 2,
															 unit_dir:unit_dir});
				}
				for (var k = 1; k > -1; k--) {
					result.move_list[j].attack_animation.push({x: attack_obj.other_unit[j].start_x + diff_x * k,
																       y: attack_obj.other_unit[j].start_y + diff_y * k,
                                                     picture:GG_DATA_PICTURE_MOVE,
                                                     picture_number: GG_PARTS_UNIQ_ANIMATION[k],
                                                     unit_dir: unit_dir
						});
				}
				
				for (var k = 0; k < after_wait - 12; k++) {
					result.move_list[j].attack_animation.push({x: attack_obj.other_unit[j].start_x,
																       y: attack_obj.other_unit[j].start_y,
                                                     picture:GG_DATA_PICTURE_MOVE,
                                                     picture_number: 1,
                                                     unit_dir: unit_dir
						});
				}
			} else if (attack_obj.other_unit[j].attack_down_now_flag == true) {
				
				diff_x = GG_DATA_MOVE_DIRECTION[attack_obj.other_unit[j].route[2]].x / 12;
				diff_y = GG_DATA_MOVE_DIRECTION[attack_obj.other_unit[j].route[2]].y / 12;

				unit_dir = 0;
				if (attack_obj.other_unit[j].route[2] == 0 ||
			        attack_obj.other_unit[j].route[2] == 5 ) {
					unit_dir = 3;
				} else if (attack_obj.other_unit[j].route[2] == 1) {
					unit_dir = 1;
				} else if (attack_obj.other_unit[j].route[2] == 4) {
					unit_dir = 2;
				}
				for (var k = 0; k < before_wait + start_wait + damage_count; k++) {
					result.move_list[j].attack_animation.push({x: attack_obj.other_unit[j].start_x,
																       y: attack_obj.other_unit[j].start_y,
                                                     picture:GG_DATA_PICTURE_MOVE,
                                                     picture_number: 1,
                                                     unit_dir: 0
						});
				}

				for (var k = 0; k < 12 - damage_count; k++) {
				//for (var k = 0; k < damage_count; k++) {
					result.move_list[j].attack_animation.push({x: attack_obj.other_unit[j].start_x,
																       y: attack_obj.other_unit[j].start_y,
                                                     //picture:GG_DATA_PICTURE_STATUS,
                                                     picture: 's4',
                                                     picture_number: 0,
                                                     unit_dir: 0
						});
				}
				
				result.move_list[j].attack_animation.push({x:attack_obj.other_unit[j].start_x + diff_x * 1,
																  y:attack_obj.other_unit[j].start_y + diff_y * 1,
															 picture:GG_DATA_PICTURE_ATTACK1,
															 picture_number: 0,
															 unit_dir:unit_dir});
				result.move_list[j].attack_animation.push({x:attack_obj.other_unit[j].start_x + diff_x * 1,
																  y:attack_obj.other_unit[j].start_y + diff_y * 1,
															 picture:GG_DATA_PICTURE_ATTACK1,
															 picture_number: 0,
															 unit_dir:unit_dir});
				result.move_list[j].attack_animation.push({x:attack_obj.other_unit[j].start_x + diff_x * 2,
																  y:attack_obj.other_unit[j].start_y + diff_y * 2,
															 picture:GG_DATA_PICTURE_ATTACK1,
															 picture_number: 1,
															 unit_dir:unit_dir});
				second_attack_start = before_wait + start_wait + 12 + 4;
				
				for (var k = 0; k < 7; k++) {
					result.move_list[j].attack_animation.push({x:attack_obj.other_unit[j].start_x + diff_x * 2,
																  y:attack_obj.other_unit[j].start_y + diff_y * 2,
															 picture:GG_DATA_PICTURE_ATTACK1,
															 picture_number: 2,
															 unit_dir:unit_dir});
				}
				for (var k = 1; k > -1; k--) {
					result.move_list[j].attack_animation.push({x: attack_obj.other_unit[j].start_x + diff_x * k,
																       y: attack_obj.other_unit[j].start_y + diff_y * k,
                                                     picture:GG_DATA_PICTURE_MOVE,
                                                     picture_number: GG_PARTS_UNIQ_ANIMATION[k],
                                                     unit_dir: unit_dir
						});
				}
				
				for (var k = 0; k < after_wait - 12; k++) {
					result.move_list[j].attack_animation.push({x: attack_obj.other_unit[j].start_x,
																       y: attack_obj.other_unit[j].start_y,
                                                     picture:GG_DATA_PICTURE_MOVE,
                                                     picture_number: 1,
                                                     unit_dir: unit_dir
						});
				}
			} else if (attack_obj.other_unit[j].enemy_push_now_flag == true) {

				diff = {x: GG_DATA_MOVE_DIRECTION[attack_obj.other_unit[j].route[0]].x / 12,
						y: GG_DATA_MOVE_DIRECTION[attack_obj.other_unit[j].route[0]].y / 12};
		
				result.move_list[j] = {};
				result.move_list[j].attack_animation = [];
				result.move_list[j].attack_animation.push({x: attack_obj.other_unit[j].x + diff.x * 1,
														   y: attack_obj.other_unit[j].y + diff.y * 1,
																 picture:GG_DATA_PICTURE_ATTACK1,
																 picture_number: 0,
																 unit_dir: attack_obj.other_unit[j].unit_dir});
				result.move_list[j].attack_animation.push({x: attack_obj.other_unit[j].x + diff.x * 2,
												 y: attack_obj.other_unit[j].y + diff.y * 2,
																 picture:GG_DATA_PICTURE_ATTACK1,
																 picture_number: 1,
																 unit_dir: attack_obj.other_unit[0].unit_dir});
		
				for (var i = 0; i < 21; i++) {
					result.move_list[j].attack_animation.push({x: attack_obj.other_unit[j].x + diff.x * 2,
												 y: attack_obj.other_unit[j].y + diff.y * 2,
																 picture:GG_DATA_PICTURE_ATTACK1,
																 picture_number: 2,
																 unit_dir: attack_obj.other_unit[j].unit_dir});
				}
																 
		
				result.move_list[j].attack_animation.push({x: attack_obj.other_unit[j].x + diff.x * 1,
												 y: attack_obj.other_unit[j].y + diff.y * 1,
																 picture:GG_DATA_PICTURE_MOVE,
																 picture_number: 1,
																 unit_dir: attack_obj.other_unit[j].unit_dir});
					
				for (var i = 0; i < result.route_count * 12 - 24; i++) {
					result.move_list[j].attack_animation.push({x: attack_obj.other_unit[j].x,
															   y: attack_obj.other_unit[j].y,
																 picture:GG_DATA_PICTURE_STATUS0,
																 picture_number: 0,
																 unit_dir: 0});
					
				}
			}
        }
	} else if (attack_type == GG_DATA_ATTACK_TYPE_SABER){
		
		result.route_count = 3;
		
        var start_wait = 6;
		var before_wait = 0;
		var after_wait = 6;
		var my_unit_del_before_wait = 0;
		if (enemy_push_now_flag == true) {
			result.route_count += 2;
			before_wait += 24;
			my_unit_del_before_wait += 24;
		}

		if (cover_now_flag == true) {
			result.route_count += 3;
			before_wait += 24;
			after_wait += 12;
		} else {
			if (friend_pull_now_flag == true) {
				result.route_count += 1;
				before_wait += 12;
			}
			if (counter_now_flag == true ||
				attack_down_now_flag == true) {
				result.route_count += 1;
				after_wait += 12;
			}
		}

		effect = GG_DATA_ANIMATION_EFFECT_NONE;
		if (attack_obj.my_unit.assault_flag == true) {
			effect = GG_DATA_ANIMATION_EFFECT_ASSAULT;
		}
		if (attack_obj.my_unit.class_down_flag == true) {
			effect = GG_DATA_ANIMATION_EFFECT_CLASS_DOWN;
		}
		
		////// enemy_push
		if (enemy_push_now_flag == true) {
			var attacker = {x: attack_obj.my_unit.moved.x,
			                y: attack_obj.my_unit.moved.y};
			for (var i = 0; i < 6; i++) {
				result.attack_animation.push({x: attack_obj.my_unit.attacker.x, y: attack_obj.my_unit.attacker.y,
														 picture:GG_DATA_PICTURE_STATUS0,
														 picture_number: 0,
														 unit_dir:0});
			}
			diff_x = (attack_obj.my_unit.moved.x - attack_obj.my_unit.attacker.x) /12 ;
			diff_y = (attack_obj.my_unit.moved.y - attack_obj.my_unit.attacker.y) / 12;
			temp_x = attack_obj.my_unit.attacker.x;
			temp_y = attack_obj.my_unit.attacker.y;
			for (var i = 0; i < 12; i++) {
				temp_x += diff_x;
				temp_y += diff_y;
				result.attack_animation.push({x: temp_x,
													  y: temp_y,
													 picture:GG_DATA_PICTURE_MOVE,
													 picture_number: GG_PARTS_UNIQ_ANIMATION[i],
													 unit_dir: attack_obj.my_unit.moved.unit_dir
						});
			}
			
			for (var i = 0; i < 6; i++) {
				result.attack_animation.push({x: attack_obj.my_unit.moved.x,
											  y: attack_obj.my_unit.moved.y,
														 picture: GG_DATA_PICTURE_STATUS0,
														 picture_number: 0,
														 unit_dir:0});
			}
		} else {
			var attacker = {x: attack_obj.my_unit.attacker.x,
			                y: attack_obj.my_unit.attacker.y};
			
		}
		//
        for (var j = 0; j < attack_dir.length; j++) {
            if (attack_obj.my_unit.attacked.x - attacker.x == attack_dir[j].x &&
                attack_obj.my_unit.attacked.y - attacker.y == attack_dir[j].y) {
                count = j;
                break;
            }
        }
        diff = {x:GG_DATA_MOVE_DIRECTION[attack_dir[count].move_dir].x / bin,
                y:GG_DATA_MOVE_DIRECTION[attack_dir[count].move_dir].y / bin};

					
		for (var j = 0; j < before_wait + start_wait - my_unit_del_before_wait; j++) {
            result.attack_animation.push({x: attacker.x, y: attacker.y,
                                                     picture:GG_DATA_PICTURE_MOVE,
                                                     picture_number: 1,
													 effect: effect,
                                                     unit_dir:attack_dir[count].unit_dir});
		}
		var damage_count = 0;

		attack_start = before_wait + start_wait + 4;
		damage_count = 4;
		result.attack_animation.push({x: attacker.x + diff.x * 1,
										 y: attacker.y + diff.y * 1,
														 picture:GG_DATA_PICTURE_ATTACK1,
														 effect: effect,
														 picture_number: 0,
														 unit_dir:attack_dir[count].unit_dir});
		result.attack_animation.push({x: attacker.x + diff.x * 1,
										 y: attacker.y + diff.y * 1,
														 picture:GG_DATA_PICTURE_ATTACK1,
														 effect: effect,
														 picture_number: 0,
														 unit_dir:attack_dir[count].unit_dir});
			
		result.attack_animation.push({x: attacker.x + diff.x * 2,
										 y: attacker.y + diff.y * 2,
														 picture:GG_DATA_PICTURE_ATTACK1,
														 effect: effect,
														 picture_number: 1,
														 unit_dir:attack_dir[count].unit_dir});
		for (var j = 0; j < 5; j++) {
			result.attack_animation.push({x: attacker.x + diff.x * 2,
											 y: attacker.y + diff.y * 2,
														 picture:GG_DATA_PICTURE_ATTACK1,
														 effect: effect,
														 picture_number: 2,
														 unit_dir:attack_dir[count].unit_dir});
		}
		for (var j = 1; j > -1; j--) {
			result.attack_animation.push({x: attacker.x + diff.x * j,
											  y: attacker.y + diff.y * j,
														 picture:GG_DATA_PICTURE_MOVE,
														 effect: effect,
														 picture_number: GG_PARTS_UNIQ_ANIMATION[j],
														 unit_dir:attack_dir[count].unit_dir});
		}
		////
        result.attack_animation.push({x: attacker.x, y: attacker.y,
                                                     picture:GG_DATA_PICTURE_MOVE,
                                                     picture_number: 1,
													 effect: effect,
                                                     unit_dir:attack_dir[count].unit_dir});
        result.attack_animation.push({x: attacker.x, y: attacker.y,
                                                     picture:GG_DATA_PICTURE_MOVE,
                                                     picture_number: 1,
													 effect: effect,
                                                     unit_dir:attack_dir[count].unit_dir});
		
		result.attack_animation.push({x: attacker.x + diff.x * 1,
										 y: attacker.y + diff.y * 1,
														 picture:GG_DATA_PICTURE_ATTACK1,
														 effect: effect,
														 picture_number: 0,
														 unit_dir:attack_dir[count].unit_dir});
		result.attack_animation.push({x: attacker.x + diff.x * 1,
										 y: attacker.y + diff.y * 1,
														 picture:GG_DATA_PICTURE_ATTACK1,
														 effect: effect,
														 picture_number: 0,
														 unit_dir:attack_dir[count].unit_dir});
			
		result.attack_animation.push({x: attacker.x + diff.x * 2,
										 y: attacker.y + diff.y * 2,
														 picture:GG_DATA_PICTURE_ATTACK1,
														 effect: effect,
														 picture_number: 1,
														 unit_dir:attack_dir[count].unit_dir});
		for (var j = 0; j < 7; j++) {
			result.attack_animation.push({x: attacker.x + diff.x * 2,
											 y: attacker.y + diff.y * 2,
														 picture:GG_DATA_PICTURE_ATTACK1,
														 effect: effect,
														 picture_number: 2,
														 unit_dir:attack_dir[count].unit_dir});
		}
		for (var j = 1; j > -1; j--) {
			result.attack_animation.push({x: attacker.x + diff.x * j,
											  y: attacker.y + diff.y * j,
														 picture:GG_DATA_PICTURE_MOVE,
														 effect: effect,
														 picture_number: GG_PARTS_UNIQ_ANIMATION[j],
														 unit_dir:attack_dir[count].unit_dir});
		}
		
		///
		for (var j = 0; j < after_wait; j++) {
             result.attack_animation.push({x: attacker.x, y: attacker.y,
                                                     picture:GG_DATA_PICTURE_MOVE,
													 effect: effect,
                                                     picture_number: 1,
                                                     unit_dir:attack_dir[count].unit_dir});
		}
		result.move_list = [];
        for (var j = 0; j < attack_obj.other_unit.length; j++) {
			if (attack_obj.other_unit[j].avoidance_now_flag != true &&
				attack_obj.other_unit[j].friend_pull_now_flag != true &&
				attack_obj.other_unit[j].counter_now_flag != true &&
				attack_obj.other_unit[j].attack_down_now_flag != true &&
				attack_obj.other_unit[j].enemy_push_now_flag != true &&
				attack_obj.other_unit[j].cover_now_flag != true) {
				continue;
			}
			result.move_list[j] = {};
			result.move_list[j].attack_animation = [];

			if (attack_obj.other_unit[j].cover_now_flag == true) {
				
				var diff_x = GG_DATA_MOVE_DIRECTION[attack_obj.other_unit[j].route[0]].x / 12;
				var diff_y = GG_DATA_MOVE_DIRECTION[attack_obj.other_unit[j].route[0]].y / 12;

                for (var k = 0; k < before_wait - 24 + start_wait; k++) {
					result.move_list[j].attack_animation.push({x: attack_obj.other_unit[j].start_x,
																       y: attack_obj.other_unit[j].start_y,
                                                     picture:GG_DATA_PICTURE_MOVE,
                                                     picture_number: 1,
                                                     unit_dir: 0
						});
				}

				var unit_dir = 0;
				if (attack_obj.other_unit[j].route[0] == 0 ||
			        attack_obj.other_unit[j].route[0] == 5 ) {
					unit_dir = 3;
				} else if (attack_obj.other_unit[j].route[0] == 1) {
					unit_dir = 1;
				} else if (attack_obj.other_unit[j].route[0] == 4) {
					unit_dir = 2;
				}
				for (var k = 0; k < 12; k++) {
					result.move_list[j].attack_animation.push({x: attack_obj.other_unit[j].start_x + diff_x * (k + 1),
																       y: attack_obj.other_unit[j].start_y + diff_y * (k + 1),
                                                     picture:GG_DATA_PICTURE_MOVE,
                                                     picture_number: GG_PARTS_UNIQ_ANIMATION[k],
                                                     unit_dir: unit_dir
						});
				}
				for (var k = 0; k < 12 + damage_count; k++) {
					result.move_list[j].attack_animation.push({x: attack_obj.other_unit[j].start_x + diff_x * 12,
																       y: attack_obj.other_unit[j].start_y + diff_y * 12,
                                                     //picture:GG_DATA_PICTURE_STATUS,
                                                     picture: 's7',
                                                     picture_number: GG_PARTS_UNIQ_ANIMATION[k],
                                                     unit_dir: 0
						});
				}
				for (var k = 0; k < 24 - damage_count; k++) {
					result.move_list[j].attack_animation.push({x: attack_obj.other_unit[j].start_x + diff_x * 12,
																       y: attack_obj.other_unit[j].start_y + diff_y * 12,
                                                     //picture:GG_DATA_PICTURE_STATUS,
                                                     picture: 's4',
                                                     picture_number: 0,
                                                     unit_dir: 0
						});
				}
				for (var k = 11; k > -1; k--) {
					result.move_list[j].attack_animation.push({x: attack_obj.other_unit[j].start_x + diff_x * k,
																       y: attack_obj.other_unit[j].start_y + diff_y * k,
                                                     picture:GG_DATA_PICTURE_MOVE,
                                                     picture_number: GG_PARTS_UNIQ_ANIMATION[k],
                                                     unit_dir: unit_dir
						});
				}

                for (var k = 0; k < after_wait - 12; k++) {
					result.move_list[j].attack_animation.push({x: attack_obj.other_unit[j].start_x,
																       y: attack_obj.other_unit[j].start_y,
                                                     picture:GG_DATA_PICTURE_MOVE,
                                                     picture_number: 1,
                                                     unit_dir: 0
						});
				}

                
			} else if (attack_obj.other_unit[j].avoidance_now_flag == true) {					
				var diff_x = GG_DATA_MOVE_DIRECTION[attack_obj.other_unit[j].route[0]].x / 12;
				var diff_y = GG_DATA_MOVE_DIRECTION[attack_obj.other_unit[j].route[0]].y / 12;

				var unit_dir = 0;
				if (attack_obj.other_unit[j].route[0] == 2 ||
			        attack_obj.other_unit[j].route[0] == 3 ) {
					unit_dir = 3;
				} else if (attack_obj.other_unit[j].route[0] == 4) {
					unit_dir = 1;
				} else if (attack_obj.other_unit[j].route[0] == 1) {
					unit_dir = 2;
				}
				for (var k = 0; k < before_wait + start_wait; k++) {
					result.move_list[j].attack_animation.push({x: attack_obj.other_unit[j].start_x,
																       y: attack_obj.other_unit[j].start_y,
                                                     picture:GG_DATA_PICTURE_MOVE,
                                                     picture_number: 1,
                                                     unit_dir: unit_dir
						});
				}

				for (var k = 0; k < 3; k++) {
					result.move_list[j].attack_animation.push({x: attack_obj.other_unit[j].start_x + diff_x * (k + 1),
																       y: attack_obj.other_unit[j].start_y + diff_y * (k + 1),
                                                     picture:GG_DATA_PICTURE_MOVE,
                                                     picture_number: GG_PARTS_UNIQ_ANIMATION[k],
                                                     unit_dir: unit_dir
						});
				}
				for (var k = 0; k < 18; k++) {
					result.move_list[j].attack_animation.push({x: attack_obj.other_unit[j].start_x + diff_x * 3,
																       y: attack_obj.other_unit[j].start_y + diff_y * 3,
                                                     picture:GG_DATA_PICTURE_MOVE,
                                                     picture_number: 1,
                                                     unit_dir: unit_dir
						});
				}
				for (var k = 2; k > -1; k--) {
					result.move_list[j].attack_animation.push({x: attack_obj.other_unit[j].start_x + diff_x * k,
																       y: attack_obj.other_unit[j].start_y + diff_y * k,
                                                     picture:GG_DATA_PICTURE_MOVE,
                                                     picture_number: GG_PARTS_UNIQ_ANIMATION[k],
                                                     unit_dir: unit_dir
						});
				}
				for (var k = 0; k < after_wait; k++) {
					result.move_list[j].attack_animation.push({x: attack_obj.other_unit[j].start_x,
																       y: attack_obj.other_unit[j].start_y,
                                                     picture:GG_DATA_PICTURE_MOVE,
                                                     picture_number: 1,
                                                     unit_dir: unit_dir
						});
				}
			} else if (attack_obj.other_unit[j].friend_pull_now_flag == true) {
                //
				var pull_wait = 0;
				if (before_wait == 24) {
					pull_wait = 12;
				} else if (before_wait == 36) {
					pull_wait = 24;
				}
				//var pull_wait = 0;
				//if (before_wait == 24) {
				//	pull_wait = 12;
				//}
                for (var k = 0; k < start_wait + pull_wait; k++) {
                    result.move_list[j].attack_animation.push({x: attack_obj.other_unit[j].start_x,
                                                                           y: attack_obj.other_unit[j].start_y,
                                                         picture:GG_DATA_PICTURE_MOVE,
                                                         picture_number: 1,
                                                         unit_dir: 0
                            });
                }

                if (attack_obj.other_unit[j].route.length == 1) {
                    // 6 wait
                    for (var k = 0; k < 6; k++) {
                        result.move_list[j].attack_animation.push({x: attack_obj.other_unit[j].start_x,
                                                                           y: attack_obj.other_unit[j].start_y,
                                                         picture:GG_DATA_PICTURE_MOVE,
                                                         picture_number: 1,
                                                         unit_dir: 0
                            });
                    }
                    // 12 back
    				diff_x = GG_DATA_MOVE_DIRECTION[attack_obj.other_unit[j].route[0]].x / 12;
    				diff_y = GG_DATA_MOVE_DIRECTION[attack_obj.other_unit[j].route[0]].y / 12;
                    unit_dir = 0;
                    if (attack_obj.other_unit[j].route[0] == 2 ||
                        attack_obj.other_unit[j].route[0] == 3) {
                        unit_dir = 3;
                    } else if (attack_obj.other_unit[j].route[0] == 1) {
                        unit_dir = 2;
                    } else if (attack_obj.other_unit[j].route[0] == 4) {
                        unit_dir = 1;
                    }
                    for (var k = 0; k < 12; k++) {
                        result.move_list[j].attack_animation.push({x:attack_obj.other_unit[j].start_x + diff_x * k,
                                                                          y:attack_obj.other_unit[j].start_y + diff_y * k,
                                                                     picture: GG_DATA_PICTURE_MOVE,
                                                                     picture_number: GG_PARTS_UNIQ_ANIMATION[k],
                                                                     unit_dir: unit_dir});

                    }
                    // 6 wait
                    for (var k = 0; k < 6; k++) {
                        result.move_list[j].attack_animation.push({x: attack_obj.other_unit[j].x,
                                                                           y: attack_obj.other_unit[j].y,
                                                         picture:GG_DATA_PICTURE_MOVE,
                                                         picture_number: 1,
                                                         unit_dir: 0
                            });
                    }
                    
                } else if (attack_obj.other_unit[j].route.length == 2) {

                    // 6 f
    				diff_x = GG_DATA_MOVE_DIRECTION[attack_obj.other_unit[j].route[0]].x / 12;
    				diff_y = GG_DATA_MOVE_DIRECTION[attack_obj.other_unit[j].route[0]].y / 12;
                    unit_dir = 0;
                    if (attack_obj.other_unit[j].route[0] == 0 ||
                        attack_obj.other_unit[j].route[0] == 5) {
                        unit_dir = 3;
                    } else if (attack_obj.other_unit[j].route[0] == 1) {
                        unit_dir = 1;
                    } else if (attack_obj.other_unit[j].route[0] == 4) {
                        unit_dir = 2;
                    }
                    for (var k = 0; k < 6; k++) {
                        result.move_list[j].attack_animation.push({x:attack_obj.other_unit[j].start_x + diff_x * k,
                                                                          y:attack_obj.other_unit[j].start_y + diff_y * k,
                                                                     picture: GG_DATA_PICTURE_MOVE,
                                                                     picture_number: GG_PARTS_UNIQ_ANIMATION[k],
                                                                     unit_dir: unit_dir});
                    }
                    // 6 b
                    for (var k = 0; k < 6; k++) {
                        result.move_list[j].attack_animation.push({x:attack_obj.other_unit[j].start_x + diff_x * 6 - diff_x * k,
                                                                          y:attack_obj.other_unit[j].start_y + diff_y * 6 - diff_y * k,
                                                                     picture: GG_DATA_PICTURE_MOVE,
                                                                     picture_number: GG_PARTS_UNIQ_ANIMATION[k],
                                                                     unit_dir: unit_dir});
                    }
                    // 12 b
    				diff_x = GG_DATA_MOVE_DIRECTION[attack_obj.other_unit[j].route[1]].x / 12;
    				diff_y = GG_DATA_MOVE_DIRECTION[attack_obj.other_unit[j].route[1]].y / 12;
                    unit_dir = 0;
                    if (attack_obj.other_unit[j].route[1] == 2 ||
                        attack_obj.other_unit[j].route[1] == 3) {
                        unit_dir = 3;
                    } else if (attack_obj.other_unit[j].route[1] == 1) {
                        unit_dir = 2;
                    } else if (attack_obj.other_unit[j].route[1] == 4) {
                        unit_dir = 1;
                    }
                    for (var k = 0; k < 12; k++) {
                        result.move_list[j].attack_animation.push({x:attack_obj.other_unit[j].start_x + diff_x * k,
                                                                          y:attack_obj.other_unit[j].start_y + diff_y * k,
                                                                     picture: GG_DATA_PICTURE_MOVE,
                                                                     picture_number: GG_PARTS_UNIQ_ANIMATION[k],
                                                                     unit_dir: unit_dir});
                    }
                }
                // attack + after 
				for (var k = 0; k < 12 + after_wait; k++) {
					result.move_list[j].attack_animation.push({x: attack_obj.other_unit[j].x,
																       y: attack_obj.other_unit[j].y,
                                                     picture:GG_DATA_PICTURE_MOVE,
                                                     picture_number: 1,
                                                     unit_dir: 0
						});
				}
            
			} else if (attack_obj.other_unit[j].counter_now_flag == true) {
				
				diff_x = GG_DATA_MOVE_DIRECTION[attack_obj.other_unit[j].route[2]].x / 12;
				diff_y = GG_DATA_MOVE_DIRECTION[attack_obj.other_unit[j].route[2]].y / 12;

				unit_dir = 0;
				if (attack_obj.other_unit[j].route[2] == 0 ||
			        attack_obj.other_unit[j].route[2] == 5 ) {
					unit_dir = 3;
				} else if (attack_obj.other_unit[j].route[2] == 1) {
					unit_dir = 1;
				} else if (attack_obj.other_unit[j].route[2] == 4) {
					unit_dir = 2;
				}
				for (var k = 0; k < before_wait + start_wait + damage_count; k++) {
					result.move_list[j].attack_animation.push({x: attack_obj.other_unit[j].start_x,
																       y: attack_obj.other_unit[j].start_y,
                                                     picture:GG_DATA_PICTURE_MOVE,
                                                     picture_number: 1,
                                                     unit_dir: 0
						});
				}

				for (var k = 0; k < 24 - damage_count; k++) {
				//for (var k = 0; k < damage_count; k++) {
					result.move_list[j].attack_animation.push({x: attack_obj.other_unit[j].start_x,
																       y: attack_obj.other_unit[j].start_y,
                                                     //picture:GG_DATA_PICTURE_STATUS,
                                                     picture: 's4',
                                                     picture_number: 0,
                                                     unit_dir: 0
						});
				}
				
				result.move_list[j].attack_animation.push({x:attack_obj.other_unit[j].start_x + diff_x * 1,
																  y:attack_obj.other_unit[j].start_y + diff_y * 1,
															 picture:GG_DATA_PICTURE_ATTACK2,
															 picture_number: 0,
															 unit_dir:unit_dir});
				result.move_list[j].attack_animation.push({x:attack_obj.other_unit[j].start_x + diff_x * 1,
																  y:attack_obj.other_unit[j].start_y + diff_y * 1,
															 picture:GG_DATA_PICTURE_ATTACK2,
															 picture_number: 0,
															 unit_dir:unit_dir});
				result.move_list[j].attack_animation.push({x:attack_obj.other_unit[j].start_x + diff_x * 2,
																  y:attack_obj.other_unit[j].start_y + diff_y * 2,
															 picture:GG_DATA_PICTURE_ATTACK2,
															 picture_number: 1,
															 unit_dir:unit_dir});
				second_attack_start = before_wait + start_wait + 12 + 4;
				
				for (var k = 0; k < 7; k++) {
					result.move_list[j].attack_animation.push({x:attack_obj.other_unit[j].start_x + diff_x * 2,
																  y:attack_obj.other_unit[j].start_y + diff_y * 2,
															 picture:GG_DATA_PICTURE_ATTACK2,
															 picture_number: 2,
															 unit_dir:unit_dir});
				}
				for (var k = 1; k > -1; k--) {
					result.move_list[j].attack_animation.push({x: attack_obj.other_unit[j].start_x + diff_x * k,
																       y: attack_obj.other_unit[j].start_y + diff_y * k,
                                                     picture:GG_DATA_PICTURE_MOVE,
                                                     picture_number: GG_PARTS_UNIQ_ANIMATION[k],
                                                     unit_dir: unit_dir
						});
				}
				
				for (var k = 0; k < after_wait - 12; k++) {
					result.move_list[j].attack_animation.push({x: attack_obj.other_unit[j].start_x,
																       y: attack_obj.other_unit[j].start_y,
                                                     picture:GG_DATA_PICTURE_MOVE,
                                                     picture_number: 1,
                                                     unit_dir: unit_dir
						});
				}
			} else if (attack_obj.other_unit[j].attack_down_now_flag == true) {
				
				diff_x = GG_DATA_MOVE_DIRECTION[attack_obj.other_unit[j].route[2]].x / 12;
				diff_y = GG_DATA_MOVE_DIRECTION[attack_obj.other_unit[j].route[2]].y / 12;

				unit_dir = 0;
				if (attack_obj.other_unit[j].route[2] == 0 ||
			        attack_obj.other_unit[j].route[2] == 5 ) {
					unit_dir = 3;
				} else if (attack_obj.other_unit[j].route[2] == 1) {
					unit_dir = 1;
				} else if (attack_obj.other_unit[j].route[2] == 4) {
					unit_dir = 2;
				}
				for (var k = 0; k < before_wait + start_wait + damage_count; k++) {
					result.move_list[j].attack_animation.push({x: attack_obj.other_unit[j].start_x,
																       y: attack_obj.other_unit[j].start_y,
                                                     picture:GG_DATA_PICTURE_MOVE,
                                                     picture_number: 1,
                                                     unit_dir: 0
						});
				}

				for (var k = 0; k < 24 - damage_count; k++) {
				//for (var k = 0; k < damage_count; k++) {
					result.move_list[j].attack_animation.push({x: attack_obj.other_unit[j].start_x,
																       y: attack_obj.other_unit[j].start_y,
                                                     //picture:GG_DATA_PICTURE_STATUS,
                                                     picture: 's4',
                                                     picture_number: 0,
                                                     unit_dir: 0
						});
				}
				
				result.move_list[j].attack_animation.push({x:attack_obj.other_unit[j].start_x + diff_x * 1,
																  y:attack_obj.other_unit[j].start_y + diff_y * 1,
															 picture:GG_DATA_PICTURE_ATTACK1,
															 picture_number: 0,
															 unit_dir:unit_dir});
				result.move_list[j].attack_animation.push({x:attack_obj.other_unit[j].start_x + diff_x * 1,
																  y:attack_obj.other_unit[j].start_y + diff_y * 1,
															 picture:GG_DATA_PICTURE_ATTACK1,
															 picture_number: 0,
															 unit_dir:unit_dir});
				result.move_list[j].attack_animation.push({x:attack_obj.other_unit[j].start_x + diff_x * 2,
																  y:attack_obj.other_unit[j].start_y + diff_y * 2,
															 picture:GG_DATA_PICTURE_ATTACK1,
															 picture_number: 1,
															 unit_dir:unit_dir});
				second_attack_start = before_wait + start_wait + 12 + 4;
				
				for (var k = 0; k < 7; k++) {
					result.move_list[j].attack_animation.push({x:attack_obj.other_unit[j].start_x + diff_x * 2,
																  y:attack_obj.other_unit[j].start_y + diff_y * 2,
															 picture:GG_DATA_PICTURE_ATTACK1,
															 picture_number: 2,
															 unit_dir:unit_dir});
				}
				for (var k = 1; k > -1; k--) {
					result.move_list[j].attack_animation.push({x: attack_obj.other_unit[j].start_x + diff_x * k,
																       y: attack_obj.other_unit[j].start_y + diff_y * k,
                                                     picture:GG_DATA_PICTURE_MOVE,
                                                     picture_number: GG_PARTS_UNIQ_ANIMATION[k],
                                                     unit_dir: unit_dir
						});
				}
				
				for (var k = 0; k < after_wait - 12; k++) {
					result.move_list[j].attack_animation.push({x: attack_obj.other_unit[j].start_x,
																       y: attack_obj.other_unit[j].start_y,
                                                     picture:GG_DATA_PICTURE_MOVE,
                                                     picture_number: 1,
                                                     unit_dir: unit_dir
						});
				}
			} else if (attack_obj.other_unit[j].enemy_push_now_flag == true) {
				diff = {x: GG_DATA_MOVE_DIRECTION[attack_obj.other_unit[j].route[0]].x / 12,
						y: GG_DATA_MOVE_DIRECTION[attack_obj.other_unit[j].route[0]].y / 12};
		
				result.move_list[j] = {};
				result.move_list[j].attack_animation = [];
				result.move_list[j].attack_animation.push({x: attack_obj.other_unit[j].x + diff.x * 1,
														   y: attack_obj.other_unit[j].y + diff.y * 1,
																 picture:GG_DATA_PICTURE_ATTACK1,
																 picture_number: 0,
																 unit_dir: attack_obj.other_unit[j].unit_dir});
				result.move_list[j].attack_animation.push({x: attack_obj.other_unit[j].x + diff.x * 2,
												 y: attack_obj.other_unit[j].y + diff.y * 2,
																 picture:GG_DATA_PICTURE_ATTACK1,
																 picture_number: 1,
																 unit_dir: attack_obj.other_unit[0].unit_dir});
		
				for (var i = 0; i < 21; i++) {
					result.move_list[j].attack_animation.push({x: attack_obj.other_unit[j].x + diff.x * 2,
												 y: attack_obj.other_unit[j].y + diff.y * 2,
																 picture:GG_DATA_PICTURE_ATTACK1,
																 picture_number: 2,
																 unit_dir: attack_obj.other_unit[j].unit_dir});
				}
																 
		
				result.move_list[j].attack_animation.push({x: attack_obj.other_unit[j].x + diff.x * 1,
												 y: attack_obj.other_unit[j].y + diff.y * 1,
																 picture:GG_DATA_PICTURE_MOVE,
																 picture_number: 1,
																 unit_dir: attack_obj.other_unit[j].unit_dir});
					
				for (var i = 0; i < result.route_count * 12 - 24; i++) {
					result.move_list[j].attack_animation.push({x: attack_obj.other_unit[j].x,
															   y: attack_obj.other_unit[j].y,
																 picture:GG_DATA_PICTURE_STATUS0,
																 picture_number: 0,
																 unit_dir: 0});
					
				}

			}
        }
		
	} else if (attack_type == GG_DATA_ATTACK_TYPE_CHAINE) {
		// 3
		result.route_count = 4;
		var start_route_count = 0;
		var before_wait = 0;
		var after_wait = 0;
		var my_unit_del_before_wait = 0;
		if (enemy_push_now_flag == true) {
			result.route_count      += 2;
			before_wait             += 24;
			my_unit_del_before_wait += 24;
		}

		if (cover_now_flag == true) {
			result.route_count += 1;
			before_wait        += 24;
			//after_wait         += 12;
        } else if (friend_pull_now_flag == true) {
			result.route_count -= 1;
		} else if (counter_now_flag == true ||
				   attack_down_now_flag == true) {
			result.route_count += 1;
			after_wait         += 12;
		} else if (avoidance_now_flag == true) {
			result.route_count -= 1;
		}
		
		var effect = GG_DATA_ANIMATION_EFFECT_NONE;
		if (attack_obj.my_unit.assault_flag == true) {
			effect = GG_DATA_ANIMATION_EFFECT_ASSAULT;
		}
		if (cover_now_flag == true ||
			friend_pull_now_flag == true ||
			avoidance_now_flag == true) {
			attack_start += 6;

		} else {
			attack_start = 36 + 4;
			
		}

		////
		// 0
		diff_x = GG_DATA_MOVE_DIRECTION[attack_obj.my_unit.route[start_route_count]].x / 12;
		diff_y = GG_DATA_MOVE_DIRECTION[attack_obj.my_unit.route[start_route_count]].y / 12;
		unit_dir = 0;
		if (attack_obj.my_unit.route[start_route_count] == 0 ||
		    attack_obj.my_unit.route[start_route_count] == 5) {
			unit_dir = 3;
		} else if (attack_obj.my_unit.route[start_route_count] == 1) {
			unit_dir = 1;
		} else if (attack_obj.my_unit.route[start_route_count] == 4) {
			unit_dir = 2;
		}			// 1

		////// enemy_push
		if (enemy_push_now_flag == true) {
			var attacker = {x: attack_obj.my_unit.moved.x,
			                y: attack_obj.my_unit.moved.y};
			for (var i = 0; i < 6; i++) {
				result.attack_animation.push({x: attack_obj.my_unit.attacker.x, y: attack_obj.my_unit.attacker.y,
														 picture:GG_DATA_PICTURE_STATUS0,
														 picture_number: 0,
														 unit_dir:0});
			}
			var push_diff_x = (attack_obj.my_unit.moved.x - attack_obj.my_unit.attacker.x) /12 ;
			var push_diff_y = (attack_obj.my_unit.moved.y - attack_obj.my_unit.attacker.y) / 12;
			temp_x = attack_obj.my_unit.attacker.x;
			temp_y = attack_obj.my_unit.attacker.y;
			for (var i = 0; i < 12; i++) {
				temp_x += push_diff_x;
				temp_y += push_diff_y;
				result.attack_animation.push({x: temp_x,
													  y: temp_y,
													 picture:GG_DATA_PICTURE_MOVE,
													 picture_number: GG_PARTS_UNIQ_ANIMATION[i],
													 unit_dir: attack_obj.my_unit.moved.unit_dir
						});
			}
			
			for (var i = 0; i < 6; i++) {
				result.attack_animation.push({x: attack_obj.my_unit.moved.x,
											  y: attack_obj.my_unit.moved.y,
														 picture: GG_DATA_PICTURE_STATUS0,
														 picture_number: 0,
														 unit_dir:0});
			}
		} else {
			var attacker = {x: attack_obj.my_unit.attacker.x,
			                y: attack_obj.my_unit.attacker.y};
			
		}
		//
        //for (var j = 0; j < attack_dir.length; j++) {
        //    if (attack_obj.my_unit.attacked.x - attacker.x == attack_dir[j].x &&
        //        attack_obj.my_unit.attacked.y - attacker.y == attack_dir[j].y) {
        //        count = j;
        //        break;
        //    }
        //}
		var temp_x = attacker.x;
		var temp_y = attacker.y;

		////
		for (var k = 0; k < before_wait - my_unit_del_before_wait; k++) {
			result.attack_animation.push({x: temp_x,
												  y: temp_y,
												 picture:GG_DATA_PICTURE_MOVE,
													 effect: effect,
												 picture_number: 1,
												 unit_dir: unit_dir
					});
		}
		
		for (var k = 0; k < 12; k++) {
			temp_x += diff_x;
			temp_y += diff_y;
			result.attack_animation.push({x: temp_x,
												  y: temp_y,
												 picture:GG_DATA_PICTURE_MOVE,
													 effect: effect,
												 picture_number: GG_PARTS_UNIQ_ANIMATION[k],
												 unit_dir: unit_dir
					});
		}
			
		diff_x = GG_DATA_MOVE_DIRECTION[attack_obj.my_unit.route[start_route_count + 1]].x / 12;
		diff_y = GG_DATA_MOVE_DIRECTION[attack_obj.my_unit.route[start_route_count + 1]].y / 12;			
		unit_dir = 0;
		if (attack_obj.my_unit.route[start_route_count + 1] == 0 ||
		    attack_obj.my_unit.route[start_route_count + 1] == 5) {
			unit_dir = 3;
		} else if (attack_obj.my_unit.route[start_route_count + 1] == 1) {
			unit_dir = 1;
		} else if (attack_obj.my_unit.route[start_route_count + 1] == 4) {
			unit_dir = 2;
		}			// 1
		for (var k = 0; k < 6; k++) {
			temp_x += diff_x;
			temp_y += diff_y;
			result.attack_animation.push({x: temp_x,
												  y: temp_y,
												 picture:GG_DATA_PICTURE_MOVE,
													 effect: effect,
												 picture_number: GG_PARTS_UNIQ_ANIMATION[k],
												 unit_dir: unit_dir
					});
		}
		
		// 2
		diff_x = GG_DATA_MOVE_DIRECTION[attack_obj.my_unit.route[start_route_count + 2]].x / 12;
		diff_y = GG_DATA_MOVE_DIRECTION[attack_obj.my_unit.route[start_route_count + 2]].y / 12;
		unit_dir = 0;
		if (attack_obj.my_unit.route[start_route_count + 2] == 2 ||
		    attack_obj.my_unit.route[start_route_count + 2] == 3) {
			unit_dir = 3;
		} else if (attack_obj.my_unit.route[start_route_count + 2] == 4) {
			unit_dir = 1;
		} else if (attack_obj.my_unit.route[start_route_count + 2] == 1) {
			unit_dir = 2;
		}			// 1
		for (var k = 0; k < 6; k++) {
			temp_x += diff_x;
			temp_y += diff_y;
			result.attack_animation.push({x: temp_x,
												  y: temp_y,
												 picture:GG_DATA_PICTURE_MOVE,
													 effect: effect,
												 picture_number: GG_PARTS_UNIQ_ANIMATION[k],
												 unit_dir: unit_dir
					});
		}
		
		// 3
		diff_x = GG_DATA_MOVE_DIRECTION[attack_obj.my_unit.route[start_route_count + 3]].x / 12;
		diff_y = GG_DATA_MOVE_DIRECTION[attack_obj.my_unit.route[start_route_count + 3]].y / 12;
		unit_dir = 0;
		if (attack_obj.my_unit.route[start_route_count + 3] == 2 ||
		    attack_obj.my_unit.route[start_route_count + 3] == 3) {
			unit_dir = 3;
		} else if (attack_obj.my_unit.route[start_route_count + 3] == 4) {
			unit_dir = 1;
		} else if (attack_obj.my_unit.route[start_route_count + 3] == 1) {
			unit_dir = 2;
		}			// 1
		for (var k = 0; k < 12; k++) {
			temp_x += diff_x;
			temp_y += diff_y;
			result.attack_animation.push({x: temp_x,
												  y: temp_y,
												 picture:GG_DATA_PICTURE_MOVE,
													 effect: effect,
												 picture_number: GG_PARTS_UNIQ_ANIMATION[k],
												 unit_dir: unit_dir
					});
		}

		if (cover_now_flag != true &&
			avoidance_now_flag != true &&
            friend_pull_now_flag != true) {
			var count = attack_obj.my_unit.route[start_route_count + 4];
	
			var diff = {x:GG_DATA_MOVE_DIRECTION[attack_dir[count].move_dir].x / bin,
						y:GG_DATA_MOVE_DIRECTION[attack_dir[count].move_dir].y / bin};
	
			result.attack_animation.push({x: attacker.x + diff.x * 1,
										 y: attacker.y + diff.y * 1,
														 picture:GG_DATA_PICTURE_ATTACK1,
													 effect: effect,
														 picture_number: 0,
														 unit_dir:attack_dir[count].unit_dir});
			result.attack_animation.push({x: attacker.x + diff.x * 2,
										 y: attacker.y + diff.y * 2,
														 picture:GG_DATA_PICTURE_ATTACK1,
													 effect: effect,
														 picture_number: 0,
														 unit_dir:attack_dir[count].unit_dir});
			
			result.attack_animation.push({x: attacker.x + diff.x * 3,
										 y: attacker.y + diff.y * 3,
														 picture:GG_DATA_PICTURE_ATTACK1,
													 effect: effect,
														 picture_number: 1,
														 unit_dir:attack_dir[count].unit_dir});
			for (var j = 0; j < 6; j++) {
				result.attack_animation.push({x: attacker.x + diff.x * 3,
											 y: attacker.y + diff.y * 3,
														 picture:GG_DATA_PICTURE_ATTACK1,
													 effect: effect,
														 picture_number: 2,
														 unit_dir:attack_dir[count].unit_dir});
			}
			for (var j = 2; j > -1; j--) {
				 result.attack_animation.push({x: attacker.x + diff.x * j,
											  y: attacker.y + diff.y * j,
														 picture:GG_DATA_PICTURE_MOVE,
													 effect: effect,
														 picture_number: GG_PARTS_UNIQ_ANIMATION[j],
														 unit_dir:attack_dir[count].unit_dir});
			}
		}

		for (var k = 0; k < after_wait; k++) {
			result.attack_animation.push({x: attacker.x,
												  y: attacker.y,
												 picture:GG_DATA_PICTURE_MOVE,
													 effect: effect,
												 picture_number: 1,
												 unit_dir: unit_dir
					});
		}
		
		result.move_list = [];
        for (var j = 0; j < attack_obj.other_unit.length; j++) {
			//attack_obj.other_unit[j].attack_animation_flag = true;
			result.move_list[j] = {};
			result.move_list[j].attack_animation = [];
			var route;
			for (var k = 0; k < attack_obj.other_unit[j].route.length; k++) {
				if (attack_obj.other_unit[j].route[k] != 6 &&
					attack_obj.other_unit[j].route[k] != 7) {
					route = attack_obj.other_unit[j].route[k];
					break;
				}
			}
			var diff_x = GG_DATA_MOVE_DIRECTION[route].x / 12;
			var diff_y = GG_DATA_MOVE_DIRECTION[route].y / 12;
	
			var unit_dir = 0;
			if (route == 0 ||
				route == 5 ) {
				unit_dir = 3;
			} else if (route == 1) {
				unit_dir = 1;
			} else if (route == 4) {
				unit_dir = 2;
			}
			
			if (attack_obj.other_unit[j].avoidance_now_flag  != true &&
				attack_obj.other_unit[j].cover_now_flag != true &&
				attack_obj.other_unit[j].enemy_push_now_flag != true &&
                attack_obj.other_unit[j].friend_pull_now_flag != true) {
				//
				for (var k = 0; k < 18 + my_unit_del_before_wait; k++) {
					result.move_list[j].attack_animation.push({x: attack_obj.other_unit[j].start_x,
																   y: attack_obj.other_unit[j].start_y,
												 picture:GG_DATA_PICTURE_STATUS0,
												 picture_number: 0,
												 unit_dir: 0
						});
				}
				//
				for (var k = 0; k < 12; k++) {
					result.move_list[j].attack_animation.push({x: attack_obj.other_unit[j].start_x + diff_x * (k + 1),
																   y: attack_obj.other_unit[j].start_y + diff_y * (k + 1),
												 picture:GG_DATA_PICTURE_MOVE,
												 picture_number: GG_PARTS_UNIQ_ANIMATION[k],
												 unit_dir: unit_dir
						});
				}
				for (var k = 0; k < 8; k++) {
					result.move_list[j].attack_animation.push({x: attack_obj.other_unit[j].start_x + diff_x * 12,
															   y: attack_obj.other_unit[j].start_y + diff_y * 12,
											                   picture:GG_DATA_PICTURE_MOVE,
											                   picture_number: 1,
												               unit_dir: 0
						});
				}
				for (var k = 0; k < 10; k++) {
					result.move_list[j].attack_animation.push({x: attack_obj.other_unit[j].start_x + diff_x * 12,
															   y: attack_obj.other_unit[j].start_y + diff_y * 12,
											                   //picture: GG_DATA_PICTURE_STATUS,
											                   picture: 's4',
											                   picture_number: 0,
												               unit_dir: 0
						});
				}
				//
				if (attack_obj.other_unit[j].counter_now_flag == true) {
					var temp_x = attack_obj.other_unit[j].start_x + diff_x * 12;
					var temp_y = attack_obj.other_unit[j].start_y + diff_y * 12;
					/////
					var diff_x = GG_DATA_MOVE_DIRECTION[attack_obj.other_unit[j].route[6]].x / 12;
					var diff_y = GG_DATA_MOVE_DIRECTION[attack_obj.other_unit[j].route[6]].y / 12;
		
					var unit_dir = 0;
					if (attack_obj.other_unit[j].route[6] == 0 ||
						attack_obj.other_unit[j].route[6] == 5 ) {
						unit_dir = 3;
					} else if (attack_obj.other_unit[j].route[6] == 1) {
						unit_dir = 1;
					} else if (attack_obj.other_unit[j].route[6] == 4) {
						unit_dir = 2;
					}
		
					result.move_list[j].attack_animation.push({x: temp_x + diff_x * 1,
																	  y: temp_y + diff_y * 1,
																 picture:GG_DATA_PICTURE_ATTACK2,
																 picture_number: 0,
																 unit_dir:unit_dir});
					result.move_list[j].attack_animation.push({x: temp_x + diff_x * 1,
																	  y: temp_y + diff_y * 1,
																 picture:GG_DATA_PICTURE_ATTACK2,
																 picture_number: 0,
																 unit_dir:unit_dir});
					result.move_list[j].attack_animation.push({x:temp_x + diff_x * 2,
																	  y:temp_y + diff_y * 2,
																 picture:GG_DATA_PICTURE_ATTACK2,
																 picture_number: 1,
																 unit_dir:unit_dir});
					second_attack_start = 48 + 4;
					
					for (var k = 0; k < 7; k++) {
						result.move_list[j].attack_animation.push({x:temp_x + diff_x * 2,
																	  y:temp_y + diff_y * 2,
																 picture:GG_DATA_PICTURE_ATTACK2,
																 picture_number: 2,
																 unit_dir:unit_dir});
					}
					for (var k = 1; k > -1; k--) {
						result.move_list[j].attack_animation.push({x: temp_x + diff_x * k,
																		   y: temp_y + diff_y * k,
														 picture:GG_DATA_PICTURE_MOVE,
														 picture_number: GG_PARTS_UNIQ_ANIMATION[k],
														 unit_dir: unit_dir
							});
					}
				} else if (attack_obj.other_unit[j].attack_down_now_flag == true) {
					var temp_x = attack_obj.other_unit[j].start_x + diff_x * 12;
					var temp_y = attack_obj.other_unit[j].start_y + diff_y * 12;
					/////
					var diff_x = GG_DATA_MOVE_DIRECTION[attack_obj.other_unit[j].route[6]].x / 12;
					var diff_y = GG_DATA_MOVE_DIRECTION[attack_obj.other_unit[j].route[6]].y / 12;
		
					var unit_dir = 0;
					if (attack_obj.other_unit[j].route[6] == 0 ||
						attack_obj.other_unit[j].route[6] == 5 ) {
						unit_dir = 3;
					} else if (attack_obj.other_unit[j].route[6] == 1) {
						unit_dir = 1;
					} else if (attack_obj.other_unit[j].route[6] == 4) {
						unit_dir = 2;
					}
		
					result.move_list[j].attack_animation.push({x: temp_x + diff_x * 1,
																	  y: temp_y + diff_y * 1,
																 picture:GG_DATA_PICTURE_ATTACK1,
																 picture_number: 0,
																 unit_dir:unit_dir});
					result.move_list[j].attack_animation.push({x: temp_x + diff_x * 1,
																	  y: temp_y + diff_y * 1,
																 picture:GG_DATA_PICTURE_ATTACK1,
																 picture_number: 0,
																 unit_dir:unit_dir});
					result.move_list[j].attack_animation.push({x:temp_x + diff_x * 2,
																	  y:temp_y + diff_y * 2,
																 picture:GG_DATA_PICTURE_ATTACK1,
																 picture_number: 1,
																 unit_dir:unit_dir});
					second_attack_start = 48 + 4;
					
					for (var k = 0; k < 7; k++) {
						result.move_list[j].attack_animation.push({x:temp_x + diff_x * 2,
																	  y:temp_y + diff_y * 2,
																 picture:GG_DATA_PICTURE_ATTACK1,
																 picture_number: 2,
																 unit_dir:unit_dir});
					}
					for (var k = 1; k > -1; k--) {
						result.move_list[j].attack_animation.push({x: temp_x + diff_x * k,
																		   y: temp_y + diff_y * k,
														 picture:GG_DATA_PICTURE_MOVE,
														 picture_number: GG_PARTS_UNIQ_ANIMATION[k],
														 unit_dir: unit_dir
							});
					}
				}
				
			} else if (attack_obj.other_unit[j].avoidance_now_flag  == true) {
				var unit_dir = 0;
				if (route == 2 ||
					route == 3 ) {
					unit_dir = 3;
				} else if (route == 4) {
					unit_dir = 1;
				} else if (route == 1) {
					unit_dir = 2;
				}
				for (var k = 0; k < before_wait; k++) {
					result.move_list[j].attack_animation.push({x: attack_obj.other_unit[j].start_x,
															   y: attack_obj.other_unit[j].start_y,
											 picture:GG_DATA_PICTURE_STATUS0,
											 picture_number: 0,
											 unit_dir: 0
					});
				}
				for (var k = 0; k < 15; k++) {
					result.move_list[j].attack_animation.push({x: attack_obj.other_unit[j].start_x,
															   y: attack_obj.other_unit[j].start_y,
											 picture:GG_DATA_PICTURE_MOVE,
											 picture_number: 1,
											 unit_dir: unit_dir
					});
				}
				for (var k = 0; k < 3; k++) {
					result.move_list[j].attack_animation.push({x: attack_obj.other_unit[j].start_x + diff_x * (k + 1),
																   y: attack_obj.other_unit[j].start_y + diff_y * (k + 1),
												 picture:GG_DATA_PICTURE_MOVE,
												 picture_number: GG_PARTS_UNIQ_ANIMATION[k],
												 unit_dir: unit_dir
						});
				}
				for (var k = 2; k > -1; k--) {
					result.move_list[j].attack_animation.push({x: attack_obj.other_unit[j].start_x + diff_x * k,
																   y: attack_obj.other_unit[j].start_y + diff_y * k,
												 picture:GG_DATA_PICTURE_MOVE,
												 picture_number: GG_PARTS_UNIQ_ANIMATION[k],
												 unit_dir: unit_dir
						});
				}
				for (var k = 0; k < 15; k++) {
					result.move_list[j].attack_animation.push({x: attack_obj.other_unit[j].start_x,
															   y: attack_obj.other_unit[j].start_y,
											 picture:GG_DATA_PICTURE_MOVE,
											 picture_number: 1,
											 unit_dir: unit_dir
					});
				}
			} else if (attack_obj.other_unit[j].friend_pull_now_flag == true) {
                //
                for (var k = 0; k < my_unit_del_before_wait; k++) {
                    result.move_list[j].attack_animation.push({x: attack_obj.other_unit[j].start_x,
                                                                           y: attack_obj.other_unit[j].start_y,
                                                         picture:GG_DATA_PICTURE_STATUS0,
                                                         picture_number: 0,
                                                         unit_dir: 0
                            });
                }
				
                if (attack_obj.other_unit[j].route.length == 1) {
                    // 6 wait
                    for (var k = 0; k < 6; k++) {
                        result.move_list[j].attack_animation.push({x: attack_obj.other_unit[j].start_x,
                                                                           y: attack_obj.other_unit[j].start_y,
                                                         picture:GG_DATA_PICTURE_MOVE,
                                                         picture_number: 1,
                                                         unit_dir: 0
                            });
                    }
                    // 12 back
    				var diff_x = GG_DATA_MOVE_DIRECTION[attack_obj.other_unit[j].route[0]].x / 12;
    				var diff_y = GG_DATA_MOVE_DIRECTION[attack_obj.other_unit[j].route[0]].y / 12;
                    var unit_dir = 0;
                    if (attack_obj.other_unit[j].route[0] == 2 ||
                        attack_obj.other_unit[j].route[0] == 3) {
                        unit_dir = 3;
                    } else if (attack_obj.other_unit[j].route[0] == 1) {
                        unit_dir = 2;
                    } else if (attack_obj.other_unit[j].route[0] == 4) {
                        unit_dir = 1;
                    }
                    for (var k = 0; k < 12; k++) {
                        result.move_list[j].attack_animation.push({x:attack_obj.other_unit[j].start_x + diff_x * k,
                                                                          y:attack_obj.other_unit[j].start_y + diff_y * k,
                                                                     picture: GG_DATA_PICTURE_MOVE,
                                                                     picture_number: GG_PARTS_UNIQ_ANIMATION[k],
                                                                     unit_dir: unit_dir});

                    }
                    // 6 wait
                    for (var k = 0; k < 6; k++) {
                        result.move_list[j].attack_animation.push({x: attack_obj.other_unit[j].x,
                                                                           y: attack_obj.other_unit[j].y,
                                                        picture:GG_DATA_PICTURE_MOVE,
                                                         picture_number: 1,
                                                         unit_dir: 0
                            });
                    }
                    
                } else if (attack_obj.other_unit[j].route.length == 2) {
                    // 6 f
    				var diff_x = GG_DATA_MOVE_DIRECTION[attack_obj.other_unit[j].route[0]].x / 12;
    				var diff_y = GG_DATA_MOVE_DIRECTION[attack_obj.other_unit[j].route[0]].y / 12;
                    var unit_dir = 0;
                    if (attack_obj.other_unit[j].route[0] == 0 ||
                        attack_obj.other_unit[j].route[0] == 5) {
                        unit_dir = 3;
                    } else if (attack_obj.other_unit[j].route[0] == 1) {
                        unit_dir = 1;
                    } else if (attack_obj.other_unit[j].route[0] == 4) {
                        unit_dir = 2;
                    }
                    for (var k = 0; k < 6; k++) {
                        result.move_list[j].attack_animation.push({x:attack_obj.other_unit[j].start_x + diff_x * k,
                                                                          y:attack_obj.other_unit[j].start_y + diff_y * k,
                                                                     picture: GG_DATA_PICTURE_MOVE,
                                                                     picture_number: GG_PARTS_UNIQ_ANIMATION[k],
                                                                     unit_dir: unit_dir});
                    }
                    // 6 b
                    for (var k = 0; k < 6; k++) {
                        result.move_list[j].attack_animation.push({x:attack_obj.other_unit[j].start_x + diff_x * 6 - diff_x * k,
                                                                          y:attack_obj.other_unit[j].start_y + diff_y * 6 - diff_y * k,
                                                                     picture: GG_DATA_PICTURE_MOVE,
                                                                     picture_number: GG_PARTS_UNIQ_ANIMATION[k],
                                                                     unit_dir: unit_dir});
                    }
                    // 12 b
    				var diff_x = GG_DATA_MOVE_DIRECTION[attack_obj.other_unit[j].route[1]].x / 12;
    				var diff_y = GG_DATA_MOVE_DIRECTION[attack_obj.other_unit[j].route[1]].y / 12;
                    var unit_dir = 0;
                    if (attack_obj.other_unit[j].route[1] == 2 ||
                        attack_obj.other_unit[j].route[1] == 3) {
                        unit_dir = 3;
                    } else if (attack_obj.other_unit[j].route[1] == 1) {
                        unit_dir = 2;
                    } else if (attack_obj.other_unit[j].route[1] == 4) {
                        unit_dir = 1;
                    }
                    for (var k = 0; k < 12; k++) {
                        result.move_list[j].attack_animation.push({x:attack_obj.other_unit[j].start_x + diff_x * k,
                                                                          y:attack_obj.other_unit[j].start_y + diff_y * k,
                                                                     picture: GG_DATA_PICTURE_MOVE,
                                                                     picture_number: GG_PARTS_UNIQ_ANIMATION[k],
                                                                     unit_dir: unit_dir});
                    }
                }
                // attack + after 
				for (var k = 0; k < after_wait + 12; k++) {
					result.move_list[j].attack_animation.push({x: attack_obj.other_unit[j].x,
																       y: attack_obj.other_unit[j].y,
                                                     picture:GG_DATA_PICTURE_MOVE,
                                                     picture_number: 1,
                                                     unit_dir: 0
						});
				}

			} else if (attack_obj.other_unit[j].cover_now_flag  == true) {
				
				for (var k = 0; k < my_unit_del_before_wait; k++) {
					result.move_list[j].attack_animation.push({x: attack_obj.other_unit[j].start_x,
																   y: attack_obj.other_unit[j].start_y,
												 picture:GG_DATA_PICTURE_STATUS0,
												 picture_number: 0,
												 unit_dir: 0
						});
				}
				for (var k = 0; k < 12; k++) {
					result.move_list[j].attack_animation.push({x: attack_obj.other_unit[j].start_x + diff_x * (k + 1),
																   y: attack_obj.other_unit[j].start_y + diff_y * (k + 1),
												 picture:GG_DATA_PICTURE_MOVE,
												 picture_number: GG_PARTS_UNIQ_ANIMATION[k],
												 unit_dir: unit_dir
						});
				}
				for (var k = 0; k < 30; k++) {
					result.move_list[j].attack_animation.push({x: attack_obj.other_unit[j].start_x + diff_x * 12,
															   y: attack_obj.other_unit[j].start_y + diff_y * 12,
											 //picture:GG_DATA_PICTURE_STATUS,
											 picture: 's7',
											 picture_number: GG_PARTS_UNIQ_ANIMATION[k],
											 unit_dir: 0
						});
				}
				for (var k = 0; k < 6; k++) {
					result.move_list[j].attack_animation.push({x: attack_obj.other_unit[j].start_x + diff_x * 12,
															   y: attack_obj.other_unit[j].start_y + diff_y * 12,
											 picture: 's4',
											 picture_number: 0,
											 unit_dir: 0
						});
				}
				
				for (var k = 11; k > -1; k--) {
					result.move_list[j].attack_animation.push({x: attack_obj.other_unit[j].start_x + diff_x * k,
																   y: attack_obj.other_unit[j].start_y + diff_y * k,
												 picture:GG_DATA_PICTURE_MOVE,
												 picture_number: GG_PARTS_UNIQ_ANIMATION[k],
												 unit_dir: unit_dir
						});
				}
			} else if (attack_obj.other_unit[j].enemy_push_now_flag == true) {
				diff = {x: GG_DATA_MOVE_DIRECTION[attack_obj.other_unit[j].route[0]].x / 12,
						y: GG_DATA_MOVE_DIRECTION[attack_obj.other_unit[j].route[0]].y / 12};
		
				result.move_list[j] = {};
				result.move_list[j].attack_animation = [];
				result.move_list[j].attack_animation.push({x: attack_obj.other_unit[j].x + diff.x * 1,
														   y: attack_obj.other_unit[j].y + diff.y * 1,
																 picture:GG_DATA_PICTURE_ATTACK1,
																 picture_number: 0,
																 unit_dir: attack_obj.other_unit[j].unit_dir});
				result.move_list[j].attack_animation.push({x: attack_obj.other_unit[j].x + diff.x * 2,
												 y: attack_obj.other_unit[j].y + diff.y * 2,
																 picture:GG_DATA_PICTURE_ATTACK1,
																 picture_number: 1,
																 unit_dir: attack_obj.other_unit[0].unit_dir});
		
				for (var i = 0; i < 21; i++) {
					result.move_list[j].attack_animation.push({x: attack_obj.other_unit[j].x + diff.x * 2,
												 y: attack_obj.other_unit[j].y + diff.y * 2,
																 picture:GG_DATA_PICTURE_ATTACK1,
																 picture_number: 2,
																 unit_dir: attack_obj.other_unit[j].unit_dir});
				}
																 
		
				result.move_list[j].attack_animation.push({x: attack_obj.other_unit[j].x + diff.x * 1,
												 y: attack_obj.other_unit[j].y + diff.y * 1,
																 picture:GG_DATA_PICTURE_MOVE,
																 picture_number: 1,
																 unit_dir: attack_obj.other_unit[j].unit_dir});
					
				for (var i = 0; i < result.route_count * 12 - 24; i++) {
					result.move_list[j].attack_animation.push({x: attack_obj.other_unit[j].x,
															   y: attack_obj.other_unit[j].y,
																 picture:GG_DATA_PICTURE_STATUS0,
																 picture_number: 0,
																 unit_dir: 0});
					
				}
				
			}						
        }
		
		// 3
	} else if (attack_type == GG_DATA_ATTACK_TYPE_BOW ||
			   attack_type == GG_DATA_ATTACK_TYPE_LONGBOW ||
//			   attack_type == GG_DATA_ATTACK_TYPE_TOMAHAWK ||
			   attack_type == GG_DATA_ATTACK_TYPE_WITCH ||
			   attack_type == GG_DATA_ATTACK_TYPE_WIND ||
			   attack_type == GG_DATA_ATTACK_TYPE_HARP ||
			   attack_type == GG_DATA_ATTACK_TYPE_TAKT) {
		
		result.route_count = 2;
        result.attack_animation = [];
		result.throw_start = 1 * 12 + 6;
		result.throw_end   = 2 * 12;
		
		var before_wait = 0, after_wait = 0, animation_wait = 0;

		var my_unit_del_before_wait = 0;
		if (enemy_push_now_flag == true) {
			result.route_count      += 2;
			before_wait             += 24;
			my_unit_del_before_wait += 24;
			result.throw_start      += 2 * 12;                
			result.throw_end        += 2 * 12;
		}

        if (cover_now_flag == true) {
			before_wait += 24;
			result.throw_start += 24;
			result.throw_end   += 24;                
			result.route_count += 2;
        } else if (friend_pull_now_flag == true) {
			before_wait += 12;
			result.throw_start += 12;                
			result.throw_end   += 12;                
			result.route_count += 1;
        }
        
		if (cover_now_flag == true
            || avoidance_now_flag == true
//            counter_now_flag == true
			) {
			after_wait += 12;
			result.route_count += 1;
		}
		var attack_enemy_push_check = -1;
		for (var i = 0; i < attack_obj.other_unit.length; i++) {
			if (attack_obj.other_unit[i].attack_enemy_push_now_flag == true){
				attack_enemy_push_check = i;
				break;
			}
		}
		
		if (attack_enemy_push_now_flag == true) {
			if (attack_obj.other_unit[attack_enemy_push_check].route.length == 1) {
				if (after_wait == 0) {
					result.route_count += 1;
				}
			} else if (attack_obj.other_unit[attack_enemy_push_check].route.length == 2) {
				if (after_wait == 0) {
					result.route_count += 2;
				} else if (after_wait == 12) {
					result.route_count += 1;
				}
			} else if (attack_obj.other_unit[attack_enemy_push_check].route.length == 3) {
				if (after_wait == 0) {
					result.route_count += 3;
				} else if (after_wait == 12) {
					result.route_count += 2;
				} else if (after_wait == 24) {
					result.route_count += 1;
				}
			}
			after_wait = attack_obj.other_unit[attack_enemy_push_check].route.length * 12;
		}

        /////
		var effect = GG_DATA_ANIMATION_EFFECT_NONE;
		if (attack_obj.my_unit.assault_flag == true) {
			effect = GG_DATA_ANIMATION_EFFECT_ASSAULT;
		}
		if (attack_obj.my_unit.class_down_flag == true) {
			effect = GG_DATA_ANIMATION_EFFECT_CLASS_DOWN;
		}
		////// enemy_push
		////// enemy_push
		if (enemy_push_now_flag == true) {
			var attacker = {x: attack_obj.my_unit.moved.x,
			                y: attack_obj.my_unit.moved.y};
			for (var i = 0; i < 6; i++) {
				result.attack_animation.push({x: attack_obj.my_unit.attacker.x, y: attack_obj.my_unit.attacker.y,
														 picture:GG_DATA_PICTURE_STATUS0,
														 picture_number: 0,
														 unit_dir:0});
			}
			diff_x = (attack_obj.my_unit.moved.x - attack_obj.my_unit.attacker.x) /12 ;
			diff_y = (attack_obj.my_unit.moved.y - attack_obj.my_unit.attacker.y) / 12;
			temp_x = attack_obj.my_unit.attacker.x;
			temp_y = attack_obj.my_unit.attacker.y;
			for (var i = 0; i < 12; i++) {
				temp_x += diff_x;
				temp_y += diff_y;
				result.attack_animation.push({x: temp_x,
													  y: temp_y,
													 picture:GG_DATA_PICTURE_MOVE,
													 picture_number: GG_PARTS_UNIQ_ANIMATION[i],
													 unit_dir: attack_obj.my_unit.moved.unit_dir
						});
			}
			
			for (var i = 0; i < 6; i++) {
				result.attack_animation.push({x: attack_obj.my_unit.moved.x,
											  y: attack_obj.my_unit.moved.y,
														 picture: GG_DATA_PICTURE_STATUS0,
														 picture_number: 0,
														 unit_dir:0});
			}
		} else {
			var attacker = {x: attack_obj.my_unit.attacker.x,
			                y: attack_obj.my_unit.attacker.y};
			
		}
		//
        var count;
        for (var j = 0; j < attack_dir.length; j++) {
            if (attack_obj.my_unit.attacked.x - attacker.x == attack_dir[j].x &&
                attack_obj.my_unit.attacked.y - attacker.y == attack_dir[j].y) {
                count = j;
                break;
            }
        }

		
		//for (var i = 0; i < 6; i++) {
	    //    result.attack_animation.push({x: attacker.x,
		//								  y: attacker.y,
        //                                             picture: GG_DATA_PICTURE_STATUS0,
        //                                             picture_number: 0,
        //                                             unit_dir:0});
		//}

		for (var k = 0; k < before_wait - my_unit_del_before_wait + 6; k++) {
			result.attack_animation.push({x: attacker.x, y: attacker.y, picture:GG_DATA_PICTURE_MOVE,
													 effect: effect,
												 picture_number:1, unit_dir:attack_dir[count].unit_dir});
		}
		var del_count = 6;
		if (attack_type == GG_DATA_ATTACK_TYPE_BOW ||
			attack_type == GG_DATA_ATTACK_TYPE_LONGBOW ||
			attack_type == GG_DATA_ATTACK_TYPE_HARP) {
			result.attack_animation.push({x:attacker.x, y:attacker.y, picture:GG_DATA_PICTURE_ATTACK1, effect: effect,picture_number:0, unit_dir:attack_dir[count].unit_dir});
			result.attack_animation.push({x:attacker.x, y:attacker.y, picture:GG_DATA_PICTURE_ATTACK1, effect: effect,picture_number:0, unit_dir:attack_dir[count].unit_dir});
			result.attack_animation.push({x:attacker.x, y:attacker.y, picture:GG_DATA_PICTURE_ATTACK1, effect: effect,picture_number:0, unit_dir:attack_dir[count].unit_dir});
			result.attack_animation.push({x:attacker.x, y:attacker.y, picture:GG_DATA_PICTURE_ATTACK1, effect: effect,picture_number:0, unit_dir:attack_dir[count].unit_dir});
			result.attack_animation.push({x:attacker.x, y:attacker.y, picture:GG_DATA_PICTURE_ATTACK1, effect: effect,picture_number:0, unit_dir:attack_dir[count].unit_dir});
			result.attack_animation.push({x:attacker.x, y:attacker.y, picture:GG_DATA_PICTURE_ATTACK1, effect: effect,picture_number:1, unit_dir:attack_dir[count].unit_dir});
			result.attack_animation.push({x:attacker.x, y:attacker.y, picture:GG_DATA_PICTURE_ATTACK1, effect: effect,picture_number:1, unit_dir:attack_dir[count].unit_dir});
			result.attack_animation.push({x:attacker.x, y:attacker.y, picture:GG_DATA_PICTURE_ATTACK1, effect: effect,picture_number:1, unit_dir:attack_dir[count].unit_dir});
			result.attack_animation.push({x:attacker.x, y:attacker.y, picture:GG_DATA_PICTURE_ATTACK1, effect: effect,picture_number:1, unit_dir:attack_dir[count].unit_dir});
			result.attack_animation.push({x:attacker.x, y:attacker.y, picture:GG_DATA_PICTURE_ATTACK1, effect: effect,picture_number:1, unit_dir:attack_dir[count].unit_dir});
			result.attack_animation.push({x:attacker.x, y:attacker.y, picture:GG_DATA_PICTURE_ATTACK1, effect: effect,picture_number:1, unit_dir:attack_dir[count].unit_dir});
			result.attack_animation.push({x:attacker.x, y:attacker.y, picture:GG_DATA_PICTURE_ATTACK1, effect: effect,picture_number:1, unit_dir:attack_dir[count].unit_dir});
			result.attack_animation.push({x:attacker.x, y:attacker.y, picture:GG_DATA_PICTURE_ATTACK1, effect: effect,picture_number:1, unit_dir:attack_dir[count].unit_dir});
			result.attack_animation.push({x:attacker.x, y:attacker.y, picture:GG_DATA_PICTURE_ATTACK1, effect: effect,picture_number:1, unit_dir:attack_dir[count].unit_dir});
			result.attack_animation.push({x:attacker.x, y:attacker.y, picture:GG_DATA_PICTURE_ATTACK1, effect: effect,picture_number:1, unit_dir:attack_dir[count].unit_dir});
			result.attack_animation.push({x:attacker.x, y:attacker.y, picture:GG_DATA_PICTURE_ATTACK1, effect: effect,picture_number:1, unit_dir:attack_dir[count].unit_dir});
			result.attack_animation.push({x:attacker.x, y:attacker.y, picture:GG_DATA_PICTURE_ATTACK1, effect: effect,picture_number:1, unit_dir:attack_dir[count].unit_dir});
			result.attack_animation.push({x:attacker.x, y:attacker.y, picture:GG_DATA_PICTURE_ATTACK1, effect: effect,picture_number:2, unit_dir:attack_dir[count].unit_dir});
		//} else if (attack_type == GG_DATA_ATTACK_TYPE_TRUMPET) {
		//	del_count = 3;
		//	result.throw_start += 3;
		//	result.attack_animation.push({x:attack_obj.my_unit.attacker.x, y:attack_obj.my_unit.attacker.y, picture:GG_DATA_PICTURE_ATTACK1, effect: effect,picture_number:0, unit_dir:attack_dir[count].unit_dir});
		//	result.attack_animation.push({x:attack_obj.my_unit.attacker.x, y:attack_obj.my_unit.attacker.y, picture:GG_DATA_PICTURE_ATTACK1, effect: effect,picture_number:0, unit_dir:attack_dir[count].unit_dir});
		//	result.attack_animation.push({x:attack_obj.my_unit.attacker.x, y:attack_obj.my_unit.attacker.y, picture:GG_DATA_PICTURE_ATTACK1, effect: effect,picture_number:0, unit_dir:attack_dir[count].unit_dir});
		//	result.attack_animation.push({x:attack_obj.my_unit.attacker.x, y:attack_obj.my_unit.attacker.y, picture:GG_DATA_PICTURE_ATTACK1, effect: effect,picture_number:0, unit_dir:attack_dir[count].unit_dir});
		//	result.attack_animation.push({x:attack_obj.my_unit.attacker.x, y:attack_obj.my_unit.attacker.y, picture:GG_DATA_PICTURE_ATTACK1, effect: effect,picture_number:0, unit_dir:attack_dir[count].unit_dir});
		//	result.attack_animation.push({x:attack_obj.my_unit.attacker.x, y:attack_obj.my_unit.attacker.y, picture:GG_DATA_PICTURE_ATTACK1, effect: effect,picture_number:1, unit_dir:attack_dir[count].unit_dir});
		//	result.attack_animation.push({x:attack_obj.my_unit.attacker.x, y:attack_obj.my_unit.attacker.y, picture:GG_DATA_PICTURE_ATTACK1, effect: effect,picture_number:1, unit_dir:attack_dir[count].unit_dir});
		//	result.attack_animation.push({x:attack_obj.my_unit.attacker.x, y:attack_obj.my_unit.attacker.y, picture:GG_DATA_PICTURE_ATTACK1, effect: effect,picture_number:1, unit_dir:attack_dir[count].unit_dir});
		//	result.attack_animation.push({x:attack_obj.my_unit.attacker.x, y:attack_obj.my_unit.attacker.y, picture:GG_DATA_PICTURE_ATTACK1, effect: effect,picture_number:1, unit_dir:attack_dir[count].unit_dir});
		//	result.attack_animation.push({x:attack_obj.my_unit.attacker.x, y:attack_obj.my_unit.attacker.y, picture:GG_DATA_PICTURE_ATTACK1, effect: effect,picture_number:1, unit_dir:attack_dir[count].unit_dir});
		//	result.attack_animation.push({x:attack_obj.my_unit.attacker.x, y:attack_obj.my_unit.attacker.y, picture:GG_DATA_PICTURE_ATTACK1, effect: effect,picture_number:1, unit_dir:attack_dir[count].unit_dir});
		//	result.attack_animation.push({x:attack_obj.my_unit.attacker.x, y:attack_obj.my_unit.attacker.y, picture:GG_DATA_PICTURE_ATTACK1, effect: effect,picture_number:1, unit_dir:attack_dir[count].unit_dir});
		//	result.attack_animation.push({x:attack_obj.my_unit.attacker.x, y:attack_obj.my_unit.attacker.y, picture:GG_DATA_PICTURE_ATTACK1, effect: effect,picture_number:1, unit_dir:attack_dir[count].unit_dir});
		//	result.attack_animation.push({x:attack_obj.my_unit.attacker.x, y:attack_obj.my_unit.attacker.y, picture:GG_DATA_PICTURE_ATTACK1, effect: effect,picture_number:1, unit_dir:attack_dir[count].unit_dir});
		//	result.attack_animation.push({x:attack_obj.my_unit.attacker.x, y:attack_obj.my_unit.attacker.y, picture:GG_DATA_PICTURE_ATTACK1, effect: effect,picture_number:1, unit_dir:attack_dir[count].unit_dir});
		//	result.attack_animation.push({x:attack_obj.my_unit.attacker.x, y:attack_obj.my_unit.attacker.y, picture:GG_DATA_PICTURE_ATTACK1, effect: effect,picture_number:1, unit_dir:attack_dir[count].unit_dir});
		//	result.attack_animation.push({x:attack_obj.my_unit.attacker.x, y:attack_obj.my_unit.attacker.y, picture:GG_DATA_PICTURE_ATTACK1, effect: effect,picture_number:1, unit_dir:attack_dir[count].unit_dir});
		//	result.attack_animation.push({x:attack_obj.my_unit.attacker.x, y:attack_obj.my_unit.attacker.y, picture:GG_DATA_PICTURE_ATTACK1, effect: effect,picture_number:1, unit_dir:attack_dir[count].unit_dir});
		//	result.attack_animation.push({x:attack_obj.my_unit.attacker.x, y:attack_obj.my_unit.attacker.y, picture:GG_DATA_PICTURE_ATTACK1, effect: effect,picture_number:1, unit_dir:attack_dir[count].unit_dir});
		//	result.attack_animation.push({x:attack_obj.my_unit.attacker.x, y:attack_obj.my_unit.attacker.y, picture:GG_DATA_PICTURE_ATTACK1, effect: effect,picture_number:1, unit_dir:attack_dir[count].unit_dir});
		//	result.attack_animation.push({x:attack_obj.my_unit.attacker.x, y:attack_obj.my_unit.attacker.y, picture:GG_DATA_PICTURE_ATTACK1, effect: effect,picture_number:2, unit_dir:attack_dir[count].unit_dir});
		} else if (attack_type == GG_DATA_ATTACK_TYPE_WITCH ||
				   attack_type == GG_DATA_ATTACK_TYPE_WIND ||
				   attack_type == GG_DATA_ATTACK_TYPE_TAKT) {
			result.attack_animation.push({x:attacker.x, y:attacker.y, picture:GG_DATA_PICTURE_ATTACK1, effect: effect,picture_number:0, unit_dir:attack_dir[count].unit_dir});
			result.attack_animation.push({x:attacker.x, y:attacker.y, picture:GG_DATA_PICTURE_ATTACK1, effect: effect,picture_number:1, unit_dir:attack_dir[count].unit_dir});
			result.attack_animation.push({x:attacker.x, y:attacker.y, picture:GG_DATA_PICTURE_ATTACK1, effect: effect,picture_number:0, unit_dir:attack_dir[count].unit_dir});
			result.attack_animation.push({x:attacker.x, y:attacker.y, picture:GG_DATA_PICTURE_ATTACK1, effect: effect,picture_number:1, unit_dir:attack_dir[count].unit_dir});
			result.attack_animation.push({x:attacker.x, y:attacker.y, picture:GG_DATA_PICTURE_ATTACK1, effect: effect,picture_number:0, unit_dir:attack_dir[count].unit_dir});
			result.attack_animation.push({x:attacker.x, y:attacker.y, picture:GG_DATA_PICTURE_ATTACK1, effect: effect,picture_number:1, unit_dir:attack_dir[count].unit_dir});
			result.attack_animation.push({x:attacker.x, y:attacker.y, picture:GG_DATA_PICTURE_ATTACK1, effect: effect,picture_number:0, unit_dir:attack_dir[count].unit_dir});
			result.attack_animation.push({x:attacker.x, y:attacker.y, picture:GG_DATA_PICTURE_ATTACK1, effect: effect,picture_number:1, unit_dir:attack_dir[count].unit_dir});
			result.attack_animation.push({x:attacker.x, y:attacker.y, picture:GG_DATA_PICTURE_ATTACK1, effect: effect,picture_number:0, unit_dir:attack_dir[count].unit_dir});
			result.attack_animation.push({x:attacker.x, y:attacker.y, picture:GG_DATA_PICTURE_ATTACK1, effect: effect,picture_number:1, unit_dir:attack_dir[count].unit_dir});
			result.attack_animation.push({x:attacker.x, y:attacker.y, picture:GG_DATA_PICTURE_ATTACK1, effect: effect,picture_number:0, unit_dir:attack_dir[count].unit_dir});
			result.attack_animation.push({x:attacker.x, y:attacker.y, picture:GG_DATA_PICTURE_ATTACK1, effect: effect,picture_number:1, unit_dir:attack_dir[count].unit_dir});
			result.attack_animation.push({x:attacker.x, y:attacker.y, picture:GG_DATA_PICTURE_ATTACK1, effect: effect,picture_number:0, unit_dir:attack_dir[count].unit_dir});
			result.attack_animation.push({x:attacker.x, y:attacker.y, picture:GG_DATA_PICTURE_ATTACK1, effect: effect,picture_number:1, unit_dir:attack_dir[count].unit_dir});
			result.attack_animation.push({x:attacker.x, y:attacker.y, picture:GG_DATA_PICTURE_ATTACK1, effect: effect,picture_number:0, unit_dir:attack_dir[count].unit_dir});
			result.attack_animation.push({x:attacker.x, y:attacker.y, picture:GG_DATA_PICTURE_ATTACK1, effect: effect,picture_number:1, unit_dir:attack_dir[count].unit_dir});
			result.attack_animation.push({x:attacker.x, y:attacker.y, picture:GG_DATA_PICTURE_ATTACK1, effect: effect,picture_number:0, unit_dir:attack_dir[count].unit_dir});
			result.attack_animation.push({x:attacker.x, y:attacker.y, picture:GG_DATA_PICTURE_ATTACK1, effect: effect,picture_number:2, unit_dir:attack_dir[count].unit_dir});

		//} else if (attack_type == GG_DATA_ATTACK_TYPE_TOMAHAWK ||
		//		   attack_type == GG_DATA_ATTACK_TYPE_JAVELIN) {
		//	var bin = GG_DATA_ANIMATION_BIN;
	     //   var diff = {x:GG_DATA_MOVE_DIRECTION[attack_dir[count].back_dir].x / bin,
        //            y:GG_DATA_MOVE_DIRECTION[attack_dir[count].back_dir].y / bin};

	    //    for (var j = 0; j < bin / 4; j++) {
	    //         result.attack_animation.push({x:attack_obj.my_unit.attacker.x + diff.x * (j + 1), y:attack_obj.my_unit.attacker.y + diff.y * (j + 1),
	    //                                                 picture:GG_DATA_PICTURE_MOVE,
		//											 effect: effect,
	    //                                                 picture_number: j,
	    //                                                 unit_dir:attack_dir[count].unit_dir});
	    //         result.attack_animation.push({x:attack_obj.my_unit.attacker.x + diff.x * (j + 1), y:attack_obj.my_unit.attacker.y + diff.y * (j + 1),
	    //                                                 picture:GG_DATA_PICTURE_MOVE,
		//											 effect: effect,
	    //                                                 picture_number: j,
	    //                                                 unit_dir:attack_dir[count].unit_dir});
	    //    }
	    //    result.attack_animation.push({x:attack_obj.my_unit.attacker.x + diff.x * (2 + 1), y:attack_obj.my_unit.attacker.y + diff.y * (2 + 1),
	    //                                                 picture:GG_DATA_PICTURE_MOVE,
		//											 effect: effect,
	    //                                                 picture_number: 1,
	    //                                                 unit_dir:attack_dir[count].unit_dir});
	    //    result.attack_animation.push({x:attack_obj.my_unit.attacker.x + diff.x * (2 + 1), y:attack_obj.my_unit.attacker.y + diff.y * (2 + 1),
	    //                                                 picture:GG_DATA_PICTURE_MOVE,
		//											 effect: effect,
        //                                             picture_number: 1,
	    //                                                 unit_dir:attack_dir[count].unit_dir});
	    //    result.attack_animation.push({x:attack_obj.my_unit.attacker.x + diff.x * (2 + 1), y:attack_obj.my_unit.attacker.y + diff.y * (2 + 1),
	    //                                                 picture:GG_DATA_PICTURE_MOVE,
		//											 effect: effect,
	    //                                                 picture_number: 1,
	    //                                                 unit_dir:attack_dir[count].unit_dir});
			
		//	for (var j = 0; j < bin / 4; j++) {
        //        result.attack_animation.push({x:attack_obj.my_unit.attacker.x + diff.x * (2) - diff.x * (j),
        //                                              y:attack_obj.my_unit.attacker.y + diff.y * (2) - diff.y * (j),
        //                                              picture:GG_DATA_PICTURE_ATTACK1,
	//												 effect: effect,
        //                                              picture_number: j,
        //                                              unit_dir:attack_dir[count].unit_dir});
        //    }
        }
		//attack_start = before_wait * 12 + 24 - 1 - (GG_DATA_ANIMATION_BIN - GG_DATA_ANIMATION_LONG_BIN);
		attack_start = before_wait + 24 - 1;

		for (var j = 0; j < after_wait; j++) {
            result.attack_animation.push({x: attacker.x, y: attacker.y, picture:GG_DATA_PICTURE_ATTACK1,
													 effect: effect,
                                                 picture_number:2, unit_dir:attack_dir[count].unit_dir});
        }

		//
		if (attack_obj.other_unit == undefined) {
			attack_obj.other_unit = [];
		} else {
			result.move_list = [];
		}
		result.move_list = [];
        for (var j = 0; j < attack_obj.other_unit.length; j++) {
			if (attack_obj.other_unit[j].avoidance_now_flag != true &&
				attack_obj.other_unit[j].friend_pull_now_flag != true &&
				attack_obj.other_unit[j].counter_now_flag != true &&
				attack_obj.other_unit[j].cover_now_flag != true &&
				attack_obj.other_unit[j].enemy_push_now_flag != true &&
				attack_obj.other_unit[j].attack_enemy_push_now_flag != true) {
				continue;
			}
			result.move_list[j] = {};
			result.move_list[j].attack_animation = [];
			
			if (attack_obj.other_unit[j].avoidance_now_flag == true) {
				var diff_x = GG_DATA_MOVE_DIRECTION[attack_obj.other_unit[j].route[0]].x / 12;
				var diff_y = GG_DATA_MOVE_DIRECTION[attack_obj.other_unit[j].route[0]].y / 12;
	
				var unit_dir = 0;
				if (attack_obj.other_unit[j].route[0] == 2 ||
					attack_obj.other_unit[j].route[0] == 3 ) {
					unit_dir = 3;
				} else if (attack_obj.other_unit[j].route[0] == 4) {
					unit_dir = 1;
				} else if (attack_obj.other_unit[j].route[0] == 1) {
					unit_dir = 2;
				}
				for (var k = 0; k < before_wait + 12; k++) {
					result.move_list[j].attack_animation.push({x: attack_obj.other_unit[j].start_x ,
																	   y: attack_obj.other_unit[j].start_y ,
													 picture:GG_DATA_PICTURE_MOVE,
													 picture_number: 1,
													 unit_dir: unit_dir
						});
				}
				
				for (var k = 0; k < 3; k++) {
					result.move_list[j].attack_animation.push({x: attack_obj.other_unit[j].start_x + diff_x * (k + 1),
																	   y: attack_obj.other_unit[j].start_y + diff_y * (k + 1),
													 picture:GG_DATA_PICTURE_MOVE,
													 picture_number: GG_PARTS_UNIQ_ANIMATION[k],
													 unit_dir: unit_dir
						});
				}
				for (var k = 0; k < 12; k++) {
					result.move_list[j].attack_animation.push({x: attack_obj.other_unit[j].start_x + diff_x * 3,
																	   y: attack_obj.other_unit[j].start_y + diff_y * 3,
													 picture:GG_DATA_PICTURE_MOVE,
													 picture_number: 1,
													 unit_dir: unit_dir
						});
				}
									
				for (var k = 2; k > -1; k--) {
					result.move_list[j].attack_animation.push({x: attack_obj.other_unit[j].start_x + diff_x * k,
																	   y: attack_obj.other_unit[j].start_y + diff_y * k,
													 picture:GG_DATA_PICTURE_MOVE,
													 picture_number: GG_PARTS_UNIQ_ANIMATION[k],
													 unit_dir: unit_dir
						});
				}
				for (var k = 0; k < 6; k++) {
					result.move_list[j].attack_animation.push({x: attack_obj.other_unit[j].start_x ,
																	   y: attack_obj.other_unit[j].start_y ,
													 picture:GG_DATA_PICTURE_MOVE,
													 picture_number: 1,
													 unit_dir: unit_dir
						});
				}
			} else if (attack_obj.other_unit[j].friend_pull_now_flag == true) {
				for (var k = 0; k < before_wait - 12; k++) {
					result.move_list[j].attack_animation.push({x: attack_obj.other_unit[j].start_x,
																       y: attack_obj.other_unit[j].start_y,
                                                     picture:GG_DATA_PICTURE_MOVE,
                                                     picture_number: 1,
                                                     unit_dir: 0
						});
				}
                //
                if (attack_obj.other_unit[j].route.length == 1) {
                    // 6 wait
                    for (var k = 0; k < 6; k++) {
                        result.move_list[j].attack_animation.push({x: attack_obj.other_unit[j].start_x,
                                                                           y: attack_obj.other_unit[j].start_y,
                                                         picture:GG_DATA_PICTURE_MOVE,
                                                         picture_number: 1,
                                                         unit_dir: 0
                            });
                    }
                    // 12 back
    				var diff_x = GG_DATA_MOVE_DIRECTION[attack_obj.other_unit[j].route[0]].x / 12;
    				var diff_y = GG_DATA_MOVE_DIRECTION[attack_obj.other_unit[j].route[0]].y / 12;
                    var unit_dir = 0;
                    if (attack_obj.other_unit[j].route[0] == 2 ||
                        attack_obj.other_unit[j].route[0] == 3) {
                        unit_dir = 3;
                    } else if (attack_obj.other_unit[j].route[0] == 1) {
                        unit_dir = 2;
                    } else if (attack_obj.other_unit[j].route[0] == 4) {
                        unit_dir = 1;
                    }
                    for (var k = 0; k < 12; k++) {
                        result.move_list[j].attack_animation.push({x:attack_obj.other_unit[j].start_x + diff_x * k,
                                                                          y:attack_obj.other_unit[j].start_y + diff_y * k,
                                                                     picture: GG_DATA_PICTURE_MOVE,
                                                                     picture_number: GG_PARTS_UNIQ_ANIMATION[k],
                                                                     unit_dir: unit_dir});

                    }
                    // 6 wait
                    for (var k = 0; k < 6; k++) {
                        result.move_list[j].attack_animation.push({x: attack_obj.other_unit[j].x,
                                                                           y: attack_obj.other_unit[j].y,
                                                         picture:GG_DATA_PICTURE_MOVE,
                                                         picture_number: 1,
                                                         unit_dir: 0
                            });
                    }
                    
                } else if (attack_obj.other_unit[j].route.length == 2) {
                    // 6 f
    				var diff_x = GG_DATA_MOVE_DIRECTION[attack_obj.other_unit[j].route[0]].x / 12;
    				var diff_y = GG_DATA_MOVE_DIRECTION[attack_obj.other_unit[j].route[0]].y / 12;
                    var unit_dir = 0;
                    if (attack_obj.other_unit[j].route[0] == 0 ||
                        attack_obj.other_unit[j].route[0] == 5) {
                        unit_dir = 3;
                    } else if (attack_obj.other_unit[j].route[0] == 1) {
                        unit_dir = 1;
                    } else if (attack_obj.other_unit[j].route[0] == 4) {
                        unit_dir = 2;
                    }
                    for (var k = 0; k < 6; k++) {
                        result.move_list[j].attack_animation.push({x:attack_obj.other_unit[j].start_x + diff_x * k,
                                                                          y:attack_obj.other_unit[j].start_y + diff_y * k,
                                                                     picture: GG_DATA_PICTURE_MOVE,
                                                                     picture_number: GG_PARTS_UNIQ_ANIMATION[k],
                                                                     unit_dir: unit_dir});
                    }
                    // 6 b
                    for (var k = 0; k < 6; k++) {
                        result.move_list[j].attack_animation.push({x:attack_obj.other_unit[j].start_x + diff_x * 6 - diff_x * k,
                                                                          y:attack_obj.other_unit[j].start_y + diff_y * 6 - diff_y * k,
                                                                     picture: GG_DATA_PICTURE_MOVE,
                                                                     picture_number: GG_PARTS_UNIQ_ANIMATION[k],
                                                                     unit_dir: unit_dir});
                    }
                    // 12 b
    				var diff_x = GG_DATA_MOVE_DIRECTION[attack_obj.other_unit[j].route[1]].x / 12;
    				var diff_y = GG_DATA_MOVE_DIRECTION[attack_obj.other_unit[j].route[1]].y / 12;
                    var unit_dir = 0;
                    if (attack_obj.other_unit[j].route[1] == 2 ||
                        attack_obj.other_unit[j].route[1] == 3) {
                        unit_dir = 3;
                    } else if (attack_obj.other_unit[j].route[1] == 1) {
                        unit_dir = 2;
                    } else if (attack_obj.other_unit[j].route[1] == 4) {
                        unit_dir = 1;
                    }
                    for (var k = 0; k < 12; k++) {
                        result.move_list[j].attack_animation.push({x:attack_obj.other_unit[j].start_x + diff_x * k,
                                                                          y:attack_obj.other_unit[j].start_y + diff_y * k,
                                                                     picture: GG_DATA_PICTURE_MOVE,
                                                                     picture_number: GG_PARTS_UNIQ_ANIMATION[k],
                                                                     unit_dir: unit_dir});
                    }
                }
                // attack + after 
				for (var k = 0; k < 12 + after_wait; k++) {
					result.move_list[j].attack_animation.push({x: attack_obj.other_unit[j].x,
																       y: attack_obj.other_unit[j].y,
                                                     picture:GG_DATA_PICTURE_MOVE,
                                                     picture_number: 1,
                                                     unit_dir: 0
						});
				}
            
                //
			} else if (attack_obj.other_unit[j].cover_now_flag == true) {
				var diff_x = GG_DATA_MOVE_DIRECTION[attack_obj.other_unit[j].route[0]].x / 12;
				var diff_y = GG_DATA_MOVE_DIRECTION[attack_obj.other_unit[j].route[0]].y / 12;
	
				var unit_dir = 0;
				if (attack_obj.other_unit[j].route[0] == 0 ||
					attack_obj.other_unit[j].route[0] == 5 ) {
					unit_dir = 3;
				} else if (attack_obj.other_unit[j].route[0] == 1) {
					unit_dir = 1;
				} else if (attack_obj.other_unit[j].route[0] == 4) {
					unit_dir = 2;
				}
				for (var k = 0; k < my_unit_del_before_wait; k++) {
					result.move_list[j].attack_animation.push({x: attack_obj.other_unit[j].start_x,
																	   y: attack_obj.other_unit[j].start_y,
													 picture:GG_DATA_PICTURE_STATUS0,
													 picture_number: 0,
													 unit_dir: 0
						});
				}
				
				for (var k = 0; k < 12; k++) {
					result.move_list[j].attack_animation.push({x: attack_obj.other_unit[j].start_x + diff_x * (k + 1),
																	   y: attack_obj.other_unit[j].start_y + diff_y * (k + 1),
													 picture:GG_DATA_PICTURE_MOVE,
													 picture_number: GG_PARTS_UNIQ_ANIMATION[k],
													 unit_dir: unit_dir
						});
				}
				for (var k = 0; k < 12 + 12 + 12 - 1; k++) {
					result.move_list[j].attack_animation.push({x: attack_obj.other_unit[j].start_x + diff_x * 12,
																	   y: attack_obj.other_unit[j].start_y + diff_y * 12,
													 picture: 's7',
													 picture_number: GG_PARTS_UNIQ_ANIMATION[k],
													 unit_dir: 0
						});
				}
				for (var k = 0; k < 1; k++) {
					result.move_list[j].attack_animation.push({x: attack_obj.other_unit[j].start_x + diff_x * 12,
																	   y: attack_obj.other_unit[j].start_y + diff_y * 12,
													 picture: 's4',
													 picture_number: 0,
													 unit_dir: 0
						});
				}

				for (var k = 11; k > -1; k--) {
					result.move_list[j].attack_animation.push({x: attack_obj.other_unit[j].start_x + diff_x * k,
																	   y: attack_obj.other_unit[j].start_y + diff_y * k,
													 picture:GG_DATA_PICTURE_MOVE,
													 picture_number: GG_PARTS_UNIQ_ANIMATION[k],
													 unit_dir: unit_dir
						});
				}
			} else if (attack_obj.other_unit[j].attack_enemy_push_now_flag == true) {
				for (var k = 0; k < before_wait + 12 + 12; k++) {
					result.move_list[j].attack_animation.push({x: attack_obj.other_unit[j].start_x,
																	   y: attack_obj.other_unit[j].start_y,
													 picture:GG_DATA_PICTURE_MOVE,
													 picture_number: 1,
													 unit_dir: 0
						});
				}
				
				diff_x = GG_DATA_MOVE_DIRECTION[attack_obj.other_unit[j].route[0].route].x / 12;
				diff_y = GG_DATA_MOVE_DIRECTION[attack_obj.other_unit[j].route[0].route].y / 12;
	
				unit_dir = 0;
				if (attack_obj.other_unit[j].route[0].route == 2 ||
					attack_obj.other_unit[j].route[0].route == 3 ) {
					unit_dir = 3;
				} else if (attack_obj.other_unit[j].route[0].route == 4) {
					unit_dir = 1;
				} else if (attack_obj.other_unit[j].route[0].route == 1) {
					unit_dir = 2;
				}
									
				for (var k = 0; k < 12; k++) {
					result.move_list[j].attack_animation.push({x: attack_obj.other_unit[j].start_x + diff_x * (k + 1),
																	   y: attack_obj.other_unit[j].start_y + diff_y * (k + 1),
													 picture:GG_DATA_PICTURE_MOVE,
													 picture_number: GG_PARTS_UNIQ_ANIMATION[k],
													 unit_dir: unit_dir
						});
				}
				if (attack_obj.other_unit[j].route.length >= 2) {
					diff_x = GG_DATA_MOVE_DIRECTION[attack_obj.other_unit[j].route[1].route].x / 12;
					diff_y = GG_DATA_MOVE_DIRECTION[attack_obj.other_unit[j].route[1].route].y / 12;
	
					unit_dir = 0;
					if (attack_obj.other_unit[j].route[1].route == 2 ||
						attack_obj.other_unit[j].route[1].route == 3 ) {
						unit_dir = 3;
					} else if (attack_obj.other_unit[j].route[1].route == 4) {
						unit_dir = 1;
					} else if (attack_obj.other_unit[j].route[1].route == 1) {
						unit_dir = 2;
					}
					for (var k = 0; k < 12; k++) {
						result.move_list[j].attack_animation.push({x: attack_obj.other_unit[j].start_x + attack_obj.other_unit[j].route[0].x + diff_x * (k + 1),
																		   y: attack_obj.other_unit[j].start_y + attack_obj.other_unit[j].route[0].y + diff_y * (k + 1),
														 picture:GG_DATA_PICTURE_MOVE,
														 picture_number: GG_PARTS_UNIQ_ANIMATION[k],
														 unit_dir: unit_dir
							});
					}
				}
				if (attack_obj.other_unit[j].route.length >= 3) {
					diff_x = GG_DATA_MOVE_DIRECTION[attack_obj.other_unit[j].route[2].route].x / 12;
					diff_y = GG_DATA_MOVE_DIRECTION[attack_obj.other_unit[j].route[2].route].y / 12;
		
					unit_dir = 0;
					if (attack_obj.other_unit[j].route[2].route == 2 ||
						attack_obj.other_unit[j].route[2].route == 3 ) {
						unit_dir = 3;
					} else if (attack_obj.other_unit[j].route[2].route == 4) {
						unit_dir = 1;
					} else if (attack_obj.other_unit[j].route[2].route == 1) {
						unit_dir = 2;
					}
					for (var k = 0; k < 12; k++) {
						result.move_list[j].attack_animation.push({x: attack_obj.other_unit[j].start_x + attack_obj.other_unit[j].route[1].x + diff_x * (k + 1),
																		   y: attack_obj.other_unit[j].start_y + attack_obj.other_unit[j].route[1].y + diff_y * (k + 1),
														 picture:GG_DATA_PICTURE_MOVE,
														 picture_number: GG_PARTS_UNIQ_ANIMATION[k],
														 unit_dir: unit_dir
							});
					}
				}
			} else if (attack_obj.other_unit[j].enemy_push_now_flag == true) {
				diff = {x: GG_DATA_MOVE_DIRECTION[attack_obj.other_unit[j].route[0]].x / 12,
						y: GG_DATA_MOVE_DIRECTION[attack_obj.other_unit[j].route[0]].y / 12};
		
				result.move_list[j] = {};
				result.move_list[j].attack_animation = [];
				result.move_list[j].attack_animation.push({x: attack_obj.other_unit[j].x + diff.x * 1,
														   y: attack_obj.other_unit[j].y + diff.y * 1,
																 picture:GG_DATA_PICTURE_ATTACK1,
																 picture_number: 0,
																 unit_dir: attack_obj.other_unit[j].unit_dir});
				result.move_list[j].attack_animation.push({x: attack_obj.other_unit[j].x + diff.x * 2,
												 y: attack_obj.other_unit[j].y + diff.y * 2,
																 picture:GG_DATA_PICTURE_ATTACK1,
																 picture_number: 1,
																 unit_dir: attack_obj.other_unit[0].unit_dir});
		
				for (var i = 0; i < 21; i++) {
					result.move_list[j].attack_animation.push({x: attack_obj.other_unit[j].x + diff.x * 2,
												 y: attack_obj.other_unit[j].y + diff.y * 2,
																 picture:GG_DATA_PICTURE_ATTACK1,
																 picture_number: 2,
																 unit_dir: attack_obj.other_unit[j].unit_dir});
				}
																 
		
				result.move_list[j].attack_animation.push({x: attack_obj.other_unit[j].x + diff.x * 1,
												 y: attack_obj.other_unit[j].y + diff.y * 1,
																 picture:GG_DATA_PICTURE_MOVE,
																 picture_number: 1,
																 unit_dir: attack_obj.other_unit[j].unit_dir});
					
				for (var i = 0; i < result.route_count * 12 - 24; i++) {
					result.move_list[j].attack_animation.push({x: attack_obj.other_unit[j].x,
															   y: attack_obj.other_unit[j].y,
																 picture:GG_DATA_PICTURE_STATUS0,
																 picture_number: 0,
																 unit_dir: 0});
					
				}
			
			}
        }

	//
	} else if (attack_type == GG_DATA_ATTACK_TYPE_LASER) {
		
        result.attack_animation = [];
		result.throw_start = 1 * 12;
		//
		var xabs = Math.abs(attack_obj.my_unit.attacker.x - attack_obj.my_unit.end.x);
        var yabs = Math.abs(attack_obj.my_unit.attacker.y - attack_obj.my_unit.end.y);
        if (yabs > xabs) {
            var distance = yabs;
        } else {
            var distance = (xabs + yabs) / 2;
        }
		var before_wait = 0, after_wait = 0, animation_wait = 0;

		var distance_wait = 0
		if (distance % 4 == 0) {
			result.route_count = distance / 4 + 1;
		} else {
			result.route_count = (distance - distance % 4) / 4 + 1 + 1;
			if (distance % 4 == 1) {
				result.throw_start += 9;
				before_wait = 9;
				distance_wait = 9;
			} else if (distance % 4 == 2) {
				result.throw_start += 6;
				distance_wait = 6;
				before_wait = 6;
			} else if (distance % 4 == 3) {
				result.throw_start += 3;
				before_wait = 3;
				distance_wait = 3;
			}
			
		}
		//result.route_count = distance;
		
		result.throw_end = result.route_count * 12;
		var my_unit_del_before_wait = 0;

		if (enemy_push_now_flag == true) {
			result.route_count += 2;
			before_wait += 24;
			my_unit_del_before_wait += 24;
			result.throw_start += 2 * 12;                
			result.throw_end   += 2 * 12;                
		}
        
        if (cover_now_flag == true ||
            friend_pull_now_flag == true) {
			before_wait += 12;
			result.throw_start += 12;                
			result.throw_end   += 12;                
			result.route_count += 1;
        }
        
		if (cover_now_flag == true ||
            avoidance_now_flag == true ||
            counter_now_flag == true
			|| attack_down_now_flag == true
			) {
			after_wait = 12;
			result.route_count += 1;
		}

		var effect = GG_DATA_ANIMATION_EFFECT_NONE;
		if (attack_obj.my_unit.assault_flag == true) {
			effect = GG_DATA_ANIMATION_EFFECT_ASSAULT;
		}

		////// enemy_push
		if (enemy_push_now_flag == true) {
			var attacker = {x: attack_obj.my_unit.moved.x,
			                y: attack_obj.my_unit.moved.y};
			for (var i = 0; i < 6; i++) {
				result.attack_animation.push({x: attack_obj.my_unit.attacker.x, y: attack_obj.my_unit.attacker.y,
														 picture:GG_DATA_PICTURE_STATUS0,
														 picture_number: 0,
														 unit_dir:0});
			}
			diff_x = (attack_obj.my_unit.moved.x - attack_obj.my_unit.attacker.x) /12 ;
			diff_y = (attack_obj.my_unit.moved.y - attack_obj.my_unit.attacker.y) / 12;
			temp_x = attack_obj.my_unit.attacker.x;
			temp_y = attack_obj.my_unit.attacker.y;
			for (var i = 0; i < 12; i++) {
				temp_x += diff_x;
				temp_y += diff_y;
				result.attack_animation.push({x: temp_x,
													  y: temp_y,
													 picture:GG_DATA_PICTURE_MOVE,
													 picture_number: GG_PARTS_UNIQ_ANIMATION[i],
													 unit_dir: attack_obj.my_unit.moved.unit_dir
						});
			}
			
			for (var i = 0; i < 6; i++) {
				result.attack_animation.push({x: attack_obj.my_unit.moved.x,
											  y: attack_obj.my_unit.moved.y,
														 picture: GG_DATA_PICTURE_STATUS0,
														 picture_number: 0,
														 unit_dir:0});
			}
		} else {
			var attacker = {x: attack_obj.my_unit.attacker.x,
			                y: attack_obj.my_unit.attacker.y};
			
		}
        var count;
        for (var j = 0; j < attack_dir.length; j++) {
            if (attack_obj.my_unit.attacked.x - attacker.x == attack_dir[j].x &&
                attack_obj.my_unit.attacked.y - attacker.y == attack_dir[j].y) {
                count = j;
                break;
            }
        }

		
		for (var k = 0; k < before_wait - my_unit_del_before_wait; k++) {
			result.attack_animation.push({x: attacker.x, y: attacker.y, picture:GG_DATA_PICTURE_MOVE,
													 effect: effect,
												 picture_number:1, unit_dir:attack_dir[count].unit_dir});
		}
		
		result.attack_animation.push({x:attacker.x, y:attacker.y, picture:GG_DATA_PICTURE_ATTACK1, effect: effect,picture_number:0, unit_dir:attack_dir[count].unit_dir});
		result.attack_animation.push({x:attacker.x, y:attacker.y, picture:GG_DATA_PICTURE_ATTACK1, effect: effect,picture_number:1, unit_dir:attack_dir[count].unit_dir});
		result.attack_animation.push({x:attacker.x, y:attacker.y, picture:GG_DATA_PICTURE_ATTACK1, effect: effect,picture_number:0, unit_dir:attack_dir[count].unit_dir});
		result.attack_animation.push({x:attacker.x, y:attacker.y, picture:GG_DATA_PICTURE_ATTACK1, effect: effect,picture_number:1, unit_dir:attack_dir[count].unit_dir});
		result.attack_animation.push({x:attacker.x, y:attacker.y, picture:GG_DATA_PICTURE_ATTACK1, effect: effect,picture_number:0, unit_dir:attack_dir[count].unit_dir});
		result.attack_animation.push({x:attacker.x, y:attacker.y, picture:GG_DATA_PICTURE_ATTACK1, effect: effect,picture_number:1, unit_dir:attack_dir[count].unit_dir});
		result.attack_animation.push({x:attacker.x, y:attacker.y, picture:GG_DATA_PICTURE_ATTACK1, effect: effect,picture_number:0, unit_dir:attack_dir[count].unit_dir});
		result.attack_animation.push({x:attacker.x, y:attacker.y, picture:GG_DATA_PICTURE_ATTACK1, effect: effect,picture_number:1, unit_dir:attack_dir[count].unit_dir});
		result.attack_animation.push({x:attacker.x, y:attacker.y, picture:GG_DATA_PICTURE_ATTACK1, effect: effect,picture_number:0, unit_dir:attack_dir[count].unit_dir});
		result.attack_animation.push({x:attacker.x, y:attacker.y, picture:GG_DATA_PICTURE_ATTACK1, effect: effect,picture_number:1, unit_dir:attack_dir[count].unit_dir});
		result.attack_animation.push({x:attacker.x, y:attacker.y, picture:GG_DATA_PICTURE_ATTACK1, effect: effect,picture_number:0, unit_dir:attack_dir[count].unit_dir});
		result.attack_animation.push({x:attacker.x, y:attacker.y, picture:GG_DATA_PICTURE_ATTACK1, effect: effect,picture_number:2, unit_dir:attack_dir[count].unit_dir});
		attack_start = before_wait + 12;
		
		for (var j = 0; j < 3 * distance +  after_wait; j++) {
            result.attack_animation.push({x: attacker.x, y: attacker.y, picture:GG_DATA_PICTURE_ATTACK1,
													 effect: effect,
                                                 picture_number:2, unit_dir:attack_dir[count].unit_dir});

        }

		if (attack_obj.other_unit == undefined) {
			attack_obj.other_unit = [];
		} else {
			result.move_list = [];			
		}
		result.move_list = [];
        for (var j = 0; j < attack_obj.other_unit.length; j++) {
			if (attack_obj.other_unit[j].avoidance_now_flag != true &&
				attack_obj.other_unit[j].friend_pull_now_flag != true &&
				attack_obj.other_unit[j].counter_now_flag != true &&
				attack_obj.other_unit[j].attack_down_now_flag != true &&
				attack_obj.other_unit[j].cover_now_flag != true &&
				attack_obj.other_unit[j].enemy_push_now_flag != true &&
				attack_obj.other_unit[j].attack_enemy_push_now_flag != true) {
				continue;
			}
			result.move_list[j] = {};
			result.move_list[j].attack_animation = [];
			
			if (attack_obj.other_unit[j].avoidance_now_flag == true) {
				var diff_x = GG_DATA_MOVE_DIRECTION[attack_obj.other_unit[j].route[0]].x / 12;
				var diff_y = GG_DATA_MOVE_DIRECTION[attack_obj.other_unit[j].route[0]].y / 12;
	
				var unit_dir = 0;
				if (attack_obj.other_unit[j].route[0] == 2 ||
					attack_obj.other_unit[j].route[0] == 3 ) {
					unit_dir = 3;
				} else if (attack_obj.other_unit[j].route[0] == 4) {
					unit_dir = 1;
				} else if (attack_obj.other_unit[j].route[0] == 1) {
					unit_dir = 2;
				}
				for (var k = 0; k < before_wait + 9; k++) {
					result.move_list[j].attack_animation.push({x: attack_obj.other_unit[j].start_x ,
																	   y: attack_obj.other_unit[j].start_y ,
													 picture:GG_DATA_PICTURE_MOVE,
													 picture_number: 1,
													 unit_dir: unit_dir
						});
				}
				
				for (var k = 0; k < 3; k++) {
					result.move_list[j].attack_animation.push({x: attack_obj.other_unit[j].start_x + diff_x * (k + 1),
																	   y: attack_obj.other_unit[j].start_y + diff_y * (k + 1),
													 picture:GG_DATA_PICTURE_MOVE,
													 picture_number: GG_PARTS_UNIQ_ANIMATION[k],
													 unit_dir: unit_dir
						});
				}
				for (var k = 0; k < 3 * distance + animation_wait * 12; k++) {
					result.move_list[j].attack_animation.push({x: attack_obj.other_unit[j].start_x + diff_x * 3,
																	   y: attack_obj.other_unit[j].start_y + diff_y * 3,
													 picture:GG_DATA_PICTURE_MOVE,
													 picture_number: 1,
													 unit_dir: unit_dir
						});
				}
									
				for (var k = 2; k > -1; k--) {
					result.move_list[j].attack_animation.push({x: attack_obj.other_unit[j].start_x + diff_x * k,
																	   y: attack_obj.other_unit[j].start_y + diff_y * k,
													 picture:GG_DATA_PICTURE_MOVE,
													 picture_number: GG_PARTS_UNIQ_ANIMATION[k],
													 unit_dir: unit_dir
						});
				}
				for (var k = 0; k < 9; k++) {
					result.move_list[j].attack_animation.push({x: attack_obj.other_unit[j].start_x ,
																	   y: attack_obj.other_unit[j].start_y ,
													 picture:GG_DATA_PICTURE_MOVE,
													 picture_number: 1,
													 unit_dir: unit_dir
						});
				}
			} else if (attack_obj.other_unit[j].friend_pull_now_flag == true) {
				for (var k = 0; k < before_wait - 12; k++) {
					result.move_list[j].attack_animation.push({x: attack_obj.other_unit[j].start_x,
																       y: attack_obj.other_unit[j].start_y,
                                                     picture:GG_DATA_PICTURE_STATUS0,
                                                     picture_number: 0,
                                                     unit_dir: 0
						});
				}

                if (attack_obj.other_unit[j].route.length == 1) {
                    // 6 wait
                    for (var k = 0; k < 6; k++) {
                        result.move_list[j].attack_animation.push({x: attack_obj.other_unit[j].start_x,
                                                                           y: attack_obj.other_unit[j].start_y,
                                                         picture:GG_DATA_PICTURE_MOVE,
                                                         picture_number: 1,
                                                         unit_dir: 0
                            });
                    }
                    // 12 back
    				diff_x = GG_DATA_MOVE_DIRECTION[attack_obj.other_unit[j].route[0]].x / 12;
    				diff_y = GG_DATA_MOVE_DIRECTION[attack_obj.other_unit[j].route[0]].y / 12;
                    unit_dir = 0;
                    if (attack_obj.other_unit[j].route[0] == 2 ||
                        attack_obj.other_unit[j].route[0] == 3) {
                        unit_dir = 3;
                    } else if (attack_obj.other_unit[j].route[0] == 1) {
                        unit_dir = 2;
                    } else if (attack_obj.other_unit[j].route[0] == 4) {
                        unit_dir = 1;
                    }
                    for (var k = 0; k < 12; k++) {
                        result.move_list[j].attack_animation.push({x:attack_obj.other_unit[j].start_x + diff_x * k,
                                                                          y:attack_obj.other_unit[j].start_y + diff_y * k,
                                                                     picture: GG_DATA_PICTURE_MOVE,
                                                                     picture_number: GG_PARTS_UNIQ_ANIMATION[k],
                                                                     unit_dir: unit_dir});

                    }
                    // 6 wait
                    for (var k = 0; k < 6; k++) {
                        result.move_list[j].attack_animation.push({x: attack_obj.other_unit[j].x,
                                                                           y: attack_obj.other_unit[j].y,
                                                         picture:GG_DATA_PICTURE_MOVE,
                                                         picture_number: 1,
                                                         unit_dir: 0
                            });
                    }
                    
                } else if (attack_obj.other_unit[j].route.length == 2) {
                    // 6 f
    				diff_x = GG_DATA_MOVE_DIRECTION[attack_obj.other_unit[j].route[0]].x / 12;
    				diff_y = GG_DATA_MOVE_DIRECTION[attack_obj.other_unit[j].route[0]].y / 12;
                    unit_dir = 0;
                    if (attack_obj.other_unit[j].route[0] == 0 ||
                        attack_obj.other_unit[j].route[0] == 5) {
                        unit_dir = 3;
                    } else if (attack_obj.other_unit[j].route[0] == 1) {
                        unit_dir = 1;
                    } else if (attack_obj.other_unit[j].route[0] == 4) {
                        unit_dir = 2;
                    }
                    for (var k = 0; k < 6; k++) {
                        result.move_list[j].attack_animation.push({x:attack_obj.other_unit[j].start_x + diff_x * k,
                                                                          y:attack_obj.other_unit[j].start_y + diff_y * k,
                                                                     picture: GG_DATA_PICTURE_MOVE,
                                                                     picture_number: GG_PARTS_UNIQ_ANIMATION[k],
                                                                     unit_dir: unit_dir});
                    }
                    // 6 b
                    for (var k = 0; k < 6; k++) {
                        result.move_list[j].attack_animation.push({x:attack_obj.other_unit[j].start_x + diff_x * 6 - diff_x * k,
                                                                          y:attack_obj.other_unit[j].start_y + diff_y * 6 - diff_y * k,
                                                                     picture: GG_DATA_PICTURE_MOVE,
                                                                     picture_number: GG_PARTS_UNIQ_ANIMATION[k],
                                                                     unit_dir: unit_dir});
                    }
                    // 12 b
    				diff_x = GG_DATA_MOVE_DIRECTION[attack_obj.other_unit[j].route[1]].x / 12;
    				diff_y = GG_DATA_MOVE_DIRECTION[attack_obj.other_unit[j].route[1]].y / 12;
                    unit_dir = 0;
                    if (attack_obj.other_unit[j].route[1] == 2 ||
                        attack_obj.other_unit[j].route[1] == 3) {
                        unit_dir = 3;
                    } else if (attack_obj.other_unit[j].route[1] == 1) {
                        unit_dir = 2;
                    } else if (attack_obj.other_unit[j].route[1] == 4) {
                        unit_dir = 1;
                    }
                    for (var k = 0; k < 12; k++) {
                        result.move_list[j].attack_animation.push({x:attack_obj.other_unit[j].start_x + diff_x * k,
                                                                          y:attack_obj.other_unit[j].start_y + diff_y * k,
                                                                     picture: GG_DATA_PICTURE_MOVE,
                                                                     picture_number: GG_PARTS_UNIQ_ANIMATION[k],
                                                                     unit_dir: unit_dir});
                    }
                }
                // attack + after 
				for (var k = 0; k < before_wait - 12 + 3 * distance  + after_wait; k++) {
					result.move_list[j].attack_animation.push({x: attack_obj.other_unit[j].x,
																       y: attack_obj.other_unit[j].y,
                                                     picture:GG_DATA_PICTURE_MOVE,
                                                     picture_number: 1,
                                                     unit_dir: 0
						});
				}
            
                //
			} else if (attack_obj.other_unit[j].cover_now_flag == true) {
				diff_x = GG_DATA_MOVE_DIRECTION[attack_obj.other_unit[j].route[0]].x / 12;
				diff_y = GG_DATA_MOVE_DIRECTION[attack_obj.other_unit[j].route[0]].y / 12;
	
				unit_dir = 0;
				if (attack_obj.other_unit[j].route[0] == 0 ||
					attack_obj.other_unit[j].route[0] == 5 ) {
					unit_dir = 3;
				} else if (attack_obj.other_unit[j].route[0] == 1) {
					unit_dir = 1;
				} else if (attack_obj.other_unit[j].route[0] == 4) {
					unit_dir = 2;
				}
				for (var k = 0; k < before_wait - 24; k++) {
					result.move_list[j].attack_animation.push({x: attack_obj.other_unit[j].start_x,
																       y: attack_obj.other_unit[j].start_y,
                                                     picture:GG_DATA_PICTURE_STATUS0,
                                                     picture_number: 0,
                                                     unit_dir: 0
						});
				}

				for (var k = 0; k < 12; k++) {
					result.move_list[j].attack_animation.push({x: attack_obj.other_unit[j].start_x + diff_x * (k + 1),
																	   y: attack_obj.other_unit[j].start_y + diff_y * (k + 1),
													 picture:GG_DATA_PICTURE_MOVE,
													 picture_number: GG_PARTS_UNIQ_ANIMATION[k],
													 unit_dir: unit_dir
						});
				}
				for (var k = 0; k < 12; k++) {
					result.move_list[j].attack_animation.push({x: attack_obj.other_unit[j].start_x + diff_x * 12,
																	   y: attack_obj.other_unit[j].start_y + diff_y * 12,
													 picture: 's7',
													 picture_number: GG_PARTS_UNIQ_ANIMATION[k],
													 unit_dir: 0
						});
				}

				for (var k = 0; k < 3 * distance + distance_wait; k++) {
					result.move_list[j].attack_animation.push({x: attack_obj.other_unit[j].start_x + diff_x * 12,
																	   y: attack_obj.other_unit[j].start_y + diff_y * 12,
													 picture: 's4',
													 picture_number: 0,
													 unit_dir: 0
						});
				}

				for (var k = 11; k > -1; k--) {
					result.move_list[j].attack_animation.push({x: attack_obj.other_unit[j].start_x + diff_x * k,
																	   y: attack_obj.other_unit[j].start_y + diff_y * k,
													 picture:GG_DATA_PICTURE_MOVE,
													 picture_number: GG_PARTS_UNIQ_ANIMATION[k],
													 unit_dir: unit_dir
						});
				}
			} else if (attack_obj.other_unit[j].counter_now_flag == true) {
				
				diff_x = GG_DATA_MOVE_DIRECTION[attack_obj.other_unit[j].route[2]].x / 12;
				diff_y = GG_DATA_MOVE_DIRECTION[attack_obj.other_unit[j].route[2]].y / 12;

				unit_dir = 0;
				if (attack_obj.other_unit[j].route[2] == 0 ||
			        attack_obj.other_unit[j].route[2] == 5 ) {
					unit_dir = 3;
				} else if (attack_obj.other_unit[j].route[2] == 1) {
					unit_dir = 1;
				} else if (attack_obj.other_unit[j].route[2] == 4) {
					unit_dir = 2;
				}
				for (var k = 0; k < 12  + before_wait + 3 * distance; k++) {
					result.move_list[j].attack_animation.push({x: attack_obj.other_unit[j].start_x,
																	   y: attack_obj.other_unit[j].start_y,
													 picture: GG_DATA_PICTURE_STATUS0,
													 picture_number: 0,
													 unit_dir: 0
						});
				}

				//for (var k = 0; k < 3 * distance; k++) {
				//	result.move_list[j].attack_animation.push({x: attack_obj.other_unit[j].start_x,
				//													   y: attack_obj.other_unit[j].start_y,
				//									 picture: 's0',
				//									 picture_number: 0,
				//									 unit_dir: 0
				//		});
				//}
				
				result.move_list[j].attack_animation.push({x:attack_obj.other_unit[j].start_x + diff_x * 1,
																  y:attack_obj.other_unit[j].start_y + diff_y * 1,
															 picture:GG_DATA_PICTURE_ATTACK2,
															 picture_number: 0,
															 unit_dir:unit_dir});
				result.move_list[j].attack_animation.push({x:attack_obj.other_unit[j].start_x + diff_x * 1,
																  y:attack_obj.other_unit[j].start_y + diff_y * 1,
															 picture:GG_DATA_PICTURE_ATTACK2,
															 picture_number: 0,
															 unit_dir:unit_dir});
				result.move_list[j].attack_animation.push({x:attack_obj.other_unit[j].start_x + diff_x * 2,
																  y:attack_obj.other_unit[j].start_y + diff_y * 2,
															 picture:GG_DATA_PICTURE_ATTACK2,
															 picture_number: 1,
															 unit_dir:unit_dir});
				second_attack_start = 12 + before_wait + 3 * distance + 4;
				
				for (var k = 0; k < 7; k++) {
					result.move_list[j].attack_animation.push({x:attack_obj.other_unit[j].start_x + diff_x * 2,
																  y:attack_obj.other_unit[j].start_y + diff_y * 2,
															 picture:GG_DATA_PICTURE_ATTACK2,
															 picture_number: 2,
															 unit_dir:unit_dir});
				}
				for (var k = 1; k > -1; k--) {
					result.move_list[j].attack_animation.push({x: attack_obj.other_unit[j].start_x + diff_x * k,
																       y: attack_obj.other_unit[j].start_y + diff_y * k,
                                                     picture:GG_DATA_PICTURE_MOVE,
                                                     picture_number: GG_PARTS_UNIQ_ANIMATION[k],
                                                     unit_dir: unit_dir
						});
				}
			} else if (attack_obj.other_unit[j].attack_down_now_flag == true) {
				
				diff_x = GG_DATA_MOVE_DIRECTION[attack_obj.other_unit[j].route[2]].x / 12;
				diff_y = GG_DATA_MOVE_DIRECTION[attack_obj.other_unit[j].route[2]].y / 12;

				unit_dir = 0;
				if (attack_obj.other_unit[j].route[2] == 0 ||
			        attack_obj.other_unit[j].route[2] == 5 ) {
					unit_dir = 3;
				} else if (attack_obj.other_unit[j].route[2] == 1) {
					unit_dir = 1;
				} else if (attack_obj.other_unit[j].route[2] == 4) {
					unit_dir = 2;
				}
				for (var k = 0; k < 12 + before_wait + 3 * distance; k++) {
					result.move_list[j].attack_animation.push({x: attack_obj.other_unit[j].start_x,
																	   y: attack_obj.other_unit[j].start_y,
													 picture: 's0',
													 picture_number: 0,
													 unit_dir: 0
						});
				}

				//for (var k = 0; k < 3 * distance; k++) {
				//	result.move_list[j].attack_animation.push({x: attack_obj.other_unit[j].start_x,
				//													   y: attack_obj.other_unit[j].start_y,
				//									 picture: 's0',
				//									 picture_number: 0,
				//									 unit_dir: 0
				//		});
				//}
				
				result.move_list[j].attack_animation.push({x:attack_obj.other_unit[j].start_x + diff_x * 1,
																  y:attack_obj.other_unit[j].start_y + diff_y * 1,
															 picture:GG_DATA_PICTURE_ATTACK1,
															 picture_number: 0,
															 unit_dir:unit_dir});
				result.move_list[j].attack_animation.push({x:attack_obj.other_unit[j].start_x + diff_x * 1,
																  y:attack_obj.other_unit[j].start_y + diff_y * 1,
															 picture:GG_DATA_PICTURE_ATTACK1,
															 picture_number: 0,
															 unit_dir:unit_dir});
				result.move_list[j].attack_animation.push({x:attack_obj.other_unit[j].start_x + diff_x * 2,
																  y:attack_obj.other_unit[j].start_y + diff_y * 2,
															 picture:GG_DATA_PICTURE_ATTACK1,
															 picture_number: 1,
															 unit_dir:unit_dir});
				second_attack_start = 12 + before_wait + 3 * distance + 4;
				
				for (var k = 0; k < 7; k++) {
					result.move_list[j].attack_animation.push({x:attack_obj.other_unit[j].start_x + diff_x * 2,
																  y:attack_obj.other_unit[j].start_y + diff_y * 2,
															 picture:GG_DATA_PICTURE_ATTACK1,
															 picture_number: 2,
															 unit_dir:unit_dir});
				}
				for (var k = 1; k > -1; k--) {
					result.move_list[j].attack_animation.push({x: attack_obj.other_unit[j].start_x + diff_x * k,
																       y: attack_obj.other_unit[j].start_y + diff_y * k,
                                                     picture:GG_DATA_PICTURE_MOVE,
                                                     picture_number: GG_PARTS_UNIQ_ANIMATION[k],
                                                     unit_dir: unit_dir
						});
				}
			} else if (attack_obj.other_unit[j].enemy_push_now_flag == true) {
				diff = {x: GG_DATA_MOVE_DIRECTION[attack_obj.other_unit[j].route[0]].x / 12,
						y: GG_DATA_MOVE_DIRECTION[attack_obj.other_unit[j].route[0]].y / 12};
		
				result.move_list[j] = {};
				result.move_list[j].attack_animation = [];
				result.move_list[j].attack_animation.push({x: attack_obj.other_unit[j].x + diff.x * 1,
														   y: attack_obj.other_unit[j].y + diff.y * 1,
																 picture:GG_DATA_PICTURE_ATTACK1,
																 picture_number: 0,
																 unit_dir: attack_obj.other_unit[j].unit_dir});
				result.move_list[j].attack_animation.push({x: attack_obj.other_unit[j].x + diff.x * 2,
												 y: attack_obj.other_unit[j].y + diff.y * 2,
																 picture:GG_DATA_PICTURE_ATTACK1,
																 picture_number: 1,
																 unit_dir: attack_obj.other_unit[0].unit_dir});
		
				for (var i = 0; i < 21; i++) {
					result.move_list[j].attack_animation.push({x: attack_obj.other_unit[j].x + diff.x * 2,
												 y: attack_obj.other_unit[j].y + diff.y * 2,
																 picture:GG_DATA_PICTURE_ATTACK1,
																 picture_number: 2,
																 unit_dir: attack_obj.other_unit[j].unit_dir});
				}
																 
		
				result.move_list[j].attack_animation.push({x: attack_obj.other_unit[j].x + diff.x * 1,
												 y: attack_obj.other_unit[j].y + diff.y * 1,
																 picture:GG_DATA_PICTURE_MOVE,
																 picture_number: 1,
																 unit_dir: attack_obj.other_unit[j].unit_dir});
					
				for (var i = 0; i < result.route_count * 12 - 24; i++) {
					result.move_list[j].attack_animation.push({x: attack_obj.other_unit[j].x,
															   y: attack_obj.other_unit[j].y,
																 picture:GG_DATA_PICTURE_STATUS0,
																 picture_number: 0,
																 unit_dir: 0});
					
				}
			}
        }
	
	//
	} else if (attack_type == GG_DATA_ATTACK_TYPE_THUNDER) {
		
		result.route_count = 2;
        result.attack_animation = [];
		result.throw_start = 1 * 12;
		result.throw_end   = 2 * 12;
		
		var before_wait = 0, after_wait = 0, animation_wait = 0, thunder_del = 0;
		var my_unit_del_before_wait = 0;
		if (enemy_push_now_flag == true) {
			result.route_count += 2;
			before_wait += 24;
			my_unit_del_before_wait += 24;
			result.throw_start += 2 * 12;                
			result.throw_end   += 2 * 12;                
		}
        
        if (cover_now_flag == true ||
            friend_pull_now_flag == true) {
			before_wait += 12;
			result.throw_start += 12;                
			result.throw_end   += 12;                
			result.route_count += 1;
        }
        
		if (cover_now_flag == true ||
            avoidance_now_flag == true ||
            counter_now_flag == true
			|| attack_down_now_flag == true
			) {
			after_wait = 12;
			result.route_count += 1;
		}

		var effect = GG_DATA_ANIMATION_EFFECT_NONE;
		if (attack_obj.my_unit.assault_flag == true) {
			effect = GG_DATA_ANIMATION_EFFECT_ASSAULT;
		}

		////// enemy_push
		if (enemy_push_now_flag == true) {
			var attacker = {x: attack_obj.my_unit.moved.x,
			                y: attack_obj.my_unit.moved.y};
			for (var i = 0; i < 6; i++) {
				result.attack_animation.push({x: attack_obj.my_unit.attacker.x, y: attack_obj.my_unit.attacker.y,
														 picture:GG_DATA_PICTURE_STATUS0,
														 picture_number: 0,
														 unit_dir:0});
			}
			diff_x = (attack_obj.my_unit.moved.x - attack_obj.my_unit.attacker.x) /12 ;
			diff_y = (attack_obj.my_unit.moved.y - attack_obj.my_unit.attacker.y) / 12;
			temp_x = attack_obj.my_unit.attacker.x;
			temp_y = attack_obj.my_unit.attacker.y;
			for (var i = 0; i < 12; i++) {
				temp_x += diff_x;
				temp_y += diff_y;
				result.attack_animation.push({x: temp_x,
													  y: temp_y,
													 picture:GG_DATA_PICTURE_MOVE,
													 picture_number: GG_PARTS_UNIQ_ANIMATION[i],
													 unit_dir: attack_obj.my_unit.moved.unit_dir
						});
			}
			
			for (var i = 0; i < 6; i++) {
				result.attack_animation.push({x: attack_obj.my_unit.moved.x,
											  y: attack_obj.my_unit.moved.y,
														 picture: GG_DATA_PICTURE_STATUS0,
														 picture_number: 0,
														 unit_dir:0});
			}
		} else {
			var attacker = {x: attack_obj.my_unit.attacker.x,
			                y: attack_obj.my_unit.attacker.y};
			
		}

        var count;
        for (var j = 0; j < attack_dir.length; j++) {
            if (attack_obj.my_unit.attacked.x - attacker.x == attack_dir[j].x &&
                attack_obj.my_unit.attacked.y - attacker.y == attack_dir[j].y) {
                count = j;
                break;
            }
        }

		for (var k = 0; k < before_wait - my_unit_del_before_wait; k++) {
			result.attack_animation.push({x:attacker.x, y:attacker.y, picture:GG_DATA_PICTURE_MOVE,
													 effect: effect,
												 picture_number:1, unit_dir:attack_dir[count].unit_dir});
		}
		
		result.attack_animation.push({x:attacker.x, y:attacker.y, picture:GG_DATA_PICTURE_ATTACK1, effect: effect,picture_number:0, unit_dir:attack_dir[count].unit_dir});
		result.attack_animation.push({x:attacker.x, y:attacker.y, picture:GG_DATA_PICTURE_ATTACK1, effect: effect,picture_number:1, unit_dir:attack_dir[count].unit_dir});
		result.attack_animation.push({x:attacker.x, y:attacker.y, picture:GG_DATA_PICTURE_ATTACK1, effect: effect,picture_number:0, unit_dir:attack_dir[count].unit_dir});
		result.attack_animation.push({x:attacker.x, y:attacker.y, picture:GG_DATA_PICTURE_ATTACK1, effect: effect,picture_number:1, unit_dir:attack_dir[count].unit_dir});
		result.attack_animation.push({x:attacker.x, y:attacker.y, picture:GG_DATA_PICTURE_ATTACK1, effect: effect,picture_number:0, unit_dir:attack_dir[count].unit_dir});
		result.attack_animation.push({x:attacker.x, y:attacker.y, picture:GG_DATA_PICTURE_ATTACK1, effect: effect,picture_number:1, unit_dir:attack_dir[count].unit_dir});
		result.attack_animation.push({x:attacker.x, y:attacker.y, picture:GG_DATA_PICTURE_ATTACK1, effect: effect,picture_number:0, unit_dir:attack_dir[count].unit_dir});
		result.attack_animation.push({x:attacker.x, y:attacker.y, picture:GG_DATA_PICTURE_ATTACK1, effect: effect,picture_number:1, unit_dir:attack_dir[count].unit_dir});
		result.attack_animation.push({x:attacker.x, y:attacker.y, picture:GG_DATA_PICTURE_ATTACK1, effect: effect,picture_number:0, unit_dir:attack_dir[count].unit_dir});
		result.attack_animation.push({x:attacker.x, y:attacker.y, picture:GG_DATA_PICTURE_ATTACK1, effect: effect,picture_number:1, unit_dir:attack_dir[count].unit_dir});
		result.attack_animation.push({x:attacker.x, y:attacker.y, picture:GG_DATA_PICTURE_ATTACK1, effect: effect,picture_number:0, unit_dir:attack_dir[count].unit_dir});
		result.attack_animation.push({x:attacker.x, y:attacker.y, picture:GG_DATA_PICTURE_ATTACK1, effect: effect,picture_number:2, unit_dir:attack_dir[count].unit_dir});
		attack_start = before_wait + 12;
		
		for (var j = 0; j < 12 + after_wait; j++) {
            result.attack_animation.push({x: attacker.x, y: attacker.y, picture:GG_DATA_PICTURE_ATTACK1,
													 effect: effect,
                                                 picture_number:2, unit_dir:attack_dir[count].unit_dir});
        }

		if (attack_obj.other_unit == undefined) {
			attack_obj.other_unit = [];
		} else {
			result.move_list = [];			
		}
		result.move_list = [];
        for (var j = 0; j < attack_obj.other_unit.length; j++) {
			if (attack_obj.other_unit[j].avoidance_now_flag != true &&
				attack_obj.other_unit[j].friend_pull_now_flag != true &&
				attack_obj.other_unit[j].counter_now_flag != true &&
				attack_obj.other_unit[j].attack_down_now_flag != true &&
				attack_obj.other_unit[j].cover_now_flag != true &&
				attack_obj.other_unit[j].enemy_push_now_flag != true) {
				continue;
			}
			result.move_list[j] = {};
			result.move_list[j].attack_animation = [];
			
			if (attack_obj.other_unit[j].avoidance_now_flag == true) {
				var diff_x = GG_DATA_MOVE_DIRECTION[attack_obj.other_unit[j].route[0]].x / 12;
				var diff_y = GG_DATA_MOVE_DIRECTION[attack_obj.other_unit[j].route[0]].y / 12;
	
				var unit_dir = 0;
				if (attack_obj.other_unit[j].route[0] == 2 ||
					attack_obj.other_unit[j].route[0] == 3 ) {
					unit_dir = 3;
				} else if (attack_obj.other_unit[j].route[0] == 4) {
					unit_dir = 1;
				} else if (attack_obj.other_unit[j].route[0] == 1) {
					unit_dir = 2;
				}
				for (var k = 0; k < before_wait + 9; k++) {
					result.move_list[j].attack_animation.push({x: attack_obj.other_unit[j].start_x ,
																	   y: attack_obj.other_unit[j].start_y ,
													 picture:GG_DATA_PICTURE_MOVE,
													 picture_number: 1,
													 unit_dir: unit_dir
						});
				}
				
				for (var k = 0; k < 3; k++) {
					result.move_list[j].attack_animation.push({x: attack_obj.other_unit[j].start_x + diff_x * (k + 1),
																	   y: attack_obj.other_unit[j].start_y + diff_y * (k + 1),
													 picture:GG_DATA_PICTURE_MOVE,
													 picture_number: GG_PARTS_UNIQ_ANIMATION[k],
													 unit_dir: unit_dir
						});
				}
				for (var k = 0; k < 12; k++) {
					result.move_list[j].attack_animation.push({x: attack_obj.other_unit[j].start_x + diff_x * 3,
																	   y: attack_obj.other_unit[j].start_y + diff_y * 3,
													 picture:GG_DATA_PICTURE_MOVE,
													 picture_number: 1,
													 unit_dir: unit_dir
						});
				}
									
				for (var k = 2; k > -1; k--) {
					result.move_list[j].attack_animation.push({x: attack_obj.other_unit[j].start_x + diff_x * k,
																	   y: attack_obj.other_unit[j].start_y + diff_y * k,
													 picture:GG_DATA_PICTURE_MOVE,
													 picture_number: GG_PARTS_UNIQ_ANIMATION[k],
													 unit_dir: unit_dir
						});
				}
				for (var k = 0; k < 9; k++) {
					result.move_list[j].attack_animation.push({x: attack_obj.other_unit[j].start_x ,
																	   y: attack_obj.other_unit[j].start_y ,
													 picture:GG_DATA_PICTURE_MOVE,
													 picture_number: 1,
													 unit_dir: unit_dir
						});
				}
			} else if (attack_obj.other_unit[j].friend_pull_now_flag == true) {
				for (var k = 0; k < before_wait - 12; k++) {
					result.move_list[j].attack_animation.push({x: attack_obj.other_unit[j].start_x,
																       y: attack_obj.other_unit[j].start_y,
                                                     picture:GG_DATA_PICTURE_STATUS0,
                                                     picture_number: 0,
                                                     unit_dir: 0
						});
				}

                if (attack_obj.other_unit[j].route.length == 1) {
                    // 6 wait
                    for (var k = 0; k < 6; k++) {
                        result.move_list[j].attack_animation.push({x: attack_obj.other_unit[j].start_x,
                                                                           y: attack_obj.other_unit[j].start_y,
                                                         picture:GG_DATA_PICTURE_MOVE,
                                                         picture_number: 1,
                                                         unit_dir: 0
                            });
                    }
                    // 12 back
    				diff_x = GG_DATA_MOVE_DIRECTION[attack_obj.other_unit[j].route[0]].x / 12;
    				diff_y = GG_DATA_MOVE_DIRECTION[attack_obj.other_unit[j].route[0]].y / 12;
                    unit_dir = 0;
                    if (attack_obj.other_unit[j].route[0] == 2 ||
                        attack_obj.other_unit[j].route[0] == 3) {
                        unit_dir = 3;
                    } else if (attack_obj.other_unit[j].route[0] == 1) {
                        unit_dir = 2;
                    } else if (attack_obj.other_unit[j].route[0] == 4) {
                        unit_dir = 1;
                    }
                    for (var k = 0; k < 12; k++) {
                        result.move_list[j].attack_animation.push({x:attack_obj.other_unit[j].start_x + diff_x * k,
                                                                          y:attack_obj.other_unit[j].start_y + diff_y * k,
                                                                     picture: GG_DATA_PICTURE_MOVE,
                                                                     picture_number: GG_PARTS_UNIQ_ANIMATION[k],
                                                                     unit_dir: unit_dir});

                    }
                    // 6 wait
                    for (var k = 0; k < 6; k++) {
                        result.move_list[j].attack_animation.push({x: attack_obj.other_unit[j].x,
                                                                           y: attack_obj.other_unit[j].y,
                                                         picture:GG_DATA_PICTURE_MOVE,
                                                         picture_number: 1,
                                                         unit_dir: 0
                            });
                    }
                    
                } else if (attack_obj.other_unit[j].route.length == 2) {
                    // 6 f
    				diff_x = GG_DATA_MOVE_DIRECTION[attack_obj.other_unit[j].route[0]].x / 12;
    				diff_y = GG_DATA_MOVE_DIRECTION[attack_obj.other_unit[j].route[0]].y / 12;
                    unit_dir = 0;
                    if (attack_obj.other_unit[j].route[0] == 0 ||
                        attack_obj.other_unit[j].route[0] == 5) {
                        unit_dir = 3;
                    } else if (attack_obj.other_unit[j].route[0] == 1) {
                        unit_dir = 1;
                    } else if (attack_obj.other_unit[j].route[0] == 4) {
                        unit_dir = 2;
                    }
                    for (var k = 0; k < 6; k++) {
                        result.move_list[j].attack_animation.push({x:attack_obj.other_unit[j].start_x + diff_x * k,
                                                                          y:attack_obj.other_unit[j].start_y + diff_y * k,
                                                                     picture: GG_DATA_PICTURE_MOVE,
                                                                     picture_number: GG_PARTS_UNIQ_ANIMATION[k],
                                                                     unit_dir: unit_dir});
                    }
                    // 6 b
                    for (var k = 0; k < 6; k++) {
                        result.move_list[j].attack_animation.push({x:attack_obj.other_unit[j].start_x + diff_x * 6 - diff_x * k,
                                                                          y:attack_obj.other_unit[j].start_y + diff_y * 6 - diff_y * k,
                                                                     picture: GG_DATA_PICTURE_MOVE,
                                                                     picture_number: GG_PARTS_UNIQ_ANIMATION[k],
                                                                     unit_dir: unit_dir});
                    }
                    // 12 b
    				diff_x = GG_DATA_MOVE_DIRECTION[attack_obj.other_unit[j].route[1]].x / 12;
    				diff_y = GG_DATA_MOVE_DIRECTION[attack_obj.other_unit[j].route[1]].y / 12;
                    unit_dir = 0;
                    if (attack_obj.other_unit[j].route[1] == 2 ||
                        attack_obj.other_unit[j].route[1] == 3) {
                        unit_dir = 3;
                    } else if (attack_obj.other_unit[j].route[1] == 1) {
                        unit_dir = 2;
                    } else if (attack_obj.other_unit[j].route[1] == 4) {
                        unit_dir = 1;
                    }
                    for (var k = 0; k < 12; k++) {
                        result.move_list[j].attack_animation.push({x:attack_obj.other_unit[j].start_x + diff_x * k,
                                                                          y:attack_obj.other_unit[j].start_y + diff_y * k,
                                                                     picture: GG_DATA_PICTURE_MOVE,
                                                                     picture_number: GG_PARTS_UNIQ_ANIMATION[k],
                                                                     unit_dir: unit_dir});
                    }
                }
                // attack + after 
				for (var k = 0; k < 12 + after_wait; k++) {
					result.move_list[j].attack_animation.push({x: attack_obj.other_unit[j].x,
																       y: attack_obj.other_unit[j].y,
                                                     picture:GG_DATA_PICTURE_MOVE,
                                                     picture_number: 1,
                                                     unit_dir: 0
						});
				}
            
                //
			} else if (attack_obj.other_unit[j].cover_now_flag == true) {
				diff_x = GG_DATA_MOVE_DIRECTION[attack_obj.other_unit[j].route[0]].x / 12;
				diff_y = GG_DATA_MOVE_DIRECTION[attack_obj.other_unit[j].route[0]].y / 12;
	
				unit_dir = 0;
				if (attack_obj.other_unit[j].route[0] == 0 ||
					attack_obj.other_unit[j].route[0] == 5 ) {
					unit_dir = 3;
				} else if (attack_obj.other_unit[j].route[0] == 1) {
					unit_dir = 1;
				} else if (attack_obj.other_unit[j].route[0] == 4) {
					unit_dir = 2;
				}
				for (var k = 0; k < before_wait - 12; k++) {
					result.move_list[j].attack_animation.push({x: attack_obj.other_unit[j].start_x ,
																	   y: attack_obj.other_unit[j].start_y ,
													 picture:GG_DATA_PICTURE_STATUS0,
													 picture_number: 0,
													 unit_dir: 0
						});
				}
				for (var k = 0; k < 12; k++) {
					result.move_list[j].attack_animation.push({x: attack_obj.other_unit[j].start_x + diff_x * (k + 1),
																	   y: attack_obj.other_unit[j].start_y + diff_y * (k + 1),
													 picture:GG_DATA_PICTURE_MOVE,
													 picture_number: GG_PARTS_UNIQ_ANIMATION[k],
													 unit_dir: unit_dir
						});
				}
				for (var k = 0; k < 12; k++) {
					result.move_list[j].attack_animation.push({x: attack_obj.other_unit[j].start_x + diff_x * 12,
																	   y: attack_obj.other_unit[j].start_y + diff_y * 12,
													 picture: 's7',
													 picture_number: GG_PARTS_UNIQ_ANIMATION[k],
													 unit_dir: 0
						});
				}
				for (var k = 0; k < 12 ; k++) {
					result.move_list[j].attack_animation.push({x: attack_obj.other_unit[j].start_x + diff_x * 12,
																	   y: attack_obj.other_unit[j].start_y + diff_y * 12,
													 picture: 's4',
													 picture_number: 0,
													 unit_dir: 0
						});
				}

				for (var k = 11; k > -1; k--) {
					result.move_list[j].attack_animation.push({x: attack_obj.other_unit[j].start_x + diff_x * k,
																	   y: attack_obj.other_unit[j].start_y + diff_y * k,
													 picture:GG_DATA_PICTURE_MOVE,
													 picture_number: GG_PARTS_UNIQ_ANIMATION[k],
													 unit_dir: unit_dir
						});
				}
			} else if (attack_obj.other_unit[j].counter_now_flag == true) {
				
				diff_x = GG_DATA_MOVE_DIRECTION[attack_obj.other_unit[j].route[2]].x / 12;
				diff_y = GG_DATA_MOVE_DIRECTION[attack_obj.other_unit[j].route[2]].y / 12;

				unit_dir = 0;
				if (attack_obj.other_unit[j].route[2] == 0 ||
			        attack_obj.other_unit[j].route[2] == 5 ) {
					unit_dir = 3;
				} else if (attack_obj.other_unit[j].route[2] == 1) {
					unit_dir = 1;
				} else if (attack_obj.other_unit[j].route[2] == 4) {
					unit_dir = 2;
				}
				for (var k = 0; k < 12 + before_wait; k++) {
					result.move_list[j].attack_animation.push({x: attack_obj.other_unit[j].start_x,
																	   y: attack_obj.other_unit[j].start_y,
													 picture:GG_DATA_PICTURE_MOVE,
													 picture_number: 1,
													 unit_dir: 0
						});
				}

				for (var k = 0; k < 12; k++) {
					result.move_list[j].attack_animation.push({x: attack_obj.other_unit[j].start_x,
																	   y: attack_obj.other_unit[j].start_y,
													 picture: 's0',
													 picture_number: 0,
													 unit_dir: 0
						});
				}
				
				result.move_list[j].attack_animation.push({x:attack_obj.other_unit[j].start_x + diff_x * 1,
																  y:attack_obj.other_unit[j].start_y + diff_y * 1,
															 picture:GG_DATA_PICTURE_ATTACK2,
															 picture_number: 0,
															 unit_dir:unit_dir});
				result.move_list[j].attack_animation.push({x:attack_obj.other_unit[j].start_x + diff_x * 1,
																  y:attack_obj.other_unit[j].start_y + diff_y * 1,
															 picture:GG_DATA_PICTURE_ATTACK2,
															 picture_number: 0,
															 unit_dir:unit_dir});
				result.move_list[j].attack_animation.push({x:attack_obj.other_unit[j].start_x + diff_x * 2,
																  y:attack_obj.other_unit[j].start_y + diff_y * 2,
															 picture:GG_DATA_PICTURE_ATTACK2,
															 picture_number: 1,
															 unit_dir:unit_dir});
				second_attack_start = 12  + before_wait + 12 + 4;
				
				for (var k = 0; k < 7; k++) {
					result.move_list[j].attack_animation.push({x:attack_obj.other_unit[j].start_x + diff_x * 2,
																  y:attack_obj.other_unit[j].start_y + diff_y * 2,
															 picture:GG_DATA_PICTURE_ATTACK2,
															 picture_number: 2,
															 unit_dir:unit_dir});
				}
				for (var k = 1; k > -1; k--) {
					result.move_list[j].attack_animation.push({x: attack_obj.other_unit[j].start_x + diff_x * k,
																       y: attack_obj.other_unit[j].start_y + diff_y * k,
                                                     picture:GG_DATA_PICTURE_MOVE,
                                                     picture_number: GG_PARTS_UNIQ_ANIMATION[k],
                                                     unit_dir: unit_dir
						});
				}
			} else if (attack_obj.other_unit[j].attack_down_now_flag == true) {
				
				diff_x = GG_DATA_MOVE_DIRECTION[attack_obj.other_unit[j].route[2]].x / 12;
				diff_y = GG_DATA_MOVE_DIRECTION[attack_obj.other_unit[j].route[2]].y / 12;

				unit_dir = 0;
				if (attack_obj.other_unit[j].route[2] == 0 ||
			        attack_obj.other_unit[j].route[2] == 5 ) {
					unit_dir = 3;
				} else if (attack_obj.other_unit[j].route[2] == 1) {
					unit_dir = 1;
				} else if (attack_obj.other_unit[j].route[2] == 4) {
					unit_dir = 2;
				}
				for (var k = 0; k < 12 + before_wait; k++) {
					result.move_list[j].attack_animation.push({x: attack_obj.other_unit[j].start_x,
																	   y: attack_obj.other_unit[j].start_y,
													 picture:GG_DATA_PICTURE_MOVE,
													 picture_number: 1,
													 unit_dir: 0
						});
				}

				for (var k = 0; k < 12; k++) {
					result.move_list[j].attack_animation.push({x: attack_obj.other_unit[j].start_x,
																	   y: attack_obj.other_unit[j].start_y,
													 picture: 's0',
													 picture_number: 0,
													 unit_dir: 0
						});
				}
				
				result.move_list[j].attack_animation.push({x:attack_obj.other_unit[j].start_x + diff_x * 1,
																  y:attack_obj.other_unit[j].start_y + diff_y * 1,
															 picture:GG_DATA_PICTURE_ATTACK1,
															 picture_number: 0,
															 unit_dir:unit_dir});
				result.move_list[j].attack_animation.push({x:attack_obj.other_unit[j].start_x + diff_x * 1,
																  y:attack_obj.other_unit[j].start_y + diff_y * 1,
															 picture:GG_DATA_PICTURE_ATTACK1,
															 picture_number: 0,
															 unit_dir:unit_dir});
				result.move_list[j].attack_animation.push({x:attack_obj.other_unit[j].start_x + diff_x * 2,
																  y:attack_obj.other_unit[j].start_y + diff_y * 2,
															 picture:GG_DATA_PICTURE_ATTACK1,
															 picture_number: 1,
															 unit_dir:unit_dir});
				second_attack_start = 12 + before_wait + 12 + 4;
				
				for (var k = 0; k < 7; k++) {
					result.move_list[j].attack_animation.push({x:attack_obj.other_unit[j].start_x + diff_x * 2,
																  y:attack_obj.other_unit[j].start_y + diff_y * 2,
															 picture:GG_DATA_PICTURE_ATTACK1,
															 picture_number: 2,
															 unit_dir:unit_dir});
				}
				for (var k = 1; k > -1; k--) {
					result.move_list[j].attack_animation.push({x: attack_obj.other_unit[j].start_x + diff_x * k,
																       y: attack_obj.other_unit[j].start_y + diff_y * k,
                                                     picture:GG_DATA_PICTURE_MOVE,
                                                     picture_number: GG_PARTS_UNIQ_ANIMATION[k],
                                                     unit_dir: unit_dir
						});
				}
			} else if (attack_obj.other_unit[j].enemy_push_now_flag == true) {
				diff = {x: GG_DATA_MOVE_DIRECTION[attack_obj.other_unit[j].route[0]].x / 12,
						y: GG_DATA_MOVE_DIRECTION[attack_obj.other_unit[j].route[0]].y / 12};
		
				result.move_list[j] = {};
				result.move_list[j].attack_animation = [];
				result.move_list[j].attack_animation.push({x: attack_obj.other_unit[j].x + diff.x * 1,
														   y: attack_obj.other_unit[j].y + diff.y * 1,
																 picture:GG_DATA_PICTURE_ATTACK1,
																 picture_number: 0,
																 unit_dir: attack_obj.other_unit[j].unit_dir});
				result.move_list[j].attack_animation.push({x: attack_obj.other_unit[j].x + diff.x * 2,
												 y: attack_obj.other_unit[j].y + diff.y * 2,
																 picture:GG_DATA_PICTURE_ATTACK1,
																 picture_number: 1,
																 unit_dir: attack_obj.other_unit[0].unit_dir});
		
				for (var i = 0; i < 21; i++) {
					result.move_list[j].attack_animation.push({x: attack_obj.other_unit[j].x + diff.x * 2,
												 y: attack_obj.other_unit[j].y + diff.y * 2,
																 picture:GG_DATA_PICTURE_ATTACK1,
																 picture_number: 2,
																 unit_dir: attack_obj.other_unit[j].unit_dir});
				}
																 
		
				result.move_list[j].attack_animation.push({x: attack_obj.other_unit[j].x + diff.x * 1,
												 y: attack_obj.other_unit[j].y + diff.y * 1,
																 picture:GG_DATA_PICTURE_MOVE,
																 picture_number: 1,
																 unit_dir: attack_obj.other_unit[j].unit_dir});
					
				for (var i = 0; i < result.route_count * 12 - 24; i++) {
					result.move_list[j].attack_animation.push({x: attack_obj.other_unit[j].x,
															   y: attack_obj.other_unit[j].y,
																 picture:GG_DATA_PICTURE_STATUS0,
																 picture_number: 0,
																 unit_dir: 0});
					
				}
			}
        }
	}
	/////////////////////
	var animation_obj = {};
	animation_obj.list = [];
	
	animation_obj.list.push({
                             army_number: attack_obj.my_unit.army_number,
                             unit_number: attack_obj.my_unit.unit_number,
                             attacker_x: attack_obj.my_unit.attacked.x,
                             attacker_y: attack_obj.my_unit.attacked.y,
                             attack_animation: result.attack_animation,
                             kind: GG_DATA_ANIMATION_ATTACK_UNIT});
		
	var kind, temp_x, tmep_y;
	if (attack_type == GG_DATA_ATTACK_TYPE_BOW ||
            //attack_type == GG_DATA_ANIMATION_TOMAHAWK ||
            attack_type == GG_DATA_ATTACK_TYPE_THUNDER ||
            attack_type == GG_DATA_ATTACK_TYPE_WITCH ||
            attack_type == GG_DATA_ATTACK_TYPE_LONGBOW ||
            attack_type == GG_DATA_ATTACK_TYPE_HARP ||
            attack_type == GG_DATA_ATTACK_TYPE_TAKT ||
            attack_type == GG_DATA_ATTACK_TYPE_LASER
			) {
		if (attack_obj.my_unit.enemy_push_now_flag == true) {
			temp_x = attack_obj.my_unit.moved.x;
			temp_y = attack_obj.my_unit.moved.y;
		} else {
			temp_x = attack_obj.my_unit.attacker.x;
			temp_y = attack_obj.my_unit.attacker.y;
			
		}

		var end_position = {x: attack_obj.my_unit.attacked.x,
			                y: attack_obj.my_unit.attacked.y}
		if (attack_type == GG_DATA_ATTACK_TYPE_BOW
			|| attack_type == GG_DATA_ATTACK_TYPE_LONGBOW
			|| attack_type == GG_DATA_ATTACK_TYPE_HARP
			) {
			kind = GG_DATA_ANIMATION_ARROW;			
			//end_position = {x: attack_obj.my_unit.attacked.x,
			//               y: attack_obj.my_unit.attacked.y}
		//} else if (attack_type == GG_DATA_ATTACK_TYPE_LONGBOW) {
		//	kind = GG_DATA_ANIMATION_ARROW;
		//	end_position = {x: attack_obj.my_unit.attacked.x,
		//	                y: attack_obj.my_unit.attacked.y}
		//} else if (attack_type == GG_DATA_ATTACK_TYPE_HARP) {
		//	kind = GG_DATA_ANIMATION_ARROW;
		//	end_position = {x: attack_obj.my_unit.attacked.x,
		//	                y: attack_obj.my_unit.attacked.y}
		//} else if (attack_type == GG_DATA_ATTACK_TYPE_TOMAHAWK) {
		//	kind = GG_DATA_ANIMATION_TOMAHAWK;
		//	end_position = {x: attack_obj.my_unit.attacked.x,
		//	                y: attack_obj.my_unit.attacked.y}
		} else if (attack_type == GG_DATA_ATTACK_TYPE_THUNDER) {
			kind = GG_DATA_ANIMATION_THUNDER;
			//end_position = {x: attack_obj.my_unit.attacked.x,
			//                y: attack_obj.my_unit.attacked.y}
		} else if (attack_type == GG_DATA_ATTACK_TYPE_WITCH ||
				   attack_type == GG_DATA_ATTACK_TYPE_TAKT) {
			kind = GG_DATA_ANIMATION_WITCH;
			//end_position = {x: attack_obj.my_unit.attacked.x,
			//                y: attack_obj.my_unit.attacked.y}
		//} else if (attack_type == GG_DATA_ATTACK_TYPE_TRUMPET) {
		//	kind = GG_DATA_ANIMATION_DARTS;
		} else if (attack_type == GG_DATA_ATTACK_TYPE_LASER) {
			kind = GG_DATA_ANIMATION_LASER;
			end_position = {x: attack_obj.my_unit.end.x,
			                y: attack_obj.my_unit.end.y}
		}
		
        animation_obj.list.push({start_x: temp_x,
                                 start_y: temp_y,
							     //end_x: attack_obj.my_unit.attacked.x,
                                 //end_y: attack_obj.my_unit.attacked.y,
							     end_x: end_position.x,
                                 end_y: end_position.y,
                                 throw_start: result.throw_start,
                                 throw_end: result.throw_end,
                                 kind: kind});
    } else if (attack_type == GG_DATA_ATTACK_TYPE_WIND) {
		kind = GG_DATA_ANIMATION_WIND;
		if (attack_obj.my_unit.enemy_push_now_flag == true) {
			temp_x = attack_obj.my_unit.moved.x;
			temp_y = attack_obj.my_unit.moved.y;
		} else {
			temp_x = attack_obj.my_unit.attacker.x;
			temp_y = attack_obj.my_unit.attacker.y;
			
		}
        animation_obj.list.push({start_x: temp_x,
                             start_y: temp_y,
							 end_x: attack_obj.my_unit.attacked.x,
                             end_y: attack_obj.my_unit.attacked.y,
                             throw_start: result.throw_start,
                             throw_end: result.throw_end,
                             kind: kind});
		var temp_wind_id;
		for (var j = 0; j < GG_PARTS_ATTACK_WIND.length; j++) {
			if (attack_obj.my_unit.attacked.x - temp_x == GG_PARTS_ATTACK_WIND[j].x &&
				attack_obj.my_unit.attacked.y - temp_y == GG_PARTS_ATTACK_WIND[j].y) {
				temp_wind_id = j;
				break;	
			}
		}
        for (var i = 0; i < 4; i++) {
            animation_obj.list.push({
                         start_x: temp_x,
                         start_y: temp_y,
                         end_x: attack_obj.my_unit.attacker.x + GG_PARTS_ATTACK_WIND[temp_wind_id].list[i].x,
                         end_y: attack_obj.my_unit.attacker.y + GG_PARTS_ATTACK_WIND[temp_wind_id].list[i].y,
                         r_end_x: attack_obj.my_unit.attacked.x,
                         r_end_y: attack_obj.my_unit.attacked.y,						 
                         throw_start: result.throw_start,
                         throw_end: result.throw_end,
                         kind: kind});
        }

    }

    if (result.move_list != null) {
        for (var i = 0; i < result.move_list.length; i++) {
            animation_obj.list.push({route: attack_obj.other_unit[i].route,
								   army_number: attack_obj.other_unit[i].army_number,
                                   unit_number: attack_obj.other_unit[i].unit_number,
                                   start_x: attack_obj.other_unit[i].x,
                                   start_y: attack_obj.other_unit[i].y,
                                   attack_animation: result.move_list[i].attack_animation,
                                   kind: GG_DATA_ANIMATION_ATTACK_UNIT});
        }
    }

	////////////////////
	animation_obj.route_count = result.route_count;
	animation_obj.attack_start = attack_start;
	var sound = GG_DATA_SOUND_WEAPON_DAMAGE;
	if(attack_type == GG_DATA_ATTACK_TYPE_WITCH ||
			   attack_type == GG_DATA_ATTACK_TYPE_WIND ||
			   attack_type == GG_DATA_ATTACK_TYPE_TAKT ||
			   attack_type == GG_DATA_ATTACK_TYPE_THUNDER
			   || attack_type == GG_DATA_ATTACK_TYPE_LASER
			   ) {
		sound = GG_DATA_SOUND_MAGIC_DAMAGE;
	}
	animation_obj.audio = {turn: attack_start,
						   second_turn:second_attack_start ,sound: sound};
	//console.dir(animation_obj);
    return animation_obj;
};

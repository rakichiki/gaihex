gg.controller.get_map = function() {
  return gg.controller.data.map;  
};
gg.controller.phase_interval = function() {
    //gg.animation.set_unit(gg.controller.data.map, gg.controller.data.army, gg.controller.data.zoom, gg.controller.phase_interval_2, gg.controller.data.area_map, [], 0, true);
    gg.animation.set_etc_animation2(gg.controller.data.map, gg.controller.data.army, [], gg.controller.data.zoom, gg.controller.phase_interval_2,
                                    0, gg.controller.data.area_map, [], 0, true, false);
};

gg.controller.phase_interval_2 = function() {
    var callback;
    if (gg.controller.data.next_phase == GG_CONTROLLER_NEXT_PHASE_ECOVERY) {
        callback = gg.controller.check_recovery;
    } else if (gg.controller.data.next_phase == GG_CONTROLLER_NEXT_PHASE_LEVEL_UP) {
        callback = gg.controller.check_level_up;
    } else if (gg.controller.data.next_phase == GG_CONTROLLER_NEXT_PHASE_AREA) {
        callback = gg.controller.check_area;
    } else if (gg.controller.data.next_phase == GG_CONTROLLER_NEXT_PHASE_CLASS_CHANGE) {
        callback = gg.controller.check_job_change;
    } else if (gg.controller.data.next_phase == GG_CONTROLLER_NEXT_PHASE_WIN) {
        callback = gg.controller.check_win_or_lost;
    } else if (gg.controller.data.next_phase == GG_CONTROLLER_NEXT_PHASE_WIN) {
        callback = gg.controller.check_win_or_lost;
    }

    requestAnimationFrame(callback);
};

gg.controller.check_alive = function() {
    var temp_army = [];
    var army = gg.controller.data.army;
    var area_map = gg.controller.data.area_map;

    var lost_animation = [];
    var deprived_unit = [];
        
    for (var i = 0; i < army.length; i++) {
        temp_army[i] = {};
        temp_army[i].color = army[i].color;
        temp_army[i].name = army[i].name;
        temp_army[i].operation = army[i].operation;
        //temp_army[i].unit_create_oder = army[i].unit_create_oder;
        temp_army[i].area_point = army[i].area_point;
        temp_army[i].game_area_point = army[i].game_area_point;
        temp_army[i].position = army[i].position;
        temp_army[i].max_hitpoint = army[i].max_hitpoint;
        temp_army[i].start_exp = army[i].start_exp;
        temp_army[i].start_all_hitpoint        = army[i].start_all_hitpoint;
        temp_army[i].create_uinit_all_hitpoint = army[i].create_uinit_all_hitpoint;
        temp_army[i].level_up_add_hitpoint     = army[i].level_up_add_hitpoint;
        
        //temp_army[i].class_change_flag = army[i].class_change_flag;
        temp_army[i].upper_class_change_level = army[i].upper_class_change_level;
        temp_army[i].add_attack_point = army[i].add_attack_point;
        temp_army[i].add_defence_point = army[i].add_defence_point;
        temp_army[i].add_recovery_point = army[i].add_recovery_point;
        temp_army[i].create_value = army[i].create_value;
        
        temp_army[i].unit = []
        for (var j = 0; j < army[i].unit.length; j++) {
            if (gg.controller.data.lost_info == GG_DATA_LOST_ARRAY[1]) {
                if (army[i].unit[j].hitpoint <= 0) {
                    lost_animation.push({x: army[i].unit[j].x,
                                         y: army[i].unit[j].y,
                                         type: army[i].unit[j].type,
                                         color: army[i].color,
                                         group: GG_DATA_ANIMATION_ETC_LOST});
                    //gg.controller.data.history_unit.push({
                    //    army_number: i, unit_number: j,
                    //    color: army[i].color, turn:gg.controller.data.turn,
                    //    level: army[i].unit[j].level + 1,
                    //    type: army[i].unit[j].type,
                    //    status: GG_DATA_HISTORY_STATUS_LOST
                    //});
    
                    if (army[i].unit[j].type <= GG_DATA_CHAR_HIGH_UNIT) {
                        deprived_unit.push({army_number: i, type: army[i].unit[j].type,
                                            x: army[i].unit[j].x, y: army[i].unit[j].y,
                                            damage_array: JSON.parse(JSON.stringify(army[i].unit[j].damage_array))}
                                           );
                    }
                    
                    gg.controller.data.lost.push({color: army[i].color,
                                                  type: army[i].unit[j].type,
                                                  game_exp: army[i].unit[j].game_exp,
                                                  game_move_distance: army[i].unit[j].game_move_distance,
                                                  game_damage_give: army[i].unit[j].game_damage_give,
                                                  game_damage_receive: army[i].unit[j].game_damage_receive,
                                                  game_recovery: army[i].unit[j].game_recovery,
                                                  game_fatigue: army[i].unit[j].game_fatigue,
                                                  game_recovery_fatigue: army[i].unit[j].game_recovery_fatigue,
                                                  exp: army[i].unit[j].exp,
                                                  level: army[i].unit[j].level,
                                                  done_count: army[i].unit[j].done_count,
                                                  born: army[i].unit[j].born,
                                                  move_distance: army[i].unit[j].move_distance});
                } else {
                    temp_army[i].unit.push(JSON.parse(JSON.stringify(army[i].unit[j])));
                }
            } else {
                if (army[i].unit[j].hitpoint <= 0 && army[i].unit[j].dead_count_down == -1) {
                    army[i].unit[j].recovery_turn_flag = GG_DATA_AUTO_RECOVERY_OFF;
                    army[i].unit[j].dead_count_down = 0;
                    temp_army[i].unit.push(JSON.parse(JSON.stringify(army[i].unit[j])));
                } else if (army[i].unit[j].hitpoint > 0 && army[i].unit[j].dead_count_down == GG_DATA_MAX_DEAD_COUNT) {
                    army[i].unit[j].dead_count_down = -1;
                    temp_army[i].unit.push(JSON.parse(JSON.stringify(army[i].unit[j])));
                } else if (army[i].unit[j].hitpoint <= 0 &&
                    army[i].unit[j].dead_count_down == GG_DATA_MAX_DEAD_COUNT) {
                    lost_animation.push({x: army[i].unit[j].x,
                                         y: army[i].unit[j].y,
                                         type: army[i].unit[j].type,
                                         color: army[i].color,
                                         group: GG_DATA_ANIMATION_ETC_LOST});
                    //gg.controller.data.history_unit.push({
                    //    army_number: i, unit_number: j,
                    //    color: army[i].color, turn:gg.controller.data.turn,
                    //    level: army[i].unit[j].level + 1,
                    //    type: army[i].unit[j].type,
                    //    status: GG_DATA_HISTORY_STATUS_LOST
                    //});
    
                    if (army[i].unit[j].type <= GG_DATA_CHAR_HIGH_UNIT) {
                        deprived_unit.push({army_number: i, type: army[i].unit[j].type,
                                            x: army[i].unit[j].x, y: army[i].unit[j].y,
                                            damage_array: JSON.parse(JSON.stringify(army[i].unit[j].damage_array))}
                                           );
                    }
                    
                    gg.controller.data.lost.push({color: army[i].color,
                                                  type: army[i].unit[j].type,
                                                  game_exp: army[i].unit[j].game_exp,
                                                  game_move_distance: army[i].unit[j].game_move_distance,
                                                  game_damage_give: army[i].unit[j].game_damage_give,
                                                  game_damage_receive: army[i].unit[j].game_damage_receive,
                                                  game_recovery: army[i].unit[j].game_recovery,
                                                  game_fatigue: army[i].unit[j].game_fatigue,
                                                  game_recovery_fatigue: army[i].unit[j].game_recovery_fatigue,
                                                  exp: army[i].unit[j].exp,
                                                  level: army[i].unit[j].level,
                                                  done_count: army[i].unit[j].done_count,
                                                  born: army[i].unit[j].born,
                                                  move_distance: army[i].unit[j].move_distance});
                } else {
                    temp_army[i].unit.push(JSON.parse(JSON.stringify(army[i].unit[j])));
                }
            }
        }
    }

    gg.controller.data.army = null;
    gg.controller.data.army = temp_army;
    var animation_array = lost_animation;
    if (animation_array.length != 0 ) {
        if (deprived_unit.length > 0) {
            var deprived_list = gg.controller.deprived(deprived_unit);
            //
            if (deprived_list.list.length > 0) {
                for (var i = 0; i < deprived_list.list.length; i++) {
                    for (var j = 0; j  < animation_array.length; j++) {
                        if (deprived_list.list[i].x == animation_array[j].x &&
                            deprived_list.list[i].y == animation_array[j].y) {
                            animation_array[j].group = GG_DATA_ANIMATION_ETC_TEAM_CHANGE;
                            animation_array[j].army_number = deprived_list.list[i].army_number;
                            animation_array[j].unit_number = deprived_list.list[i].unit_number;
                            animation_array[j].job_change_before_type = animation_array[j].type;
                            animation_array[j].job_change_after_type = deprived_list.list[i].type;
                            animation_array[j].before_color = animation_array[j].color;
                        }
                    }
                }
            }
        }    
        var callback = gg.controller.phase_interval;
        gg.controller.data.next_phase = GG_CONTROLLER_NEXT_PHASE_ECOVERY;
        gg.animation.set_etc_animation2(gg.controller.data.map, gg.controller.data.army,
                                        animation_array,
                                        gg.controller.data.zoom, callback,
                                        GG_DATA_ANIMATION_LOST_BIN, area_map, [], 0, true, false);
    } else {
        gg.controller.check_recovery();
    }
};

gg.controller.deprived = function(deprived) {
    //var deprived = gg.controller.data.deprived;
    var army = gg.controller.data.army;
    //var animation_obj = [];
    var animation_obj = {};
    animation_obj.list = [];
    //animation_obj.route_count = GG_DATA_ANIMATION_RISE;
    for (var i = 0; i < deprived.length; i++) {
        // sort
        var temp_army_number = -1;
        var temp_max_damage = 0;
        for (var j = 0; j < deprived[i].damage_array.length; j++) {
            if (j == deprived[i].army_number) {
                continue;
            }
            if (temp_max_damage < deprived[i].damage_array[j] &&
            //    deprived[i].damage_array[j] >= 1) {
                deprived[i].damage_array[j] >= Math.floor(army[j].max_hitpoint * 3 / 4)) {
                temp_max_damage = deprived[i].damage_array[j];
                temp_army_number = j;
            } else if (temp_max_damage == deprived[i].damage_array[j]) {
                temp_army_number = -1;
            }
        }
        if (temp_army_number != -1) {
            //
            if (army[temp_army_number].unit.length < GG_DATA_UNIT_MAX) {
                // unit create
                var type;
                if (deprived[i].type >= GG_DATA_UNIT_AX && deprived[i].type <= GG_DATA_UNIT_SABER) {
                    type = GG_DATA_UNIT_SWORD;
                } else if (deprived[i].type >= GG_DATA_UNIT_SHILED && deprived[i].type <= GG_DATA_UNIT_HAMMER) {
                    type = GG_DATA_UNIT_MIDDLE;
                } else if (deprived[i].type >= GG_DATA_UNIT_RAPIER && deprived[i].type <= GG_DATA_UNIT_CROW) {
                    type = GG_DATA_UNIT_FALCHION;
                } else if (deprived[i].type >= GG_DATA_UNIT_CHAIN && deprived[i].type <= GG_DATA_UNIT_HARP) {
                    type = GG_DATA_UNIT_SHORTBOW;
                } else if (deprived[i].type >= GG_DATA_UNIT_THUNDER && deprived[i].type <= GG_DATA_UNIT_LASER) {
                    type = GG_DATA_UNIT_WITCH;
                } else if (deprived[i].type >= GG_DATA_UNIT_MACE && deprived[i].type <= GG_DATA_UNIT_MORNINGSTAR) {
                    type = GG_DATA_UNIT_HOSPITAL;
                //} else if (deprived[i].type >= GG_DATA_UNIT_HARP && deprived[i].type <= GG_DATA_UNIT_RUTE) {
                //    type = GG_DATA_UNIT_TRUMPET;
                }
                
                var unit_number = army[temp_army_number].unit.length;
                
                army[temp_army_number].unit[unit_number] = {};
                army[temp_army_number].unit[unit_number].done_count = 0;
                army[temp_army_number].unit[unit_number].born = GG_DATA_BORN_PATTERN_DEPRIVED;
                army[temp_army_number].unit[unit_number].type = type;

                army[temp_army_number].unit[unit_number].max_hitpoint = army[temp_army_number].max_hitpoint;
                army[temp_army_number].unit[unit_number].dead_attack = null;
                army[temp_army_number].unit[unit_number].class_down_flag = false;
                
                army[temp_army_number].unit[unit_number].hitpoint = army[temp_army_number].unit[unit_number].max_hitpoint;
                army[temp_army_number].create_uinit_all_hitpoint += army[temp_army_number].unit[unit_number].hitpoint;
                army[temp_army_number].unit[unit_number].sum_damage = 0;
                army[temp_army_number].unit[unit_number].move_distance = 0;
                army[temp_army_number].unit[unit_number].damage_array = new Array(army.length);
    
                for (var k = 0; k < army[temp_army_number].unit[unit_number].damage_array.length; k++) {
                    army[temp_army_number].unit[unit_number].damage_array[k] = 0;
                }
                army[temp_army_number].unit[unit_number].dead_count_down = -1;
                
                army[temp_army_number].unit[unit_number].small_recovery = GG_DATA_DEFAULT_RECOVERY + army[temp_army_number].add_recovery_point;
                army[temp_army_number].unit[unit_number].big_recovery = GG_DATA_DEFAULT_NO_ATTACKK_RECOVERY;
                
                army[temp_army_number].unit[unit_number].level = 0;
                army[temp_army_number].unit[unit_number].exp = 0;
                army[temp_army_number].unit[unit_number].game_exp = 0;
                army[temp_army_number].unit[unit_number].game_move_distance = 0;
                army[temp_army_number].unit[unit_number].game_damage_give = 0;
                army[temp_army_number].unit[unit_number].game_damage_receive = 0;
                army[temp_army_number].unit[unit_number].game_recovery = 0;
                army[temp_army_number].unit[unit_number].game_fatigue = 0;
                army[temp_army_number].unit[unit_number].game_recovery_fatigue = 0;
                
                army[temp_army_number].unit[unit_number].attack_point = GG_DATA_DEFAULT_ATTACK_POINT + army[temp_army_number].add_attack_point;
                
                if (type == undefined) {
                    console.log('NG');
                }
                army[temp_army_number].unit[unit_number].defence_point = GG_DATA_CHAR_SPEC[type].defence_point + army[temp_army_number].add_defence_point;
                
                army[temp_army_number].unit[unit_number].move_point = GG_DATA_CHAR_SPEC[type].move_point;
                
                army[temp_army_number].unit[unit_number].attack_type = GG_DATA_CHAR_SPEC[type].attack_type;
                army[temp_army_number].unit[unit_number].attack_min_range = GG_DATA_CHAR_SPEC[type].attack_min_range;
                army[temp_army_number].unit[unit_number].attack_max_range = GG_DATA_CHAR_SPEC[type].attack_max_range;
                army[temp_army_number].unit[unit_number].attack_fatigue = GG_DATA_CHAR_SPEC[type].attack_fatigue;
                
                army[temp_army_number].unit[unit_number].move_type = GG_DATA_CHAR_SPEC[type].move_type;
                army[temp_army_number].unit[unit_number].zoc_cost = GG_DATA_CHAR_SPEC[type].zoc_cost;
        
                army[temp_army_number].unit[unit_number].fatigue = 0;
                army[temp_army_number].unit[unit_number].recover_fatigue = 1;
                army[temp_army_number].unit[unit_number].defence_fatigue = GG_DATA_CHAR_SPEC[type].defence_fatigue;
                army[temp_army_number].unit[unit_number].defence_type = GG_DATA_CHAR_SPEC[type].defence_type;
                army[temp_army_number].unit[unit_number].move_fatigue = GG_DATA_DEFAULT_MOVE_FATIGUE;
                
                army[temp_army_number].unit[unit_number].x = deprived[i].x;
                army[temp_army_number].unit[unit_number].y = deprived[i].y;
                army[temp_army_number].unit[unit_number].status = GG_DATA_STATUS_NOT_ACTION;

                // area point
                army[temp_army_number].unit[unit_number].add_area_point = GG_DATA_DEFAULT_ADD_AREA_POINT;
                ///
                // status change
                //if (army[temp_army_number].unit[unit_number].attack_type == GG_DATA_ATTACK_TYPE_HARP ||
                //    army[temp_army_number].unit[unit_number].attack_type == GG_DATA_ATTACK_TYPE_BELL ||
                //    army[temp_army_number].unit[unit_number].attack_type == GG_DATA_ATTACK_TYPE_RUTE ||
                //    army[temp_army_number].unit[unit_number].attack_type == GG_DATA_ATTACK_TYPE_TRUMPET) {
                //    army[temp_army_number].unit[unit_number].status_change_number = GG_DATA_DEFAULT_STATUS_CHANGE_NUMBER;
                //} else {
                //    army[temp_army_number].unit[unit_number].status_change_number = 0;
                //}
                army[temp_army_number].unit[unit_number].status_changed       = GG_DATA_STATUS_CHANGE_NONE;

                // TEAM
                army[temp_army_number].unit[unit_number].small_recovery          += GG_DATA_TEAM[army[temp_army_number].color].small_recovery;
                army[temp_army_number].unit[unit_number].big_recovery          += GG_DATA_TEAM[army[temp_army_number].color].big_recovery;
                army[temp_army_number].unit[unit_number].recovery_turn_flag = GG_DATA_AUTO_RECOVERY_OFF;

                army[temp_army_number].unit[unit_number].attack_point      += GG_DATA_TEAM[army[temp_army_number].color].attack_point;

                army[temp_army_number].unit[unit_number].defence_point     += GG_DATA_TEAM[army[temp_army_number].color].defence_point;
                army[temp_army_number].unit[unit_number].move_point        += GG_DATA_TEAM[army[temp_army_number].color].move_point;
                if (army[temp_army_number].unit[unit_number].move_point < 2) {
                    army[temp_army_number].unit[unit_number].move_point = 2;
                }
                if (army[temp_army_number].unit[unit_number].move_point > 10) {
                    army[temp_army_number].unit[unit_number].move_point = 10;
                }

                army[temp_army_number].unit[unit_number].attack_fatigue    += GG_DATA_TEAM[army[temp_army_number].color].attack_fatigue;
    
                army[temp_army_number].unit[unit_number].recover_fatigue   += GG_DATA_TEAM[army[temp_army_number].color].recover_fatigue;
                if (army[temp_army_number].unit[unit_number].defence_fatigue != 0) {
                    army[temp_army_number].unit[unit_number].defence_fatigue      += GG_DATA_TEAM[army[temp_army_number].color].defence_fatigue;
                }
                army[temp_army_number].unit[unit_number].move_fatigue      += GG_DATA_TEAM[army[temp_army_number].color].move_fatigue;
                army[temp_army_number].unit[unit_number].add_area_point += GG_DATA_TEAM[army[temp_army_number].color].add_area_point;
                //if (army[temp_army_number].unit[unit_number].status_change_number > 0) {
                //    army[temp_army_number].unit[unit_number].status_change_number += GG_DATA_TEAM[army[temp_army_number].color].status_change_number;
                //}
                var exp = army[temp_army_number].start_exp;

                if (exp != 0) {
                    for (var k = army[temp_army_number].unit[unit_number].level + 1; k < gg.controller.data.exp_array.length; k++) {
                        if (army[temp_army_number].unit[unit_number].exp >= gg.controller.data.exp_array[k]) {
                            army[temp_army_number].unit[unit_number].level = k;
                            var level_up_array = GG_DATA_LEVEL_UP_TEAM_ARRAY[army[temp_army_number].color];
                            
                            army[temp_army_number].unit[unit_number].hitpoint += GG_DATA_LEVEL_UP_ADD_HITPOINT_POINT;
                            army[temp_army_number].unit[unit_number].max_hitpoint += GG_DATA_LEVEL_UP_ADD_HITPOINT_POINT;
                            army[temp_army_number].create_uinit_all_hitpoint += GG_DATA_LEVEL_UP_ADD_HITPOINT_POINT;
                            if (gg.controller.data.level_up == GG_DATA_LEVEL_UP_ARRAY[1]) {
                                army[temp_army_number].unit[unit_number].hitpoint += GG_DATA_LEVEL_UP_ADD_HITPOINT_POINT;
                                army[temp_army_number].unit[unit_number].max_hitpoint += GG_DATA_LEVEL_UP_ADD_HITPOINT_POINT;
                                army[temp_army_number].create_uinit_all_hitpoint += GG_DATA_LEVEL_UP_ADD_HITPOINT_POINT;
                                continue;
                            }
    
                            if (level_up_array[k] == GG_DATA_LEVEL_UP_ATTACK) {
                                army[temp_army_number].unit[unit_number].attack_point += GG_DATA_LEVEL_UP_ADD_ATTACK_POINT;
    
                            } else if (level_up_array[k] == GG_DATA_LEVEL_UP_RECOVERY) {
                                army[temp_army_number].unit[unit_number].small_recovery += GG_DATA_LEVEL_UP_ADD_MY_RECOVERY;
                                army[temp_army_number].unit[unit_number].big_recovery += GG_DATA_LEVEL_UP_ADD_RECOVERY;
                                
                            } else if (level_up_array[k] == GG_DATA_LEVEL_UP_DEFENCE) {
                                army[temp_army_number].unit[unit_number].defence_point += GG_DATA_LEVEL_UP_ADD_DEFENCE;
                                
                            } else if (level_up_array[k] == GG_DATA_LEVEL_UP_MOVE &&
                                       army[temp_army_number].unit[unit_number].move_point < 10) {
                                army[temp_army_number].unit[unit_number].move_point += GG_DATA_LEVEL_UP_ADD_MOVE_POINT;
                                
                            } else if (level_up_array[k] == GG_DATA_LEVEL_UP_FATIGUE) {
                                army[temp_army_number].unit[unit_number].recover_fatigue += GG_DATA_LEVEL_UP_ADD_FATIGUE;
    
                            } else if (level_up_array[k] == GG_DATA_LEVEL_UP_AREA_POINT) {
                                army[temp_army_number].unit[unit_number].add_area_point += GG_DATA_LEVEL_UP_ADD_AREA_POINT;
    
                            //} else if (level_up_array[k] == GG_DATA_LEVEL_UP_STATUS_CHANGE_NUMBER &&
                            //           army[temp_army_number].unit[unit_number].status_change_number != 0) {
                            //    army[temp_army_number].unit[unit_number].status_change_number += 1;
                            } else {
                                army[temp_army_number].unit[unit_number].hitpoint     += GG_DATA_LEVEL_UP_ADD_HITPOINT_POINT;
                                army[temp_army_number].unit[unit_number].max_hitpoint += GG_DATA_LEVEL_UP_ADD_HITPOINT_POINT;
                                army[temp_army_number].create_uinit_all_hitpoint      += GG_DATA_LEVEL_UP_ADD_HITPOINT_POINT;
                            }
                        } else {
                            break;
                        }
                    }
                }

                
                animation_obj.list.push({army_number: temp_army_number, unit_number:unit_number, //kind: GG_DATA_ANIMATION_FADE_UNIT,
                                        x:deprived[i].x, y:deprived[i].y, type: type});

            } else {
                // area point add
                army[temp_army_number].area_point += GG_DATA_UNIT_CREATE;
            }
        }
    }
    return animation_obj;
};

gg.controller.check_recovery = function() {

    var army = gg.controller.data.army;
    var recovery_list = [];
    var recover_point;
    for (var i = 0; i < army.length; i++) {
        for (var j = 0; j < army[i].unit.length; j++) {
            if (army[i].unit[j].hitpoint >= army[i].unit[j].max_hitpoint) {
                army[i].unit[j].hitpoint = army[i].unit[j].max_hitpoint;
                continue;
            }
            if (army[i].unit[j].dead_count_down != -1) {
                continue;
            }
            if (army[i].unit[j].fatigue > 0) {
                continue;
            }
            if (army[i].unit[j].recovery_turn_flag == GG_DATA_AUTO_RECOVERY_OFF) {
                continue;
            }
            if (army[i].area_point < GG_DATA_UNIT_RECOVERY_AREA_POINT) {
                continue;
            }
            army[i].area_pint -= GG_DATA_UNIT_RECOVERY_AREA_POINT;
            army[i].unit[j].recovery_turn_flag = GG_DATA_AUTO_RECOVERY_END;
            recover_point = army[i].unit[j].small_recovery;

            if (army[i].unit[j].hitpoint + recover_point > army[i].unit[j].max_hitpoint) {
                recover_point = army[i].unit[j].max_hitpoint - army[i].unit[j].hitpoint;
            }
            army[i].unit[j].hitpoint += recover_point;
            army[i].unit[j].game_recovery += recover_point;
            
            gg.controller.data.history[i][gg.controller.data.turn].recovery += recover_point;

            recovery_list.push({//army_number: i, unit_number: j,
                                recovery: recover_point,
                                x: army[i].unit[j].x,
                                y: army[i].unit[j].y,
                                army_number: i,
                                unit_number: j,
                                group: GG_DATA_ANIMATION_ETC_TURN_END_RECOVER});
                
        }
    }
    if (recovery_list.length > 0) {
        gg.controller.data.next_phase = GG_CONTROLLER_NEXT_PHASE_LEVEL_UP;
        gg.animation.set_etc_animation2(gg.controller.data.map, army, recovery_list, gg.controller.data.zoom,
                                        gg.controller.phase_interval,
                                        GG_DATA_ANIMATION_SHOTY_EFFECT_BIN,
                                        gg.controller.data.area_map, [], 0, true, false);
    } else {
        gg.controller.check_level_up();        
    }

};

gg.controller.upper_class_change_check = function(army, army_number, unit_number, class_change_uniq) {
    var my_type = army[army_number].unit[unit_number].type;
    var result = {};
    
    //if (army[army_number].class_change_flag == false) {
    if (army[army_number].upper_class_change_level == GG_DATA_UPPER_CLASS_CHANGE_LEVEL_NONE) {
        result.flag = false;
        result.type = -1;
        return result;
    }
    
    if (my_type != GG_DATA_UNIT_SWORD &&
        my_type != GG_DATA_UNIT_MIDDLE &&
        my_type != GG_DATA_UNIT_FALCHION &&
        my_type != GG_DATA_UNIT_SHORTBOW &&
        my_type != GG_DATA_UNIT_WITCH &&
        my_type != GG_DATA_UNIT_HOSPITAL &&
        my_type != GG_DATA_UNIT_TRUMPET
        ) {
        result.flag = false;
        result.type = -1;
        return result;
    }
    var unit_count = 0;

    for (var i = 0; i < army.length; i++) {
        unit_count += army[i].unit.length;
    }

    var class_change_list = JSON.parse(JSON.stringify(GG_DATA_CLASS_CHANGE_LIST[my_type]));;
    for (var i = 0; i < army.length; i++) {
        if (class_change_uniq == GG_DATA_CLASS_CHANGE_TEAM_UNIQ &&
            i != army_number) {
            continue
        }
        for (var j = 0; j < army[i].unit.length; j++) {
            var temp_index = class_change_list.indexOf(army[i].unit[j].type);
            if (temp_index != -1) {
                class_change_list.splice(temp_index, 1);
            }
        }
    }
    if (class_change_list.length > 1) {
        var index = unit_count % class_change_list.length;
        result.flag = true;
        result.type = class_change_list[index];
    } else if (class_change_list.length == 1) {
        result.flag = true;
        result.type = class_change_list[0];
    } else {
        result.flag = false;
        result.type = -1;
    }

    return result;
};

gg.controller.middle_class_change_check = function(army, army_number, unit_number, class_change_uniq) {
    var my_type = army[army_number].unit[unit_number].type;
    var result = {};
    
    if (my_type != GG_DATA_UNIT_SHORTSWORD) {
        result.flag = false;
        result.type = -1;
        return result;
    }
    var unit_count = 0;
    for (var i = 0; i < army.length; i++) {
        for (var j = 0; j < army[i].unit.length; j++) {
            unit_count++;
        }
    }

    var class_change_list = JSON.parse(JSON.stringify(GG_DATA_CLASS_CHANGE_LIST[my_type][army[army_number].color]));;
    for (var j = 0; j < army[army_number].unit.length; j++) {

        var temp_index = class_change_list.indexOf(army[army_number].unit[j].type);
        if (temp_index != -1) {
    		class_change_list.splice(temp_index, 1);
        }
    }
    if (class_change_list.length > 1) {
        var index = unit_count % class_change_list.length;
        result.flag = true;
        result.type = class_change_list[index];
    } else if (class_change_list.length == 1) {
        result.flag = true;
        result.type = class_change_list[0];
    } else {
        result.flag = false;
        result.type = -1;
    }

    return result;
};

gg.controller.check_job_change = function() {
    var army = gg.controller.data.army;
    var animation_list = [];
    var animation_check = false;
    for (var l = gg.controller.data.order_array.length - 1; l > -1; l--) {
        var i = gg.controller.data.order_array[l];
        for (var j = 0; j < army[i].unit.length; j++) {
            
            animation_check  = false
            var class_change_delete_area_point = 0;;
            if (army[i].unit[j].dead_count_down != -1) {
                continue;
            }
            if (army[i].unit[j].class_down_flag == true) {
                continue;
            }
            if (army[i].unit[j].type < GG_DATA_CHAR_HIGH_UNIT) {
                continue;
            }
            if (army[i].area_point < GG_DATA_UNIT_CLASS_CHANGE_AREA_POINT) {
                continue;
            }
            //if (army[i].unit[j].level < GG_DATA_UPPER_CLASS_CHANGE_LEVEL &&
            if (army[i].unit[j].level < army[i].upper_class_change_level &&
                army[i].unit[j].type > GG_DATA_CHAR_HIGH_UNIT && army[i].unit[j].type  <= GG_DATA_CHAR_MIDDLE_UNIT) {
                continue;
            }
            if (army[i].unit[j].level < GG_DATA_MIDDLE_CLASS_CHANGE_LEVEL &&
                army[i].unit[j].type > GG_DATA_CHAR_MIDDLE_UNIT ) {
                continue;
            }
            if (army[i].unit[j].type > GG_DATA_CHAR_MIDDLE_UNIT &&
                army[i].unit[j].type < GG_DATA_CHAR_LOW_UNIT &&
                army[i].unit[j].level >= GG_DATA_MIDDLE_CLASS_CHANGE_LEVEL) {
                var job_change = gg.controller.middle_class_change_check(army, i, j, gg.controller.data.class_change_uniq);
                class_change_delete_area_point = GG_DATA_UNIT_MIDDLE_CLASS_CHANGE_AREA_POINT;
                
            } else if (army[i].unit[j].type > GG_DATA_CHAR_HIGH_UNIT&&
                army[i].unit[j].type < GG_DATA_CHAR_MIDDLE_UNIT &&
//                army[i].unit[j].level >= GG_DATA_UPPER_CLASS_CHANGE_LEVEL) {
                army[i].unit[j].level >= army[i].upper_class_change_level) {
                var job_change = gg.controller.upper_class_change_check(army, i, j, gg.controller.data.class_change_uniq);
                class_change_delete_area_point = GG_DATA_UNIT_CLASS_CHANGE_AREA_POINT;
            } else {
                console.log('type:' + army[i].unit[j].type);
                console.log('level:' + army[i].unit[j].level);
                var job_change = {};
                job_change.flag = false;
            }
            //
            if (job_change.flag == true) {
                
                army[i].area_point -= class_change_delete_area_point;
                //console.log('Class Change T:' + i + ' AP:' + army[i].area_point + ' -' + class_change_delete_area_point);
                animation_list.push({army_number: i, unit_number: j,
                                    job_change_before_type: army[i].unit[j].type,
                                    job_change_after_type: job_change.type,
                                    x: army[i].unit[j].x,
                                    y: army[i].unit[j].y,
                                    group: GG_DATA_ANIMATION_ETC_JOB_CHANGE});
                
                army[i].unit[j].type = job_change.type;
                army[i].unit[j].attack_point = GG_DATA_DEFAULT_ATTACK_POINT + army[i].add_attack_point;
                army[i].unit[j].small_recovery = GG_DATA_DEFAULT_RECOVERY + army[i].add_recovery_point;
                army[i].unit[j].big_recovery = GG_DATA_DEFAULT_NO_ATTACKK_RECOVERY;
                
                army[i].unit[j].defence_point = GG_DATA_CHAR_SPEC[job_change.type].defence_point + army[i].add_defence_point;
                //army[i].unit[j].defence_point = army[i].unit[j].max_defence_point;
                
                army[i].unit[j].move_point = GG_DATA_CHAR_SPEC[job_change.type].move_point;
                //army[i].unit[j].move_point = army[i].unit[j].max_move_point;
                army[i].unit[j].recover_fatigue = GG_DATA_DEFAULT_RECOVERY_FATIGUE;
                army[i].unit[j].defence_fatigue = GG_DATA_CHAR_SPEC[job_change.type].defence_fatigue;
                army[i].unit[j].move_fatigue    = GG_DATA_DEFAULT_MOVE_FATIGUE;

                // area point
                army[i].unit[j].add_area_point  = GG_DATA_DEFAULT_ADD_AREA_POINT;

                // attack 
                army[i].unit[j].attack_type      = GG_DATA_CHAR_SPEC[job_change.type].attack_type;
                army[i].unit[j].attack_min_range = GG_DATA_CHAR_SPEC[job_change.type].attack_min_range;
                army[i].unit[j].attack_max_range = GG_DATA_CHAR_SPEC[job_change.type].attack_max_range;
                army[i].unit[j].attack_fatigue   = GG_DATA_CHAR_SPEC[job_change.type].attack_fatigue;

                // status change
                //if (army[i].unit[j].attack_type == GG_DATA_ATTACK_TYPE_HARP ||
                //    army[i].unit[j].attack_type == GG_DATA_ATTACK_TYPE_BELL ||
                //    army[i].unit[j].attack_type == GG_DATA_ATTACK_TYPE_RUTE ||
                //    army[i].unit[j].attack_type == GG_DATA_ATTACK_TYPE_TRUMPET) {
                //    army[i].unit[j].status_change_number = GG_DATA_DEFAULT_STATUS_CHANGE_NUMBER;
                //} else {
                //    army[i].unit[j].status_change_number = 0;
                //}
                //army[i].unit[j].status_changed       = GG_DATA_STATUS_CHANGE_NONE;

                //TEAM
                army[i].unit[j].small_recovery        += GG_DATA_TEAM[army[i].color].small_recovery;
                army[i].unit[j].big_recovery          += GG_DATA_TEAM[army[i].color].big_recovery;

                army[i].unit[j].attack_point      += GG_DATA_TEAM[army[i].color].attack_point;
                army[i].unit[j].defence_point     += GG_DATA_TEAM[army[i].color].defence_point;
                if (army[i].unit[j].defence_point < 0) {
                    army[i].unit[j].defence_point = 0;
                }
                army[i].unit[j].move_point        += GG_DATA_TEAM[army[i].color].move_point;
                if (army[i].unit[j].move_point < 2) {
                    army[i].unit[j].move_point = 2;
                }
                if (army[i].unit[j].move_point > 10) {
                    army[i].unit[j].move_point = 10;
                }
    
                army[i].unit[j].recover_fatigue   += GG_DATA_TEAM[army[i].color].recover_fatigue;
                army[i].unit[j].attack_fatigue    += GG_DATA_TEAM[army[i].color].attack_fatigue;
                if (army[i].unit[j].defence_fatigue != 0) {
                    army[i].unit[j].defence_fatigue      += GG_DATA_TEAM[army[i].color].defence_fatigue;
                }
                army[i].unit[j].move_fatigue      += GG_DATA_TEAM[army[i].color].move_fatigue;
                army[i].unit[j].add_area_point += GG_DATA_TEAM[army[i].color].add_area_point;
                //if (army[i].unit[j].status_change_number > 0) {
                //    army[i].unit[j].status_change_number += GG_DATA_TEAM[army[i].color].status_change_number;
                //}
                army[i].unit[j].max_hitpoint = army[i].max_hitpoint;
                // expt
                for (var k = 1; k < gg.controller.data.exp_array.length; k++) {
                    var level_up_array = GG_DATA_LEVEL_UP_TEAM_ARRAY[army[i].color];

                    if (gg.controller.data.level_up == GG_DATA_LEVEL_UP_ARRAY[1]) {
                        army[i].unit[j].max_hitpoint += GG_DATA_LEVEL_UP_ADD_HITPOINT_POINT;
                        army[i].unit[j].max_hitpoint += GG_DATA_LEVEL_UP_ADD_HITPOINT_POINT;
                        continue;
                    }
                    if (army[i].unit[j].exp >= gg.controller.data.exp_array[k]) {
                        army[i].unit[j].max_hitpoint += GG_DATA_LEVEL_UP_ADD_HITPOINT_POINT;

                        if (level_up_array[k] == GG_DATA_LEVEL_UP_ATTACK) {
                            army[i].unit[j].attack_point += GG_DATA_LEVEL_UP_ADD_ATTACK_POINT;

                        } else if (level_up_array[k] == GG_DATA_LEVEL_UP_RECOVERY) {
                            army[i].unit[j].small_recovery += GG_DATA_LEVEL_UP_ADD_MY_RECOVERY;
                            army[i].unit[j].big_recovery += GG_DATA_LEVEL_UP_ADD_RECOVERY;

                        } else if (level_up_array[k] == GG_DATA_LEVEL_UP_DEFENCE) {
                            army[i].unit[j].defence_point += GG_DATA_LEVEL_UP_ADD_DEFENCE;

                        } else if (level_up_array[k] == GG_DATA_LEVEL_UP_MOVE &&
                                   army[i].unit[j].move_point < 10) {
                            army[i].unit[j].move_point += GG_DATA_LEVEL_UP_ADD_MOVE_POINT;

                        } else if (level_up_array[k] == GG_DATA_LEVEL_UP_FATIGUE) {
                            army[i].unit[j].recover_fatigue += GG_DATA_LEVEL_UP_ADD_FATIGUE;

                        } else if (level_up_array[k] == GG_DATA_LEVEL_UP_AREA_POINT) {
                            army[i].unit[j].add_area_point += GG_DATA_LEVEL_UP_ADD_AREA_POINT;

                        //} else if (level_up_array[k] == GG_DATA_LEVEL_UP_STATUS_CHANGE_NUMBER &&
                        //           army[i].unit[j].status_change_number != 0) {
                        //    army[i].unit[j].status_change_number += 1;
                        } else {
                            //army[i].unit[j].hitpoint += GG_DATA_LEVEL_UP_ADD_HITPOINT_POINT;
                            army[i].unit[j].max_hitpoint += GG_DATA_LEVEL_UP_ADD_HITPOINT_POINT;

                        }
                    } else {
                        break;
                    }
                }
                
                if (army[i].unit[j].max_hitpoint < army[i].unit[j].hitpoint) {
                    army[i].unit[j].hitpoint = army[i].unit[j].max_hitpoint;
                }
                //army[i].unit[j].attack_option_change_defence = GG_DATA_ATTACK_OPTION_CHANGE_DEFENCE;
                
                army[i].unit[j].move_type    = GG_DATA_CHAR_SPEC[job_change.type].move_type;
                army[i].unit[j].defence_type = GG_DATA_CHAR_SPEC[job_change.type].defence_type;
                army[i].unit[j].zoc_cost     = GG_DATA_CHAR_SPEC[job_change.type].zoc_cost;

                
                //gg.controller.data.history_unit.push({
                //    army_number: i, unit_number: j,
                //    color: army[i].color, turn:gg.controller.data.turn,
                //    level: army[i].unit[j].level + 1,
                //    type: army[i].unit[j].type,
                //    status: GG_DATA_HISTORY_STATUS_CLASS_CHANGE
                //});

            }
        }
    }
    for (var i = 0; i < army.length; i++) {        
        for (var j = 0; j < army[i].unit.length; j++) {        
            if (army[i].unit[j].class_down_flag == false) {
                continue;
            }
            job_change = {};
            job_change.type = GG_DATA_UNIT_SHORTSWORD;
                
            animation_list.push({army_number: i, unit_number: j,
                                job_change_before_type: army[i].unit[j].type,
                                job_change_after_type: job_change.type,
                                x: army[i].unit[j].x,
                                y: army[i].unit[j].y,
                                group: GG_DATA_ANIMATION_ETC_JOB_CHANGE});
            
            army[i].unit[j].type = job_change.type;
            army[i].unit[j].attack_point = GG_DATA_DEFAULT_ATTACK_POINT + army[i].add_attack_point;
            army[i].unit[j].small_recovery = GG_DATA_DEFAULT_RECOVERY + army[i].add_recovery_point;
            army[i].unit[j].big_recovery = GG_DATA_DEFAULT_NO_ATTACKK_RECOVERY;
            
            army[i].unit[j].defence_point = GG_DATA_CHAR_SPEC[job_change.type].defence_point + army[i].add_defence_point;
            
            army[i].unit[j].move_point = GG_DATA_CHAR_SPEC[job_change.type].move_point;
            army[i].unit[j].recover_fatigue = GG_DATA_DEFAULT_RECOVERY_FATIGUE;
            army[i].unit[j].defence_fatigue = GG_DATA_CHAR_SPEC[job_change.type].defence_fatigue;
            army[i].unit[j].move_fatigue = GG_DATA_DEFAULT_MOVE_FATIGUE;
    
            // area point
            army[i].unit[j].add_area_point = GG_DATA_DEFAULT_ADD_AREA_POINT;

            // status change
            //if (army[i].unit[j].attack_type == GG_DATA_ATTACK_TYPE_HARP ||
            //    army[i].unit[j].attack_type == GG_DATA_ATTACK_TYPE_BELL ||
            //    army[i].unit[j].attack_type == GG_DATA_ATTACK_TYPE_RUTE ||
            //    army[i].unit[j].attack_type == GG_DATA_ATTACK_TYPE_TRUMPET) {
            //    army[i].unit[j].status_change_number = GG_DATA_DEFAULT_STATUS_CHANGE_NUMBER;
            //} else {
            //    army[i].unit[j].status_change_number = 0;
            //}
            //army[i].unit[j].status_changed       = GG_DATA_STATUS_CHANGE_NONE;
            
            //TEAM
            army[i].unit[j].small_recovery    += GG_DATA_TEAM[army[i].color].small_recovery;
            army[i].unit[j].big_recovery      += GG_DATA_TEAM[army[i].color].big_recovery;
    
            army[i].unit[j].attack_point      += GG_DATA_TEAM[army[i].color].attack_point;
            army[i].unit[j].defence_point     += GG_DATA_TEAM[army[i].color].defence_point;
            if (army[i].unit[j].defence_point < 0) {
                army[i].unit[j].defence_point = 0;
            }
            army[i].unit[j].move_point        += GG_DATA_TEAM[army[i].color].move_point;
            if (army[i].unit[j].move_point < 2) {
                army[i].unit[j].move_point = 2;
            }
            if (army[i].unit[j].move_point > 10) {
                army[i].unit[j].move_point = 10;
            }
        
            army[i].unit[j].recover_fatigue   += GG_DATA_TEAM[army[i].color].recover_fatigue;
            army[i].unit[j].attack_fatigue    += GG_DATA_TEAM[army[i].color].attack_fatigue;
            if (army[i].unit[j].defence_fatigue != 0) {
                army[i].unit[j].defence_fatigue      += GG_DATA_TEAM[army[i].color].defence_fatigue;
            }
            army[i].unit[j].move_fatigue      += GG_DATA_TEAM[army[i].color].move_fatigue;
            army[i].unit[j].add_area_point    += GG_DATA_TEAM[army[i].color].add_area_point;
            //if (army[i].unit[j].status_change_number > 0) {
            //    army[i].unit[j].status_change_number += GG_DATA_TEAM[army[i].color].status_change_number;
            //}
            // exp/level
            army[i].unit[j].max_hitpoint = army[i].max_hitpoint;
            for (var k = 1; k < gg.controller.data.exp_array.length; k++) {
                var level_up_array = GG_DATA_LEVEL_UP_TEAM_ARRAY[army[i].color];
                army[i].unit[j].max_hitpoint += GG_DATA_LEVEL_UP_ADD_HITPOINT_POINT;
                if (gg.controller.data.level_up == GG_DATA_LEVEL_UP_ARRAY[1]) {
                    army[i].unit[j].max_hitpoint += GG_DATA_LEVEL_UP_ADD_HITPOINT_POINT;
                    continue;
                }
                
                if (army[i].unit[j].exp >= gg.controller.data.exp_array[k]) {
                    if (level_up_array[k] == GG_DATA_LEVEL_UP_ATTACK) {
                        army[i].unit[j].attack_point += GG_DATA_LEVEL_UP_ADD_ATTACK_POINT;
    
                    } else if (level_up_array[k] == GG_DATA_LEVEL_UP_RECOVERY) {
                        army[i].unit[j].small_recovery += GG_DATA_LEVEL_UP_ADD_MY_RECOVERY;
                        army[i].unit[j].big_recovery += GG_DATA_LEVEL_UP_ADD_RECOVERY;
    
                    } else if (level_up_array[k] == GG_DATA_LEVEL_UP_DEFENCE) {
                        army[i].unit[j].defence_point += GG_DATA_LEVEL_UP_ADD_DEFENCE;
    
                    } else if (level_up_array[k] == GG_DATA_LEVEL_UP_MOVE &&
                               army[i].unit[j].move_point < 10) {
                        army[i].unit[j].move_point += GG_DATA_LEVEL_UP_ADD_MOVE_POINT;
    
                    } else if (level_up_array[k] == GG_DATA_LEVEL_UP_FATIGUE) {
                        army[i].unit[j].recover_fatigue += GG_DATA_LEVEL_UP_ADD_FATIGUE;
    
                    } else if (level_up_array[k] == GG_DATA_LEVEL_UP_AREA_POINT) {
                        army[i].unit[j].add_area_point += GG_DATA_LEVEL_UP_ADD_AREA_POINT;

                    //} else if (level_up_array[k] == GG_DATA_LEVEL_UP_STATUS_CHANGE_NUMBER &&
                    //           army[i].unit[j].status_change_number != 0) {
                    //    army[i].unit[j].status_change_number += 1;
                    } else {
                        //army[i].unit[j].hitpoint     += GG_DATA_LEVEL_UP_ADD_HITPOINT_POINT;
                        army[i].unit[j].max_hitpoint += GG_DATA_LEVEL_UP_ADD_HITPOINT_POINT;
                    }
                } else {
                    break;
                }
                if (army[i].unit[j].max_hitpoint < army[i].unit[j].hitpoint) {
                    army[i].unit[j].hitpoint = army[i].unit[j].max_hitpoint;
                }
            }
            
            army[i].unit[j].attack_type = GG_DATA_CHAR_SPEC[job_change.type].attack_type;
            army[i].unit[j].attack_min_range = GG_DATA_CHAR_SPEC[job_change.type].attack_min_range;
            army[i].unit[j].attack_max_range = GG_DATA_CHAR_SPEC[job_change.type].attack_max_range;
            army[i].unit[j].attack_fatigue = GG_DATA_CHAR_SPEC[job_change.type].attack_fatigue;
            
            army[i].unit[j].move_type = GG_DATA_CHAR_SPEC[job_change.type].move_type;
            army[i].unit[j].defence_type = GG_DATA_CHAR_SPEC[job_change.type].defence_type;
            army[i].unit[j].zoc_cost = GG_DATA_CHAR_SPEC[job_change.type].zoc_cost;
    
    
            //gg.controller.data.history_unit.push({
            //    army_number: i, unit_number: j,
            //    color: army[i].color, turn:gg.controller.data.turn,
            //    level: army[i].unit[j].level + 1,
            //    type: army[i].unit[j].type,
            //    status: GG_DATA_HISTORY_STATUS_CLASS_CHANGE
            //});
    
        }
    }

    if (animation_list.length > 0) {
        var map = gg.controller.data.map;
        var zoom = gg.controller.data.zoom;
        var area_map = gg.controller.data.area_map;
        //gg.animation.set_etc_animation(map, army, animation_list, zoom, gg.controller.check_area,
        //                               GG_DATA_ANIMATION_LONG_EFFECT_BIN, area_map, [], true);
        //gg.animation.set_etc_animation2(map, army, animation_list, zoom, gg.controller.check_area,
        //                               GG_DATA_ANIMATION_LONG_EFFECT_BIN, area_map, [], true);
        gg.controller.data.next_phase = GG_CONTROLLER_NEXT_PHASE_AREA;
        gg.animation.set_etc_animation2(map, army, animation_list, zoom, gg.controller.phase_interval,
                                       GG_DATA_ANIMATION_LONG_EFFECT_BIN, area_map, [], 0, true, false);
    } else {
        gg.controller.check_area();        
    }
};

gg.controller.check_level_up = function() {
    var army = gg.controller.data.army;
    var level_up_list = [];
    var level_up_check = false;
    for (var i = 0; i < army.length; i++) {
        for (var j = 0; j < army[i].unit.length; j++) {
            level_up_check  = false;
            if (army[i].unit[j].level > gg.controller.data.exp_array.length) {
                continue;
            }
            if (army[i].unit[j].dead_count_down != -1) {
                continue;
            }
            
            for (var k = army[i].unit[j].level + 1; k < gg.controller.data.exp_array.length; k++) {
                if (army[i].unit[j].exp >= gg.controller.data.exp_array[k]) {
                    var level_up_array = GG_DATA_LEVEL_UP_TEAM_ARRAY[army[i].color];
                    
                    army[i].unit[j].level = k;
                    level_up_check = true;
                    
                    army[i].unit[j].hitpoint += GG_DATA_LEVEL_UP_ADD_HITPOINT_POINT;
                    army[i].unit[j].max_hitpoint += GG_DATA_LEVEL_UP_ADD_HITPOINT_POINT;
                    army[i].level_up_add_hitpoint += GG_DATA_LEVEL_UP_ADD_HITPOINT_POINT;
                    if (gg.controller.data.level_up == GG_DATA_LEVEL_UP_ARRAY[1]) {
                        army[i].unit[j].hitpoint += GG_DATA_LEVEL_UP_ADD_HITPOINT_POINT;
                        army[i].unit[j].max_hitpoint += GG_DATA_LEVEL_UP_ADD_HITPOINT_POINT;
                        army[i].level_up_add_hitpoint += GG_DATA_LEVEL_UP_ADD_HITPOINT_POINT;
                        continue;
                    }

                    if (level_up_array[k] == GG_DATA_LEVEL_UP_ATTACK) {
                        army[i].unit[j].attack_point += GG_DATA_LEVEL_UP_ADD_ATTACK_POINT;

                    } else if (level_up_array[k] == GG_DATA_LEVEL_UP_RECOVERY) {
                        army[i].unit[j].small_recovery += GG_DATA_LEVEL_UP_ADD_MY_RECOVERY;
                        army[i].unit[j].big_recovery += GG_DATA_LEVEL_UP_ADD_RECOVERY;
                        
                    } else if (level_up_array[k] == GG_DATA_LEVEL_UP_DEFENCE) {
                        army[i].unit[j].defence_point += GG_DATA_LEVEL_UP_ADD_DEFENCE;
                        
                    } else if (level_up_array[k] == GG_DATA_LEVEL_UP_MOVE &&
                               army[i].unit[j].move_point < 10) {
                        army[i].unit[j].move_point += GG_DATA_LEVEL_UP_ADD_MOVE_POINT;
                        //if (GG_DATA_TEAM[army[i].color].move_point > 0 || army[i].unit[j].level > 5) {
                        //    army[i].unit[j].move_point += GG_DATA_LEVEL_UP_ADD_MOVE_POINT;
                        //}
                        if (army[i].unit[j].move_point > 10) {
                            army[i].unit[j].move_point = 10;
                        }
                        
                    } else if (level_up_array[k] == GG_DATA_LEVEL_UP_FATIGUE) {
                        army[i].unit[j].recover_fatigue += GG_DATA_LEVEL_UP_ADD_FATIGUE;

                    } else if (level_up_array[k] == GG_DATA_LEVEL_UP_AREA_POINT) {
                        army[i].unit[j].add_area_point += GG_DATA_LEVEL_UP_ADD_AREA_POINT;

                    //} else if (level_up_array[k] == GG_DATA_LEVEL_UP_STATUS_CHANGE_NUMBER &&
                    //           army[i].unit[j].status_change_number != 0) {
                    //    army[i].unit[j].status_change_number += 1;
                    } else {
                        army[i].unit[j].hitpoint += GG_DATA_LEVEL_UP_ADD_HITPOINT_POINT;
                        army[i].unit[j].max_hitpoint += GG_DATA_LEVEL_UP_ADD_HITPOINT_POINT; 
                        army[i].level_up_add_hitpoint += GG_DATA_LEVEL_UP_ADD_HITPOINT_POINT;
                    }
                } else {
                    break;
                }
            }
            if (level_up_check == true) {
                level_up_list.push({army_number: i, unit_number: j,
                                    level: army[i].unit[j].level,
                                    //job_change_flag: job_change.flag,
                                    //job_change_before_type: army[i].unit[j].type,
                                    //job_change_after_type: job_change.type,
                                    x: army[i].unit[j].x,
                                    y: army[i].unit[j].y,
                                    group: GG_DATA_ANIMATION_ETC_LEVEL_UP});

                //gg.controller.data.history_unit.push({
                //    army_number: i, unit_number: j,
                //    color: army[i].color, turn:gg.controller.data.turn,
                //    level: army[i].unit[j].level + 1,
                //    type: army[i].unit[j].type,
                //    status: GG_DATA_HISTORY_STATUS_LEVEL_UP
                //});

            }
        }
    }
    if (level_up_list.length > 0) {
        var map = gg.controller.data.map;
        var area_map = gg.controller.data.area_map;
        var zoom = gg.controller.data.zoom;
        //gg.animation.set_etc_animation(map, army, level_up_list, zoom, gg.controller.check_job_change,
        //                               GG_DATA_ANIMATION_LONG_EFFECT_BIN, area_map, [], true);
        //gg.animation.set_etc_animation2(map, army, level_up_list, zoom, gg.controller.check_job_change,
        gg.controller.data.next_phase = GG_CONTROLLER_NEXT_PHASE_CLASS_CHANGE;
        gg.animation.set_etc_animation2(map, army, level_up_list, zoom, gg.controller.phase_interval,
        //                               GG_DATA_ANIMATION_LONG_EFFECT_BIN, area_map, [], true);
                                       GG_DATA_ANIMATION_SHOTY_EFFECT_BIN, area_map, 0, [], true, false);
    } else {
        gg.controller.check_job_change();        
    }
};

gg.controller.get_create_position = function(map, area_map, army, army_number) {
    var unit_pop_area = [];
    var temp_around_area = [];
    var temp2_around_area = [];
    var around_area = [];
    var max_map_x = map[0].length - 3;
    var max_map_y = map.length - 2;
	var min_map_x = 2;
	var min_map_y = 1;

    for (var i = 0; i < area_map.length; i++) {
        for (var j = 0; j < area_map[i].length; j++){
            if (area_map[i][j] != army[army_number].color) {
                continue;
            }
            var flag = true;
            for (var army_count = 0; army_count < army.length; army_count++) {
                for (var unit_count = 0; unit_count < army[army_count].unit.length; unit_count++) {
                    if (army[army_count].unit[unit_count].x == j &&
                            army[army_count].unit[unit_count].y == i) {
                            flag = false;
                            break;
                    }
                }
                if (flag == false) {
                    break;
                }
            }
            
            //for (var unit_count = 0; unit_count < army[army_number].unit.length; unit_count++) {
            //    if (army[army_number].unit[unit_count].x == j &&
            //        army[army_number].unit[unit_count].y == i) {
            //        flag = false;
            //        break;
            //    }
            //}
            if (flag == true) {
                around_area.push({x: j, y: i, army_color: parseInt(army[army_number].color)});
            }
            for (var k = 0; k < 6; k++) {
                if (j + GG_DATA_MOVE_DIRECTION[k].x < min_map_x ||
                    i + GG_DATA_MOVE_DIRECTION[k].y < min_map_y ||
                    j + GG_DATA_MOVE_DIRECTION[k].x > max_map_x ||
                    i + GG_DATA_MOVE_DIRECTION[k].y > max_map_y) {
                    continue;
                }
                //if (area_map[i + GG_DATA_MOVE_DIRECTION[k].y][j + GG_DATA_MOVE_DIRECTION[k].x] == -2) {
                //    continue;
                //}
                if (map[i + GG_DATA_MOVE_DIRECTION[k].y][j + GG_DATA_MOVE_DIRECTION[k].x] == -1) {
                    continue;
                }
                //if (area_map[i + GG_DATA_MOVE_DIRECTION[k].y][j + GG_DATA_MOVE_DIRECTION[k].x] != -1 &&
                //    area_map[i + GG_DATA_MOVE_DIRECTION[k].y][j + GG_DATA_MOVE_DIRECTION[k].x] != army[army_number].color) {
                if (area_map[i + GG_DATA_MOVE_DIRECTION[k].y][j + GG_DATA_MOVE_DIRECTION[k].x] > -1) {
                    continue;
                }
                var unit_flag = true;
                for (var army_count = 0; army_count < army.length; army_count++) {
                    for (var unit_count = 0; unit_count < army[army_count].unit.length; unit_count++) {
                        if (army[army_count].unit[unit_count].x == j + GG_DATA_MOVE_DIRECTION[k].x &&
                            army[army_count].unit[unit_count].y == i + GG_DATA_MOVE_DIRECTION[k].y) {
                            unit_flag = false;
                            break;
                        }
                    }
                    if (unit_flag == false) {
                        break;
                    }
                }
                if (unit_flag == true) {
                    temp_around_area.push({x: j + GG_DATA_MOVE_DIRECTION[k].x, y: i + GG_DATA_MOVE_DIRECTION[k].y});
                }
            }
        }
    }
    //for (var unit_count = 0; unit_count < army[army_number].unit.length; unit_count++) {
    //    for (var k = 0; k < 6; k++) {
    //        if (army[army_number].unit[unit_count].x + GG_DATA_MOVE_DIRECTION[k].x < min_map_x ||
    //            army[army_number].unit[unit_count].y + GG_DATA_MOVE_DIRECTION[k].y < min_map_y ||
    //            army[army_number].unit[unit_count].x + GG_DATA_MOVE_DIRECTION[k].x > max_map_x ||
    //            army[army_number].unit[unit_count].y + GG_DATA_MOVE_DIRECTION[k].y > max_map_y) {
    //            continue;
    //        }
    //        if (area_map[army[army_number].unit[unit_count].y + GG_DATA_MOVE_DIRECTION[k].y][army[army_number].unit[unit_count].x + GG_DATA_MOVE_DIRECTION[k].x] != -1) {
    //            continue;
    //        }
    //        var unit_flag = true;
    //        for (var army_count = 0; army_count < army.length; army_count++) {
    //            for (var unit_count2 = 0; unit_count2 < army[army_count].unit.length; unit_count2++) {
    //                if (army[army_count].unit[unit_count2].x == army[army_number].unit[unit_count].x + GG_DATA_MOVE_DIRECTION[k].x &&
    //                    army[army_count].unit[unit_count2].y == army[army_number].unit[unit_count].y + GG_DATA_MOVE_DIRECTION[k].y) {
    //                    unit_flag = false;
    //                    break;
    //                }
    //            }
    //            if (unit_flag == false) {
    //                break;
    //            }
    //        }
    //        if (unit_flag == true) {
    //            temp_around_area.push({x: army[army_number].unit[unit_count].x + GG_DATA_MOVE_DIRECTION[k].x,
    //                                   y: army[army_number].unit[unit_count].y + GG_DATA_MOVE_DIRECTION[k].y});
    //        }
    //    }
    //}
    if (temp_around_area.length > 0) {
        temp_around_area.sort(function(a, b) {
            if (a.y < b.y) {
                return 1;
            } else  if (a.y > b.y) {
                return -1;
            } else {
                if (a.x < b.x) {
                    return 1;
                } else  if (a.x > b.x) {
                    return -1;
                } else {
                    return -1;
                }
            }
        });
        temp2_around_area.push({x: temp_around_area[0].x, y: temp_around_area[0].y});
        for (var i = 1; i < temp_around_area.length; i++) {
            if (temp_around_area[i].x != temp_around_area[i - 1].x ||
                temp_around_area[i].y != temp_around_area[i - 1].y) {
                //code
            temp2_around_area.push({x: temp_around_area[i].x, y: temp_around_area[i].y});
            }
        }
    }
    for (var i = 0; i < temp2_around_area.length; i++) {
        var flag = true;
        for (var k = 0; k < 6; k++) {
            if (temp2_around_area[i].x + GG_DATA_MOVE_DIRECTION[k].x < min_map_x ||
                temp2_around_area[i].y + GG_DATA_MOVE_DIRECTION[k].y < min_map_y ||
                temp2_around_area[i].x + GG_DATA_MOVE_DIRECTION[k].x > max_map_x ||
                temp2_around_area[i].y + GG_DATA_MOVE_DIRECTION[k].y > max_map_y) {
                continue;
            }
            for (var army_count = 0; army_count < army.length; army_count++) {
                if (army_count == army_number) {
                    continue;
                }
                //console.log('temp2_around_area[i].y:' + temp2_around_area[i].y);
                //console.log('GG_DATA_MOVE_DIRECTION[k].y:' + GG_DATA_MOVE_DIRECTION[k].y);
                //console.log('temp2_around_area[i].x:' + temp2_around_area[i].x);
                //console.log('GG_DATA_MOVE_DIRECTION[k].x:' + GG_DATA_MOVE_DIRECTION[k].x);
                //console.log('i:' + i);
                //console.log('k:' + k);
                //console.log('area_map[temp2_around_area[i].y + GG_DATA_MOVE_DIRECTION[k].y][temp2_around_area[i].x + GG_DATA_MOVE_DIRECTION[k].x]:' + area_map[temp2_around_area[i].y + GG_DATA_MOVE_DIRECTION[k].y][temp2_around_area[i].x + GG_DATA_MOVE_DIRECTION[k].x]);
                //console.log('army[army_count].color:' + army[army_count].color);
                //console.log('army_count:' + army_count);
                if (area_map[temp2_around_area[i].y + GG_DATA_MOVE_DIRECTION[k].y][temp2_around_area[i].x + GG_DATA_MOVE_DIRECTION[k].x] == army[army_count].color) {
                    flag = false;
                    break;
                }
            }
            if (flag == false) {
                break;
            }
        }
        if (flag == true) {
            around_area.push({x:temp2_around_area[i].x, y:temp2_around_area[i].y,
                              army_color: parseInt(army[army_number].color),
                              id: GG_VIEW_SELECT_MAP_CIRCLE});
        }
    }
    
    return around_area;
};

gg.controller.check_area = function() {
    gg.controller.data.create_unit = [];
    var army = gg.controller.data.army;
    var temp_army = JSON.parse(JSON.stringify(gg.controller.data.army));
    var map = gg.controller.data.map;
    var area_map = gg.controller.data.area_map;
    var xabs, yabs, range1, range2;
    var animation_obj = [];
    for (var i = 0; i < army.length; i++) {
        var temp_area_point = army[i].area_point;

        gg.controller.data.history[i][gg.controller.data.turn].area_point = 0;
        for (var j = 0; j < army[i].unit.length; j++) {
            if (army[i].unit[j].dead_count_down != -1) {
                continue;
            }
            if (map[army[i].unit[j].y][army[i].unit[j].x] == 1) {
                area_map[army[i].unit[j].y][army[i].unit[j].x] = army[i].color;
                if (army[i].unit[j].add_area_point > 0) {
                    army[i].area_point += army[i].unit[j].add_area_point;
                    army[i].game_area_point += army[i].unit[j].add_area_point;
                    gg.controller.data.history[i][gg.controller.data.turn].area_point += army[i].unit[j].add_area_point;
                    animation_obj.push({
                                    area_point: army[i].unit[j].add_area_point,
                                    x: army[i].unit[j].x,
                                    y: army[i].unit[j].y,
                                    group: GG_DATA_ANIMATION_ETC_ADD_AREA_POINT});
                }                
            }
        }
        //console.log('T:' + i + ' U AP B:' + temp_area_point + ' A:' + army[i].area_point);
        //console.log('Unit T:' + i + ' AP:' + army[i].area_point + ' +' + (army[i].area_point - temp_area_point)); 
    }
    if (animation_obj.length > 0) {
        //gg.animation.set_etc_animation(map, army, animation_obj, gg.controller.data.zoom, gg.controller.area_point_clear,
        //                               GG_DATA_ANIMATION_SHOTY_EFFECT_BIN, area_map, [], true);
        gg.animation.set_etc_animation2(map, army, animation_obj, gg.controller.data.zoom, gg.controller.area_point_clear,
                                       GG_DATA_ANIMATION_SHOTY_EFFECT_BIN, area_map, 0, [], true, false);
    } else {
        gg.controller.cal_area_point();
    }

};
gg.controller.area_point_clear = function() {
    //gg.animation.set_unit(gg.controller.data.map, gg.controller.data.army,
    //                       gg.controller.data.zoom, gg.controller.cal_area_point,
    //                       gg.controller.data.area_map, [], 0, true);
    gg.animation.set_etc_animation2(gg.controller.data.map, gg.controller.data.army, [],
                           gg.controller.data.zoom, gg.controller.cal_area_point, 0,
                           gg.controller.data.area_map, [], 0, true, false);
}

gg.controller.cal_area_point = function() {
    gg.controller.data.create_unit = [];
    var army = gg.controller.data.army;
    var temp_army = JSON.parse(JSON.stringify(gg.controller.data.army));
    var map = gg.controller.data.map;
    var area_map = gg.controller.data.area_map;
    var xabs, yabs, range1, range2;
    var animation_obj = [];
    var castle_numbers = [];
    var temp_str = '';

    var temp_area_point = [];
    for (var i = 0; i < army.length; i++) {
        temp_area_point.push(army[i].area_point);
        castle_numbers[i] = 0;
    }
    
    for (var i = 0; i < area_map.length; i++) {
        for (var j = 0; j < area_map[i].length; j++) {
            if (area_map[i][j] < 0) {
                continue;
            }
            for (var k = 0; k < army.length; k++) {
                if (army[k].color == area_map[i][j]) {
                    castle_numbers[k]++;
                    army[k].area_point++;
                    army[k].game_area_point++;
                    //temp_area_point[k]++;
                    gg.controller.data.history[k][gg.controller.data.turn].area_point++;
                    break;
                }
            }
        }
    }

    //var animation_obj = {};
    //animation_obj.route_count = GG_DATA_ANIMATION_RISE;
    //animation_obj.list = [];
    gg.controller.data.team_recovery_array = [];
    var create_value = GG_DATA_UNIT_CREATE;
    
    //    
    for (var n = gg.controller.data.order_array.length - 1; n > -1; n--) {
        var i = gg.controller.data.order_array[n];
    
        var exp = army[i].start_exp;
            
        if (army[i].area_point >= army[i].create_value &&
            army[i].unit.length < GG_DATA_UNIT_MAX) {
            var unit_positon_list = [];
            
            unit_positon_list = gg.controller.get_create_position(map, area_map, army, i);
            
            if (unit_positon_list.length == 0) {
                continue;
            }
            var units_position = {sum_x:0, sum_y:0};   

            //if (army[i].unit_create_oder <= GG_DATA_UNIT_FALCHION) {
            for (var k = 0; k < army.length; k++) {
                if (i == k) {
                    continue;
                }
                for (var j = 0; j < army[k].unit.length; j++) {
                    units_position.sum_x += army[k].unit[j].x;
                    units_position.sum_y += army[k].unit[j].y;
                }
                units_position.average_x = units_position.sum_x / army[i].unit.length; 
                units_position.average_y = units_position.sum_y / army[i].unit.length; 
            }
            //} else {
            //    for (var j = 0; j < army[i].unit.length; j++) {
            //        units_position.sum_x += army[i].unit[j].x;
            //        units_position.sum_y += army[i].unit[j].y;
            //    }
            //    units_position.average_x = units_position.sum_x / army[i].unit.length; 
            //   units_position.average_y = units_position.sum_y / army[i].unit.length; 
            //
            var range;
            for (var j = 0; j < unit_positon_list.length; j++) {
                xabs = Math.abs(units_position.average_x - unit_positon_list[j].x);
                yabs = Math.abs(units_position.average_y - unit_positon_list[j].y);
                if (yabs > xabs) {
                    range = yabs;
                } else {
                    range = (xabs + yabs) / 2;
                }
                unit_positon_list[j].range = range;
            }            
            
            unit_positon_list.sort(function(a, b) {
                if (a.range > b.range) {
                    return 1;
                } else  if (a.range < b.range) {
                    return -1;
                } else {
                    if (a.y > b.y) {
                        return 1;
                    } else {
                        return -1;
                    }
                }
            });

            var temp_position = {x: unit_positon_list[0].x, y: unit_positon_list[0].y};
            
            type = GG_DATA_UNIT_SHORTSWORD;
            
            var unit_number = army[i].unit.length;
            if (army[i].operation == GG_DATA_OPERATION_USER) {
                gg.controller.data.create_unit.push({army_number: i, unit_number: unit_number, type: type,
                                                     select_map: JSON.parse(JSON.stringify(unit_positon_list))});       
            }
            
            army[i].unit[unit_number] = {};
            army[i].unit[unit_number].done_count = 0;
            army[i].unit[unit_number].born = GG_DATA_BORN_PATTERN_CREATE;
            army[i].unit[unit_number].type = type;
            army[i].unit[unit_number].max_hitpoint = army[i].max_hitpoint;

            army[i].unit[unit_number].dead_attack = null;
            army[i].unit[unit_number].class_down_flag = false;
            
            army[i].unit[unit_number].hitpoint = army[i].unit[unit_number].max_hitpoint;
            army[i].create_uinit_all_hitpoint += army[i].unit[unit_number].hitpoint;
            army[i].unit[unit_number].sum_damage = 0;
            army[i].unit[unit_number].move_distance = 0;
            army[i].unit[unit_number].damage_array = new Array(army.length);

            for (var k = 0; k < army[i].unit[unit_number].damage_array.length; k++) {
                army[i].unit[unit_number].damage_array[k] = 0;
            }
            army[i].unit[unit_number].dead_count_down = -1;
            
            army[i].unit[unit_number].small_recovery = GG_DATA_DEFAULT_RECOVERY + army[i].add_recovery_point;
            army[i].unit[unit_number].big_recovery = GG_DATA_DEFAULT_NO_ATTACKK_RECOVERY;
            army[i].unit[unit_number].recovery_turn_flag = GG_DATA_AUTO_RECOVERY_OFF;
            
            army[i].unit[unit_number].level = 0;
            army[i].unit[unit_number].exp = exp;
            army[i].unit[unit_number].game_exp = 0;
            army[i].unit[unit_number].game_move_distance = 0;
            army[i].unit[unit_number].game_damage_give = 0;
            army[i].unit[unit_number].game_damage_receive = 0;
            army[i].unit[unit_number].game_recovery = 0;
            army[i].unit[unit_number].game_fatigue = 0;
            army[i].unit[unit_number].game_recovery_fatigue = 0;
            
            army[i].unit[unit_number].attack_point = GG_DATA_DEFAULT_ATTACK_POINT + army[i].add_attack_point;

            army[i].unit[unit_number].defence_point = GG_DATA_CHAR_SPEC[type].defence_point + army[i].add_defence_point;

            army[i].unit[unit_number].move_point = GG_DATA_CHAR_SPEC[type].move_point;
            //army[i].unit[unit_number].move_point = army[i].unit[unit_number].max_move_point;
            army[i].unit[unit_number].recover_fatigue = GG_DATA_DEFAULT_RECOVERY_FATIGUE;
            
            army[i].unit[unit_number].attack_type = GG_DATA_CHAR_SPEC[type].attack_type;
            army[i].unit[unit_number].attack_min_range = GG_DATA_CHAR_SPEC[type].attack_min_range;
            army[i].unit[unit_number].attack_max_range = GG_DATA_CHAR_SPEC[type].attack_max_range;
            army[i].unit[unit_number].attack_fatigue = GG_DATA_CHAR_SPEC[type].attack_fatigue;
            
            army[i].unit[unit_number].move_type = GG_DATA_CHAR_SPEC[type].move_type;
            army[i].unit[unit_number].zoc_cost = GG_DATA_CHAR_SPEC[type].zoc_cost;
            army[i].unit[unit_number].defence_type = GG_DATA_CHAR_SPEC[type].defence_type;


            army[i].unit[unit_number].fatigue = 0;
            army[i].unit[unit_number].defence_fatigue = GG_DATA_CHAR_SPEC[type].defence_fatigue;
            army[i].unit[unit_number].move_fatigue = GG_DATA_DEFAULT_MOVE_FATIGUE;
            
            army[i].unit[unit_number].x = temp_position.x;
            army[i].unit[unit_number].y = temp_position.y;
            army[i].unit[unit_number].status = GG_DATA_STATUS_NOT_ACTION;
            army[i].unit[unit_number].add_area_point = GG_DATA_DEFAULT_ADD_AREA_POINT;
            // status change
            //if (army[i].unit[unit_number].attack_type == GG_DATA_ATTACK_TYPE_HARP ||
            //    army[i].unit[unit_number].attack_type == GG_DATA_ATTACK_TYPE_BELL ||
            //    army[i].unit[unit_number].attack_type == GG_DATA_ATTACK_TYPE_RUTE ||
            //    army[i].unit[unit_number].attack_type == GG_DATA_ATTACK_TYPE_TRUMPET) {
            //    army[i].unit[unit_number].status_change_number = GG_DATA_DEFAULT_STATUS_CHANGE_NUMBER;
            //} else {
            //    army[i].unit[unit_number].status_change_number = 0;
            //}
            army[i].unit[unit_number].status_changed       = GG_DATA_STATUS_CHANGE_NONE;

            // TEAM
            army[i].unit[unit_number].small_recovery          += GG_DATA_TEAM[army[i].color].small_recovery;
            army[i].unit[unit_number].big_recovery          += GG_DATA_TEAM[army[i].color].big_recovery;
            army[i].unit[unit_number].attack_point      += GG_DATA_TEAM[army[i].color].attack_point;

            army[i].unit[unit_number].defence_point     += GG_DATA_TEAM[army[i].color].defence_point;
            if (army[i].unit[unit_number].defence_point < 0) {
                army[i].unit[unit_number].defence_point = 0;
            }
            army[i].unit[unit_number].move_point        += GG_DATA_TEAM[army[i].color].move_point;
            if (army[i].unit[unit_number].move_point < 2) {
                army[i].unit[unit_number].move_point = 2;
            } else if (army[i].unit[unit_number].move_point > 10) {
                army[i].unit[unit_number].move_point = 10;
            }
            

            army[i].unit[unit_number].recover_fatigue   += GG_DATA_TEAM[army[i].color].recover_fatigue;
            army[i].unit[unit_number].attack_fatigue    += GG_DATA_TEAM[army[i].color].attack_fatigue;
            if (army[i].unit[unit_number].defence_fatigue != 0) {
                army[i].unit[unit_number].defence_fatigue      += GG_DATA_TEAM[army[i].color].defence_fatigue;
            }
            army[i].unit[unit_number].move_fatigue      += GG_DATA_TEAM[army[i].color].move_fatigue;
            army[i].unit[unit_number].add_area_point += GG_DATA_TEAM[army[i].color].add_area_point;
            //if (army[i].unit[unit_number].status_change_number > 0) {
            //    army[i].unit[unit_number].status_change_number += GG_DATA_TEAM[army[i].color].status_change_number;
            //}


            //animation_obj.list.push({army_number: i, unit_number:unit_number, kind: GG_DATA_ANIMATION_FADE_UNIT});
            animation_obj.push({army_number: i,
                                unit_number:unit_number,
                                group: GG_DATA_ANIMATION_ETC_FADE_UNIT,
                                x: army[i].unit[unit_number].x, y: army[i].unit[unit_number].y,
                                color: army[i].color, type: army[i].unit[unit_number].type
                               });

            //
            if (exp != 0) {
                for (var k = army[i].unit[unit_number].level + 1; k < gg.controller.data.exp_array.length; k++) {
                    if (army[i].unit[unit_number].exp >= gg.controller.data.exp_array[k]) {
                        army[i].unit[unit_number].level = k;
                        var level_up_array = GG_DATA_LEVEL_UP_TEAM_ARRAY[army[i].color];
                        
                        level_up_check = true;
                        army[i].unit[unit_number].hitpoint     += GG_DATA_LEVEL_UP_ADD_HITPOINT_POINT;
                        army[i].unit[unit_number].max_hitpoint += GG_DATA_LEVEL_UP_ADD_HITPOINT_POINT;
                        army[i].create_uinit_all_hitpoint      += GG_DATA_LEVEL_UP_ADD_HITPOINT_POINT;
                        if (gg.controller.data.level_up == GG_DATA_LEVEL_UP_ARRAY[1]) {
                            army[i].unit[unit_number].hitpoint += GG_DATA_LEVEL_UP_ADD_HITPOINT_POINT;
                            army[i].unit[unit_number].max_hitpoint += GG_DATA_LEVEL_UP_ADD_HITPOINT_POINT;
                            army[i].create_uinit_all_hitpoint      += GG_DATA_LEVEL_UP_ADD_HITPOINT_POINT;
                            continue;
                        }

                        if (level_up_array[k] == GG_DATA_LEVEL_UP_ATTACK) {
                            army[i].unit[unit_number].attack_point += GG_DATA_LEVEL_UP_ADD_ATTACK_POINT;

                        } else if (level_up_array[k] == GG_DATA_LEVEL_UP_RECOVERY) {
                            army[i].unit[unit_number].small_recovery += GG_DATA_LEVEL_UP_ADD_MY_RECOVERY;
                            army[i].unit[unit_number].big_recovery += GG_DATA_LEVEL_UP_ADD_RECOVERY;
                            
                        } else if (level_up_array[k] == GG_DATA_LEVEL_UP_DEFENCE) {
                            army[i].unit[unit_number].defence_point += GG_DATA_LEVEL_UP_ADD_DEFENCE;
                            
                        } else if (level_up_array[k] == GG_DATA_LEVEL_UP_MOVE &&
                                   army[i].unit[unit_number].move_point < 10) {
                            army[i].unit[unit_number].move_point += GG_DATA_LEVEL_UP_ADD_MOVE_POINT;
                            
                        } else if (level_up_array[k] == GG_DATA_LEVEL_UP_FATIGUE) {
                            army[i].unit[unit_number].recover_fatigue += GG_DATA_LEVEL_UP_ADD_FATIGUE;

                        } else if (level_up_array[k] == GG_DATA_LEVEL_UP_AREA_POINT) {
                            army[i].unit[unit_number].add_area_point += GG_DATA_LEVEL_UP_ADD_AREA_POINT;

                        //} else if (level_up_array[k] == GG_DATA_LEVEL_UP_STATUS_CHANGE_NUMBER &&
                        //           army[i].unit[unit_number].status_change_number != 0) {
                        //    army[i].unit[unit_number].status_change_number += 1;
                        } else {
                            army[i].unit[unit_number].hitpoint     += GG_DATA_LEVEL_UP_ADD_HITPOINT_POINT;
                            army[i].unit[unit_number].max_hitpoint += GG_DATA_LEVEL_UP_ADD_HITPOINT_POINT;
                            army[i].create_uinit_all_hitpoint      += GG_DATA_LEVEL_UP_ADD_HITPOINT_POINT;
                        }
                    } else {
                        break;
                    }
                }
            }
            
            //army[i].unit_create_oder++;
            army[i].area_point -= create_value;
            //gg.controller.data.history_unit.push({
            //        army_number: i, unit_number: unit_number,
            //        color: army[i].color, turn:gg.controller.data.turn,
            //        level: army[i].unit[unit_number].level + 1,
            //        type: army[i].unit[unit_number].type,
            //        status: GG_DATA_HISTORY_STATUS_CREATE
            //    });

        }
    }
    for (var i = 0; i < army.length; i++) {
      
        if (army[i].area_point < -999) {
          temp_str = '-999';
        } else if (army[i].area_point < -99) {
          temp_str = '-' + (army[i].area_point * -1);
        } else if (army[i].area_point < -9) {
          temp_str = '-0' + (army[i].area_point * -1);
        } else if (army[i].area_point < 0) {
          temp_str = '-00' + (army[i].area_point * -1);
        } else if (army[i].area_point < 10) {
          temp_str = '000' + army[i].area_point;
        } else if (army[i].area_point < 100) {
          temp_str = '00' + army[i].area_point;
        } else if (army[i].area_point < 1000) {
          temp_str = '0' + army[i].area_point;
        } else if (army[i].area_point < 10000) {
          temp_str = army[i].area_point;
        } else {
          temp_str = '9999';
        }
        document.getElementById('army_' + i + '_area_point').innerHTML = "<i class='fa fa-university'></i>&nbsp;" + temp_str;
        temp_str = '';
        if (castle_numbers[i] < 10) {
          temp_str += '0' + castle_numbers[i];
        } else if (castle_numbers[i] < 100) {
          temp_str += castle_numbers[i];
        } else {
          temp_str += '99';
        }
        document.getElementById('army_' + i + '_castle').innerHTML = "<i class='fa fa-fort-awesome'></i>&nbsp;" + temp_str;
        //document.getElementById('army_' + i + '_next_unit').innerHTML = GG_DATA_CHAR_BIG_STR[army[i].unit_create_oder];
    }
    
    var zoom = gg.controller.data.zoom;
    var callback = gg.controller.phase_interval;
    gg.controller.data.next_phase = GG_CONTROLLER_NEXT_PHASE_WIN;
    //if (gg.controller.data.team_recovery_array.length != 0) {
    //    callback = gg.controller.team_recovery;
    //}
    if (animation_obj.length == 0) {
        gg.animation.set_etc_animation2(map, army, [], zoom, callback, 0, area_map, [], 0, true, false);
    } else {
        gg.controller.data.animation_obj = animation_obj;
        if (gg.controller.data.create_unit.length == 0) {
            gg.animation.set_etc_animation2(map, army, animation_obj, zoom, callback, GG_DATA_ANIMATION_RISE, area_map, [], 0, true, false);
            //gg.animation.set_move_animation2(map, army, animation_obj, zoom, callback, area_map, [], true);        

        } else {
            // info set & user callback
            // TODO army without create_unit
            for (var k = 0; k < gg.controller.data.create_unit.length; k++) {
                temp_army[gg.controller.data.create_unit[k].army_number].unit.splice(gg.controller.data.create_unit[k].unit_number, 1);
            }
            gg.controller_user.dialog_create_unit(gg.controller.data.create_unit[0].army_number,
                                              gg.controller.data.create_unit[0].unit_number,
                                              temp_army,
                                              gg.controller.data.map,
                                              gg.controller.data.area_map,
                                              gg.controller.set_create_unit_position,
                                              gg.controller.data.create_unit[0].type,
                                              gg.controller.data.zoom,
                                              gg.controller.data.create_unit[0].select_map);

        }
    }
};

//
gg.controller.set_create_unit_position = function(army_number, unit_number, x, y) {
    var army = gg.controller.data.army;
    // set data
    army[army_number].unit[unit_number].x = x;    
    army[army_number].unit[unit_number].y = y;    
    for (var i = 0; i < gg.controller.data.animation_obj.length; i++) {
        if (gg.controller.data.animation_obj[i].army_number == army_number &&
            gg.controller.data.animation_obj[i].unit_number == unit_number) {
            gg.controller.data.animation_obj[i].x = x;
            gg.controller.data.animation_obj[i].y = y;
            break;
        }
    }
    
    var counter = -1;
    for (var i = 0; i < gg.controller.data.create_unit.length; i++) {
        if (gg.controller.data.create_unit[i].army_number == army_number) {
            counter = i;
            break;
        }
    }
    // animation
    if (counter == gg.controller.data.create_unit.length - 1) {
        //gg.animation.set_move_animation(gg.controller.data.map, gg.controller.data.army, gg.controller.data.animation_obj,
        //                                 gg.controller.data.zoom, gg.controller.check_win_or_lost, gg.controller.data.area_map, [], true);        
        //gg.animation.set_move_animation2(gg.controller.data.map, gg.controller.data.army, gg.controller.data.animation_obj,
        //                                 gg.controller.data.zoom, gg.controller.check_win_or_lost, gg.controller.data.area_map, [], true);
        gg.controller.data.next_phase = GG_CONTROLLER_NEXT_PHASE_WIN;

        
        gg.animation.set_etc_animation2(gg.controller.data.map, gg.controller.data.army,
                                        gg.controller.data.animation_obj, gg.controller.data.zoom, gg.controller.phase_interval,
                                        GG_DATA_ANIMATION_RISE, gg.controller.data.area_map, [], 0, true, false);

        //gg.animation.set_move_animation2(gg.controller.data.map, gg.controller.data.army, gg.controller.data.animation_obj,
        //                                 gg.controller.data.zoom, gg.controller.phase_interval, gg.controller.data.area_map, [], true);        
        
    } else {
        // user call
        var temp_army = JSON.parse(JSON.stringify(gg.controller.data.army));
        for (var k = counter + 1; k < gg.controller.data.create_unit.length; k++) {
            temp_army[gg.controller.data.create_unit[k].army_number].unit.splice(gg.controller.data.create_unit[k].unit_number, 1);
        }
        gg.controller_user.dialog_create_unit(gg.controller.data.create_unit[i].army_number,
                                              gg.controller.data.create_unit[i].unit_number, temp_army, gg.controller.data.map,
                                              gg.controller.data.area_map,
                                              gg.controller.set_create_unit_position,
                                              gg.controller.data.create_unit[i].type,
                                              gg.controller.data.zoom,
                                              gg.controller.data.create_unit[i].select_map);
        
    }    
};

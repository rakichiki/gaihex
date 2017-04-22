gg.animation.stop_replay = function() {
    gg.animation.data.replay_flag = false;
};

gg.animation.set_timeout = function(timeout) {
    gg.animation.data.timeout_1 = timeout;
    gg.animation.data.timeout_4 = timeout * 2;
    gg.animation.data.timeout_5 = timeout;
};

gg.animation.get_timeout = function() {
    return gg.animation.data.timeout_1;
};

gg.animation.init_timeout = function() {
    gg.animation.data.timeout_1 = GG_DATA_ANIMATION_TIMEOUT_NORMAL;
    gg.animation.data.timeout_4 = GG_DATA_ANIMATION_TIMEOUT_NORMAL * 2;
    gg.animation.data.timeout_5 = GG_DATA_ANIMATION_TIMEOUT_NORMAL;
};

gg.animation.cancel_replay = function() {
    //console.log('aa');
    gg.animation.data.replay.splice(gg.animation.data.replay.length - 1, 1);    
};

gg.animation.start_replay = function(callback) {
    gg.animation.data.replay_callback = callback;
    gg.animation.data.replay_count = 0;
    gg.animation.data.replay_flag = true;
    var replay = gg.animation.data.replay[gg.animation.data.replay_count];
    if (replay.id == GG_ANIMATION_ID_UNIT) {
        gg.animation.set_unit(replay.map, replay.army, replay.zoom, gg.animation.next_replay,
                               replay.area_map, replay.select_map, replay.select_map_number, false);

    } else if (replay.id == GG_ANIMATION_ID_ATTACK) {
        gg.animation.set_attack_animation(replay.map, replay.army, replay.animation_obj, replay.zoom, gg.animation.next_replay,
                                           replay.area_map, replay.select_map,  false);

    } else if (replay.id == GG_ANIMATION_ID_MOVE) {
        gg.animation.set_move_animation(replay.map, replay.army, replay.animation_obj, replay.zoom,
                                         gg.animation.next_replay, replay.area_map, replay.select_map, false);
    } else if (replay.id == GG_ANIMATION_ID_ETC) {
        gg.animation.set_etc_animation(replay.map, replay.army, replay.animation_obj, replay.zoom,
                                       gg.animation.next_replay, replay.bin, replay.area_map, replay.select_map, false);
    } else if (replay.id == GG_ANIMATION_ID_DATA) {
            gg.animation.set_info(replay.turn, replay.army, gg.animation.next_replay);
    }
    
};

gg.animation.next_replay = function() {
    gg.animation.data.replay_count++;
    if (gg.animation.data.replay_count >= gg.animation.data.replay.length ||
        gg.animation.data.replay_flag == false) {
        //console.log("a");
        gg.animation.data.replay_callback();
        //gg.menu.view_end_menu(null);
    } else {
        var replay = gg.animation.data.replay[gg.animation.data.replay_count];
        if (replay.id == GG_ANIMATION_ID_UNIT) {
            gg.animation.set_unit(replay.map, replay.army, replay.zoom, gg.animation.next_replay,
                                   replay.area_map, replay.select_map, replay.select_map_number, false);
        } else if (replay.id == GG_ANIMATION_ID_ATTACK) {
            gg.animation.set_attack_animation(replay.map, replay.army, replay.animation_obj, replay.zoom, gg.animation.next_replay,
                                           replay.area_map, replay.select_map,  false);

        } else if (replay.id == GG_ANIMATION_ID_MOVE) {
            gg.animation.set_move_animation(replay.map, replay.army, replay.animation_obj, replay.zoom,
                                             gg.animation.next_replay, replay.area_map, replay.select_map, false);
        } else if (replay.id == GG_ANIMATION_ID_ETC) {
            gg.animation.set_etc_animation(replay.map, replay.army, replay.animation_obj, replay.zoom,
                                           gg.animation.next_replay, replay.bin, replay.area_map, replay.select_map, false);

        } else if (replay.id == GG_ANIMATION_ID_DATA) {
            gg.animation.set_info(replay.turn, replay.army, gg.animation.next_replay);
        }
    }
};


gg.animation.clear_replay = function() {
    gg.animation.data.replay_count = 0;
    gg.animation.data.replay = []
};

////////////
gg.animation.set_data = function(turn, army) {
    gg.animation.data.replay.push(JSON.parse(JSON.stringify({turn: turn, army: army, id:GG_ANIMATION_ID_DATA})));
};

gg.animation.set_info = function(turn, army, callback) {
    //
    document.getElementById('turn_info').innerHTML = turn;
    if (army != null) {
        for (var i = 0;i < army.length; i++) {
            document.getElementById('army_' + i + '_sum_hitpoint').innerHTML = army[i].sum_hitpoint;
            document.getElementById('army_' + i + '_area_point').innerHTML = army[i].area_point;
        }
    }
    callback();

};

// new
//gg.animation.set_unit = function(map, army, zoom, callback, area_map, select_map, select_map_number, replay) {
gg.animation.set_etc_animation2 = function(map, army, animation_obj, zoom, callback,
                                           bin, area_map, select_map, select_map_number,
                                           replay, loop_flag, dialog, change_army) {

    if (replay == true) {
        //gg.animation.data.replay.push(JSON.parse(JSON.stringify({map: map, army:army, animation_obj: animation_obj,
        //                                                    bin: bin,
        //                                                    zoom:zoom, area_map: area_map,
        //                           select_map: select_map, select_map_number:null, id:GG_ANIMATION_ID_ETC})));
    }
    //
    gg.animation.data.callback = callback;
    if (dialog == null) {
        dialog = [];
    }
    
    var audio = null;
    var animation = [];
    var animation_units = new Array(map.length);
    var fix_units = new Array(map.length);
    var fix_numbers = new Array(map.length);
    var fix_select_maps = new Array(map.length);
    for (var i = 0; i < fix_units.length; i++) {
        fix_units[i] = [];
        fix_numbers[i] = [];
        fix_select_maps[i] = [];
        animation_units[i] = new Array(3);
        for (var j = 0; j < 3; j++) {
            animation_units[i][j] = [];
        }
    }
    var y_array = 0, i_amari = 0;
    
    var fix_number_animation_length = null;
    var image, vevtor;
    var army_number = animation_obj.army_number;
    var unit_number = animation_obj.unit_number;
    var vector, vector2, vector3;
    var fatigue_recover;
    var fatigue_turn;
    var color;
    var shadow, alpha, alpha2;
    var check2, check1, check3, recovery_flag, shanke_flag;
    var timeout = gg.animation.data.timeout_5;
    //var status_icon1 = null, status_icon2 = null, status_icon3 = null;
    var status_icons = [];
    var temp_x, temp_y;
    //
    for (var k = 0; k < select_map.length; k++) {
        fix_select_maps[select_map[k].y].push({x: select_map[k].x,
                                               army_color: select_map[k].army_color,
                                               id: select_map[k].id});
    }
    for (var k = 0; k < army.length; k++) {
        for (var l = 0; l < army[k].unit.length; l++) {
            check1 = true;
            check2 = false;
            check3 = false;
            shanke_flag = false;
            recovery_flag = false;
            for (var m = 0; m < animation_obj.length; m++){
                if (k != animation_obj[m].army_number || l != animation_obj[m].unit_number) {
                    continue;
                }
                if (animation_obj[m].group == GG_DATA_ANIMATION_ETC_JOB_CHANGE ||
                    animation_obj[m].group == GG_DATA_ANIMATION_ETC_TEAM_CHANGE ||
                    animation_obj[m].group == GG_DATA_ANIMATION_ETC_FADE_UNIT) {
                    check1 = false;
                    break;
                } else if (animation_obj[m].group == GG_DATA_ANIMATION_ETC_DAMAGE &&
                    animation_obj[m].damage > 0) {
                    check2 = true;
                    break;
                } else if (animation_obj[m].group == GG_DATA_ANIMATION_ETC_UNIT_RECOVER ||
                           animation_obj[m].group == GG_DATA_ANIMATION_ETC_UNIT_STATUS_CHANGE) {
                    shanke_flag = true;
                    if (animation_obj[m].group == GG_DATA_ANIMATION_ETC_UNIT_STATUS_CHANGE) {
                        audio = { turn:0, 
                                  sound: GG_DATA_SOUND_STATUS_UP};
                    } else if (animation_obj[m].group == GG_DATA_ANIMATION_ETC_UNIT_RECOVER) {
                        audio = { turn:0, 
                                  sound: GG_DATA_SOUND_RECOVERY};
                    }

                    break;
                } else if (animation_obj[m].group == GG_DATA_ANIMATION_ETC_RECOVER ||
                           animation_obj[m].group == GG_DATA_ANIMATION_ETC_TURN_END_RECOVER) {
                    check3 = true;
                    recovery_flag = true;
                    audio = {turn:0, 
                             sound: GG_DATA_SOUND_RECOVERY};
                    break;
                } else if (animation_obj[m].group == GG_DATA_ANIMATION_ETC_LEVEL_UP) {
                    audio = {turn:0, 
                             sound: GG_DATA_SOUND_LEVEL_UP};
                }
            }
            if (check1 == false) {
                continue;
            }
            
            image = GG_DATA_CHAR_STR[army[k].unit[l].type] + '_';
            vector = 0;
            if (shanke_flag == true) {
                image += 's7'
                if (army[k].unit[l].type != GG_DATA_UNIT_SHILED &&
                    army[k].unit[l].type != GG_DATA_UNIT_MACE &&
                    army[k].unit[l].type != GG_DATA_UNIT_MORNINGSTAR &&
                    army[k].unit[l].type != GG_DATA_UNIT_TAKT &&
                    army[k].unit[l].type != GG_DATA_UNIT_HARP &&
//                    army[k].unit[l].type != GG_DATA_UNIT_BELL &&
//                    army[k].unit[l].type != GG_DATA_UNIT_TRUMPET &&
                    army[k].unit[l].type != GG_DATA_UNIT_HOSPITAL) {

                    console.log('bug');
                    image = GG_DATA_CHAR_STR[army[k].unit[l].type] + '_s0';
                }
                //vector = 6;
            } else if (check3 == true) {
                image += 's5'
                //vector = 0;
                //vector = GG_VIEW_RECOVERY_ACTION;
            } else if (check2 == false) {
                if (army[k].unit[l].hitpoint > GG_DATA_LIFE_50) {
                    //image += 'm'
                    image += 's0'
                    //vector = GG_VIEW_FRONT_SAME;
                } else if (army[k].unit[l].hitpoint > GG_DATA_LIFE_20) {
                    //image += 's'
                    image += 's1'
                    //vector = GG_VIEW_STATUS_50;
                } else if (army[k].unit[l].hitpoint > GG_DATA_LIFE_0) {
                    //image += 's'
                    image += 's2'
                    //vector = GG_VIEW_STATUS_20;        
                } else  {
                    //image += 's'
                    image += 's3'
                    //vector = GG_VIEW_STATUS_00;
                }
            } else {
                image += 's4'
                //vector = 9;
            }
            shadow = true;
            if (area_map[army[k].unit[l].y][army[k].unit[l].x] > -1 ||
                map[army[k].unit[l].y][army[k].unit[l].x] == 0) {
                shadow = false;
            }
            
            
            //status_icon1 = null;
            //status_icon2 = null;
            //status_icon3 = null;
            status_icons = [];
            if (army[k].unit[l].status_changed == GG_DATA_STATUS_CHANGE_UP_ATTACK) {
                status_icons.push(GG_VIEW_STATUS_ATTACK_UP);
            } else if (army[k].unit[l].status_changed == GG_DATA_STATUS_CHANGE_DOWN_ATTACK) {
                status_icons.push(GG_VIEW_STATUS_ATTACK_DOWN);
            //} else if (army[k].unit[l].status_changed == GG_DATA_STATUS_CHANGE_UP_DEFENCE) {
            //    status_icons.push(GG_VIEW_STATUS_DEFENCE_UP);
            //} else if (army[k].unit[l].status_changed == GG_DATA_STATUS_CHANGE_UP_MOVE) {
            //    status_icons.push(GG_VIEW_STATUS_MOVE_UP);
            }

            if (army[k].unit[l].dead_count_down > 0) {
                //status_icon1 = army[k].unit[l].dead_count_down + GG_VIEW_STATUS_DEAD_COUNT_DOWN - 1;
                status_icons.push(army[k].unit[l].dead_count_down + GG_VIEW_STATUS_DEAD_COUNT_DOWN - 1);
            } else if (army[k].unit[l].fatigue > 0) {
                fatigue_recover = 1;
                if (map[army[k].unit[l].y][army[k].unit[l].x] == 0) {
                    fatigue_recover = 2;
                }
                //status_icon1 = 3 + GG_VIEW_STATUS_FATIGUE;
                fatigue_turn = army[k].unit[l].fatigue / (army[k].unit[l].recover_fatigue * fatigue_recover);
                if (fatigue_turn <= 1) {
                    //status_icon1 = 0 + GG_VIEW_STATUS_FATIGUE;
                    status_icons.push(0 + GG_VIEW_STATUS_FATIGUE);
                } else if (fatigue_turn <= 4) {
                    //status_icon1 = 1 + GG_VIEW_STATUS_FATIGUE;
                    status_icons.push(1 + GG_VIEW_STATUS_FATIGUE);
                } else if (fatigue_turn <= 9) {
                    //status_icon1 = 2 + GG_VIEW_STATUS_FATIGUE;
                    status_icons.push(2 + GG_VIEW_STATUS_FATIGUE);
                } else {
                    status_icons.push(3 + GG_VIEW_STATUS_FATIGUE);

                }
            } else if (army[k].unit[l].recovery_turn_flag == GG_DATA_AUTO_RECOVERY_ON) {                
                if (army[k].unit[l].defence_type != GG_DATA_DEFENCE_TYPE_NORMAL) {
                    //status_icons.push(GG_VIEW_STATUS_PASSIVE);
                }
                status_icons.push(GG_VIEW_STATUS_RECOVERY);

            } else if (army[k].unit[l].defence_type != GG_DATA_DEFENCE_TYPE_NORMAL) {
                //status_icon1 = GG_VIEW_STATUS_PASSIVE;
                //status_icons.push(GG_VIEW_STATUS_PASSIVE);
            }
            if (army[k].unit[l].class_down_flag == true) {
                status_icons.push(GG_VIEW_STATUS_CLASS_DOWN);
            }
            
            temp_x = army[k].unit[l].x;
            temp_y = army[k].unit[l].y;
            if (change_army != undefined && change_army.length != 0) {
                if (k == change_army[0].army_number &&
                    l == change_army[0].unit_number) {
                    temp_x = change_army[0].x;
                    temp_y = change_army[0].y;
                }
            }
            fix_units[temp_y].push({
                                  map_x: temp_x, //map_y: army[k].unit[l].y,
                                  hitpoint: army[k].unit[l].hitpoint,
                                  level: army[k].unit[l].level,
                                  vector: vector,
                                  image: image,
                                  kind: GG_VIEW_UNIT,
                                  shadow: shadow,
                                  color: army[k].color,
                                  status_icons: status_icons,
                                  shanke_flag:  shanke_flag,
                                  recovery_flag: recovery_flag,
                                  audio: audio
            });
        }
    }
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    var number_check = true; 
    for (var l = 0; l < animation_obj.length; l++) {
        if (animation_obj[l].group != GG_DATA_ANIMATION_ETC_ADD_AREA_POINT &&
            animation_obj[l].group != GG_DATA_ANIMATION_ETC_DELETE_AREA_POINT && 
            animation_obj[l].group != GG_DATA_ANIMATION_ETC_DAMAGE &&
            animation_obj[l].group != GG_DATA_ANIMATION_ETC_TURN_END_RECOVER &&
            animation_obj[l].group != GG_DATA_ANIMATION_ETC_RECOVER &&
            animation_obj[l].group != GG_DATA_ANIMATION_ETC_RESCUE &&
            animation_obj[l].group != GG_DATA_ANIMATION_ETC_UNIT_RECOVER &&
            animation_obj[l].group != GG_DATA_ANIMATION_ETC_UNIT_STATUS_CHANGE &&
            animation_obj[l].group != GG_DATA_ANIMATION_ETC_STATUS_CHANGE &&
            animation_obj[l].group != GG_DATA_ANIMATION_ETC_LEVEL_UP) {
            number_check = false;
            break;
        }        
    }
    if (number_check == true) {
        fix_number_animation_length = bin;
        for (var l = 0; l < animation_obj.length; l++) {
            if (animation_obj[l].group == GG_DATA_ANIMATION_ETC_ADD_AREA_POINT ||
                animation_obj[l].group == GG_DATA_ANIMATION_ETC_DELETE_AREA_POINT) {

                vector = 0;                
                if (animation_obj[l].group == GG_DATA_ANIMATION_ETC_ADD_AREA_POINT){
                    //if (animation_obj[l].area_point < 6) {
                    //    image = 'areapointup_00';
                    //    vector = animation_obj[l].area_point - 1;
                    //} else {
                    //    image = 'areapointup_01';
                    //    vector = animation_obj[l].area_point - 5;
                    //}
                    vector = 0;
                    if (animation_obj[l].area_point == 2) {
                        image = 'areapointup_01';
                    } else if (animation_obj[l].area_point == 3) {
                        image = 'areapointup_02';
                    } else if (animation_obj[l].area_point == 4) {
                        image = 'areapointup_03';
                    } else if (animation_obj[l].area_point == 5) {
                        image = 'areapointup_04';
                    } else if (animation_obj[l].area_point == 6) {
                        image = 'areapointup_05';
                    } else if (animation_obj[l].area_point == 7) {
                        image = 'areapointup_06';
                    } else {
                        image = 'areapointup_06';                        
                    }
                    
                } else if (animation_obj[l].group == GG_DATA_ANIMATION_ETC_DELETE_AREA_POINT) {
                    if (animation_obj[l].area_point == 10) {
                        image = 'areapointdown_01';
                    } else if (animation_obj[l].area_point == 15) {
                        image = 'areapointdown_02';
                    } else if (animation_obj[l].area_point == 20) {
                        image = 'areapointdown_03';
                    } else if (animation_obj[l].area_point == 25) {
                        image = 'areapointdown_04';
                    } else if (animation_obj[l].area_point == 30) {
                        image = 'areapointdown_05';
                    } else if (animation_obj[l].area_point == 35) {
                        image = 'areapointdown_06';
                    } else if (animation_obj[l].area_point == 40) {
                        image = 'areapointdown_07';
                    } else if (animation_obj[l].area_point == 50) {
                        image = 'areapointdown_09';
                    } else if (animation_obj[l].area_point == 60) {
                        image = 'areapointdown_11';
                    } else if (animation_obj[l].area_point == 70) {
                        image = 'areapointdown_13';
                    }
                    vector = 0;

                    //if (animation_obj[l].area_point / 5 < 6) {
                    //    image = 'areapointdown_00';
                    //    vector = animation_obj[l].area_point / 5 - 1;
                    //} else if (animation_obj[l].area_point / 5 < 11) {
                    //    image = 'areapointdown_01';
                    //    vector = animation_obj[l].area_point / 5 - 6;
                    //} else {
                    //    image = 'areapointdown_02';
                    //    vector = animation_obj[l].area_point / 5 - 11;
                    //}
                }
                if (vector > 4) {
                    console.log('vector:' + vector);
                }
                        
                fix_numbers[animation_obj[l].y].push({map_x: animation_obj[l].x,
                                  image: image,
                                  vector: vector,
                                  kind: GG_VIEW_ETC_LINE,
                                  size: GG_VIEW_IMAGE_SIZE_TOP_HALF,
                                  shake: GG_VIEW_SHAKE_UPDOWN});
                
            } else if (animation_obj[l].group == GG_DATA_ANIMATION_ETC_LEVEL_UP) {
    
                //fix_numbers[animation_obj[l].y].push({map_x: animation_obj[l].x,
                //                  image: 'effect',
                //                  vector: GG_VIEW_EFFECT_LEVELUP_1,
                //                  kind: GG_VIEW_ETC,
                //                  size: GG_VIEW_IMAGE_SIZE_FULL,
                //                  shake: GG_VIEW_SHAKE_NO});
                        
                ////
                vector = 0;
                if (animation_obj[l].level == 1) {
                    image = 'level_01';
                } else if (animation_obj[l].level == 2) {
                    image = 'level_02';
                } else if (animation_obj[l].level == 3) {
                    image = 'level_03';
                } else if (animation_obj[l].level == 4) {
                    image = 'level_04';
                } else if (animation_obj[l].level == 5) {
                    image = 'level_05';
                } else if (animation_obj[l].level == 6) {
                    image = 'level_06';
                } else if (animation_obj[l].level == 7) {
                    image = 'level_07';
                } else if (animation_obj[l].level == 8) {
                    image = 'level_08';
                } else if (animation_obj[l].level == 9) {
                    image = 'level_09';
                } else if (animation_obj[l].level == 10) {
                    image = 'level_10';
                } else if (animation_obj[l].level == 11) {
                    image = 'level_11';
                } else if (animation_obj[l].level == 12) {
                    image = 'level_12';
                } else if (animation_obj[l].level == 13) {
                    image = 'level_13';
                } else if (animation_obj[l].level == 14) {
                    image = 'level_14';
                }
                //if (animation_obj[l].level < 5) {
                //    image = 'level_00';
                //    vector = animation_obj[l].level;
                //} else if (animation_obj[l].level < 10) {
                //    image = 'level_01';
                //    vector = animation_obj[l].level - 5;
                //} else {
                //    image = 'level_02';
                //    vector = animation_obj[l].level - 10;
                //}
                if (vector > 4) {
                    console.log('vector:' + vector);
                }
                fix_numbers[animation_obj[l].y].push({map_x: animation_obj[l].x,
                                  image: image,
                                  vector: vector,
                                  kind: GG_VIEW_ETC_LINE,
                                  size: GG_VIEW_IMAGE_SIZE_TOP_HALF,
                                  shake: GG_VIEW_SHAKE_UPDOWN});
            } else if (animation_obj[l].group == GG_DATA_ANIMATION_ETC_TURN_END_RECOVER ||
                       animation_obj[l].group == GG_DATA_ANIMATION_ETC_RECOVER ||
                       animation_obj[l].group == GG_DATA_ANIMATION_ETC_RESCUE) {
                //if (animation_obj[l].group == GG_DATA_ANIMATION_ETC_RECOVER) {
                //    fix_numbers[animation_obj[l].y].push({map_x: animation_obj[l].x,
                //                      image: 'effect',
                //                      vector: GG_VIEW_EFFECT_HITPOINT_1,
                //                      kind: GG_VIEW_ETC,
                //                      size: GG_VIEW_IMAGE_SIZE_FULL,
                //                      shake: GG_VIEW_SHAKE_NO});
                //}
                vector = 0;
                if (animation_obj[l].recovery == 1) {
                    image = 'recovery_00';
                } else if (animation_obj[l].recovery == 2) {
                    image = 'recovery_01';
                } else if (animation_obj[l].recovery == 3) {
                    image = 'recovery_02';
                } else if (animation_obj[l].recovery == 4) {
                    image = 'recovery_03';
                } else if (animation_obj[l].recovery == 5) {
                    image = 'recovery_04';
                } else if (animation_obj[l].recovery == 6) {
                    image = 'recovery_05';
                } else if (animation_obj[l].recovery == 7) {
                    image = 'recovery_06';
                } else if (animation_obj[l].recovery == 8) {
                    image = 'recovery_07';
                } else if (animation_obj[l].recovery == 9) {
                    image = 'recovery_08';
                } else if (animation_obj[l].recovery == 10) {
                    image = 'recovery_09';
                } else if (animation_obj[l].recovery == 11) {
                    image = 'recovery_10';
                } else if (animation_obj[l].recovery == 12) {
                    image = 'recovery_11';
                } else if (animation_obj[l].recovery == 13) {
                    image = 'recovery_12';
                } else if (animation_obj[l].recovery == 14) {
                    image = 'recovery_13';
                } else if (animation_obj[l].recovery == 15) {
                    image = 'recovery_14';
                } else if (animation_obj[l].recovery == 16) {
                    image = 'recovery_15';
                } else if (animation_obj[l].recovery == 17) {
                    image = 'recovery_16';
                } else if (animation_obj[l].recovery == 18) {
                    image = 'recovery_17';
                } else if (animation_obj[l].recovery == 19) {
                    image = 'recovery_18';
                } else if (animation_obj[l].recovery == 20) {
                    image = 'recovery_19';
                } else if (animation_obj[l].recovery == 21) {
                    image = 'recovery_20';
                } else if (animation_obj[l].recovery == 22) {
                    image = 'recovery_21';
                } else if (animation_obj[l].recovery == 23) {
                    image = 'recovery_22';
                } else if (animation_obj[l].recovery == 24) {
                    image = 'recovery_23';
                } else if (animation_obj[l].recovery == 25) {
                    image = 'recovery_24';
                } else if (animation_obj[l].recovery == 26) {
                    image = 'recovery_25';
                } else if (animation_obj[l].recovery == 27) {
                    image = 'recovery_26';
                } else if (animation_obj[l].recovery == 28) {
                    image = 'recovery_27';
                } else if (animation_obj[l].recovery == 29) {
                    image = 'recovery_28';
                } else if (animation_obj[l].recovery == 30) {
                    image = 'recovery_29';
                } else if (animation_obj[l].recovery == 31) {
                    image = 'recovery_30';
                }
                    

                //if (animation_obj[l].recovery < 6) {
                //    image = 'recovery_00';
                //    vector = animation_obj[l].recovery - 1;
                    
                //} else if (animation_obj[l].recovery < 11) {
                //    image = 'recovery_01';
                //    vector = animation_obj[l].recovery - 6;
                    
                //} else if (animation_obj[l].recovery < 16) {
                //    image = 'recovery_02';
                //    vector = animation_obj[l].recovery - 11;
                    
                //} else if (animation_obj[l].recovery < 21) {
                //    image = 'recovery_03';
                //    vector = animation_obj[l].recovery - 16;
                    
                //} else if (animation_obj[l].recovery < 26) {
                //    image = 'recovery_04';
                //    vector = animation_obj[l].recovery - 21;
                    
                //} else {
                //    image = 'recovery_05';
                //    vector = animation_obj[l].recovery - 26;
                //}
                if (vector > 4) {
                    console.log('vector:' + vector);
                }
                fix_numbers[animation_obj[l].y].push({map_x: animation_obj[l].x,
                                  image: image,
                                  vector: vector,
                                  kind: GG_VIEW_ETC_LINE,
                                  size: GG_VIEW_IMAGE_SIZE_TOP_HALF,
                                  shake: GG_VIEW_SHAKE_UPDOWN});
            } else if (animation_obj[l].group == GG_DATA_ANIMATION_ETC_STATUS_CHANGE) {

                //vector = animation_obj[l].status_changed - 1;
                vector = 0;
                //if (animation_obj[l].status_changed == GG_DATA_STATUS_CHANGE_UP_DEFENCE) {
                //    vector = 1;
                //} else if (animation_obj[l].status_changed == GG_DATA_STATUS_CHANGE_UP_MOVE) {
                //    vector = 2;
                //}
                if (animation_obj[l].status_changed == GG_DATA_STATUS_CHANGE_UP_ATTACK) {
                    var temp_shake = GG_VIEW_SHAKE_UPDOWN;
                } else if (animation_obj[l].status_changed == GG_DATA_STATUS_CHANGE_DOWN_ATTACK) {
                    var temp_shake = GG_VIEW_SHAKE_LEFTRIGHT;
                }
                fix_numbers[animation_obj[l].y].push({map_x: animation_obj[l].x,
                                  image: 'status_change_0' + (animation_obj[l].status_changed - 1),
                                  vector: vector,
                                  kind: GG_VIEW_ETC_LINE,
                                  size: GG_VIEW_IMAGE_SIZE_TOP_HALF,
                                  shake: temp_shake});
                        
            } else if (animation_obj[l].group == GG_DATA_ANIMATION_ETC_DAMAGE) {
    
                vector = 0;
                if (animation_obj[l].damage < 10) {
                    image = 'damage_0' + animation_obj[l].damage;
                } else {
                    image = 'damage_' + animation_obj[l].damage;
                }
                var second_damage = null;
                if (animation_obj[l].second_damage != undefined) {
                    if (animation_obj[l].second_damage < 10) {
                        second_damage = 'damage_0' + animation_obj[l].second_damage;
                    } else {
                        second_damage = 'damage_' + animation_obj[l].second_damage;
                    }
                }
                //if (vector > 4) {
                //    console.log('vector:' + vector);
                //}
                fix_numbers[animation_obj[l].y].push({map_x: animation_obj[l].x,
                                  image: image,
                                  vector: vector,
                                  kind: GG_VIEW_ETC_LINE,
                                  size: GG_VIEW_IMAGE_SIZE_TOP_HALF,
                                  shake: GG_VIEW_SHAKE_LEFTRIGHT,
                                  second_damage: second_damage});
            }
        }

    } else {
        for (var j = 0; j < bin; j++) {
            animation_units = new Array(map.length);;
            for (var i = 0; i < animation_units.length; i++) {
                animation_units[i] = new Array(3);
                for (var k = 0; k < 3; k++) {
                    animation_units[i][k] = [];
                }
            }

            //animation[animation.length] = {}
            //animation_units = []
            ////
            ////////////
            for (var l = 0; l < animation_obj.length; l++) {
                var add_y = 0;
                var add_x = 0;
    

                if (animation_obj[l].group == GG_DATA_ANIMATION_ETC_JOB_CHANGE ||
                           animation_obj[l].group == GG_DATA_ANIMATION_ETC_TEAM_CHANGE) {
                    audio = { turn:0, 
                                  sound:GG_DATA_SOUND_CLASS_CHANGE};
    
                    vector3 = null;
                    //if (animation_obj[l].group == GG_DATA_ANIMATION_ETC_JOB_CHANGE) {
                    //    if (j % 4 == 0) {
                    //        vector3 = GG_VIEW_EFFECT_JOBCHANGE_1;
                    //    } else if (j % 4 == 1 || j % 4 == 3) {
                    //        vector3 = GG_VIEW_EFFECT_JOBCHANGE_2;
                    //    } else if (j % 4 == 2) {
                    //        vector3 = GG_VIEW_EFFECT_JOBCHANGE_3;
                    //    }
                    //}
                    
                    if (animation_obj[l].before_color != null) {
                        color = animation_obj[l].before_color;
                    } else {
                        color = army[animation_obj[l].army_number].color;
                    }
                    shadow = true;
                    if (area_map[animation_obj[l].y][animation_obj[l].x] >= 0) {
                        shadow = false;
                    }
                    if (map[animation_obj[l].y][animation_obj[l].x] == 0) {
                        shadow = false;
                    }
    
                    if (j < bin / 12 * 4) {
                        alpha = 1 - j / (bin / 6 * 2);
                        alpha_2 = 1 - alpha;
                        if (alpha_2 > 0.6) {
                            alpha_2 = 0.6;
                        }
                        if (alpha < 0 || alpha_2 < 0) {
                            console.log('ng');
                        }
                        
                        if (animation_obj[l].group == GG_DATA_ANIMATION_ETC_JOB_CHANGE) {
                            //image = GG_DATA_CHAR_STR[animation_obj[l].job_change_before_type] + '_m';
                            //vector = GG_VIEW_FRONT_SAME;
                            image = GG_DATA_CHAR_STR[animation_obj[l].job_change_before_type] + '_s0';
                            vector = 0;
                            
                        } else if (animation_obj[l].group == GG_DATA_ANIMATION_ETC_TEAM_CHANGE) {
                            //image = GG_DATA_CHAR_STR[animation_obj[l].job_change_before_type] + '_s';
                            //vector = GG_VIEW_STATUS_00;
                            image = GG_DATA_CHAR_STR[animation_obj[l].job_change_before_type] + '_s3';
                            vector = 0;
                        }
                        animation_units[animation_obj[l].y][1].push({x: animation_obj[l].x, y: animation_obj[l].y, 
                                              map_x: animation_obj[l].x, map_y: animation_obj[l].y,
                                              vector: vector,
                                              image: image,
                                              alpha: alpha,
                                              kind: GG_VIEW_UNIT,
                                              color: color,
                                              shadow: shadow,
                                            });
                        
                        animation_units[animation_obj[l].y][1].push({x: animation_obj[l].x, y: animation_obj[l].y, 
                                              map_x:  animation_obj[l].x, map_y: animation_obj[l].y,
                                              vector: 0,
                                              //image:  GG_DATA_CHAR_STR[animation_obj[l].job_change_before_type] + '_s',
                                              image:  GG_DATA_CHAR_STR[animation_obj[l].job_change_before_type] + '_s6',
                                              alpha:  alpha_2,
                                              kind:   GG_VIEW_UNIT,
                                              shadow: false,
                                              //vector3: vector3
                                              });
    
                    } else if (j < bin / 12 * 8) {
                        alpha = 1 - (j - bin / 12 * 4) / (bin / 6 * 2);
                        alpha_2 = 1 - alpha;
                        if (alpha_2 > 0.8) {
                            alpha_2 = 0.8;
                        }
                        if (alpha > 0.6) {
                            alpha = 0.6;
                        }
                        if (alpha < 0 || alpha_2 < 0) {
                            console.log('ng');
                        }
    
                        animation_units[animation_obj[l].y][1].push({x: animation_obj[l].x, y: animation_obj[l].y, 
                                              map_x: animation_obj[l].x, map_y: animation_obj[l].y,
                                              //vector: GG_VIEW_WHITE,
                                              vector: 0,
                                              //image: GG_DATA_CHAR_STR[animation_obj[l].job_change_before_type] + '_s',
                                              image: GG_DATA_CHAR_STR[animation_obj[l].job_change_before_type] + '_s6',
                                              alpha: alpha,
                                              kind: GG_VIEW_UNIT,
                                              shadow: shadow});
    
                        animation_units[animation_obj[l].y][1].push({x: animation_obj[l].x, y: animation_obj[l].y, 
                                              map_x: animation_obj[l].x, map_y: animation_obj[l].y,
                                              //vector: GG_VIEW_WHITE,
                                              vector: 0,
                                              //image: GG_DATA_CHAR_STR[animation_obj[l].job_change_after_type] + '_s',
                                              image: GG_DATA_CHAR_STR[animation_obj[l].job_change_after_type] + '_s6',
                                              alpha: alpha_2,
                                              kind: GG_VIEW_UNIT,
                                              shadow: false,
                                              //vector3: vector3
                                              });
    
                    } else {
                        alpha = 1 - (j - bin / 12 * 8) / (bin / 6 * 2);
                        alpha_2 = 1 - alpha; 
                        if (alpha > 0.8) {
                            alpha = 0.8;
                        }
    
    
                        animation_units[animation_obj[l].y][1].push({x: animation_obj[l].x, y: animation_obj[l].y, 
                                              map_x: animation_obj[l].x, map_y: animation_obj[l].y,
                                              //vector: GG_VIEW_FRONT_SAME,
                                              //image: GG_DATA_CHAR_STR[animation_obj[l].job_change_after_type] + '_m',
                                              vector: 0,
                                              image: GG_DATA_CHAR_STR[animation_obj[l].job_change_after_type] + '_s0',
                                              alpha: alpha_2,
                                              kind: GG_VIEW_UNIT,
                                              color: army[animation_obj[l].army_number].color,
                                              shadow: shadow});
    
                        animation_units[animation_obj[l].y][1].push({x: animation_obj[l].x, y: animation_obj[l].y, 
                                              map_x: animation_obj[l].x, map_y: animation_obj[l].y,
                                              //vector: GG_VIEW_WHITE,
                                              //image: GG_DATA_CHAR_STR[animation_obj[l].job_change_after_type] + '_s',
                                              vector: 0,
                                              image: GG_DATA_CHAR_STR[animation_obj[l].job_change_after_type] + '_s6',
                                              alpha: alpha,
                                              kind: GG_VIEW_UNIT,
                                              shadow: false,
                                              //vector3: vector3
                                              });
                        
                    }
        
                            
                } else if (animation_obj[l].group == GG_DATA_ANIMATION_ETC_LOST) {    
                    audio = { turn:0, 
                                  sound:GG_DATA_SOUND_LOST};
                    if (j % 2 == 0 && j < bin / 2) {
                        alpha = 1 - j / bin / 3;
                    } else if (j % 2 == 0 && j >= bin / 2) {
                        alpha = 1 - 1 / 3 - j / bin / 3 * 2;
                        if (alpha < 0 ) {
                            alpha = 0;
                        }
                    } else if (j % 2 == 1 && j < bin / 2) {
                        alpha = 1 - j / bin;
                    } else {
                        alpha = 1 - j / bin;
                    }
                    var shadow = true;
                    if (area_map[animation_obj[l].y][animation_obj[l].x] >= 0) {
                        shadow = false;
                    }
                    if (map[animation_obj[l].y][animation_obj[l].x] == 0) {
                        shadow = false;
                    }
                    
                    //
                    animation_units[animation_obj[l].y][1].push({x: animation_obj[l].x, y: animation_obj[l].y, 
                                          map_x: animation_obj[l].x, map_y: animation_obj[l].y,
                                          //vector: GG_VIEW_STATUS_00,
                                          //image: GG_DATA_CHAR_STR[animation_obj[l].type] + '_s',
                                          vector: 0,
                                          image: GG_DATA_CHAR_STR[animation_obj[l].type] + '_s3',
                                          kind: GG_VIEW_UNIT,
                                          alpha: alpha,
                                          color: animation_obj[l].color,
                                          shadow: shadow,
                                          lost: true
                        });                
                } else if (animation_obj[l].group == GG_DATA_ANIMATION_ETC_FADE_UNIT) {
                    audio = { turn:0, 
                                  sound:GG_DATA_SOUND_FADE_IN};
                    animation_units[animation_obj[l].y][1].push({x: animation_obj[l].x, y: animation_obj[l].y, 
                                          map_x:  animation_obj[l].x,
                                          map_y:  animation_obj[l].y,
                                          //vector: GG_VIEW_FRONT_SAME,
                                          //image:  GG_DATA_CHAR_STR[animation_obj[l].type] + '_m',
                                          vector: 0,
                                          image:  GG_DATA_CHAR_STR[animation_obj[l].type] + '_s0',
                                          kind:   GG_VIEW_UNIT,
                                          fade:   bin - j - 1,
                                          color:  animation_obj[l].color,
                                          shadow: false,
                                          circle: {image : 'circle_00',
                                                   vector: animation_obj[l].color}

                        });                
                }
    
            }
            /////////////
            animation.push({units: JSON.parse(JSON.stringify(animation_units)),
                            weapons: [],
                            timeout: gg.animation.data.timeout_1});

        }
        
    }
    if (loop_flag == true) {
        timeout = GG_DATA_LOOP_TIMEOUT;
    }
    gg.view.animation_set2(animation, gg.animation.back, map, zoom, area_map, fix_select_maps, fix_units, fix_numbers,
                           fix_number_animation_length, timeout, loop_flag, dialog, audio);
};



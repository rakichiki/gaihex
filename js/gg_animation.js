gg.animation = {};
gg.animation.data = {};
gg.animation.data.callback;
gg.animation.data.replay = [];
gg.animation.data.replay_count = 0;
gg.animation.data.replay_flag;

gg.animation.data.timeout_1 = 0;
gg.animation.data.timeout_4 = 0;
gg.animation.data.timeout_5 = 0;

var GG_ANIMATION_ID_UNIT   = 0;
var GG_ANIMATION_ID_MOVE   = 1;
var GG_ANIMATION_ID_ETC    = 2;
var GG_ANIMATION_ID_ATTACK = 3;
var GG_ANIMATION_ID_DATA   = 4;

var GG_ANIMATION_IMG_PATH = '0240';

gg.animation.back = function() {
    //setTimeout(gg.animation.data.callback , gg.animation.data.timeout_4);
    if (gg.animation.data.callback != null) {
        requestAnimationFrame(gg.animation.data.callback);
    }
    
};

// new Animation
// move
gg.animation.set_move_animation2 = function(map, army, animation_obj, zoom, callback, area_map, select_map, replay) {

    // TODO REPLAY 
    if (replay == true) {
        //gg.animation.data.replay.push(JSON.parse(JSON.stringify({map: map, army:army, animation_obj: animation_obj,
        //                                                    zoom:zoom, area_map: area_map,bin: null,
        //                           select_map: select_map, select_map_number:null, id:GG_ANIMATION_ID_MOVE})));
    }
    gg.animation.data.callback = callback;
    var audio;
    var animation = [];
    var animation_units = new Array(map.length);
    //var fix_units = [];
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
    var image, vevtor;
    var army_number, unit_number;
    var before_position = new Array(animation_obj.route_count);
    var after_position = new Array(animation_obj.route_count);
    var temp_x, temp_y;
    var order_y;
    var image2, vector2, kind2;
    var fatigue_recover;
    var fatigue_turn;
    var shadow = true;
    var status_icons = [];

    image2 = GG_DATA_IMAGE_PATH + GG_ANIMATION_IMG_PATH + '/' + GG_VIEW_IMAGE_STATUS_ICON + '_' + GG_ANIMATION_IMG_PATH + '.png';
    kind2 = GG_VIEW_ETC_LINE;
    for (var m = 0; m < animation_obj.list.length; m++) {
        after_position[m] = {x:animation_obj.list[m].start_x,
                             y:animation_obj.list[m].start_y};
    }
    
    var map_x, map_y;
    var bin = GG_DATA_ANIMATION_BIN;
    var check_flag = false;
    //
    for (var k = 0; k < select_map.length; k++) {
        fix_select_maps[select_map[k].y].push({x: select_map[k].x,
                                               army_color: select_map[k].army_color,
                                               id: select_map[k].id});
    }
    
    for (var k = 0; k < army.length; k++) {
        for (var l = 0; l < army[k].unit.length; l++) {
            check_flag = false;
            for (var m = 0; m < animation_obj.list.length; m++) {
                if (animation_obj.list[m].army_number == k &&
                    animation_obj.list[m].unit_number == l) {
                    check_flag = true;
                    break;
                }
            }
            if (check_flag == true) {
                continue;
            }
            image = GG_DATA_CHAR_STR[army[k].unit[l].type] + '_';
            vector = 0;
            if (army[k].unit[l].hitpoint > GG_DATA_LIFE_50) {
                image += 's0'
                //vector = GG_VIEW_FRONT_SAME;
            } else if (army[k].unit[l].hitpoint > GG_DATA_LIFE_20) {
                image += 's1'
                //vector = GG_VIEW_STATUS_50;
            } else if (army[k].unit[l].hitpoint > GG_DATA_LIFE_0) {
                image += 's2'
                //vector = GG_VIEW_STATUS_20;
    
            } else  {
                image += 's3'
                //vector = GG_VIEW_STATUS_00;
            }
            shadow = true;
                
            if (area_map[army[k].unit[l].y][army[k].unit[l].x] > -1 ||
                map[army[k].unit[l].y][army[k].unit[l].x] == 0) {
                shadow = false;
            }
            status_icons = [];
            if (army[k].unit[l].status_changed == GG_DATA_STATUS_CHANGE_UP_ATTACK) {
                status_icons.push(GG_VIEW_STATUS_ATTACK_UP);
            } else if (army[k].unit[l].status_changed == GG_DATA_STATUS_CHANGE_UP_DEFENCE) {
                status_icons.push(GG_VIEW_STATUS_DEFENCE_UP);
            } else if (army[k].unit[l].status_changed == GG_DATA_STATUS_CHANGE_UP_MOVE) {
                status_icons.push(GG_VIEW_STATUS_MOVE_UP);
            } else if (army[k].unit[l].status_changed == GG_DATA_STATUS_CHANGE_DOWN_ATTACK) {
                status_icons.push(GG_VIEW_STATUS_ATTACK_DOWN);
            }

            if (army[k].unit[l].dead_count_down > 0) {
                status_icons.push(army[k].unit[l].dead_count_down + GG_VIEW_STATUS_DEAD_COUNT_DOWN - 1);
            } else if (army[k].unit[l].fatigue > 0) {
                fatigue_recover = 1;
                if (map[army[k].unit[l].y][army[k].unit[l].x] == 0) {
                    fatigue_recover = 2;
                }
                fatigue_turn = army[k].unit[l].fatigue / (army[k].unit[l].recover_fatigue * fatigue_recover);
                if (fatigue_turn <= 1) {
                    status_icons.push(0 + GG_VIEW_STATUS_FATIGUE);
                } else if (fatigue_turn <= 4) {
                    status_icons.push(1 + GG_VIEW_STATUS_FATIGUE);
                } else if (fatigue_turn <= 9) {
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
                //status_icons.push(GG_VIEW_STATUS_PASSIVE);
            }
            if (army[k].unit[l].class_down_flag == true) {
                status_icons.push(GG_VIEW_STATUS_CLASS_DOWN);
            }
    
            fix_units[army[k].unit[l].y].push({map_x: army[k].unit[l].x,
                                               hitpoint: army[k].unit[l].hitpoint,
                                               level: army[k].unit[l].level,
                            vector: vector,
                            image: image,
                            kind: GG_VIEW_UNIT,
                            shadow: shadow,
                            color: army[k].color,
                            status_icons: status_icons
            });
        }
    }
    
    for (var count = 0; count < animation_obj.route_count; count++) {
        for (var m = 0; m < animation_obj.list.length; m++) {
            if (animation_obj.list[m].kind == GG_DATA_ANIMATION_UNIT) {
                before_position[m] = {x: after_position[m].x,
                                      y: after_position[m].y};
                after_position[m]  = {x: before_position[m].x + GG_DATA_MOVE_DIRECTION[animation_obj.list[m].route[count]].x,
                                      y: before_position[m].y + GG_DATA_MOVE_DIRECTION[animation_obj.list[m].route[count]].y};
            }
        }

        for (var j = 0; j < bin; j++) {
            animation_units = new Array(map.length);;
            for (var k = 0; k < animation_units.length; k++) {
                animation_units[k] = new Array(3);
                for (var l = 0; l < animation_units[k].length; l++) {
                    animation_units[k][l] = [];
                }
            }
            //////////////////////////////////////////
            for (var m = 0; m < animation_obj.list.length; m++) {
                //

                if (animation_obj.list[m].kind == GG_DATA_ANIMATION_UNIT) {
                    ///
                    order_y = null;
                    temp_x = before_position[m].x + (after_position[m].x - before_position[m].x) / bin * j;
                    temp_y = before_position[m].y + (after_position[m].y - before_position[m].y) / bin * j;
                    army_number = animation_obj.list[m].army_number;
                    unit_number = animation_obj.list[m].unit_number;
        
                    if (Math.ceil(temp_y) == Math.floor(temp_y)) {
                        if (temp_y % 2 == 0) {
                            if (Math.floor(temp_x) % 2 == 0) {
                                map_x = Math.floor(temp_x);
                            } else {
                                map_x = Math.floor(temp_x) + 1;
                            }
                        } else {
                            if (Math.floor(temp_x) % 2 == 0) {
                                map_x = Math.floor(temp_x) + 1;
                            } else {
                                map_x = Math.floor(temp_x);                    
                            }
                        }
                        map_y = temp_y;
                    } else {
                        if (map[before_position[m].y][before_position[m].x] ==
                            map[after_position[m].y][after_position[m].x]) {
                            if (before_position[m].y > after_position[m].y) {
                                map_y = before_position[m].y;
                                map_x = before_position[m].x;
                            } else {
                                map_y = after_position[m].y;
                                map_x = after_position[m].x;
                            }
                        } else{
                            // order_y set
                            if (Math.round(temp_x) == after_position[m].x) {
                                map_y = after_position[m].y;
                                map_x = after_position[m].x;
                            } else {
                                map_y = before_position[m].y;
                                map_x = before_position[m].x;
                            }
                            // south
                            if (map[before_position[m].y][before_position[m].x] >
                                map[after_position[m].y][after_position[m].x] &&
                                before_position[m].y < after_position[m].y &&
                                (j == 4 || j == 5 || j == 6|| j == 7|| j == 8)) {
                                // down
                                order_y = after_position[m].y;
                                if (j == 4 || j == 5 || j == 6) {
                                    map_y = after_position[m].y;
                                    map_x = after_position[m].x;
                                }
                            } else if (map[before_position[m].y][before_position[m].x] <
                                map[after_position[m].y][after_position[m].x] &&
                                before_position[m].y < after_position[m].y &&
                                (j == 4 || j == 5 || j == 6|| j == 7)) {
                                // up
                                order_y = after_position[m].y;
                                map_y = after_position[m].y;
                                map_x = after_position[m].x;
                            
                            // north
                            } else if (map[before_position[m].y][before_position[m].x] <
                                       map[after_position[m].y][after_position[m].x] &&
                                       before_position[m].y > after_position[m].y &&
                                       (j == 3 || j == 4 || j == 5 || j == 6|| j == 7|| j == 8|| j == 9)) {
                                // up
                                order_y = before_position[m].y;
                                if (j == 6) {
                                    map_y = after_position[m].y;
                                    map_x = after_position[m].x;
                                }
                            } else if (map[before_position[m].y][before_position[m].x] >
                                       map[after_position[m].y][after_position[m].x] &&
                                       before_position[m].y > after_position[m].y &&
                                       (j == 3 || j == 4 || j == 5 || j == 6 || j == 7)) {
                                // down
                                order_y = before_position[m].y;
                                map_y = before_position[m].y;
                                map_x = before_position[m].x;
                            }
                        }
                    }
                    
                    //if (map[map_y][map_x] == -1) {
                    //    console.log('NG map_y:' + map_y + ' map_x:' + map_x);
                    //}
                    //////////////////
                    if (animation_obj.list[m].route[count] < 6) {
                        if (before_position[m].y > after_position[m].y) {
                            vector = 9;
                        } else if (before_position[m].y < after_position[m].y) {
                            vector = 0;
                        } else if (before_position[m].x < after_position[m].x) {
                            vector = 3;
                        } else if (before_position[m].x > after_position[m].x) {
                            vector = 6;
                        }
                        if (j % 4 == 0) {
                            timeout = gg.animation.data.timeout_1;
                        } else if (j % 4 == 1 || j % 4 == 3) {
                            vector += 1;
                            timeout = gg.animation.data.timeout_1;
                        } else if (j % 4 == 2) {
                            vector += 2;
                            timeout = gg.animation.data.timeout_1;
                        }
                    } else if (animation_obj.list[m].route[count] == 6) {
                        vector = GG_VIEW_FRONT_SAME;
                        timeout = gg.animation.data.timeout_1;
                    } else if (animation_obj.list[m].route[count] == 7) {
                        vector = 0;
                        
                        if (j % 4 == 0) {
                            timeout = gg.animation.data.timeout_1;
                        } else if (j % 4 == 1 || j % 4 == 3) {
                            vector += 1;
                            timeout = gg.animation.data.timeout_1;
                        } else if (j % 4 == 2) {
                            vector += 2;
                            timeout = gg.animation.data.timeout_1;
                        }
                    }
                    if (animation_obj.list[m].route[count] <= 6) {
                        image = GG_DATA_CHAR_STR[army[army_number].unit[unit_number].type] + '_m';
                    } else if (animation_obj.list[m].route[count] == 7) {
                        image = GG_DATA_CHAR_STR[army[army_number].unit[unit_number].type] + '_u';
                    }
                    
                    shadow = true;
                    if (Math.floor(temp_x) == temp_x &&
                        Math.round(temp_x) == temp_x &&
                        Math.floor(temp_y) == temp_y &&
                        Math.round(temp_y) == temp_y) {
                        
                        if (area_map[temp_y][temp_x] > -1 ||
                            map[temp_y][temp_x] == 0) {
                            shadow = false;
                        }
                    }
                    if (order_y != null &&
                        map[order_y][map_x] == 0) {
                        shadow = false;
                    }
                    if (map[map_y][map_x] == 0) {
                        shadow = false;
                    }
                    
                    status_icons = [];
                    if (army[army_number].unit[unit_number].status_changed == GG_DATA_STATUS_CHANGE_UP_ATTACK) {
                        status_icons.push(GG_VIEW_STATUS_ATTACK_UP);
                    //} else if (army[army_number].unit[unit_number].status_changed == GG_DATA_STATUS_CHANGE_UP_DEFENCE) {
                    //    status_icons.push(GG_VIEW_STATUS_DEFENCE_UP);
                    //} else if (army[army_number].unit[unit_number].status_changed == GG_DATA_STATUS_CHANGE_UP_MOVE) {
                    //    status_icons.push(GG_VIEW_STATUS_MOVE_UP);
                    } else if (army[army_number].unit[unit_number].status_changed == GG_DATA_STATUS_CHANGE_DOWN_ATTACK) {
                        status_icons.push(GG_VIEW_STATUS_ATTACK_DOWN);
                    }

                    if (army[army_number].unit[unit_number].fatigue > 0) {
                        fatigue_recover = 1;
                        if (map[map_y][map_x] == 0) {
                            fatigue_recover = 2;
                        }
                        fatigue_turn = army[army_number].unit[unit_number].fatigue / (army[army_number].unit[unit_number].recover_fatigue * fatigue_recover);
                        if (fatigue_turn <= 1) {
                            status_icon1 = 0 + GG_VIEW_STATUS_FATIGUE;
                            status_icons.push(0 + GG_VIEW_STATUS_FATIGUE);
                        } else if (fatigue_turn <= 4) {
                            status_icon1 = 1 + GG_VIEW_STATUS_FATIGUE;
                            status_icons.push(1 + GG_VIEW_STATUS_FATIGUE);
                        } else if (fatigue_turn <= 9) {
                            status_icon1 = 2 + GG_VIEW_STATUS_FATIGUE;
                            status_icons.push(2 + GG_VIEW_STATUS_FATIGUE);
                        } else {
                            status_icons.push(3 + GG_VIEW_STATUS_FATIGUE);
                            
                        }
                    } else if (army[army_number].unit[unit_number].recovery_turn_flag == GG_DATA_AUTO_RECOVERY_ON) {
                        //if (army[army_number].unit[unit_number].defence_type != GG_DATA_DEFENCE_TYPE_NORMAL) {
                            //status_icons.push(GG_VIEW_STATUS_PASSIVE);
                        //}
                        status_icons.push(GG_VIEW_STATUS_RECOVERY);

                    //} else if (army[army_number].unit[unit_number].defence_type != GG_DATA_DEFENCE_TYPE_NORMAL) {
                        //status_icons.push(GG_VIEW_STATUS_PASSIVE);

                    }
                    
                    if (army[army_number].unit[unit_number].class_down_flag == true) {
                        status_icons.push(GG_VIEW_STATUS_CLASS_DOWN);
                    }

                    if (order_y != null) {
                        y_array = order_y;
                        i_amari = 0;
                    } else {
                        y_array = map_y;
                        if (temp_y < map_y) {
                            i_amari = 0;
                        } else if (temp_y == map_y) {
                            i_amari = 1;
                        } else if (temp_y > map_y) {
                            i_amari = 2;
                        }
                    }
                    animation_units[y_array][i_amari].push({x: temp_x, y: temp_y,
                                                           hitpoint: army[army_number].unit[unit_number].hitpoint,
                                                           level: army[army_number].unit[unit_number].level,
                                          map_x: map_x, map_y: map_y,
                                          vector:  vector,
                                          image:   image,
                                          kind:    GG_VIEW_UNIT,
                                          shadow:  shadow,
                                          move_flag: true,
                                          color:   army[army_number].color,
                                          status_icons: status_icons
                    });
                }
            }
            
            //////
            //animation[animation.length] = {};
            //animation[animation.length - 1].units = animation_units;
            //animation[animation.length - 1].timeout = gg.animation.data.timeout_1;
            animation.push({units: JSON.parse(JSON.stringify(animation_units)),
                            weapons: [],
                            timeout: gg.animation.data.timeout_1});
        }
    }
    gg.view.animation_set2(animation, gg.animation.back, map, zoom, area_map, fix_select_maps, fix_units, fix_numbers, null,  null, false, [], null);
};


// attack
gg.animation.set_attack_animation2 = function(map, army, attack_info, zoom, callback, area_map, select_map, replay, damage_list) {

    if (replay == true) {
        //gg.animation.data.replay.push(JSON.parse(JSON.stringify({map: map, army:army, animation_obj: attack_info,
        //                                                    zoom:zoom, area_map: area_map,bin: null,
        //                           select_map: select_map, select_map_number:null, id:GG_ANIMATION_ID_ATTACK})));
    }
    gg.animation.data.callback = callback;

    var animation_obj = gg.animation.make_attack_animation(attack_info, army);
    var audio;
    
    var animation = [];
    var animation_units = new Array(map.length);
    var image, vevtor;
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
    var move_flag;
    var y_array = 0, i_amari = 0;
    var army_number, unit_number;
    var before_position = new Array(animation_obj.route_count);
    var after_position = new Array(animation_obj.route_count);
    var temp_x, temp_y;
    var vector2, vector3;

    var fatigue_recover;
    var fatigue_turn;
    for (var m = 0; m < animation_obj.list.length; m++) {
        after_position[m] = {x:animation_obj.list[m].start_x,
                            y:animation_obj.list[m].start_y};
    }
    
    var map_x, map_y, order_y;
    var bin = GG_DATA_ANIMATION_BIN;
    var check_flag = false;
    var attack_start = null;
    var attack_image = null;
    var attack_vector = null;
    var rot;
    var weapons = [];
    var status_icons = [];

    for (var k = 0; k < select_map.length; k++) {
        fix_select_maps[select_map[k].y].push({x: select_map[k].x,
                                               army_color: select_map[k].army_color,
                                               id: select_map[k].id});
    }

    for (var k = 0; k < army.length; k++) {
        for (var l = 0; l < army[k].unit.length; l++) {
            check_flag = false;
            for (var m = 0; m < animation_obj.list.length; m++) {
                if (animation_obj.list[m].army_number == k &&
                    animation_obj.list[m].unit_number == l) {
                    check_flag = true;
                    break;
                }
            }
            if (check_flag == true) {
                continue;
            }
            // task damage taishouka
            var damage_flag = false;
            for (var m = 0; m < damage_list.length; m++) {
                if (damage_list[m].army_number == k &&
                    damage_list[m].unit_number == l) {
                    damage_flag = true;
                    break;
                }
            }
            var attack_start = null;
            var attack_image = null;
            var attack_vector = null;
            if (damage_flag == true && animation_obj.attack_start != null) {
                attack_start  = animation_obj.attack_start;
                //attack_image  = GG_DATA_CHAR_STR[army[k].unit[l].type] + '_s';
                attack_image  = GG_DATA_CHAR_STR[army[k].unit[l].type] + '_s4';
                //attack_vector = 9;
                attack_vector = 0;
            }
            
            image = GG_DATA_CHAR_STR[army[k].unit[l].type] + '_';
            vector = 0;
            if (army[k].unit[l].hitpoint > GG_DATA_LIFE_50) {
                image += 's0'
                //vector = GG_VIEW_FRONT_SAME;
            } else if (army[k].unit[l].hitpoint > GG_DATA_LIFE_20) {
                image += 's1'
                //vector = GG_VIEW_STATUS_50;
            } else if (army[k].unit[l].hitpoint > GG_DATA_LIFE_0) {
                image += 's2'
                //vector = GG_VIEW_STATUS_20;
    
            } else  {
                image += 's3'
                //vector = GG_VIEW_STATUS_00;
            }
            var shadow = true;
                
            if (area_map[army[k].unit[l].y][army[k].unit[l].x] > -1 ||
                map[army[k].unit[l].y][army[k].unit[l].x] == 0) {
                shadow = false;
            }
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
                status_icons.push(army[k].unit[l].dead_count_down + GG_VIEW_STATUS_DEAD_COUNT_DOWN - 1);
            } else if (army[k].unit[l].fatigue > 0) {
                fatigue_recover = 1;
                if (map[army[k].unit[l].y][army[k].unit[l].x] == 0) {
                    fatigue_recover = 2;
                }
                fatigue_turn = army[k].unit[l].fatigue / (army[k].unit[l].recover_fatigue * fatigue_recover);
                if (fatigue_turn <= 1) {
                    status_icons.push(0 + GG_VIEW_STATUS_FATIGUE);
                } else if (fatigue_turn <= 4) {
                    status_icons.push(1 + GG_VIEW_STATUS_FATIGUE);
                } else if (fatigue_turn <= 9) {
                    status_icons.push(2 + GG_VIEW_STATUS_FATIGUE);
                } else {
                    status_icons.push(3 + GG_VIEW_STATUS_FATIGUE);

                }
            } else if (army[k].unit[l].recovery_turn_flag == GG_DATA_AUTO_RECOVERY_ON) {                
                //if (army[k].unit[l].defence_type != GG_DATA_DEFENCE_TYPE_NORMAL) {
                    //status_icons.push(GG_VIEW_STATUS_PASSIVE);
                //}
                status_icons.push(GG_VIEW_STATUS_RECOVERY);

            //} else if (army[k].unit[l].defence_type != GG_DATA_DEFENCE_TYPE_NORMAL) {
                //status_icons.push(GG_VIEW_STATUS_PASSIVE);
            }
            if (army[k].unit[l].class_down_flag == true) {
                status_icons.push(GG_VIEW_STATUS_CLASS_DOWN);
            }
    
            fix_units[army[k].unit[l].y].push({map_x:   army[k].unit[l].x,
                                              hitpoint: army[k].unit[l].hitpoint,
                                              level: army[k].unit[l].level,
                                               vector:        vector,
                                  image:         image,
                                  kind:          GG_VIEW_UNIT,
                                  shadow:        shadow,
                                  color:         army[k].color,
                                  status_icons: status_icons,
                                  attack_start:  attack_start,
                                  attack_image:  attack_image,
                                  attack_vector: attack_vector
                                  
            });
        }
    }
    
    for (var count = 0; count < animation_obj.route_count; count++) {
        for (var j = 0; j < bin; j++) {
            animation_units = new Array(map.length);
            for (var k = 0; k < animation_units.length; k++) {
                animation_units[k] = new Array(3);
                for (var l = 0; l < animation_units[k].length; l++) {
                    animation_units[k][l] = [];
                }
            }
            weapons = [];

            // animation unit
            var timer_half_flag = false;
            for (var m = 0; m < animation_obj.list.length; m++) {
                //
                if (animation_obj.list[m].kind == GG_DATA_ANIMATION_ATTACK_UNIT) {
                    var temp_count = count * bin + j;
                    ////
                    temp_x = Math.round(animation_obj.list[m].attack_animation[temp_count].x * 100) / 100;
                    temp_y = Math.round(animation_obj.list[m].attack_animation[temp_count].y * 100) / 100;
                    army_number = animation_obj.list[m].army_number;
                    unit_number = animation_obj.list[m].unit_number;
                    order_y = null;
                    if (Math.ceil(temp_y) == Math.floor(temp_y)) {
                        if (temp_y % 2 == 0) {
                            if (Math.floor(temp_x) % 2 == 0) {
                                map_x = Math.floor(temp_x);
                            } else {
                                map_x = Math.floor(temp_x) + 1;
                            }
                        } else {
                            if (Math.floor(temp_x) % 2 == 0) {
                                map_x = Math.floor(temp_x) + 1;
                            } else {
                                map_x = Math.floor(temp_x);                    
                            }
                        }
                        map_y = temp_y;
                    } else {
                        var diff_y = animation_obj.list[m].attack_animation[temp_count].y - Math.floor(animation_obj.list[m].attack_animation[temp_count].y);

                        //if (animation_obj.list[m].attack_animation.length <= temp_count + 1) {
                        //    console.log(' ');
                        //}
                        if (Math.round(animation_obj.list[m].attack_animation[temp_count].y * 100) / 100 <
                            Math.round(animation_obj.list[m].attack_animation[temp_count + 1].y * 100) / 100) {
                            var before_map_y = Math.floor(Math.round(animation_obj.list[m].attack_animation[temp_count].y * 100) / 100);    
                            var after_map_y  = before_map_y + 1;
                        } else if (Math.round(animation_obj.list[m].attack_animation[temp_count].y * 100) / 100 ==
                                   Math.round(animation_obj.list[m].attack_animation[temp_count + 1].y * 100) / 100) {
                            var before_map_y = Math.round(animation_obj.list[m].attack_animation[temp_count].y);    
                            var after_map_y  = before_map_y;
                        } else {
                            var before_map_y = Math.ceil(Math.round(animation_obj.list[m].attack_animation[temp_count].y * 100) / 100);    
                            var after_map_y  = before_map_y - 1;    
                        }

                        if (Math.round(animation_obj.list[m].attack_animation[temp_count].x * 100) / 100 <
                            Math.round(animation_obj.list[m].attack_animation[temp_count + 1].x * 100) / 100) {
                            var before_map_x = Math.floor(Math.round(animation_obj.list[m].attack_animation[temp_count].x * 100) / 100);    
                            var after_map_x  = before_map_x + 1;    
                        } else if (Math.round(animation_obj.list[m].attack_animation[temp_count].x * 100) / 100 ==
                                   Math.round(animation_obj.list[m].attack_animation[temp_count + 1].x * 100) / 100) {
                            var before_map_x = Math.round(animation_obj.list[m].attack_animation[temp_count].x);    
                            var after_map_x  = before_map_x;
                        } else {
                            var before_map_x = Math.ceil(Math.round(animation_obj.list[m].attack_animation[temp_count].x * 100) / 100);    
                            var after_map_x  = before_map_x - 1;    
                        }

                        var before_map = map[before_map_y][before_map_x];
                        var after_map  = map[after_map_y][after_map_x];
                        if (before_map == after_map) {
                            if (animation_obj.list[m].attack_animation[temp_count].y >
                                animation_obj.list[m].attack_animation[temp_count + 1].y) {
                                map_x = before_map_x;
                                map_y = before_map_y;
                            } else {
                                map_x = after_map_x;
                                map_y = after_map_y;
                            }
                        } else {
                            map_y = Math.round(temp_y);
                            if (map[map_y][Math.round(temp_x)] != -1) {
                                map_x = Math.round(temp_x);
                            } else if (map[map_y][Math.ceil(temp_x)] != -1){
                                map_x = Math.ceil(temp_x);
                            } else if (map[map_y][Math.floor(temp_x)] != -1){
                                map_x = Math.floor(temp_x);
                            }

                            if (animation_obj.list[m].attack_animation[temp_count].y <
                                animation_obj.list[m].attack_animation[temp_count + 1].y) {
                                // s
                                if (before_map < after_map) {
                                    // after high
                                    if (diff_y > 0.33) {
                                        order_y = after_map_y;
                                        map_y = after_map_y;
                                        map_x = after_map_x;
                                    }
                                    
                                } else {
                                    // after low
                                    if (diff_y > 0.33) {
                                        order_y = after_map_y;
                                        map_y = after_map_y;
                                        map_x = after_map_x;
                                    }
                                    
                                }
                            } else {
                                // n
                                if (before_map < after_map) {
                                    // after high
                                    if (diff_y < 0.51) {
                                        order_y = before_map_y;
                                    }
                                    
                                } else {
                                    // after low
                                    if (diff_y > 0.49) {
                                        order_y = before_map_y;
                                        map_y = before_map_y;
                                        map_x = before_map_x;
                                    }                                    
                                }
                            }
                        }
                        
                        // ch/tr TODO ue/sita walk 
                        //if (map[map_y][map_x] == -1) {
                        //    console.log('OUT');
                        //}

                    }
                    
                    //if (map[map_y][map_x] == -1) {
                    //    console.log('NG map_y:' + map_y + ' map_x:' + map_x);
                    //}
        
                    //////////////////
                    vector = animation_obj.list[m].attack_animation[temp_count].unit_dir * 3 +
                             animation_obj.list[m].attack_animation[temp_count].picture_number;

                    image = GG_DATA_CHAR_STR[army[army_number].unit[unit_number].type] + '_' +
                            animation_obj.list[m].attack_animation[temp_count].picture;

                    var shadow = true;
                    if (Math.floor(temp_x) == temp_x &&
                        Math.round(temp_x) == temp_x &&
                        Math.floor(temp_y) == temp_y &&
                        Math.round(temp_y) == temp_y) {
                        
                        if (area_map[temp_y][temp_x] > -1) {
                            shadow = false;
                        }
                    }
                    status_icons = [];
                    if (army[army_number].unit[unit_number].status_changed == GG_DATA_STATUS_CHANGE_UP_ATTACK) {
                        status_icons.push(GG_VIEW_STATUS_ATTACK_UP);
                    } else if (army[army_number].unit[unit_number].status_changed == GG_DATA_STATUS_CHANGE_DOWN_ATTACK) {
                        status_icons.push(GG_VIEW_STATUS_ATTACK_DOWN);
                    //} else if (army[army_number].unit[unit_number].status_changed == GG_DATA_STATUS_CHANGE_UP_DEFENCE) {
                    //    status_icons.push(GG_VIEW_STATUS_DEFENCE_UP);
                    //} else if (army[army_number].unit[unit_number].status_changed == GG_DATA_STATUS_CHANGE_UP_MOVE) {
                    //    status_icons.push(GG_VIEW_STATUS_MOVE_UP);
                    }
        
                    if (army[army_number].unit[unit_number].dead_count_down > 0) {
                        status_icons.push(army[army_number].unit[unit_number].dead_count_down + GG_VIEW_STATUS_DEAD_COUNT_DOWN - 1);
                    } else if (army[army_number].unit[unit_number].fatigue > 0) {
                        fatigue_recover = 1;
                        if (map[army[army_number].unit[unit_number].y][army[army_number].unit[unit_number].x] == 0) {
                            fatigue_recover = 2;
                        }
                        fatigue_turn = army[army_number].unit[unit_number].fatigue / (army[army_number].unit[unit_number].recover_fatigue * fatigue_recover);
                        if (fatigue_turn <= 1) {
                            status_icons.push(0 + GG_VIEW_STATUS_FATIGUE);
                        } else if (fatigue_turn <= 4) {
                            status_icons.push(1 + GG_VIEW_STATUS_FATIGUE);
                        } else if (fatigue_turn <= 9) {
                            status_icons.push(2 + GG_VIEW_STATUS_FATIGUE);
                        } else {
                            status_icons.push(3 + GG_VIEW_STATUS_FATIGUE);
        
                        }
                    } else if (army[army_number].unit[unit_number].recovery_turn_flag == GG_DATA_AUTO_RECOVERY_ON) {                
                        //if (army[army_number].unit[unit_number].defence_type != GG_DATA_DEFENCE_TYPE_NORMAL) {
                            //status_icons.push(GG_VIEW_STATUS_PASSIVE);
                        //}
                        status_icons.push(GG_VIEW_STATUS_RECOVERY);
        
                    //} else if (army[army_number].unit[unit_number].defence_type != GG_DATA_DEFENCE_TYPE_NORMAL) {
                        //status_icons.push(GG_VIEW_STATUS_PASSIVE);
                    }
                    if (army[army_number].unit[unit_number].class_down_flag == true) {
                        status_icons.push(GG_VIEW_STATUS_CLASS_DOWN);
                    }
                                        
                    vector3 = null;
                    if (animation_obj.list[m].attack_animation[temp_count].effect != undefined && 
                        animation_obj.list[m].attack_animation[temp_count].effect == GG_DATA_ANIMATION_EFFECT_ASSAULT) {

                        if (temp_count % 4 == 0) {
                            vector3 = GG_VIEW_EFFECT_ASSAULT_1;
                        } else if (temp_count % 4 == 1 || temp_count % 4 == 3) {
                            vector3 = GG_VIEW_EFFECT_ASSAULT_2;
                        } else if (temp_count % 4 == 2) {
                            vector3 = GG_VIEW_EFFECT_ASSAULT_3;
                        }

                    }
                    if (animation_obj.list[m].attack_animation[temp_count].effect != undefined && 
                        animation_obj.list[m].attack_animation[temp_count].effect == GG_DATA_ANIMATION_EFFECT_CLASS_DOWN) {

                        if (temp_count % 4 == 0) {
                            vector3 = GG_VIEW_EFFECT_CLASS_DOWN_1;
                        } else if (temp_count % 4 == 1 || temp_count % 4 == 3) {
                            vector3 = GG_VIEW_EFFECT_CLASS_DOWN_2;
                        } else if (temp_count % 4 == 2) {
                            vector3 = GG_VIEW_EFFECT_CLASS_DOWN_3;
                        }
                    }
                    if (order_y != null) {
                        y_array = order_y;
                        i_amari = 0;
                    } else  {
                        y_array = map_y;
                        if (temp_y < map_y) {
                            i_amari = 0;
                        } else if (temp_y == map_y) {
                            i_amari = 1;
                        } else if (temp_y > map_y) {
                            i_amari = 2;
                        }
                    }
                    if (map[y_array][map_x] == 0) {
                        shadow = false;
                    }
                    move_flag = false;
                    if (animation_obj.list[m].attack_animation[temp_count].picture == 'm') {
                        move_flag = true;
                    }
                    animation_units[y_array][i_amari].push({x: temp_x, y: temp_y,
                                                           hitpoint: army[army_number].unit[unit_number].hitpoint,
                                                           level: army[army_number].unit[unit_number].level,
                                          map_x: map_x,
                                          map_y: map_y,
                                          vector: vector,
                                          image: image,
                                          kind: GG_VIEW_UNIT,
                                          shadow: shadow,
                                          color: army[army_number].color,
                                          move_flag: move_flag,
                                          status_icons: status_icons,
                                          vector3: vector3
                        });
                                        
                }
                if ((animation_obj.list[m].kind == GG_DATA_ANIMATION_ARROW ||
                     animation_obj.list[m].kind == GG_DATA_ANIMATION_TOMAHAWK ||
                     //animation_obj.list[m].kind == GG_DATA_ANIMATION_DARTS ||
                     animation_obj.list[m].kind == GG_DATA_ANIMATION_WIND ||
                     animation_obj.list[m].kind == GG_DATA_ANIMATION_WITCH)
                     && count * bin + j >= animation_obj.list[m].throw_start && count * bin + j <= animation_obj.list[m].throw_end) {                    
                     //&& count == animation_obj.list[m].throw_start && j >= GG_DATA_ANIMATION_LONG_BIN) {                    
                    //       && count >= animation_obj.list[m].throw_start
                    //       && count < animation_obj.list[m].throw_start + 1) {                    

                    if (animation_obj.list[m].kind == GG_DATA_ANIMATION_ARROW) {
                        image = 'arrow';
                    //} else if (animation_obj.list[m].kind == GG_DATA_ANIMATION_DARTS) {
                    //    image = 'darts';
                    } else if (animation_obj.list[m].kind == GG_DATA_ANIMATION_WITCH) {
                        image = 'magic_witch';
                    } else if (animation_obj.list[m].kind == GG_DATA_ANIMATION_THUNDER) {
                        image = 'magic_thunder';
                    } else if (animation_obj.list[m].kind == GG_DATA_ANIMATION_WIND) {
                        image = 'magic_wind';
                    } else if (animation_obj.list[m].kind == GG_DATA_ANIMATION_TOMAHAWK) {
                        if (animation_obj.list[m].end_x - animation_obj.list[m].start_x < 0) {
                            image = 'tomahawkr';
                        } else {
                            image = 'tomahawk';
                        }
                    }
                    //var temp_end_x = animation_obj.list[m].end_x;

                    rot = null;
                    if (animation_obj.list[m].kind == GG_DATA_ANIMATION_DARTS) {
                        if (animation_obj.list[m].end_y == animation_obj.list[m].start_y) {
                            if (animation_obj.list[m].end_x < animation_obj.list[m].start_x) {
                                rot = Math.PI;
                                //console.log('a');
                            } else if (animation_obj.list[m].end_x > animation_obj.list[m].start_x) {
                                rot = 0;
                                //console.log('b');
                            }
                        
                        } else if (animation_obj.list[m].end_y < animation_obj.list[m].start_y) {
                            if (animation_obj.list[m].end_x < animation_obj.list[m].start_x) {
                                rot = Math.PI * 5 / 4;
                                //console.log('c');
                            } else if (animation_obj.list[m].end_x > animation_obj.list[m].start_x) {
                                rot = Math.PI * 7 / 4;
                                //console.log('d');
                            }
                        } else if (animation_obj.list[m].end_y > animation_obj.list[m].start_y) {
                            if (animation_obj.list[m].end_x < animation_obj.list[m].start_x) {
                                rot = Math.PI * 3 / 4;
                                //console.log('e');
                            } else if (animation_obj.list[m].end_x > animation_obj.list[m].start_x) {
                                rot = Math.PI * 1 / 4;
                                //console.log('f');
                            }
                        }
                        radi_x = animation_obj.list[m].start_x +  (animation_obj.list[m].end_x - animation_obj.list[m].start_x) / 4 * (count * bin + j - animation_obj.list[m].throw_start + 1)
                        radi_y = animation_obj.list[m].start_y +  (animation_obj.list[m].end_y - animation_obj.list[m].start_y) / 4 * (count * bin + j - animation_obj.list[m].throw_start + 1)
                    
                    } else {
                        if (animation_obj.list[m].r_end_x == undefined) {
                            var temp_end_x = animation_obj.list[m].end_x;
                        } else {
                            var temp_end_x = animation_obj.list[m].r_end_x;
                            
                        }
                        var center_x = (animation_obj.list[m].end_x + animation_obj.list[m].start_x) /2;
                        var center_y = (animation_obj.list[m].end_y + animation_obj.list[m].start_y) /2;
                        var r = Math.sqrt((animation_obj.list[m].start_x - animation_obj.list[m].end_x) / 2 * (animation_obj.list[m].start_x - animation_obj.list[m].end_x) / 2 +
                                          (animation_obj.list[m].start_y - animation_obj.list[m].end_y) * (animation_obj.list[m].start_y - animation_obj.list[m].end_y)) / 2;
                        var start_radi = Math.atan((animation_obj.list[m].start_y - center_y) / (animation_obj.list[m].start_x - center_x));
    
                        if (animation_obj.list[m].start_x < center_x) {
                            start_radi += Math.PI + Math.PI * 4 / 24;
                        } else if (animation_obj.list[m].start_x > center_x) {
                            start_radi -= Math.PI * 4 / 24;
                        } else {
                            if (animation_obj.list[m].start_y < center_y) {
                                //console.log('a');
                                start_radi += Math.PI * 4 / 24;
                            } else {
                                //console.log('b');
                                start_radi += Math.PI * 4 / 24;
                                
                            }
                            
                        }
                        //var radi_bin = (Math.PI / 12 * 10)/ (animation_obj.list[m].range * bin);
                        //var radi_bin = (Math.PI / 24 * 14)/ bin;
                        var radi_bin = (Math.PI / 24 * 14)/ GG_DATA_ANIMATION_LONG_BIN;
    
                        if ((temp_end_x + animation_obj.list[m].start_x) /2 < animation_obj.list[m].start_x) {
                            var radi = start_radi - radi_bin * (count * bin + j - animation_obj.list[m].throw_start + 1);
                        } else {
                            var radi = start_radi + radi_bin * (count * bin + j - animation_obj.list[m].throw_start + 1);
                            
                        }
                        //radi = Math.round(radi * 100) / 100;
                        var radi_x = Math.cos(radi) * r * 2 + center_x;
                        var radi_y = Math.sin(radi) * r + center_y;
                        radi_x = Math.round(radi_x * 100) / 100;
                        radi_y = Math.round(radi_y * 100) / 100;
                        
                        if (animation_obj.list[m].kind == GG_DATA_ANIMATION_ARROW){
                            if (center_x < animation_obj.list[m].start_x) {
                                rot = radi - Math.PI / 2;
                            } else {
                                rot = radi + Math.PI / 2;
                                
                            }
                        } else if (animation_obj.list[m].kind == GG_DATA_ANIMATION_TOMAHAWK ||
                            animation_obj.list[m].kind == GG_DATA_ANIMATION_WIND) {
                            if (animation_obj.list[m].end_x - animation_obj.list[m].start_x < 0) {
                                rot = -1 * (j * Math.PI / 4) % (Math.PI * 2);
                            } else {
                                rot = (j * Math.PI / 4) % (Math.PI * 2);
                                
                            }
                        }
                        
                    }
                    weapons.push({x: radi_x, y: radi_y,
                                          map_x:  animation_obj.list[m].start_x, map_y: animation_obj.list[m].start_y,
                                          vector: 0,
                                          image:  image,
                                          kind:   GG_VIEW_IMAGE_SIZE_LONG_WEAPON,
                                          r:      rot,
                        });
                } else if (animation_obj.list[m].kind == GG_DATA_ANIMATION_THUNDER
                           && count * bin + j >= animation_obj.list[m].throw_start
                           && count * bin + j <= animation_obj.list[m].throw_end) {                    
                    var vector = 0;
                    if (j % 4 == 1) {
                        vector = 1;
                    } else if (j % 4 == 3) {
                        vector = 2;
                    }
                    weapons.push({x: animation_obj.list[m].end_x, y: animation_obj.list[m].end_y,
                                              map_x: animation_obj.list[m].start_x, map_y: animation_obj.list[m].start_y,
                                              vector: vector,
                                              image: 'thunder_storm',
                                              kind: GG_VIEW_ETC_LINE,
                        });        
                    for (var thunder_count = 0; thunder_count < 6; thunder_count++) {
                        weapons.push({x: animation_obj.list[m].end_x + GG_DATA_MOVE_DIRECTION[thunder_count].x,
                                              y: animation_obj.list[m].end_y + GG_DATA_MOVE_DIRECTION[thunder_count].y,
                                              map_x: animation_obj.list[m].start_x,
                                              map_y: animation_obj.list[m].start_y,
                                              vector: vector,
                                              image: 'thunder_storm',
                                              kind: GG_VIEW_ETC_LINE,
                            });

                    }                    
                } else if (animation_obj.list[m].kind == GG_DATA_ANIMATION_LASER
                           && count * bin + j >= animation_obj.list[m].throw_start
                           && count * bin + j <= animation_obj.list[m].throw_end) {
                    var temp_bin = animation_obj.list[m].throw_end - animation_obj.list[m].throw_start;
                    var temp_diff_x = (animation_obj.list[m].end_x - animation_obj.list[m].start_x) / temp_bin;
                    var temp_diff_y = (animation_obj.list[m].end_y - animation_obj.list[m].start_y) / temp_bin;
                    var temp_x = animation_obj.list[m].start_x + temp_diff_x * (count * bin + j - animation_obj.list[m].throw_start);
                    var temp_y = animation_obj.list[m].start_y + temp_diff_y * (count * bin + j - animation_obj.list[m].throw_start);

                    if (animation_obj.list[m].end_x - animation_obj.list[m].start_x > 0) {
                        if (animation_obj.list[m].end_y - animation_obj.list[m].start_y > 0) {
                            rot = - Math.PI * 3/ 4;
                        } else if (animation_obj.list[m].end_y - animation_obj.list[m].start_y < 0) {
                            rot = Math.PI * 3 / 4;

                        } else {
                            // ok
                            rot = -Math.PI;
                            
                        }
                    } else {
                        if (animation_obj.list[m].end_y - animation_obj.list[m].start_y > 0) {
                            rot = -Math.PI / 4;
                        } else if (animation_obj.list[m].end_y - animation_obj.list[m].start_y < 0) {
                            // ok
                            rot = Math.PI / 4;
                        } else {
                            // ok
                            rot = 0;                            
                        }
                    }
                    weapons.push({x: temp_x, y: temp_y,
                                              map_x: animation_obj.list[m].start_x, map_y: animation_obj.list[m].start_y,
                                              vector: 0,
                                              image: 'laser',
                                              kind: GG_VIEW_ETC_LINE,
                                              r: rot
                        });        
                }
            }
            
            //////
            for (var k = 0; k < animation_units.length; k++) {
                for (var l = 0; l < animation_units[k].length; l++) {
                    if (animation_units[k][l].length > 1) {
                        animation_units[k][l].sort(function(a, b) {
                            if (a.y < b.y) {
                                return -1;
                            } else {
                                return 1;
                            }
                        });
                    }
                }

            }
            animation.push({units: JSON.parse(JSON.stringify(animation_units)),
                            weapons: weapons,
                            timeout: gg.animation.data.timeout_1});

        }
    }
    gg.view.animation_set2(animation, gg.animation.back, map, zoom, area_map, fix_select_maps, fix_units, fix_numbers, null, null, false, [], animation_obj.audio);
};


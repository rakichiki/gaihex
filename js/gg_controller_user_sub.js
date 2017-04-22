gg.controller_user.dialog_create_unit = function(army_number, unit_number, army, map, area_map, callback, type, zoom,
                                                 select_map) {
    
    for (var i = 0; i < select_map.length; i++) {
        select_map[i].id = GG_VIEW_SELECT_MAP_CIRCLE;
    }
    gg.controller_user.data.callback = callback;
    gg.controller_user.data.army_number = army_number;    
    gg.controller_user.data.unit_number = unit_number;    
    gg.controller_user.data.army = army;
    gg.controller_user.data.map = map;
    gg.controller_user.data.area_map = area_map;
    gg.controller_user.data.select_map = select_map;
    //
    // dialog view
    gg.menu.start_create_unit(type, army[army_number].color, gg.controller_user.ok_create_unit);
    
};

gg.controller_user.ok_create_unit = function() {
    var area_map = gg.controller_user.data.area_map;
    var army = gg.controller_user.data.army;    
    var army_number = gg.controller_user.data.army_number;

    // select map view 
    //gg.animation.set_unit(gg.controller_user.data.map, gg.controller_user.data.army, gg.controller_user.data.zoom, null
    //                       , gg.controller_user.data.area_map, gg.controller_user.data.select_map, 0, false);
    gg.animation.set_etc_animation2(gg.controller_user.data.map, gg.controller_user.data.army, [], gg.controller_user.data.zoom, null, 0
                           , gg.controller_user.data.area_map, gg.controller_user.data.select_map, 0, false, true);

    // area_map blink
    gg.controller_user.data.blink = {map: gg.controller_user.data.map,
                                     army: gg.controller_user.data.army,
                                     zoom: gg.controller_user.data.zoom,
                                     area_map: gg.controller_user.data.area_map,
                                     units: gg.controller_user.data.select_map};
    //gg.controller_user.data.timer_blink = setTimeout(gg.controller_user.blink_select_map, GG_CONTROLLER_USER_BLINK_TIMEOUT);
    //0 = 0;
        
    // event register
    gg.event.add_event(gg.controller_user.data.map,
                       gg.controller_user.data.zoom, gg.controller_user.select_create_unit);

};

gg.controller_user.select_create_unit = function(x, y) {
    //clearTimeout(gg.controller_user.data.timer_blink);
    gg.view.clear_animation_loop();
    // x, y
    // TODO check rule
    var check_flag = false;
    for (var i = 0; i < gg.controller_user.data.select_map.length; i++) {
        if (x == gg.controller_user.data.select_map[i].x &&
            y == gg.controller_user.data.select_map[i].y) {
            check_flag = true;
            break;
        }
    }
    if (check_flag == false) {
        //gg.controller_user.data.timer_blink = setTimeout(gg.controller_user.blink_select_map, GG_CONTROLLER_USER_BLINK_TIMEOUT);
        gg.event.add_event(gg.controller_user.data.map,
                           gg.controller_user.data.zoom,
                           gg.controller_user.select_create_unit);

    } else {
        //gg.animation.set_unit(gg.controller_user.data.map, gg.controller_user.data.army, gg.controller_user.data.zoom, null
        //                       ,gg.controller_user.data.area_map, [], 0, false);
        gg.animation.set_etc_animation2(gg.controller_user.data.map,
                                        gg.controller_user.data.army,
                                        [],
                                        gg.controller_user.data.zoom,
                                        null,
                                        0,
                                        gg.controller_user.data.area_map,
                                        [],
                                        0,
                                        false,
                                        false);
                                        //true);
        gg.controller_user.data.callback(gg.controller_user.data.army_number, gg.controller_user.data.unit_number,
                                     x, y);
    }
};

gg.controller_user.end_graph = function(temp) {
    
    var button_cancel = document.getElementById('button_cancel');
    button_cancel.innerHTML = '<i class="fa fa-times "></i>';
    button_cancel.onclick = gg.controller_user.cancel;
    
    if (gg.controller_user.data.status == GG_CONTROLLER_USER_EVENT_SELECT_MOVE_UNIT) {
        button_cancel.disabled = true;
    } 
    
    var button_dialog = document.getElementById('button_dialog');
    button_dialog.innerHTML = '<i class="fa fa-info"></i>';
    button_dialog.onclick = gg.controller_user.dialog;
    button_dialog.disabled = false;
    var button_menu = document.getElementById('button_menu');
    button_menu.innerHTML = '<i class="fa fa-cog"></i>';
    button_menu.onclick = gg.controller_user.menu;
    button_menu.disabled = false;
    gg.event.add_event(gg.controller_user.data.map, gg.controller_user.data.zoom, gg.controller_user.recv_event);

    //0 = 0;
    //gg.animation.set_unit(gg.controller_user.data.blink.map,
    //                   gg.controller_user.data.blink.army,
    //                   gg.controller_user.data.blink.zoom, null,
    //                   gg.controller_user.data.blink.area_map,
    //                   gg.controller_user.data.blink.units,
    //                   0, false);
    gg.animation.set_etc_animation2(gg.controller_user.data.blink.map,
                       gg.controller_user.data.blink.army, [],
                       gg.controller_user.data.blink.zoom, null, 0,
                       gg.controller_user.data.blink.area_map,
                       gg.controller_user.data.blink.units,
                       0, false, true);
    //gg.controller_user.data.timer_blink = setTimeout(gg.controller_user.blink_select_map, GG_CONTROLLER_USER_BLINK_TIMEOUT);
};

gg.controller_user.graph = function() {
    //clearTimeout(gg.controller_user.data.timer_blink);
    gg.view.clear_animation_loop();
    gg.menu.start_graph(gg.controller_user.end_graph);
    
};

gg.controller_user.end_menu = function() {
    
    var button_cancel = document.getElementById('button_cancel');
    button_cancel.innerHTML = '<i class="fa fa-times "></i>';
    button_cancel.onclick = gg.controller_user.cancel;
    if (gg.controller_user.data.status != GG_CONTROLLER_USER_EVENT_SELECT_MOVE_UNIT) {
        button_cancel.disabled = false;
    } 
    var button_dialog = document.getElementById('button_dialog');
    button_dialog.innerHTML = '<i class="fa fa-info"></i>';
    button_dialog.onclick = gg.controller_user.dialog;
    button_dialog.disabled = false;
    var button_menu = document.getElementById('button_menu');
    button_menu.innerHTML = '<i class="fa fa-cog"></i>';
    button_menu.onclick = gg.controller_user.menu;
    button_menu.disabled = false;
    gg.event.add_event(gg.controller_user.data.map, gg.controller_user.data.zoom, gg.controller_user.recv_event);

    //0 = 0;
    //gg.animation.set_unit(gg.controller_user.data.blink.map,
    //                   gg.controller_user.data.blink.army,
    //                   gg.controller_user.data.blink.zoom, null,
    //                   gg.controller_user.data.blink.area_map,
    //                   gg.controller_user.data.blink.units,
    //                   0, false);
    gg.animation.set_etc_animation2(gg.controller_user.data.blink.map,
                       gg.controller_user.data.blink.army, [],
                       gg.controller_user.data.blink.zoom, null, 0,
                       gg.controller_user.data.blink.area_map,
                       gg.controller_user.data.blink.units,
                       0, false, true);
    //gg.controller_user.data.timer_blink = setTimeout(gg.controller_user.blink_select_map, GG_CONTROLLER_USER_BLINK_TIMEOUT);
};

gg.controller_user.menu = function() {
    if (gg.controller_user.data.audio_flag) {
        gg.controller_user.data.audio.play();
    }

    var button_cancel = document.getElementById('button_cancel');
    button_cancel.disabled = true;
    var button_dialog = document.getElementById('button_dialog');
    button_dialog.disabled = true;
    var button_menu = document.getElementById('button_menu');
    button_menu.disabled = true;
    gg.event.clear_event();

    //clearTimeout(gg.controller_user.data.timer_blink);
    gg.view.clear_animation_loop();
    gg.menu.menu_dialog(gg.controller_user.end_menu);
};

gg.controller_user.dialog = function() {
    if (gg.controller_user.data.audio_flag) {
        gg.controller_user.data.audio.play();
    }

    //clearTimeout(gg.controller_user.data.timer_blink);
    gg.view.clear_animation_loop();
    var button_cancel = document.getElementById('button_cancel');
    button_cancel.disabled = true;
    var button_menu = document.getElementById('button_menu');
    button_menu.disabled = true;
    gg.event.clear_event();

    var army = gg.controller_user.data.army;
    var units = [];
    for (var i = 0; i < army.length; i++) {
        for (var j = 0; j < army[i].unit.length; j++) {
            var level = (army[i].unit[j].level + 1);
            var exp = army[i].unit[j].exp;
            if (gg.controller_user.data.dialog == 0) {
                units.push({
                    color: army[i].color,
                    x:army[i].unit[j].x, y:army[i].unit[j].y,
                    info: [
                        'Type:' + GG_DATA_CHAR_BIG_STR[army[i].unit[j].type]
                        ,'ID:' + (j + 1)
                        ,'LV:' + level 
                        ,'EXP:' + exp
                    ]
                });
            } else if (gg.controller_user.data.dialog == 1) {
                //
                var next_level_up_exp;
                if (army[i].unit[j].level > gg.controller.data.exp_array.length) {
                    next_level_up_exp = '--';
                } else {
                    next_level_up_exp = gg.controller.data.exp_array[army[i].unit[j].level + 1] - exp;
                    if (next_level_up_exp <= 0) {
                        next_level_up_exp = 'UP';
                    }
                }
                var next_level_up_parameter = 'HP';
                var level_up_array = GG_DATA_LEVEL_UP_TEAM_ARRAY[army[i].color];

                var level_up = gg.controller.get_level_up();
                if (level_up_array.length < army[i].unit[j].level + 1) {
                    next_level_up_parameter = '--';

                } else if (level_up == GG_DATA_LEVEL_UP_ARRAY[1]) {
                    next_level_up_parameter = 'HP';

                } else {
                    if (level_up_array[army[i].unit[j].level + 1] == GG_DATA_LEVEL_UP_ATTACK) {
                        next_level_up_parameter = 'AT';
    
                    } else if (level_up_array[army[i].unit[j].level + 1] == GG_DATA_LEVEL_UP_RECOVERY) {
                        next_level_up_parameter = 'RC';
                            
                    } else if (level_up_array[army[i].unit[j].level + 1] == GG_DATA_LEVEL_UP_DEFENCE) {
                        next_level_up_parameter = 'DF';
                            
                    } else if (level_up_array[army[i].unit[j].level + 1] == GG_DATA_LEVEL_UP_MOVE &&
                               army[i].unit[j].move_point < 10) {
                        next_level_up_parameter = 'MV';
                            
                    } else if (level_up_array[army[i].unit[j].level + 1] == GG_DATA_LEVEL_UP_FATIGUE) {
                        next_level_up_parameter = 'RF';
    
                    } else if (level_up_array[army[i].unit[j].level + 1] == GG_DATA_LEVEL_UP_AREA_POINT) {
                        next_level_up_parameter = 'AR';
    
                    //} else if (level_up_array[army[i].unit[j].level + 1] == GG_DATA_LEVEL_UP_STATUS_CHANGE_NUMBER &&
                    //           army[i].unit[j].status_change_number != 0) {
                    //    next_level_up_parameter = 'SN';
                    }
                }
                
                units.push({
                    color: army[i].color,
                    x:army[i].unit[j].x, y:army[i].unit[j].y,
                    info: [
                        'Type:' + GG_DATA_CHAR_BIG_STR[army[i].unit[j].type]
                        ,'NE:' + next_level_up_exp
                        ,'NP:' + next_level_up_parameter
                        ,'HP:' + army[i].unit[j].hitpoint
                    ]
                    });
            } else if (gg.controller_user.data.dialog == 2) {
                units.push({
                    color: army[i].color,
                    x:army[i].unit[j].x, y:army[i].unit[j].y,
                    info: [
                        'Type:' + GG_DATA_CHAR_BIG_STR[army[i].unit[j].type]
                        ,'MHP:' + army[i].unit[j].max_hitpoint
                        ,'RC:' + army[i].unit[j].small_recovery + '/' + army[i].unit[j].big_recovery
                        ,'AT:' + army[i].unit[j].attack_point
                        ]
                    });
            } else if (gg.controller_user.data.dialog == 3) {
                units.push({
                    color: army[i].color,
                    x:army[i].unit[j].x, y:army[i].unit[j].y,
                    info: [
                        'Type:' + GG_DATA_CHAR_BIG_STR[army[i].unit[j].type]
                        ,'FA:' + army[i].unit[j].attack_fatigue
                        ,'MV:' + army[i].unit[j].move_point + '/' +  army[i].unit[j].move_fatigue
                        ,'DF:' + army[i].unit[j].defence_point
                        ]
                    });
            } else if (gg.controller_user.data.dialog == 4) {
                units.push({
                    color: army[i].color,
                    x:army[i].unit[j].x, y:army[i].unit[j].y,
                    info: [
                        'Type:' + GG_DATA_CHAR_BIG_STR[army[i].unit[j].type]
                        ,'FD:' + army[i].unit[j].defence_fatigue
                        ,'ZOC:' + army[i].unit[j].zoc_cost 
                        ,'FT:' + army[i].unit[j].fatigue
                        ]
                    });
            } else if (gg.controller_user.data.dialog == 5) {
                units.push({
                    color: army[i].color,
                    x:army[i].unit[j].x, y:army[i].unit[j].y,
                    info: [
                        'Type:' + GG_DATA_CHAR_BIG_STR[army[i].unit[j].type]
                        ,'RF:' + army[i].unit[j].recover_fatigue
                        ,'AR:' + army[i].unit[j].add_area_point 
                        //,'SN:' + army[i].unit[j].status_change_number
                        ]
                    });
            } else if (gg.controller_user.data.dialog == 6) {
                var temp_str = new Array(7);
                for (var k = 0; k < 7; k++) {
                    if (k < army[i].unit[j].damage_array.length) {
                        temp_str[k] = GG_DATA_ARMY_COLOR_ALPHABET[army[k].color] + ':' + army[i].unit[j].damage_array[k];
                    } else {
                        temp_str[k] = '';
                    }
                }
                var input_str = new Array(4);
                if (temp_str[2] == '') {
                    input_str[0] = temp_str[0];
                    input_str[1] = temp_str[1];
                    input_str[2] = '';
                    input_str[3] = '';
                } else if (temp_str[3] == '') {
                    input_str[0] = temp_str[0] + '/' + temp_str[1];
                    input_str[1] = temp_str[2];
                    input_str[2] = '';
                    input_str[3] = '';
                } else if (temp_str[4] == '') {
                    input_str[0] = temp_str[0] + '/' + temp_str[1];
                    input_str[1] = temp_str[2] + '/' + temp_str[3];
                    input_str[2] = '';
                    input_str[3] = '';
                } else if (temp_str[5] == '') {
                    input_str[0] = temp_str[0] + '/' + temp_str[1];
                    input_str[1] = temp_str[2] + '/' + temp_str[3];
                    input_str[2] = temp_str[4];
                    input_str[3] = '';
                } else if (temp_str[6] == '') {
                    input_str[0] = temp_str[0] + '/' + temp_str[1];
                    input_str[1] = temp_str[2] + '/' + temp_str[3];
                    input_str[2] = temp_str[4] + '/' + temp_str[5];
                    input_str[3] = '';
                } else {
                    input_str[0] = temp_str[0] + '/' + temp_str[1];
                    input_str[1] = temp_str[2] + '/' + temp_str[3];
                    input_str[2] = temp_str[4] + '/' + temp_str[5];
                    input_str[3] = temp_str[6];
                }                
                units.push({
                    color: army[i].color,
                    x:army[i].unit[j].x, y:army[i].unit[j].y,
                    info: [
                        'Type:' + GG_DATA_CHAR_BIG_STR[army[i].unit[j].type]
                        ,input_str[0]
                        ,input_str[1]
                        ,input_str[2]
                        ,input_str[3] 
                        ]
                    });
            }
        }
    }
    
    var view_flag = false;
    if (gg.controller_user.data.dialog < 7) {
        gg.controller_user.data.dialog++;
        view_flag = true;
        //gg.view.dialog_view(gg.controller_user.data.map, units, gg.controller_user.data.zoom, view_flag);
        gg.animation.set_etc_animation2(gg.controller_user.data.blink.map,
                           gg.controller_user.data.blink.army, [],
                           gg.controller_user.data.blink.zoom, null, 0,
                           gg.controller_user.data.blink.area_map,
                           gg.controller_user.data.blink.units,
                           0, false, false, units);

    } else {
        if (gg.controller_user.data.status != GG_CONTROLLER_USER_EVENT_SELECT_MOVE_UNIT) {
            button_cancel.disabled = false;
        }    
        //button_cancel.disabled = false;
        button_menu.disabled = false;
        gg.event.add_event(gg.controller_user.data.map, gg.controller_user.data.zoom, gg.controller_user.recv_event);

        gg.controller_user.data.dialog = 0;
        gg.animation.set_etc_animation2(gg.controller_user.data.blink.map,
                           gg.controller_user.data.blink.army, [],
                           gg.controller_user.data.blink.zoom, null, 0,
                           gg.controller_user.data.blink.area_map,
                           gg.controller_user.data.blink.units,
                           0, false, true);
    }

};

// BLINK MAP
//gg.controller_user.blink_select_map = function() {
//    if (0 == 0) {
//        0 = 1;
//    } else {
//        0 = 0;
//    }
//    if (document.hasFocus() == true) {
//        gg.animation.set_etc_animation2(gg.controller_user.data.blink.map,
//                           gg.controller_user.data.blink.army, [],
//                           gg.controller_user.data.blink.zoom, null, 0,
//                           gg.controller_user.data.blink.area_map,
//                           gg.controller_user.data.blink.units,
//                           0, false, true);
//    }
//    var timeout = GG_CONTROLLER_USER_BLINK_TIMEOUT;
//    if (document.hasFocus() == true) {
//        timeout = GG_CONTROLLER_USER_BLINK_TIMEOUT * 3;
//    }
    //gg.controller_user.data.timer_blink = setTimeout(gg.controller_user.blink_select_map, timeout);
    
//};
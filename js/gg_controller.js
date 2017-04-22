gg.controller = {};
gg.controller.data = {};
gg.controller.data.army;
gg.controller.data.start_army;
gg.controller.data.turn;
gg.controller.data.map;
gg.controller.data.area_map;
gg.controller.data.arms_total_damage;

gg.controller.data.zoom;
gg.controller.data.order_array = [];
gg.controller.data.order= 0;
gg.controller.data.start;
gg.controller.data.center;
gg.controller.data.win_or_lost;
gg.controller.data.friend_hitpoint;
gg.controller.data.enemy_hitpoint;
gg.controller.data.history;
//gg.controller.data.history_unit = [];
gg.controller.data.round;
gg.controller.data.lost = [];
gg.controller.data.game_end_turn;
gg.controller.data.exp_array = [];
gg.controller.data.unit_number;
//gg.controller.data.map_mode;
gg.controller.data.next_phase;
gg.controller.data.start_time;

gg.controller.data.start_time = 0;
var GG_CONTROLLER_CHECK = 6;
var GG_CONTROLLER_TOP_MENU_TIMEOUT = 5000;

var GG_CONTROLLER_NEXT_PHASE_LOST         = 0;
var GG_CONTROLLER_NEXT_PHASE_ECOVERY      = 1;
var GG_CONTROLLER_NEXT_PHASE_LEVEL_UP     = 2;
var GG_CONTROLLER_NEXT_PHASE_AREA         = 3;
var GG_CONTROLLER_NEXT_PHASE_CLASS_CHANGE = 4;
var GG_CONTROLLER_NEXT_PHASE_WIN          = 5;
var GG_CONTROLLER_NEXT_PHASE_TIME_OUT     = 100;

//var GG_CONTROLLER_TOP_MENU_TIMEOUT = 1;

gg.controller.get_level_up = function() {
    return gg.controller.data.level_up;
};

gg.controller.get_game_area_point = function(army_number) {
    return gg.controller.data.army[army_number].game_area_point;
};

gg.controller.get_all_hitpoint = function(army_number) {
    var result = {start_all_hitpoint: gg.controller.data.army[army_number].start_all_hitpoint
                  ,create_uinit_all_hitpoint: gg.controller.data.army[army_number].create_uinit_all_hitpoint
                  ,level_up_add_hitpoint: gg.controller.data.army[army_number].level_up_add_hitpoint};
    return result;
};

gg.controller.get_game_exp_list_army_number = function(army_number) {
    var army = gg.controller.data.army;
    var lost = gg.controller.data.lost;
    var list = [];
    for (var j = 0; j < army[army_number].unit.length; j++) {
        list.push({color: army[army_number].color, type: army[army_number].unit[j].type, game_exp: army[army_number].unit[j].game_exp,
                      game_move_distance: army[army_number].unit[j].game_move_distance,
                      game_damage_give: army[army_number].unit[j].game_damage_give,
                      game_damage_receive: army[army_number].unit[j].game_damage_receive,
                      game_recovery: army[army_number].unit[j].game_recovery,
                      game_fatigue: army[army_number].unit[j].game_fatigue,
                      game_recovery_fatigue: army[army_number].unit[j].game_recovery_fatigue,
                       exp: army[army_number].unit[j].exp, level:army[army_number].unit[j].level,
                       done_count:army[army_number].unit[j].done_count, alive_flag: true, born:army[army_number].unit[j].born,
                       move_distance: army[army_number].unit[j].move_distance});
    }
    for (var i = 0; i < lost.length; i++) {
        if (lost[i].color == army[army_number].color) {
            list.push({color: lost[i].color, type: lost[i].type, game_exp: lost[i].game_exp,
                  game_move_distance: lost[i].game_move_distance,
                  game_damage_give: lost[i].game_damage_give,
                  game_damage_receive: lost[i].game_damage_receive,
                  game_recovery: lost[i].game_recovery,
                  game_fatigue: lost[i].game_fatigue,
                  game_recovery_fatigue: lost[i].game_recovery_fatigue,
                   exp: lost[i].exp, level: lost[i].level,
                   done_count: lost[i].done_count, alive_flag: false, born: lost[i].born,
                   move_distance: lost[i].move_distance});
        }
    }
    return list;
};

gg.controller.get_game_exp_list = function() {
    var army = gg.controller.data.army;
    var lost = gg.controller.data.lost;
    var list = [];
    for (var i = 0; i < army.length; i++) {
        for (var j = 0; j < army[i].unit.length; j++) {
            list.push({color: army[i].color, type: army[i].unit[j].type, game_exp: army[i].unit[j].game_exp,
                      game_move_distance: army[i].unit[j].game_move_distance,
                      game_damage_give: army[i].unit[j].game_damage_give,
                      game_damage_receive: army[i].unit[j].game_damage_receive,
                      game_recovery: army[i].unit[j].game_recovery,
                      game_fatigue: army[i].unit[j].game_fatigue,
                      game_recovery_fatigue: army[i].unit[j].game_recovery_fatigue,
                       exp: army[i].unit[j].exp, level:army[i].unit[j].level,
                       done_count:army[i].unit[j].done_count, alive_flag: true, born:army[i].unit[j].born});
        }
    }
    for (var i = 0; i < lost.length; i++) {
        list.push({color: lost[i].color, type: lost[i].type, game_exp: lost[i].game_exp,
                  game_move_distance: lost[i].game_move_distance,
                  game_damage_give: lost[i].game_damage_give,
                  game_damage_receive: lost[i].game_damage_receive,
                  game_recovery: lost[i].game_recovery,
                  game_fatigue: lost[i].game_fatigue,
                  game_recovery_fatigue: lost[i].game_recovery_fatigue,
                   exp: lost[i].exp, level: lost[i].level,
                   done_count: lost[i].done_count, alive_flag: false, born: lost[i].born});
    }
    return list;
};

gg.controller.stop = function() {
    gg.controller.data.start = false;
};
gg.controller.restart = function() {
    gg.controller.data.start = true;
    gg.controller.turn_set();
};

gg.controller.retry = function() {
    gg.controller.start(gg.controller.data.org.units,
                        gg.controller.data.org.map,
                        gg.controller.data.org.hande,
                        gg.controller.data.org.size,
                        gg.controller.data.org.retina,
                        gg.controller.data.org.win_or_lost,
                        gg.controller.data.org.hitpoint,
                        gg.controller.data.org.map_info,
                        gg.controller.data.org.game_info,
                        gg.controller.data.org.round,
                        gg.controller.data.org.order,
                        gg.controller.data.org.game_end_turn,
                        //gg.controller.data.org.map_mode,
                        gg.controller.data.org.init_area_map,
                        gg.controller.data.org.class_change_uniq,
                        gg.controller.data.org.used_unit_list,
                        gg.controller.data.org.unit_diff,
                        gg.controller.data.org.lost_info,
                        gg.controller.data.org.level_up
                        );
};

gg.controller.start = function(units, map, hande, size, retina, win_or_lost,
                               hitpoint, map_info, game_info, round, order,
                               //game_end_turn, map_mode, init_area_map, class_change_uniq,
                               game_end_turn, init_area_map, class_change_uniq,
                               used_unit_list, unit_diff, lost_info,level_up) {
    var button_cancel = document.getElementById('button_cancel');
    button_cancel.innerHTML = '<i class="fa fa-times "></i>';
    button_cancel.onclick = gg.controller_user.cancel;
    button_cancel.disabled = true;
    button_cancel.className = 'leftsidebutton white_yellow';
    var button_dialog = document.getElementById('button_dialog');
    button_dialog.innerHTML = '<i class="fa fa-info"></i>';
    button_dialog.onclick = gg.controller_user.dialog;
    button_dialog.disabled = true;
    var button_menu = document.getElementById('button_menu');
    button_menu.innerHTML = '<i class="fa fa-cog"></i>';
    button_menu.onclick = gg.controller_user.menu;
    button_menu.disabled = true;

    var debug = false;    
    gg.controller.data.org = {};
    gg.controller.data.org.units            = JSON.parse(JSON.stringify(units));
    gg.controller.data.org.map               = JSON.parse(JSON.stringify(map));
    gg.controller.data.org.hande             = JSON.parse(JSON.stringify(hande));
    gg.controller.data.org.size              = JSON.parse(JSON.stringify(size));
    gg.controller.data.org.retina            = JSON.parse(JSON.stringify(retina));
    gg.controller.data.org.win_or_lost       = JSON.parse(JSON.stringify(win_or_lost));
    gg.controller.data.org.hitpoint          = JSON.parse(JSON.stringify(hitpoint));
    gg.controller.data.org.map_info          = JSON.parse(JSON.stringify(map_info));
    gg.controller.data.org.game_info         = JSON.parse(JSON.stringify(game_info));
    gg.controller.data.org.round             = JSON.parse(JSON.stringify(round));
    gg.controller.data.org.order             = JSON.parse(JSON.stringify(order));
    gg.controller.data.org.game_end_turn     = JSON.parse(JSON.stringify(game_end_turn));
    //gg.controller.data.org.map_mode          = JSON.parse(JSON.stringify(map_mode));
    gg.controller.data.org.init_area_map     = JSON.parse(JSON.stringify(init_area_map));
    gg.controller.data.org.class_change_uniq = JSON.parse(JSON.stringify(class_change_uniq));
    gg.controller.data.org.used_unit_list    = JSON.parse(JSON.stringify(used_unit_list));
    gg.controller.data.org.unit_diff         = JSON.parse(JSON.stringify(unit_diff));
    gg.controller.data.org.lost_info         = lost_info;
    gg.controller.data.org.level_up          = level_up;
                        
    gg.controller.data.start = true;
    gg.controller.data.map = map;
    gg.controller.data.zoom = size;
    gg.controller.data.win_or_lost = win_or_lost;
    gg.controller.data.class_change_uniq = class_change_uniq;
    gg.controller.data.used_unit_list = used_unit_list;
    gg.controller.data.start = true;
    if (game_info == GG_MENU_MODE_DEFENCE) {
        gg.controller.data.enemy_hitpoint = Math.floor(hande * hitpoint * 1 / 2);
    } else {
        gg.controller.data.enemy_hitpoint = Math.floor(hande * hitpoint);
    }
    
    gg.controller.data.hande = hande;
    gg.controller.data.friend_hitpoint = hitpoint;
    gg.controller.data.map_info = map_info;
    gg.controller.data.game_info = game_info;
    gg.controller.data.round = round;
    gg.controller.data.game_end_turn = game_end_turn;
    gg.controller.data.lost = [];
    gg.controller.data.lost_info = lost_info;
    gg.controller.data.level_up = level_up;
    gg.controller.data.start_unit_number = [];
    gg.controller.data.unit_number = units[0].unit.length;
    //gg.controller.data.map_mode = map_mode;
    gg.controller.data.arms_total_damage = 0;
    //gg.controller.data.history_unit = [];
    gg.controller.data.turn = 0;
    var save_data = {game:1,
                    hande: parseInt(hande),
                    team:parseInt(units[0].color),
                                  game_mode:game_info};
    gg.storage.save_recode(save_data);

    //
    gg.controller.data.exp_array = [];
    var temp_exp = hitpoint / GG_DATA_HITPOINT_ARRAY[1];
    for (var i = 0; i < GG_DATA_LEVEL_UP_DATA_ARRAY.length; i++) {
        gg.controller.data.exp_array.push(GG_DATA_LEVEL_UP_DATA_ARRAY[i] * temp_exp);
    }
    gg.controller.data.unit_diff = unit_diff;
    
    var area_map = [];
    for (var i = 0; i < map.length; i++) {
        area_map[i] = [];
        for (var j = 0; j < map[i].length; j++) {
            if (map[i][j] == 1) {
                area_map[i][j] = -1;
                //area_map[i][j] = 1;

                if (init_area_map != null) {
                    area_map[i][j] = init_area_map[i][j];
                }
            } else {
                area_map[i][j] = -2;
            }
        }
    }
    document.getElementById('turn_info').innerHTML = "<i class='fa fa-hourglass'></i>&nbsp;000/000";

    if (game_info == GG_MENU_MODE_CAMPAIGN) {
        document.getElementById('mode_info').innerHTML = 'C';
    } else if (game_info == GG_MENU_MODE_ONE_ON_ONE) {
        document.getElementById('mode_info').innerHTML = 'N';
    } else if (game_info == GG_MENU_MODE_DEFENCE) {
        document.getElementById('mode_info').innerHTML = 'D';
    } else if (game_info == GG_MENU_MODE_BENCHMARK) {
        document.getElementById('mode_info').innerHTML = 'B';
    } else if (game_info == GG_MENU_MODE_GIANT_KILLING) {
        document.getElementById('mode_info').innerHTML = 'G';
    } else if (game_info == GG_MENU_MODE_TEAM) {
        document.getElementById('mode_info').innerHTML = 'T';
    }
    if (game_info == GG_MENU_MODE_CAMPAIGN) {
        if (round < 9) {
            temp_str = '0' + (round + 1);
        } else {
            temp_str = (round + 1);
            
        }
        document.getElementById('round_info').innerHTML = "<i class='fa fa-map-signs'></i>&nbsp;" + temp_str + '/' + (GG_DATA_CAMPAIGN_INFO.length);
    } else if (game_info == GG_MENU_MODE_TEAM) {
        document.getElementById('round_info').innerHTML = "<i class='fa fa-map-signs'></i>&nbsp;" + '0' + (round) + '/0' + (GG_DATA_TEAM_ROUND);
    } else {
        document.getElementById('round_info').innerHTML = "<i class='fa fa-map-signs'></i>&nbsp;" + '--/--';
        
    }
    var str_unit_number = '00';
    if (game_info == GG_MENU_MODE_CAMPAIGN) {
        if (round < 9) {
            str_unit_number = '0' + (round + 1);
        } else {
            str_unit_number = (round + 1);
        }
    } else {
        if (units[0].unit.length < 10) {
            str_unit_number = '0' + units[0].unit.length;
        } else {
            str_unit_number = units[0].unit.length;
        }
    }
    document.getElementById('unit_info').innerHTML = "<i class='fa fa-user'></i>&nbsp;" + str_unit_number;

    var hande_str = '';
    hande_str = hande;
    if (hande > -1) {
        hande_str = '0' + hande;
    }
    
    document.getElementById('hande_info').innerHTML = "<i class='fa fa-shield'></i>&nbsp;" + hande_str;

    //document.getElementById('win_or_lost').innerHTML = '';
    var game_option_str = '';
    if (class_change_uniq == GG_DATA_CLASS_CHANGE_GAME_UNIQ) {
        //document.getElementById('win_or_lost').innerHTML = 'GM';
        game_option_str += 'G/';
    } else if (class_change_uniq == GG_DATA_CLASS_CHANGE_TEAM_UNIQ) {
        //document.getElementById('win_or_lost').innerHTML = 'TM';
        game_option_str += 'T/';
    }
    if (level_up == GG_DATA_LEVEL_UP_ARRAY[0]) {
        game_option_str += 'S';
    } else {
        game_option_str += 'H';
    }
    

    document.getElementById('win_or_lost').innerHTML = "<i class='fa fa-level-up'></i>&nbsp;" + game_option_str;

    var temp_str = '';
    if (gg.controller.data.unit_diff != 0) {
        temp_str += '0' + gg.controller.data.unit_diff;
    } else if (class_change_uniq == GG_DATA_CLASS_CHANGE_TEAM_UNIQ) {
        //document.getElementById('win_or_lost').innerHTML = 'TM';
        temp_str += '--';
    }

    document.getElementById('unit_diff_info').innerHTML = "<i class='fa fa-gavel'></i>&nbsp;" + temp_str;

    if (win_or_lost < 10) {
        temp_str = '000' + win_or_lost;
    } else if (win_or_lost < 100) {
        temp_str = '00' + win_or_lost;
    } else if (win_or_lost < 1000) {
        temp_str = '0' + win_or_lost;
    } else if (win_or_lost < 10000) {
        temp_str =  + win_or_lost;
    } else {
        temp_str = '9999';
    }
    
    document.getElementById('win_info').innerHTML = "<i class='fa fa-heart'></i>&nbsp;" + temp_str;

    if (lost_info == GG_DATA_LOST_ARRAY[0]) {
        var lost_option_str = '1-3';
    } else if (lost_info == GG_DATA_LOST_ARRAY[1]) {
        var lost_option_str = '---';
    }
    
    document.getElementById('lost_info').innerHTML = "<i class='fa fa-hourglass-end'></i>&nbsp;" + lost_option_str;
    if (hitpoint == 60) {
        var game_long_info = 'Long';
    } else if (hitpoint == 40) {
        var game_long_info = 'Mddl';
    } else if (hitpoint == 20) {
        var game_long_info = 'Shrt';
    }

    document.getElementById('game_long_info').innerHTML = "<i class='fa fa-clock-o'></i>&nbsp;" + game_long_info;

    var map_mode_str = '';
    if (map_info == GG_DATA_MAP_ARRAY[0]) {
        map_mode_str = 'Bln';
    } else if (map_info == GG_DATA_MAP_ARRAY[1]) {
        map_mode_str = 'Rvr';
    } else if (map_info == GG_DATA_MAP_ARRAY[2]) {
        map_mode_str = 'Mnt';
    } else if (map_info == GG_DATA_MAP_ARRAY[3]) {
        map_mode_str = 'Pln';
    } else if (map_info == GG_DATA_MAP_ARRAY[4]) {
        map_mode_str = 'Rnd';
    }
    document.getElementById('map_info').innerHTML = "<i class='fa fa-globe'></i>&nbsp;" + map_mode_str;
    
    //if (game_end_turn == 0) {
    //    document.getElementById('end_turn').innerHTML = '-';
    //} else {
    //    document.getElementById('end_turn').innerHTML = game_end_turn;
    //}
    //document.getElementById('turn_info').innerHTML = '';
    for (var i = 0; i < 2; i++) {
        document.getElementById('army_' + i + '_name').innerHTML = '';
        document.getElementById('army_' + i + '_sum_hitpoint').innerHTML = '';
        document.getElementById('army_' + i + '_area_point').innerHTML = '';
    }
    
    var army = new Array();
    var view_unit = new Array();
    var animation_obj = [];
    gg.controller.data.history = [];
    var temp_level = 0;
    var temp_position;
    var temp_army = [];
    var castle_numbers = [];
    var temp_unit_data = [];
    var temp_str = '';
    var temp_do_unit_count = 0;
    for (var i = 0; i < units.length; i++) {
        temp_do_unit_count = 0;
        gg.controller.data.start_unit_number[i] = units[i].unit.length;
        temp_army[i] ={};
        castle_numbers[i] = 0;
        gg.controller.data.history[i] = [];
        
        army[i] = {};
        army[i].create_value = GG_DATA_UNIT_CREATE;
        if (units[i].create_value != undefined) {
            army[i].create_value = units[i].create_value;
        }
        army[i].unit = new Array();
        army[i].color = parseInt(units[i].color);
        army[i].name = units[i].name;
        army[i].operation = units[i].operation;
        if (units[i].area_point != undefined) {
            army[i].area_point = units[i].area_point;
        } else {
            army[i].area_point = 0;
        }
        army[i].game_area_point = army[i].area_point;
        
        army[i].position = units[i].position;
        //if (units[i].unit_create_oder != undefined) {
        //    army[i].unit_create_oder = units[i].unit_create_oder;
        //} else {
            //if (game_info == GG_MENU_MODE_GIANT_KILLING
            //    && army[i].operation  == GG_DATA_OPERATION_CPU) {
            //    army[i].unit_create_oder = 0;            
            //} else {
        //    army[i].unit_create_oder = 12;
            //}
        //}
        army[i].action_unit_number = 0;
        //if (army[i].operation == GG_DATA_OPERATION_CPU) {
        //    army[i].max_hitpoint = gg.controller.data.enemy_hitpoint;
        //} else {
        //    army[i].max_hitpoint = hitpoint;
        //}
        army[i].max_hitpoint = hitpoint;
        if (units[i].hitpoint_percentage != null) {
            army[i].max_hitpoint = Math.floor(hitpoint * units[i].hitpoint_percentage);
            army[i].hitpoint_percentage = units[i].hitpoint_percentage;
        } else {
            army[i].hitpoint_percentage = 1;
        }
        if (units[i].start_exp != null) {
            army[i].start_exp = units[i].start_exp;
        } else {
            army[i].start_exp = 0;
        }
        //if (units[i].class_change_flag != null) {
        //    army[i].class_change_flag = units[i].class_change_flag;
        //} else {
        //    army[i].class_change_flag = true;
        //}
        army[i].upper_class_change_level = units[i].upper_class_change_level;
        
        if (army[i].operation == GG_DATA_OPERATION_CPU) {
            army[i].add_attack_point = GG_DATA_HANDE_ADD_POINT[hande].add_attack_point;
            army[i].add_defence_point = GG_DATA_HANDE_ADD_POINT[hande].add_defence_point;
            army[i].add_recovery_point = GG_DATA_HANDE_ADD_POINT[hande].add_recovery_point;
        } else {
            army[i].add_attack_point = 0;
            army[i].add_defence_point = 0;
            army[i].add_recovery_point = 0;

        }
        army[i].start_all_hitpoint        = 0;
        army[i].create_uinit_all_hitpoint = 0;
        army[i].level_up_add_hitpoint     = 0;
        
        //document.getElementById('army_' + i + '_name').innerHTML = army[i].name;
        document.getElementById('army_' + i + '_name').innerHTML = '<i class="fa fa-flag"></i>';
        var sum_hitpoint = 0;
        var sum_attack_defence_point = 0;
        temp_level = 0;
        temp_position = 0;
        temp_unit_data[i] = {lower_units: 0, middle_units: 0, upper_units: 0, lost_units: 0};
        for (var j = 0; j < units[i].unit.length; j++) {
            army[i].unit[j] = {};
            army[i].unit[j].done_count = 0;
            army[i].unit[j].born = GG_DATA_BORN_PATTERN_START;
            //units[i].unit[j].id = GG_DATA_UNIT_SHORTSWORD;
            army[i].unit[j].type = units[i].unit[j].id;

            if (army[i].unit[j].type < 50) {
                temp_unit_data[i].upper_units++;
            } else if (army[i].unit[j].type < 100) {
                temp_unit_data[i].middle_units++;
            } else {
                temp_unit_data[i].lower_units++;
            }

            var type = units[i].unit[j].id;
            army[i].unit[j].dead_attack = null;
            army[i].unit[j].class_down_flag = false;
            army[i].unit[j].damage_array = new Array(units.length);
            for (var k = 0; k < army[i].unit[j].damage_array.length; k++) {
                army[i].unit[j].damage_array[k] = 0;
            }
            
            // hitpoint & reover & rescue
            army[i].unit[j].max_hitpoint = army[i].max_hitpoint;
            army[i].unit[j].hitpoint = army[i].unit[j].max_hitpoint;
            army[i].start_all_hitpoint += army[i].unit[j].max_hitpoint;
            if (units[i].unit[j].hitpoint != null) {
                army[i].unit[j].hitpoint = units[i].unit[j].hitpoint;
            }
            army[i].unit[j].sum_damage = 0;
            army[i].unit[j].move_distance = 0;
            army[i].unit[j].dead_count_down = -1;
            if (units[i].unit[j].dead_count_down != null) {
                army[i].unit[j].dead_count_down = units[i].unit[j].dead_count_down;
            }

            army[i].unit[j].small_recovery = GG_DATA_DEFAULT_RECOVERY + army[i].add_recovery_point;
            army[i].unit[j].big_recovery = GG_DATA_DEFAULT_NO_ATTACKK_RECOVERY;
            army[i].unit[j].recovery_turn_flag = GG_DATA_AUTO_RECOVERY_OFF;
            
            army[i].unit[j].attack_point = GG_DATA_DEFAULT_ATTACK_POINT + army[i].add_attack_point;
            if (units[i].unit[j].attack_point != null) {
                army[i].unit[j].attack_point = units[i].unit[j].attack_point;
            }

            army[i].unit[j].defence_type = GG_DATA_CHAR_SPEC[units[i].unit[j].id].defence_type;
            army[i].unit[j].defence_point = GG_DATA_CHAR_SPEC[units[i].unit[j].id].defence_point + army[i].add_defence_point;
            army[i].unit[j].defence_fatigue = GG_DATA_CHAR_SPEC[units[i].unit[j].id].defence_fatigue;
            
            if (units[i].unit[j].move_point != null) {
                army[i].unit[j].move_point = units[i].unit[j].move_point;
            } else {
                army[i].unit[j].move_point = GG_DATA_CHAR_SPEC[units[i].unit[j].id].move_point;
            }
            army[i].unit[j].move_type = GG_DATA_CHAR_SPEC[units[i].unit[j].id].move_type;
            army[i].unit[j].zoc_cost = GG_DATA_CHAR_SPEC[units[i].unit[j].id].zoc_cost;
            army[i].unit[j].move_fatigue = GG_DATA_DEFAULT_MOVE_FATIGUE;
            
            army[i].unit[j].attack_type                  = GG_DATA_CHAR_SPEC[units[i].unit[j].id].attack_type;
            army[i].unit[j].attack_min_range             = GG_DATA_CHAR_SPEC[units[i].unit[j].id].attack_min_range;
            army[i].unit[j].attack_max_range             = GG_DATA_CHAR_SPEC[units[i].unit[j].id].attack_max_range;
            army[i].unit[j].attack_fatigue               = GG_DATA_CHAR_SPEC[units[i].unit[j].id].attack_fatigue;
            
            if (units[i].unit[j].fatigue != null) {
                army[i].unit[j].fatigue = units[i].unit[j].fatigue;
            } else {
                temp_do_unit_count += 1;
                army[i].unit[j].fatigue = 0;
            }            
            army[i].unit[j].recover_fatigue = GG_DATA_DEFAULT_RECOVERY_FATIGUE;
            
            // area_point
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
            army[i].unit[j].status_changed       = GG_DATA_STATUS_CHANGE_NONE;
            
            if (units[i].unit[j].status_changed != null) {
                army[i].unit[j].status_changed = units[i].unit[j].status_changed;
            }
            
            army[i].unit[j].x = units[i].unit[j].x;
            army[i].unit[j].y = units[i].unit[j].y;
            if (map[units[i].unit[j].y][units[i].unit[j].x] == 1) {
                castle_numbers[i]++;
            }
            temp_position += map[army[i].unit[j].y][army[i].unit[j].x];
            if (map[army[i].unit[j].y][army[i].unit[j].x] == 1) {
            //    army[i].area_point++;
                area_map[army[i].unit[j].y][army[i].unit[j].x] = army[i].color;
            }
            army[i].unit[j].status = GG_DATA_STATUS_NOT_ACTION;

            /// TEAM
            army[i].unit[j].small_recovery    += GG_DATA_TEAM[army[i].color].small_recovery;
            army[i].unit[j].big_recovery      += GG_DATA_TEAM[army[i].color].big_recovery;
            army[i].unit[j].attack_point      += GG_DATA_TEAM[army[i].color].attack_point;
            army[i].unit[j].defence_point     += GG_DATA_TEAM[army[i].color].defence_point;
            army[i].unit[j].move_point        += GG_DATA_TEAM[army[i].color].move_point;
            if (army[i].unit[j].move_point <= 0) {
                army[i].unit[j].move_point = 2;
            }
            if (army[i].unit[j].move_point > 10) {
                army[i].unit[j].move_point = 10;
            }

            army[i].unit[j].attack_fatigue      += GG_DATA_TEAM[army[i].color].attack_fatigue;
            army[i].unit[j].move_fatigue        += GG_DATA_TEAM[army[i].color].move_fatigue;
            if (army[i].unit[j].defence_fatigue > 0) {
                army[i].unit[j].defence_fatigue        += GG_DATA_TEAM[army[i].color].defence_fatigue;
            }

            army[i].unit[j].recover_fatigue  += GG_DATA_TEAM[army[i].color].recover_fatigue;
            army[i].unit[j].add_area_point   += GG_DATA_TEAM[army[i].color].add_area_point;
            //if (army[i].unit[j].status_change_number > 0) {
            //    army[i].unit[j].status_change_number += GG_DATA_TEAM[army[i].color].status_change_number;
            //}

            // level/exp            
            army[i].unit[j].level = 0;
            army[i].unit[j].exp = army[i].start_exp;
            army[i].unit[j].game_exp = 0;
            army[i].unit[j].game_move_distance = 0;
            army[i].unit[j].game_damage_give = 0;
            army[i].unit[j].game_damage_receive = 0;
            army[i].unit[j].game_recovery = 0;
            army[i].unit[j].game_fatigue = 0;
            army[i].unit[j].game_recovery_fatigue = 0;

            if (units[i].unit[j].exp != null) {
                army[i].unit[j].exp = units[i].unit[j].exp;
            }
            if (army[i].unit[j].exp != 0) {
                var level_up_array = GG_DATA_LEVEL_UP_TEAM_ARRAY[army[i].color];

                for (var k = army[i].unit[j].level + 1; k < gg.controller.data.exp_array.length; k++) {
                    if (army[i].unit[j].exp >= gg.controller.data.exp_array[k]) {
                        army[i].unit[j].level = k;
                        army[i].unit[j].hitpoint     += GG_DATA_LEVEL_UP_ADD_HITPOINT_POINT;
                        army[i].unit[j].max_hitpoint += GG_DATA_LEVEL_UP_ADD_HITPOINT_POINT;
                        army[i].start_all_hitpoint   += GG_DATA_LEVEL_UP_ADD_HITPOINT_POINT;

                        if (gg.controller.data.level_up == GG_DATA_LEVEL_UP_ARRAY[1]) {
                            army[i].unit[j].hitpoint += GG_DATA_LEVEL_UP_ADD_HITPOINT_POINT;
                            army[i].unit[j].max_hitpoint += GG_DATA_LEVEL_UP_ADD_HITPOINT_POINT;
                            army[i].start_all_hitpoint   += GG_DATA_LEVEL_UP_ADD_HITPOINT_POINT;
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
                            
                        } else if (level_up_array[k] == GG_DATA_LEVEL_UP_FATIGUE) {
                            army[i].unit[j].recover_fatigue += GG_DATA_LEVEL_UP_ADD_FATIGUE;

                        } else if (level_up_array[k] == GG_DATA_LEVEL_UP_AREA_POINT) {
                            army[i].unit[j].add_area_point += GG_DATA_LEVEL_UP_ADD_AREA_POINT;
                            
                        //} else if (level_up_array[k] == GG_DATA_LEVEL_UP_STATUS_CHANGE_NUMBER &&
                        //           army[i].unit[j].status_change_number != 0) {
                        //    army[i].unit[j].status_change_number += 1;
                        } else {
                            army[i].unit[j].max_hitpoint += GG_DATA_LEVEL_UP_ADD_HITPOINT_POINT;
                            army[i].unit[j].hitpoint     += GG_DATA_LEVEL_UP_ADD_HITPOINT_POINT;
                            army[i].start_all_hitpoint   += GG_DATA_LEVEL_UP_ADD_HITPOINT_POINT;
                        }
                    } else {
                        break;
                    }                    
                }
            }
            //gg.controller.data.history_unit.push({
            //        army_number: i, unit_number: j,
            //        color: army[i].color, turn:gg.controller.data.turn,
            //        level: army[i].unit[j].level + 1, type: army[i].unit[j].type,
            //        status: GG_DATA_HISTORY_STATUS_CREATE
            //    });

            temp_level += army[i].unit[j].level + 1;

            // check

            sum_hitpoint += army[i].unit[j].hitpoint;
            sum_attack_defence_point += army[i].unit[j].attack_point + army[i].unit[j].defence_point +
                                        army[i].unit[j].small_recovery;
            
            //animation_obj.list.push({army_number: i, unit_number:j, kind: GG_DATA_ANIMATION_FADE_UNIT});
            animation_obj.push({group: GG_DATA_ANIMATION_ETC_FADE_UNIT,
                                army_number: i, unit_number:j,
                                x: army[i].unit[j].x, y: army[i].unit[j].y,
                                color: army[i].color, type: army[i].unit[j].type
                                });
        }
        temp_army[i].sum_hitpoint = sum_hitpoint;
        temp_army[i].area_point = army[i].area_point;
        gg.controller.data.history[i][0] = {sum_hitpoint: sum_hitpoint, exp:0,
                                            area_point:0, unit_number:army[i].unit.length,
                                            attack_damage:0, defence_damage:0,
                                            fatigue:0,
                                            average_level: Math.floor(temp_level / army[i].unit.length * 10) / 10,
                                            average_position: Math.floor(temp_position / army[i].unit.length * 10) / 10,
                                            sum_attack_defence_point: sum_attack_defence_point,
                                            move_distance: 0,
                                            do_unit_count: temp_do_unit_count,
                                            recovery: 0,
                                            sum_attack_point:0,
                                            sum_defence_point:0,
                                            sum_move_point:0,
                                            sum_recovery_point:0,
                                            sum_max_hitpoint:0
                                            };
        // SUM HITPOINT
        if (sum_hitpoint < 10) {
            var temp_sum_hitpoint_str = '000' + sum_hitpoint;
        } else if (sum_hitpoint < 100) {
            var temp_sum_hitpoint_str = '00' + sum_hitpoint;
        } else if (sum_hitpoint < 1000) {
            var temp_sum_hitpoint_str = '0' + sum_hitpoint;
        } else if (sum_hitpoint < 10000) {
            var temp_sum_hitpoint_str = sum_hitpoint;
        } else {
            var temp_sum_hitpoint_str = '99999';
        }
        document.getElementById('army_' + i + '_sum_hitpoint').innerHTML = "<i class='fa fa-heart'></i>&nbsp;" + temp_sum_hitpoint_str;

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
        document.getElementById('army_' + i + '_area_point').innerHTML   = "<i class='fa fa-university'></i>&nbsp;" + temp_str;

        temp_str = "";
        if (castle_numbers[i] < 10) {
            temp_str += '0' + castle_numbers[i];
        } else if (castle_numbers[i] < 100) {
            temp_str += castle_numbers[i];
        } else {
            temp_str += '99';
        }
        document.getElementById('army_' + i + '_castle').innerHTML = "<i class='fa fa-fort-awesome'></i>&nbsp;" + temp_str;

        temp_str = '';
        if (temp_unit_data[i].lower_units < 10) {
            temp_str += '0' + temp_unit_data[i].lower_units;
        } else if (temp_unit_data[i].lower_units < 100) {
            temp_str += temp_unit_data[i].lower_units;
        } else {
            temp_str += '99';
        }
        temp_str += '/';

        //document.getElementById('army_' + i + '_upper_units').innerHTML  = "<i class='fa fa-star'></i>&nbsp;" + temp_str;
        if (temp_unit_data[i].middle_units < 10) {
            temp_str += '0' + temp_unit_data[i].middle_units;
        } else if (temp_unit_data[i].middle_units < 100) {
            temp_str += temp_unit_data[i].middle_units;
        } else {
            temp_str += '99';
        }
        temp_str += '/';


        //document.getElementById('army_' + i + '_middle_units').innerHTML = "<i class='fa fa-star-half-o'></i>&nbsp;" + temp_str;

        if (temp_unit_data[i].upper_units < 10) {
            temp_str += '0' + temp_unit_data[i].upper_units;
        } else if (temp_unit_data[i].upper_units < 100) {
            temp_str += temp_unit_data[i].upper_units;
        } else {
            temp_str += '99';
        }
        temp_str += "&nbsp;&nbsp;<i class='fa fa-user-plus'></i>&nbsp;" + '00' + "&nbsp;&nbsp;<i class='fa fa-user-times'></i>&nbsp;" + '00';

        //document.getElementById('army_' + i + '_lower_units').innerHTML  = "<i class='fa fa-star-o'></i>&nbsp;" + temp_str;

        //document.getElementById('army_' + i + '_lost_units').innerHTML  = "<i class='fa fa-trash'></i>&nbsp;000";
        //document.getElementById('army_' + i + '_create_units').innerHTML  = "<i class='fa fa-fire'></i>&nbsp;000";

        document.getElementById('army_' + i + '_units').innerHTML  = "<i class='fa fa-users'></i>&nbsp;" + temp_str;
        temp_str = '<i class="fa fa-level-up" ></i>&nbsp;';
        if (army[i].upper_class_change_level != GG_DATA_UPPER_CLASS_CHANGE_LEVEL_NONE) {
            //temp_str += '<i class="fa fa-circle-o" />';
            temp_str += (army[i].upper_class_change_level + 1);
        } else {
            temp_str += '<i class="fa fa-times" />';
        }

        document.getElementById('army_' + i + '_level_up').innerHTML = temp_str;
    }
    
    document.getElementById('army_1').style.display = '';
    //if (units.length >= 3) {
    //    document.getElementById('army_2').style.display = '';
    //} else {
    //    document.getElementById('army_2').style.display = 'none';
    //}
    //if (units.length >= 5) {
    //    document.getElementById('army_3').style.display = '';
    //} else {
    //    document.getElementById('army_3').style.display = 'none';
    //}
    
    gg.controller.data.order_array = [];
    //
    var start_army
    if (order == GG_DATA_ORDER) {
        start_army = Math.floor(Math.random() * army.length);
    } else {
        start_army = order - 1;
        if (start_army < 0) {
            start_army = army.length - 1;
        }
    }
    // debug
    if (debug) {
        start_army = 1;
    }
    gg.controller.data.start_army = start_army;
    for (var i = start_army; i < army.length; i++ ){
        gg.controller.data.order_array.push(i);
    }
    for (var i = 0; i < start_army; i++ ){
        gg.controller.data.order_array.push(i);
    }
    gg.animation.set_data(gg.controller.data.turn, temp_army);

    gg.controller.data.army = army;
    gg.controller.data.area_map = area_map;
    gg.controller_user.init();
    gg.animation.clear_replay();
    //gg.animation.set_move_animation(map, army, animation_obj, size, gg.controller.view_dailog_timeout, area_map, [], true);
    //gg.animation.set_move_animation2(map, army, animation_obj, size, gg.controller.view_dailog_timeout, area_map, [], true);
    gg.animation.set_etc_animation2(map, army, animation_obj, size, gg.controller.view_dailog_timeout, GG_DATA_ANIMATION_RISE, area_map, [], 0, true, false);

};

gg.controller.view_dailog_timeout = function() {
    //setTimeout(gg.controller.view_dailog, 1000);
    requestAnimationFrame(gg.controller.view_dailog);
};

gg.controller.view_dailog = function() {
    //
    var lang = gg.menu.get_lang();
    var element = document.getElementById('destinetion');
    element.style.display = 'block';
    //element.style.top = ;
    //element.style.left = 'block';
    var str = '';
    str += '<table>';
    str += '<tbody>';
    str += '<tr>';
    str += '<td class="top_dialog start_info">'
    
    if (gg.controller.data.game_info == GG_MENU_MODE_ONE_ON_ONE) {
        str += GG_DATA_DICTTIONARY.normal_game[lang];
    } else if (gg.controller.data.game_info == GG_MENU_MODE_CAMPAIGN) {
        str += GG_DATA_DICTTIONARY.campaign_game[lang];
    } else if (gg.controller.data.game_info == 'defence') {
        str += GG_DATA_DICTTIONARY.many_enemy[lang];
    } else if (gg.controller.data.game_info == 'giant') {
        str += GG_DATA_DICTTIONARY.stroge_enemy[lang];
    } else if (gg.controller.data.game_info == GG_MENU_MODE_TEAM) {
        str += GG_DATA_DICTTIONARY.team[lang];
    }
    //+ GG_DATA_GAME_MODE_STR[gg.controller.data.game_info] +
    str += '</td>';
    str += '<td class="start_info"></td>';
    str += '</tr>';

    if (gg.controller.data.game_info == GG_MENU_MODE_CAMPAIGN) {
        str += '<tr>';
        str += '<td class="top_dialog start_info">' + GG_DATA_DICTTIONARY.round[lang] + '</td>';
        str += '<td class="start_info">' + (gg.controller.data.round + 1) + '/' + (GG_DATA_CAMPAIGN_INFO.length) + '</td>';
        str += '</tr>';
        str += '<tr>';
        str += '<td class="top_dialog start_info">' + GG_DATA_DICTTIONARY.end_turn[lang] + '</td>';
        str += '<td class="start_info">' + gg.controller.data.game_end_turn + '</td>';
        str += '</tr>';
    } else if (gg.controller.data.game_info == GG_MENU_MODE_TEAM) {
        str += '<tr>';
        str += '<td class="top_dialog start_info">' + GG_DATA_DICTTIONARY.round[lang]　+ '</td>';
        str += '<td class="start_info">' + (gg.controller.data.round) + '/' + (GG_DATA_TEAM_ROUND) + '</td>';
        str += '</tr>';
    }
    str += '<tr>';
    str += '<td class="top_dialog start_info">' + GG_DATA_DICTTIONARY.friend_team[lang] + '</td>';
    str += '<td class="start_info"><i class="fa fa-flag" style="color:' + GG_DATA_MENU_COLOR[gg.controller.data.army[0].color]+ ';"></i></td>';
    str += '</tr>';

    str += '<tr>';
    str += '<td class="top_dialog start_info">' + GG_DATA_DICTTIONARY.enemy_team[lang] + '</td>';
    str += '<td class="start_info"><i class="fa fa-flag" style="color:' + GG_DATA_MENU_COLOR[gg.controller.data.army[1].color]+ ';"></i></td>';
    str += '</tr>';

    var start_team = gg.controller.data.start_army + 1;
    if (start_team > gg.controller.data.army.length - 1) {
        start_team = 0;
    }

    str += '<tr>';
    str += '<td class="top_dialog start_info">' + GG_DATA_DICTTIONARY.game_first[lang] + '</td>';
    str += '<td class="start_info"><i class="fa fa-flag" style="color:' + GG_DATA_MENU_COLOR[gg.controller.data.army[start_team].color]+ ';"></i></td>';
    str += '</tr>';

    str += '<tr>';
    str += '<td class="top_dialog start_info">' + GG_DATA_DICTTIONARY.hande[lang] + '</td>';
    str += '<td class="start_info">' + gg.controller.data.hande + '</td>';
    str += '</tr>';

    str += '<tr>';
    str += '<td class="top_dialog start_info">' + GG_DATA_DICTTIONARY.game_time[lang] + '</td>';
    var game_long_str = '';
    if (gg.controller.data.friend_hitpoint == 20) {
        game_long_str = 'Shrt';
    } else if (gg.controller.data.friend_hitpoint == 40) {
        game_long_str = 'Mddl';
    } else if (gg.controller.data.friend_hitpoint == 60) {
        game_long_str = 'Long';
    }
    str += '<td class="start_info">' + game_long_str + '</td>';
    str += '</tr>';

    str += '<tr>';
    str += '<td class="top_dialog start_info">' + GG_DATA_DICTTIONARY.map[lang] + '</td>';
    str += '<td class="start_info">' + gg.controller.data.map_info + '</td>';
    str += '</tr>';

    str += '<tr>';
    str += '<td class="top_dialog start_info">' + GG_DATA_DICTTIONARY.winning[lang] + '</td>';
    str += '<td class="start_info">' + gg.controller.data.win_or_lost + '</td>';
    str += '</tr>';

    str += '<tr>';
    str += '<td class="top_dialog start_info">' + GG_DATA_DICTTIONARY.upper_unit[lang] + '</td>';
    str += '<td class="start_info">' + gg.controller.data.class_change_uniq + '</td>';
    str += '</tr>';

    str += '<tr>';
    str += '<td class="top_dialog start_info">' + GG_DATA_DICTTIONARY.lost_turn[lang] + '</td>';
    str += '<td class="start_info">' + gg.controller.data.lost_info + '</td>';
    str += '</tr>';

    str += '<tr>';
    str += '<td class="top_dialog start_info">' + GG_DATA_DICTTIONARY.level_up[lang] + '</td>';
    str += '<td class="start_info">' + gg.controller.data.level_up + '</td>';
    str += '</tr>';

    str += '</tbody>';
    str += '</table>';

    //str += '<button id="game_start" class="long_button white">' + GG_DATA_DICTTIONARY.unit_start[lang] + '</button>';    
    str += '<button id="game_start" class="long_button white"><i class="fa fa-arrow-circle-o-right"></i></button>';    
    element.innerHTML = str;
    //console.log('width:' + element.clientWidth + ' windows:' + window.innerWidth);
    var left_position = (window.innerWidth - element.clientWidth) /2;
    element.style.left = left_position;
    var canvas = document.getElementById('canvas_0');
    var top_position = (canvas.clientHeight - element.clientHeight) /2 ;
    if (top_position < 0) {
        top_position = 0;
    }
    element.style.top = top_position;    
    
    var game_start = document.getElementById('game_start');
    game_start.addEventListener('click', function(){
        //gg.view.load_audio();
        //var audio = new Audio ('audio/passion_of_sorrow.mp3');
        //audio.loop = true;
        //var audio = document.getElementById('audio_bgm');
        //var url;
        //audio.play();
        //var basePath = String(location);
        //var path = basePath.substr(0, basePath.lastIndexOf("/"));
        //var str = location.pathname;
        //var sura = str.lastIndexOf('/');
        //var url = str.substring(0, sura + 1);
        //var url = path + '/audio/passion_of_sorrow.mp3';
        //var url = 'file:///android_asset/www/audio/passion_of_sorrow.mp3';
        //var media = 'passion_of_sorrow.mp3';
        //url += 'audio/passion_of_sorrow.mp3';
        //url = 'http://mizuao.news.coocan.jp/eee/audio/passion_of_sorrow.mp3';
        //url = '/android_asset/www/audio/passion_of_sorrow.mp3';
        //var audio = new Audio (url);
        
        //if (navigator.userAgent.indexOf('Android') >= 0) {
            //var my_media = new Media(url, function(){}, function(){},function(){});
            //my_media.play({ numberOfLoops: 0, playAudioWhenScreenIsLocked : false });
            
        //} else {
            //var audio = new Audio (url);
            //audio.loop = true;
            //audio.play();
        //}
        
        //var my_media = new Media(url,
            // success callback
             //function () {
             //   var check = document.getElementById('check');
             //   check.innerHTML += 'OK';
             //   check.innerHTML += url;
             //},
        //     gg.controller.erase_dailog,
            // error callback
        //     function (err) {
        //        var check = document.getElementById('check');
        //        check.innerHTML += 'ng';
        //        check.innerHTML += url;
        //        check.innerHTML += err;
        //         }
        //);
       // Play audio
        //my_media.play();
        //var media = new Media('audio/passion_of_sorrow.mp3');
        //try {
            //audio.play();
            //audio.load();
            //audio.addEventListener("onload", function() {
            //    
            //}, true);
            //audio.play();
            //media.play();
            //throw  '';
        //    var check = document.getElementById('check');
        //    check.innerHTML += 'OK';
       //     check.innerHTML += url;
        //} catch (e) {
        //    var check = document.getElementById('check');
        //    check.innerHTML += e;
        //    check.innerHTML += 'NG';
        //}
        
        gg.controller.erase_dailog();
    });
    //console.dir(element);
    //
    //setTimeout(gg.controller.erase_dailog, 10000);
    //setTimeout(gg.controller.erase_dailog, GG_CONTROLLER_TOP_MENU_TIMEOUT);
};

gg.controller.erase_dailog = function() {
    gg.view.init_all_count();
    var element = document.getElementById('destinetion');
    element.style.display = 'none';
    gg.controller.data.start_time = new Date().getTime();
    gg.controller.turn_set();
};

gg.controller.turn_set = function() {
    //view
    if (gg.controller.data.start == false) {
        return;
    }
    
    gg.controller.data.turn++;
    var temp_str;
    if (gg.controller.data.turn < 10) {
        temp_str = '00' + gg.controller.data.turn;
        //code
    } else if (gg.controller.data.turn < 100) {
        temp_str = '0' + gg.controller.data.turn;
    } else {
        temp_str = '' + gg.controller.data.turn;
    }
    temp_str += '/';
    if (gg.controller.data.org.game_end_turn != 0) {
        if (gg.controller.data.org.game_end_turn < 10) {
            temp_str += '00' + gg.controller.data.org.game_end_turn;
        } else if (gg.controller.data.org.game_end_turn < 100) {
            temp_str += '0' + gg.controller.data.org.game_end_turn;
            //code
        } else {
            temp_str += '' + gg.controller.data.org.game_end_turn;            
        }
    } else {
        temp_str += '---';
        
    }
    document.getElementById('turn_info').innerHTML = "<i class='fa fa-hourglass'></i>&nbsp;" + temp_str;
    //console.log('turn:' + gg.controller.data.turn);
    //if (gg.controller.data.turn == 3) {
    //    console.log('bug 1');
    //}
    var army = gg.controller.data.army;
    for (var i = 0; i < army.length; i++) {
        document.getElementById('army_' + (i) + '_name').style.backgroundColor = '#fafafa';
        gg.controller.data.history[i][gg.controller.data.turn] = {sum_hitpoint: 0, exp:0,
                                            area_point:0, unit_number: 0,
                                            attack_damage:0, defence_damage:0, fatigue:0,
                                            average_level:0, average_position:0, move_distance:0,
                                            sum_attack_defence_point: 0,
                                            do_unit_count: 0,
                                            recovery: 0,
                                            sum_attack_point:0,
                                            sum_defence_point:0,
                                            sum_move_point:0,
                                            sum_recovery_point:0,
                                            sum_max_hitpoint:0
                                            };
        gg.controller.data.history[i][gg.controller.data.turn].defence_damage =
            gg.controller.data.history[i][gg.controller.data.turn - 1].defence_damage;
        gg.controller.data.history[i][gg.controller.data.turn].move_distance =
            gg.controller.data.history[i][gg.controller.data.turn - 1].move_distance;
        gg.controller.data.history[i][gg.controller.data.turn].recovery =
            gg.controller.data.history[i][gg.controller.data.turn - 1].recovery;

    }
    
    if (gg.controller.data.order_array.length == 0) {
        gg.controller.data.order_array = [];
        for (var i = 0; i < army.length; i++) {
            gg.controller.data.order_array[i] = i;
        }
    } else {
        var start_army = gg.controller.data.order_array[0];
        for (var i = 0; i < gg.controller.data.order_array.length - 1; i++) {
            gg.controller.data.order_array[i] = gg.controller.data.order_array[i + 1];
        }
        gg.controller.data.order_array[gg.controller.data.order_array.length - 1] = start_army;
    }
    gg.controller.data.order = -1;
    var color = GG_DATA_MENU_COLOR[army[gg.controller.data.order_array[0]].color];
    document.getElementById('turn_start_army').style.color = color;
    
    //gg.controller.data.order_array[2] = GG_CONTROLLER_CHECK;
    
    var view_unit = new Array();
    var map = gg.controller.data.map;
    for (var i = 0; i < army.length; i++) {
        army[i].action_unit_number = 0;
        for (var j = 0; j < army[i].unit.length; j++) {
            gg.controller.data.history[i][gg.controller.data.turn].sum_attack_point   += army[i].unit[j].attack_point;
            if (army[i].unit[j].status_changed == GG_DATA_STATUS_CHANGE_UP_ATTACK) {
                gg.controller.data.history[i][gg.controller.data.turn].sum_attack_point += 4;
            }
            gg.controller.data.history[i][gg.controller.data.turn].sum_defence_point  += army[i].unit[j].defence_point;
            if (army[i].unit[j].status_changed == GG_DATA_STATUS_CHANGE_UP_DEFENCE) {
                gg.controller.data.history[i][gg.controller.data.turn].sum_defence_point += 4;
            }
            gg.controller.data.history[i][gg.controller.data.turn].sum_move_point     += army[i].unit[j].move_point;
            if (army[i].unit[j].status_changed == GG_DATA_STATUS_CHANGE_UP_MOVE) {
                gg.controller.data.history[i][gg.controller.data.turn].sum_move_point += 4;
            }
            gg.controller.data.history[i][gg.controller.data.turn].sum_recovery_point += army[i].unit[j].small_recovery;
            gg.controller.data.history[i][gg.controller.data.turn].sum_max_hitpoint   += army[i].unit[j].max_hitpoint;

            army[i].unit[j].class_down_flag = false;
            army[i].unit[j].dead_attack = null;
            // otameshi start
            if (army[i].unit[j].dead_count_down == 0) {
                if (army[i].unit[j].type < 50) {
                    army[i].unit[j].dead_count_down = GG_DATA_DEAD_COUNT_UNIT_UPPER;
                } else if (army[i].unit[j].type < 100) {
                    army[i].unit[j].dead_count_down = GG_DATA_DEAD_COUNT_UNIT_MIDDLE;
                } else {
                    army[i].unit[j].dead_count_down = GG_DATA_DEAD_COUNT_UNIT_LOWER;
                }
                army[i].unit[j].recovery_turn_flag = GG_DATA_AUTO_RECOVERY_OFF;
                
            } else if (army[i].unit[j].dead_count_down > 0) {                
                army[i].unit[j].dead_count_down += 1;
                army[i].unit[j].recovery_turn_flag = GG_DATA_AUTO_RECOVERY_OFF;
            } else {
                if (army[i].unit[j].fatigue > 0) {
                    if (map[army[i].unit[j].y][army[i].unit[j].x] == GG_DATA_MAP_RIVER) {
                        if (army[i].unit[j].fatigue > army[i].unit[j].recover_fatigue * 2) {
                            army[i].unit[j].game_recovery_fatigue += army[i].unit[j].recover_fatigue * 2;
                        } else {
                            army[i].unit[j].game_recovery_fatigue += army[i].unit[j].recover_fatigue * 2 - army[i].unit[j].fatigue;
                            
                        }
                        army[i].unit[j].fatigue -= army[i].unit[j].recover_fatigue * 2;
                    } else {
                        if (army[i].unit[j].fatigue > army[i].unit[j].recover_fatigue) {
                            army[i].unit[j].game_recovery_fatigue += army[i].unit[j].recover_fatigue;
                        } else {
                            army[i].unit[j].game_recovery_fatigue += army[i].unit[j].recover_fatigue - army[i].unit[j].fatigue;
                            
                        }
                        army[i].unit[j].fatigue -= army[i].unit[j].recover_fatigue;
                    }
                }
                if (army[i].unit[j].fatigue <= 0) {
                    army[i].unit[j].fatigue = 0;
                    army[i].action_unit_number++;
                    if (army[i].unit[j].hitpoint < army[i].unit[j].max_hitpoint) {
                        if (army[i].unit[j].recovery_turn_flag == GG_DATA_AUTO_RECOVERY_OFF) {
                            army[i].unit[j].recovery_turn_flag = GG_DATA_AUTO_RECOVERY_ON;
                        } else {
                            army[i].unit[j].recovery_turn_flag = GG_DATA_AUTO_RECOVERY_OFF;
                        }
                    } else {
                        army[i].unit[j].recovery_turn_flag = GG_DATA_AUTO_RECOVERY_OFF;
                    }
                    
                } else {
                    army[i].unit[j].recovery_turn_flag = GG_DATA_AUTO_RECOVERY_OFF;
                }
                
                army[i].unit[j].status = GG_DATA_STATUS_NOT_ACTION;
                
            }
        }
        gg.controller.data.history[i][gg.controller.data.turn].do_unit_count = army[i].action_unit_number;
    }
        
    //gg.animation.set_units(view_unit, gg.controller.data.map, gg.controller.data.zoom);
    gg.animation.set_data(gg.controller.data.turn, null);

    //gg.animation.set_unit(map, gg.controller.data.army, gg.controller.data.zoom,
    //                       gg.controller.phase, gg.controller.data.area_map, [], 0, true);
    gg.animation.set_etc_animation2(map, gg.controller.data.army, [], gg.controller.data.zoom,
                           gg.controller.phase, 0, gg.controller.data.area_map, [], 0, true, false);
    //gg.controller.phase();

};

gg.controller.phase = function() {
    gg.controller.data.order++;
    var army = gg.controller.data.army;
    for (var i = 0; i < army.length; i++) {
        document.getElementById('army_' + (i) + '_name').style.backgroundColor = '#fafafa';
        document.getElementById('army_' + (i) + '_name').style.color = GG_DATA_MENU_COLOR[army[i].color];
        document.getElementById('army_' + (i) + '_sum_hitpoint').style.backgroundColor = '#fafafa';
        document.getElementById('army_' + (i) + '_area_point').style.backgroundColor = '#fafafa';

        document.getElementById('army_' + (i) + '_units').style.backgroundColor = '#fafafa';
        //document.getElementById('army_' + (i) + '_lower_units').style.backgroundColor = '#fafafa';
        //document.getElementById('army_' + (i) + '_middle_units').style.backgroundColor = '#fafafa';
        //document.getElementById('army_' + (i) + '_upper_units').style.backgroundColor = '#fafafa';
        //document.getElementById('army_' + (i) + '_create_units').style.backgroundColor = '#fafafa';
        //document.getElementById('army_' + (i) + '_lost_units').style.backgroundColor = '#fafafa';
        document.getElementById('army_' + (i) + '_castle').style.backgroundColor = '#fafafa';
        document.getElementById('army_' + (i) + '_level_up').style.backgroundColor = '#fafafa';
    }

    var zoom = gg.controller.data.zoom;
    if (gg.controller.data.order_array.length > gg.controller.data.order) {
        if (army[gg.controller.data.order_array[gg.controller.data.order]].action_unit_number > 0) {
            document.getElementById('army_' + (gg.controller.data.order_array[gg.controller.data.order]) + '_name').style.backgroundColor = GG_DATA_MENU_COLOR[army[gg.controller.data.order_array[gg.controller.data.order]].color];
            document.getElementById('army_' + (gg.controller.data.order_array[gg.controller.data.order]) + '_name').style.color = '#fafafa';
            document.getElementById('army_' + (gg.controller.data.order_array[gg.controller.data.order]) + '_sum_hitpoint').style.backgroundColor = GG_DATA_MENU_COLOR[army[gg.controller.data.order_array[gg.controller.data.order]].color];
            document.getElementById('army_' + (gg.controller.data.order_array[gg.controller.data.order]) + '_area_point').style.backgroundColor = GG_DATA_MENU_COLOR[army[gg.controller.data.order_array[gg.controller.data.order]].color];

            document.getElementById('army_' + (gg.controller.data.order_array[gg.controller.data.order]) + '_units').style.backgroundColor = GG_DATA_MENU_COLOR[army[gg.controller.data.order_array[gg.controller.data.order]].color];

            //document.getElementById('army_' + (gg.controller.data.order_array[gg.controller.data.order]) + '_lower_units').style.backgroundColor = GG_DATA_MENU_COLOR[army[gg.controller.data.order_array[gg.controller.data.order]].color];
            //document.getElementById('army_' + (gg.controller.data.order_array[gg.controller.data.order]) + '_middle_units').style.backgroundColor = GG_DATA_MENU_COLOR[army[gg.controller.data.order_array[gg.controller.data.order]].color];
            //document.getElementById('army_' + (gg.controller.data.order_array[gg.controller.data.order]) + '_upper_units').style.backgroundColor = GG_DATA_MENU_COLOR[army[gg.controller.data.order_array[gg.controller.data.order]].color];
            //document.getElementById('army_' + (gg.controller.data.order_array[gg.controller.data.order]) + '_create_units').style.backgroundColor = GG_DATA_MENU_COLOR[army[gg.controller.data.order_array[gg.controller.data.order]].color];
            //document.getElementById('army_' + (gg.controller.data.order_array[gg.controller.data.order]) + '_lost_units').style.backgroundColor = GG_DATA_MENU_COLOR[army[gg.controller.data.order_array[gg.controller.data.order]].color];
            document.getElementById('army_' + (gg.controller.data.order_array[gg.controller.data.order]) + '_castle').style.backgroundColor = GG_DATA_MENU_COLOR[army[gg.controller.data.order_array[gg.controller.data.order]].color];
            document.getElementById('army_' + (gg.controller.data.order_array[gg.controller.data.order]) + '_level_up').style.backgroundColor = GG_DATA_MENU_COLOR[army[gg.controller.data.order_array[gg.controller.data.order]].color];

            if (army[gg.controller.data.order_array[gg.controller.data.order]].operation == GG_DATA_OPERATION_CPU) {

                gg.controller_cpu.start({army:        army,
                                         map:         gg.controller.data.map,
                                         army_number: gg.controller.data.order_array[gg.controller.data.order],
                                         zoom:        zoom,
                                         area_map:    gg.controller.data.area_map},
                                         gg.controller.phase);
            } else {
                gg.controller_user.start({army:        army,
                                          map:         gg.controller.data.map,
                                          army_number: gg.controller.data.order_array[gg.controller.data.order],
                                          zoom:        zoom,
                                          area_map:    gg.controller.data.area_map},
                                          gg.controller.phase);
                
            }
        } else {
            //setTimeout(gg.controller.phase, 5);
            requestAnimationFrame(gg.controller.phase);
        }
    } else {
        //setTimeout(gg.controller.check_alive, GG_CONTROLLER_NEXT_PHASE_TIME_OUT);
        requestAnimationFrame(gg.controller.check_alive);
        //gg.controller.check_alive();   
    }
};

gg.controller.get_data = function() {
    return JSON.parse(JSON.stringify(gg.controller.data.army));
};

gg.controller.set_data = function(obj) {
    if (obj.army_number != null) {
        var army_number = obj.army_number;
    }
    if (obj.unit_number != null) {
        var unit_number = obj.unit_number;
    }
    var army = gg.controller.data.army;

    if (obj.status_change_done != null &&
        obj.status_change_done == true) {
        army[army_number].unit[unit_number].status_changed = GG_DATA_STATUS_CHANGE_NONE;
    }
    if (obj.status_changed != null) {
        if (obj.status_changed == GG_DATA_STATUS_CHANGE_DELETE_FATIGUE) {
            gg.controller.data.army[army_number].unit[unit_number].fatigue -= GG_DATA_DEFAULT_STATUS_CHANGE_FATIGUE;
            if (gg.controller.data.army[army_number].unit[unit_number].fatigue < 0) {
                gg.controller.data.army[army_number].unit[unit_number].fatigue = 0;
            }
        } else {
            if (obj.status_changed == GG_DATA_STATUS_CHANGE_UP_ATTACK &&
                army[army_number].unit[unit_number].status_changed == GG_DATA_STATUS_CHANGE_DOWN_ATTACK) {
                army[army_number].unit[unit_number].status_changed = GG_DATA_STATUS_CHANGE_NONE;
            } else if (obj.status_changed == GG_DATA_STATUS_CHANGE_DOWN_ATTACK &&
                       army[army_number].unit[unit_number].status_changed == GG_DATA_STATUS_CHANGE_UP_ATTACK) {
                army[army_number].unit[unit_number].status_changed = GG_DATA_STATUS_CHANGE_NONE;
            } else {
                army[army_number].unit[unit_number].status_changed = obj.status_changed;
                
            }
            
        }
    }
    if (obj.class_down_flag != null &&
        obj.class_down_flag == true) {
        gg.controller.data.army[army_number].unit[unit_number].class_down_flag = obj.class_down_flag;
    }
    if (obj.done_flag != null && obj.done_flag == true) {
        gg.controller.data.army[army_number].unit[unit_number].done_count++;
    }
    //if (obj.change_defence_point != null) {
    //    gg.controller.data.army[army_number].unit[unit_number].change_defence_point += obj.change_defence_point;
    //}
    //if (obj.change_attack_point != null) {
    //    gg.controller.data.army[army_number].unit[unit_number].change_attack_point += obj.change_attack_point;
    //}
    if (obj.x != null && obj.y != null) {
        if (obj.enemy_flag == undefined) {
            var distance = 0;
            var xabs = Math.abs(obj.x - gg.controller.data.army[army_number].unit[unit_number].x);
            var yabs = Math.abs(obj.y - gg.controller.data.army[army_number].unit[unit_number].y);
            if (yabs > xabs) {
                distance = yabs;
            } else {
                distance = (xabs + yabs) / 2;
            }
            if (gg.controller.data.army[army_number].unit[unit_number].move_distance != undefined) {
                gg.controller.data.army[army_number].unit[unit_number].move_distance += distance;
            } else {
                gg.controller.data.army[army_number].unit[unit_number].move_distance = distance;
            }
            gg.controller.data.army[army_number].unit[unit_number].game_move_distance += distance;
            //console.log('Turn:' + gg.controller.data.turn + ' army:' + army_number + ' unit:' + unit_number + ' distance:' + distance + ' x1:' + gg.controller.data.army[army_number].unit[unit_number].x + ' y1:' + gg.controller.data.army[army_number].unit[unit_number].y + ' x2:' + obj.x + ' y2:' + obj.y);
            gg.controller.data.history[army_number][gg.controller.data.turn].move_distance += distance;

        }

        gg.controller.data.army[army_number].unit[unit_number].x = obj.x;
        gg.controller.data.army[army_number].unit[unit_number].y = obj.y;

    }
    if (obj.move_end_x != undefined && obj.move_end_y != undefined) {
        gg.controller.data.army[army_number].unit[unit_number].x = obj.move_end_x;
        gg.controller.data.army[army_number].unit[unit_number].y = obj.move_end_y;
    }    
    
    if (obj.attacked_x != null && obj.attacked_y != null) {
        
        gg.controller.data.army[army_number].unit[unit_number].x = obj.attacked_x;
        gg.controller.data.army[army_number].unit[unit_number].y = obj.attacked_y;
    }
    if (obj.status != null) {
        gg.controller.data.army[army_number].unit[unit_number].status = obj.status;
    }
    //if (obj.berserk_attacked != null) {
    //    gg.controller.data.army[army_number].unit[unit_number].attack_times = GG_DATA_BERSERK_ATTACK_TIME_NORMAL;
    //    gg.controller.data.army[army_number].unit[unit_number].fatigue_times = GG_DATA_BERSERK_ATTACK_FATIGUE_NORMAL;
    //}
    
    if (obj.fatigue != null) {
        gg.controller.data.army[army_number].unit[unit_number].fatigue += obj.fatigue;
        if (obj.fatigue > 0) {
            gg.controller.data.army[army_number].unit[unit_number].game_fatigue += obj.fatigue;
        } else {
            gg.controller.data.army[army_number].unit[unit_number].game_recovery_fatigue -= obj.fatigue;
        }
        if (gg.controller.data.army[army_number].unit[unit_number].fatigue == NaN) {
            console.log('bug');
        }
    }
    if (obj.damage != null) {
        
        gg.controller.data.army[army_number].unit[unit_number].sum_damage += obj.damage;
        gg.controller.data.army[army_number].unit[unit_number].game_damage_receive += obj.damage;

        gg.controller.data.army[army_number].unit[unit_number].hitpoint -= obj.damage;
        gg.controller.data.history[army_number][gg.controller.data.turn].defence_damage += obj.damage;
        ////////////
        if (obj.attacked_army_number != null) {
            if (army_number != obj.attacked_army_number) {
                gg.controller.data.army[obj.attacked_army_number].unit[obj.attacked_unit_number].game_damage_give += obj.damage;
            }
            
            if (gg.controller.data.army[army_number].unit[unit_number].type <= GG_DATA_CHAR_HIGH_UNIT &&
                gg.controller.data.army[army_number].unit[unit_number].level >= 2) {
                // uper unit only
                gg.controller.data.army[army_number].unit[unit_number].damage_array[obj.attacked_army_number] += obj.damage;
            }
        } else {
            console.log('attacked_army_number null');
        }
        if (gg.controller.data.army[army_number].unit[unit_number].hitpoint <= 0 &&
            obj.attacked_army_number != null && obj.attacked_unit_number != null &&
            gg.controller.data.army[army_number].unit[unit_number].dead_attack == null) {
            //
            gg.controller.data.army[army_number].unit[unit_number].dead_attack = {army_number: obj.attacked_army_number,
                                                                                   unit_number: obj.attacked_unit_number};
        } else {
            gg.controller.data.army[army_number].unit[unit_number].dead_attack = null;
        }
    }
    if (obj.recovery != null) {

        gg.controller.data.army[army_number].unit[unit_number].hitpoint += obj.recovery;
        gg.controller.data.history[army_number][gg.controller.data.turn].recovery += obj.recovery;
        if (gg.controller.data.army[army_number].unit[unit_number].hitpoint > 0) {
            gg.controller.data.army[army_number].unit[unit_number].dead_attack = null;
        }
        gg.controller.data.army[army_number].unit[unit_number].game_recovery += obj.recovery;
    }
    if (obj.exp != null) {
        gg.controller.data.army[army_number].unit[unit_number].exp += obj.exp;
        gg.controller.data.army[army_number].unit[unit_number].game_exp += obj.exp;

        if (obj.exp >= 20) {
            //gg.controller.data.history_unit.push({
            //        army_number: army_number, unit_number: unit_number,
            //        color: army[army_number].color, turn:gg.controller.data.turn,
            //        level: army[army_number].unit[unit_number].level + 1,
            //        type: army[army_number].unit[unit_number].type,
            //        status: GG_DATA_HISTORY_STATUS_GRATE_DAMAGE
            //    });
        }

    }
    
    if (obj.rob_area_point != null) {
        gg.controller.data.army[obj.rob_area_point.my_army_number].area_point    += obj.rob_area_point.area_point;
        gg.controller.data.army[obj.rob_area_point.my_army_number].game_area_point    += obj.rob_area_point.area_point;
        gg.controller.data.history[obj.rob_area_point.my_army_number][gg.controller.data.turn].area_point += obj.rob_area_point.area_point;

        gg.controller.data.army[obj.rob_area_point.enemy_army_number].area_point -= obj.rob_area_point.area_point;
        gg.controller.data.army[obj.rob_area_point.enemy_army_number].game_area_point -= obj.rob_area_point.area_point;
        gg.controller.data.history[obj.rob_area_point.enemy_army_number][gg.controller.data.turn].area_point -= obj.rob_area_point.area_point;
    }
    
    if (obj.recovery_turn != null) {
        gg.controller.data.army[army_number].unit[unit_number].recovery_turn = obj.recovery_turn;
    }
};

gg.controller.check_win_or_lost = function() {
    var win_or_lost = gg.controller.data.win_or_lost;
    var army = gg.controller.data.army;
    var map = gg.controller.data.map;
    var sum_hitpoint = [];
    var sum_attack_defence_point = [];
    var lost_list = [];
    var temp_level, temp_position;
    var temp_damage, temp_fatigue;
    var max_unit_team = {army_number: 0, max_unit_number: army[0].unit.length, unit_diff: 16};
    var temp_str = '';
    for (var i = 1; i < army.length; i++) {
        if (max_unit_team.max_unit_number < army[i].unit.length) {
            max_unit_team.army_number = i;
            max_unit_team.unit_diff = army[i].unit.length - max_unit_team.max_unit_number;
            max_unit_team.max_unit_number = army[i].unit.length;
        } else if (max_unit_team.max_unit_number - army[i].unit.length < max_unit_team.unit_diff) {
            max_unit_team.unit_diff = max_unit_team.max_unit_number - army[i].unit.length;
        }
    }

    var temp_army = [];
    var temp_unit_data = [];
    for (var i = 0; i < army.length; i++) {
        temp_unit_data[i] = {lower_units: 0, middle_units: 0, upper_units: 0, lost_units: 0};
        temp_army[i] = {};
        sum_hitpoint[i] = 0;
        sum_attack_defence_point[i] = 0;
        lost_list[i] = false;
        temp_level = 0;
        temp_position = 0;
        temp_damage = 0;
        temp_fatigue = 0;
        for (var j = 0; j < gg.controller.data.lost.length; j++) {
            if (gg.controller.data.lost[j].color == army[i].color) {
                temp_unit_data[i].lost_units++;
            }
        }
        for (var j = 0; j < army[i].unit.length; j++) {
            if (army[i].unit[j].type < 50) {
                temp_unit_data[i].upper_units++;
            } else if (army[i].unit[j].type < 100) {
                temp_unit_data[i].middle_units++;
            } else {
                temp_unit_data[i].lower_units++;
            }
            if (army[i].unit[j].hitpoint > 0) {
                sum_hitpoint[i] += army[i].unit[j].hitpoint;
            }
            sum_attack_defence_point[i] += army[i].unit[j].attack_point + army[i].unit[j].defence_point + army[i].unit[j].small_recovery;
            if (army[i].unit[j].status_changed == GG_DATA_STATUS_CHANGE_UP_ATTACK ||
                army[i].unit[j].status_changed == GG_DATA_STATUS_CHANGE_UP_DEFENCE) {
                sum_attack_defence_point[i] += 4;
            }
            temp_level += army[i].unit[j].level + 1;
            temp_position += map[army[i].unit[j].y][army[i].unit[j].x];
            temp_damage += army[i].unit[j].max_hitpoint - army[i].unit[j].hitpoint;
            temp_fatigue += army[i].unit[j].fatigue;
        }
        if (sum_hitpoint[i] < win_or_lost || sum_hitpoint[i] == 0) {
            lost_list[i] = true;
        }
        temp_army[i].sum_hitpoint = sum_hitpoint[i];
        temp_army[i].area_point = army[i].area_point;
        // SUM HITPOINT

        if (sum_hitpoint[i] < 10) {
            temp_str = '000' + sum_hitpoint[i];
        } else if (sum_hitpoint[i] < 100) {
            temp_str = '00' + sum_hitpoint[i];
        } else if (sum_hitpoint[i] < 1000) {
            temp_str = '0' + sum_hitpoint[i];
        } else if (sum_hitpoint[i] < 10000) {
            temp_str = sum_hitpoint[i];
        } else {
            temp_str = '9999';
        }
        document.getElementById('army_' + i + '_sum_hitpoint').innerHTML = "<i class='fa fa-heart'></i>&nbsp;" + temp_str;
        //
        temp_str = '';
        //document.getElementById('army_' + i + '_upper_units').innerHTML  = "<i class='fa fa-star'></i>&nbsp;" + temp_str;
        if (temp_unit_data[i].lower_units < 10) {
            temp_str += '0' + temp_unit_data[i].lower_units;
        } else if (temp_unit_data[i].lower_units < 100) {
            temp_str += temp_unit_data[i].lower_units;
        } else {
            temp_str += '99';
        }
        temp_str += '/';
        
        //
        if (temp_unit_data[i].middle_units < 10) {
            temp_str += '0' + temp_unit_data[i].middle_units;
        } else if (temp_unit_data[i].middle_units < 100) {
            temp_str += temp_unit_data[i].middle_units;
        } else {
            temp_str += '99';
        }
        //document.getElementById('army_' + i + '_middle_units').innerHTML = "<i class='fa fa-star-half-o'></i>&nbsp;" + temp_str;
        temp_str += '/';

        //
        if (temp_unit_data[i].upper_units < 10) {
            temp_str += '0' + temp_unit_data[i].upper_units;
        } else if (temp_unit_data[i].upper_units < 100) {
            temp_str += temp_unit_data[i].upper_units;
        } else {
            temp_str += '99';
        }
        //document.getElementById('army_' + i + '_lower_units').innerHTML  = "<i class='fa fa-star-o'></i>&nbsp;" + temp_str;
        temp_str += "&nbsp;&nbsp;<i class='fa fa-user-plus'></i>&nbsp;";
        if (army[i].unit.length - gg.controller.data.start_unit_number[i] + temp_unit_data[i].lost_units < 10) {
            temp_str += '0' + (army[i].unit.length - gg.controller.data.start_unit_number[i] + temp_unit_data[i].lost_units);
        } else if (army[i].unit.length - gg.controller.data.start_unit_number[i] + temp_unit_data[i].lost_units < 100) {
            temp_str += (army[i].unit.length - gg.controller.data.start_unit_number[i] + temp_unit_data[i].lost_units);
        //} else if (army[i].unit.length - gg.controller.data.start_unit_number[i] + temp_unit_data[i].lost_units < 1000) {
        //    temp_str += (army[i].unit.length - gg.controller.data.start_unit_number[i] + temp_unit_data[i].lost_units);
        } else {
            temp_str += '99';
        }

        //document.getElementById('army_' + i + '_lost_units').innerHTML  = "<i class='fa fa-trash'></i>&nbsp;" + temp_str;
        temp_str += "&nbsp;&nbsp;<i class='fa fa-user-times'></i>&nbsp;";
        if (temp_unit_data[i].lost_units < 10) {
            temp_str += '0' + temp_unit_data[i].lost_units;
        } else if (temp_unit_data[i].lost_units < 100) {
            temp_str += temp_unit_data[i].lost_units;
        //} else if (temp_unit_data[i].lost_units < 1000) {
        //    temp_str += temp_unit_data[i].lost_units;
        } else {
            temp_str += '99';
        }
        //temp_str += '&nbsp;<i class="fa fa-level-up" />&nbsp;';
        //if (army[i].class_change_flag == true) {
        //    temp_str += '<i class="fa fa-circle-o" />';
        //} else {
        //    temp_str += '<i class="fa fa-times" />';
        //}

        
        //document.getElementById('army_' + i + '_create_units').innerHTML  = "<i class='fa fa-fire'></i>&nbsp;" + temp_str;
        document.getElementById('army_' + i + '_units').innerHTML  = "<i class='fa fa-users'></i>&nbsp;" + temp_str;

        gg.controller.data.history[i][gg.controller.data.turn].sum_hitpoint = sum_hitpoint[i];
        gg.controller.data.history[i][gg.controller.data.turn].sum_attack_defence_point = sum_attack_defence_point[i];
        if (temp_fatigue < 0) {
            temp_fatigue = 0;
        }
        gg.controller.data.history[i][gg.controller.data.turn].fatigue = temp_fatigue;
        gg.controller.data.history[i][gg.controller.data.turn].unit_number = army[i].unit.length;
        gg.controller.data.history[i][gg.controller.data.turn].average_level = Math.floor(temp_level / army[i].unit.length * 10) / 10;
        gg.controller.data.history[i][gg.controller.data.turn].average_position = Math.floor(temp_position / army[i].unit.length * 10) / 10;
        
    }
    var win_info = {result: false, name: '', army_number: -1};
    var count = 0;
    var win_name = '';
    for (var i = 0; i < sum_hitpoint.length; i++) {
        if (sum_hitpoint[i] < win_or_lost || sum_hitpoint[i] == 0) {
            count++;
        } else {
            win_name = army[i].name;
            var army_number = i;
        }
    }
    if (sum_hitpoint.length - count == 1) {
        win_info.result = true;
        win_info.name = win_name;
        win_info.army_number = army_number;
        
    } else if (sum_hitpoint.length == count) {
        var max_sum_hitpoint = 0;
        var flag = true;
        for (var i = 0; i < sum_hitpoint.length; i++) {
            if (sum_hitpoint[i] > max_sum_hitpoint) {
                max_sum_hitpoint = sum_hitpoint[i];
                win_info.name = army[i].name;
                win_info.army_number = i;
            } else if (max_sum_hitpoint == sum_hitpoint[i] &&
                       sum_hitpoint[i] != 0) {
                flag = false;
            }
        }
        if (flag == true) {
            win_info.result = true;
        }
    }
    if (win_info.result == true && win_info.army_number == -1) {
        //
        win_info.army_number = gg.controller.data.start_army;
        win_info.name = army[win_info.army_number].name;
    }
    
    if (gg.controller.data.game_info == GG_MENU_MODE_CAMPAIGN &&
        gg.controller.data.game_end_turn == gg.controller.data.turn &&
        win_info.result == false) {
        win_info.result = true;
        win_info.name = army[1].name;
        win_info.army_number = 1;
    }
    
    // unit diff
    if (win_info.result == false &&
        gg.controller.data.unit_diff != 0 &&
        max_unit_team.unit_diff >= gg.controller.data.unit_diff) {

        win_info.result = true;
        win_info.army_number = max_unit_team.army_number;
        win_info.name = army[win_info.army_number].name;
    }
        
    if (win_info.result == true) {
        var lang = gg.menu.get_lang();
        var page_count = gg.view.get_all_count();
        
        var end_time = new Date().getTime();
        //console.log('Time:' + (end_time - gg.controller.data.start_time) + ' Page:' + page_count + ' FPS:' + (Math.floor(page_count / ((end_time - gg.controller.data.start_time) / 1000))));
        //document.getElementById('check').innerHTML += ' time:' + (end_time - gg.controller.data.start_time);
        //document.getElementById('check').innerHTML += ' page:' + page_count;
        //document.getElementById('check').innerHTML += ' fps:' + (Math.floor(page_count / ((end_time - gg.controller.data.start_time) / 1000)));
        
        document.getElementById('army_' + win_info.army_number + '_name').style.backgroundColor         = GG_DATA_MENU_COLOR[army[win_info.army_number].color];
        document.getElementById('army_' + win_info.army_number + '_name').style.color                   = '#fafafa';
        document.getElementById('army_' + win_info.army_number + '_sum_hitpoint').style.backgroundColor = GG_DATA_MENU_COLOR[army[win_info.army_number].color];
        document.getElementById('army_' + win_info.army_number + '_area_point').style.backgroundColor   = GG_DATA_MENU_COLOR[army[win_info.army_number].color];
        document.getElementById('army_' + win_info.army_number + '_units').style.backgroundColor        = GG_DATA_MENU_COLOR[army[win_info.army_number].color];
        document.getElementById('army_' + win_info.army_number + '_castle').style.backgroundColor       = GG_DATA_MENU_COLOR[army[win_info.army_number].color];
        document.getElementById('army_' + win_info.army_number + '_level_up').style.backgroundColor     = GG_DATA_MENU_COLOR[army[win_info.army_number].color];
        
        var str = '';
        var message_obj = {};
        if (win_info.army_number == 0) {
            str += '&nbsp;&nbsp;' + GG_DATA_DICTTIONARY.game_end_win[lang] + '&nbsp;&nbsp;';
            message_obj.win = true;
        } else {
            str += '&nbsp;&nbsp;' + GG_DATA_DICTTIONARY.game_end_lost[lang] + '&nbsp;&nbsp;';
            message_obj.win = false;
        }
        //
        message_obj.color = army[0].color;
        message_obj.message = [];
        message_obj.message[0] = str;
        message_obj.next = false;
        message_obj.prev = false;
        message_obj.game_info = gg.controller.data.game_info;

        if (gg.controller.data.game_info == GG_MENU_MODE_BENCHMARK) {
            message_obj.color = army[win_info.army_number].color;
            message_obj.message = [];
            message_obj.message[0] = 'Benchmark End';
            message_obj.win = true;
        } else if (gg.controller.data.game_info == GG_MENU_MODE_CAMPAIGN &&
                   win_info.army_number != 0 && gg.controller.data.round != 0) {
            message_obj.prev = true;
            //message_obj.message[1] = '&nbsp;&nbsp;Back Prev Round&nbsp;&nbsp;';
            message_obj.message[1] = '&nbsp;&nbsp;' + GG_DATA_DICTTIONARY.game_end_back_prev_round[lang] + '&nbsp;&nbsp;';
            
        } else if (gg.controller.data.game_info == GG_MENU_MODE_CAMPAIGN &&
                   win_info.army_number != 0 && gg.controller.data.round == 0) {
            //message_obj.message[1] = '&nbsp;&nbsp;Back New Campaign&nbsp;&nbsp;';
            message_obj.message[1] = '&nbsp;&nbsp;' + GG_DATA_DICTTIONARY.game_end_back_new_campaign[lang] + '&nbsp;&nbsp;';

        } else if (gg.controller.data.game_info == GG_MENU_MODE_TEAM &&
                   win_info.army_number != 0 && gg.controller.data.round != 1) {
            message_obj.prev = true;
            message_obj.message[1] = '&nbsp;&nbsp;' + GG_DATA_DICTTIONARY.game_end_back_prev_round[lang] + '&nbsp;&nbsp;';
            
        } else if (gg.controller.data.game_info == GG_MENU_MODE_TEAM &&
                   win_info.army_number != 0 && gg.controller.data.round == 1) {
            message_obj.message[1] = '&nbsp;&nbsp;' + GG_DATA_DICTTIONARY.game_end_back_new_team[lang] + '&nbsp;&nbsp;';
            
        } else if (win_info.army_number == 0 &&
            gg.controller.data.game_info == GG_MENU_MODE_CAMPAIGN &&
            gg.controller.data.round < GG_DATA_CAMPAIGN_INFO.length - 1) {
            message_obj.next = true;
            message_obj.message[1] = '&nbsp;&nbsp;Next ' + (gg.controller.data.round + 1) + '/' + (GG_DATA_CAMPAIGN_INFO.length) + ' ' + GG_DATA_DICTTIONARY.round[lang] + '&nbsp;&nbsp;';
            // save
            var obj = {};
            obj.round = gg.controller.data.round;
            obj.turn  = gg.controller.data.turn;
            //obj.unit_create_oder = army[0].unit_create_oder;
            var add_area_point = 0;
            if (gg.controller.data.turn <=
                GG_DATA_CAMPAIGN_INFO[gg.controller.data.round].base_trun * gg.controller.data.friend_hitpoint / GG_DATA_HITPOINT_ARRAY[1]) {
                add_area_point = (GG_DATA_CAMPAIGN_INFO[gg.controller.data.round].base_trun * gg.controller.data.friend_hitpoint / GG_DATA_HITPOINT_ARRAY[1]  - gg.controller.data.turn) * GG_DATA_HITPOINT_ARRAY[1] / gg.controller.data.friend_hitpoint 
                                 * GG_DATA_CAMPAIGN_INFO[gg.controller.data.round].add_area_point;
            } else if (gg.controller.data.turn >
                       GG_DATA_CAMPAIGN_INFO[gg.controller.data.round].delete_turn * gg.controller.data.friend_hitpoint / GG_DATA_HITPOINT_ARRAY[1]) {
                add_area_point = (GG_DATA_CAMPAIGN_INFO[gg.controller.data.round].delete_turn * gg.controller.data.friend_hitpoint / GG_DATA_HITPOINT_ARRAY[1] - gg.controller.data.turn) * GG_DATA_HITPOINT_ARRAY[1] / gg.controller.data.friend_hitpoint 
                                 * GG_DATA_CAMPAIGN_INFO[gg.controller.data.round].del_area_point;
            }
            obj.area_point = army[0].area_point + Math.floor(add_area_point);
            obj.unit = [];
            for (var i = 0; i < army[0].unit.length; i++) {
                obj.unit[i] = {type:army[0].unit[i].type, exp:army[0].unit[i].exp};
            }
            obj.friend = army[0].color;
            //obj.enemy = gg.controller.data.enemy_color;
            obj.enemy = army[1].color;
            //
            obj.enemy_units = [];

            for (var i = 0; i < army[1].unit.length; i++) {
                if (army[1].unit[i].hitpoint > 0) {
                    obj.enemy_units.push({type:army[1].unit[i].type, exp:army[1].unit[i].exp});
                }
            }
            obj.enemy_area_point = 0;
            if (army[1].area_point > 0) {
                obj.enemy_area_point = army[1].area_point;
            }

            obj.hitpoint          = gg.controller.data.friend_hitpoint;
            obj.hande             = gg.controller.data.hande;
            obj.map               = gg.controller.data.map_info;
            obj.lost              = gg.controller.data.lost_info;
            obj.level_up          = gg.controller.data.level_up;
            obj.class_change_uniq = gg.controller.data.class_change_uniq;
            var now = new Date();
            obj.date = '' + now.getFullYear()
                        + '/' + (now.getMonth() + 1)
                        + '/' + now.getDate()
                        + ' ' + now.getHours()
                        + ':' + now.getMinutes()
                        + ':' + now.getSeconds();
            // save
            obj.class_change_uniq = gg.controller.data.class_change_uniq;
            gg.storage.save(obj, GG_STORAGE_LOCAL_STORAGE_CAMPAIGN_RESULT_KEY);

        } else if (win_info.army_number == 0 &&
                   gg.controller.data.game_info == GG_MENU_MODE_TEAM &&
                   gg.controller.data.round < GG_DATA_TEAM_ROUND) {
            message_obj.next = true;
            message_obj.message[1] = '&nbsp;&nbsp;' + GG_DATA_DICTTIONARY.next[lang] + ' ' + (gg.controller.data.round + 1) + '/' + (GG_DATA_TEAM_ROUND) + ' ' + GG_DATA_DICTTIONARY.round[lang] + '&nbsp;&nbsp;';
            // save
            var obj = {};
            obj.round = gg.controller.data.round;
            obj.unit_number = gg.controller.data.org.units[0].unit.length;
            obj.turn = gg.controller.data.turn;

            obj.friend = army[0].color;
            //obj.enemy = gg.controller.data.enemy_color;
            obj.enemy    = army[1].color;
            obj.hitpoint = gg.controller.data.friend_hitpoint;
            obj.hande    = gg.controller.data.hande;
            obj.map      = gg.controller.data.map_info;
            obj.lost     = gg.controller.data.lost_info;
            obj.level_up = gg.controller.data.level_up;
            var now = new Date();
            obj.date = '' + now.getFullYear()
                        + '/' + (now.getMonth() + 1)
                        + '/' + now.getDate()
                        + ' ' + now.getHours()
                        + ':' + now.getMinutes()
                        + ':' + now.getSeconds();
            // save
            obj.used_unit_list = gg.controller.data.used_unit_list;
            obj.class_change_uniq = gg.controller.data.class_change_uniq;
            obj.unit_diff = gg.controller.data.unit_diff;

            gg.storage.save(obj, GG_STORAGE_LOCAL_STORAGE_TEAM_RESULT_KEY);
        } else if (win_info.army_number == 0 &&
            gg.controller.data.game_info == GG_MENU_MODE_CAMPAIGN &&
            gg.controller.data.round == GG_DATA_CAMPAIGN_INFO.length - 1) {
            message_obj.message[1] = '&nbsp;&nbsp;' + GG_DATA_DICTTIONARY.game_end_canpaign_complete[lang] + '&nbsp;&nbsp;';
            //
            // gg.storage.save_result(data);
        } else if (win_info.army_number == 0 &&
            gg.controller.data.game_info == GG_MENU_MODE_TEAM &&
            gg.controller.data.round == GG_DATA_TEAM_ROUND) {
            message_obj.message[1] = '&nbsp;&nbsp;' + GG_DATA_DICTTIONARY.game_end_team_complete[lang] + '&nbsp;&nbsp;';

        }
        if (win_info.army_number == 0 &&
            (gg.controller.data.game_info == GG_MENU_MODE_ONE_ON_ONE || gg.controller.data.game_info == GG_MENU_MODE_DEFENCE ||
             gg.controller.data.game_info == GG_MENU_MODE_GIANT_KILLING ||
             (gg.controller.data.game_info == GG_MENU_MODE_CAMPAIGN && gg.controller.data.round == GG_DATA_CAMPAIGN_INFO.length - 1) ||
             (gg.controller.data.game_info == GG_MENU_MODE_TEAM && gg.controller.data.round == GG_DATA_TEAM_ROUND))){
            
            var save_data = {};
            
            save_data.game_mode = gg.controller.data.game_info;
            save_data.hande = parseFloat(gg.controller.data.hande);
            save_data.hitpoint = gg.controller.data.friend_hitpoint;
            save_data.team = army[0].color;
            save_data.enemy_team = army[1].color;
            save_data.map = gg.controller.data.map_info;
            save_data.unit_number = gg.controller.data.unit_number + '';
            gg.storage.save_result(save_data);
        }
        if (win_info.army_number == 0) {
            var recode_save_data = {win:1, hande: parseInt(gg.controller.data.hande), team: army[0].color, game_mode:gg.controller.data.game_info};
            gg.storage.save_recode(recode_save_data);
        }
        
        gg.menu.view_end_menu(message_obj);

    } else {
        gg.controller.turn_set();
        
    }

};

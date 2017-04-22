gg.parts.data = {};
gg.parts.data.army;
gg.parts.data.map;
gg.parts.data.zoom;
gg.parts.data.area_map;
gg.parts.data.attack_obj;
gg.parts.data.callback;

gg.parts.set_not_attack_animation = function(map, area_map, zoom, army, attack_obj, callback) {
    gg.parts.data.army = army;
    gg.parts.data.map = map;
    gg.parts.data.zoom = zoom;
    gg.parts.data.area_map = area_map;
    gg.parts.data.attack_obj = attack_obj;
    gg.parts.data.callback = callback;

    var next_function;
    if (attack_obj.rescue != null || attack_obj.recovery != null) {
        next_function = gg.parts.set_rescue_animation2;
    } else if (attack_obj.rob_area_point != null) {
        next_function = gg.parts.set_area_point_animation;
    } else {
        next_function = gg.parts.end;
    }

    next_function();
};

gg.parts.set_animation = function(map, area_map, zoom, army, attack_obj, callback) {
    gg.parts.data.army = army;
    gg.parts.data.map = map;
    gg.parts.data.zoom = zoom;
    gg.parts.data.area_map = area_map;
    gg.parts.data.attack_obj = attack_obj;
    gg.parts.data.callback = callback;

    // new animation
    var attack_info = {};
    attack_info.route_count = attack_obj.attack_route_count;
    //var temp_move_lit = [];
    //if (attack_obj.attack.move_list != null) {
    //    for (var i = 0; i < attack_obj.attack.move_list.length; i++) {
    //        temp_move_lit.push({
    //                               army_number: attack_obj.attack.move_list[i].army_number,
    //                               unit_number: attack_obj.attack.move_list[i].unit_number,
    //                               attack_animation: attack_obj.attack.move_list[i].attack_animation // stop
    //            });
    //    }
    //}
    var damage_list = [];
    var damage_check = false;
    for (var i = 0; i < attack_obj.attack.list.length; i++) {
        if (attack_obj.attack.list[i].damage != undefined) {
            damage_check = true;
        }
        if (attack_obj.attack.list[i].damage != undefined &&
            attack_obj.attack.list[i].damage > 0) {
            damage_list.push({army_number: attack_obj.attack.list[i].army_number,
                              unit_number: attack_obj.attack.list[i].unit_number});
        }

    }
    
    attack_info.my_unit = attack_obj.attack_info.my_unit;
    attack_info.other_unit = attack_obj.attack_info.other_unit;
    
    // select map
    var units = [];
    units.push({x:attack_obj.x, y:attack_obj.y, army_color:army[attack_obj.army_number].color});
    var temp_x = attack_obj.attack.attack_x;
    var temp_y = attack_obj.attack.attack_y;
    if (attack_obj.attack.select_x != null) {
        temp_x = attack_obj.attack.select_x;
        temp_y = attack_obj.attack.select_y;
    }
    units.push({x: temp_x, y: temp_y, army_color:army[attack_obj.army_number].color});

    var next_function;
    if (damage_check == true) {
        next_function = gg.parts.set_damage_animation2;

    } else {
        next_function = gg.parts.end;
    }

    gg.animation.set_attack_animation2(map, army,
                                       attack_info, zoom, next_function,
                                       area_map, units, true, damage_list);
};

gg.parts.set_damage_animation2 = function() {
    var army = gg.parts.data.army;
    var map = gg.parts.data.map;
    var zoom = gg.parts.data.zoom;
    var area_map = gg.parts.data.area_map;
    var attack_obj = gg.parts.data.attack_obj;
    var change_army = [];
    if (attack_obj.attack_info.my_unit.enemy_push_now_flag == true) {
        change_army.push({
             army_number:attack_obj.attack_info.my_unit.army_number
            ,unit_number: attack_obj.attack_info.my_unit.unit_number
            ,x: attack_obj.attack_info.my_unit.moved.x
            ,y: attack_obj.attack_info.my_unit.moved.y
            });
    }

    //var area_list = gg.controller_cpu.data.result;
    var obj;
    var animation_list = [];
    for (var i = 0; i < attack_obj.attack.list.length; i++) {
        var temp_x, temp_y;
        if (attack_obj.attack.list[i].x != null) {
            temp_x = attack_obj.attack.list[i].x;
            temp_y = attack_obj.attack.list[i].y;
            
            
        } else {
                
            var my_army = army[attack_obj.attack.list[i].army_number];
            temp_x = my_army.unit[attack_obj.attack.list[i].unit_number].x;
            temp_y = my_army.unit[attack_obj.attack.list[i].unit_number].y;
        }
        if (attack_obj.attack.list[i].damage != null) {
            //if (isNaN(attack_obj.attack.list[i].damage)) {
            //    console.log('bug');
            //}
            animation_list.push({x: temp_x,
                                 y: temp_y,
                                 army_number: attack_obj.attack.list[i].army_number,
                                 unit_number: attack_obj.attack.list[i].unit_number,
                                 damage: attack_obj.attack.list[i].damage,
                                 second_damage: attack_obj.attack.list[i].second_damage,
                                 group: GG_DATA_ANIMATION_ETC_DAMAGE});
        }
    }

    if (attack_obj.damage != null) {
        if (isNaN(attack_obj.damage)) {
            console.log('bug');
        }
        var my_position = {x:attack_obj.x, y:attack_obj.y};
        if (attack_obj.attacked_x != null) {
            my_position = {x:attack_obj.attacked_x, y:attack_obj.attacked_y};
        }
        if (attack_obj.attack_info.my_unit.enemy_push_now_flag == true) {
            my_position = {x: attack_obj.attack_info.my_unit.moved.x,
                               y: attack_obj.attack_info.my_unit.moved.y};
        }
        animation_list.push({x: my_position.x,
                             y: my_position.y,
                             army_number: attack_obj.army_number,
                             unit_number: attack_obj.unit_number,
                             damage: attack_obj.damage,
                             group: GG_DATA_ANIMATION_ETC_DAMAGE});
    }
    
    var next_function;
    if (attack_obj.rescue != null || attack_obj.recovery != null) {
        next_function = gg.parts.set_rescue_animation2;
    } else if (attack_obj.status_changes != null) {
        next_function = gg.parts.set_status_changes_animation;
    } else if (attack_obj.my_status_change != null) {
        next_function = gg.parts.set_my_status_change;
    } else if (attack_obj.rob_area_point != null) {
        next_function = gg.parts.set_area_point_animation;

    } else {
        next_function = gg.parts.end;
    }
    var select_map = [];
    select_map.push({x:attack_obj.x, y:attack_obj.y, army_color:army[attack_obj.army_number].color});
    gg.animation.set_etc_animation2(map, army,
                                    animation_list, zoom, next_function, GG_DATA_ANIMATION_EFFECT_BIN,
                                    area_map, select_map, 0, true, false, [], change_army);

};

gg.parts.set_rescue_animation2 = function() {
    var army = gg.parts.data.army;
    var map = gg.parts.data.map;
    var zoom = gg.parts.data.zoom;
    var area_map = gg.parts.data.area_map;
    var attack_obj = gg.parts.data.attack_obj;
    var change_army = [];
    var temp_x, temp_y;
    if (attack_obj.attack_info != undefined &&
        attack_obj.attack_info.my_unit.enemy_push_now_flag == true) {
        change_army.push({
             army_number:attack_obj.attack_info.my_unit.army_number
            ,unit_number: attack_obj.attack_info.my_unit.unit_number
            ,x: attack_obj.attack_info.my_unit.moved.x
            ,y: attack_obj.attack_info.my_unit.moved.y
            });
        temp_x = attack_obj.attack_info.my_unit.moved.x;
        temp_y = attack_obj.attack_info.my_unit.moved.y;
    } else {
        temp_x = attack_obj.x;
        temp_y = attack_obj.y;
        
    }

    var animation_obj = [];

    if (attack_obj.rescue != null) {
        animation_obj.push({x: temp_x,
                         y: temp_y,
                         type:army[attack_obj.army_number].unit[attack_obj.unit_number].type,
                         army_number: attack_obj.army_number,
                         unit_number: attack_obj.unit_number,
                         group: GG_DATA_ANIMATION_ETC_UNIT_RECOVER});
    }

    if (attack_obj.rescue != null) {
        for (var i = 0; i < attack_obj.rescue.length; i++) {
            animation_obj.push({army_number: attack_obj.rescue[i].army_number, unit_number: attack_obj.rescue[i].unit_number,
                                    recovery: attack_obj.rescue[i].recovery,
                                    x: army[attack_obj.rescue[i].army_number].unit[attack_obj.rescue[i].unit_number].x,
                                    y: army[attack_obj.rescue[i].army_number].unit[attack_obj.rescue[i].unit_number].y,
                                    group: GG_DATA_ANIMATION_ETC_RESCUE});
        }
    }
    if (attack_obj.recovery != null) {
        animation_obj.push({army_number: attack_obj.recovery.army_number, unit_number: attack_obj.recovery.unit_number,
                                    recovery: attack_obj.recovery.recovery,
                                    x: army[attack_obj.recovery.army_number].unit[attack_obj.recovery.unit_number].x,
                                    y: army[attack_obj.recovery.army_number].unit[attack_obj.recovery.unit_number].y,
                                    group: GG_DATA_ANIMATION_ETC_RECOVER});
    }

    var next_function = gg.parts.end;

    var select_map = [];
    select_map.push({x:attack_obj.x, y:attack_obj.y, army_color:army[attack_obj.army_number].color});
    if (attack_obj.rescue != null) {
        for (var i = 0; i < attack_obj.rescue.length; i++) {
            select_map.push({x:army[attack_obj.rescue[i].army_number].unit[attack_obj.rescue[i].unit_number].x,
                             y:army[attack_obj.rescue[i].army_number].unit[attack_obj.rescue[i].unit_number].y,
                             army_color:army[attack_obj.army_number].color});
        }

    }
    if (attack_obj.recovery != null) {
        select_map.push({x:attack_obj.recovery.x, y:attack_obj.recovery.y, army_color:army[attack_obj.army_number].color});
        
    }
    if (attack_obj.status_changes != null) {
        next_function = gg.parts.set_status_changes_animation;
    } else if (attack_obj.my_status_change != null) {
        next_function = gg.parts.set_my_status_change;
    } else if (attack_obj.rob_area_point != null) {
        next_function = gg.parts.set_area_point_animation;
    }
    //gg.animation.set_etc_animation(map, army,
    //                                    animation_obj, zoom, next_function, GG_DATA_ANIMATION_EFFECT_BIN,
    //                               area_map, select_map, true, []);
    gg.animation.set_etc_animation2(map, army,
                                        animation_obj, zoom, next_function, GG_DATA_ANIMATION_EFFECT_BIN,
                                   area_map, select_map, 0, true, false, [], change_army);
};

gg.parts.set_status_changes_animation = function() {
    var army = gg.parts.data.army;
    var map = gg.parts.data.map;
    var zoom = gg.parts.data.zoom;
    var area_map = gg.parts.data.area_map;
    var attack_obj = gg.parts.data.attack_obj;
    var change_army = [];
    var temp_x, temp_y;
    if (attack_obj.attack_info.my_unit.enemy_push_now_flag == true) {
        change_army.push({
             army_number:attack_obj.attack_info.my_unit.army_number
            ,unit_number: attack_obj.attack_info.my_unit.unit_number
            ,x: attack_obj.attack_info.my_unit.moved.x
            ,y: attack_obj.attack_info.my_unit.moved.y
            });
        temp_x = attack_obj.attack_info.my_unit.moved.x;
        temp_y = attack_obj.attack_info.my_unit.moved.y;
    } else {
        temp_x = attack_obj.x;
        temp_y = attack_obj.y;
        
    }

    var animation_obj = [];
    var select_map = [];
    select_map.push({x:attack_obj.x, y:attack_obj.y, army_color:army[attack_obj.army_number].color});

    if (attack_obj.status_changes[0].attack_down_flag == undefined) {
        animation_obj.push({x: temp_x,
                            y: temp_y,
                            type:army[attack_obj.army_number].unit[attack_obj.unit_number].type,
                            army_number: attack_obj.army_number,
                            unit_number: attack_obj.unit_number,
                            group: GG_DATA_ANIMATION_ETC_UNIT_STATUS_CHANGE});
    }

    //if (attack_obj.status_changes.length == 0) {
    //    console.log('status change animation bug');
    //}
    for (var i = 0; i < attack_obj.status_changes.length; i++) {
        select_map.push({x:attack_obj.status_changes[i].x, y: attack_obj.status_changes[i].y, army_color:army[attack_obj.army_number].color});
        animation_obj.push({army_number: attack_obj.status_changes[i].army_number, unit_number: attack_obj.status_changes[i].unit_number,
                                    status_changed: attack_obj.status_changes[i].status_changed,
                                    x: attack_obj.status_changes[i].x,
                                    y: attack_obj.status_changes[i].y,
                                    group: GG_DATA_ANIMATION_ETC_STATUS_CHANGE});
        
    }

    var next_function = gg.parts.end;
    if (attack_obj.my_status_change != null) {
        next_function = gg.parts.set_my_status_change;
    } else if (attack_obj.rob_area_point != null) {
        next_function = gg.parts.set_area_point_animation;
    }

    gg.animation.set_etc_animation2(map, army,
                                        animation_obj, zoom, next_function, GG_DATA_ANIMATION_EFFECT_BIN,
                                   area_map, select_map, 0, true, false, [], change_army);
};

gg.parts.set_my_status_change_animation = function() {
    var army = gg.parts.data.army;
    var map = gg.parts.data.map;
    var zoom = gg.parts.data.zoom;
    var area_map = gg.parts.data.area_map;
    var attack_obj = gg.parts.data.attack_obj;
    var change_army = [];
    if (attack_obj.attack_info.my_unit.enemy_push_now_flag == true) {
        change_army.push({
             army_number:attack_obj.attack_info.my_unit.army_number
            ,unit_number: attack_obj.attack_info.my_unit.unit_number
            ,x: attack_obj.attack_info.my_unit.moved.x
            ,y: attack_obj.attack_info.my_unit.moved.y
            });
    }

    var animation_obj = [];
    var select_map = [];
    select_map.push({x:attack_obj.enemy_x, y:attack_obj.enemy_y, army_color:army[attack_obj.enemy_army_number].color});

    animation_obj.push({x: attack_obj.my_status_change[0].enemy_x,
                         y: attack_obj.my_status_change[0].enemy_y,
                         type:army[attack_obj.my_status_change[0].enemy_army_number].unit[attack_obj.my_status_change[0].enemy_unit_number].type,
                         army_number: attack_obj.my_status_change[0].enemy_army_number,
                         unit_number: attack_obj.my_status_change[0].enemy_unit_number,
                         group: GG_DATA_ANIMATION_ETC_UNIT_STATUS_CHANGE});

    select_map.push({x:attack_obj.my_status_change[0].x, y: attack_obj.my_status_change[0].y, army_color:army[attack_obj.my_status_change[0].army_number].color});
    animation_obj.push({army_number: attack_obj.my_status_change[0].army_number, unit_number: attack_obj.my_status_change[0].unit_number,
                                    status_changed: attack_obj.my_status_change[0].status_changed,
                                    x: attack_obj.my_status_change[0].x,
                                    y: attack_obj.my_status_change[0].y,
                                    group: GG_DATA_ANIMATION_ETC_STATUS_CHANGE});

    var next_function = gg.parts.end;
    if (attack_obj.rob_area_point != null) {
        next_function = gg.parts.set_area_point_animation;
    }

    gg.animation.set_etc_animation2(map, army,
                                        animation_obj, zoom, next_function, GG_DATA_ANIMATION_EFFECT_BIN,
                                   area_map, select_map, 0, true, false, [], change_army);
};

// area point
gg.parts.set_area_point_animation = function() {
    var army = gg.parts.data.army;
    var map = gg.parts.data.map;
    var zoom = gg.parts.data.zoom;
    var area_map = gg.parts.data.area_map;
    var attack_obj = gg.parts.data.attack_obj;

    var animation_obj = [];

    if (attack_obj.rob_area_point != null) {
        animation_obj.push({x: attack_obj.x,
                            y: attack_obj.y,
                            type:army[attack_obj.army_number].unit[attack_obj.unit_number].type,
                            army_number: attack_obj.army_number,
                            unit_number: attack_obj.unit_number,
                            area_point: attack_obj.rob_area_point.area_point,
                            group: GG_DATA_ANIMATION_ETC_DELETE_AREA_POINT});
    }

    var next_function = gg.parts.end;

    var select_map = [];
    select_map.push({x:attack_obj.x, y:attack_obj.y, army_color:army[attack_obj.army_number].color});

    //gg.animation.set_etc_animation(map, army,
    //                               animation_obj, zoom, next_function, GG_DATA_ANIMATION_EFFECT_BIN,
    //                               area_map, select_map, true, []);
    gg.animation.set_etc_animation2(map, army,
                                   animation_obj, zoom, next_function, GG_DATA_ANIMATION_EFFECT_BIN,
                                   area_map, select_map, 0, true, false, [], []);

};

gg.parts.end = function() {
    //gg.parts.data.attack_obj = null;
    gg.parts.data.callback();
};
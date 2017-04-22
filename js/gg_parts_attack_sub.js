gg.parts.check_friend_pull = function(attack_list, army, army_number, unit_number, map, x, y) {
    var max_map_x = GG_DATA_MAP_SIZE.max_x;
    var min_map_x = GG_DATA_MAP_SIZE.min_x;
    var max_map_y = GG_DATA_MAP_SIZE.max_y;
    var min_map_y = GG_DATA_MAP_SIZE.min_y;
    var result = [];
    for (var k = 0; k < attack_list.length; k++) {
        result[k] = {};
        result[k].army = [];
        for (var i = 0; i < army.length; i++) {
            result[k].army[i] = {};
            result[k].army[i].list = [];
        }
    }

    var xabs, yabs, range;
    
    var scythe_list = [];
    for (var i = 0; i < army.length; i++) {
        if (i == army_number) {
            continue;
        }
        for (var j = 0; j < army[i].unit.length; j++) {
            if (army[i].unit[j].defence_type == GG_DATA_DEFENCE_TYPE_FRIEND_PULL &&
                army[i].unit[j].fatigue == 0 &&
                army[i].unit[j].dead_count_down == -1) {
                scythe_list.push({army_number: i, unit_number: j});
            }
        }
    }
    if (scythe_list.length == 0) {
        return result;
    }
    var flag;
    for (var n = 0; n < scythe_list.length; n++) {
        var scythe_unit = army[scythe_list[n].army_number].unit[scythe_list[n].unit_number];
        for (var i = 0; i < attack_list.length; i++) {
            flag = true;
            // attack target ?
            for (var j = 0; j < attack_list[i].list.length; j++) {
                if (attack_list[i].list[j].army_number == scythe_list[n].army_number &&
                    attack_list[i].list[j].unit_number == scythe_list[n].unit_number) {
                    flag = false;
                    break;
                }
                if (attack_list[i].list[j].cover_before_army_number != null &&
                    attack_list[i].list[j].cover_before_army_number == scythe_list[n].army_number &&
                    attack_list[i].list[j].cover_before_unit_number == scythe_list[n].unit_number) {
                    flag = false;
                    break;
                }
            }
            if (flag == false) {
                continue;
            }
            //
            for (var j = 0; j < attack_list[i].list.length; j++) {
                if (attack_list[i].list[j].army_number != scythe_list[n].army_number) {
                    continue;
                }
                if (attack_list[i].list[j].avoidance_now_flag == true ||
                    attack_list[i].list[j].counter_now_flag == true ||
                    attack_list[i].list[j].cover_now_flag == true ||
                    attack_list[i].list[j].attack_down_now_flag == true ||
                    attack_list[i].list[j].enemy_push_now_flag == true) {
                    continue;
                }
                var attacked_unit = army[attack_list[i].list[j].army_number].unit[attack_list[i].list[j].unit_number];
                //range
                xabs = Math.abs(scythe_unit.x - attacked_unit.x);
                yabs = Math.abs(scythe_unit.y - attacked_unit.y);
                if (yabs > xabs) {
                    range = yabs;
                } else {
                    range = (xabs + yabs) / 2;
                }
                if (range != 1) {
                    continue;
                }
                var pull_count = -1;
                for (var k = 0; k < GG_PARTS_FRIEND_PULL_ROUTE.length; k++) {
                    if (attacked_unit.x + GG_PARTS_FRIEND_PULL_ROUTE[k].x == scythe_unit.x &&
                        attacked_unit.y + GG_PARTS_FRIEND_PULL_ROUTE[k].y == scythe_unit.y) {
                        pull_count = k;
                        break;
                    }
                }
                var flag = false;
                var list_pull_count = -1;
                for (var k = 0; k < GG_PARTS_FRIEND_PULL_ROUTE[pull_count].list.length; k++) {
                    flag = true;
                    if (scythe_unit.x + GG_PARTS_FRIEND_PULL_ROUTE[pull_count].list[k].x < min_map_x ||
                        scythe_unit.x + GG_PARTS_FRIEND_PULL_ROUTE[pull_count].list[k].x > max_map_x ||
                        scythe_unit.y + GG_PARTS_FRIEND_PULL_ROUTE[pull_count].list[k].y > max_map_y ||
                        scythe_unit.y + GG_PARTS_FRIEND_PULL_ROUTE[pull_count].list[k].y < min_map_y ||
                        (scythe_unit.x + GG_PARTS_FRIEND_PULL_ROUTE[pull_count].list[k].x == x &&
                         scythe_unit.y + GG_PARTS_FRIEND_PULL_ROUTE[pull_count].list[k].y == y)) {
                        continue;
                    }
                    for (var m = 0; m < army.length; m++) {
                        for (var l = 0; l < army[m].unit.length; l++) {
                            if (scythe_unit.x + GG_PARTS_FRIEND_PULL_ROUTE[pull_count].list[k].x ==
                                army[m].unit[l].x &&
                                scythe_unit.y + GG_PARTS_FRIEND_PULL_ROUTE[pull_count].list[k].y ==
                                army[m].unit[l].y){
                                flag = false;
                                break;
                            }
                        }
                        if (flag == false) {
                            break;
                        }
                    }
                    if (flag == false) {
                        continue;
                    }
                    // WIND
                    if (army[army_number].unit[unit_number].attack_type == GG_DATA_ATTACK_TYPE_WIND) {
                        flag = true;
                        for (var m = 0; m < attack_list[i].attack_area.length; m++) {
                            if (scythe_unit.x + GG_PARTS_FRIEND_PULL_ROUTE[pull_count].list[k].x == attack_list[i].attack_area[m].x &&
                                scythe_unit.y + GG_PARTS_FRIEND_PULL_ROUTE[pull_count].list[k].y == attack_list[i].attack_area[m].y) {
                                flag = false;
                                break;
                            }
                        }
                        if (flag == false) {
                            continue;
                        }
                    }
                    
                    if (flag == true) {
                        list_pull_count = k;
                        break;
                    }
                }
                if (list_pull_count != -1) {
                    result[i].army[scythe_list[n].army_number].list.push({
                        puller:{army_number:scythe_list[n].army_number, unit_number:scythe_list[n].unit_number,
                                x:scythe_unit.x + GG_PARTS_FRIEND_PULL_ROUTE[pull_count].list[list_pull_count].x,
                                y:scythe_unit.y + GG_PARTS_FRIEND_PULL_ROUTE[pull_count].list[list_pull_count].y,
                                fatigue: army[scythe_list[n].army_number].unit[scythe_list[n].unit_number].defence_fatigue,
                                route:[GG_PARTS_FRIEND_PULL_ROUTE[pull_count].route, GG_PARTS_FRIEND_PULL_ROUTE[pull_count].list[list_pull_count].route]},
                        pulled:{army_number:attack_list[i].list[j].army_number, unit_number:attack_list[i].list[j].unit_number,
                                hitpoint:attacked_unit.hitpoint, defecen_point:attacked_unit.defence_point,
                                exp:attacked_unit.exp, id:j,
                                x:scythe_unit.x,
                                y:scythe_unit.y, route:[GG_PARTS_FRIEND_PULL_ROUTE[pull_count].r_route]}});
                }
            }
            // sort
            for (var j = 0; j < result[i].army.length; j++) {
                if (result[i].army[j].list.length > 1) {
                    result[i].army[j].list.sort(function(a, b) {
                        if (a.pulled.hitpoint > b.pulled.hitpoint) {
                            return 1;
                        } else  if (a.pulled.hitpoint < b.pulled.hitpoint) {
                            return -1;
                        } else {
                            if (a.pulled.defence_point > b.pulled.defence_point) {
                                return 1;
                            } else  if (a.pulled.defence_point < b.pulled.defence_point) {
                                return -1;
                            } else {
                                if (a.pulled.exp > b.pulled.exp) {
                                    return 1;
                                } else  if (a.pulled.exp < b.pulled.exp) {
                                    return -1;
                                } else {
                                    if (a.pulled.unit_number > b.pulled.unit_number) {
                                        return 1;
                                    } else  {
                                        return -1;
                                    }
                                }
                            }
                        }
                    });
                    result[i].army[j].pull_action = result[i].army[j].list[0];
                } else if (result[i].army[j].list.length == 1) {
                    result[i].army[j].pull_action = result[i].army[j].list[0];
                } else {
                    result[i].army[j].pull_action = null;
                }
            }
        }
    }
    //
    
    return result;
};

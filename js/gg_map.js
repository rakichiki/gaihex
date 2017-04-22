gg.map = {};

var GG_MAP_MOUNTE_1 = 0;
var GG_MAP_MOUNTE_2 = 1;
var GG_MAP_RIVER_1 = 0;
var GG_MAP_RIVER_2 = 1;
var GG_MAP_RIVER_3 = 2;

var GG_MAP_MOUNTE_MAX = 3;
var GG_MAP_MOUNTE_MIN = 1;
var GG_MAP_HILL_MAX = 6;
var GG_MAP_HILL_MIN = 3;
var GG_MAP_RIVER_MAX = 5;
var GG_MAP_RIVER_MIN = 3;
var GG_MAP_RIVER_RANDOM = 2;

var GG_MAP_ROUND = [
  {x: 1, y: -1}  
  ,{x: 2, y:0}  
  ,{x: 1, y: 1}  
  ,{x: -1, y: 1}  
  ,{x: -2, y: 0}  
  ,{x: -1, y: -1}  
];

var GG_MAP_ROUTE = GG_DATA_MOVE_PATTERN[5];
//var GG_MAP_ROUTE = GG_DATA_MOVE_PATTERN2[5];

gg.map.create_random_map = function(org_map) {
    var map = org_map;
    var center = {x:7, y:5};
    var target_map = [];
    for (var i = 0; i < org_map.length; i++) {
        for (var j = 0; j < org_map[i].length; j++) {
            if (org_map[i][j] != -1) {
                target_map.push({x: j, y: i});
            }
        }
    }
    //
    var mounte = Math.floor(Math.random() * 2);
    if (mounte == GG_MAP_MOUNTE_1) {
        var mounte_max_number = Math.floor(Math.random() * (GG_MAP_MOUNTE_MAX - GG_MAP_MOUNTE_MIN)) + GG_MAP_MOUNTE_MIN;
        for (var i = 0; i < mounte_max_number; i++) {
            var temp_mounten = Math.floor(Math.random() * target_map.length);
            map[target_map[temp_mounten].y][target_map[temp_mounten].x] = 3;
            for (var j = 0; j < GG_MAP_ROUND.length; j++) {
                if (map[target_map[temp_mounten].y + GG_MAP_ROUND[j].y][target_map[temp_mounten].x + GG_MAP_ROUND[j].x] != -1) {
                    map[target_map[temp_mounten].y + GG_MAP_ROUND[j].y][target_map[temp_mounten].x + GG_MAP_ROUND[j].x] = 2;
                }
            }
            var sin_x = center.x * 2 - target_map[temp_mounten].x;
            var sin_y = center.y * 2 - target_map[temp_mounten].y;
            map[sin_y][sin_x] = 3;
            for (var j = 0; j < GG_MAP_ROUND.length; j++) {
                if (map[sin_y+ GG_MAP_ROUND[j].y][sin_x + GG_MAP_ROUND[j].x] != -1) {
                    map[sin_y+ GG_MAP_ROUND[j].y][sin_x + GG_MAP_ROUND[j].x] = 2;
                }
            }
        }

        var hill_max_number = Math.floor(Math.random() * (GG_MAP_HILL_MAX - GG_MAP_HILL_MIN)) + GG_MAP_HILL_MIN;
        for (var i = 0; i < hill_max_number; i++) {
            var temp_mounten = Math.floor(Math.random() * target_map.length);
            if (map[target_map[temp_mounten].y][target_map[temp_mounten].x] == 1) {
                map[target_map[temp_mounten].y][target_map[temp_mounten].x] = 2;
                var sin_x = center.x * 2 - target_map[temp_mounten].x;
                var sin_y = center.y * 2 - target_map[temp_mounten].y;
                map[sin_y][sin_x] = 2;
            }
        }

    } else if (mounte == GG_MAP_MOUNTE_2) {
        var mounte_max_number = Math.floor(Math.random() * (GG_MAP_MOUNTE_MAX - GG_MAP_MOUNTE_MIN)) + GG_MAP_MOUNTE_MIN;
        for (var i = 0; i < mounte_max_number; i++) {
            var temp_mounten = Math.floor(Math.random() * target_map.length);
            map[target_map[temp_mounten].y][target_map[temp_mounten].x] = 3;
            var flag = true;
            for (var j = 0; j < GG_MAP_ROUND.length; j++) {
                if (map[target_map[temp_mounten].y + GG_MAP_ROUND[j].y][target_map[temp_mounten].x + GG_MAP_ROUND[j].x] != -1) {
                    map[target_map[temp_mounten].y + GG_MAP_ROUND[j].y][target_map[temp_mounten].x + GG_MAP_ROUND[j].x] = 2;
                }
            }
            var second_mounten = {x:-1, y:-1}
            while (true) {
                var round_mounten = Math.floor(Math.random() * GG_MAP_ROUND.length);
                if (map[target_map[temp_mounten].y + GG_MAP_ROUND[round_mounten].y][target_map[temp_mounten].x + GG_MAP_ROUND[round_mounten].x]
                    != -1) {
                    second_mounten = {x:target_map[temp_mounten].x + GG_MAP_ROUND[round_mounten].x,
                                      y:target_map[temp_mounten].y + GG_MAP_ROUND[round_mounten].y};
                    map[second_mounten.y][second_mounten.x] = 3;
                    for (var j = 0; j < GG_MAP_ROUND.length; j++) {
                        if (map[second_mounten.y + GG_MAP_ROUND[j].y][second_mounten.x + GG_MAP_ROUND[j].x] == 1) {
                            map[second_mounten.y + GG_MAP_ROUND[j].y][second_mounten.x + GG_MAP_ROUND[j].x] = 2;
                        }
                    }
                    break;
                }
            }

            var sin_x = center.x * 2 - target_map[temp_mounten].x;
            var sin_y = center.y * 2 - target_map[temp_mounten].y;
            map[sin_y][sin_x] = 3;
            for (var j = 0; j < GG_MAP_ROUND.length; j++) {
                if (map[sin_y+ GG_MAP_ROUND[j].y][sin_x + GG_MAP_ROUND[j].x] != -1) {
                    map[sin_y+ GG_MAP_ROUND[j].y][sin_x + GG_MAP_ROUND[j].x] = 2;
                }
            }
            var sin_x = center.x * 2 - second_mounten.x;
            var sin_y = center.y * 2 - second_mounten.y;
            map[sin_y][sin_x] = 3;
            for (var j = 0; j < GG_MAP_ROUND.length; j++) {
                if (map[sin_y+ GG_MAP_ROUND[j].y][sin_x + GG_MAP_ROUND[j].x] == 1) {
                    map[sin_y+ GG_MAP_ROUND[j].y][sin_x + GG_MAP_ROUND[j].x] = 2;
                }
            }
        }
    }
    
    /////
    var river = Math.floor(Math.random() * 3);
    //river = 2;
    river = GG_MAP_RIVER_2;
    //console.log('river:' + river);
    if (river == GG_MAP_RIVER_1) {
        var river_max_number = Math.floor(Math.random() * (GG_MAP_RIVER_MAX - GG_MAP_RIVER_MIN)) + GG_MAP_RIVER_MIN;
        for (var i = 0; i < river_max_number; i++) {
            var temp_mounten = Math.floor(Math.random() * target_map.length);
            map[target_map[temp_mounten].y][target_map[temp_mounten].x] = 0;
            var sin_x = center.x * 2 - target_map[temp_mounten].x;
            var sin_y = center.y * 2 - target_map[temp_mounten].y;
            map[sin_y][sin_x] = 0;
        }

    } else if (river == GG_MAP_RIVER_2) {
        var river_max_number = 1;
        for (var i = 0; i < river_max_number; i++) {
            var temp_mounten = Math.floor(Math.random() * target_map.length);
            if (target_map[temp_mounten].y == center.y &&
                target_map[temp_mounten].x == center.x) {
                temp_mounten -= 1;
            }
            map[target_map[temp_mounten].y][target_map[temp_mounten].x] = 0;

            var plane_number = Math.floor(Math.random() * 6);
            //var plane;
            for (var j = 0; j < GG_MAP_ROUND.length; j++) {
                if (map[target_map[temp_mounten].y + GG_MAP_ROUND[j].y][target_map[temp_mounten].x + GG_MAP_ROUND[j].x] == -1) {
                    continue;
                }
                if (plane_number == j) {
                    var plane = {x:target_map[temp_mounten].x + GG_MAP_ROUND[j].x, y:target_map[temp_mounten].y + GG_MAP_ROUND[j].y};
                    map[target_map[temp_mounten].y + GG_MAP_ROUND[j].y][target_map[temp_mounten].x + GG_MAP_ROUND[j].x] = 1;
                    
                } else {
                    map[target_map[temp_mounten].y + GG_MAP_ROUND[j].y][target_map[temp_mounten].x + GG_MAP_ROUND[j].x] = 0;
                }
            }
            var sin_x = center.x * 2 - target_map[temp_mounten].x;
            var sin_y = center.y * 2 - target_map[temp_mounten].y;
            map[sin_y][sin_x] = 0;
            for (var j = 0; j < GG_MAP_ROUND.length; j++) {
                if (map[sin_y+ GG_MAP_ROUND[j].y][sin_x + GG_MAP_ROUND[j].x] != -1) {
                    map[sin_y+ GG_MAP_ROUND[j].y][sin_x + GG_MAP_ROUND[j].x] = 0;
                }
            }
            if (plane != undefined) {
                var sin_x = center.x * 2 - plane.x;
                var sin_y = center.y * 2 - plane.y;
                map[sin_y][sin_x] = 1;
            }
            
        }
    } else if (river == GG_MAP_RIVER_3) {
        var river_start = [];
        for (var i = 0 ; i < map.length; i++) {
            for (var j = 0 ; j < map[i].length; j++) {
                if (map[i][j] == -1) {
                    continue;
                }
                if (i == GG_DATA_MAP_SIZE.min_y || i == GG_DATA_MAP_SIZE.max_y) {
                    river_start.push({x:j, y:i});
                } else if (j == GG_DATA_MAP_SIZE.min_x || j == GG_DATA_MAP_SIZE.min_x + 1 || j == GG_DATA_MAP_SIZE.max_x - 1 || j == GG_DATA_MAP_SIZE.max_x) {
                    river_start.push({x:j, y:i});
                }
            }
        }
        ////////////////
        var start_position = Math.floor(Math.random() * river_start.length);
        var river_route = [];
        for (var i = 0; i < GG_MAP_ROUTE.length; i++) {
            if (river_start[start_position].x + GG_MAP_ROUTE[i].x == center.x &&
                river_start[start_position].y + GG_MAP_ROUTE[i].y == center.y) {
                
                var before = {x: river_start[start_position].x, y:river_start[start_position].y};
                var check_flag = true;
                for (var j = 0; j < GG_MAP_ROUTE[i].route.length; j++) {
                    var temp_x = before.x + GG_MAP_ROUND[GG_MAP_ROUTE[i].route[j]].x;
                    var temp_y = before.y + GG_MAP_ROUND[GG_MAP_ROUTE[i].route[j]].y;
                    if (map[temp_y][temp_x] == -1) {
                        check_flag = false;
                        break;
                    }
                    before = {x: temp_x, y: temp_y};
                }
                if (check_flag == true) {
                    river_route.push(i);
                }
                
            }
        }
        var route_patern = Math.floor(Math.random() * river_route.length);
        //
        map[river_start[start_position].y][river_start[start_position].x] = 0;
        var sin_x = center.x * 2 - river_start[start_position].x;
        var sin_y = center.y * 2 - river_start[start_position].y;
        map[sin_y][sin_x] = 0;

        var before = {x: river_start[start_position].x, y:river_start[start_position].y};
        var route = GG_MAP_ROUTE[river_route[route_patern]];
        var bridge = Math.floor(Math.random() * route.route.length);
        for (var i = 0; i < route.route.length; i++) {
            var temp_x = before.x +  GG_MAP_ROUND[route.route[i]].x;
            var temp_y = before.y +  GG_MAP_ROUND[route.route[i]].y;
            var sin_x = center.x * 2 - temp_x;
            var sin_y = center.y * 2 - temp_y;
            if (i == bridge) {
                map[temp_y][temp_x] = 1;
                map[sin_y][sin_x] = 1;
            } else {
                map[temp_y][temp_x] = 0;
                map[sin_y][sin_x] = 0;
                
            }
            before = {x: temp_x, y: temp_y};
        }
    }
    
    
    // center heichi -> hill
    if (map[5][7] == 1) {
        map[5][7] = 0;
    }
    // heichi add
    var change_map = []
    for (var i = 0; i < map.length; i++) {
        for (var j = 0; j < map[i].length; j++) {
            if (map[i][j] != -1 && map[i][j] != 1 &&
                (i != 5 || j != 7)) {
                change_map.push({x: j, y: i});
            }
        }
    }
    if (change_map.length > 28) {
        var change_max = Math.floor((change_map.length - 28) / 2);
        var river_max_number = Math.floor(Math.random() * (GG_MAP_RIVER_MAX - GG_MAP_RIVER_MIN)) + GG_MAP_RIVER_MIN;
        for (var i = 0; i < change_max; i++) {
            var change_map_number = Math.floor(Math.random() * change_map.length);
            map[change_map[change_map_number].y][change_map[change_map_number].x] = 1;
            var sin_x = center.x * 2 - change_map[change_map_number].x;
            var sin_y = center.y * 2 - change_map[change_map_number].y;
            map[sin_y][sin_x] = 1;
        }
    }
    // start
    var start_position = [{x:2, y:2}, {x:2, y:4}, {x:2, y:6}, {x:2, y:8},
                          {x:3, y:1},{x:3, y:3},{x:3, y:5},{x:3, y:7},{x:3, y:9},
                          {x:12, y:2}, {x:12, y:4}, {x:12, y:6}, {x:12, y:8},
                          {x:11, y:1},{x:11, y:3},{x:11, y:5},{x:11, y:7},{x:11, y:9}
                          ];
    for (var i = 0; i < start_position.length; i++) {
        if (map[start_position[i].y][start_position[i].x] == 0) {
            map[start_position[i].y][start_position[i].x] = 2;
        }
    }

    // hill add
    change_map = []
    no_plane_map = []
    for (var i = 0; i < map.length; i++) {
        for (var j = 0; j < map[i].length; j++) {
            if (map[i][j] == 1) {
                change_map.push({x: j, y: i});
            } else if (map[i][j] >= 0 && (i != 5 || j != 7)) {
                no_plane_map.push({x: j, y: i});
            }
        }
    }

    //if (change_map.length != 22) {
    //    console.log('change_map.length:' + change_map.length);
    //    console.log('no_plane_map.length:' + no_plane_map.length);
    //}
    if (change_map.length > 22) {
        var change_max = Math.floor((change_map.length - 22) / 2);
        for (var i = 0; i < change_max; i++) {
            var change_map_number = Math.floor(Math.random() * change_map.length);
            //console.log('x:' + change_map[change_map_number].x + ' y:' + change_map[change_map_number].y);
            map[change_map[change_map_number].y][change_map[change_map_number].x] = 2;
            var sin_x = center.x * 2 - change_map[change_map_number].x;
            var sin_y = center.y * 2 - change_map[change_map_number].y;
            //console.log('x:' + sin_x + ' y:' + sin_y);
            map[sin_y][sin_x] = 2;
            change_map.splice(change_map_number, 1);            
            for (var j = 0; j < change_map.length; j++) {
                if (change_map[j].x == sin_x &&
                    change_map[j].y == sin_y) {
                    change_map_number = j;
                    break;
                }
            }
            change_map.splice(change_map_number, 1);
        }
    } else if (change_map.length < 22) {
        var change_max = Math.floor((22 - change_map.length) / 2);
        for (var i = 0; i < change_max; i++) {
            var change_map_number = Math.floor(Math.random() * no_plane_map.length);
            map[no_plane_map[change_map_number].y][no_plane_map[change_map_number].x] = 1;
            var sin_x = center.x * 2 - no_plane_map[change_map_number].x;
            var sin_y = center.y * 2 - no_plane_map[change_map_number].y;
            map[sin_y][sin_x] = 1;
        }

    }
    // debug
    var water_count = 0;
    var water_position = [];
    for (var i = 0; i < map.length; i++) {
        for (var j = 0; j < map[i].length; j++) {
            if (map[i][j] == 0) {
                water_count++;
                water_position.push({x:j, y:i});
            }
        }
    }
    if (water_count > 9) {
        if (water_count > 9) {
            var water_number = Math.floor(Math.random() * water_position.length);
            var x = water_position[water_number].x;
            var y = water_position[water_number].y;
            map[y][x] = 2;
            map[center.y * 2 - y][center.x * 2 - x] = 2;            
        }
        if (water_count > 11) {
            var water_position = [];
            for (var i = 0; i < map.length; i++) {
                for (var j = 0; j < map[i].length; j++) {
                    if (map[i][j] == 0) {
                        water_position.push({x:j, y:i});
                    }
                }
            }
            var water_number = Math.floor(Math.random() * water_position.length);
            var x = water_position[water_number].x;
            var y = water_position[water_number].y;
            map[y][x] = 2;
            map[center.y * 2 - y][center.x * 2 - x] = 2;            
        }
        //console.log('NG');
    }
    /////
    //change_map = []
    //no_plane_map = []
    //for (var i = 0; i < map.length; i++) {
    //    for (var j = 0; j < map[i].length; j++) {
    //        if (map[i][j] == 1) {
    //            change_map.push({x: j, y: i});
    //        } else if (map[i][j] > 0) {
    //            no_plane_map.push({x: j, y: i});
    //        }
    //    }
    //}
    //console.log('change_map.length:' + change_map.length);
    //if (change_map.length > 24 || change_map.length < 20) {
    //    console.log('change_map.length:' + change_map.length);
    //}    
    return map;
};

//
gg.map.create_river_random_map = function(org_map) {
    var map = org_map;
    var center = {x:7, y:5};
    var target_map = [];
    for (var i = 0; i < org_map.length; i++) {
        for (var j = 0; j < org_map[i].length; j++) {
            if (org_map[i][j] != -1) {
                target_map.push({x: j, y: i});
            }
        }
    }
    //
    var mounte = Math.floor(Math.random() * 2);
    if (mounte == GG_MAP_MOUNTE_1) {
        var mounte_max_number = Math.floor(Math.random() * (GG_MAP_MOUNTE_MAX - GG_MAP_MOUNTE_MIN)) + GG_MAP_MOUNTE_MIN;
        for (var i = 0; i < mounte_max_number; i++) {
            var temp_mounten = Math.floor(Math.random() * target_map.length);
            map[target_map[temp_mounten].y][target_map[temp_mounten].x] = 3;
            for (var j = 0; j < GG_MAP_ROUND.length; j++) {
                if (map[target_map[temp_mounten].y + GG_MAP_ROUND[j].y][target_map[temp_mounten].x + GG_MAP_ROUND[j].x] != -1) {
                    map[target_map[temp_mounten].y + GG_MAP_ROUND[j].y][target_map[temp_mounten].x + GG_MAP_ROUND[j].x] = 2;
                }
            }
            var sin_x = center.x * 2 - target_map[temp_mounten].x;
            var sin_y = center.y * 2 - target_map[temp_mounten].y;
            map[sin_y][sin_x] = 3;
            for (var j = 0; j < GG_MAP_ROUND.length; j++) {
                if (map[sin_y+ GG_MAP_ROUND[j].y][sin_x + GG_MAP_ROUND[j].x] != -1) {
                    map[sin_y+ GG_MAP_ROUND[j].y][sin_x + GG_MAP_ROUND[j].x] = 2;
                }
            }
        }

        var hill_max_number = Math.floor(Math.random() * (GG_MAP_HILL_MAX - GG_MAP_HILL_MIN)) + GG_MAP_HILL_MIN;
        for (var i = 0; i < hill_max_number; i++) {
            var temp_mounten = Math.floor(Math.random() * target_map.length);
            if (map[target_map[temp_mounten].y][target_map[temp_mounten].x] == 1) {
                map[target_map[temp_mounten].y][target_map[temp_mounten].x] = 2;
                var sin_x = center.x * 2 - target_map[temp_mounten].x;
                var sin_y = center.y * 2 - target_map[temp_mounten].y;
                map[sin_y][sin_x] = 2;
            }
        }

    } else if (mounte == GG_MAP_MOUNTE_2) {
        var mounte_max_number = Math.floor(Math.random() * (GG_MAP_MOUNTE_MAX - GG_MAP_MOUNTE_MIN)) + GG_MAP_MOUNTE_MIN;
        for (var i = 0; i < mounte_max_number; i++) {
            var temp_mounten = Math.floor(Math.random() * target_map.length);
            map[target_map[temp_mounten].y][target_map[temp_mounten].x] = 3;
            var flag = true;
            for (var j = 0; j < GG_MAP_ROUND.length; j++) {
                if (map[target_map[temp_mounten].y + GG_MAP_ROUND[j].y][target_map[temp_mounten].x + GG_MAP_ROUND[j].x] != -1) {
                    map[target_map[temp_mounten].y + GG_MAP_ROUND[j].y][target_map[temp_mounten].x + GG_MAP_ROUND[j].x] = 2;
                }
            }
            var second_mounten = {x:-1, y:-1}
            while (true) {
                var round_mounten = Math.floor(Math.random() * GG_MAP_ROUND.length);
                if (map[target_map[temp_mounten].y + GG_MAP_ROUND[round_mounten].y][target_map[temp_mounten].x + GG_MAP_ROUND[round_mounten].x]
                    != -1) {
                    second_mounten = {x:target_map[temp_mounten].x + GG_MAP_ROUND[round_mounten].x,
                                      y:target_map[temp_mounten].y + GG_MAP_ROUND[round_mounten].y};
                    map[second_mounten.y][second_mounten.x] = 3;
                    for (var j = 0; j < GG_MAP_ROUND.length; j++) {
                        if (map[second_mounten.y + GG_MAP_ROUND[j].y][second_mounten.x + GG_MAP_ROUND[j].x] == 1) {
                            map[second_mounten.y + GG_MAP_ROUND[j].y][second_mounten.x + GG_MAP_ROUND[j].x] = 2;
                        }
                    }
                    break;
                }
            }

            var sin_x = center.x * 2 - target_map[temp_mounten].x;
            var sin_y = center.y * 2 - target_map[temp_mounten].y;
            map[sin_y][sin_x] = 3;
            for (var j = 0; j < GG_MAP_ROUND.length; j++) {
                if (map[sin_y+ GG_MAP_ROUND[j].y][sin_x + GG_MAP_ROUND[j].x] != -1) {
                    map[sin_y+ GG_MAP_ROUND[j].y][sin_x + GG_MAP_ROUND[j].x] = 2;
                }
            }
            var sin_x = center.x * 2 - second_mounten.x;
            var sin_y = center.y * 2 - second_mounten.y;
            map[sin_y][sin_x] = 3;
            for (var j = 0; j < GG_MAP_ROUND.length; j++) {
                if (map[sin_y+ GG_MAP_ROUND[j].y][sin_x + GG_MAP_ROUND[j].x] == 1) {
                    map[sin_y+ GG_MAP_ROUND[j].y][sin_x + GG_MAP_ROUND[j].x] = 2;
                }
            }
        }
    }
    
    /////
    //river = 2;
    //river = GG_MAP_RIVER_3;
    var river_start = [];
    for (var i = 0 ; i < map.length; i++) {
        for (var j = 0 ; j < map[i].length; j++) {
            if (map[i][j] == -1) {
                continue;
            }
            if ((i == GG_DATA_MAP_SIZE.min_y || i == GG_DATA_MAP_SIZE.max_y) &&
                (j >= 5 && j <= 9)) {
                river_start.push({x:j, y:i});
            }
        }
    }
    ////////////////
    var start_position = Math.floor(Math.random() * river_start.length);
    var river_route = [];
    for (var i = 0; i < GG_MAP_ROUTE.length; i++) {
        if (river_start[start_position].x + GG_MAP_ROUTE[i].x == center.x &&
            river_start[start_position].y + GG_MAP_ROUTE[i].y == center.y) {
            
            var before = {x: river_start[start_position].x, y:river_start[start_position].y};
            var check_flag = true;
            for (var j = 0; j < GG_MAP_ROUTE[i].route.length; j++) {
                var temp_x = before.x + GG_MAP_ROUND[GG_MAP_ROUTE[i].route[j]].x;
                var temp_y = before.y + GG_MAP_ROUND[GG_MAP_ROUTE[i].route[j]].y;
                if (map[temp_y][temp_x] == -1) {
                    check_flag = false;
                    break;
                }
                before = {x: temp_x, y: temp_y};
            }
            if (check_flag == true) {
                river_route.push(i);
            }
            
        }
    }
    var route_patern = Math.floor(Math.random() * river_route.length);
    //
    map[river_start[start_position].y][river_start[start_position].x] = 0;
    var sin_x = center.x * 2 - river_start[start_position].x;
    var sin_y = center.y * 2 - river_start[start_position].y;
    map[sin_y][sin_x] = 0;

    var before = {x: river_start[start_position].x, y:river_start[start_position].y};
    var route = GG_MAP_ROUTE[river_route[route_patern]];
    var bridge = Math.floor(Math.random() * route.route.length);
    for (var i = 0; i < route.route.length; i++) {
        var temp_x = before.x +  GG_MAP_ROUND[route.route[i]].x;
        var temp_y = before.y +  GG_MAP_ROUND[route.route[i]].y;
        var sin_x = center.x * 2 - temp_x;
        var sin_y = center.y * 2 - temp_y;
        if (i == bridge) {
            map[temp_y][temp_x] = 1;
            map[sin_y][sin_x] = 1;
        } else {
            map[temp_y][temp_x] = 0;
            map[sin_y][sin_x] = 0;
            
        }
        before = {x: temp_x, y: temp_y};
    }

    // center heichi -> hill
    if (map[5][7] == 1) {
        map[5][7] = 0;
    }
    // heichi add
    var change_map = []
    for (var i = 0; i < map.length; i++) {
        for (var j = 0; j < map[i].length; j++) {
            if (map[i][j] != -1 && map[i][j] > 1 &&
                (i != 5 || j != 7)) {
                change_map.push({x: j, y: i});
            }
        }
    }
    if (change_map.length > 28) {
        var change_max = Math.floor((change_map.length - 28) / 2);
        for (var i = 0; i < change_max; i++) {
            var change_map_number = Math.floor(Math.random() * change_map.length);
            map[change_map[change_map_number].y][change_map[change_map_number].x] = 1;
            var sin_x = center.x * 2 - change_map[change_map_number].x;
            var sin_y = center.y * 2 - change_map[change_map_number].y;
            map[sin_y][sin_x] = 1;
        }
    }
    // start
    var start_position = [{x:2, y:2}, {x:2, y:4}, {x:2, y:6}, {x:2, y:8},
                          {x:3, y:1},{x:3, y:3},{x:3, y:5},{x:3, y:7},{x:3, y:9},
                          {x:12, y:2}, {x:12, y:4}, {x:12, y:6}, {x:12, y:8},
                          {x:11, y:1},{x:11, y:3},{x:11, y:5},{x:11, y:7},{x:11, y:9}
                          ];
    for (var i = 0; i < start_position.length; i++) {
        if (map[start_position[i].y][start_position[i].x] == 0) {
            map[start_position[i].y][start_position[i].x] = 2;
        }
    }

    // hill add
    change_map = []
    no_plane_map = []
    for (var i = 0; i < map.length; i++) {
        for (var j = 0; j < map[i].length; j++) {
            if (map[i][j] == 1) {
                change_map.push({x: j, y: i});
            } else if (map[i][j] >= 1 && (i != 5 || j != 7)) {
                no_plane_map.push({x: j, y: i});
            }
        }
    }

    if (change_map.length > 22) {
        var change_max = Math.floor((change_map.length - 22) / 2);
        for (var i = 0; i < change_max; i++) {
            var change_map_number = Math.floor(Math.random() * change_map.length);
            //console.log('x:' + change_map[change_map_number].x + ' y:' + change_map[change_map_number].y);
            map[change_map[change_map_number].y][change_map[change_map_number].x] = 2;
            var sin_x = center.x * 2 - change_map[change_map_number].x;
            var sin_y = center.y * 2 - change_map[change_map_number].y;
            //console.log('x:' + sin_x + ' y:' + sin_y);
            map[sin_y][sin_x] = 2;
            change_map.splice(change_map_number, 1);            
            for (var j = 0; j < change_map.length; j++) {
                if (change_map[j].x == sin_x &&
                    change_map[j].y == sin_y) {
                    change_map_number = j;
                    break;
                }
            }
            change_map.splice(change_map_number, 1);
        }
    } else if (change_map.length < 22) {
        var change_max = Math.floor((22 - change_map.length) / 2);
        for (var i = 0; i < change_max; i++) {
            var change_map_number = Math.floor(Math.random() * no_plane_map.length);
            map[no_plane_map[change_map_number].y][no_plane_map[change_map_number].x] = 1;
            var sin_x = center.x * 2 - no_plane_map[change_map_number].x;
            var sin_y = center.y * 2 - no_plane_map[change_map_number].y;
            map[sin_y][sin_x] = 1;
        }

    }
    return map;
};
//
gg.map.create_mounten_random_map = function(org_map) {
    var map = org_map;
    var center = {x:7, y:5};
    var target_map = [];
    for (var i = 0; i < org_map.length; i++) {
        for (var j = 0; j < org_map[i].length; j++) {
            if (org_map[i][j] != -1) {
                target_map.push({x: j, y: i});
            }
        }
    }
    //
    var mounte = Math.floor(Math.random() * 2);
    
    /////
    //river = 2;
    //river = GG_MAP_RIVER_3;
    var river_start = [];
    for (var i = 0 ; i < map.length; i++) {
        for (var j = 0 ; j < map[i].length; j++) {
            if (map[i][j] == -1) {
                continue;
            }
            if (i == GG_DATA_MAP_SIZE.min_y || i == GG_DATA_MAP_SIZE.max_y) {
                river_start.push({x:j, y:i});
            }
        }
    }
    ////////////////
    var start_position = Math.floor(Math.random() * river_start.length);
    var river_route = [];
    for (var i = 0; i < GG_MAP_ROUTE.length; i++) {
        if (river_start[start_position].x + GG_MAP_ROUTE[i].x == center.x &&
            river_start[start_position].y + GG_MAP_ROUTE[i].y == center.y) {
            
            var before = {x: river_start[start_position].x, y:river_start[start_position].y};
            var check_flag = true;
            for (var j = 0; j < GG_MAP_ROUTE[i].route.length; j++) {
                var temp_x = before.x + GG_MAP_ROUND[GG_MAP_ROUTE[i].route[j]].x;
                var temp_y = before.y + GG_MAP_ROUND[GG_MAP_ROUTE[i].route[j]].y;
                if (map[temp_y][temp_x] == -1) {
                    check_flag = false;
                    break;
                }
                before = {x: temp_x, y: temp_y};
            }
            if (check_flag == true) {
                river_route.push(i);
            }
            
        }
    }
    var route_patern = Math.floor(Math.random() * river_route.length);
    //
    map[river_start[start_position].y][river_start[start_position].x] = 0;
    var sin_x = center.x * 2 - river_start[start_position].x;
    var sin_y = center.y * 2 - river_start[start_position].y;
    map[sin_y][sin_x] = 0;

    var before = {x: river_start[start_position].x, y:river_start[start_position].y};
    var route = GG_MAP_ROUTE[river_route[route_patern]];
    var bridge = Math.floor(Math.random() * route.route.length);
    for (var i = 0; i < route.route.length; i++) {
        var temp_x = before.x +  GG_MAP_ROUND[route.route[i]].x;
        var temp_y = before.y +  GG_MAP_ROUND[route.route[i]].y;
        var sin_x = center.x * 2 - temp_x;
        var sin_y = center.y * 2 - temp_y;
        //if (i == bridge) {
        //    map[temp_y][temp_x] = 1;
        //    map[sin_y][sin_x] = 1;
        //} else {
        map[temp_y][temp_x] = 3;
        map[sin_y][sin_x] = 3;
            
        //}
        before = {x: temp_x, y: temp_y};
    }
    for (var i = 0; i < map.length; i++) {
        for (var j = 0; j < map[i].length; j++) {
            if (map[i][j] == 3) {
                for (var k = 0; k < 6; k++) {
                    if (map[i + GG_DATA_MOVE_DIRECTION[k].y][j +  + GG_DATA_MOVE_DIRECTION[k].x] != -1 &&
                        map[i + GG_DATA_MOVE_DIRECTION[k].y][j +  + GG_DATA_MOVE_DIRECTION[k].x] != 3) {
                        map[i + GG_DATA_MOVE_DIRECTION[k].y][j +  + GG_DATA_MOVE_DIRECTION[k].x] = 2;
                    }
                }
            }
        }
    }

    // center heichi -> hill
    // heichi add
    var change_map = []
    for (var i = 0; i < map.length; i++) {
        for (var j = 0; j < map[i].length; j++) {
            if (map[i][j] != -1 && map[i][j] > 1 &&
                (i != 5 || j != 7)) {
                change_map.push({x: j, y: i});
            }
        }
    }
    if (change_map.length > 28) {
        var change_max = Math.floor((change_map.length - 28) / 2);
        for (var i = 0; i < change_max; i++) {
            var change_map_number = Math.floor(Math.random() * change_map.length);
            map[change_map[change_map_number].y][change_map[change_map_number].x] = 1;
            var sin_x = center.x * 2 - change_map[change_map_number].x;
            var sin_y = center.y * 2 - change_map[change_map_number].y;
            map[sin_y][sin_x] = 1;
        }
    }
    //
    
    // start
    var start_position = [{x:2, y:2}, {x:2, y:4}, {x:2, y:6}, {x:2, y:8},
                          {x:3, y:1},{x:3, y:3},{x:3, y:5},{x:3, y:7},{x:3, y:9},
                          {x:12, y:2}, {x:12, y:4}, {x:12, y:6}, {x:12, y:8},
                          {x:11, y:1},{x:11, y:3},{x:11, y:5},{x:11, y:7},{x:11, y:9}
                          ];
    for (var i = 0; i < start_position.length; i++) {
        if (map[start_position[i].y][start_position[i].x] == 0) {
            map[start_position[i].y][start_position[i].x] = 2;
        }
    }

    // hill add
    change_map = [];
    no_plane_map = [];
    for (var i = 0; i < map.length; i++) {
        for (var j = 0; j < map[i].length; j++) {
            if (map[i][j] == 1) {
                change_map.push({x: j, y: i});
            } else if (map[i][j] >= 1 && (i != 5 || j != 7)) {
                no_plane_map.push({x: j, y: i});
            }
        }
    }

    if (change_map.length > 18) {
        var change_max = Math.floor((change_map.length - 18) / 2);
        for (var i = 0; i < change_max; i++) {
            var change_map_number = Math.floor(Math.random() * change_map.length);
            //console.log('x:' + change_map[change_map_number].x + ' y:' + change_map[change_map_number].y);
            map[change_map[change_map_number].y][change_map[change_map_number].x] = 2;
            var sin_x = center.x * 2 - change_map[change_map_number].x;
            var sin_y = center.y * 2 - change_map[change_map_number].y;
            //console.log('x:' + sin_x + ' y:' + sin_y);
            map[sin_y][sin_x] = 2;
            change_map.splice(change_map_number, 1);            
            for (var j = 0; j < change_map.length; j++) {
                if (change_map[j].x == sin_x &&
                    change_map[j].y == sin_y) {
                    change_map_number = j;
                    break;
                }
            }
            change_map.splice(change_map_number, 1);
        }
    } else {
        console.log('NG');
    }
    //if (change_map.length < 18) {
        //var change_max = Math.floor((22 - change_map.length) / 2);
        var change_max = 2;
        for (var i = 0; i < change_max; i++) {
            var change_map_number = Math.floor(Math.random() * no_plane_map.length);
            map[no_plane_map[change_map_number].y][no_plane_map[change_map_number].x] = 1;
            var sin_x = center.x * 2 - no_plane_map[change_map_number].x;
            var sin_y = center.y * 2 - no_plane_map[change_map_number].y;
            map[sin_y][sin_x] = 1;
        }

    //}
    //if (map[5][7] == 1) {
    map[5][7] = 2;
    //}
    change_map = [];
    for (var i = 0; i < map.length; i++) {
        for (var j = 0; j < map[i].length; j++) {
            if (map[i][j] == 3) {
                change_map.push({x: j, y: i});
            }
        }
    }
    if (change_map.length > 6) {
        var change_map_number = Math.floor(Math.random() * change_map.length);
        map[change_map[change_map_number].y][change_map[change_map_number].x] = 2;
        map[center.y * 2 - change_map[change_map_number].y][center.x * 2 - change_map[change_map_number].x] = 2;
        
    }
    return map;
};

gg.map.create_plane_random_map = function(org_map) {
    var map = org_map;
    map[5][7] = 0;
    var center = {x:7, y:5};
    var target_map = [];
    for (var i = 0; i < org_map.length; i++) {
        for (var j = 0; j < org_map[i].length; j++) {
            if (org_map[i][j] != -1) {
                target_map.push({x: j, y: i});
            }
        }
    }
    //
    // heichi add
    var change_map = []
    for (var i = 0; i < map.length; i++) {
        for (var j = 0; j < map[i].length; j++) {
            if (map[i][j] != -1 && map[i][j] > 1 &&
                (i != 5 || j != 7)) {
                change_map.push({x: j, y: i});
            }
        }
    }
    if (change_map.length > 28) {
        var change_max = Math.floor((change_map.length - 28) / 2);
        for (var i = 0; i < change_max; i++) {
            var change_map_number = Math.floor(Math.random() * change_map.length);
            map[change_map[change_map_number].y][change_map[change_map_number].x] = 1;
            var sin_x = center.x * 2 - change_map[change_map_number].x;
            var sin_y = center.y * 2 - change_map[change_map_number].y;
            map[sin_y][sin_x] = 1;
        }
    }
    //
    
    // start
    var start_position = [{x:2, y:2}, {x:2, y:4}, {x:2, y:6}, {x:2, y:8},
                          {x:3, y:1},{x:3, y:3},{x:3, y:5},{x:3, y:7},{x:3, y:9},
                          {x:12, y:2}, {x:12, y:4}, {x:12, y:6}, {x:12, y:8},
                          {x:11, y:1},{x:11, y:3},{x:11, y:5},{x:11, y:7},{x:11, y:9}
                          ];
    for (var i = 0; i < start_position.length; i++) {
        if (map[start_position[i].y][start_position[i].x] == 0) {
            map[start_position[i].y][start_position[i].x] = 2;
        }
    }

    // hill add
    change_map = []
    no_plane_map = []
    for (var i = 0; i < map.length; i++) {
        for (var j = 0; j < map[i].length; j++) {
            if (map[i][j] == 1) {
                change_map.push({x: j, y: i});
            } else if (map[i][j] >= 1 && (i != 5 || j != 7)) {
                no_plane_map.push({x: j, y: i});
            }
        }
    }

    if (change_map.length > 22) {
        var change_max = Math.floor((change_map.length - 22) / 2);
        for (var i = 0; i < change_max; i++) {
            var change_map_number = Math.floor(Math.random() * change_map.length);
            //console.log('x:' + change_map[change_map_number].x + ' y:' + change_map[change_map_number].y);
            map[change_map[change_map_number].y][change_map[change_map_number].x] = 2;
            var sin_x = center.x * 2 - change_map[change_map_number].x;
            var sin_y = center.y * 2 - change_map[change_map_number].y;
            //console.log('x:' + sin_x + ' y:' + sin_y);
            map[sin_y][sin_x] = 2;
            change_map.splice(change_map_number, 1);            
            for (var j = 0; j < change_map.length; j++) {
                if (change_map[j].x == sin_x &&
                    change_map[j].y == sin_y) {
                    change_map_number = j;
                    break;
                }
            }
            change_map.splice(change_map_number, 1);
        }
    } else if (change_map.length < 22) {
        var change_max = Math.floor((22 - change_map.length) / 2);
        for (var i = 0; i < change_max; i++) {
            var change_map_number = Math.floor(Math.random() * no_plane_map.length);
            map[no_plane_map[change_map_number].y][no_plane_map[change_map_number].x] = 1;
            var sin_x = center.x * 2 - no_plane_map[change_map_number].x;
            var sin_y = center.y * 2 - no_plane_map[change_map_number].y;
            map[sin_y][sin_x] = 1;
        }

    }
    return map;
};

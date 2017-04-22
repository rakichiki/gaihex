gg.controller_user = {};
gg.controller_user.data = {};
gg.controller_user.data.map;
gg.controller_user.data.army;
gg.controller_user.data.zoom;
gg.controller_user.data.callback;
gg.controller_user.data.army_number;
gg.controller_user.data.status;
gg.controller_user.data.area_list;
gg.controller_user.data.moved = {};
gg.controller_user.data.moved.x;
gg.controller_user.data.moved.y;
gg.controller_user.data.result;
gg.controller_user.data.dialog = 0;
gg.controller_user.data.famous_words_timeout;
gg.controller_user.data.select_map;
gg.controller_user.data.timer_blink;
gg.controller_user.data.cancel_area = false;

gg.controller_user.data.audio;
gg.controller_user.data.audio_flag;

gg.controller_user.data.blink;
gg.controller_user.data.graph;

var GG_CONTROLLER_USER_EVENT_SELECT_MOVE_UNIT = 0;
var GG_CONTROLLER_USER_EVENT_SELECT_MOVE_AREA = 1;
var GG_CONTROLLER_USER_EVENT_SELECT_ATTACK_UNIT = 2;
var GG_CONTROLLER_USER_BLINK_TIMEOUT = 350;

gg.controller_user.set_cancel_pattern = function(cancel_pattern) {
	if (cancel_pattern == GG_DATA_VIEW_CANCEL_PATTERN_ARRAY[0]) {
		gg.controller_user.data.cancel_area = false;
	} else if (cancel_pattern == GG_DATA_VIEW_CANCEL_PATTERN_ARRAY[1]) {
		gg.controller_user.data.cancel_area = true;
	}

}

gg.controller_user.set_audio = function(audio) {
    if (audio == GG_DATA_AUDIO_ARRAY[1]) {
        gg.controller_user.data.audio_flag = true;
    } else {
        gg.controller_user.data.audio_flag = false;
    }

};
gg.controller_user.init = function() {
    var audio_url = 'audio/ckick.mp3';
    
    if (navigator.userAgent.indexOf('Android') >= 0) {
        audio_url = 'file:///android_asset/www/audio/ckick.mp3';
    }
    gg.controller_user.data.audio = new Audio (audio_url);
    
    var temp_audio_flag = gg.storage.get_audio();
    if (temp_audio_flag == GG_DATA_AUDIO_ARRAY[1]) {
        gg.controller_user.data.audio_flag = true;
    } else {
        gg.controller_user.audio_flag = false;
    }
};


// CANCEL
gg.controller_user.cancel = function() {
	// AUDIO
	
    if (gg.controller_user.data.audio_flag) {
        gg.controller_user.data.audio.play();
    }
    //clearTimeout(gg.controller_user.data.timer_blink);
	gg.view.clear_animation_loop();
	
    var army = JSON.parse(JSON.stringify(gg.controller_user.data.army_org));
    var map = gg.controller_user.data.map;
    var army_number = gg.controller_user.data.army_number;
    var zoom = gg.controller_user.data.zoom;
    var callback = gg.controller_user.callback;
    var area_map = gg.controller_user.data.area_map;
    gg.controller_user.data.area_list = null;
    gg.controller_user.data.result = null;

    //
    if (gg.controller_user.data.status == GG_CONTROLLER_USER_EVENT_SELECT_ATTACK_UNIT) {
        gg.animation.cancel_replay();
    }

    gg.controller_user.start({army: army, map: map, army_number: army_number, zoom: zoom, area_map: area_map},
                             callback);

};

// START & view unit
gg.controller_user.start = function(info, callback) {
	var active_unit_count = 0;
	for (var j = 0; j < info.army[info.army_number].unit.length; j++) {
		if (info.army[info.army_number].unit[j].fatigue <= 0 &&
            info.army[info.army_number].unit[j].dead_count_down == -1) {
			active_unit_count += 1;
		}
	}
	if (active_unit_count == 0) {
		callback();
		return;
	}

    document.getElementById('button_cancel').disabled = true;
    document.getElementById('button_dialog').disabled = false;
    document.getElementById('button_menu').disabled = false;
    
    gg.controller_user.data.map = JSON.parse(JSON.stringify(info.map));
    gg.controller_user.data.area_map = JSON.parse(JSON.stringify(info.area_map));
    gg.controller_user.data.zoom = info.zoom;
    gg.controller_user.data.army = JSON.parse(JSON.stringify(info.army));
    gg.controller_user.data.army_org = JSON.parse(JSON.stringify(info.army));
    
    gg.controller_user.data.army_number = info.army_number;
    gg.controller_user.callback = callback;
    gg.controller_user.data.status = GG_CONTROLLER_USER_EVENT_SELECT_MOVE_UNIT;
    
    // select unit view
    var units = [];
    for (var j = 0; j < info.army[info.army_number].unit.length; j++) {
        if (info.army[info.army_number].unit[j].fatigue == 0 &&
            info.army[info.army_number].unit[j].dead_count_down == -1) {
            units.push({x: info.army[info.army_number].unit[j].x,
                        y: info.army[info.army_number].unit[j].y,
                        army_color: info.army[info.army_number].color,
                        id: GG_VIEW_SELECT_MAP_CIRCLE});
        }
    }
    gg.controller_user.data.select_map = units;
    
    gg.animation.set_etc_animation2(gg.controller_user.data.map,
                           gg.controller_user.data.army, [],
                           gg.controller_user.data.zoom, null, 0,
                           gg.controller_user.data.area_map, units, 0, false, true);
    gg.event.add_event(gg.controller_user.data.map,
                       gg.controller_user.data.zoom, gg.controller_user.recv_event, gg.controller_user.cancel);
    gg.controller_user.data.blink = {map: gg.controller_user.data.map,
                                     army: gg.controller_user.data.army,
                                     zoom: gg.controller_user.data.zoom,
                                     area_map: gg.controller_user.data.area_map,  units:units};
    gg.controller_user.data.graph = -1;
};

// SELECTED MY UNIT & view move area
gg.controller_user.select_move_unit = function(x, y) {

    var army = gg.controller_user.data.army;
    var army_number = gg.controller_user.data.army_number;
    var map = gg.controller_user.data.map;
    var zoom = gg.controller_user.data.zoom;
    var area_map = gg.controller_user.data.area_map;
    
    var unit_number;
    for (var j = 0; j < army[army_number].unit.length; j++) {
        if (army[army_number].unit[j].x == x &&
            army[army_number].unit[j].y == y &&
            army[army_number].unit[j].fatigue == 0) {
            unit_number = j;
            break;
        }
    }
    if (unit_number == null) {
        gg.event.add_event(map, zoom, gg.controller_user.recv_event, gg.controller_user.cancel);
        gg.animation.set_etc_animation2(gg.controller_user.data.blink.map,
                           gg.controller_user.data.blink.army, [],
                           gg.controller_user.data.blink.zoom, null, 0,
                           gg.controller_user.data.blink.area_map,
                           gg.controller_user.data.blink.units,
                           0, false, true);
        return;
    }
	// AUDIO
    if (gg.controller_user.data.audio_flag) {
        gg.controller_user.data.audio.play();
    }
	
    document.getElementById('button_cancel').disabled = false;
    
    var area_list = gg.parts.cal_area(army, map, army_number, unit_number, area_map);
    var units = [];
    var uniq_flag;
    for (var i = 0; i < area_list.length; i++) {
        uniq_flag = true;
        for (var j = 0; j < units.length; j++) {
            if (area_list[i].x == units[j].x &&
                area_list[i].y == units[j].y) {
                uniq_flag = false;
                break;
            }
        }
        if (uniq_flag == true) {
            var id = 1;
            if (area_list[i].x == army[army_number].unit[unit_number].x &&
                area_list[i].y == army[army_number].unit[unit_number].y) {
                id = GG_VIEW_SELECT_MAP_CIRCLE;
            }
            units.push({x: area_list[i].x,
                        y: area_list[i].y,
                        army_color: army[army_number].color + GG_DATA_TEAM_MAX_NUMBER,
                        id: id});
        }
    }
    gg.controller_user.data.area_list = area_list;
    gg.animation.set_etc_animation2(map, army, [], zoom, null, 0, area_map, units, 0, false, true);
    gg.controller_user.data.status = GG_CONTROLLER_USER_EVENT_SELECT_MOVE_AREA;
    gg.event.add_event(map, zoom, gg.controller_user.recv_event, gg.controller_user.cancel);
    gg.controller_user.data.blink = {map: map, army: army, zoom: zoom, area_map:area_map,  units:units};
    
};

gg.controller_user.select_move_unit2 = function(x, y) {

    var army = gg.controller_user.data.army;
    var army_number = gg.controller_user.data.army_number;
    var map = gg.controller_user.data.map;
    var zoom = gg.controller_user.data.zoom;
    var area_map = gg.controller_user.data.area_map;
    
    var unit_number;
    for (var j = 0; j < army[army_number].unit.length; j++) {
        if (army[army_number].unit[j].x == x &&
            army[army_number].unit[j].y == y &&
            army[army_number].unit[j].fatigue == 0) {
            unit_number = j;
            break;
        }
    }
    if (unit_number == null) {
        gg.event.add_event(map, zoom, gg.controller_user.recv_event, gg.controller_user.cancel);
        gg.animation.set_etc_animation2(gg.controller_user.data.blink.map,
                           gg.controller_user.data.blink.army, [],
                           gg.controller_user.data.blink.zoom, null, 0,
                           gg.controller_user.data.blink.area_map,
                           gg.controller_user.data.blink.units,
                           0, false, true);
        return;
    }
	// AUDIO
    if (gg.controller_user.data.audio_flag) {
        gg.controller_user.data.audio.play();
    }
    gg.controller_user.data.unit_number = unit_number	
    
    gg.view.click_area({callback:gg.controller_user.select_move_unit3, x:x, y:y}); 
	
};

gg.controller_user.select_move_unit3 = function() {

    var army = gg.controller_user.data.army;
    var army_number = gg.controller_user.data.army_number;
    var map = gg.controller_user.data.map;
    var zoom = gg.controller_user.data.zoom;
    var area_map = gg.controller_user.data.area_map;
    var unit_number = gg.controller_user.data.unit_number;
    	
    document.getElementById('button_cancel').disabled = false;
    
    var area_list = gg.parts.cal_area(army, map, army_number, unit_number, area_map);
    var units = [];
    var uniq_flag;
    for (var i = 0; i < area_list.length; i++) {
        uniq_flag = true;
        for (var j = 0; j < units.length; j++) {
            if (area_list[i].x == units[j].x &&
                area_list[i].y == units[j].y) {
                uniq_flag = false;
                break;
            }
        }
        if (uniq_flag == true) {
            var id = 1;
            if (area_list[i].x == army[army_number].unit[unit_number].x &&
                area_list[i].y == army[army_number].unit[unit_number].y) {
                id = GG_VIEW_SELECT_MAP_CIRCLE;
            }
            units.push({x: area_list[i].x,
                        y: area_list[i].y,
                        army_color: army[army_number].color + GG_DATA_TEAM_MAX_NUMBER,
                        id: id});
        }
    }
    gg.controller_user.data.area_list = area_list;
    gg.animation.set_etc_animation2(map, army, [], zoom, null, 0, area_map, units, 0, false, true);
    gg.controller_user.data.status = GG_CONTROLLER_USER_EVENT_SELECT_MOVE_AREA;
    gg.event.add_event(map, zoom, gg.controller_user.recv_event, gg.controller_user.cancel);
    gg.controller_user.data.blink = {map: map, army: army, zoom: zoom, area_map:area_map,  units:units};
    
};

// EVENT RECV
gg.controller_user.recv_event = function(x, y) {
	
    if (gg.controller_user.data.status == GG_CONTROLLER_USER_EVENT_SELECT_MOVE_UNIT) {
        //gg.controller_user.select_move_unit(x, y);
        gg.controller_user.select_move_unit2(x, y);
    } else if (gg.controller_user.data.status == GG_CONTROLLER_USER_EVENT_SELECT_MOVE_AREA) {
		//gg.view.clear_animation_loop();
        //gg.controller_user.select_move_area(x, y);
        gg.controller_user.select_move_area2(x, y);
    } else if (gg.controller_user.data.status == GG_CONTROLLER_USER_EVENT_SELECT_ATTACK_UNIT) {
		//gg.view.clear_animation_loop();
        //gg.controller_user.select_attack_unit(x, y);
        gg.controller_user.select_attack_unit2(x, y);
    }
};

// SELECTED MOVE AREA & view attack enemy unit 
gg.controller_user.select_move_area = function(x, y) {
    //console.log('x:' + x + ' y:' + y);
    // move
    var map = gg.controller_user.data.map;
    var area_map = gg.controller_user.data.area_map;
    var zoom = gg.controller_user.data.zoom;
    var army = gg.controller_user.data.army;
    var army_number = gg.controller_user.data.army_number;

    gg.controller_user.data.moved.x = x;
    gg.controller_user.data.moved.y = y;
    var area_list = gg.controller_user.data.area_list;
    var list_number = null;
    for (var i = 0; i < area_list.length; i++) {
        if (area_list[i].x == x &&
            area_list[i].y == y) {
            list_number = i;
            break;
        }
    }
    if (list_number == null) {
        gg.event.add_event(map, zoom, gg.controller_user.recv_event, gg.controller_user.cancel);
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
        
        return;
    }
	
	// AUDIO
    if (gg.controller_user.data.audio_flag) {
        gg.controller_user.data.audio.play();
    }
	
	
    document.getElementById('button_cancel').disabled = true;
    document.getElementById('button_dialog').disabled = true;
    document.getElementById('button_menu').disabled = true;

    if (area_list[list_number].route.length != 0) {
        var animation_obj = {};
        
        animation_obj.route_count = area_list[list_number].route.length;
        animation_obj.list = [{x:area_list[list_number].x, y:area_list[list_number].y,
                         route: area_list[list_number].route, army_number: army_number,
                         unit_number: area_list[list_number].unit_number,
                         attack_route: area_list[list_number].attack_route,
                         start_x: army[army_number].unit[area_list[list_number].unit_number].x,
                         start_y: army[army_number].unit[area_list[list_number].unit_number].y,
                         kind: GG_DATA_ANIMATION_UNIT}];
        if (area_list[list_number].moved != null) {
            animation_obj.list.push({
                         route: area_list[list_number].moved.route, army_number: area_list[list_number].moved.army_number,
                         unit_number: area_list[list_number].moved.unit_number,
                         start_x: area_list[list_number].moved.start_x,
                         start_y: area_list[list_number].moved.start_y,
                         kind: GG_DATA_ANIMATION_UNIT
                });
            
        }
        //gg.animation.set_move_animation(map, army, animation_obj, zoom, gg.controller_user.moved, area_map, [], true);
        gg.animation.set_move_animation2(map, army, animation_obj, zoom, gg.controller_user.moved, area_map, [], true);
    } else {
        gg.controller_user.moved();
    }
};

gg.controller_user.select_move_area2 = function(x, y) {
    // move
    var map = gg.controller_user.data.map;
    var area_map = gg.controller_user.data.area_map;
    var zoom = gg.controller_user.data.zoom;
    var army = gg.controller_user.data.army;
    var army_number = gg.controller_user.data.army_number;

    gg.controller_user.data.moved.x = x;
    gg.controller_user.data.moved.y = y;
    var area_list = gg.controller_user.data.area_list;
    var list_number = null;
    for (var i = 0; i < area_list.length; i++) {
        if (area_list[i].x == x &&
            area_list[i].y == y) {
            list_number = i;
            break;
        }
    }
    if (list_number == null) {
		if (gg.controller_user.data.cancel_area == true) {
			gg.controller_user.cancel();
			return;
		} else {
			gg.event.add_event(map, zoom, gg.controller_user.recv_event, gg.controller_user.cancel);
			gg.animation.set_etc_animation2(gg.controller_user.data.blink.map,
							   gg.controller_user.data.blink.army, [],
							   gg.controller_user.data.blink.zoom, null, 0,
							   gg.controller_user.data.blink.area_map,
							   gg.controller_user.data.blink.units,
							   0, false, true);
			return;
		}
    }
    document.getElementById('button_cancel').disabled = true;
    document.getElementById('button_dialog').disabled = true;
    document.getElementById('button_menu').disabled = true;
	// AUDIO
    if (gg.controller_user.data.audio_flag) {
        gg.controller_user.data.audio.play();
    }
	gg.controller_user.data.list_number = list_number;
    gg.view.click_area({callback:gg.controller_user.select_move_area3, x:x, y:y}); 
	
};

gg.controller_user.select_move_area3 = function() {
    // move
    var map = gg.controller_user.data.map;
    var area_map = gg.controller_user.data.area_map;
    var zoom = gg.controller_user.data.zoom;
    var army = gg.controller_user.data.army;
    var army_number = gg.controller_user.data.army_number;
	var list_number = gg.controller_user.data.list_number;

    var area_list = gg.controller_user.data.area_list;

    document.getElementById('button_cancel').disabled = true;
    document.getElementById('button_dialog').disabled = true;
    document.getElementById('button_menu').disabled = true;

    if (area_list[list_number].route.length != 0) {
        var animation_obj = {};
        
        animation_obj.route_count = area_list[list_number].route.length;
        animation_obj.list = [{x:area_list[list_number].x, y:area_list[list_number].y,
                         route: area_list[list_number].route, army_number: army_number,
                         unit_number: area_list[list_number].unit_number,
                         attack_route: area_list[list_number].attack_route,
                         start_x: army[army_number].unit[area_list[list_number].unit_number].x,
                         start_y: army[army_number].unit[area_list[list_number].unit_number].y,
                         kind: GG_DATA_ANIMATION_UNIT}];
        if (area_list[list_number].moved != null) {
            animation_obj.list.push({
                         route: area_list[list_number].moved.route, army_number: area_list[list_number].moved.army_number,
                         unit_number: area_list[list_number].moved.unit_number,
                         start_x: area_list[list_number].moved.start_x,
                         start_y: area_list[list_number].moved.start_y,
                         kind: GG_DATA_ANIMATION_UNIT
                });
            
        }
        gg.animation.set_move_animation2(map, army, animation_obj, zoom, gg.controller_user.moved, area_map, [], true);
    } else {
        gg.controller_user.moved();
    }
};


// SELECTED MOVE AREA
gg.controller_user.moved = function() {
    var area_list = gg.controller_user.data.area_list;
    var x = gg.controller_user.data.moved.x;
    var y = gg.controller_user.data.moved.y;
    var map = gg.controller_user.data.map;
    var area_map = gg.controller_user.data.area_map;
    var zoom = gg.controller_user.data.zoom;
    var army = gg.controller_user.data.army;
    var army_number = gg.controller_user.data.army_number;
    var units = [];
    var unit_number;
    var attack_list = [];
    var list_number;
    for (var i = 0; i < area_list.length; i++) {
        if (area_list[i].x == x &&
            area_list[i].y == y) {
            list_number = i;
            attack_list.push(area_list[i]);
            if (area_list[i].attack_x != null) {
                units.push({x: area_list[i].attack_x,
                        y: area_list[i].attack_y,
                        army_color: army[army_number].color + GG_DATA_TEAM_MAX_NUMBER * 2});
            } else {
                units.push({x: area_list[i].x,
                        y: area_list[i].y,
                        army_color: army[army_number].color + GG_DATA_TEAM_MAX_NUMBER * 2,
                        id: GG_VIEW_SELECT_MAP_CIRCLE});
            }
            unit_number = area_list[i].unit_number;
        }
    }
    gg.controller_user.data.attack_list = attack_list;
    army[army_number].unit[unit_number].x = x;
    army[army_number].unit[unit_number].y = y;
    if (area_list[list_number].moved != null) {
        army[area_list[list_number].moved.army_number].unit[area_list[list_number].moved.unit_number].x = area_list[list_number].moved.x;
        army[area_list[list_number].moved.army_number].unit[area_list[list_number].moved.unit_number].y = area_list[list_number].moved.y;
    }
    document.getElementById('button_cancel').disabled = false;
    document.getElementById('button_dialog').disabled = false;
    document.getElementById('button_menu').disabled = false;

    //gg.animation.set_unit(map, army, zoom, null, area_map, units, 0, false);
    gg.animation.set_etc_animation2(map, army, [], zoom, null, 0, area_map, units, 0, false, true);
    gg.event.add_event(map, zoom, gg.controller_user.recv_event, gg.controller_user.cancel);
    gg.controller_user.data.blink = {map: map, army: army, zoom: zoom, area_map:area_map,  units:units};

    gg.controller_user.data.status = GG_CONTROLLER_USER_EVENT_SELECT_ATTACK_UNIT;
    //gg.controller_user.data.timer_blink = setTimeout(gg.controller_user.blink_select_map, GG_CONTROLLER_USER_BLINK_TIMEOUT);
    //0 = 0;
    
};

// SELECTED ATTACK ENEMY UNIT
gg.controller_user.select_attack_unit = function(x, y) {
    //console.log('x:' + x + ' y:' + y);
    var attack_list = gg.controller_user.data.attack_list;
    var map = gg.controller_user.data.map;
    var area_map = gg.controller_user.data.area_map;
    var zoom = gg.controller_user.data.zoom;
    var army = gg.controller_user.data.army;
    //var x = gg.controller_user.data.moved.x;
    //var y = gg.controller_user.data.moved.y;
    var list_number;
    var attack_flag = false;
    var attack_check = false;
    for (var i = 0; i < attack_list.length; i++) {
        if (attack_list[i].attack_x != null &&
            attack_list[i].attack_x == x &&
            attack_list[i].attack_y == y) {
            unit_number = attack_list[i].unit_number;
            list_number = i;
            attack_flag = true;
            attack_check = true;
            break;
        } else if (attack_list[i].attack_x == null &&
                   attack_list[i].x == x &&
                   attack_list[i].y == y) {
            unit_number = attack_list[i].unit_number;
            list_number = i;
            attack_check = true;
            break;
        }
    }
    ///
    if (attack_check == false) {
        gg.event.add_event(gg.controller_user.data.map, gg.controller_user.data.zoom, gg.controller_user.recv_event, gg.controller_user.cancel);
        
        //gg.animation.set_unit(gg.controller_user.data.blink.map,
        //                   gg.controller_user.data.blink.army,
        //                   gg.controller_user.data.blink.zoom, null,
        //                   gg.controller_user.data.blink.area_map,
        // /                  gg.controller_user.data.blink.units,
        //                   0, false);
        gg.animation.set_etc_animation2(gg.controller_user.data.blink.map,
                           gg.controller_user.data.blink.army, [],
                           gg.controller_user.data.blink.zoom, null, 0,
                           gg.controller_user.data.blink.area_map,
                           gg.controller_user.data.blink.units,
                           0, false, true);
        //gg.controller_user.data.timer_blink = setTimeout(gg.controller_user.blink_select_map, GG_CONTROLLER_USER_BLINK_TIMEOUT);
        
        return;
    }
	
	// AUDIO
    if (gg.controller_user.data.audio_flag) {
        gg.controller_user.data.audio.play();
    }
	
    document.getElementById('button_cancel').disabled = true;
    document.getElementById('button_dialog').disabled = true;
    document.getElementById('button_menu').disabled = true;
    
    gg.controller_user.data.result = attack_list[list_number];
    ///////////////
    if (attack_list[list_number].attacked_x != null) {
        army[attack_list[list_number].army_number].unit[attack_list[list_number].unit_number].x = attack_list[list_number].attacked_x;
        army[attack_list[list_number].army_number].unit[attack_list[list_number].unit_number].y = attack_list[list_number].attacked_y;
    }
    if (attack_list[list_number].moved != null) {
        army[attack_list[list_number].moved.army_number].unit[attack_list[list_number].moved.unit_number].x = attack_list[list_number].moved.x;
        army[attack_list[list_number].moved.army_number].unit[attack_list[list_number].moved.unit_number].y = attack_list[list_number].moved.y;
    }
    
    if (attack_list[list_number].attack != null) {
        for (var i = 0; i < attack_list[list_number].attack.list.length; i++) {
            if (attack_list[list_number].attack.list[i].x != null) {
                army[attack_list[list_number].attack.list[i].army_number].unit[attack_list[list_number].attack.list[i].unit_number].x = attack_list[list_number].attack.list[i].x;
                army[attack_list[list_number].attack.list[i].army_number].unit[attack_list[list_number].attack.list[i].unit_number].y = attack_list[list_number].attack.list[i].y;
                
            }
        }
    }
    
    // animation
    if (attack_flag == true) {
        gg.parts.set_animation(map, area_map, zoom, army, attack_list[list_number], gg.controller_user.end);
        //code
    } else {
        gg.parts.set_not_attack_animation(map, area_map, zoom, army, attack_list[list_number], gg.controller_user.end);
    }

};

gg.controller_user.select_attack_unit2 = function(x, y) {
    var attack_list = gg.controller_user.data.attack_list;
    var map = gg.controller_user.data.map;
    var area_map = gg.controller_user.data.area_map;
    var zoom = gg.controller_user.data.zoom;
    var army = gg.controller_user.data.army;
    var list_number;
    var attack_flag = false;
    var attack_check = false;
    for (var i = 0; i < attack_list.length; i++) {
        if (attack_list[i].attack_x != null &&
            attack_list[i].attack_x == x &&
            attack_list[i].attack_y == y) {
            unit_number = attack_list[i].unit_number;
            list_number = i;
            attack_flag = true;
            attack_check = true;
            break;
        } else if (attack_list[i].attack_x == null &&
                   attack_list[i].x == x &&
                   attack_list[i].y == y) {
            unit_number = attack_list[i].unit_number;
            list_number = i;
            attack_check = true;
            break;
        }
    }
    ///
    if (attack_check == false) {
		if (gg.controller_user.data.cancel_area == true) {
			gg.controller_user.cancel();
			return;
		} else {
			gg.event.add_event(gg.controller_user.data.map, gg.controller_user.data.zoom, gg.controller_user.recv_event, gg.controller_user.cancel);
			
			gg.animation.set_etc_animation2(gg.controller_user.data.blink.map,
							   gg.controller_user.data.blink.army, [],
							   gg.controller_user.data.blink.zoom, null, 0,
							   gg.controller_user.data.blink.area_map,
							   gg.controller_user.data.blink.units,
							   0, false, true);
			
			return;
		}
    }
    document.getElementById('button_cancel').disabled = true;
    document.getElementById('button_dialog').disabled = true;
    document.getElementById('button_menu').disabled = true;
	
	// AUDIO
    if (gg.controller_user.data.audio_flag) {
        gg.controller_user.data.audio.play();
    }
	
	gg.controller_user.data.list_number = list_number;
	gg.controller_user.data.attack_flag = attack_flag;
    gg.view.click_area({callback:gg.controller_user.select_attack_unit3, x:x, y:y}); 

};

gg.controller_user.select_attack_unit3 = function() {
    var attack_list = gg.controller_user.data.attack_list;
    var map = gg.controller_user.data.map;
    var area_map = gg.controller_user.data.area_map;
    var zoom = gg.controller_user.data.zoom;
    var army = gg.controller_user.data.army;
    var list_number = gg.controller_user.data.list_number;
    var attack_flag = gg.controller_user.data.attack_flag;
    //var attack_check = gg.controller_user.data.attack_flag;

    gg.controller_user.data.result = attack_list[list_number];
    ///////////////
    if (attack_list[list_number].attacked_x != null) {
        army[attack_list[list_number].army_number].unit[attack_list[list_number].unit_number].x = attack_list[list_number].attacked_x;
        army[attack_list[list_number].army_number].unit[attack_list[list_number].unit_number].y = attack_list[list_number].attacked_y;
    }
    if (attack_list[list_number].moved != null) {
        army[attack_list[list_number].moved.army_number].unit[attack_list[list_number].moved.unit_number].x = attack_list[list_number].moved.x;
        army[attack_list[list_number].moved.army_number].unit[attack_list[list_number].moved.unit_number].y = attack_list[list_number].moved.y;
    }
    
    if (attack_list[list_number].attack != null) {
        for (var i = 0; i < attack_list[list_number].attack.list.length; i++) {
            if (attack_list[list_number].attack.list[i].x != null) {
                army[attack_list[list_number].attack.list[i].army_number].unit[attack_list[list_number].attack.list[i].unit_number].x = attack_list[list_number].attack.list[i].x;
                army[attack_list[list_number].attack.list[i].army_number].unit[attack_list[list_number].attack.list[i].unit_number].y = attack_list[list_number].attack.list[i].y;
                
            }
        }
    }
    
    // animation
    if (attack_flag == true) {
        gg.parts.set_animation(map, area_map, zoom, army, attack_list[list_number], gg.controller_user.end);
        //code
    } else {
        gg.parts.set_not_attack_animation(map, area_map, zoom, army, attack_list[list_number], gg.controller_user.end);
    }

};


// END
gg.controller_user.end = function() {
    //
    var map = gg.controller_user.data.map;
    var area_map = gg.controller_user.data.area_map;
    var zoom = gg.controller_user.data.zoom;
    var callback = gg.controller_user.callback;

    var result = gg.controller_user.data.result;

    var recovery_turn = null;
    var attacked_army_number;
    var attacked_unit_number;
    if (result.attack != null && result.attack.attacked_army_number != null &&
        result.attack.attacked_unit_number != null) {
        attacked_army_number = result.attack.attacked_army_number
        attacked_unit_number = result.attack.attacked_unit_number
    }
	var temp_status_change_done;
	if (result.attack == null) {
		temp_status_change_done = false;
	} else {
		temp_status_change_done = result.attack.status_change_done;
		
	}

    var obj = {army_number: result.army_number, unit_number: result.unit_number,
               x: result.x, y: result.y,
               move_end_x: result.move_end_x, move_end_y: result.move_end_y,
			   fatigue: result.fatigue,
               exp: result.exp,
			   damage: result.damage,
			   attacked_army_number: attacked_army_number,
               attacked_unit_number: attacked_unit_number,
               status: GG_DATA_STATUS_ACTION,
               done_flag: true,
			   status_change_done: temp_status_change_done,
			   status_changed: result.status_change
			   };
    gg.controller.set_data(obj);

    if (result.moved != null) {
        obj = {army_number: result.moved.army_number,
                   unit_number: result.moved.unit_number,
                   x: result.moved.x, y: result.moved.y};
        gg.controller.set_data(obj);
    }
    if (result.rob_area_point != null) {
        obj = {rob_area_point: result.rob_area_point};
        gg.controller.set_data(obj);
    }
                         
    if (result.rescue != null) {
		for (var i = 0; i < result.rescue.length; i++) {
			obj = {army_number: result.rescue[i].army_number,
					   unit_number: result.rescue[i].unit_number,
					   recovery: result.rescue[i].recovery};
			gg.controller.set_data(obj);
		}
    }
    if (result.recovery != null) {
        obj = {army_number: result.recovery.army_number,
                   unit_number: result.recovery.unit_number,
                   recovery: result.recovery.recovery};
        gg.controller.set_data(obj);
    }
    if (result.status_changes != null) {
		for (var i = 0; i < result.status_changes.length; i++){
	        obj = {army_number: result.status_changes[i].army_number,
                   unit_number: result.status_changes[i].unit_number,
                   status_changed: result.status_changes[i].status_changed};
	        gg.controller.set_data(obj);
		}
    }

    if (result.attack != null) {
        for (var i = 0; i < result.attack.list.length; i++) {
            obj = {army_number:          result.attack.list[i].army_number,
                   unit_number:          result.attack.list[i].unit_number,
                   attacked_army_number: result.attack.list[i].attacked_army_number,
                   attacked_unit_number: result.attack.list[i].attacked_unit_number,
                   damage:               result.attack.list[i].damage,
                   status_change_done:   result.attack.list[i].status_change_done,
				   enemy_flag:           true,
                   x:                    result.attack.list[i].x,
                   y:                    result.attack.list[i].y,
                   exp:                  result.attack.list[i].exp,
				   class_down_flag:      result.attack.list[i].class_down_flag};
			if (result.attack.list[i].second_damage != undefined &&
				obj.damage != undefined) {
				obj.damage += result.attack.list[i].second_damage;
			}
            if (result.attack.list[i].fatigue != null ) {
                obj.fatigue = result.attack.list[i].fatigue;
            }
            gg.controller.set_data(obj);
        }
    }
    //
    gg.controller_user.data.area_list = null;
    gg.controller_user.data.result = null;
    //gg.controller_user.data = null;
    //gg.controller_user.data = {};
    // get amry
    var new_army = gg.controller.get_data();
    //gg.animation.set_unit(map, new_army,
    //                       zoom, callback,
    //                       area_map, [], 0, true);
    gg.animation.set_etc_animation2(map, new_army, [],
                           zoom, callback, 0,
                           area_map, [], 0, true, false);
};


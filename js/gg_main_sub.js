gg.init_new_campaign = function() {
    var temp_url = location.search.replace(/\?/,'').split(/&/);
    var parameter = {};
    for (var i = 0, len_max = temp_url.length; i < len_max; i++) {
        var temp_word = temp_url[i].split('=');
        parameter[temp_word[0]] = temp_word[1];
    }

    var unit = [];
    unit[0] = {};
    var friend_number = parameter.friend;
    unit[0].color = friend_number;
    //unit[0].name = GG_DATA_ARMY_NAME[unit[0].color];
    unit[0].unit = new Array();
    //unit[0].operation = GG_DATA_OPERATION_CPU;
    unit[0].position = {x:1, y:4};
    unit[0].operation = GG_DATA_OPERATION_USER;
    //unit[0].operation = GG_DATA_OPERATION_CPU;
	unit[0].upper_class_change_level = GG_DATA_UPPER_CLASS_CHANGE_LEVEL_NORMAL;

    var friend_member = [
                          {id:GG_DATA_UNIT_SHORTSWORD, exp:0}
                         ,{id:GG_DATA_UNIT_SHORTSWORD, exp:0}
                         ,{id:GG_DATA_UNIT_SHORTSWORD, exp:0}
                         ,{id:GG_DATA_UNIT_SHORTSWORD, exp:0}
                         ,{id:GG_DATA_UNIT_SHORTSWORD, exp:0}
                         ,{id:GG_DATA_UNIT_SHORTSWORD, exp:0}
                         ];
    var position = GG_DATA_UNIT_POSITION_FRIEND[friend_member.length];
    var position_count = 0;
    // sort
    for (var i = 0; i < GG_DATA_POSTION_FRIEND.length; i++) {
        for (var j = 0; j < friend_member.length; j++) {
            if (friend_member[j].id != GG_DATA_POSTION_FRIEND[i]) {
                continue;
            }
            //
            unit[0].unit[unit[0].unit.length] = {id: friend_member[j].id,
                                                     x: position[position_count].x,
                                                     y: position[position_count].y};
            position_count++;
        }
    }
    
    // R
    unit[1] = {};
    var enemy_number = parameter.enemy;
    unit[1].color = enemy_number;
    //unit[1].name = GG_DATA_ARMY_NAME[unit[1].color];
    unit[1].unit = new Array();
    unit[1].position = {x:9, y:4};
    unit[1].operation = GG_DATA_OPERATION_CPU;
    //unit[0].operation = GG_DATA_OPERATION_USER;
	//unit[1].upper_class_change_level = GG_DATA_UPPER_CLASS_CHANGE_LEVEL_NORMAL;
	unit[1].upper_class_change_level = GG_DATA_UPPER_CLASS_CHANGE_LEVEL_NORMAL;

    var enemy_member = GG_DATA_CAMPAIGN_ENEMY[0];
    for (var i = 0; i < enemy_member.length; i++) {
        unit[1].unit[i] = {x: 11, y: 5,
                            //max_hitpoint: 0,
                           id: enemy_member[i].type[Math.floor(Math.random() * enemy_member[i].type.length)]};
    }
    
    if (parameter.map == GG_DATA_MAP_ARRAY[0]) {
        var map = GG_DATA_MAP;
    } else if (parameter.map == GG_DATA_MAP_ARRAY[1]) {
        var map = gg.map.create_river_random_map(GG_DATA_MAP_ORGINAL_PLANE);;
    } else if (parameter.map == GG_DATA_MAP_ARRAY[2]) {
        var map = gg.map.create_mounten_random_map(GG_DATA_MAP_ORGINAL_PLANE);
    } else if (parameter.map == GG_DATA_MAP_ARRAY[3]) {
        var map = gg.map.create_plane_random_map(GG_DATA_MAP_SELECT_PLANE);
    } else if (parameter.map == GG_DATA_MAP_ARRAY[4]) {
        var map = gg.map.create_random_map(GG_DATA_MAP_ORGINAL_PLANE);
    }

    GG_DATA_LEVEL_UP_ADD_HITPOINT_POINT = Math.floor(parseInt(parameter.hitpoint) * 0.05);
    GG_DATA_LIFE_20 = Math.floor(parseInt(parameter.hitpoint) * 0.25);
    GG_DATA_LIFE_50 = Math.floor(parseInt(parameter.hitpoint) * 0.5); 
    
    var min_member = unit[1].unit.length;
    var game_end_hitpoint = parameter.hitpoint * GG_DATA_WIN_OPTION[min_member];
	var order = Math.floor(Math.random() * unit.length);
	// benchmark start comment in
	//unit[0].operation = GG_DATA_OPERATION_CPU;
	//order = 0;
	//unit[1].color = 0;

    gg.controller.start(unit, map, parameter.hande, gg.data.zoom, true, game_end_hitpoint,
                        parseInt(parameter.hitpoint), parameter.map, parameter.mode, 0, order,
                        GG_DATA_CAMPAIGN_INFO[0].end_turn * parameter.hitpoint / GG_DATA_HITPOINT_ARRAY[1],
						null, parameter.unit_uniq, null,
						0, parameter.lost, parameter.level_up);

};

gg.init_load_campaign = function(load) {
    //
    if (load == 'last') {
        var obj = gg.storage.load_last(GG_STORAGE_LOCAL_STORAGE_CAMPAIGN_RESULT_KEY);
    } else {
        // todo
        var obj = gg.storage.get_load(GG_STORAGE_LOCAL_STORAGE_CAMPAIGN_RESULT_KEY, load);
    }
    ////////////////////////////

    var unit = [];
    unit[0] = {};
    var friend_number = obj.friend;
    unit[0].color = friend_number;
    //unit[0].name = GG_DATA_ARMY_NAME[unit[0].color];
    unit[0].unit = new Array();
    //unit[0].operation = GG_DATA_OPERATION_CPU;
    unit[0].position = {x:1, y:4};
    unit[0].area_point = obj.area_point;
    unit[0].operation = GG_DATA_OPERATION_USER;
    //unit[0].operation = GG_DATA_OPERATION_CPU;
    //unit[0].unit_create_oder = obj.unit_create_oder;
	unit[0].upper_class_change_level = GG_DATA_UPPER_CLASS_CHANGE_LEVEL_NORMAL;

    var friend_member = obj.unit;
    var position = GG_DATA_UNIT_POSITION_FRIEND[friend_member.length];
    var position_count = 0;
    // sort
    for (var i = 0; i < GG_DATA_POSTION_FRIEND.length; i++) {
        for (var j = 0; j < friend_member.length; j++) {
            if (friend_member[j].type != GG_DATA_POSTION_FRIEND[i]) {
                continue;
            }
            //
            unit[0].unit[unit[0].unit.length] = {id: friend_member[j].type,
                                                 exp: friend_member[j].exp,
                                                     x: position[position_count].x,
                                                     y: position[position_count].y};
            position_count++;
        }
    }
    
    unit[1] = {};
    var enemy_number = obj.enemy;
    unit[1].color = enemy_number;
    unit[1].area_point = obj.enemy_area_point;
    //unit[1].name = GG_DATA_ARMY_NAME[unit[1].color];
    unit[1].unit = new Array();
    unit[1].position = {x:9, y:4};
    unit[1].operation = GG_DATA_OPERATION_CPU;
    //unit[0].operation = GG_DATA_OPERATION_USER;
	//unit[1].upper_class_change_level = GG_DATA_UPPER_CLASS_CHANGE_LEVEL_NORMAL;
	unit[1].upper_class_change_level = GG_DATA_UPPER_CLASS_CHANGE_LEVEL_NORMAL;

	var friend_member = [];
	// change
	for (var i = 0; i < obj.enemy_units.length; i++) {
		friend_member.push({type: obj.enemy_units[i].type, exp: obj.enemy_units[i].exp});
	}
	for (var i = 0; i < GG_DATA_CAMPAIGN_ADD_ENEMY_UNITS[obj.round + 1].length; i++) {
		if (friend_member.length >= GG_DATA_UNIT_MAX) {
			break;
		}
		if (friend_member.length >= GG_DATA_CAMPAIGN_ADD_ENEMY_UNITS[obj.round + 1].length) {
			break;
		}
		friend_member.push({type: GG_DATA_CAMPAIGN_ADD_ENEMY_UNITS[obj.round + 1][i].type, exp: 0});
	}
	//if (friend_member.length < GG_DATA_UNIT_MAX) {
	//	friend_member.push({type: GG_DATA_CAMPAIGN_ADD_ENEMY_UNITS[obj.round + 1][0].type, exp: 0});
	//}
	
	// delete
    //var temp_friend_member = GG_DATA_CAMPAIGN_ENEMY[obj.round + 1];
	//for (var i = 0; i < temp_friend_member.length; i++) {
	//	friend_member.push(temp_friend_member[i].type[Math.floor(Math.random() * temp_friend_member[i].type.length)]);
	//}
	
    var position = GG_DATA_UNIT_POSITION_ENEMY[friend_member.length];
    var position_count = 0;
    // sort
    for (var i = 0; i < GG_DATA_POSTION_FRIEND.length; i++) {
        for (var j = 0; j < friend_member.length; j++) {
            //if (friend_member[j] != GG_DATA_POSTION_FRIEND[i]) {
            if (friend_member[j].type != GG_DATA_POSTION_FRIEND[i]) {
                continue;
            }
            //
            //unit[1].unit[unit[1].unit.length] = {id: friend_member[j],
            //                                         x: position[position_count].x,
            //                                         y: position[position_count].y, exp:0};
            unit[1].unit[unit[1].unit.length] = {id: friend_member[j].type,
                                                     x: position[position_count].x,
                                                     y: position[position_count].y, exp: friend_member[j].exp};
            position_count++;
        }
    }
    
    if (obj.map == GG_DATA_MAP_ARRAY[0]) {
        var map = GG_DATA_MAP;
    } else if (obj.map == GG_DATA_MAP_ARRAY[1]) {
        var map = gg.map.create_river_random_map(GG_DATA_MAP_ORGINAL_PLANE);;
    } else if (obj.map == GG_DATA_MAP_ARRAY[2]) {
        var map = gg.map.create_mounten_random_map(GG_DATA_MAP_ORGINAL_PLANE);
    } else if (obj.map == GG_DATA_MAP_ARRAY[3]) {
        var map = gg.map.create_plane_random_map(GG_DATA_MAP_SELECT_PLANE);
    } else if (obj.map == GG_DATA_MAP_ARRAY[4]) {
        var map = gg.map.create_random_map(GG_DATA_MAP_ORGINAL_PLANE);
    }

    GG_DATA_LEVEL_UP_ADD_HITPOINT_POINT = Math.floor(parseInt(obj.hitpoint) * 0.05);
    GG_DATA_LIFE_20 = Math.floor(parseInt(obj.hitpoint) * 0.25);
    GG_DATA_LIFE_50 = Math.floor(parseInt(obj.hitpoint) * 0.5); 
    
    var min_member = unit[1].unit.length;
    var game_end_hitpoint = obj.hitpoint * GG_DATA_WIN_OPTION[min_member];
    
	//
	var order = Math.floor(Math.random() * unit.length);
	// benchmark start comment in
	//unit[0].operation = GG_DATA_OPERATION_CPU;
	//order = 0;
	//unit[1].color = 0;
 	
    gg.controller.start(unit, map, obj.hande, gg.data.zoom, true, game_end_hitpoint,
                        obj.hitpoint, obj.map, GG_MENU_MODE_CAMPAIGN, obj.round + 1, order,
                        GG_DATA_CAMPAIGN_INFO[obj.round + 1].end_turn * obj.hitpoint / GG_DATA_HITPOINT_ARRAY[1],
//                        obj.map, null, GG_DATA_CLASS_CHANGE_TEAM_UNIQ, null,
                        null, obj.class_change_uniq, null,
						0, obj.lost, obj.level_up);
    
};

gg.init_team = function() {
    var unit = new Array();
    
    var temp_url = location.search.replace(/\?/,'').split(/&/);
    var parameter = {};
    for (var i = 0, len_max = temp_url.length; i < len_max; i++) {
        var temp_word = temp_url[i].split('=');
        parameter[temp_word[0]] = temp_word[1];
    }
	var used_unit_list = '';
	if (parameter['used_unit_list'] != null) {
		used_unit_list = parameter['used_unit_list'];
	}
	var round = 1;
	if (parameter['round'] != null) {
		round = parseInt(parameter['round']);
	}
	
	var enemy_list= [];
	if (parameter['unit_number'] != null) {
		if (parameter['unit_number'] == 4) {
			enemy_list = GG_DATA_TEAM_ENEMY_LIST[0][round];
		} else if (parameter['unit_number'] == 8) {
			enemy_list = GG_DATA_TEAM_ENEMY_LIST[1][round];
		} else if (parameter['unit_number'] == 12) {
			enemy_list = GG_DATA_TEAM_ENEMY_LIST[2][round];
		}
	}
	
    var a_g = -1;
    var d_g = -1;
    var m_g = -1;
    var l_g = -1;
    var w_g = -1;
    var r_g = -1;
//    var e_g = -1;

    var e_a_g_a = [];
    var e_d_g_a = [];
    var e_m_g_a = [];
    var e_l_g_a = [];
    var e_w_g_a = [];
    var e_r_g_a = [];
//    var e_e_g_a = [];

    if (parameter.unit0 == 'true') {
		used_unit_list += ',0';
        a_g = GG_DATA_UNIT_AX;
        e_a_g_a = [GG_DATA_UNIT_SPEAR, GG_DATA_UNIT_SABER];
    }
    if (parameter.unit1 == 'true') {
		used_unit_list += ',1';
        a_g = GG_DATA_UNIT_SPEAR;
        e_a_g_a = [GG_DATA_UNIT_AX, GG_DATA_UNIT_SABER];
    }
    if (parameter.unit2 == 'true') {
		used_unit_list += ',2';
        a_g = GG_DATA_UNIT_SABER;
        e_a_g_a = [GG_DATA_UNIT_AX, GG_DATA_UNIT_SPEAR];
    }
    if (parameter.unit50 == 'true') {
        a_g = GG_DATA_UNIT_SWORD;
        e_a_g_a = [GG_DATA_UNIT_AX, GG_DATA_UNIT_SPEAR, GG_DATA_UNIT_SABER];
    }
	
	
    if (parameter.unit3 == 'true') {
		used_unit_list += ',3';
        d_g = GG_DATA_UNIT_SHILED;
        e_d_g_a = [GG_DATA_UNIT_TRIDENT, GG_DATA_UNIT_HAMMER];
    }
    if (parameter.unit4 == 'true') {
		used_unit_list += ',4';
        d_g = GG_DATA_UNIT_TRIDENT;
        e_d_g_a = [GG_DATA_UNIT_SHILED, GG_DATA_UNIT_HAMMER];
    }
    if (parameter.unit5 == 'true') {
		used_unit_list += ',5';
        d_g = GG_DATA_UNIT_HAMMER;
        e_d_g_a = [GG_DATA_UNIT_SHILED, GG_DATA_UNIT_TRIDENT];
    }
    if (parameter.unit51 == 'true') {
        d_g = GG_DATA_UNIT_MIDDLE;
        e_d_g_a = [GG_DATA_UNIT_SHILED, GG_DATA_UNIT_TRIDENT, GG_DATA_UNIT_HAMMER];
    }
		
    if (parameter.unit6 == 'true') {
		used_unit_list += ',6';
        m_g = GG_DATA_UNIT_RAPIER;
        e_m_g_a = [GG_DATA_UNIT_KATANA, GG_DATA_UNIT_CROW];
    }
    if (parameter.unit7 == 'true') {
		used_unit_list += ',7';
        m_g = GG_DATA_UNIT_KATANA;
        e_m_g_a = [GG_DATA_UNIT_RAPIER, GG_DATA_UNIT_CROW];
    }
    if (parameter.unit8 == 'true') {
		used_unit_list += ',8';
        m_g = GG_DATA_UNIT_CROW;
        e_m_g_a = [GG_DATA_UNIT_RAPIER, GG_DATA_UNIT_KATANA];
    }
    if (parameter.unit52 == 'true') {
        m_g = GG_DATA_UNIT_FALCHION;
        e_m_g_a = [GG_DATA_UNIT_RAPIER, GG_DATA_UNIT_KATANA, GG_DATA_UNIT_CROW];
    }

	///////////////////////////////
    if (parameter.unit9 == 'true') {
		used_unit_list += ',9';
        l_g = GG_DATA_UNIT_CHAIN;
        e_l_g_a = [GG_DATA_UNIT_LONGBOW, GG_DATA_UNIT_HARP];
    }
    if (parameter.unit10 == 'true') {
		used_unit_list += ',10';
        l_g = GG_DATA_UNIT_LONGBOW;
        e_l_g_a = [GG_DATA_UNIT_CHAIN, GG_DATA_UNIT_HARP];
    }
    if (parameter.unit11 == 'true') {
		used_unit_list += ',11';
        l_g = GG_DATA_UNIT_HARP;
        e_l_g_a = [GG_DATA_UNIT_CHAIN, GG_DATA_UNIT_LONGBOW];
    }
    if (parameter.unit53 == 'true') {
        l_g = GG_DATA_UNIT_SHORTBOW;
        e_l_g_a = [GG_DATA_UNIT_CHAIN, GG_DATA_UNIT_LONGBOW, GG_DATA_UNIT_HARP];
    }

	///
    if (parameter.unit12 == 'true') {
		used_unit_list += ',12';
        w_g = GG_DATA_UNIT_THUNDER;
        e_w_g_a = [GG_DATA_UNIT_WIND, GG_DATA_UNIT_LASER];
    }
    if (parameter.unit13 == 'true') {
		used_unit_list += ',13';
        w_g = GG_DATA_UNIT_WIND;
        e_w_g_a = [GG_DATA_UNIT_THUNDER, GG_DATA_UNIT_LASER];
    }
    if (parameter.unit14 == 'true') {
		used_unit_list += ',14';
        w_g = GG_DATA_UNIT_LASER;
        e_w_g_a = [GG_DATA_UNIT_THUNDER, GG_DATA_UNIT_WIND];
    }
    if (parameter.unit54 == 'true') {
        w_g = GG_DATA_UNIT_WITCH;
        e_w_g_a = [GG_DATA_UNIT_THUNDER, GG_DATA_UNIT_WIND, GG_DATA_UNIT_LASER];
    }

	////
    if (parameter.unit15 == 'true') {
		used_unit_list += ',15';
        r_g = GG_DATA_UNIT_MACE;
        e_r_g_a = [GG_DATA_UNIT_TAKT, GG_DATA_UNIT_MORNINGSTAR];
    }
    if (parameter.unit16 == 'true') {
		used_unit_list += ',16';
        r_g = GG_DATA_UNIT_TAKT;
        e_r_g_a = [GG_DATA_UNIT_MACE, GG_DATA_UNIT_MORNINGSTAR];
    }
    if (parameter.unit17 == 'true') {
		used_unit_list += ',17';
        r_g = GG_DATA_UNIT_MORNINGSTAR;
        e_r_g_a = [GG_DATA_UNIT_MACE, GG_DATA_UNIT_TAKT];
    }
    if (parameter.unit55 == 'true') {
        r_g = GG_DATA_UNIT_HOSPITAL;
        e_r_g_a = [GG_DATA_UNIT_MACE, GG_DATA_UNIT_TAKT,GG_DATA_UNIT_MORNINGSTAR];
    }

	
	var temp = used_unit_list.split(',');
	if (temp.length != 0) {
		if (temp[0] == '') {
			temp.splice(0, 1);
		}
		used_unit_list = temp.join(',');
	}

    //////////////////
    var e_a_g = e_a_g_a[Math.floor(Math.random() * e_a_g_a.length)];
    var e_d_g = e_d_g_a[Math.floor(Math.random() * e_d_g_a.length)];
    var e_m_g = e_m_g_a[Math.floor(Math.random() * e_m_g_a.length)];
    var e_l_g = e_l_g_a[Math.floor(Math.random() * e_l_g_a.length)];
    var e_w_g = e_w_g_a[Math.floor(Math.random() * e_w_g_a.length)];
    var e_r_g = e_r_g_a[Math.floor(Math.random() * e_r_g_a.length)];
    
    // 
    unit[0] = {};
    var friend_number = parameter.friend;
    unit[0].color = friend_number;
    //unit[0].name = GG_DATA_ARMY_NAME[unit[0].color];
    unit[0].unit = new Array();
    unit[0].position = {x:1, y:4};
    unit[0].operation = GG_DATA_OPERATION_USER;
	unit[0].class_change_flag = false;
    //unit[0].area_point = 120;
    //unit[0].operation = GG_DATA_OPERATION_CPU;
	unit[0].upper_class_change_level = GG_DATA_UPPER_CLASS_CHANGE_LEVEL_NONE;
    
    var friend_member = [
             {id:a_g,                   exp:0}
            ,{id:d_g,                  exp:0}
            ,{id:m_g,                  exp:0}
            ,{id:l_g,                  exp:0}
            ,{id:w_g,                  exp:0}
            ,{id:r_g,                  exp:0}
        ];
	for (var i = 0; i < parameter.unit_number - 6; i++) {
		friend_member.push({id:GG_DATA_UNIT_SHORTSWORD,   exp:0});
	}
    var position = GG_DATA_UNIT_POSITION_FRIEND[friend_member.length];
    var position_count = 0;
    // sort
    for (var i = 0; i < GG_DATA_POSTION_FRIEND.length; i++) {
        for (var j = 0; j < friend_member.length; j++) {
            if (friend_member[j].id != GG_DATA_POSTION_FRIEND[i]) {
                continue;
            }
            //
            unit[0].unit[unit[0].unit.length] = {id: friend_member[j].id,
                                                     x: position[position_count].x,
                                                     y: position[position_count].y, exp:0};
            position_count++;
        }
    }
    
    // R
    unit[1] = {};
    var enemy_number = parameter.enemy;
    unit[1].color = enemy_number;
    //unit[1].name = GG_DATA_ARMY_NAME[unit[1].color];
    unit[1].unit = new Array();
    unit[1].position = {x:9, y:4};
    unit[1].operation = GG_DATA_OPERATION_CPU;
    //unit[1].operation = GG_DATA_OPERATION_USER;
	unit[1].upper_class_change_level = GG_DATA_UPPER_CLASS_CHANGE_LEVEL_NORMAL;

    var e_f_g, e_s_g, e_t_g;
    var e_f_g_2, e_s_g_2, e_t_g_2;
    var friend_member = [];
	var e_a_g = e_a_g_a[Math.floor(Math.random() * e_a_g_a.length)];
	var e_d_g = e_d_g_a[Math.floor(Math.random() * e_d_g_a.length)];
	var e_m_g = e_m_g_a[Math.floor(Math.random() * e_m_g_a.length)];
	var e_l_g = e_l_g_a[Math.floor(Math.random() * e_l_g_a.length)];
	var e_w_g = e_w_g_a[Math.floor(Math.random() * e_w_g_a.length)];
	var e_r_g = e_r_g_a[Math.floor(Math.random() * e_r_g_a.length)];

    if (parameter.unit_number == 6) {
		if (round == 1) {
	        friend_member = [
	            {id:GG_DATA_UNIT_SWORD,                   exp:0}
	            ,{id:GG_DATA_UNIT_MIDDLE,   exp:0}
	            ,{id:GG_DATA_UNIT_FALCHION,   exp:0}
	            ,{id:GG_DATA_UNIT_SHORTBOW,   exp:0}
	            ,{id:GG_DATA_UNIT_WITCH,   exp:0}
	            ,{id:GG_DATA_UNIT_HOSPITAL,   exp:0}
	        ];
		} else if (round == 2) {
	        friend_member = [
	            {id:e_a_g,                   exp:0}
	            ,{id:GG_DATA_UNIT_MIDDLE,   exp:0}
	            ,{id:GG_DATA_UNIT_FALCHION,   exp:0}
	            ,{id:GG_DATA_UNIT_SHORTBOW,   exp:0}
	            ,{id:GG_DATA_UNIT_WITCH,   exp:0}
	            ,{id:GG_DATA_UNIT_HOSPITAL,   exp:0}
	        ];
		} else if (round == 3) {
	        friend_member = [
	            {id:e_a_g,                   exp:0}
	            ,{id:e_d_g,   exp:0}
	            ,{id:GG_DATA_UNIT_FALCHION,   exp:0}
	            ,{id:GG_DATA_UNIT_SHORTBOW,   exp:0}
	            ,{id:GG_DATA_UNIT_WITCH,   exp:0}
	            ,{id:GG_DATA_UNIT_HOSPITAL,   exp:0}
	        ];
		} else if (round == 4) {
	        friend_member = [
	            {id:e_a_g,    exp:0}
	            ,{id:e_d_g,   exp:0}
	            ,{id:e_m_g,   exp:0}
	            ,{id:GG_DATA_UNIT_SHORTBOW,   exp:0}
	            ,{id:GG_DATA_UNIT_WITCH,   exp:0}
	            ,{id:GG_DATA_UNIT_HOSPITAL,   exp:0}
	        ];
		} else if (round == 5) {
	        friend_member = [
	             {id:e_a_g,   exp:0}
	            ,{id:e_d_g,   exp:0}
	            ,{id:e_m_g,   exp:0}
	            ,{id:e_l_g,   exp:0}
	            ,{id:GG_DATA_UNIT_WITCH,   exp:0}
	            ,{id:GG_DATA_UNIT_HOSPITAL,   exp:0}
	        ];
		} else if (round == 6) {
	        friend_member = [
	             {id:e_a_g,   exp:0}
	            ,{id:e_d_g,   exp:0}
	            ,{id:e_m_g,   exp:0}
	            ,{id:e_l_g,   exp:0}
	            ,{id:e_w_g,   exp:0}
	            ,{id:GG_DATA_UNIT_HOSPITAL,   exp:0}
	        ];
		} else if (round == 7) {
	        friend_member = [
	             {id:e_a_g,   exp:0}
	            ,{id:e_d_g,   exp:0}
	            ,{id:e_m_g,   exp:0}
	            ,{id:e_l_g,   exp:0}
	            ,{id:e_w_g,   exp:0}
	            ,{id:e_r_g,   exp:0}
	        ];
		}

    } else if (parameter.unit_number == 8) {
		if (round == 1) {
	        friend_member = [
	            {id:GG_DATA_UNIT_SWORD,                   exp:0}
	            ,{id:GG_DATA_UNIT_MIDDLE,   exp:0}
	            ,{id:GG_DATA_UNIT_FALCHION,   exp:0}
	            ,{id:GG_DATA_UNIT_SHORTBOW,   exp:0}
	            ,{id:GG_DATA_UNIT_WITCH,   exp:0}
	            ,{id:GG_DATA_UNIT_HOSPITAL,   exp:0}
				,{id:GG_DATA_UNIT_SHORTSWORD, exp:0}
				,{id:GG_DATA_UNIT_SHORTSWORD, exp:0}
	        ];
		} else if (round == 2) {
	        friend_member = [
	            {id:e_a_g,                   exp:0}
	            ,{id:GG_DATA_UNIT_MIDDLE,   exp:0}
	            ,{id:GG_DATA_UNIT_FALCHION,   exp:0}
	            ,{id:GG_DATA_UNIT_SHORTBOW,   exp:0}
	            ,{id:GG_DATA_UNIT_WITCH,   exp:0}
	            ,{id:GG_DATA_UNIT_HOSPITAL,   exp:0}
				,{id:GG_DATA_UNIT_SHORTSWORD, exp:0}
				,{id:GG_DATA_UNIT_SHORTSWORD, exp:0}
	        ];
		} else if (round == 3) {
	        friend_member = [
	            {id:e_a_g,                   exp:0}
	            ,{id:e_d_g,   exp:0}
	            ,{id:GG_DATA_UNIT_FALCHION,   exp:0}
	            ,{id:GG_DATA_UNIT_SHORTBOW,   exp:0}
	            ,{id:GG_DATA_UNIT_WITCH,   exp:0}
	            ,{id:GG_DATA_UNIT_HOSPITAL,   exp:0}
				,{id:GG_DATA_UNIT_SHORTSWORD, exp:0}
				,{id:GG_DATA_UNIT_SHORTSWORD, exp:0}
	        ];
		} else if (round == 4) {
	        friend_member = [
	            {id:e_a_g,    exp:0}
	            ,{id:e_d_g,   exp:0}
	            ,{id:e_m_g,   exp:0}
	            ,{id:GG_DATA_UNIT_SHORTBOW,   exp:0}
	            ,{id:GG_DATA_UNIT_WITCH,   exp:0}
	            ,{id:GG_DATA_UNIT_HOSPITAL,   exp:0}
				,{id:GG_DATA_UNIT_SHORTSWORD, exp:0}
				,{id:GG_DATA_UNIT_SHORTSWORD, exp:0}
	        ];
		} else if (round == 5) {
	        friend_member = [
	             {id:e_a_g,   exp:0}
	            ,{id:e_d_g,   exp:0}
	            ,{id:e_m_g,   exp:0}
	            ,{id:e_l_g,   exp:0}
	            ,{id:GG_DATA_UNIT_WITCH,   exp:0}
	            ,{id:GG_DATA_UNIT_HOSPITAL,   exp:0}
				,{id:GG_DATA_UNIT_SHORTSWORD, exp:0}
				,{id:GG_DATA_UNIT_SHORTSWORD, exp:0}
	        ];
		} else if (round == 6) {
	        friend_member = [
	             {id:e_a_g,   exp:0}
	            ,{id:e_d_g,   exp:0}
	            ,{id:e_m_g,   exp:0}
	            ,{id:e_l_g,   exp:0}
	            ,{id:e_w_g,   exp:0}
	            ,{id:GG_DATA_UNIT_HOSPITAL,   exp:0}
				,{id:GG_DATA_UNIT_SHORTSWORD, exp:0}
				,{id:GG_DATA_UNIT_SHORTSWORD, exp:0}
	        ];
		} else if (round == 7) {
	        friend_member = [
	             {id:e_a_g,   exp:0}
	            ,{id:e_d_g,   exp:0}
	            ,{id:e_m_g,   exp:0}
	            ,{id:e_l_g,   exp:0}
	            ,{id:e_w_g,   exp:0}
	            ,{id:e_r_g,   exp:0}
				,{id:GG_DATA_UNIT_SHORTSWORD, exp:0}
				,{id:GG_DATA_UNIT_SHORTSWORD, exp:0}
	        ];

		}	

    } else if (parameter.unit_number == 10) {
		if (round == 1) {
	        friend_member = [
	            {id:GG_DATA_UNIT_SWORD,                   exp:0}
	            ,{id:GG_DATA_UNIT_MIDDLE,   exp:0}
	            ,{id:GG_DATA_UNIT_FALCHION,   exp:0}
	            ,{id:GG_DATA_UNIT_SHORTBOW,   exp:0}
	            ,{id:GG_DATA_UNIT_WITCH,   exp:0}
	            ,{id:GG_DATA_UNIT_HOSPITAL,   exp:0}
				,{id:GG_DATA_UNIT_SHORTSWORD, exp:0}
				,{id:GG_DATA_UNIT_SHORTSWORD, exp:0}
				,{id:GG_DATA_UNIT_SHORTSWORD, exp:0}
				,{id:GG_DATA_UNIT_SHORTSWORD, exp:0}
	        ];
		} else if (round == 2) {
	        friend_member = [
	            {id:e_a_g,                   exp:0}
	            ,{id:GG_DATA_UNIT_MIDDLE,   exp:0}
	            ,{id:GG_DATA_UNIT_FALCHION,   exp:0}
	            ,{id:GG_DATA_UNIT_SHORTBOW,   exp:0}
	            ,{id:GG_DATA_UNIT_WITCH,   exp:0}
	            ,{id:GG_DATA_UNIT_HOSPITAL,   exp:0}
				,{id:GG_DATA_UNIT_SHORTSWORD, exp:0}
				,{id:GG_DATA_UNIT_SHORTSWORD, exp:0}
				,{id:GG_DATA_UNIT_SHORTSWORD, exp:0}
				,{id:GG_DATA_UNIT_SHORTSWORD, exp:0}
	        ];
		} else if (round == 3) {
	        friend_member = [
	            {id:e_a_g,                   exp:0}
	            ,{id:e_d_g,   exp:0}
	            ,{id:GG_DATA_UNIT_FALCHION,   exp:0}
	            ,{id:GG_DATA_UNIT_SHORTBOW,   exp:0}
	            ,{id:GG_DATA_UNIT_WITCH,   exp:0}
	            ,{id:GG_DATA_UNIT_HOSPITAL,   exp:0}
				,{id:GG_DATA_UNIT_SHORTSWORD, exp:0}
				,{id:GG_DATA_UNIT_SHORTSWORD, exp:0}
				,{id:GG_DATA_UNIT_SHORTSWORD, exp:0}
				,{id:GG_DATA_UNIT_SHORTSWORD, exp:0}
	        ];
		} else if (round == 4) {
	        friend_member = [
	            {id:e_a_g,    exp:0}
	            ,{id:e_d_g,   exp:0}
	            ,{id:e_m_g,   exp:0}
	            ,{id:GG_DATA_UNIT_SHORTBOW,   exp:0}
	            ,{id:GG_DATA_UNIT_WITCH,   exp:0}
	            ,{id:GG_DATA_UNIT_HOSPITAL,   exp:0}
				,{id:GG_DATA_UNIT_SHORTSWORD, exp:0}
				,{id:GG_DATA_UNIT_SHORTSWORD, exp:0}
				,{id:GG_DATA_UNIT_SHORTSWORD, exp:0}
				,{id:GG_DATA_UNIT_SHORTSWORD, exp:0}
	        ];
		} else if (round == 5) {
	        friend_member = [
	             {id:e_a_g,   exp:0}
	            ,{id:e_d_g,   exp:0}
	            ,{id:e_m_g,   exp:0}
	            ,{id:e_l_g,   exp:0}
	            ,{id:GG_DATA_UNIT_WITCH,   exp:0}
	            ,{id:GG_DATA_UNIT_HOSPITAL,   exp:0}
				,{id:GG_DATA_UNIT_SHORTSWORD, exp:0}
				,{id:GG_DATA_UNIT_SHORTSWORD, exp:0}
				,{id:GG_DATA_UNIT_SHORTSWORD, exp:0}
				,{id:GG_DATA_UNIT_SHORTSWORD, exp:0}
	        ];
		} else if (round == 6) {
	        friend_member = [
	             {id:e_a_g,   exp:0}
	            ,{id:e_d_g,   exp:0}
	            ,{id:e_m_g,   exp:0}
	            ,{id:e_l_g,   exp:0}
	            ,{id:e_w_g,   exp:0}
	            ,{id:GG_DATA_UNIT_HOSPITAL,   exp:0}
				,{id:GG_DATA_UNIT_SHORTSWORD, exp:0}
				,{id:GG_DATA_UNIT_SHORTSWORD, exp:0}
				,{id:GG_DATA_UNIT_SHORTSWORD, exp:0}
				,{id:GG_DATA_UNIT_SHORTSWORD, exp:0}
	        ];
		} else if (round == 7) {
	        friend_member = [
	             {id:e_a_g,   exp:0}
	            ,{id:e_d_g,   exp:0}
	            ,{id:e_m_g,   exp:0}
	            ,{id:e_l_g,   exp:0}
	            ,{id:e_w_g,   exp:0}
	            ,{id:e_r_g,   exp:0}
				,{id:GG_DATA_UNIT_SHORTSWORD, exp:0}
				,{id:GG_DATA_UNIT_SHORTSWORD, exp:0}
				,{id:GG_DATA_UNIT_SHORTSWORD, exp:0}
				,{id:GG_DATA_UNIT_SHORTSWORD, exp:0}
	        ];

		}	
    } else if (parameter.unit_number == 12) {
		if (round == 1) {
	        friend_member = [
	            {id:GG_DATA_UNIT_SWORD,                   exp:0}
	            ,{id:GG_DATA_UNIT_MIDDLE,   exp:0}
	            ,{id:GG_DATA_UNIT_FALCHION,   exp:0}
	            ,{id:GG_DATA_UNIT_SHORTBOW,   exp:0}
	            ,{id:GG_DATA_UNIT_WITCH,   exp:0}
	            ,{id:GG_DATA_UNIT_HOSPITAL,   exp:0}
				,{id:GG_DATA_UNIT_SHORTSWORD, exp:0}
				,{id:GG_DATA_UNIT_SHORTSWORD, exp:0}
				,{id:GG_DATA_UNIT_SHORTSWORD, exp:0}
				,{id:GG_DATA_UNIT_SHORTSWORD, exp:0}
				,{id:GG_DATA_UNIT_SHORTSWORD, exp:0}
				,{id:GG_DATA_UNIT_SHORTSWORD, exp:0}
	        ];
		} else if (round == 2) {
	        friend_member = [
	            {id:e_a_g,                   exp:0}
	            ,{id:GG_DATA_UNIT_MIDDLE,   exp:0}
	            ,{id:GG_DATA_UNIT_FALCHION,   exp:0}
	            ,{id:GG_DATA_UNIT_SHORTBOW,   exp:0}
	            ,{id:GG_DATA_UNIT_WITCH,   exp:0}
	            ,{id:GG_DATA_UNIT_HOSPITAL,   exp:0}
				,{id:GG_DATA_UNIT_SHORTSWORD, exp:0}
				,{id:GG_DATA_UNIT_SHORTSWORD, exp:0}
				,{id:GG_DATA_UNIT_SHORTSWORD, exp:0}
				,{id:GG_DATA_UNIT_SHORTSWORD, exp:0}
				,{id:GG_DATA_UNIT_SHORTSWORD, exp:0}
				,{id:GG_DATA_UNIT_SHORTSWORD, exp:0}
	        ];
		} else if (round == 3) {
	        friend_member = [
	            {id:e_a_g,                   exp:0}
	            ,{id:e_d_g,   exp:0}
	            ,{id:GG_DATA_UNIT_FALCHION,   exp:0}
	            ,{id:GG_DATA_UNIT_SHORTBOW,   exp:0}
	            ,{id:GG_DATA_UNIT_WITCH,   exp:0}
	            ,{id:GG_DATA_UNIT_HOSPITAL,   exp:0}
				,{id:GG_DATA_UNIT_SHORTSWORD, exp:0}
				,{id:GG_DATA_UNIT_SHORTSWORD, exp:0}
				,{id:GG_DATA_UNIT_SHORTSWORD, exp:0}
				,{id:GG_DATA_UNIT_SHORTSWORD, exp:0}
				,{id:GG_DATA_UNIT_SHORTSWORD, exp:0}
				,{id:GG_DATA_UNIT_SHORTSWORD, exp:0}
	        ];
		} else if (round == 4) {
	        friend_member = [
	            {id:e_a_g,    exp:0}
	            ,{id:e_d_g,   exp:0}
	            ,{id:e_m_g,   exp:0}
	            ,{id:GG_DATA_UNIT_SHORTBOW,   exp:0}
	            ,{id:GG_DATA_UNIT_WITCH,   exp:0}
	            ,{id:GG_DATA_UNIT_HOSPITAL,   exp:0}
				,{id:GG_DATA_UNIT_SHORTSWORD, exp:0}
				,{id:GG_DATA_UNIT_SHORTSWORD, exp:0}
				,{id:GG_DATA_UNIT_SHORTSWORD, exp:0}
				,{id:GG_DATA_UNIT_SHORTSWORD, exp:0}
				,{id:GG_DATA_UNIT_SHORTSWORD, exp:0}
				,{id:GG_DATA_UNIT_SHORTSWORD, exp:0}
	        ];
		} else if (round == 5) {
	        friend_member = [
	             {id:e_a_g,   exp:0}
	            ,{id:e_d_g,   exp:0}
	            ,{id:e_m_g,   exp:0}
	            ,{id:e_l_g,   exp:0}
	            ,{id:GG_DATA_UNIT_WITCH,   exp:0}
	            ,{id:GG_DATA_UNIT_HOSPITAL,   exp:0}
				,{id:GG_DATA_UNIT_SHORTSWORD, exp:0}
				,{id:GG_DATA_UNIT_SHORTSWORD, exp:0}
				,{id:GG_DATA_UNIT_SHORTSWORD, exp:0}
				,{id:GG_DATA_UNIT_SHORTSWORD, exp:0}
				,{id:GG_DATA_UNIT_SHORTSWORD, exp:0}
				,{id:GG_DATA_UNIT_SHORTSWORD, exp:0}
	        ];
		} else if (round == 6) {
	        friend_member = [
	             {id:e_a_g,   exp:0}
	            ,{id:e_d_g,   exp:0}
	            ,{id:e_m_g,   exp:0}
	            ,{id:e_l_g,   exp:0}
	            ,{id:e_w_g,   exp:0}
	            ,{id:GG_DATA_UNIT_HOSPITAL,   exp:0}
				,{id:GG_DATA_UNIT_SHORTSWORD, exp:0}
				,{id:GG_DATA_UNIT_SHORTSWORD, exp:0}
				,{id:GG_DATA_UNIT_SHORTSWORD, exp:0}
				,{id:GG_DATA_UNIT_SHORTSWORD, exp:0}
				,{id:GG_DATA_UNIT_SHORTSWORD, exp:0}
				,{id:GG_DATA_UNIT_SHORTSWORD, exp:0}
	        ];
		} else if (round == 7) {
	        friend_member = [
	             {id:e_a_g,   exp:0}
	            ,{id:e_d_g,   exp:0}
	            ,{id:e_m_g,   exp:0}
	            ,{id:e_l_g,   exp:0}
	            ,{id:e_w_g,   exp:0}
	            ,{id:e_r_g,   exp:0}
				,{id:GG_DATA_UNIT_SHORTSWORD, exp:0}
				,{id:GG_DATA_UNIT_SHORTSWORD, exp:0}
				,{id:GG_DATA_UNIT_SHORTSWORD, exp:0}
				,{id:GG_DATA_UNIT_SHORTSWORD, exp:0}
				,{id:GG_DATA_UNIT_SHORTSWORD, exp:0}
				,{id:GG_DATA_UNIT_SHORTSWORD, exp:0}
	        ];

		}	
    }
    //var position = GG_DATA_CAMPAIGN_ENEMY[friend_member.length - 1];
	var position = GG_DATA_UNIT_POSITION_ENEMY[friend_member.length];
    var position_count = 0;

	// debug
	//friend_member =[{id:GG_DATA_UNIT_SHORTSWORD,   exp:0}];

    // sort
    for (var i = 0; i < GG_DATA_POSTION_FRIEND.length; i++) {
        for (var j = 0; j < friend_member.length; j++) {
            if (friend_member[j].id != GG_DATA_POSTION_FRIEND[i]) {
                continue;
            }
            //
            unit[1].unit.push({id: friend_member[j].id,
                                                     x: position[position_count].x,
                                                     y: position[position_count].y, exp:0});
            position_count++;
        }
    }
    
    if (parameter.map == GG_DATA_MAP_ARRAY[0]) {
        var map = GG_DATA_MAP;
    } else if (parameter.map == GG_DATA_MAP_ARRAY[1]) {
        var map = gg.map.create_river_random_map(GG_DATA_MAP_ORGINAL_PLANE);;
    } else if (parameter.map == GG_DATA_MAP_ARRAY[2]) {
        var map = gg.map.create_mounten_random_map(GG_DATA_MAP_ORGINAL_PLANE);
    } else if (parameter.map == GG_DATA_MAP_ARRAY[3]) {
        var map = gg.map.create_plane_random_map(GG_DATA_MAP_SELECT_PLANE);
    } else if (parameter.map == GG_DATA_MAP_ARRAY[4]) {
        var map = gg.map.create_random_map(GG_DATA_MAP_ORGINAL_PLANE);
    }

    GG_DATA_LEVEL_UP_ADD_HITPOINT_POINT = Math.floor(parseInt(parameter.hitpoint) * 0.05);
    GG_DATA_LIFE_20 = Math.floor(parseInt(parameter.hitpoint) * 0.25);
    GG_DATA_LIFE_50 = Math.floor(parseInt(parameter.hitpoint) * 0.5); 
    
    var game_end_hitpoint = parameter.hitpoint * GG_DATA_WIN_OPTION[parseInt(parameter.unit_number)];
	var area_map = null;
	var order = Math.floor(Math.random() * unit.length);
	// benchmark start comment in
	//unit[0].operation = GG_DATA_OPERATION_CPU;
	//order = 0;

    gg.controller.start(unit, map, parseFloat(parameter.hande), gg.data.zoom, true, game_end_hitpoint,
                        parseInt(parameter.hitpoint), parameter.map, parameter.mode, round, order, 0
                        , area_map, parameter.unit_uniq, used_unit_list,
						GG_DATA_GAME_END_UNIT_DIFF, parameter.lost, parameter.level_up);
    
};


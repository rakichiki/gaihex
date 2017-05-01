gg.menu.unselect_team_used_unit = function(used_list) {
	var used_unit_array = used_list.split(',');
	var element;
	for (var i = 0; i < used_unit_array.length; i++) {
		if (used_unit_array[i].length == 0) {
			continue;
		}
		element = document.getElementById(GG_DATA_CHAR_BIG_STR[used_unit_array[i]]);
		element.style.opacity = 0;
		element.onclick = '';
	}	
};


// multi lang
gg.menu.beofre_index_game = function() {
	var lang = gg.menu.get_lang();
    
    var element = document.getElementById('normal_game');
    element.innerHTML = GG_DATA_DICTTIONARY.normal_game[lang];
    var element = document.getElementById('campaign_game');
    element.innerHTML = GG_DATA_DICTTIONARY.campaign_game[lang];
    var element = document.getElementById('many_enemy');
    element.innerHTML = GG_DATA_DICTTIONARY.many_enemy[lang];
    var element = document.getElementById('stroge_enemy');
    element.innerHTML = GG_DATA_DICTTIONARY.stroge_enemy[lang];
    var element = document.getElementById('team');
    element.innerHTML = GG_DATA_DICTTIONARY.team_game[lang];
    var element = document.getElementById('benchmark');
    element.innerHTML = GG_DATA_DICTTIONARY.benchmark_game[lang];
    
};

gg.menu.beofre_menu_option = function() {
	var lang = gg.menu.get_lang();
    
    var element = document.getElementById('menu_option');
    element.innerHTML = GG_DATA_DICTTIONARY.setting_option[lang];
    
    var element = document.getElementById('menu_game_time');
    element.innerHTML = GG_DATA_DICTTIONARY.game_time[lang];
    
    var element = document.getElementById('menu_hande');
    element.innerHTML = GG_DATA_DICTTIONARY.hande[lang];
    
    var element = document.getElementById('menu_map');
    element.innerHTML = GG_DATA_DICTTIONARY.map[lang];
    
    var element = document.getElementById('menu_upper_unit');
    element.innerHTML = GG_DATA_DICTTIONARY.upper_unit[lang];
    
    var element = document.getElementById('menu_lost');
    element.innerHTML = GG_DATA_DICTTIONARY.lost_turn[lang];

    var element = document.getElementById('menu_unit_number');
    element.innerHTML = GG_DATA_DICTTIONARY.unit_number[lang];
    
    var element = document.getElementById('menu_level_up');
    element.innerHTML = GG_DATA_DICTTIONARY.level_up[lang];
};

gg.menu.beofre_menu_team = function() {
	var lang = gg.menu.get_lang();
    
    var element = document.getElementById('menu_select_team');
    element.innerHTML = GG_DATA_DICTTIONARY.select_team[lang];
    
    var element = document.getElementById('menu_friend');
    element.innerHTML = GG_DATA_DICTTIONARY.friend_team[lang];
    
    var element = document.getElementById('menu_enemy');
    element.innerHTML = GG_DATA_DICTTIONARY.enemy_team[lang];
        
};

gg.menu.beofre_menu_unit = function() {
	var lang = gg.menu.get_lang();
    
    var element = document.getElementById('menu_select_unit');
    element.innerHTML = GG_DATA_DICTTIONARY.select_unit[lang];
    
};

gg.menu.beofre_menu_setting = function() {
	var lang = gg.menu.get_lang();
	var speed = gg.storage.get_speed();
	var audio = gg.storage.get_audio();
	var dialog = gg.storage.get_dialog();
	var hitpoint = gg.storage.get_hitpoint();
	var level = gg.storage.get_level();
	var cancel_pattern = gg.storage.get_cancel_pattern();
    
    var element = document.getElementById('menu_setting');
    element.innerHTML = GG_DATA_DICTTIONARY.setting[lang];
    
    var element = document.getElementById('menu_speed');
    element.innerHTML = GG_DATA_DICTTIONARY.spped[lang];
    var element = document.getElementById('speed');
    element.innerHTML = speed;
	    
    var element = document.getElementById('menu_audio');
    element.innerHTML = GG_DATA_DICTTIONARY.se_audio[lang];
    var element = document.getElementById('audio');
    element.innerHTML = audio;

    var element = document.getElementById('menu_dialog');
    element.innerHTML = GG_DATA_DICTTIONARY.set_dialog[lang];
    var element = document.getElementById('dialog');
    element.innerHTML = dialog;

    var element = document.getElementById('menu_view_hitpoint');
    element.innerHTML = GG_DATA_DICTTIONARY.menu_hitpoint[lang];
    var element = document.getElementById('view_hitpoint');
    element.innerHTML = hitpoint;

    var element = document.getElementById('menu_view_level');
    element.innerHTML = GG_DATA_DICTTIONARY.game_end_unit_list_level[lang];
    var element = document.getElementById('view_level');
    element.innerHTML = level;

    var element = document.getElementById('menu_cancel_pattern');
    element.innerHTML = GG_DATA_DICTTIONARY.menu_cancel_pattern[lang];
    var element = document.getElementById('cancel_pattern');
    element.innerHTML = cancel_pattern;
};

gg.menu.beofre_menu_result = function() {
	var lang = gg.menu.get_lang();
    
    var element = document.getElementById('menu_result');
    element.innerHTML = GG_DATA_DICTTIONARY.menu_result[lang];
    
    var element = document.getElementById('menu_mode');
    element.innerHTML = GG_DATA_DICTTIONARY.game_mode[lang];
    
    var element = document.getElementById('menu_game_time');
    element.innerHTML = GG_DATA_DICTTIONARY.game_time[lang];
    
    var element = document.getElementById('menu_map');
    element.innerHTML = GG_DATA_DICTTIONARY.map[lang];
    
    var element = document.getElementById('menu_unit_number');
    element.innerHTML = GG_DATA_DICTTIONARY.unit_number[lang];
    
    var element = document.getElementById('menu_team');
    element.innerHTML = GG_DATA_DICTTIONARY.friend_team[lang];
    
    var element = document.getElementById('menu_enemy_team');
    element.innerHTML = GG_DATA_DICTTIONARY.enemy_team[lang];
};

gg.menu.beofre_menu_start = function() {
	var lang = gg.menu.get_lang();
    
    var element = document.getElementById('menu_campiagn_start');
    element.innerHTML = GG_DATA_DICTTIONARY.new_or_load[lang];
    
    var element = document.getElementById('menu_new');
    element.innerHTML = GG_DATA_DICTTIONARY.menu_new[lang];
    
    var element = document.getElementById('menu_load');
    element.innerHTML = GG_DATA_DICTTIONARY.menu_load[lang];
        
};

gg.menu.beofre_menu_load = function() {
	var lang = gg.menu.get_lang();
    
    var element = document.getElementById('menu_select_load_game');
    element.innerHTML = GG_DATA_DICTTIONARY.select_load_game[lang];
    
    var element = document.getElementById('menu_friend');
    element.innerHTML = GG_DATA_DICTTIONARY.friend_team[lang];
    
    var element = document.getElementById('menu_enemy');
    element.innerHTML = GG_DATA_DICTTIONARY.enemy_team[lang];
    
    var element = document.getElementById('menu_game_time');
    element.innerHTML = GG_DATA_DICTTIONARY.game_time[lang];
    
    var element = document.getElementById('menu_map');
    element.innerHTML = GG_DATA_DICTTIONARY.map[lang];
    
    var element = document.getElementById('menu_hande');
    element.innerHTML = GG_DATA_DICTTIONARY.hande[lang];
    
    var element = document.getElementById('menu_date');
    element.innerHTML = GG_DATA_DICTTIONARY.date[lang];
    
    var element = document.getElementById('menu_round');
    element.innerHTML = GG_DATA_DICTTIONARY.round[lang];
    
    var element = document.getElementById('menu_turn');
    element.innerHTML = GG_DATA_DICTTIONARY.turn
	[lang];
    
        
};

////////////////////////////

// reslt
gg.menu.next_recode = function(id) {
    var game_mode = document.getElementById('game_mode');
	var lang = gg.menu.get_lang();
    var game_number = 0;
    if (GG_DATA_DICTTIONARY.normal_game[lang] == game_mode.innerHTML) {
        game_number = 0;
    } else if (GG_DATA_DICTTIONARY.campaign_game[lang] == game_mode.innerHTML) {
        game_number = 1;
    } else if (GG_DATA_DICTTIONARY.many_enemy[lang] == game_mode.innerHTML) {
        game_number = 2;
    } else if (GG_DATA_DICTTIONARY.stroge_enemy[lang] == game_mode.innerHTML) {
        game_number = 3;
    } else if (GG_DATA_DICTTIONARY.team[lang] == game_mode.innerHTML) {
        game_number = 4;
    }
	game_number += id;
	
	if (id > 0) {
		if (game_number >= GG_DATA_GAME_MODE_ARRAY.length) {
			game_number = 0;
		}

	} else {
		if (game_number < 0) {
			game_number = GG_DATA_GAME_MODE_ARRAY.length - 1;
		}
		
	}
    gg.menu.set_recode(game_number);
};


gg.menu.set_recode = function(id) {

    var data = gg.storage.load_recode();
	var lang = gg.menu.get_lang();
	var total_win = 0;
	var total_game = 0;

	//
	var png_zoom = '20%';
    var device_id = GG_DATA_DEVICE_SMARTPHONE;
	if (navigator.userAgent.indexOf('Android') > 0 &&
	    navigator.userAgent.indexOf('Mobile') < 0) {
        device_id = GG_DATA_DEVICE_TABLET;
	}
    
    //if (device_id == GG_DATA_DEVICE_SMARTPHONE) {
    //    if (window.innerWidth * window.devicePixelRatio > 800 &&
    //        window.innerWidth * window.devicePixelRatio <= 1080) {
	//		png_zoom = '15%'
     //   } else if (window.innerWidth * window.devicePixelRatio > 1080) {

    //    }
    //} else {
    //    if (window.innerWidth * window.devicePixelRatio > 1200) {
	//		png_zoom = '35%'
	//	} else {
	//		png_zoom = '30%'
	//	}
    //}
    var element = document.getElementById('menu_mode');
    element.innerHTML = GG_DATA_DICTTIONARY.game_mode[lang];
    
    var game_mode = document.getElementById('game_mode');
    if (id == 0) {
        game_mode.innerHTML = GG_DATA_DICTTIONARY.normal_game[lang];
    } else if (id == 1) {
        game_mode.innerHTML = GG_DATA_DICTTIONARY.campaign_game[lang];
    } else if (id == 2) {
        game_mode.innerHTML = GG_DATA_DICTTIONARY.many_enemy[lang];
    } else if (id == 3) {
        game_mode.innerHTML = GG_DATA_DICTTIONARY.stroge_enemy[lang];
    } else if (id == 4) {
        game_mode.innerHTML = GG_DATA_DICTTIONARY.team[lang];
    }
    element = document.getElementById('menu_recode');
	element.innerHTML = GG_DATA_DICTTIONARY.game_recode_title[lang];

    
    element = document.getElementById('menu_recode_win');
	element.innerHTML = '&nbsp;&nbsp;&nbsp;' + GG_DATA_DICTTIONARY.game_end_win[lang] + '&nbsp;&nbsp;&nbsp;';

    element = document.getElementById('menu_recode_game');
	element.innerHTML = '&nbsp;&nbsp;&nbsp;' + GG_DATA_DICTTIONARY.recode_game[lang] + '&nbsp;&nbsp;&nbsp;';

    element = document.getElementById('menu_recode_percentage');
	element.innerHTML = '&nbsp;&nbsp;&nbsp;' + GG_DATA_DICTTIONARY.recode_percentage[lang] + '&nbsp;&nbsp;&nbsp;';
	
    var element, temp_percentage;
	for (var i = 0; i < GG_DATA_HANDE_ARRAY.length - 4; i++) {
        element = document.getElementById('menu_recode_item_hande_' + i);
		element.innerHTML = '<i class="fa fa-shield"></i>&nbsp;' + i;
        element = document.getElementById('menu_recode_win_hande_' + i);
		element.innerHTML = data[id].hande[i].win;
		total_win += data[id].hande[i].win;
        element = document.getElementById('menu_recode_game_hande_' + i);
		element.innerHTML = data[id].hande[i].game;
		total_game += data[id].hande[i].game;
        element = document.getElementById('menu_recode_percentage_hande_' + i);
		if (data[id].hande[i].game != 0) {
			temp_percentage = Math.floor(data[id].hande[i].win / data[id].hande[i].game * 100);
			element.innerHTML = '' + temp_percentage + '%';
		} else {
			element.innerHTML = '0%';
		}
	}

	for (var i = 0; i < GG_DATA_TEAM_ARRAY.length; i++) {
        element = document.getElementById('menu_recode_item_team_' + i);
		element.style.color = GG_DATA_MENU_COLOR[i];
        element = document.getElementById('menu_recode_win_team_' + i);
		element.innerHTML = data[id].team[i].win;
		total_win += data[id].team[i].win;
        element = document.getElementById('menu_recode_game_team_' + i);
		element.innerHTML = data[id].team[i].game;
		total_game += data[id].team[i].game;
        element = document.getElementById('menu_recode_percentage_team_' + i);
		if (data[id].team[i].game != 0) {
			temp_percentage = Math.floor(data[id].team[i].win / data[id].team[i].game * 100);
			element.innerHTML = '' + temp_percentage + '%';
		} else {
			element.innerHTML = '0%';
		}
	}
	
    //element = document.getElementById('menu_recode_item_total');
	//element.innerHTML = GG_DATA_DICTTIONARY.game_end_total[lang] ;

    //element = document.getElementById('menu_recode_win_total');
	//element.innerHTML = total_win;

    //element = document.getElementById('menu_recode_game_total');
	//element.innerHTML = total_game;

    //element = document.getElementById('menu_recode_percentage_total');
	//if (total_game != 0) {
	//	element.innerHTML = '' + Math.floor(total_win / total_game * 100) + '%';
	//} else {
	//	element.innerHTML = '0%';
		
	//}

	var element = document.getElementById('info');
	element.style.display = 'inline';
	var element = document.getElementById('prev');
	element.style.display = 'inline';
	var element = document.getElementById('back');
	element.style.display = 'inline';
	var element = document.getElementById('return');
	element.style.display = 'inline';

};



/////////////////////////////

// reslt
gg.menu.next_result = function() {
    var game_mode = document.getElementById('game_mode');
	var lang = gg.menu.get_lang();
    var game_number = 0;
    if (GG_DATA_DICTTIONARY.normal_game[lang] == game_mode.innerHTML) {
        game_number = 0;
    } else if (GG_DATA_DICTTIONARY.campaign_game[lang] == game_mode.innerHTML) {
        game_number = 1;
    } else if (GG_DATA_DICTTIONARY.many_enemy[lang] == game_mode.innerHTML) {
        game_number = 2;
    } else if (GG_DATA_DICTTIONARY.stroge_enemy[lang] == game_mode.innerHTML) {
        game_number = 3;
    } else if (GG_DATA_DICTTIONARY.team[lang] == game_mode.innerHTML) {
        game_number = 4;
    }
    //var game_number = GG_DATA_GAME_MODE_ARRAY.indexOf(game_mode.innerHTML);

    if (game_number >= GG_DATA_GAME_MODE_ARRAY.length - 1) {
        game_number = 0;
    } else {
        game_number++;
    }
    gg.menu.set_result(game_number);
};

gg.menu.prev_result = function() {
    var game_mode = document.getElementById('game_mode');
	var lang = gg.menu.get_lang();
    var game_number = 0;
    if (GG_DATA_DICTTIONARY.normal_game[lang] == game_mode.innerHTML) {
        game_number = 0;
    } else if (GG_DATA_DICTTIONARY.campaign_game[lang] == game_mode.innerHTML) {
        game_number = 1;
    } else if (GG_DATA_DICTTIONARY.many_enemy[lang] == game_mode.innerHTML) {
        game_number = 2;
    } else if (GG_DATA_DICTTIONARY.stroge_enemy[lang] == game_mode.innerHTML) {
        game_number = 3;
    } else if (GG_DATA_DICTTIONARY.team[lang] == game_mode.innerHTML) {
        game_number = 4;
    }
    //var game_number = GG_DATA_GAME_MODE_ARRAY.indexOf(game_mode.innerHTML);
    if (game_number == 0) {
        game_number = GG_DATA_GAME_MODE_ARRAY.length - 1;;
    } else {
        game_number--;
    }
    gg.menu.set_result(game_number);
    
};

gg.menu.set_result = function(id) {
    var data = gg.storage.load_result();
	var lang = gg.menu.get_lang();

	//
	var png_zoom = '20%';
    var device_id = GG_DATA_DEVICE_SMARTPHONE;
	if (navigator.userAgent.indexOf('Android') > 0 &&
	    navigator.userAgent.indexOf('Mobile') < 0) {
        device_id = GG_DATA_DEVICE_TABLET;
	}
    
    if (device_id == GG_DATA_DEVICE_SMARTPHONE) {
        if (window.innerWidth * window.devicePixelRatio > 800 &&
            window.innerWidth * window.devicePixelRatio <= 1080) {
			png_zoom = '15%'
        } else if (window.innerWidth * window.devicePixelRatio > 1080) {

        }
    } else {
        if (window.innerWidth * window.devicePixelRatio > 1200) {
			png_zoom = '35%'
		} else {
			png_zoom = '30%'
		}
    }

    
    var game_mode = document.getElementById('game_mode');
    if (id == 0) {
        game_mode.innerHTML = GG_DATA_DICTTIONARY.normal_game[lang];
    } else if (id == 1) {
        game_mode.innerHTML = GG_DATA_DICTTIONARY.campaign_game[lang];
    } else if (id == 2) {
        game_mode.innerHTML = GG_DATA_DICTTIONARY.many_enemy[lang];
    } else if (id == 3) {
        game_mode.innerHTML = GG_DATA_DICTTIONARY.stroge_enemy[lang];
    } else if (id == 4) {
        game_mode.innerHTML = GG_DATA_DICTTIONARY.team[lang];
    }
    
    //game_mode.innerHTML = GG_DATA_GAME_MODE_ARRAY[id];
    //game_mode.innerHTML = GG_DATA_GAME_MODE_ARRAY[id];
    // lang
    
    var element;
    
    for (var i = 0; i < GG_DATA_HITPOINT_ARRAY.length; i++) {
        element = document.getElementById('div_hitpoint_' + i);
		element.style.zoom = png_zoom;

        element = document.getElementById('hitpoint_' + i);
        if (data[id].hitpoint[i] != null) {
            element.style.clip = 'rect(0px ' + (data[id].hitpoint[i] * 240 + 480) + 'px 240px ' + (data[id].hitpoint[i] * 240 + 240)+ 'px)';
            element.style.left = '-' + (data[id].hitpoint[i] * 240 + 240) + 'px';
        } else {
            element.style.clip = 'rect(0px 240px 240px 0px)';
            element.style.left = '0px';
        }
    }
    for (var i = 0; i < GG_DATA_MAP_ARRAY.length; i++) {
        element = document.getElementById('div_map_' + i);
		element.style.zoom = png_zoom;

        element = document.getElementById('map_' + i);
        if (data[id].map[i] != null) {
            element.style.clip = 'rect(0px ' + (data[id].map[i] * 240 + 480) + 'px 240px ' + (data[id].map[i] * 240 + 240)+ 'px)';
            element.style.left = '-' + (data[id].map[i] * 240 + 240) + 'px';
        } else {
            element.style.clip = 'rect(0px 240px 240px 0px)';
            element.style.left = '0px';
        }
    }
    for (var i = 0; i < GG_DATA_UNIT_NUMBER_ARRAY.length; i++) {
        element = document.getElementById('div_unit_number_' + i);
		element.style.zoom = png_zoom;

        element = document.getElementById('unit_number_' + i);
        if (id != 1) {
            element.style.display = 'inline';
            if (data[id].unit_number[i] != null) {
				element.style.clip = 'rect(0px ' + (data[id].unit_number[i] * 240 + 480) + 'px 240px ' + (data[id].unit_number[i] * 240 + 240)+ 'px)';
				element.style.left = '-' + (data[id].unit_number[i] * 240 + 240) + 'px';
            } else {
            element.style.clip = 'rect(0px 240px 240px 0px)';
            element.style.left = '0px';
            }
        } else {
            element.style.display = 'none';
        }
    }
    for (var i = 0; i < GG_DATA_TEAM_ARRAY.length; i++) {
        element = document.getElementById('div_team_' + i);
		element.style.zoom = png_zoom;
        element = document.getElementById('team_' + i);
        if (data[id].team[i] != null) {
            element.style.clip = 'rect(0px ' + (data[id].team[i] * 240 + 480) + 'px 240px ' + (data[id].team[i] * 240 + 240)+ 'px)';
            element.style.left = '-' + (data[id].team[i] * 240 + 240) + 'px';
        } else {
            element.style.clip = 'rect(0px 240px 240px 0px)';
            element.style.left = '0px';
        }
    }

    for (var i = 0; i < GG_DATA_TEAM_ARRAY.length; i++) {
        element = document.getElementById('div_enemy_team_' + i);
		element.style.zoom = png_zoom;
        element = document.getElementById('enemy_team_' + i);
        if (data[id].enemy_team == null) {
            element.style.clip = 'rect(0px 240px 240px 0px)';
            element.style.left = '0px';
		} else if (data[id].enemy_team[i] != null) {
            element.style.clip = 'rect(0px ' + (data[id].enemy_team[i] * 240 + 480) + 'px 240px ' + (data[id].enemy_team[i] * 240 + 20)+ 'px)';
            element.style.left = '-' + (data[id].enemy_team[i] * 240 + 240) + 'px';
        } else {
            element.style.clip = 'rect(0px 240px 240px 0px)';
            element.style.left = '0px';
        }
    }
	var element = document.getElementById('info');
	element.style.display = 'inline';
	var element = document.getElementById('prev');
	element.style.display = 'inline';
	var element = document.getElementById('back');
	element.style.display = 'inline';
	var element = document.getElementById('return');
	element.style.display = 'inline';

};

gg.menu.view_eraser = function() {
    var dialog = document.getElementById('destinetion');
    dialog.style.display = 'none';
	
    var button_menu = document.getElementById('button_menu');
    button_menu.innerHTML = '<i class="fa fa-bars"></i>';
    button_menu.onclick = gg.menu.back_end_menu;
    button_menu.disabled = false;
	
};

gg.menu.view_statistical = function(id) {
    //clearTimeout(gg.menu.data.animation.timer_id);
    var dialog = document.getElementById('destinetion');
    dialog.style.display = 'block';

    var temp_list = [];
	var result_list = [];
	var temp_sum_attack_point, temp_sum_defence_point, temp_sum_move_point,
	    tmep_sum_recovery_point, temp_sum_max_hitpoint;
	if (id == 0) {
		for (var i = 0 ; i < 2; i++) {
			var temp_list = gg.controller.get_game_exp_list_army_number(i);
			var temp_area_point = gg.controller.get_game_area_point(i);
			var temp_hitpoint = gg.controller.get_all_hitpoint(i);
			result_list[i] = {game_exp: 0,
				game_move_distance: 0,
				game_damage_give: 0,
				game_damage_receive: 0,
				game_recovery: temp_hitpoint.level_up_add_hitpoint,
				game_fatigue: 0,
				game_recovery_fatigue: 0,
				game_units_number: temp_list.length,
				game_area_point: temp_area_point,
				start_all_hitpoint: temp_hitpoint.start_all_hitpoint,
				create_uinit_all_hitpoint: temp_hitpoint.create_uinit_all_hitpoint,
				level_up_add_hitpoint: temp_hitpoint.level_up_add_hitpoint,
				//max_sum_attack_point:0,
				//max_sum_defence_point:0,
				//max_sum_move_point:0,
				//max_sum_reocvery_point:0,
				//max_sum_max_hitpoint:0,
				//average_sum_attack_point:0,
				//average_sum_defence_point:0,
				//average_sum_move_point:0,
				//average_sum_recovery_point:0,
				//average_sum_max_hitpoint:0
				}; 
			for (var j = 0;  j < temp_list.length; j++) {
				result_list[i].game_exp              += temp_list[j].game_exp;
				result_list[i].game_move_distance    += temp_list[j].game_move_distance;
				result_list[i].game_damage_give      += temp_list[j].game_damage_give;
				result_list[i].game_damage_receive   += temp_list[j].game_damage_receive;
				result_list[i].game_recovery         += temp_list[j].game_recovery;
				result_list[i].game_fatigue          += temp_list[j].game_fatigue;
				result_list[i].game_recovery_fatigue += temp_list[j].game_recovery_fatigue;
			}
			
			
			//////////////////////////////////
			
			if (result_list[i].start_all_hitpoint >= 1000) {
				result_list[i].str_start_all_hitpoint = result_list[i].start_all_hitpoint.toString().replace( /(\d)(?=(\d\d\d)+(?!\d))/g, '$1,')
				//result_list[i].str_start_all_hitpoint     = '' + ((result_list[i].start_all_hitpoint  - result_list[i].start_all_hitpoint % 1000) / 1000) + ',' + (result_list[i].start_all_hitpoint % 1000);
			} else {
				result_list[i].str_start_all_hitpoint     = result_list[i].start_all_hitpoint;
			}
			
			if (result_list[i].create_uinit_all_hitpoint >= 1000) {
				//result_list[i].str_create_uinit_all_hitpoint     = '' + ((result_list[i].create_uinit_all_hitpoint  - result_list[i].create_uinit_all_hitpoint % 1000) / 1000) + ',' + (result_list[i].create_uinit_all_hitpoint % 1000);
				result_list[i].str_start_all_hitpoint = result_list[i].start_all_hitpoint.toString().replace( /(\d)(?=(\d\d\d)+(?!\d))/g, '$1,')
			} else {
				result_list[i].str_create_uinit_all_hitpoint     = result_list[i].create_uinit_all_hitpoint;
			}

			// stop
			//if (result_list[i].level_up_add_hitpoint >= 1000) {
			//	result_list[i].str_level_up_add_hitpoint     = '' + ((result_list[i].level_up_add_hitpoint  - result_list[i].level_up_add_hitpoint % 1000) / 1000) + ',' + (result_list[i].level_up_add_hitpoint % 1000);
			//} else {
			//	result_list[i].str_level_up_add_hitpoint     = result_list[i].level_up_add_hitpoint;
			//}

			
			if (result_list[i].game_units_number >= 1000) {
				result_list[i].str_start_all_hitpoint = result_list[i].start_all_hitpoint.toString().replace( /(\d)(?=(\d\d\d)+(?!\d))/g, '$1,')
				//result_list[i].str_game_units_number     = '' + ((result_list[i].game_units_number  - result_list[i].game_units_number % 1000) / 1000) + ',' + (result_list[i].game_units_number % 1000);
			} else {
				result_list[i].str_game_units_number     = result_list[i].game_units_number;
			}

			if (temp_area_point >= 1000) {
				result_list[i].str_game_area_point = temp_area_point.toString().replace( /(\d)(?=(\d\d\d)+(?!\d))/g, '$1,')
			//	result_list[i].str_game_area_point     = '' + ((temp_area_point - temp_area_point % 1000) / 1000) + ',' + (temp_area_point % 1000);
			} else {
				result_list[i].str_game_area_point     = temp_area_point;
				
			}

			if (result_list[i].game_exp >= 1000) {
				result_list[i].str_start_all_hitpoint = result_list[i].start_all_hitpoint.toString().replace( /(\d)(?=(\d\d\d)+(?!\d))/g, '$1,')
			//	result_list[i].str_game_exp     = '' + ((result_list[i].game_exp - result_list[i].game_exp % 1000) / 1000) + ',' + (result_list[i].game_exp % 1000);
			} else {
				result_list[i].str_game_exp     = result_list[i].game_exp;
				
			}

			if (result_list[i].game_move_distance >= 1000) {
				result_list[i].str_start_all_hitpoint = result_list[i].start_all_hitpoint.toString().replace( /(\d)(?=(\d\d\d)+(?!\d))/g, '$1,')
			//	result_list[i].str_game_move_distance     = '' + ((result_list[i].game_move_distance - result_list[i].game_move_distance % 1000) / 1000) + ',' + (result_list[i].game_move_distance % 1000);
			} else {
				result_list[i].str_game_move_distance     = result_list[i].game_move_distance;
				
			}

			if (result_list[i].game_damage_give >= 1000) {
				result_list[i].str_start_all_hitpoint = result_list[i].start_all_hitpoint.toString().replace( /(\d)(?=(\d\d\d)+(?!\d))/g, '$1,')
			//	result_list[i].str_game_damage_give     = '' + ((result_list[i].game_damage_give - result_list[i].game_damage_give % 1000) / 1000) + ',' + (result_list[i].game_damage_give % 1000);
			} else {
				result_list[i].str_game_damage_give     = result_list[i].game_damage_give;
				
			}

			if (result_list[i].game_damage_receive >= 1000) {
				result_list[i].str_game_damage_receive = result_list[i].game_damage_receive.toString().replace( /(\d)(?=(\d\d\d)+(?!\d))/g, '$1,')
			//	result_list[i].str_game_damage_receive     = '' + ((result_list[i].game_damage_receive - result_list[i].game_damage_receive % 1000) / 1000) + ',' + (result_list[i].game_damage_receive % 1000);
			} else {
				result_list[i].str_game_damage_receive     = result_list[i].game_damage_receive;
				
			}

			if (result_list[i].game_recovery >= 1000) {
				result_list[i].str_game_recovery = result_list[i].game_recovery.toString().replace( /(\d)(?=(\d\d\d)+(?!\d))/g, '$1,')
			//	result_list[i].str_game_recovery     = '' + ((result_list[i].game_recovery - result_list[i].game_recovery % 1000) / 1000) + ',' + (result_list[i].game_recovery % 1000);
			} else {
				result_list[i].str_game_recovery     = result_list[i].game_recovery;
				
			}

			if (result_list[i].game_fatigue >= 1000) {
				result_list[i].str_game_fatigue = result_list[i].game_fatigue.toString().replace( /(\d)(?=(\d\d\d)+(?!\d))/g, '$1,')
			//	result_list[i].str_game_fatigue     = '' + ((result_list[i].game_fatigue - result_list[i].game_fatigue % 1000) / 1000) + ',' + (result_list[i].game_fatigue % 1000);
			} else {
				result_list[i].str_game_fatigue     = result_list[i].game_fatigue;
				
			}

			if (result_list[i].game_recovery_fatigue >= 1000) {
				result_list[i].str_game_recovery_fatigue = result_list[i].game_recovery_fatigue.toString().replace( /(\d)(?=(\d\d\d)+(?!\d))/g, '$1,')
			//	result_list[i].str_game_recovery_fatigue     = '' + ((result_list[i].game_recovery_fatigue - result_list[i].game_recovery_fatigue % 1000) / 1000) + ',' + (result_list[i].game_recovery_fatigue % 1000);
			} else {
				result_list[i].str_game_recovery_fatigue     = result_list[i].game_recovery_fatigue;
				
			}
			
			//temp_sum_attack_point = 0;
			//temp_sum_defence_point = 0;
			//temp_sum_move_point = 0;
			//tmep_sum_recovery_point = 0;
			//temp_sum_max_hitpoint = 0;
			//for (var j = 1;  j < gg.controller.data.history[i].length; j++) {
			//	temp_sum_attack_point   += gg.controller.data.history[i][j].sum_attack_point;
			//	temp_sum_defence_point  += gg.controller.data.history[i][j].sum_defence_point;
			//	temp_sum_move_point     += gg.controller.data.history[i][j].sum_move_point;
			//	tmep_sum_recovery_point += gg.controller.data.history[i][j].sum_recovery_point;
			//	temp_sum_max_hitpoint   += gg.controller.data.history[i][j].sum_max_hitpoint;
			//}
			//result_list[i].average_sum_attack_point   = Math.floor((temp_sum_attack_point / (gg.controller.data.history[i].length - 1)) * 10) / 10;
			//result_list[i].average_sum_defence_point  = Math.floor((temp_sum_defence_point / (gg.controller.data.history[i].length - 1)) * 10) / 10;
			//result_list[i].average_sum_move_point     = Math.floor((temp_sum_move_point / (gg.controller.data.history[i].length - 1)) * 10) / 10;
			//result_list[i].average_sum_recovery_point = Math.floor((temp_sum_attack_point / (gg.controller.data.history[i].length - 1)) * 10) / 10;
			//result_list[i].average_sum_max_hitpoint   = Math.floor((temp_sum_max_hitpoint / (gg.controller.data.history[i].length - 1)) * 10) / 10;
		}
	} else if (id == 1) {

	}    
	
    var src;
	var lang = gg.menu.get_lang();
	//var str = '<div class="start_info">' + GG_DATA_DICTTIONARY.statistical_data[lang] + '&nbsp;&nbsp;' + id + '/2</div>';
	var str = '<div class="start_info">' + GG_DATA_DICTTIONARY.statistical_data[lang] + '</div>';

	if (id == 0) {
		str += '<table class="start_info"><tbody>';
	
		str += '<tr>';
		str += '<td></td>';
		str += '<td class="start_info">&nbsp;&nbsp;&nbsp;&nbsp;<i class="fa fa-flag" style="color:' + GG_DATA_MENU_COLOR[gg.controller.data.army[0].color]+ ';"></i>&nbsp;&nbsp;&nbsp;&nbsp;</td>';
		str += '<td class="start_info">&nbsp;&nbsp;&nbsp;&nbsp;<i class="fa fa-flag" style="color:' + GG_DATA_MENU_COLOR[gg.controller.data.army[1].color]+ ';"></i>&nbsp;&nbsp;&nbsp;&nbsp;</td>';	
		str += '</tr>';
		
		str += '<tr>';
		str += '<td class="top_dialog start_info">' + GG_DATA_DICTTIONARY.statistical_all_units[lang] + '</td>';
		str += '<td class="table_number start_info">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + result_list[0].str_game_units_number + '</td>';
		str += '<td class="table_number start_info">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + result_list[1].str_game_units_number + '</td>';
		str += '</tr>';
		
		str += '<tr>';
		str += '<td class="top_dialog start_info">' + GG_DATA_DICTTIONARY.statistical_all_exp[lang] + '</td>';
		str += '<td class="table_number start_info">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + result_list[0].str_game_exp + '</td>';
		str += '<td class="table_number start_info">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + result_list[1].str_game_exp + '</td>';
		str += '</tr>';
		
		str += '<tr>';
		str += '<td class="top_dialog start_info">' + GG_DATA_DICTTIONARY.statistical_start_all_hitpoint[lang] + '</td>';
		str += '<td class="table_number start_info">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + result_list[0].str_start_all_hitpoint + '</td>';
		str += '<td class="table_number start_info">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + result_list[1].str_start_all_hitpoint + '</td>';
		str += '</tr>';
		
		str += '<tr>';
		str += '<td class="top_dialog start_info">' + GG_DATA_DICTTIONARY.statistical_create_uinit_all_hitpoint[lang] + '</td>';
		str += '<td class="table_number start_info">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + result_list[0].create_uinit_all_hitpoint + '</td>';
		str += '<td class="table_number start_info">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + result_list[1].create_uinit_all_hitpoint + '</td>';
		str += '</tr>';
				
		str += '<tr>';
		str += '<td class="top_dialog start_info">' + GG_DATA_DICTTIONARY.statistical_all_damage_give[lang] + '</td>';
		str += '<td class="table_number start_info">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + result_list[0].str_game_damage_give + '</td>';
		str += '<td class="table_number start_info">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + result_list[1].str_game_damage_give + '</td>';
		str += '</tr>';
		
		str += '<tr>';
		str += '<td class="top_dialog start_info">' + GG_DATA_DICTTIONARY.statistical_all_damage_receive[lang] + '</td>';
		str += '<td class="table_number start_info">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + result_list[0].str_game_damage_receive + '</td>';
		str += '<td class="table_number start_info">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + result_list[1].str_game_damage_receive + '</td>';
		str += '</tr>';
		
		str += '<tr>';
		str += '<td class="top_dialog start_info">' + GG_DATA_DICTTIONARY.statistical_all_move_distance[lang] + '</td>';
		str += '<td class="table_number start_info">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + result_list[0].str_game_move_distance + '</td>';
		str += '<td class="table_number start_info">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + result_list[1].str_game_move_distance + '</td>';
		str += '</tr>';
		
		str += '<tr>';
		str += '<td class="top_dialog start_info">' + GG_DATA_DICTTIONARY.statistical_all_recovery[lang] + '</td>';
		str += '<td class="table_number start_info">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + result_list[0].str_game_recovery + '</td>';
		str += '<td class="table_number start_info">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + result_list[1].str_game_recovery + '</td>';
		str += '</tr>';

		str += '<tr>';
		str += '<td class="top_dialog start_info">' + GG_DATA_DICTTIONARY.statistical_all_area_point[lang] + '</td>';
		str += '<td class="table_number start_info">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + result_list[0].str_game_area_point + '</td>';
		str += '<td class="table_number start_info">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + result_list[1].str_game_area_point + '</td>';
		str += '</tr>';
		
		str += '<tr>';
		str += '<td class="top_dialog start_info">' + GG_DATA_DICTTIONARY.statistical_all_fatigue[lang] + '</td>';
		str += '<td class="table_number start_info">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + result_list[0].str_game_fatigue + '</td>';
		str += '<td class="table_number start_info">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + result_list[1].str_game_fatigue + '</td>';
		str += '</tr>';
		
		str += '<tr>';
		str += '<td class="top_dialog start_info">' + GG_DATA_DICTTIONARY.statistical_all_recovery_fatigue[lang] + '</td>';
		str += '<td class="table_number start_info">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + result_list[0].str_game_recovery_fatigue + '</td>';
		str += '<td class="table_number start_info">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + result_list[1].str_game_recovery_fatigue + '</td>';
		str += '</tr>';

		//str += '<tr>';
		//str += '<td class="top_dialog start_info">' + GG_DATA_DICTTIONARY.statistical_average_sum_attack_point[lang] + '</td>';
		//str += '<td class="table_number start_info">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + result_list[0].average_sum_attack_point + '</td>';
		//str += '<td class="table_number start_info">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + result_list[1].average_sum_attack_point + '</td>';
		//str += '</tr>';

		//str += '<tr>';
		//str += '<td class="top_dialog start_info">' + GG_DATA_DICTTIONARY.statistical_average_sum_defence_point[lang] + '</td>';
		//str += '<td class="table_number start_info">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + result_list[0].average_sum_defence_point + '</td>';
		//str += '<td class="table_number start_info">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + result_list[1].average_sum_defence_point + '</td>';
		//str += '</tr>';

		//str += '<tr>';
		//str += '<td class="top_dialog start_info">' + GG_DATA_DICTTIONARY.statistical_average_sum_move_point[lang] + '</td>';
		//str += '<td class="table_number start_info">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + result_list[0].average_sum_move_point + '</td>';
		//str += '<td class="table_number start_info">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + result_list[1].average_sum_move_point + '</td>';
		//str += '</tr>';

		//str += '<tr>';
		//str += '<td class="top_dialog start_info">' + GG_DATA_DICTTIONARY.statistical_average_sum_recovery_point[lang] + '</td>';
		//str += '<td class="table_number start_info">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + result_list[0].average_sum_recovery_point + '</td>';
		//str += '<td class="table_number start_info">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + result_list[1].average_sum_recovery_point + '</td>';
		//str += '</tr>';

		//str += '<tr>';
		//str += '<td class="top_dialog start_info">' + GG_DATA_DICTTIONARY.statistical_average_sum_max_hitpoint[lang] + '</td>';
		//str += '<td class="table_number start_info">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + result_list[0].average_sum_max_hitpoint + '</td>';
		//str += '<td class="table_number start_info">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + result_list[1].average_sum_max_hitpoint + '</td>';
		//str += '</tr>';

		str += '</tbody></table>';
	} else if (id == 1) {
		str += '<table class="start_info"><tbody>';
	
		str += '<tr>';
		str += '<td></td>';
		str += '<td class="start_info">&nbsp;&nbsp;&nbsp;&nbsp;<i class="fa fa-flag" style="color:' + GG_DATA_MENU_COLOR[gg.controller.data.army[0].color]+ ';"></i>&nbsp;&nbsp;&nbsp;&nbsp;</td>';
		str += '<td class="start_info">&nbsp;&nbsp;&nbsp;&nbsp;<i class="fa fa-flag" style="color:' + GG_DATA_MENU_COLOR[gg.controller.data.army[1].color]+ ';"></i>&nbsp;&nbsp;&nbsp;&nbsp;</td>';	
		str += '</tr>';

		str += '</tbody></table>';
	}

	var next_id = id + 1;
	var prev_id = id - 1;
	if (next_id > 1) {
		next_id = 0;
	}
	if (prev_id < 0) {
		next_id = 1;
	}
   	//str += "<button id='button_back' onClick='gg.menu.view_statistical(" + prev_id + ")' class='leftsidebutton white' ><i class='fa fa-arrow-left'></i></button>&nbsp;&nbsp;&nbsp;&nbsp;";
   	//str += "<button id='button_back' onClick='gg.menu.view_statistical(" + next_id + ")' class='leftsidebutton white' ><i class='fa fa-arrow-right'></i></button>&nbsp;&nbsp;&nbsp;&nbsp;";

   	str += "<button id='button_back' onClick='gg.menu.back_end_menu()' class='leftsidebutton white' ><i class='fa fa-times'></i></button>";
    dialog.innerHTML = str;

    
    //
    var left_position = (window.innerWidth - dialog.clientWidth) /2;
    dialog.style.left = left_position;
    var canvas = document.getElementById('canvas_0');
    var top_position = (canvas.clientHeight - dialog.clientHeight) /2 ;
    dialog.style.top = top_position;

	
    var button_cancel = document.getElementById('button_cancel');
    button_cancel.disabled = true;
    var button_dialog = document.getElementById('button_dialog');
    button_dialog.disabled = true;
    var button_menu = document.getElementById('button_menu');
    button_menu.disabled = true;    
};


gg.menu.view_mvp_list = function() {
    clearTimeout(gg.menu.data.animation.timer_id);
    var dialog = document.getElementById('destinetion');
    dialog.style.display = 'block';

    var mvp_list = gg.controller.get_game_exp_list();
    mvp_list.sort(function(a, b) {
		if (a.game_exp < b.game_exp) {
			return 1;
		} else  {
			return -1;
        }
    });
    //debug
    //var result_0 = document.getElementById('result_0');
    //for (var i = 0; i < mvp_list.length; i++) {
    //    if (mvp_list[i].color == mvp_list[0].color) {
    //        result_0.value += mvp_list[i].type +'\t' + mvp_list[i].game_exp + '\n';
    //    }
    //}

    //var result_1 = document.getElementById('result_1');
    //for (var i = 0; i < mvp_list.length; i++) {
    //    if (mvp_list[i].color != mvp_list[0].color) {
    //        result_1.value += mvp_list[i].type +'\t' + mvp_list[i].game_exp + '\n';
    //    }
    //}
    
    //
    var max = mvp_list.length;
    if (max > 5) {
        max = 5;
    }
    for (var i = 0; i < max; i++) {
        if (mvp_list[i].game_exp == 0) {
            max = i;
            break;
        }
    }
    var list = ['&#x2160;', '&#x2161;', '&#x2162;', '&#x2163;', '&#x2164;',
                '&#x2165;', '&#x2166;', '&#x2167;', '&#x2168;', '&#x2169;'];
    var src;
    //
    //var str = 'MVP<br>';
	var lang = gg.menu.get_lang();
	var str = '<div class="start_info">' + GG_DATA_DICTTIONARY.game_end_mvp[lang] + '</div>';

    str += '<table><tbody>';
    str += '<tr>';
    str += '<td>' + GG_DATA_DICTTIONARY.game_end_order[lang] + '</td>';
    str += '<td>' + GG_DATA_DICTTIONARY.team[lang] + '</td>';
    str += '<td>' + GG_DATA_DICTTIONARY.game_end_unit_type[lang] + '</td>';
    str += '<td>' + GG_DATA_DICTTIONARY.game_end_unit_list_exp[lang] + '</td>';
    str += '</tr>';
    //for (var i = 0; i < max / 2; i++) {
    for (var i = 0; i < max; i++) {
        str += '<tr>';

        str += '<td>' + list[i] + '</td>';
		var color = GG_DATA_MENU_COLOR[mvp_list[i].color];
	   	str += "<td class='start_info'><i class='fa fa-flag' style='color:" + color + "'></i></td>";

        str += '<td>';
        src = GG_DATA_CHAR_SPEC[mvp_list[i].type].char_alphabet + '_m_0240'
              + '.png';
        //      + '_' + GG_DATA_ARMY_COLOR_ALPHABET[mvp_list[i].color] + '.png';
        str += "<div style='position:relative;height:" + (gg.controller.data.zoom * GG_DATA_DEFAULT_IMAGE_SIZE / window.devicePixelRatio) +
               "px; width:" + (gg.controller.data.zoom * GG_DATA_DEFAULT_IMAGE_SIZE / window.devicePixelRatio) + "px;overflow: hidden;'>";
               
        str += "<img src='img/0240/" + src +
               "' width='" + (gg.controller.data.zoom * GG_DATA_DEFAULT_IMAGE_SIZE) + "px'" +
               "' style='clip:rect(0px " + (gg.controller.data.zoom * GG_DATA_DEFAULT_IMAGE_SIZE * 2 )
               + "px " + (gg.controller.data.zoom * GG_DATA_DEFAULT_IMAGE_SIZE)
               + "px " + gg.controller.data.zoom * GG_DATA_DEFAULT_IMAGE_SIZE + "px);position: absolute;" +
               "left:-" + (gg.controller.data.zoom * GG_DATA_DEFAULT_IMAGE_SIZE) + "px;"
               + "width:" + (gg.controller.data.zoom * GG_DATA_DEFAULT_IMAGE_SIZE * 3) + "px;"
               + "zoom:" + (1 / window.devicePixelRatio * 100) + "%;"
               +"'>";
        str += "</div>";
        str += '</td>';        
        str += '<td class="start_info">' + mvp_list[i].game_exp + '</td>';
        
        //str += '<td>' + list[i + 5] + '</td>';
        //str += '<td>';
        //src = GG_DATA_CHAR_SPEC[mvp_list[i + 5].type].char_alphabet + '_m_0096_' + GG_DATA_ARMY_COLOR_ALPHABET[mvp_list[i + 5].color] + '.png';
        //str += "<div style='position:relative;height:96px; width:96px;overflow: hidden;'>";
        //str += "<img src='img/0096/" + src + "' style='clip:rect(0px 192px 96px 96px);position: absolute;left:-96px;'>";
        //str += "</div>";
        //str += '</td>';        
        //str += '<td>' + mvp_list[i + 5].game_exp + '</td>';
        //str += '</tr>';
    }
    
    str += '</tbody></table>';
   	str += "<button id='button_back' onClick='gg.menu.back_end_menu()' class='leftsidebutton white' ><i class='fa fa-times'></i></button>";
    dialog.innerHTML = str;
    
    //
    var left_position = (window.innerWidth - dialog.clientWidth) /2;
    dialog.style.left = left_position;
    var canvas = document.getElementById('canvas_0');
    var top_position = (canvas.clientHeight - dialog.clientHeight) /2 ;
    dialog.style.top = top_position;

    var button_cancel = document.getElementById('button_cancel');
    button_cancel.disabled = true;
    var button_dialog = document.getElementById('button_dialog');
    button_dialog.disabled = true;
    var button_menu = document.getElementById('button_menu');
    button_menu.disabled = true;    
};



// replay
gg.menu.start_replay = function() {
    clearTimeout(gg.menu.data.animation.timer_id);

    var dialog = document.getElementById('destinetion');
    dialog.style.display = 'none';
    //
    var button_cancel = document.getElementById('button_cancel');
    button_cancel.innerHTML = '<i class="fa fa-backward "></i>';
    button_cancel.onclick = gg.menu.set_speed_down_replay;
    button_cancel.disabled = false;
    var button_dialog = document.getElementById('button_dialog');
    button_dialog.innerHTML = '<i class="fa fa-forward"></i>';
    button_dialog.onclick = gg.menu.set_speed_up_replay;
    button_dialog.disabled = false;
    var button_menu = document.getElementById('button_menu');
    button_menu.innerHTML = '<i class="fa fa-stop"></i>';
    button_menu.onclick = gg.menu.stop_replay;
    button_menu.disabled = false;
    
    //
    gg.animation.start_replay(gg.menu.stoppd_replay);
};

gg.menu.set_speed_up_replay = function() {
    var timeout = gg.animation.get_timeout();
    if (timeout == GG_DATA_ANIMATION_TIMEOUT_FAST) {
        gg.animation.set_timeout(GG_DATA_ANIMATION_TIMEOUT_VERY_FAST);
    } else if (timeout == GG_DATA_ANIMATION_TIMEOUT_NORMAL) {
        gg.animation.set_timeout(GG_DATA_ANIMATION_TIMEOUT_FAST);
    } else if (timeout == GG_DATA_ANIMATION_TIMEOUT_SLOW) {
        gg.animation.set_timeout(GG_DATA_ANIMATION_TIMEOUT_NORMAL);
    }
};

gg.menu.set_speed_down_replay = function() {
    var timeout = gg.animation.get_timeout();
    if (timeout == GG_DATA_ANIMATION_TIMEOUT_VERY_FAST) {
        gg.animation.set_timeout(GG_DATA_ANIMATION_TIMEOUT_FAST);
    } else if (timeout == GG_DATA_ANIMATION_TIMEOUT_FAST) {
        gg.animation.set_timeout(GG_DATA_ANIMATION_TIMEOUT_NORMAL);
    } else if (timeout == GG_DATA_ANIMATION_TIMEOUT_NORMAL) {
        gg.animation.set_timeout(GG_DATA_ANIMATION_TIMEOUT_SLOW);
    }
};

gg.menu.stop_replay = function() {
    gg.animation.stop_replay();
};

gg.menu.stoppd_replay = function() {
    //gg.menu.data.callback(null);
    
    var button_cancel = document.getElementById('button_cancel');
    button_cancel.innerHTML = '<i class="fa fa-times "></i>';
    button_cancel.onclick = gg.controller_user.cancel;
    var button_dialog = document.getElementById('button_dialog');
    button_dialog.innerHTML = '<i class="fa fa-info"></i>';
    button_dialog.onclick = gg.controller_user.dialog;
    var button_menu = document.getElementById('button_menu');
    button_menu.innerHTML = '<i class="fa fa-cog"></i>';
    button_menu.onclick = gg.controller_user.menu;
    
    gg.menu.view_end_menu(null);
};
////////////////////////////////////////////////

// game end first menu
gg.menu.retry_dialog2 = function() {
	// view
	var dialog = gg.storage.get_dialog();
	if (dialog == GG_DATA_DIALOG_ARRAY[1]) {
		gg.menu.retry();
		return;
	}
	
    var element = document.getElementById('destinetion');
    element.style.display = 'block';
	//var speed = gg.storage.get_speed();
	var str = '';

   	str += "<p><button id='button_back' onClick='gg.menu.retry()' class='leftsidebutton white_yellow' ><i class='fa fa-reply'></i></button></p>";
   	str += "<p><button id='button_back' onClick='gg.menu.view_end_menu(null)' class='leftsidebutton white' ><i class='fa fa-times'></i></button></p>";

    element.innerHTML = str;

    var left_position = (window.innerWidth - element.clientWidth) /2;
    element.style.left = left_position;
    var canvas = document.getElementById('canvas_0');
    var top_position = (canvas.clientHeight - element.clientHeight) /2 ;
    if (top_position < 0) {
        top_position = 0;
    }
    element.style.top = top_position;
	
};

gg.menu.back_dialog2 = function() {
	// view
	var dialog = gg.storage.get_dialog();
	if (dialog == GG_DATA_DIALOG_ARRAY[1]) {
		gg.menu.back_top();
		return;
	}

    var element = document.getElementById('destinetion');
    element.style.display = 'block';
	//var speed = gg.storage.get_speed();
	var str = '';

   	str += "<p><button id='button_back' onClick='gg.menu.back_top()' class='leftsidebutton white_red' ><i class='fa fa-home'></i></button></p>";
   	str += "<p><button id='button_back' onClick='gg.menu.view_end_menu(null)' class='leftsidebutton white' ><i class='fa fa-times'></i></button></p>";

    element.innerHTML = str;

    var left_position = (window.innerWidth - element.clientWidth) /2;
    element.style.left = left_position;
    var canvas = document.getElementById('canvas_0');
    var top_position = (canvas.clientHeight - element.clientHeight) /2 ;
    if (top_position < 0) {
        top_position = 0;
    }
    element.style.top = top_position;
	
};

gg.menu.next_campaign_dialog = function(id) {
	var dialog = gg.storage.get_dialog();
	if (dialog == GG_DATA_DIALOG_ARRAY[1]) {
		gg.menu.next_campaign();
		return;
	}
	// view
    var element = document.getElementById('destinetion');
    element.style.display = 'block';
	var str = '';

	if (id == 0) {
	   	str += "<p><button id='button_back' onClick='gg.menu.next_campaign()' class='leftsidebutton white_green' ><i class='fa fa-arrow-circle-o-right'></i></button></p>";
	} else {
	   	str += "<p><button id='button_back' onClick='gg.menu.next_campaign()' class='leftsidebutton white_green' ><i class='fa fa-arrow-circle-o-left'></i></button></p>";
		
	}
   	str += "<p><button id='button_back' onClick='gg.menu.view_end_menu(null)' class='leftsidebutton white' ><i class='fa fa-times'></i></button></p>";

    element.innerHTML = str;

    var left_position = (window.innerWidth - element.clientWidth) /2;
    element.style.left = left_position;
    var canvas = document.getElementById('canvas_0');
    var top_position = (canvas.clientHeight - element.clientHeight) /2 ;
    if (top_position < 0) {
        top_position = 0;
    }
    element.style.top = top_position;
	
};

gg.menu.next_team_dialog = function(id) {
	var dialog = gg.storage.get_dialog();
	if (dialog == GG_DATA_DIALOG_ARRAY[1]) {
		gg.menu.next_team();
		return;
	}
	// view
    var element = document.getElementById('destinetion');
    element.style.display = 'block';
	var str = '';

	if (id == 0) {
	   	str += "<p><button id='button_back' onClick='gg.menu.next_team()' class='leftsidebutton white_green' ><i class='fa fa-arrow-circle-o-right'></i></button></p>";
	} else {
	   	str += "<p><button id='button_back' onClick='gg.menu.next_team()' class='leftsidebutton white_green' ><i class='fa fa-arrow-circle-o-left'></i></button></p>";
		
	}
   	str += "<p><button id='button_back' onClick='gg.menu.view_end_menu(null)' class='leftsidebutton white' ><i class='fa fa-times'></i></button></p>";

    element.innerHTML = str;

    var left_position = (window.innerWidth - element.clientWidth) /2;
    element.style.left = left_position;
    var canvas = document.getElementById('canvas_0');
    var top_position = (canvas.clientHeight - element.clientHeight) /2 ;
    if (top_position < 0) {
        top_position = 0;
    }
    element.style.top = top_position;
	
};

gg.menu.view_end_menu = function(obj) {
    var dialog = document.getElementById('destinetion');
    dialog.style.display = 'block';
    var str = '';

    if (obj != null) {
        gg.menu.data.win_str = obj;
    } else {
        obj = gg.menu.data.win_str;
    }
    for (var i = 0; i < obj.message.length; i++) {
	    str += '<div class="start_info"> ';
        str += obj.message[i];
	    str += '</div>';
    }
    
    ////////////////////////////
    var mvp_list = gg.controller.get_game_exp_list();
    mvp_list.sort(function(a, b) {
		if (a.game_exp < b.game_exp) {
			return 1;
		} else  {
			return -1;
        }
    });
    var mvp_unit;
    for (var i = 0; i < mvp_list.length; i++) {
        if (mvp_list[i].color == obj.color) {
            mvp_unit = mvp_list[i];
            break;
        }
    }
    if (obj.win == true) {
        var src = GG_DATA_CHAR_SPEC[mvp_unit.type].char_alphabet + '_s0_0240.png'
    } else {
        var src = GG_DATA_CHAR_SPEC[mvp_unit.type].char_alphabet + '_s4_0240.png'
    }
	var unit_left = 100;
	
    str += "<div><img src='img/0240/"
               + src + "'"
			   + " width='" + (gg.controller.data.zoom * GG_DATA_DEFAULT_IMAGE_SIZE / window.devicePixelRatio) + "px'" +
               +"></div>";
    
    str += '<div><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button onClick="gg.menu.start_graph(gg.menu.view_end_menu)" class="leftsidebutton white"><i class="fa fa-bar-chart-o "></i></button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
    str += '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button onClick="gg.menu.view_statistical(0)" class="leftsidebutton white"><i class="fa fa-table"></i></button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>';

    str += '<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button onClick="gg.menu.view_mvp_list()" class="leftsidebutton white"><i class="fa fa-user "></i></button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
    str += '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button onClick="gg.menu.view_unit_list(0, 0)" class="leftsidebutton white"><i class="fa fa-users "></i></button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>';

    str += '<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button onClick="gg.menu.view_eraser()" class="leftsidebutton white"><i class="fa fa-eraser"></i></button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>';

	if (obj.game_info == GG_MENU_MODE_CAMPAIGN) {
	    if (obj.next == true) {
	        str += '<p><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button onClick="gg.menu.next_campaign_dialog(0)" class="leftsidebutton white_green"><i class="fa fa-arrow-circle-o-right"></i></button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>';
	    } else if (obj.prev == true) {
	        str += '<p><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button onClick="gg.menu.next_campaign_dialog(1)" class="leftsidebutton white_green"><i class="fa fa-arrow-circle-o-left"></i></button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>';
	    }
	} else if (obj.game_info == GG_MENU_MODE_TEAM) {
	    if (obj.next == true) {
	        str += '<p><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button onClick="gg.menu.next_team_dialog(0)" class="leftsidebutton white_green"><i class="fa fa-arrow-circle-o-right"></i></button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>';
	    } else if (obj.prev == true) {
	        str += '<p><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button onClick="gg.menu.next_team_dialog(1)" class="leftsidebutton white_green"><i class="fa fa-arrow-circle-o-left"></i></button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>';
	    }
	}
    str += '<p><br><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button onClick="gg.menu.retry_dialog2()" class="leftsidebutton white_yellow"><i class="fa fa-reply "></i></button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
    str += '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button onClick="gg.menu.back_dialog2()" class="leftsidebutton white_red"><i class="fa fa-home"></i></button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>';

    dialog.innerHTML = str;
    dialog.style.width = '';
    var left_position = (window.innerWidth - dialog.clientWidth) /2;
    dialog.style.left = left_position;
    var canvas = document.getElementById('canvas_0');
    var top_position = (canvas.clientHeight - dialog.clientHeight) /2 ;
    if (top_position < 0) {
        top_position = 0;
    }
    dialog.style.top = top_position;

    var button_cancel = document.getElementById('button_cancel');
    button_cancel.innerHTML = '<i class="fa fa-times "></i>';
    button_cancel.className = 'leftsidebutton white';
    button_cancel.disabled = true;

    var button_dialog = document.getElementById('button_dialog');
    button_dialog.innerHTML = '<i class="fa fa-info"></i>';
    button_dialog.disabled = true;

    var button_menu = document.getElementById('button_menu');
    button_menu.innerHTML = '<i class="fa fa-cog"></i>';
    button_menu.disabled = true;

    if (obj.win == true) {    
        gg.menu.data.animation.count = 0;
    }

};

// game end unit list view
gg.menu.view_unit_list = function(army_number, page) {
    //clearTimeout(gg.menu.data.animation.timer_id);
    var dialog = document.getElementById('destinetion');
    dialog.style.display = 'block';
	var color_list = [];
    var unit_list = gg.controller.get_game_exp_list_army_number(army_number);
    var unit_list_temp = gg.controller.get_game_exp_list();
	
	for (var i = 0; i < unit_list_temp.length; i++) {
		if (color_list.indexOf(unit_list_temp[i].color) == -1) {
			color_list.push(unit_list_temp[i].color);
		}
	}
	
    unit_list.sort(function(a, b) {
		if (a.exp < b.exp) {
			return 1;
		} else  {
			return -1;
       }
    });
    //
    //var max = mvp_list.length;
    //if (max > 5) {
    //    max = 5;
    //}
    //for (var i = 0; i < max; i++) {
    //    if (mvp_list[i].game_exp == 0) {
    //        max = i;
    //        break;
    //    }
    //}
    var src;
    //
	var lang = gg.menu.get_lang();

    var str = '<div class="start_info">' + GG_DATA_DICTTIONARY.unit_list[lang] + '</div>';
	str += "<div>";
	for (var i = 0; i < color_list.length; i++) {
		var color = GG_DATA_MENU_COLOR[color_list[i]];
	   	str += "<button id='button_back' onClick='gg.menu.view_unit_list(" + i + ",0)' class='leftsidebutton white' ><i class='fa fa-flag' style='color:" + color + "'></i></button>&nbsp;&nbsp;&nbsp;&nbsp;";
	}
	str += "</div>";
    str += '<table class="table_unit_list">';
    //for (var i = 0; i < max / 2; i++) {
	var stop_count = page * 5 + 5;
	if (stop_count > unit_list.length) {
		stop_count = unit_list.length;
	}
    str += '<tr>';
    str += '<td class="start_info" style="width:10%;">' + "<i class='fa fa-flag' style='color:" + GG_DATA_MENU_COLOR[gg.controller.data.army[army_number].color] + "'></i>" + '</td>';        
    str += '<td class="start_info" style="width:30%;">' + GG_DATA_DICTTIONARY.game_end_unit_list_born[lang] + '</td>';        
    str += '<td class="start_info" style="width:20%;">' + GG_DATA_DICTTIONARY.game_end_unit_list_level[lang] +'</td>';        
    str += '<td class="start_info" style="width:20%;">' + GG_DATA_DICTTIONARY.game_end_unit_list_exp[lang] +'</td>';        
    str += '<td class="start_info" style="width:20%;">' + GG_DATA_DICTTIONARY.game_end_unit_list_done[lang] +'</td>';        
    str += '</tr>';

    for (var i = page * 5; i < stop_count; i++) {
        str += '<tr>';

        str += '<td>';
		if (unit_list[i].alive_flag == true) {
			src = GG_DATA_CHAR_SPEC[unit_list[i].type].char_alphabet + '_s0_0240'
				  + '.png';
		} else {
			src = GG_DATA_CHAR_SPEC[unit_list[i].type].char_alphabet + '_s3_0240'
				  + '.png';
			
		}
		str += "<img src='img/0240/" + src +
				   "' width='" + (gg.controller.data.zoom * GG_DATA_DEFAULT_IMAGE_SIZE / window.devicePixelRatio) + "px'" +
				   "'>";
        str += '</td>';        

		if (unit_list[i].born == GG_DATA_BORN_PATTERN_START) {
	        str += '<td class="start_info">' + GG_DATA_DICTTIONARY.unit_start[lang] + '</td>';
		} else if (unit_list[i].born == GG_DATA_BORN_PATTERN_CREATE) {
	        str += '<td class="start_info">' + GG_DATA_DICTTIONARY.unit_create[lang] + '</td>';
		} else if (unit_list[i].born == GG_DATA_BORN_PATTERN_DEPRIVED) {
	        str += '<td class="start_info">' + GG_DATA_DICTTIONARY.unit_change[lang] + '</td>';
		}
		
        str += '<td class="start_info">' + (unit_list[i].level + 1) + '</td>';
        str += '<td class="start_info">' + unit_list[i].exp + '</td>';
        str += '<td class="start_info">' + unit_list[i].done_count + '</td>';

        str += '</tr>';
    }
	if (stop_count != page * 5 + 5) {
		for (var i = 0; i < (page * 5 + 5) - stop_count; i++) {
			str += '<tr>';
	
			str += '<td>';
			str += "<img src='img/0240/sw_s6_0240.png'" +
				   " width='" + (gg.controller.data.zoom * GG_DATA_DEFAULT_IMAGE_SIZE / window.devicePixelRatio) + "px'" +
				   "'>";

			str += '</td>';        
			str += '<td></td>';
			str += '<td></td>';
			str += '<td></td>';
			str += '<td></td>';
			
			str += '</tr>';
		}
	}
    
    str += '</table>';
	var page_max = (unit_list.length - unit_list.length % 5) / 5 - 1;
	if (unit_list.length % 5 != 0) {
		page_max++;
	}
	var next_page = page + 1;
	if (next_page > page_max) {
		next_page = 0;
	}
	//if (unit_list.length % 5 == 0) {
	//	next_page--;
	//}
	var prev_page = page - 1;
	if (prev_page < 0) {
		prev_page = page_max;
	}
	//if (unit_list.length % 5 == 0) {
	//	prev_page--;
	//}
	
   	str += "<button id='button_back' onClick='gg.menu.view_unit_list(" + army_number + "," + prev_page + ")' class='leftsidebutton white' ><i class='fa fa-arrow-left'></i></button>&nbsp;&nbsp;&nbsp;&nbsp;";
	str += "<span class='start_info'>&nbsp;&nbsp;&nbsp;" + (page + 1) + '/' + (page_max + 1) + "&nbsp;&nbsp;&nbsp;</span>";
   	str += "<button id='button_back' onClick='gg.menu.view_unit_list(" + army_number + "," + next_page + ")' class='leftsidebutton white' ><i class='fa fa-arrow-right'></i></button>&nbsp;&nbsp;&nbsp;&nbsp;";
   	str += "<button id='button_back' onClick='gg.menu.back_end_menu()' class='leftsidebutton white' ><i class='fa fa-times'></i></button>";
    dialog.innerHTML = str;
	//console.log('str:' + str);
    
    //
    var canvas = document.getElementById('canvas_0');
	//dialog.style.width = Math.floor(canvas.style.width * 0.9);
	dialog.style.width = canvas.offsetWidth - 24;
    var div_canvas = document.getElementById('div_canvas_0');
	
    dialog.style.left = div_canvas.offsetLeft;
	
    //var left_position = (window.innerWidth - dialog.clientWidth) / 2;
    //dialog.style.left = left_position;

    var top_position = (canvas.clientHeight - dialog.clientHeight) / 2 ;
	if (top_position < 0) {
		top_position = 0;
	}
    dialog.style.top = top_position;
	
    var button_cancel = document.getElementById('button_cancel');
    button_cancel.disabled = true;
    var button_dialog = document.getElementById('button_dialog');
    button_dialog.disabled = true;
    var button_menu = document.getElementById('button_menu');
    button_menu.disabled = true;    
};

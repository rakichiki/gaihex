var gg = {};
gg.data = {};
gg.data.zoom;

var GS_INIT_MAP_Y_MAX = 7;
var GS_INIT_MAP_X_MAX = 7;

var GS_INIT_SCENARIO = [
    {x:3, y:1}
    ,{x:5, y:1}
    ,{x:6, y:2}
    ,{x:5, y:3}
    ,{x:3, y:3}
    ,{x:2, y:2}
    ,{x:3, y:1}
                        ];
var GS_INIT_VECTOR = 0;
var GS_INIT_SCENARIO_COUNT = 0;
var GS_INIT_SCENARIO_MOVE_COUNT = 0;
var GS_INIT_SCENARIO_MOVE_COUNT_MAX = 20;

// MAP1

gg.init_load = function(zoom) {
	gg.menu.get_lang();
    gg.data.zoom = zoom;
	var temp_url = location.search.replace(/\?/,'').split(/&/);
	var parameter = {};
	for (var i = 0, len_max = temp_url.length; i < len_max; i++) {
	    var temp_word = temp_url[i].split('=');
	    parameter[temp_word[0]] = temp_word[1];
	}

	var enemy_number, firend_number;
    if (parameter.mode == GG_MENU_MODE_CAMPAIGN &&
        parameter.game == 'load') {
        if (parameter.load == 'last') {
            var obj = gg.storage.load_last(GG_STORAGE_LOCAL_STORAGE_CAMPAIGN_RESULT_KEY);
        } else {
            // todo
            var obj = gg.storage.get_load(GG_STORAGE_LOCAL_STORAGE_CAMPAIGN_RESULT_KEY, parameter.load);
        }
        //
		enemy_number = obj.enemy;
		firend_number = obj.friend;
		var team = [GG_DATA_ARMY_COLOR_ALPHABET[obj.friend],
			        GG_DATA_ARMY_COLOR_ALPHABET[obj.enemy]];
    } else {
		enemy_number = parameter.enemy;
		firend_number = parameter.friend;
		var team = [GG_DATA_ARMY_COLOR_ALPHABET[parameter.friend],
			        GG_DATA_ARMY_COLOR_ALPHABET[parameter.enemy]];
    }

    var size = zoom;
    var speed = gg.storage.get_speed();
    if (speed == GG_DATA_SPEED_ARRAY[0]) {
        gg.animation.set_timeout(GG_DATA_ANIMATION_TIMEOUT_VERY_FAST);
    } else if (speed == GG_DATA_SPEED_ARRAY[1]) {
        gg.animation.set_timeout(GG_DATA_ANIMATION_TIMEOUT_FAST);
    } else if (speed == GG_DATA_SPEED_ARRAY[2]) {
        gg.animation.set_timeout(GG_DATA_ANIMATION_TIMEOUT_NORMAL);
    } else if (speed == GG_DATA_SPEED_ARRAY[3]) {
        gg.animation.set_timeout(GG_DATA_ANIMATION_TIMEOUT_SLOW);
    }
    
    if (parameter.mode == GG_MENU_MODE_BENCHMARK) {
        gg.animation.set_timeout(GG_DATA_ANIMATION_TIMEOUT_BENCHMARK);
    }

    var unit_string = [ 'ax', 'sp', 'sr', 'sh', 'tr', 'hm'
                       ,'rp', 'kt', 'cr', 'ch', 'lb', 'hr'
					   ,'th', 'wn', 'ls', 'mc', 'tk', 'ms'
                       ,'sw', 'md', 'fl', 'sb', 'wt', 'hs'
					   ,'ss'];
    //
    var color_string = team;
    var unit_img_list = new Array();
    var weapon_img_list = new Array();
    for (var i = 0; i < unit_string.length; i++) {
        unit_img_list.push('img/' + GG_ANIMATION_IMG_PATH + '/' + unit_string[i] + '_m_' + GG_ANIMATION_IMG_PATH + '.png');
        unit_img_list.push('img/' + GG_ANIMATION_IMG_PATH + '/' + unit_string[i] + '_s0_' + GG_ANIMATION_IMG_PATH + '.png');
        unit_img_list.push('img/' + GG_ANIMATION_IMG_PATH + '/' + unit_string[i] + '_s1_' + GG_ANIMATION_IMG_PATH + '.png');
        unit_img_list.push('img/' + GG_ANIMATION_IMG_PATH + '/' + unit_string[i] + '_s2_' + GG_ANIMATION_IMG_PATH + '.png');
        unit_img_list.push('img/' + GG_ANIMATION_IMG_PATH + '/' + unit_string[i] + '_s3_' + GG_ANIMATION_IMG_PATH + '.png');
        unit_img_list.push('img/' + GG_ANIMATION_IMG_PATH + '/' + unit_string[i] + '_s4_' + GG_ANIMATION_IMG_PATH + '.png');
        unit_img_list.push('img/' + GG_ANIMATION_IMG_PATH + '/' + unit_string[i] + '_s5_' + GG_ANIMATION_IMG_PATH + '.png');
        unit_img_list.push('img/' + GG_ANIMATION_IMG_PATH + '/' + unit_string[i] + '_s6_' + GG_ANIMATION_IMG_PATH + '.png');
        if (unit_string[i] == 'tp' || unit_string[i] == 'hr' ||
			unit_string[i] == 'hs' || unit_string[i] == 'ms' || 
			unit_string[i] == 'mc' || unit_string[i] == 'tk' ||
			unit_string[i] == 'sh') {
	        unit_img_list.push('img/' + GG_ANIMATION_IMG_PATH + '/' + unit_string[i] + '_s7_' + GG_ANIMATION_IMG_PATH + '.png');
		}
		
        unit_img_list.push('img/' + GG_ANIMATION_IMG_PATH + '/' + unit_string[i] + '_a1_' + GG_ANIMATION_IMG_PATH + '.png');
        if (unit_string[i] == 'rp') {
            unit_img_list.push('img/' + GG_ANIMATION_IMG_PATH + '/' + unit_string[i] + '_a2_' + GG_ANIMATION_IMG_PATH + '.png');
        }
    }

    var map_img_list = new Array();
    map_img_list[0] = 'img/' + GG_ANIMATION_IMG_PATH + '/map_00_' + GG_ANIMATION_IMG_PATH + '.png';
    map_img_list[1] = 'img/' + GG_ANIMATION_IMG_PATH + '/map_01_' + GG_ANIMATION_IMG_PATH + '.png';
    map_img_list[2] = 'img/' + GG_ANIMATION_IMG_PATH + '/map_02_' + GG_ANIMATION_IMG_PATH + '.png';
    map_img_list[3] = 'img/' + GG_ANIMATION_IMG_PATH + '/map_03_' + GG_ANIMATION_IMG_PATH + '.png';
    //map_img_list[4] = 'img/' + GG_ANIMATION_IMG_PATH + '/map_04_' + GG_ANIMATION_IMG_PATH + '.png';

    weapon_img_list.push('img/' + GG_ANIMATION_IMG_PATH + '/status_icon_00_' + GG_ANIMATION_IMG_PATH + '.png');
    weapon_img_list.push('img/' + GG_ANIMATION_IMG_PATH + '/status_icon_01_' + GG_ANIMATION_IMG_PATH + '.png');
    weapon_img_list.push('img/' + GG_ANIMATION_IMG_PATH + '/status_icon_02_' + GG_ANIMATION_IMG_PATH + '.png');
    weapon_img_list.push('img/' + GG_ANIMATION_IMG_PATH + '/status_icon_03_' + GG_ANIMATION_IMG_PATH + '.png');

	weapon_img_list.push('img/' + GG_ANIMATION_IMG_PATH + '/castle_' + GG_ANIMATION_IMG_PATH + '.png');
	weapon_img_list.push('img/' + GG_ANIMATION_IMG_PATH + '/hitpoint_back_' + GG_ANIMATION_IMG_PATH + '.png');

	weapon_img_list.push('img/' + GG_ANIMATION_IMG_PATH + '/flag_0' + firend_number + '_' + GG_ANIMATION_IMG_PATH + '.png');
    weapon_img_list.push('img/' + GG_ANIMATION_IMG_PATH + '/team_0' + firend_number + '_' + GG_ANIMATION_IMG_PATH + '.png');
    weapon_img_list.push('img/' + GG_ANIMATION_IMG_PATH + '/circle_0' + firend_number + '_' + GG_ANIMATION_IMG_PATH + '.png');
	weapon_img_list.push('img/' + GG_ANIMATION_IMG_PATH + '/flag_0' + enemy_number + '_' + GG_ANIMATION_IMG_PATH + '.png');
    weapon_img_list.push('img/' + GG_ANIMATION_IMG_PATH + '/team_0' + enemy_number + '_' + GG_ANIMATION_IMG_PATH + '.png');
    weapon_img_list.push('img/' + GG_ANIMATION_IMG_PATH + '/circle_0' + enemy_number + '_' + GG_ANIMATION_IMG_PATH + '.png');
	
	//weapon_img_list.push('img/' + GG_ANIMATION_IMG_PATH + '/flag_00_' + GG_ANIMATION_IMG_PATH + '.png');
	//weapon_img_list.push('img/' + GG_ANIMATION_IMG_PATH + '/flag_01_' + GG_ANIMATION_IMG_PATH + '.png');
	//weapon_img_list.push('img/' + GG_ANIMATION_IMG_PATH + '/flag_02_' + GG_ANIMATION_IMG_PATH + '.png');
	//weapon_img_list.push('img/' + GG_ANIMATION_IMG_PATH + '/flag_03_' + GG_ANIMATION_IMG_PATH + '.png');
	//weapon_img_list.push('img/' + GG_ANIMATION_IMG_PATH + '/flag_04_' + GG_ANIMATION_IMG_PATH + '.png');
	//weapon_img_list.push('img/' + GG_ANIMATION_IMG_PATH + '/flag_05_' + GG_ANIMATION_IMG_PATH + '.png');
	//weapon_img_list.push('img/' + GG_ANIMATION_IMG_PATH + '/flag_06_' + GG_ANIMATION_IMG_PATH + '.png');
	//weapon_img_list.push('img/' + GG_ANIMATION_IMG_PATH + '/flag_07_' + GG_ANIMATION_IMG_PATH + '.png');

    //weapon_img_list.push('img/' + GG_ANIMATION_IMG_PATH + '/team_00_' + GG_ANIMATION_IMG_PATH + '.png');
    //weapon_img_list.push('img/' + GG_ANIMATION_IMG_PATH + '/team_01_' + GG_ANIMATION_IMG_PATH + '.png');
    //weapon_img_list.push('img/' + GG_ANIMATION_IMG_PATH + '/team_02_' + GG_ANIMATION_IMG_PATH + '.png');
    //weapon_img_list.push('img/' + GG_ANIMATION_IMG_PATH + '/team_03_' + GG_ANIMATION_IMG_PATH + '.png');
    //weapon_img_list.push('img/' + GG_ANIMATION_IMG_PATH + '/team_04_' + GG_ANIMATION_IMG_PATH + '.png');
    //weapon_img_list.push('img/' + GG_ANIMATION_IMG_PATH + '/team_05_' + GG_ANIMATION_IMG_PATH + '.png');
    //weapon_img_list.push('img/' + GG_ANIMATION_IMG_PATH + '/team_06_' + GG_ANIMATION_IMG_PATH + '.png');
    //weapon_img_list.push('img/' + GG_ANIMATION_IMG_PATH + '/team_07_' + GG_ANIMATION_IMG_PATH + '.png');

    //weapon_img_list.push('img/' + GG_ANIMATION_IMG_PATH + '/circle_00_' + GG_ANIMATION_IMG_PATH + '.png');
    //weapon_img_list.push('img/' + GG_ANIMATION_IMG_PATH + '/circle_01_' + GG_ANIMATION_IMG_PATH + '.png');
    //weapon_img_list.push('img/' + GG_ANIMATION_IMG_PATH + '/circle_02_' + GG_ANIMATION_IMG_PATH + '.png');
    //weapon_img_list.push('img/' + GG_ANIMATION_IMG_PATH + '/circle_03_' + GG_ANIMATION_IMG_PATH + '.png');
    //weapon_img_list.push('img/' + GG_ANIMATION_IMG_PATH + '/circle_04_' + GG_ANIMATION_IMG_PATH + '.png');
    //weapon_img_list.push('img/' + GG_ANIMATION_IMG_PATH + '/circle_05_' + GG_ANIMATION_IMG_PATH + '.png');
    //weapon_img_list.push('img/' + GG_ANIMATION_IMG_PATH + '/circle_06_' + GG_ANIMATION_IMG_PATH + '.png');
    //weapon_img_list.push('img/' + GG_ANIMATION_IMG_PATH + '/circle_07_' + GG_ANIMATION_IMG_PATH + '.png');

	// level ok
    weapon_img_list.push('img/' + GG_ANIMATION_IMG_PATH + '/level_01_' + GG_ANIMATION_IMG_PATH + '.png');
    weapon_img_list.push('img/' + GG_ANIMATION_IMG_PATH + '/level_02_' + GG_ANIMATION_IMG_PATH + '.png');
    weapon_img_list.push('img/' + GG_ANIMATION_IMG_PATH + '/level_03_' + GG_ANIMATION_IMG_PATH + '.png');
    weapon_img_list.push('img/' + GG_ANIMATION_IMG_PATH + '/level_04_' + GG_ANIMATION_IMG_PATH + '.png');
    weapon_img_list.push('img/' + GG_ANIMATION_IMG_PATH + '/level_05_' + GG_ANIMATION_IMG_PATH + '.png');
    weapon_img_list.push('img/' + GG_ANIMATION_IMG_PATH + '/level_06_' + GG_ANIMATION_IMG_PATH + '.png');
    weapon_img_list.push('img/' + GG_ANIMATION_IMG_PATH + '/level_07_' + GG_ANIMATION_IMG_PATH + '.png');
    weapon_img_list.push('img/' + GG_ANIMATION_IMG_PATH + '/level_08_' + GG_ANIMATION_IMG_PATH + '.png');
    weapon_img_list.push('img/' + GG_ANIMATION_IMG_PATH + '/level_09_' + GG_ANIMATION_IMG_PATH + '.png');
    weapon_img_list.push('img/' + GG_ANIMATION_IMG_PATH + '/level_10_' + GG_ANIMATION_IMG_PATH + '.png');
    weapon_img_list.push('img/' + GG_ANIMATION_IMG_PATH + '/level_11_' + GG_ANIMATION_IMG_PATH + '.png');
    weapon_img_list.push('img/' + GG_ANIMATION_IMG_PATH + '/level_12_' + GG_ANIMATION_IMG_PATH + '.png');
    weapon_img_list.push('img/' + GG_ANIMATION_IMG_PATH + '/level_13_' + GG_ANIMATION_IMG_PATH + '.png');
    weapon_img_list.push('img/' + GG_ANIMATION_IMG_PATH + '/level_14_' + GG_ANIMATION_IMG_PATH + '.png');

	// recovery	
    weapon_img_list.push('img/' + GG_ANIMATION_IMG_PATH + '/recovery_00_' + GG_ANIMATION_IMG_PATH + '.png');
    weapon_img_list.push('img/' + GG_ANIMATION_IMG_PATH + '/recovery_01_' + GG_ANIMATION_IMG_PATH + '.png');
    weapon_img_list.push('img/' + GG_ANIMATION_IMG_PATH + '/recovery_02_' + GG_ANIMATION_IMG_PATH + '.png');
    weapon_img_list.push('img/' + GG_ANIMATION_IMG_PATH + '/recovery_03_' + GG_ANIMATION_IMG_PATH + '.png');
    weapon_img_list.push('img/' + GG_ANIMATION_IMG_PATH + '/recovery_04_' + GG_ANIMATION_IMG_PATH + '.png');
    weapon_img_list.push('img/' + GG_ANIMATION_IMG_PATH + '/recovery_05_' + GG_ANIMATION_IMG_PATH + '.png');
    weapon_img_list.push('img/' + GG_ANIMATION_IMG_PATH + '/recovery_06_' + GG_ANIMATION_IMG_PATH + '.png');
    weapon_img_list.push('img/' + GG_ANIMATION_IMG_PATH + '/recovery_07_' + GG_ANIMATION_IMG_PATH + '.png');
    weapon_img_list.push('img/' + GG_ANIMATION_IMG_PATH + '/recovery_08_' + GG_ANIMATION_IMG_PATH + '.png');
    weapon_img_list.push('img/' + GG_ANIMATION_IMG_PATH + '/recovery_09_' + GG_ANIMATION_IMG_PATH + '.png');
    weapon_img_list.push('img/' + GG_ANIMATION_IMG_PATH + '/recovery_10_' + GG_ANIMATION_IMG_PATH + '.png');
    weapon_img_list.push('img/' + GG_ANIMATION_IMG_PATH + '/recovery_11_' + GG_ANIMATION_IMG_PATH + '.png');
    weapon_img_list.push('img/' + GG_ANIMATION_IMG_PATH + '/recovery_12_' + GG_ANIMATION_IMG_PATH + '.png');
    weapon_img_list.push('img/' + GG_ANIMATION_IMG_PATH + '/recovery_13_' + GG_ANIMATION_IMG_PATH + '.png');
    weapon_img_list.push('img/' + GG_ANIMATION_IMG_PATH + '/recovery_14_' + GG_ANIMATION_IMG_PATH + '.png');
    weapon_img_list.push('img/' + GG_ANIMATION_IMG_PATH + '/recovery_15_' + GG_ANIMATION_IMG_PATH + '.png');
    weapon_img_list.push('img/' + GG_ANIMATION_IMG_PATH + '/recovery_16_' + GG_ANIMATION_IMG_PATH + '.png');
    weapon_img_list.push('img/' + GG_ANIMATION_IMG_PATH + '/recovery_17_' + GG_ANIMATION_IMG_PATH + '.png');
    weapon_img_list.push('img/' + GG_ANIMATION_IMG_PATH + '/recovery_18_' + GG_ANIMATION_IMG_PATH + '.png');
    weapon_img_list.push('img/' + GG_ANIMATION_IMG_PATH + '/recovery_19_' + GG_ANIMATION_IMG_PATH + '.png');
    weapon_img_list.push('img/' + GG_ANIMATION_IMG_PATH + '/recovery_20_' + GG_ANIMATION_IMG_PATH + '.png');
    weapon_img_list.push('img/' + GG_ANIMATION_IMG_PATH + '/recovery_21_' + GG_ANIMATION_IMG_PATH + '.png');
    weapon_img_list.push('img/' + GG_ANIMATION_IMG_PATH + '/recovery_22_' + GG_ANIMATION_IMG_PATH + '.png');
    weapon_img_list.push('img/' + GG_ANIMATION_IMG_PATH + '/recovery_23_' + GG_ANIMATION_IMG_PATH + '.png');
    weapon_img_list.push('img/' + GG_ANIMATION_IMG_PATH + '/recovery_24_' + GG_ANIMATION_IMG_PATH + '.png');
    weapon_img_list.push('img/' + GG_ANIMATION_IMG_PATH + '/recovery_25_' + GG_ANIMATION_IMG_PATH + '.png');
    weapon_img_list.push('img/' + GG_ANIMATION_IMG_PATH + '/recovery_26_' + GG_ANIMATION_IMG_PATH + '.png');
    weapon_img_list.push('img/' + GG_ANIMATION_IMG_PATH + '/recovery_27_' + GG_ANIMATION_IMG_PATH + '.png');
    weapon_img_list.push('img/' + GG_ANIMATION_IMG_PATH + '/recovery_28_' + GG_ANIMATION_IMG_PATH + '.png');
    //weapon_img_list.push('img/' + GG_ANIMATION_IMG_PATH + '/recovery_29_' + GG_ANIMATION_IMG_PATH + '.png');
    //weapon_img_list.push('img/' + GG_ANIMATION_IMG_PATH + '/recovery_30_' + GG_ANIMATION_IMG_PATH + '.png');
    
	// damage ok
	weapon_img_list.push('img/' + GG_ANIMATION_IMG_PATH + '/damage_00_' + GG_ANIMATION_IMG_PATH + '.png');
    weapon_img_list.push('img/' + GG_ANIMATION_IMG_PATH + '/damage_01_' + GG_ANIMATION_IMG_PATH + '.png');
    weapon_img_list.push('img/' + GG_ANIMATION_IMG_PATH + '/damage_02_' + GG_ANIMATION_IMG_PATH + '.png');
    weapon_img_list.push('img/' + GG_ANIMATION_IMG_PATH + '/damage_03_' + GG_ANIMATION_IMG_PATH + '.png');
    weapon_img_list.push('img/' + GG_ANIMATION_IMG_PATH + '/damage_04_' + GG_ANIMATION_IMG_PATH + '.png');
    weapon_img_list.push('img/' + GG_ANIMATION_IMG_PATH + '/damage_05_' + GG_ANIMATION_IMG_PATH + '.png');
    weapon_img_list.push('img/' + GG_ANIMATION_IMG_PATH + '/damage_06_' + GG_ANIMATION_IMG_PATH + '.png');
    weapon_img_list.push('img/' + GG_ANIMATION_IMG_PATH + '/damage_07_' + GG_ANIMATION_IMG_PATH + '.png');
    weapon_img_list.push('img/' + GG_ANIMATION_IMG_PATH + '/damage_08_' + GG_ANIMATION_IMG_PATH + '.png');
    weapon_img_list.push('img/' + GG_ANIMATION_IMG_PATH + '/damage_09_' + GG_ANIMATION_IMG_PATH + '.png');
	weapon_img_list.push('img/' + GG_ANIMATION_IMG_PATH + '/damage_10_' + GG_ANIMATION_IMG_PATH + '.png');
    weapon_img_list.push('img/' + GG_ANIMATION_IMG_PATH + '/damage_11_' + GG_ANIMATION_IMG_PATH + '.png');
    weapon_img_list.push('img/' + GG_ANIMATION_IMG_PATH + '/damage_12_' + GG_ANIMATION_IMG_PATH + '.png');
    weapon_img_list.push('img/' + GG_ANIMATION_IMG_PATH + '/damage_13_' + GG_ANIMATION_IMG_PATH + '.png');
    weapon_img_list.push('img/' + GG_ANIMATION_IMG_PATH + '/damage_14_' + GG_ANIMATION_IMG_PATH + '.png');
    weapon_img_list.push('img/' + GG_ANIMATION_IMG_PATH + '/damage_15_' + GG_ANIMATION_IMG_PATH + '.png');
    weapon_img_list.push('img/' + GG_ANIMATION_IMG_PATH + '/damage_16_' + GG_ANIMATION_IMG_PATH + '.png');
    weapon_img_list.push('img/' + GG_ANIMATION_IMG_PATH + '/damage_17_' + GG_ANIMATION_IMG_PATH + '.png');
    weapon_img_list.push('img/' + GG_ANIMATION_IMG_PATH + '/damage_18_' + GG_ANIMATION_IMG_PATH + '.png');
    weapon_img_list.push('img/' + GG_ANIMATION_IMG_PATH + '/damage_19_' + GG_ANIMATION_IMG_PATH + '.png');
	weapon_img_list.push('img/' + GG_ANIMATION_IMG_PATH + '/damage_20_' + GG_ANIMATION_IMG_PATH + '.png');
    weapon_img_list.push('img/' + GG_ANIMATION_IMG_PATH + '/damage_21_' + GG_ANIMATION_IMG_PATH + '.png');
    weapon_img_list.push('img/' + GG_ANIMATION_IMG_PATH + '/damage_22_' + GG_ANIMATION_IMG_PATH + '.png');
    weapon_img_list.push('img/' + GG_ANIMATION_IMG_PATH + '/damage_23_' + GG_ANIMATION_IMG_PATH + '.png');
    weapon_img_list.push('img/' + GG_ANIMATION_IMG_PATH + '/damage_24_' + GG_ANIMATION_IMG_PATH + '.png');
    weapon_img_list.push('img/' + GG_ANIMATION_IMG_PATH + '/damage_25_' + GG_ANIMATION_IMG_PATH + '.png');
    weapon_img_list.push('img/' + GG_ANIMATION_IMG_PATH + '/damage_26_' + GG_ANIMATION_IMG_PATH + '.png');
    weapon_img_list.push('img/' + GG_ANIMATION_IMG_PATH + '/damage_27_' + GG_ANIMATION_IMG_PATH + '.png');
    weapon_img_list.push('img/' + GG_ANIMATION_IMG_PATH + '/damage_28_' + GG_ANIMATION_IMG_PATH + '.png');
    weapon_img_list.push('img/' + GG_ANIMATION_IMG_PATH + '/damage_29_' + GG_ANIMATION_IMG_PATH + '.png');
    //weapon_img_list.push('img/' + GG_ANIMATION_IMG_PATH + '/damage_30_' + GG_ANIMATION_IMG_PATH + '.png');
    //weapon_img_list.push('img/' + GG_ANIMATION_IMG_PATH + '/damage_31_' + GG_ANIMATION_IMG_PATH + '.png');
    //weapon_img_list.push('img/' + GG_ANIMATION_IMG_PATH + '/damage_times_' + GG_ANIMATION_IMG_PATH + '.png');
    //weapon_img_list.push('img/' + GG_ANIMATION_IMG_PATH + '/damage_times_' + GG_ANIMATION_IMG_PATH + '.png');
    
	// area point up ok
	weapon_img_list.push('img/' + GG_ANIMATION_IMG_PATH + '/areapointup_01_' + GG_ANIMATION_IMG_PATH + '.png');
    weapon_img_list.push('img/' + GG_ANIMATION_IMG_PATH + '/areapointup_02_' + GG_ANIMATION_IMG_PATH + '.png');
	weapon_img_list.push('img/' + GG_ANIMATION_IMG_PATH + '/areapointup_03_' + GG_ANIMATION_IMG_PATH + '.png');
    weapon_img_list.push('img/' + GG_ANIMATION_IMG_PATH + '/areapointup_04_' + GG_ANIMATION_IMG_PATH + '.png');
	weapon_img_list.push('img/' + GG_ANIMATION_IMG_PATH + '/areapointup_05_' + GG_ANIMATION_IMG_PATH + '.png');
    weapon_img_list.push('img/' + GG_ANIMATION_IMG_PATH + '/areapointup_06_' + GG_ANIMATION_IMG_PATH + '.png');

	// area point down ok
	weapon_img_list.push('img/' + GG_ANIMATION_IMG_PATH + '/areapointdown_01_' + GG_ANIMATION_IMG_PATH + '.png');
    weapon_img_list.push('img/' + GG_ANIMATION_IMG_PATH + '/areapointdown_02_' + GG_ANIMATION_IMG_PATH + '.png');
    weapon_img_list.push('img/' + GG_ANIMATION_IMG_PATH + '/areapointdown_03_' + GG_ANIMATION_IMG_PATH + '.png');
    weapon_img_list.push('img/' + GG_ANIMATION_IMG_PATH + '/areapointdown_04_' + GG_ANIMATION_IMG_PATH + '.png');
	weapon_img_list.push('img/' + GG_ANIMATION_IMG_PATH + '/areapointdown_05_' + GG_ANIMATION_IMG_PATH + '.png');
    weapon_img_list.push('img/' + GG_ANIMATION_IMG_PATH + '/areapointdown_06_' + GG_ANIMATION_IMG_PATH + '.png');
    weapon_img_list.push('img/' + GG_ANIMATION_IMG_PATH + '/areapointdown_07_' + GG_ANIMATION_IMG_PATH + '.png');
    weapon_img_list.push('img/' + GG_ANIMATION_IMG_PATH + '/areapointdown_09_' + GG_ANIMATION_IMG_PATH + '.png');
	weapon_img_list.push('img/' + GG_ANIMATION_IMG_PATH + '/areapointdown_11_' + GG_ANIMATION_IMG_PATH + '.png');
    weapon_img_list.push('img/' + GG_ANIMATION_IMG_PATH + '/areapointdown_13_' + GG_ANIMATION_IMG_PATH + '.png');

	//
	//for (var i = 0; i < 10; i++) {
	//    weapon_img_list.push('img/' + GG_ANIMATION_IMG_PATH + '/hitpoint_plus_0' + i + '_' + GG_ANIMATION_IMG_PATH + '.png');
	//    weapon_img_list.push('img/' + GG_ANIMATION_IMG_PATH + '/level_number_0' + i + '_' + GG_ANIMATION_IMG_PATH + '.png');
	//    weapon_img_list.push('img/' + GG_ANIMATION_IMG_PATH + '/hitpoint_mainus_0' + i + '_' + GG_ANIMATION_IMG_PATH + '.png');
	//}
	
    weapon_img_list.push('img/' + GG_ANIMATION_IMG_PATH + '/status_change_00_' + GG_ANIMATION_IMG_PATH + '.png');
    //weapon_img_list.push('img/' + GG_ANIMATION_IMG_PATH + '/status_change_01_' + GG_ANIMATION_IMG_PATH + '.png');
    //weapon_img_list.push('img/' + GG_ANIMATION_IMG_PATH + '/status_change_02_' + GG_ANIMATION_IMG_PATH + '.png');
    //weapon_img_list.push('img/' + GG_ANIMATION_IMG_PATH + '/status_change_03_' + GG_ANIMATION_IMG_PATH + '.png');
    weapon_img_list.push('img/' + GG_ANIMATION_IMG_PATH + '/status_change_04_' + GG_ANIMATION_IMG_PATH + '.png');
    weapon_img_list.push('img/' + GG_ANIMATION_IMG_PATH + '/effect_' + GG_ANIMATION_IMG_PATH + '.png');
    weapon_img_list.push('img/' + GG_ANIMATION_IMG_PATH + '/arrow_' + GG_ANIMATION_IMG_PATH + '.png');
    //weapon_img_list.push('img/' + GG_ANIMATION_IMG_PATH + '/darts_' + GG_ANIMATION_IMG_PATH + '.png');
    //weapon_img_list.push('img/' + GG_ANIMATION_IMG_PATH + '/tomahawk_' + GG_ANIMATION_IMG_PATH + '.png');
    //weapon_img_list.push('img/' + GG_ANIMATION_IMG_PATH + '/tomahawkr_' + GG_ANIMATION_IMG_PATH + '.png');
    weapon_img_list.push('img/' + GG_ANIMATION_IMG_PATH + '/magic_wind_' + GG_ANIMATION_IMG_PATH + '.png');
    weapon_img_list.push('img/' + GG_ANIMATION_IMG_PATH + '/magic_witch_' + GG_ANIMATION_IMG_PATH + '.png');
    weapon_img_list.push('img/' + GG_ANIMATION_IMG_PATH + '/thunder_storm_' + GG_ANIMATION_IMG_PATH + '.png');
    weapon_img_list.push('img/' + GG_ANIMATION_IMG_PATH + '/laser_' + GG_ANIMATION_IMG_PATH + '.png');
    weapon_img_list.push('img/' + GG_ANIMATION_IMG_PATH + '/shadow_' + GG_ANIMATION_IMG_PATH + '.png');


	var cancel_pattern = gg.storage.get_cancel_pattern();    
	gg.controller_user.set_cancel_pattern(cancel_pattern);
	gg.event.set_cancel_pattern(cancel_pattern);
	
    gg.view.init_start(map_img_list, unit_img_list,
                       weapon_img_list, gg.init_load_end, zoom);  
    
};

gg.init_load_end = function() {
    var temp_url = location.search.replace(/\?/,'').split(/&/);
    var parameter = {};
    for (var i = 0, len_max = temp_url.length; i < len_max; i++) {
        var temp_word = temp_url[i].split('=');
        parameter[temp_word[0]] = temp_word[1];
    }
    if (parameter.mode == GG_MENU_MODE_ONE_ON_ONE) {
        gg.init_start();
	} else if (parameter.mode == GG_MENU_MODE_TEAM) {
        gg.init_team();
    } else if (parameter.mode == GG_MENU_MODE_DEFENCE) {
        gg.init_defence();
    } else if (parameter.mode == GG_MENU_MODE_GIANT_KILLING) {
        gg.init_giant();
    } else if (parameter.mode == GG_MENU_MODE_BENCHMARK) {
        gg.init_benchmark();
    } else if (parameter.mode == GG_MENU_MODE_CAMPAIGN) {
        if (parameter.game == 'new') {
            gg.init_new_campaign();
        } else if (parameter.game == 'load') {
            gg.init_load_campaign(parameter.load);
        }
    }
};

/////////////////////
gg.init_benchmark = function() {
    var unit = new Array();
	var debug = false;
    
    var temp_url = location.search.replace(/\?/,'').split(/&/);
    var parameter = {};
    for (var i = 0, len_max = temp_url.length; i < len_max; i++) {
        var temp_word = temp_url[i].split('=');
        parameter[temp_word[0]] = temp_word[1];
    }
    var a_g = '';
    var d_g = '';
    var m_g = '';
    var l_g = '';
    var w_g = '';
    var r_g = '';
    //var e_g = '';

    var e_a_g_a = [];
    var e_d_g_a = [];
    var e_m_g_a = [];
    var e_l_g_a = [];
    var e_w_g_a = [];
    var e_r_g_a = [];
    //var e_e_g_a = [];

	//
    if (parameter.unit50 == 'true') {
        var a_g_array = [0, 1, 2];
        var random_unit = a_g_array[Math.floor(Math.random() * a_g_array.length)];
        if (random_unit == 0) {
            parameter.unit0 = 'true';
        } else if (random_unit == 1) {
            parameter.unit1 = 'true';
        } else if (random_unit == 2) {
            parameter.unit1 = 'true';
        }
    }

    if (parameter.unit0 == 'true') {
        a_g = GG_DATA_UNIT_AX;
        e_a_g_a = [GG_DATA_UNIT_SPEAR, GG_DATA_UNIT_SABER];
    } else if (parameter.unit1 == 'true') {
        a_g = GG_DATA_UNIT_SPEAR;
        e_a_g_a = [GG_DATA_UNIT_AX, GG_DATA_UNIT_SABER];
    } else if (parameter.unit2 == 'true') {
        a_g = GG_DATA_UNIT_SABER;
        e_a_g_a = [GG_DATA_UNIT_AX, GG_DATA_UNIT_SPEAR];
    }

	//
    if (parameter.unit51 == 'true') {
        var f_g_array = [0, 1, 2];
        var random_unit = f_g_array[Math.floor(Math.random() * f_g_array.length)];
        if (random_unit == 0) {
            parameter.unit3 = 'true';
        } else if (random_unit == 1) {
            parameter.unit4 = 'true';
        } else if (random_unit == 2) {
            parameter.unit5 = 'true';
        }
    }

    if (parameter.unit3 == 'true') {
        d_g = GG_DATA_UNIT_SHILED;
        e_d_g_a = [GG_DATA_UNIT_TRIDENT, GG_DATA_UNIT_HAMMER];
    } else if (parameter.unit4 == 'true') {
        d_g = GG_DATA_UNIT_TRIDENT;
        e_d_g_a = [GG_DATA_UNIT_SHILED, GG_DATA_UNIT_HAMMER];
    } else if (parameter.unit5 == 'true') {
        d_g = GG_DATA_UNIT_HAMMER;
        e_d_g_a = [GG_DATA_UNIT_SHILED, GG_DATA_UNIT_TRIDENT];
    }

	//
    if (parameter.unit52 == 'true') {
        var f_g_array = [0, 1, 2];
        var random_unit = f_g_array[Math.floor(Math.random() * f_g_array.length)];
        if (random_unit == 0) {
            parameter.unit6 = 'true';
        } else if (random_unit == 1) {
            parameter.unit7 = 'true';
        } else if (random_unit == 2) {
            parameter.unit8 = 'true';
        }
    }

    if (parameter.unit6 == 'true') {
        m_g = GG_DATA_UNIT_RAPIER;
        e_m_g_a = [GG_DATA_UNIT_KATANA, GG_DATA_UNIT_CROW];
    } else if (parameter.unit7 == 'true') {
        m_g = GG_DATA_UNIT_KATANA;
        e_m_g_a = [GG_DATA_UNIT_RAPIER, GG_DATA_UNIT_CROW];
    } else if (parameter.unit8 == 'true') {
        m_g = GG_DATA_UNIT_CROW;
        e_m_g_a = [GG_DATA_UNIT_RAPIER, GG_DATA_UNIT_KATANA];
    }

    if (parameter.unit53 == 'true') {
        var f_g_array = [0, 1, 2];
        var random_unit = f_g_array[Math.floor(Math.random() * f_g_array.length)];
        if (random_unit == 0) {
            parameter.unit9 = 'true';
        } else if (random_unit == 1) {
            parameter.unit10 = 'true';
        } else if (random_unit == 2) {
            parameter.unit11 = 'true';
        }
    }

    if (parameter.unit9 == 'true') {
        l_g = GG_DATA_UNIT_CHAIN;
        e_l_g_a = [GG_DATA_UNIT_LONGBOW, GG_DATA_UNIT_HARP];
    } else if (parameter.unit10 == 'true') {
        l_g = GG_DATA_UNIT_LONGBOW;
        e_l_g_a = [GG_DATA_UNIT_CHAIN, GG_DATA_UNIT_HARP];
    } else if (parameter.unit11 == 'true') {
        l_g = GG_DATA_UNIT_HARP;
        e_l_g_a = [GG_DATA_UNIT_CHAIN, GG_DATA_UNIT_LONGBOW];
    }

	//
    if (parameter.unit54 == 'true') {
        var f_g_array = [0, 1, 2];
        var random_unit = f_g_array[Math.floor(Math.random() * f_g_array.length)];
        if (random_unit == 0) {
            parameter.unit12 = 'true';
        } else if (random_unit == 1) {
            parameter.unit13 = 'true';
        } else if (random_unit == 2) {
            parameter.unit14 = 'true';
        }
    }

    if (parameter.unit12 == 'true') {
        w_g = GG_DATA_UNIT_THUNDER;
        e_w_g_a = [GG_DATA_UNIT_WIND, GG_DATA_UNIT_LASER];
    } else if (parameter.unit13 == 'true') {
        w_g = GG_DATA_UNIT_WIND;
        e_w_g_a = [GG_DATA_UNIT_THUNDER, GG_DATA_UNIT_LASER];
    } else if (parameter.unit14 == 'true') {
        w_g = GG_DATA_UNIT_LASER;
        e_w_g_a = [GG_DATA_UNIT_THUNDER, GG_DATA_UNIT_WIND];
    }
	
    if (parameter.unit55 == 'true') {
        var f_g_array = [0, 1, 2];
        var random_unit = f_g_array[Math.floor(Math.random() * f_g_array.length)];
        if (random_unit == 0) {
            parameter.unit15 = 'true';
        } else if (random_unit == 1) {
            parameter.unit16 = 'true';
        } else if (random_unit == 2) {
            parameter.unit17 = 'true';
        }
    }

    if (parameter.unit15 == 'true') {
        r_g = GG_DATA_UNIT_MACE;
        e_r_g_a = [GG_DATA_UNIT_TAKT, GG_DATA_UNIT_MORNINGSTAR];
    } else if (parameter.unit16 == 'true') {
        r_g = GG_DATA_UNIT_TAKT;
        e_r_g_a = [GG_DATA_UNIT_MACE, GG_DATA_UNIT_MORNINGSTAR];
    } else if (parameter.unit17 == 'true') {
        r_g = GG_DATA_UNIT_MORNINGSTAR;
        e_r_g_a = [GG_DATA_UNIT_MACE, GG_DATA_UNIT_TAKT];
    }

    //if (parameter.unit56 == 'true') {
    //    var f_g_array = [0, 1];
    //    var random_unit = f_g_array[Math.floor(Math.random() * f_g_array.length)];
    //    if (random_unit == 0) {
    //        parameter.unit18 = 'true';
    //    } else if (random_unit == 1) {
    //        parameter.unit19 = 'true';
    //    }
    //}

    //if (parameter.unit18 == 'true') {
    //    e_g = GG_DATA_UNIT_HARP;
    //    e_e_g_a = [GG_DATA_UNIT_BELL];
    //}
    //if (parameter.unit19 == 'true') {
    //    e_g = GG_DATA_UNIT_BELL;
    //    e_e_g_a = [GG_DATA_UNIT_HARP];
    //}

	

    //////////////////
    var e_a_g = e_a_g_a[Math.floor(Math.random() * e_a_g_a.length)];
    var e_d_g = e_d_g_a[Math.floor(Math.random() * e_d_g_a.length)];
    var e_m_g = e_m_g_a[Math.floor(Math.random() * e_m_g_a.length)];
    var e_l_g = e_l_g_a[Math.floor(Math.random() * e_l_g_a.length)];
    var e_w_g = e_w_g_a[Math.floor(Math.random() * e_w_g_a.length)];
    var e_r_g = e_r_g_a[Math.floor(Math.random() * e_r_g_a.length)];
    //var e_e_g = e_e_g_a[Math.floor(Math.random() * e_e_g_a.length)];
    
    // 
    unit[0] = {};
    var friend_number = parameter.friend;
    unit[0].color = friend_number;
    //unit[0].name = GG_DATA_ARMY_NAME[unit[0].color];
    unit[0].unit = new Array();
    unit[0].position = {x:1, y:4};
    unit[0].operation = GG_DATA_OPERATION_CPU;
    //unit[0].area_point = 200;
	unit[0].upper_class_change_level = GG_DATA_UPPER_CLASS_CHANGE_LEVEL_NORMAL;
	
	//if (debug) {
	//	unit[0].operation = GG_DATA_OPERATION_CPU;
	//}
	// debug start
    //unit[0].operation = GG_DATA_OPERATION_CPU;
	//a_g = 0;
	//d_g = 3;
	//m_g = 6;
	//l_g = 9;
	//w_g = 12;
	//r_g = 15;
	
	// debug end
    
	var friend_member = [
    //        {id:a_g,                   exp:0}
    //        ,{id:d_g,                  exp:0}
    //        ,{id:m_g,                  exp:0}
    //        ,{id:l_g,                  exp:0}
    //        ,{id:w_g,                  exp:0}
    //        ,{id:r_g,                  exp:0}
      //      ,{id:e_g,                  exp:0}
        ];
	for (var i = 0; i < parameter.unit_number; i++) {
	//for (var i = 0; i < parameter.unit_number - 4; i++) {
		friend_member.push({id:GG_DATA_UNIT_SHORTSWORD, exp:0});
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
	//unit[0].unit = [];
    //unit[0].unit[0]  = {id: GG_DATA_UNIT_WIND,                     x: 5,  y: 3, exp:30, hitpoint:40,  status_changed:1, fatigue: 0};
    //unit[0].unit[1]  = {id:GG_DATA_UNIT_SHORTSWORD,                   x: 3,  y: 3, exp:30, max_move_point:0, fatigue: 10, hitpoint:1};
    //unit[0].unit[2]  = {id:GG_DATA_UNIT_SHORTSWORD,                   x: 5,  y: 3, exp:20, max_move_point:0, fatigue: 10, hitpoint:1};
	//unit[0].unit[3]  = {id:GG_DATA_UNIT_SHORTSWORD,                   x:3,  y: 1, exp:0, fatigue: 0, hitpoint:-1};
    //unit[0].unit[4]  = {id:GG_DATA_UNIT_SHORTSWORD,                   x: 3,  y: 9, exp:10, max_move_point:0, fatigue: 0, hitpoint:-20};
    //unit[0].unit[5]  = {id:GG_DATA_UNIT_SHORTSWORD,                   x: 4,  y: 6, exp:10, max_move_point:0, fatigue: 0, hitpoint:29};
    //unit[0].unit[6]  = {id:GG_DATA_UNIT_SHORTSWORD,                   x: 5,  y: 7, exp:10, max_move_point:0, fatigue: 0, hitpoint:29};
    //unit[0].unit[7]  = {id:GG_DATA_UNIT_SHORTSWORD,                   x: 7,  y: 7, exp:10, max_move_point:0, fatigue: 0, hitpoint:29};
    //unit[0].unit[8]  = {id:GG_DATA_UNIT_SHORTSWORD,                   x: 9,  y: 7, exp:10, max_move_point:0, fatigue: 0, hitpoint:29};
    //unit[0].unit[9]  = {id:GG_DATA_UNIT_SHORTSWORD,                   x:10,  y: 6, exp:10, max_move_point:0, fatigue: 0, hitpoint:29};

	// check
	//unit[0].unit[0]  = {id:GG_DATA_UNIT_SWORD,                      x:4,  y:4, exp:0, hitpoint:40};
    //unit[0].unit[1]  = {id:GG_DATA_UNIT_SWORD,                   x:4,  y:6, exp:0, hitpoint:40};
    //unit[0].unit[2]  = {id:GG_DATA_UNIT_SWORD,                  x:4,  y:2, exp:0,  hitpoint:40};
    //unit[0].unit[3]  = {id:GG_DATA_UNIT_SWORD,                    x:4,  y:8, exp:0,  hitpoint:40};
	
    //unit[0].unit[4]  = {id:GG_DATA_UNIT_FALCHION,                  x:3,  y:7, exp:0,  hitpoint:40};
    //unit[0].unit[5]  = {id:GG_DATA_UNIT_FALCHION,                   x:3,  y:3, exp:0,  hitpoint:40};
    //unit[0].unit[6]  = {id:GG_DATA_UNIT_SHORTSWORD,                    x:3,  y:9, exp:0,  hitpoint:40};
	//unit[0].unit[7]  = {id:GG_DATA_UNIT_SHORTSWORD,                  x:3,  y:1, exp:0,  hitpoint:40};

    //unit[0].unit[8]  = {id:GG_DATA_UNIT_SHORTBOW,                x:2,  y:4, exp:0,  hitpoint:40};
    //unit[0].unit[9]  = {id:GG_DATA_UNIT_SHORTBOW,                 x:2,  y:6, exp:0,  hitpoint:40};
    //unit[0].unit[10]  = {id:GG_DATA_UNIT_SHORTBOW,                x:2,  y:2, exp:0,  hitpoint:40};
    //unit[0].unit[11]  = {id:GG_DATA_UNIT_SHORTBOW,               x:2,  y:8, exp:0,  hitpoint:40};
    
	//unit[0].unit[0]  = {id:GG_DATA_UNIT_AX,                      x:4,  y:4};
    //unit[0].unit[1]  = {id:GG_DATA_UNIT_SPEAR,                   x:4,  y:6};
    //unit[0].unit[2]  = {id:GG_DATA_UNIT_SHILED,                  x:4,  y:2};
    //unit[0].unit[3]  = {id:GG_DATA_UNIT_TRIDENT,                  x:4,  y:8};
	
    //unit[0].unit[4]  = {id:GG_DATA_UNIT_RAPIER,                  x:3,  y:7};
    //unit[0].unit[5]  = {id:GG_DATA_UNIT_KATANA,                  x:3,  y:3};
    //unit[0].unit[6]  = {id:GG_DATA_UNIT_THUNDER,                 x:2,  y:4};
	//unit[0].unit[7]  = {id:GG_DATA_UNIT_WIND,                    x:2,  y:6};

    //unit[0].unit[8]  = {id:GG_DATA_UNIT_CHAIN,                   x:2,  y:2};
    //unit[0].unit[9]  = {id:GG_DATA_UNIT_LONGBOW,                 x:2,  y:8};
    //unit[0].unit[10]  = {id:GG_DATA_UNIT_LONGBOW,                x:2,  y:2, exp:0,  hitpoint:40, fatigue:50};
    //unit[0].unit[11]  = {id:GG_DATA_UNIT_CROSSBOW,               x:2,  y:8, exp:0,  hitpoint:30, fatigue:50};
	
    //unit[0].unit[12]  = {id:GG_DATA_UNIT_SWORD,                x:5,  y:7, exp:2,  hitpoint:40};
    //unit[0].unit[13]  = {id:GG_DATA_UNIT_SWORD,                 x:5,  y:3, exp:0,  hitpoint:40};
    //unit[0].unit[14]  = {id:GG_DATA_UNIT_SWORD,                x:5,  y:9, exp:0,  hitpoint:40};
    //unit[0].unit[15]  = {id:GG_DATA_UNIT_SWORD,               x:5,  y:1, exp:0,  hitpoint:40};

    //unit[0].unit[0]  = {id:f_g,                   x:4,  y:4, exp:0};
    //unit[0].unit[1]  = {id:GG_DATA_UNIT_SWORD,    x:4,  y:6, exp:0};
    //unit[0].unit[2]  = {id:GG_DATA_UNIT_SWORD,    x:4,  y:2, exp:0};
    //unit[0].unit[3]  = {id:GG_DATA_UNIT_SWORD,    x:4,  y:8, exp:0};

    //unit[0].unit[4]  = {id:s_g,                   x:3,  y:3, exp:0};
    //unit[0].unit[5]  = {id:GG_DATA_UNIT_FALCHION,  x:3,  y:7, exp:0};
    //unit[0].unit[6]  = {id:GG_DATA_UNIT_FALCHION,  x:3,  y:1, exp:0};
    //unit[0].unit[7]  = {id:GG_DATA_UNIT_FALCHION,  x:3,  y:9, exp:0};

    //unit[0].unit[8]  = {id:t_g,                   x:2,  y:4, exp:0};
    //unit[0].unit[9]  = {id:GG_DATA_UNIT_SHORTBOW, x:2,  y:6, exp:0};
    //unit[0].unit[10] = {id:GG_DATA_UNIT_SHORTBOW, x:2,  y:2, exp:0};
    //unit[0].unit[11] = {id:GG_DATA_UNIT_SHORTBOW, x:2,  y:8, exp:0};
    
    //unit[0].unit[7]  = {id:GG_DATA_UNIT_FALCHION,  x:6,  y:8, exp:0};
    //unit[0].unit[10] = {id:GG_DATA_UNIT_SHORTBOW, x:5,  y:9, exp:0};
    //unit[0].unit[11] = {id:GG_DATA_UNIT_SHORTBOW, x:7,  y:9, exp:0};
    
    // R
    unit[1] = {};
    var enemy_number = parameter.enemy;
    //unit[1].color = GG_DATA_ARMY_COLOR_RED;
    unit[1].color = enemy_number;
    //unit[1].name = GG_DATA_ARMY_NAME[unit[1].color];
    unit[1].unit = new Array();
    unit[1].position = {x:9, y:4};
    unit[1].operation = GG_DATA_OPERATION_CPU;
	// debug
	//unit[1].area_point = -1;
	unit[1].upper_class_change_level = GG_DATA_UPPER_CLASS_CHANGE_LEVEL_NORMAL;

	unit[1].add_attack_point = 0;
	unit[1].add_defence_point = 0;
	unit[1].add_recovery_point = 0;
	if (parameter.hande == -1) {
		unit[1].add_attack_point = -2;
	} else if (parameter.hande == 1) {
		unit[1].add_attack_point = 2;
	} else if (parameter.hande == 2) {
		unit[1].add_attack_point = 2;
		unit[1].add_defence_point = 2;
	} else if (parameter.hande == 3) {
		unit[1].add_attack_point = 2;
		unit[1].add_defence_point = 2;
		unit[1].add_recovery_point = 2;
	}
	// debug start
	//e_a_g = 1;
	//e_d_g = 4;
	//e_m_g = 7;
	//e_l_g = 10;
	//e_w_g = 13;
	//e_r_g = 16;
	
	// debug end
	
	
    var friend_member = [
    //        {id:e_a_g,                   exp:0}
    //        ,{id:e_d_g,                   exp:0}
    //        ,{id:e_m_g,                   exp:0}
    //        ,{id:e_l_g,                   exp:0}
    //        ,{id:e_w_g,                   exp:0}
    //        ,{id:e_r_g,                   exp:0}
         //   ,{id:e_e_g,                   exp:0}
        ];
	for (var i = 0; i < parameter.unit_number; i++) {
	//for (var i = 0; i < parameter.unit_number - 4; i++) {
		friend_member.push({id: GG_DATA_UNIT_SHORTSWORD, exp: 0});
	}

    var position = GG_DATA_UNIT_POSITION_ENEMY[friend_member.length];
    var position_count = 0;
    // sort
    for (var i = 0; i < GG_DATA_POSTION_FRIEND.length; i++) {
        for (var j = 0; j < friend_member.length; j++) {
            if (friend_member[j].id != GG_DATA_POSTION_FRIEND[i]) {
                continue;
            }
            //
            unit[1].unit[unit[1].unit.length] = {id: friend_member[j].id,
                                                     x: position[position_count].x,
                                                     y: position[position_count].y, exp:0};
            position_count++;
        }
    }

	//unit[1].unit = [];
	//unit[1].unit[0]  = {id:GG_DATA_UNIT_SWORD,        x:2,  y:2, exp:0, move_point:0, fatigue:0, hitpoint:20};
	//unit[1].unit[1]  = {id:GG_DATA_UNIT_TRIDENT,       x:4,  y:2, exp:0, move_point:0, fatigue:0, hitpoint:1};
	//unit[1].unit[2]  = {id:GG_DATA_UNIT_SWORD,        x:6,  y:2, exp:0, move_point:0, fatigue:0, hitpoint:1};
	
	//unit[1].unit[3]  = {id:GG_DATA_UNIT_SWORD,        x:8,  y:2, exp:0, move_point:0, fatigue:0};

	//unit[1].unit[4]  = {id:GG_DATA_UNIT_TRIDENT,        x:6,  y:2, exp:0, move_point:0, fatigue:0};
	//unit[1].unit[5]  = {id:GG_DATA_UNIT_SHORTSWORD,   x:9,  y:3, exp:0, move_point:0, fatigue:0};

	//unit[1].unit[6]  = {id:GG_DATA_UNIT_SWORD,        x:6,  y:2, exp:0, move_point:0, fatigue:0};	
	//unit[1].unit[7]  = {id:GG_DATA_UNIT_SWORD,        x:7,  y:1, exp:0, move_point:0, fatigue:0};
	//unit[1].unit[8]  = {id:GG_DATA_UNIT_SWORD,        x:11,  y:1, exp:0, move_point:0, fatigue:10};
	//unit[1].unit[9]  = {id:GG_DATA_UNIT_SWORD,        x:12,  y:2, exp:0, max_move_point:0, fatigue:10};
	//unit[1].unit[10] = {id:GG_DATA_UNIT_SWORD,        x:11,  y:3, exp:0, max_move_point:0, fatigue:10};
	//unit[1].unit[11] = {id:GG_DATA_UNIT_TRIDENT,      x:4,  y:2, exp:0, max_move_point:0, fatigue:0};
    //unit[1].unit[0]  = {id:e_f_g,                 x:7,  y:5, max_move_point:0 };
    //unit[1].unit[1]  = {id:GG_DATA_UNIT_SWORD,    x:10,  y:4, exp:0};
    //unit[1].unit[2]  = {id:GG_DATA_UNIT_SWORD,    x:10,  y:8, exp:0};
    //unit[1].unit[3]  = {id:GG_DATA_UNIT_SWORD,    x:10,  y:2, exp:0};

    //unit[1].unit[4]  = {id:e_s_g,                 x:11,  y:7, exp:0};
    //unit[1].unit[5]  = {id:GG_DATA_UNIT_FALCHION,  x:11,  y:3, exp:0};
    //unit[1].unit[6]  = {id:GG_DATA_UNIT_FALCHION,  x:11,  y:9, exp:0};
    //unit[1].unit[7]  = {id:GG_DATA_UNIT_FALCHION,  x:11,  y:1, exp:0};

    //unit[1].unit[8]  = {id:e_t_g,                 x:12,  y:6, exp:0};
    //unit[1].unit[9]  = {id:GG_DATA_UNIT_SHORTBOW, x:12,  y:4, exp:0};
    //unit[1].unit[10] = {id:GG_DATA_UNIT_SHORTBOW, x:12,  y:8, exp:0};
    //unit[1].unit[11] = {id:GG_DATA_UNIT_SHORTBOW, x:12,  y:2, exp:0};

    //unit[1].unit[0]  = {id:GG_DATA_UNIT_FALCHION,                 x:10,  y:6, exp:30};
	
	// check
    //unit[1].unit[0]  = {id:GG_DATA_UNIT_AX,      x:10,  y:6};
    //unit[1].unit[1]  = {id:GG_DATA_UNIT_SPEAR,   x:10,  y:4};
    //unit[1].unit[2]  = {id:GG_DATA_UNIT_SHILED,  x:10,  y:8};
    //unit[1].unit[3]  = {id:GG_DATA_UNIT_TRIDENT,  x:10,  y:2};
    //unit[1].unit[4]  = {id:GG_DATA_UNIT_RAPIER,  x:11,  y:3};
    //unit[1].unit[5]  = {id:GG_DATA_UNIT_KATANA,  x:11,  y:7};
    //unit[1].unit[6]  = {id:GG_DATA_UNIT_THUNDER, x:12,  y:6};
    //unit[1].unit[7]  = {id:GG_DATA_UNIT_WIND,    x:12,  y:4};

    //unit[1].unit[8]  = {id:GG_DATA_UNIT_CHAIN,   x:12,  y:8};
    //unit[1].unit[9]  = {id:GG_DATA_UNIT_LONGBOW, x:12,  y:2};
    //unit[1].unit[10] = {id:GG_DATA_UNIT_LONGBOW, x:12,  y:8, exp:0, hitpoint:40, fatigue:50};
    //unit[1].unit[11] = {id:GG_DATA_UNIT_CROSSBOW, x:12,  y:2, exp:0, hitpoint:40, fatigue:50};

    if (parameter.map == GG_DATA_MAP_ARRAY[0]) {
        var map = GG_DATA_MAP;
    } else if (parameter.map == GG_DATA_MAP_ARRAY[1]) {
        var map = gg.map.create_river_random_map(GG_DATA_MAP_ORGINAL_PLANE);
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

	//order = 0;
	//area_map = JSON.parse(JSON.stringify(map));
	//for (var i = 0; i < area_map.length; i++) {
	//	for (var j = 0; j < area_map[i].length; j++) {
	//		if (area_map[i][j] == -1) {
	//			area_map[i][j] = -2;
	//		} else if (area_map[i][j] != 1) {
	//			area_map[i][j] = -1;
	//		}
	//	}
	//}


	// benchmark start
	//unit[0].operation = GG_DATA_OPERATION_CPU;
	order = 0;
	//unit[0].area_point = 120;
	//unit[1].area_point = 120;

    gg.controller.start(unit, map, parseFloat(parameter.hande), gg.data.zoom, true, game_end_hitpoint,
                        parseInt(parameter.hitpoint), parameter.map, parameter.mode, 0, order, 0
                        , area_map, parameter.unit_uniq, null,
						GG_DATA_GAME_END_UNIT_DIFF, parameter.lost, parameter.level_up);

};
////////////////


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
    
    var temp_url = location.search.replace(/\?/,'').split(/&/);
    var parameter = {};
    for (var i = 0, len_max = temp_url.length; i < len_max; i++) {
        var temp_word = temp_url[i].split('=');
        parameter[temp_word[0]] = temp_word[1];
    }
    
    // 
    unit[0] = {};
    var friend_number = parameter.friend;
    unit[0].color = friend_number;
    unit[0].name = GG_DATA_ARMY_NAME[unit[0].color];
    unit[0].unit = new Array();
    unit[0].operation = GG_DATA_OPERATION_CPU;
    unit[0].position = {x:1, y:4};
    
    unit[0].unit[0]  = {id:GG_DATA_UNIT_AX,       x:4,  y:4, exp:0};
    unit[0].unit[1]  = {id:GG_DATA_UNIT_SPEAR,    x:4,  y:6, exp:0};
    unit[0].unit[2]  = {id:GG_DATA_UNIT_SHILED,   x:4,  y:2, exp:0};
    unit[0].unit[3]  = {id:GG_DATA_UNIT_FLAG,     x:4,  y:8, exp:0};

    unit[0].unit[4]  = {id:GG_DATA_UNIT_RAPIER,   x:3,  y:3, exp:0};
    unit[0].unit[5]  = {id:GG_DATA_UNIT_NINJA,    x:3,  y:7, exp:0};
    unit[0].unit[6]  = {id:GG_DATA_UNIT_MACE,     x:3,  y:1, exp:0};
    unit[0].unit[7]  = {id:GG_DATA_UNIT_CHAIN,   x:3,  y:9, exp:0};

    unit[0].unit[8]  = {id:GG_DATA_UNIT_TOMAHAWK, x:2,  y:4, exp:0};
    unit[0].unit[9]  = {id:GG_DATA_UNIT_JAVELIN,  x:2,  y:6, exp:0};
    unit[0].unit[10] = {id:GG_DATA_UNIT_LONGBOW,  x:2,  y:2, exp:0};
    unit[0].unit[11] = {id:GG_DATA_UNIT_CROSSBOW, x:2,  y:8, exp:0};    

    //unit[0].unit[0]  = {id:GG_DATA_UNIT_SWORD,       x:4,  y:6, exp:0, max_move_point:0};
   
    // R
    unit[1] = {};
    var enemy_number = parameter.enemy;
    unit[1].color = enemy_number;
    unit[1].name = GG_DATA_ARMY_NAME[unit[1].color];
    unit[1].unit = new Array();
    unit[1].position = {x:9, y:4};
    unit[1].operation = GG_DATA_OPERATION_CPU;
    //unit[0].operation = GG_DATA_OPERATION_USER;

    unit[1].unit[0]  = {id:GG_DATA_UNIT_AX,       x:10,  y:6, exp:0};
    unit[1].unit[1]  = {id:GG_DATA_UNIT_SPEAR,    x:10,  y:4, exp:0};
    unit[1].unit[2]  = {id:GG_DATA_UNIT_SHILED,   x:10,  y:8, exp:0};
    unit[1].unit[3]  = {id:GG_DATA_UNIT_FLAG,     x:10,  y:2, exp:0};

    unit[1].unit[4]  = {id:GG_DATA_UNIT_RAPIER,   x:11,  y:7, exp:0};
    unit[1].unit[5]  = {id:GG_DATA_UNIT_NINJA,    x:11,  y:3, exp:0};
    unit[1].unit[6]  = {id:GG_DATA_UNIT_MACE,     x:11,  y:9, exp:0};
    unit[1].unit[7]  = {id:GG_DATA_UNIT_CHAIN,   x:11,  y:1, exp:0};

    unit[1].unit[8]  = {id:GG_DATA_UNIT_TOMAHAWK, x:12,  y:6, exp:0};
    unit[1].unit[9]  = {id:GG_DATA_UNIT_JAVELIN,  x:12,  y:4, exp:0};
    unit[1].unit[10] = {id:GG_DATA_UNIT_LONGBOW,  x:12,  y:8, exp:0};
    unit[1].unit[11] = {id:GG_DATA_UNIT_CROSSBOW, x:12,  y:2, exp:0};
    
    if (parameter.map == GG_DATA_MAP_ARRAY[0]) {
        var map = GG_DATA_MAP_SELECT_PLANE;
    } else if (parameter.map == GG_DATA_MAP_ARRAY[1]) {
        var map = GG_DATA_MAP;
    } else if (parameter.map == GG_DATA_MAP_ARRAY[2]) {
        var map = GG_DATA_MAP_SELECT_RIVER;
    } else if (parameter.map == GG_DATA_MAP_ARRAY[3]) {
        var map = gg.map.create_random_map(GG_DATA_MAP_SELECT_PLANE);
    }

    GG_DATA_LEVEL_UP_ADD_HITPOINT_POINT = Math.floor(parseInt(parameter.hitpoint) * 0.05);
    GG_DATA_LIFE_20 = Math.floor(parseInt(parameter.hitpoint) * 0.25);
    GG_DATA_LIFE_50 = Math.floor(parseInt(parameter.hitpoint) * 0.5); 
        
    var game_end_hitpoint = Math.floor(parameter.hitpoint * 7);
    gg.controller.start(unit, map, parameter.hande, gg.data.zoom, true, {x:7, y:5}, game_end_hitpoint,
                        parseInt(parameter.hitpoint), parameter.map, parameter.mode, 0, null, 0, 0, parameter.map, null, GG_DATA_CLASS_CHANGE_GAME_UNIQ, null,
						GG_DATA_GAME_END_UNIT_DIFF);
    
};
////////////////


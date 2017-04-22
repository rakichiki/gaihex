gg.storage = {};
var GG_STORAGE_LOCAL_STORAGE_KEY                 = 'GHEX';
var GG_STORAGE_LOCAL_STORAGE_KEY_RESULT          = 'GHEX_RESULT';
var GG_STORAGE_LOCAL_STORAGE_KEY_RECODE          = 'GHEX_RECODE';
var GG_STORAGE_LOCAL_STORAGE_KEY_SETTING         = 'GHEX_SETTING';
var GG_STORAGE_LOCAL_STORAGE_KEY_OPTIONS         = 'GHEX_OPTIONS';
var GG_STORAGE_LOCAL_STORAGE_CAMPAIGN_RESULT_KEY = 'GAIHEX_CAMPAIGN';
var GG_STORAGE_LOCAL_STORAGE_TEAM_RESULT_KEY     = 'GAIHEX_TEAM';

var GG_STORAGE_MAX_SAVE_DATA = 100;

gg.storage.load_recode = function() {

	var save_data = localStorage.getItem(GG_STORAGE_LOCAL_STORAGE_KEY_RECODE);
	var result;
	if (save_data == null || save_data == '') {
		save_data = new Array(5);
		for (var i = 0; i < save_data.length; i++) {
			save_data[i] = {};
			save_data[i].hande = new Array(GG_DATA_HANDE_ARRAY.length - 1);
			for (var j = 0; j < save_data[i].hande.length; j++) {
				save_data[i].hande[j] = {win:0, game:0};
			}
			
			save_data[i].team = new Array(GG_DATA_TEAM_ARRAY.length);
			for (var j = 0; j < save_data[i].team.length; j++) {
				save_data[i].team[j] = {win:0, game:0};
			}
		}
		localStorage.setItem(GG_STORAGE_LOCAL_STORAGE_KEY_RECODE, JSON.stringify(save_data));
		result = save_data;
	
	} else {
		result = JSON.parse(save_data);
	} 
	return result;

};

gg.storage.save_recode = function(data) {
	if (data.hande < 0) {
		return;
	}
	var game_mode = GG_DATA_GAME_MODE_ARRAY.indexOf(data.game_mode);
	if (game_mode == -1) {
		return;
	}

	var temp_save_data = localStorage.getItem(GG_STORAGE_LOCAL_STORAGE_KEY_RECODE);

	var save_data = new Array();
	if (temp_save_data != null && temp_save_data != '') {
		save_data = JSON.parse(temp_save_data);
	} else {
		save_data = new Array(5);
		for (var i = 0; i < save_data.length; i++) {
			save_data[i] = {};
			save_data[i].hande = new Array(GG_DATA_HANDE_ARRAY.length - 1);
			for (var j = 0; j < save_data[i].hande.length; j++) {
				save_data[i].hande[j] = {win:0, game:0};
			}
			
			save_data[i].team = new Array(GG_DATA_TEAM_ARRAY.length);
			for (var j = 0; j < save_data[i].team.length; j++) {
				save_data[i].team [j] = {win:0, game:0};
			}
		}
	}

	var team = data.team;
	//var hande = GG_DATA_HANDE_ARRAY.indexOf(data.hande) - 1;
	//if (hande < 0) {
	//	return;
	//}
	if (data.win != null) {
		save_data[game_mode].hande[data.hande].win += 1;
		save_data[game_mode].team[team].win   += 1;
	}
	if (data.game != null) {
		save_data[game_mode].hande[data.hande].game += 1;
		save_data[game_mode].team[team].game   += 1;
	}
	
	localStorage.setItem(GG_STORAGE_LOCAL_STORAGE_KEY_RECODE, JSON.stringify(save_data));
};

gg.storage.load_options = function() {
	var temp_save_data = localStorage.getItem(GG_STORAGE_LOCAL_STORAGE_KEY_OPTIONS);
	var result;
	if (temp_save_data == null || temp_save_data == '') {
		result = {
			 oneonone: {
				 hitpoint: '40'
				,map: 'random'
				,unit_number: '10'
				,hande: '-4'
				,unit_uniq: 'team'
				,lost: '1-3'
				,level_up: 'skill'
			 }
			,campaign: {
				 hitpoint: '40'
				,map: 'random'
				,unit_number: '-'
				,hande: '-4'
				,unit_uniq: 'team'
				,lost: '1-3'
				,level_up: 'skill'
			}
			,defence: {
				 hitpoint: '40'
				,map: 'random'
				,unit_number: '10'
				,hande: '-4'
				,unit_uniq: 'game'
				,lost: '1-3'
				,level_up: 'skill'
			}
			,giant: {
				 hitpoint: '40'
				,map: 'random'
				,unit_number: '10'
				,hande: '-4'
				,unit_uniq: 'team'
				,lost: '1-3'
				,level_up: 'skill'
			}
			,team: {
				 hitpoint: '40'
				,map: 'random'
				,unit_number: '10'
				,hande: '-4'
				,unit_uniq: 'game'
				,lost: '1-3'
				,level_up: 'skill'
			}
		};
		localStorage.setItem(GG_STORAGE_LOCAL_STORAGE_KEY_OPTIONS, JSON.stringify(result));

	} else {
		result = JSON.parse(temp_save_data);
	} 
	return result;
};

gg.storage.save_options = function(data) {
	localStorage.setItem(GG_STORAGE_LOCAL_STORAGE_KEY_OPTIONS, JSON.stringify(data));
	
};

gg.storage.load_result = function() {
	var temp_save_data = localStorage.getItem(GG_STORAGE_LOCAL_STORAGE_KEY_RESULT);
	var result;
	if (temp_save_data == null || temp_save_data == '') {
		result = new Array(5);
		for (var i = 0; i < result.length; i++) {
			result[i] = {};
			result[i].hitpoint = new Array(GG_DATA_HITPOINT_ARRAY.length);
			result[i].map = new Array(GG_DATA_MAP_ARRAY.length);
			result[i].unit_number = new Array(GG_DATA_UNIT_NUMBER_ARRAY.length);
			result[i].team = new Array(GG_DATA_TEAM_ARRAY.length);
			result[i].enemy_team = new Array(GG_DATA_TEAM_ARRAY.length);
		}
	} else {
		result = JSON.parse(temp_save_data);
	} 
	return result;
};

gg.storage.save_result = function(data) {
	if (data.hande < 0) {
		return;
	}

	var temp_save_data = localStorage.getItem(GG_STORAGE_LOCAL_STORAGE_KEY_RESULT);
	//var save_data_str = '';
	var save_data = new Array();
	if (temp_save_data != null && temp_save_data != '') {
		save_data = JSON.parse(temp_save_data);
	} else {
		save_data = new Array(5);
		for (var i = 0; i < save_data.length; i++) {
			save_data[i] = {};
			save_data[i].hitpoint = new Array(GG_DATA_HITPOINT_ARRAY.length);
			save_data[i].map = new Array(GG_DATA_MAP_ARRAY.length);
			save_data[i].unit_number = new Array(GG_DATA_UNIT_NUMBER_ARRAY.length);
			save_data[i].team = new Array(GG_DATA_TEAM_ARRAY.length);
			save_data[i].enemy_team = new Array(GG_DATA_TEAM_ARRAY.length);
		}
	}
	var game_mode = GG_DATA_GAME_MODE_ARRAY.indexOf(data.game_mode);
	if (game_mode == -1) {
		return;
	}
	var hitpoint = GG_DATA_HITPOINT_ARRAY.indexOf(data.hitpoint);
	var map = GG_DATA_MAP_ARRAY.indexOf(data.map);
	var unit_number = GG_DATA_UNIT_NUMBER_ARRAY.indexOf(data.unit_number);
	//var team = GG_DATA_TEAM_ARRAY.indexOf(data.team);
	var team = data.team;
	var enemy_team = data.enemy_team;
	//var hande = GG_DATA_HANDE_ARRAY.indexOf(data.hande);
	
	if (save_data[game_mode] == null) {
		save_data[game_mode] = {};
		save_data[game_mode].hitpoint = new Array(GG_DATA_HITPOINT_ARRAY.length);
		save_data[game_mode].map = new Array(GG_DATA_MAP_ARRAY.length);
		save_data[game_mode].unit_number = new Array(GG_DATA_UNIT_NUMBER_ARRAY.length);
		save_data[game_mode].team = new Array(GG_DATA_TEAM_ARRAY.length);
		save_data[game_mode].enemy_team = new Array(GG_DATA_TEAM_ARRAY.length);
	}
	
	if (save_data[game_mode].hitpoint[hitpoint] == null ||
		save_data[game_mode].hitpoint[hitpoint] < data.hande) {
		save_data[game_mode].hitpoint[hitpoint] = data.hande;		
	}
	if (save_data[game_mode].map[map] == null ||
		save_data[game_mode].map[map] < data.hande) {
		save_data[game_mode].map[map] = data.hande;		
	}
	if (save_data[game_mode].unit_number[unit_number] == null ||
		save_data[game_mode].unit_number[unit_number] < data.hande) {
		save_data[game_mode].unit_number[unit_number] = data.hande;		
	}
	if (save_data[game_mode].team[team] == null ||
		save_data[game_mode].team[team] < data.hande) {
		save_data[game_mode].team[team] = data.hande;		
	}
	if (save_data[game_mode].enemy_team == null) {
		save_data[game_mode].enemy_team = [];
	}
	if (save_data[game_mode].enemy_team[enemy_team] == null ||
		save_data[game_mode].enemy_team[enemy_team] < data.hande) {
		save_data[game_mode].enemy_team[enemy_team] = data.hande;		
	}
	
	localStorage.setItem(GG_STORAGE_LOCAL_STORAGE_KEY_RESULT, JSON.stringify(save_data));
};

gg.storage.save = function(data, key) {
	var temp_save_data = localStorage.getItem(key);
	var save_data_str = '';
	var save_data = new Array();
	//var now = new Date();
	//data.date = now.getFullYear() + '/' + (now.getMonth() + 1) + '/' + now.getDate() + ' ' + now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds();
	if (temp_save_data != null &&
		temp_save_data != '') {
		save_data = JSON.parse(temp_save_data);

		if (save_data.length >= GG_STORAGE_MAX_SAVE_DATA) {
			save_data.splice(0, 1);
		}
	}
	save_data[save_data.length] = data;

	localStorage.setItem(key, JSON.stringify(save_data));
};
gg.storage.load_last = function(key) {
	var temp_save_data = localStorage.getItem(key);
	var save_data;
	var result;
	if (temp_save_data != null || temp_save_data != '') {
		save_data = JSON.parse(temp_save_data);
		result = save_data[save_data.length - 1];
	} else {
		result = null;
	}
	return result;

};

gg.storage.set_speed = function(speed) {
	var temp_save_data = localStorage.getItem(GG_STORAGE_LOCAL_STORAGE_KEY_SETTING);
	var save_data;
	if (temp_save_data != null) {
		save_data = JSON.parse(temp_save_data);
	} else {
		save_data = {};

	}
	save_data.speed = speed;
	localStorage.setItem(GG_STORAGE_LOCAL_STORAGE_KEY_SETTING, JSON.stringify(save_data));
};

gg.storage.set_audio = function(audio) {
	var temp_save_data = localStorage.getItem(GG_STORAGE_LOCAL_STORAGE_KEY_SETTING);
	var save_data;
	if (temp_save_data != null) {
		save_data = JSON.parse(temp_save_data);
	} else {
		save_data = {};

	}
	save_data.audio = audio;
	localStorage.setItem(GG_STORAGE_LOCAL_STORAGE_KEY_SETTING, JSON.stringify(save_data));
};

gg.storage.set_dialog = function(dialog) {
	var temp_save_data = localStorage.getItem(GG_STORAGE_LOCAL_STORAGE_KEY_SETTING);
	var save_data;
	if (temp_save_data != null) {
		save_data = JSON.parse(temp_save_data);
	} else {
		save_data = {};

	}
	save_data.dialog = dialog;
	localStorage.setItem(GG_STORAGE_LOCAL_STORAGE_KEY_SETTING, JSON.stringify(save_data));
};

gg.storage.set_hitpoint = function(hitpoint) {
	var temp_save_data = localStorage.getItem(GG_STORAGE_LOCAL_STORAGE_KEY_SETTING);
	var save_data;
	if (temp_save_data != null) {
		save_data = JSON.parse(temp_save_data);
	} else {
		save_data = {};

	}
	save_data.hitpoint = hitpoint;
	localStorage.setItem(GG_STORAGE_LOCAL_STORAGE_KEY_SETTING, JSON.stringify(save_data));
};

gg.storage.set_level = function(level) {
	var temp_save_data = localStorage.getItem(GG_STORAGE_LOCAL_STORAGE_KEY_SETTING);
	var save_data;
	if (temp_save_data != null) {
		save_data = JSON.parse(temp_save_data);
	} else {
		save_data = {};

	}
	save_data.level = level;
	localStorage.setItem(GG_STORAGE_LOCAL_STORAGE_KEY_SETTING, JSON.stringify(save_data));
};

gg.storage.set_cancel_pattern = function(cancel_pattern) {
	var temp_save_data = localStorage.getItem(GG_STORAGE_LOCAL_STORAGE_KEY_SETTING);
	var save_data;
	if (temp_save_data != null) {
		save_data = JSON.parse(temp_save_data);
	} else {
		save_data = {};

	}
	save_data.cancel_pattern = cancel_pattern;
	localStorage.setItem(GG_STORAGE_LOCAL_STORAGE_KEY_SETTING, JSON.stringify(save_data));
};

gg.storage.get_speed = function() {
	var temp_save_data = localStorage.getItem(GG_STORAGE_LOCAL_STORAGE_KEY_SETTING);
	var result ;
	if (temp_save_data != null) {
		var save_data = JSON.parse(temp_save_data);
		if (save_data.speed != undefined) {
			result = save_data.speed;
			if (result == null) {
				result = GG_DATA_SPEED_ARRAY[2];
			}
		} else {
			result = GG_DATA_SPEED_ARRAY[2];
		}
	} else {
		result = GG_DATA_SPEED_ARRAY[2];
	}
	return result;
};

gg.storage.get_audio = function() {
	var temp_save_data = localStorage.getItem(GG_STORAGE_LOCAL_STORAGE_KEY_SETTING);
	var result ;
	if (temp_save_data != null) {
		var save_data = JSON.parse(temp_save_data);
		if (save_data.audio != undefined) {
			result = save_data.audio;
			if (result == null) {
				result = GG_DATA_AUDIO_ARRAY[0];
			}
		} else {
			result = GG_DATA_AUDIO_ARRAY[0];
		}
	} else {
		result = GG_DATA_AUDIO_ARRAY[0];
	}
	return result;
};

gg.storage.get_dialog = function() {
	var temp_save_data = localStorage.getItem(GG_STORAGE_LOCAL_STORAGE_KEY_SETTING);
	var result;
	if (temp_save_data != null) {
		var save_data = JSON.parse(temp_save_data);
		if (save_data.dialog != undefined) {
			result = save_data.dialog;
			if (result == null) {
				result = GG_DATA_DIALOG_ARRAY[0];
			}
		} else {
			result = GG_DATA_DIALOG_ARRAY[0];
		}
	} else {
		result = GG_DATA_DIALOG_ARRAY[0];
	}
	return result;
};

gg.storage.get_hitpoint = function() {
	var temp_save_data = localStorage.getItem(GG_STORAGE_LOCAL_STORAGE_KEY_SETTING);
	var result;
	if (temp_save_data != null) {
		var save_data = JSON.parse(temp_save_data);
		if (save_data.hitpoint != undefined) {
			result = save_data.hitpoint;
			if (result == null) {
				result = GG_DATA_VIEW_HITPOINT_ARRAY[0];
			}
		} else {
			result = GG_DATA_VIEW_HITPOINT_ARRAY[0];
		}
	} else {
		result = GG_DATA_VIEW_HITPOINT_ARRAY[0];
	}
	return result;
};
gg.storage.get_level = function() {
	var temp_save_data = localStorage.getItem(GG_STORAGE_LOCAL_STORAGE_KEY_SETTING);
	var result;
	if (temp_save_data != null) {
		var save_data = JSON.parse(temp_save_data);
		if (save_data.level != undefined) {
			result = save_data.level;
			if (result == null) {
				result = GG_DATA_VIEW_LEVEL_ARRAY[1];
			}
		} else {
			result = GG_DATA_VIEW_HITPOINT_ARRAY[1];
		}
	} else {
		result = GG_DATA_VIEW_HITPOINT_ARRAY[1];
	}
	return result;
};

gg.storage.get_cancel_pattern = function() {
	var temp_save_data = localStorage.getItem(GG_STORAGE_LOCAL_STORAGE_KEY_SETTING);
	var result;
	if (temp_save_data != null) {
		var save_data = JSON.parse(temp_save_data);
		if (save_data.cancel_pattern != undefined) {
			result = save_data.cancel_pattern;
			if (result == null) {
				result = GG_DATA_VIEW_CANCEL_PATTERN_ARRAY[0];
			}
		} else {
			result = GG_DATA_VIEW_CANCEL_PATTERN_ARRAY[0];
		}
	} else {
		result = GG_DATA_VIEW_CANCEL_PATTERN_ARRAY[0];
	}
	return result;
};

gg.storage.get_load = function(key, id) {
	var temp_save_data = localStorage.getItem(key);
	var save_data;
	var result;
	if (temp_save_data != null) {
		save_data = JSON.parse(temp_save_data);
		if (save_data.length - 1 < id) {
			result = null;
		} else {
			result = save_data[id];
		}
		
	} else {
		result = null;
	}

	return result;
};


gg.storage.load = function(key) {
	var temp_save_data = localStorage.getItem(key);
	var save_data;
	if (temp_save_data != null) {
		save_data = JSON.parse(temp_save_data);
	} else {
		save_data = new Array();
	}

	return save_data;
};

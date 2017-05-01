gg.menu = {};

gg.menu.data = {};
gg.menu.data.canvas_height;
gg.menu.data.win_str;
gg.menu.data.callback;
gg.menu.data.animation = {};
gg.menu.data.save_data = [];
gg.menu.data.save_data_count = 0;

var GG_MENU_GRAPH_ID = 'graph';

var GG_MENU_GRAPH_SUM_HITPOINT       = 0;
var GG_MENU_GRAPH_AREA_POINT         = 1;
//var GG_MENU_GRAPH_EXP = 2;
var GG_MENU_GRAPH_DEFENCE_DAMAGE     = 2;
var GG_MENU_GRAPH_UNIT_NUMBER        = 3;
var GG_MENU_GRAPH_FATIGUE            = 4;
var GG_MENU_GRAPH_AVERAGE_LEVEL      = 5;
var GG_MENU_GRAPH_AVERAGE_POSITION   = 6;
var GG_MENU_GRAPH_SUM_ATTACK_DEFENCE = 7;
var GG_MENU_GRAPH_DO_UNIT_NUMBER     = 8;
var GG_MENU_GRAPH_RECOVERY           = 9;
var GG_MENU_GRAPH_MOVE_DISTANCE      = 10;


var GG_MENU_GRAPH_CLEAR = -1;
var GG_MENU_ANIMATION_TIMEOUT = 300;

var GG_MENU_GRAPH_STR = [
	GG_MENU_GRAPH_SUM_HITPOINT
	,GG_MENU_GRAPH_AREA_POINT
	,GG_MENU_GRAPH_DEFENCE_DAMAGE     
	,GG_MENU_GRAPH_UNIT_NUMBER        
	,GG_MENU_GRAPH_FATIGUE            
	,GG_MENU_GRAPH_AVERAGE_LEVEL      
	,GG_MENU_GRAPH_AVERAGE_POSITION   
	,GG_MENU_GRAPH_SUM_ATTACK_DEFENCE 
	,GG_MENU_GRAPH_DO_UNIT_NUMBER     
	,GG_MENU_GRAPH_RECOVERY           
	,GG_MENU_GRAPH_MOVE_DISTANCE      
];
// hitpoint

var GG_MENU_MODE_ONE_ON_ONE    = 'oneonone';
var GG_MENU_MODE_CAMPAIGN      = 'campaign';
var GG_MENU_MODE_BENCHMARK     = 'benchmark';
var GG_MENU_MODE_DEFENCE       = 'defence';
var GG_MENU_MODE_GIANT_KILLING = 'giant';
var GG_MENU_MODE_TEAM          = 'team';

//var GG_MENU_RESULT_COLOR = [
//   '#FFF'
//  ,'#2E4272'  // 0 
//  ,'#582A72' // 1 iron
//  ,'#AA3939' // 2 copper 
//  ,'#AA8439' // 3 silver
//  ,'#AAAA39' // 4 gold
  
//  ,'#00FF00' // -
//  ,'#FFFF00' // -
//];

gg.menu.set_back_ground_image = function() {
	//
	var temp_url = location.search.replace(/\?/,'').split(/&/);
	var parameter = {};
	for (var i = 0, len_max = temp_url.length; i < len_max; i++) {
		var temp_word = temp_url[i].split('=');
		parameter[temp_word[0]] = temp_word[1];
	}
	var ratio = gg.menu.ratio_cal();
	document.body.style.backgroundImage = 'url(img/0240/' + GG_DATA_BACKGROUD_IMAGE[parameter.mode] + '_0240.png)';
	//document.body.style.opacity = '0.5';
};

gg.menu.ratio_cal = function() {
	var ratio;

	var hight = GG_DATA_GAME_VIEW_BASE_HEIGHT;
	var str_hight = 28;
	var ratio;
	var start_x = 0;
	//var size_default = 157;
	
	//var size_default = 78;
	var bai = 2;
	var size_default = GG_DATA_GAME_VIEW_BASE_WIDTH / bai;
	ratio = 10 * bai;
	for (var i = 1; i <= 10 * bai; i++) {
		if (window.devicePixelRatio * window.innerWidth < size_default  * i + 10) {
			ratio = i - 1;
			break;
		}
	}
	//console.log('1 ratio' + ratio);
	//if (ratio < 3) {
	//	ratio = 3;
	//	a.innerHTML += ' ratio:' + ratio;
	//}
	//var admob_heigh = GG_DATA_ADMOB_SMARTPHONE_HEIGHT;
	var admob_heigh = 0;
	var table_height = 80;
	//console.log('window.devicePixelRatio' + window.devicePixelRatio);
	//console.log('window.innerHeight' + window.innerHeight);

	if (navigator.userAgent.indexOf('Android') > 0 &&
	    navigator.userAgent.indexOf('Mobile') < 0) {
		//admob_heigh = GG_DATA_ADMOB_TABLET_HEIGHT;
		admob_heigh = 0;
		table_height = 257;
		
	} else if (navigator.userAgent.indexOf('Android') > 0 &&
	    navigator.userAgent.indexOf('Mobile') > 0 &&
		window.devicePixelRatio * window.innerHeight > 1600) {
		table_height = 257;
	}

	for (var i = 1; i <= ratio; i++) {
		if (window.devicePixelRatio * window.innerHeight < (hight + str_hight) * i / bai + admob_heigh + table_height) {
			if (ratio > i - 1) {
				ratio = i - 1;
			}
			break;
		}
	}			
	//console.log('2 ratio' + ratio);

	//if (ratio < 1) {
	//	ratio = 1;
	//}
	//var a = document.getElementById('check');
	//a.innerHTML += 'diff:' + (window.devicePixelRatio * window.innerWidth - ratio * size_default);
	ratio += 1;
	ratio = ratio / bai;
	//a.innerHTML += 'r b:' + ratio;
	//ratio -= 0.5;
	//ratio -= 0.5;
	//a.innerHTML += ' r a:' + ratio;
	if (ratio < 1) {
		ratio = 1;
	}
	//ratio += 1;
	if (navigator.userAgent.indexOf('iPhone') > 0) {
		ratio -= 1;
	}
	
	var temp_url = location.search.replace(/\?/,'').split(/&/);
	var parameter = {};
	for (var i = 0, len_max = temp_url.length; i < len_max; i++) {
		var temp_word = temp_url[i].split('=');
		parameter[temp_word[0]] = temp_word[1];
	}
	if (parameter.zoom != undefined) {
		ratio = parseInt(parameter.zoom);
	}
	// create map img
	//ratio = 4.5;
	//console.log('ratio:' + ratio);
	return ratio;
};


gg.menu.start_create_unit = function(type, color, callback) {
    
    gg.menu.data.callback = callback;    
    var dialog = document.getElementById('destinetion');

    dialog.style.display = 'block';
    var lang = gg.menu.get_lang();

    var str = '';
    str += '<p id="graph_id" class="start_info">' + GG_DATA_DICTTIONARY.create_unit[lang] + '</p>';
	// flag
	var color_str = GG_DATA_MENU_COLOR[color];
	str += "<div><i class='fa fa-flag' style='color:" + color_str + "'></i></div>";
	
	// unit
	//var src = GG_DATA_CHAR_SPEC[type].char_alphabet + '_m_' + GG_DATA_SIZE_ARRAY[gg.controller.data.zoom].str_size
	var src = GG_DATA_CHAR_SPEC[type].char_alphabet + '_m_0240'
				  + '.png';

	str += "<div id='unit_create' style='position:relative;height:" + (gg.controller.data.zoom * GG_DATA_DEFAULT_IMAGE_SIZE / window.devicePixelRatio) +
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
	
	// OK button
	str += "<div><button id='button_back' onClick='gg.menu.end_create_unit()' class='leftsidebutton white' >" + GG_DATA_DICTTIONARY.ok[lang] + "</button></div>";
		
    dialog.innerHTML = str;
    var left_position = (window.innerWidth - dialog.clientWidth) /2;
    dialog.style.left = left_position;
    var canvas = document.getElementById('canvas_0');
    var top_position = (canvas.clientHeight - dialog.clientHeight) /2 ;
    dialog.style.top = top_position;

    var unit_create = document.getElementById('unit_create');
	unit_create.style.left = (dialog.clientWidth - gg.controller.data.zoom * GG_DATA_DEFAULT_IMAGE_SIZE / window.devicePixelRatio - 24) / 2;
	
};
gg.menu.end_create_unit = function(type, color, callback) {
    var dialog = document.getElementById('destinetion');

    dialog.style.display = 'none';
    gg.menu.data.callback();
};

// result

// load speed

gg.menu.init_speed = function() {
    var speed = gg.storage.get_speed();
    var speed_element = document.getElementById('speed');
    speed_element.innerHTML = speed;
    
};

gg.menu.set_canvas = function(height, width) {
    gg.menu.data.canvas_height = height;
    gg.menu.data.canvas_width = width;
    
};

/////// Game End Menu ///
gg.menu.next_team = function() {
	// load
	var last_result = gg.storage.load_last(GG_STORAGE_LOCAL_STORAGE_TEAM_RESULT_KEY);

	// call
    location.href = 'menu_unit.html?mode=team&hitpoint=' + last_result.hitpoint + '&hande=' +
	                last_result.hande + '&map=' + last_result.map + '&friend=' +
					last_result.friend + '&enemy=' + last_result.enemy + '&used_unit_list=' +
					last_result.used_unit_list + '&round=' + (last_result.round + 1) + '&unit_uniq=' +
					last_result.class_change_uniq + '&unit_number=' + last_result.unit_number
					+ '&lost=' + last_result.lost + '&next=true';
};

gg.menu.next_campaign = function() {
    //clearTimeout(gg.menu.data.animation.timer_id);
    location.href = 'game.html?mode=campaign&game=load&load=last';
    
};

gg.menu.animation_menu = function() {
    var win_unit = document.getElementById('win_unit');
    gg.menu.data.animation.count++;
    if (gg.menu.data.animation.count >= 4) {
        gg.menu.data.animation.count = 0;
    }
    var position = 0;
    if (gg.menu.data.animation.count < 3) {
        position = gg.menu.data.animation.count;
    } else {
        position = gg.menu.data.animation.count - 2;
        
    }
    
    var base = position * gg.controller.data.zoom * GG_DATA_DEFAULT_IMAGE_SIZE;
    win_unit.style.left = (-1 * base) + 'px';
    win_unit.style.clip = 'rect(0px ' + (gg.controller.data.zoom * GG_DATA_DEFAULT_IMAGE_SIZE + base)+ 'px '
                          + gg.controller.data.zoom * GG_DATA_DEFAULT_IMAGE_SIZE+ 'px ' + base + 'px)';

    gg.menu.data.animation.timer_id = setTimeout(gg.menu.animation_menu, GG_MENU_ANIMATION_TIMEOUT);
    
};
//

//


gg.menu.back_end_menu = function() {
     gg.menu.view_end_menu(null); 
};


gg.menu.retry = function() {
    var dialog = document.getElementById('destinetion');
    dialog.style.display = 'none';
	gg.controller.retry();

};


//// graph
gg.menu.start_graph = function(callback) {
    clearTimeout(gg.menu.data.animation.timer_id);
    
    gg.menu.data.callback = callback;
    //var dialog = document.getElementById('destinetion');
    //dialog.style.display = 'block';
    //
    var button_cancel = document.getElementById('button_cancel');
    button_cancel.innerHTML = '<i class="fa fa-arrow-left "></i>';
    button_cancel.onclick = gg.menu.prev_grap;
    button_cancel.disabled = false;
    var button_dialog = document.getElementById('button_dialog');
    button_dialog.innerHTML = '<i class="fa fa-arrow-right"></i>';
    button_dialog.onclick = gg.menu.next_grap;
    button_dialog.disabled = false;
    var button_menu = document.getElementById('button_menu');
    button_menu.innerHTML = '<i class="fa fa-stop"></i>';
    button_menu.onclick = gg.menu.end_graph;
    button_menu.disabled = false;
    
    gg.menu.view_graph(0);

};

gg.menu.end_graph = function() {
    var dialog = document.getElementById('destinetion');
    dialog.style.display = 'none';
    
    gg.menu.data.callback(null);
}

gg.menu.prev_grap = function() {
    var graph_id = document.getElementById('graph_id');
    //
	var lang = gg.menu.get_lang();
	var index = 0;
	if (GG_DATA_DICTTIONARY.graph_sum_hitpoint[lang] == graph_id.textContent){
		index = 0;
	} else if (GG_DATA_DICTTIONARY.graph_area_point[lang] == graph_id.textContent){
		index = 1;
	} else if (GG_DATA_DICTTIONARY.graph_damage[lang] == graph_id.textContent){
		index = 2;
	} else if (GG_DATA_DICTTIONARY.unit_number[lang] == graph_id.textContent){
		index = 3;
	} else if (GG_DATA_DICTTIONARY.graph_sum_fatigue[lang] == graph_id.textContent){
		index = 4;
	} else if (GG_DATA_DICTTIONARY.graph_average_level[lang] == graph_id.textContent){
		index = 5;
	} else if (GG_DATA_DICTTIONARY.graph_average_position[lang] == graph_id.textContent){
		index = 6;
	} else if (GG_DATA_DICTTIONARY.graph_sum_point[lang] == graph_id.textContent){
		index = 7;
	} else if (GG_DATA_DICTTIONARY.graph_do_unit_number[lang] == graph_id.textContent){
		index = 8;
	} else if (GG_DATA_DICTTIONARY.graph_recovery[lang] == graph_id.textContent){
		index = 9;
	} else if (GG_DATA_DICTTIONARY.graph_move_distance[lang] == graph_id.textContent){
		index = 10;
	}
	index -= 1;

	//var index = GG_MENU_GRAPH_STR.indexOf(graph_id.textContent) - 1;
	// 
    if (index < 0) {
        gg.menu.view_graph(GG_MENU_GRAPH_STR.length - 1);
    } else {
        gg.menu.view_graph(index);
    }
    
};

gg.menu.next_grap = function() {
    var graph_id = document.getElementById('graph_id');
	//
	var lang = gg.menu.get_lang();
	var index = 0;
	if (GG_DATA_DICTTIONARY.graph_sum_hitpoint[lang] == graph_id.textContent){
		index = 0;
	} else if (GG_DATA_DICTTIONARY.graph_area_point[lang] == graph_id.textContent){
		index = 1;
	} else if (GG_DATA_DICTTIONARY.graph_damage[lang] == graph_id.textContent){
		index = 2;
	} else if (GG_DATA_DICTTIONARY.unit_number[lang] == graph_id.textContent){
		index = 3;
	} else if (GG_DATA_DICTTIONARY.graph_sum_fatigue[lang] == graph_id.textContent){
		index = 4;
	} else if (GG_DATA_DICTTIONARY.graph_average_level[lang] == graph_id.textContent){
		index = 5;
	} else if (GG_DATA_DICTTIONARY.graph_average_position[lang] == graph_id.textContent){
		index = 6;
	} else if (GG_DATA_DICTTIONARY.graph_sum_point[lang] == graph_id.textContent){
		index = 7;
	} else if (GG_DATA_DICTTIONARY.graph_do_unit_number[lang] == graph_id.textContent){
		index = 8;
	} else if (GG_DATA_DICTTIONARY.graph_recovery[lang] == graph_id.textContent){
		index = 9;
	} else if (GG_DATA_DICTTIONARY.graph_move_distance[lang] == graph_id.textContent){
		index = 10;
	}
	index += 1;
    //var index = GG_MENU_GRAPH_STR.indexOf(graph_id.textContent) + 1;
    //
	if (index >= GG_MENU_GRAPH_STR.length) {
        gg.menu.view_graph(0);
    } else {
        gg.menu.view_graph(index);
    }
};

gg.menu.view_graph = function(id) {
    var dialog = document.getElementById('destinetion');
    dialog.style.display = 'block';

    //var width = Math.floor(gg.menu.data.canvas_width * 0.8 ) / window.devicePixelRatio;
    //str += '<canvas id="graph" width="' + (Math.floor(gg.menu.data.canvas_width * 0.8 * window.devicePixelRatio)) + 'px" height="' +
    //       (Math.floor(gg.menu.data.canvas_width * 0.8)) + 'px;height:' +
	    
	var lang = gg.menu.get_lang();

    var str = '';
    str += '<p id="graph_id" class="start_info">';
	
	if (id == 0) {
	    str += GG_DATA_DICTTIONARY.graph_sum_hitpoint[lang];
	} else if (id == 1) {
	    str += GG_DATA_DICTTIONARY.graph_area_point[lang];
	} else if (id == 2) {
	    str += GG_DATA_DICTTIONARY.graph_damage[lang];
	} else if (id == 3) {
	    str += GG_DATA_DICTTIONARY.unit_number[lang];
	} else if (id == 4) {
	    str += GG_DATA_DICTTIONARY.graph_sum_fatigue[lang];
	} else if (id == 5) {
	    str += GG_DATA_DICTTIONARY.graph_average_level[lang];
	} else if (id == 6) {
	    str += GG_DATA_DICTTIONARY.graph_average_position[lang];
	} else if (id == 7) {
	    str += GG_DATA_DICTTIONARY.graph_sum_point[lang];
	} else if (id == GG_MENU_GRAPH_DO_UNIT_NUMBER) {
	    str += GG_DATA_DICTTIONARY.graph_do_unit_number[lang];
	} else if (id == GG_MENU_GRAPH_RECOVERY) {
	    str += GG_DATA_DICTTIONARY.graph_recovery[lang];
	} else if (id == GG_MENU_GRAPH_MOVE_DISTANCE) {
	    str += GG_DATA_DICTTIONARY.graph_move_distance[lang];
	}
	
	str += '</p>';
    //str += '<canvas id="graph" width="' + (Math.floor(gg.menu.data.canvas_width *0.8)) + 'px" height="' +
    //       (Math.floor(gg.menu.data.canvas_height * 0.6 * window.devicePixelRatio))+ ' px" style=width:' +
    //       (Math.floor(gg.menu.data.canvas_width * 0.8 / window.devicePixelRatio)) + 'px;height:' +
    //       (Math.floor(gg.menu.data.canvas_height * 0.6))+ 'px;" ></canvas>';
    str += '<canvas id="graph" width="' + Math.floor((gg.menu.data.canvas_width - 24) * 0.9) + 'px" height="' +
           (Math.floor(gg.menu.data.canvas_height * 0.6 * window.devicePixelRatio))+ ' px" style=width:' +
           (Math.floor((gg.menu.data.canvas_width) / window.devicePixelRatio - 24) * 0.9) + 'px;height:' +
           (Math.floor(gg.menu.data.canvas_height * 0.6))+ 'px;" ></canvas>';
    dialog.innerHTML = str;

    
    var obj = {};
    obj.info = {};
    obj.info.color = [];
    for (var i = 0; i < gg.controller.data.army.length; i++) {
        obj.info.color[i] = GG_DATA_TEAM[gg.controller.data.army[i].color].color;
    }
    if (id == GG_MENU_GRAPH_SUM_HITPOINT) {
        obj.info.line = gg.controller.data.win_or_lost;
    }
    if (id == GG_MENU_GRAPH_AVERAGE_POSITION) {
        //obj.info.line = gg.controller.data.win_or_lost;
        //
        var map_position = 0;
        var map_count = 0;
        var map = gg.controller.data.map;
        for (var i = 0; i < map.length; i++) {
            for (var j = 0; j < map[i].length; j++) {
                if (map[i][j] != -1) {
                    map_position += map[i][j];
                    map_count++;
                }
            }
        }
        obj.info.line = Math.floor(map_position / map_count * 10) / 10;
    }

    if (id == GG_MENU_GRAPH_AVERAGE_POSITION ||
		id == GG_MENU_GRAPH_AVERAGE_LEVEL) {
        obj.info.y_bin = GG_GRAPHT_Y_BIN_DECIMAL;
    } else {
        obj.info.y_bin = GG_GRAPHT_Y_BIN_INTEGER;
    }
    
    if (id == GG_MENU_GRAPH_FATIGUE ||
		id == GG_MENU_GRAPH_AVERAGE_LEVEL ||
		id == GG_MENU_GRAPH_AREA_POINT ||
        id == GG_MENU_GRAPH_AVERAGE_POSITION ||
		id == GG_MENU_GRAPH_SUM_ATTACK_DEFENCE ||
		id == GG_MENU_GRAPH_DO_UNIT_NUMBER) {
        obj.info.average = true;
    }
    
    obj.info.x_bin = 10;
    obj.data = [];
    //var y_max = 0;
    for (var i = 0; i < gg.controller.data.history.length; i++) {
        obj.data[i] = [];
        for (var j = 0; j < gg.controller.data.history[i].length; j++) {
            if (id == GG_MENU_GRAPH_SUM_HITPOINT) {
                if (gg.controller.data.history[i][j].sum_hitpoint != undefined) {
                    obj.data[i][j] = {x:j, y:gg.controller.data.history[i][j].sum_hitpoint};
                }
                //code
            } else if (id == GG_MENU_GRAPH_AREA_POINT) {
                if (gg.controller.data.history[i][j].area_point != undefined) {
                    obj.data[i][j] = {x:j, y:gg.controller.data.history[i][j].area_point};
                }
            } else if (id == GG_MENU_GRAPH_DEFENCE_DAMAGE) {
                if (gg.controller.data.history[i][j].defence_damage != undefined) {
                    obj.data[i][j] = {x:j, y:gg.controller.data.history[i][j].defence_damage};
                }
            } else if (id == GG_MENU_GRAPH_UNIT_NUMBER) {
                if (gg.controller.data.history[i][j].unit_number != undefined) {
                    obj.data[i][j] = {x:j, y:gg.controller.data.history[i][j].unit_number};
                }
                
            } else if (id == GG_MENU_GRAPH_FATIGUE) {
                if (gg.controller.data.history[i][j].fatigue != undefined) {
                    obj.data[i][j] = {x:j, y:gg.controller.data.history[i][j].fatigue};
                }
            //} else if (id == GG_MENU_GRAPH_MOVE_DISTANCE) {
            //    obj.data[i][j] = {x:j, y:gg.controller.data.history[i][j].move_distance};
            } else if (id == GG_MENU_GRAPH_AVERAGE_LEVEL) {
                if (gg.controller.data.history[i][j].average_level != undefined) {
                    obj.data[i][j] = {x:j, y:gg.controller.data.history[i][j].average_level};
                }
            } else if (id == GG_MENU_GRAPH_AVERAGE_POSITION) {
                if (gg.controller.data.history[i][j].average_position != undefined) {
                    obj.data[i][j] = {x:j, y:gg.controller.data.history[i][j].average_position};
                }
            } else if (id == GG_MENU_GRAPH_SUM_ATTACK_DEFENCE) {
                if (gg.controller.data.history[i][j].sum_attack_defence_point != undefined) {
                    obj.data[i][j] = {x:j, y:gg.controller.data.history[i][j].sum_attack_defence_point};
                }
            } else if (id == GG_MENU_GRAPH_DO_UNIT_NUMBER) {
                if (gg.controller.data.history[i][j].do_unit_count != undefined) {
                    obj.data[i][j] = {x:j, y:gg.controller.data.history[i][j].do_unit_count};
                }
            } else if (id == GG_MENU_GRAPH_RECOVERY) {
                if (gg.controller.data.history[i][j].recovery != undefined) {
                    obj.data[i][j] = {x:j, y:gg.controller.data.history[i][j].recovery};
                }
            } else if (id == GG_MENU_GRAPH_MOVE_DISTANCE) {
                if (gg.controller.data.history[i][j].move_distance != undefined) {
                    obj.data[i][j] = {x:j, y:gg.controller.data.history[i][j].move_distance};
                }
            }
        }
    }

    gg.graph.drow_graph(GG_MENU_GRAPH_ID, obj, gg.controller.data.zoom);
	var ratio = gg.menu.ratio_cal();
	var size_default = 157;
    //var x_size_diff = Math.floor((window.innerWidth - size_default * ratio) / 2 + size_default * ratio * 0.04) ;
	//var x_size_diff = Math.floor((window.innerWidth - size_default * ratio / window.devicePixelRatio) / 2 + size_default * ratio * 0.04);
	var x_size_diff = Math.floor((window.innerWidth - gg.menu.data.canvas_width / window.devicePixelRatio * 0.9) / 2);
	//console.log('window.innerWidth:' + window.innerWidth);
	//console.log('gg.menu.data.canvas_width * 0.9:' + gg.menu.data.canvas_width * 0.9);
	//console.log('gg.menu.data.canvas_width:' + gg.menu.data.canvas_width);
	//console.log('x_size_diff:' + x_size_diff);

    //var left_position = (window.innerWidth - dialog.clientWidth * 0.9) /2;
    dialog.style.left = x_size_diff;
    var canvas = document.getElementById('canvas_0');
    var top_position = (canvas.clientHeight - dialog.clientHeight) /2 ;
    dialog.style.top = top_position;

};

///////////////////// Game Before Menu ////////////////
//// NEW
gg.menu.next_menu_unit = function() {
    var temp = location.search.replace(/\?/,'').split(/&/);
    var unit_select_str = '';
    
    for (var i = 0; i < 15; i++) {
        //unit_select.push(document.getElementById('checkbox' + i).checked);
        if (document.getElementById(GG_DATA_CHAR_BIG_STR[i]).style.opacity == 1) {
            unit_select_str += '&unit' + i + '=true'; 
        } else {
            unit_select_str += '&unit' + i + '=false'; 
            
        }
    }
    
    location.href = 'game.html?' + temp[0] + '&' + temp[1] + '&' + temp[2] + '&' + temp[3]
                    + '&' + temp[4] + '&' + temp[5] + unit_select_str;
    
};

gg.menu.prev_menu_unit = function() {
    var temp = location.search.replace(/\?/,'').split(/&/);
    var url;
    url = 'menu_unit.html?' + temp[0];
    location.href = url + '&' + temp[1] + '&' + temp[2] + '&' + temp[3] +
                    '&' + temp[4];
    
};

gg.menu.next_menu_team = function() {
	var temp = location.search.replace(/\?/,'').split(/&/);
    var friend_number = GG_DATA_MENU_COLOR_2.indexOf(document.getElementById('friend').style.color);
    var enemy_number = GG_DATA_MENU_COLOR_2.indexOf(document.getElementById('enemy').style.color);

	if (friend_number == GG_DATA_MENU_COLOR_2.length - 1 &&
		enemy_number == GG_DATA_MENU_COLOR_2.length - 1) {
		//
		var temp_team = [];
		for (var i = 0; i < GG_DATA_MENU_COLOR_2.length - 1; i++) {
			temp_team.push(i);
		}
		friend_number = temp_team[Math.floor(Math.random() * temp_team.length)];
		temp_team = [];
		for (var i = 0; i < GG_DATA_MENU_COLOR_2.length - 1; i++) {
			if (i != friend_number) {
				temp_team.push(i);
			}
		}
		enemy_number = temp_team[Math.floor(Math.random() * temp_team.length)];
		
	} else if (friend_number == GG_DATA_MENU_COLOR_2.length - 1) {
		//
		var temp_team = [];
		for (var i = 0; i < GG_DATA_MENU_COLOR_2.length - 1; i++) {
			if (i != enemy_number) {
				temp_team.push(i);
			}
		}
		friend_number = temp_team[Math.floor(Math.random() * temp_team.length)];
	} else if (enemy_number == GG_DATA_MENU_COLOR_2.length - 1) {
		//
		var temp_team = [];
		for (var i = 0; i < GG_DATA_MENU_COLOR_2.length - 1; i++) {
			if (i != friend_number) {
				temp_team.push(i);
			}
		}
		enemy_number = temp_team[Math.floor(Math.random() * temp_team.length)];
	}
   
    var temp1 = temp[0].split(/=/);
    var url;
    if (temp1[1] == GG_MENU_MODE_ONE_ON_ONE ||
		temp1[1] == GG_MENU_MODE_TEAM ||
		temp1[1] == GG_MENU_MODE_DEFENCE ||
		//temp1[1] == GG_MENU_MODE_BENCHMARK ||
        temp1[1] == GG_MENU_MODE_GIANT_KILLING) {
        url = 'menu_unit.html?' + temp[0];

    } else if (temp1[1] == GG_MENU_MODE_CAMPAIGN) {
        url = 'game.html?' + temp[0] + '&game=new&';

    } else if (temp1[1] == GG_MENU_MODE_BENCHMARK) {
        url = 'game.html?' + temp[0];
    }
    
    location.href = url + '&' + temp[1] + '&' + temp[2] + '&' + temp[3] + '&' + temp[4] +
	                '&' + temp[5] + '&' + temp[6] + '&' + temp[7] +
                    '&friend=' + friend_number  +
                    '&enemy=' + enemy_number;
};

gg.menu.prev_menu_team = function() {
    var temp = location.search.replace(/\?/,'').split(/&/);
    var temp1 = temp[0].split(/=/);
    var url = 'menu_option.html?' + temp[0];

    location.href = url;
};

gg.menu.next_menu_option = function() {
    var temp = location.search.replace(/\?/,'').split(/&/);
    var hitpoint    = document.getElementById('hitpoint').textContent;
    var hande       = document.getElementById('hande').textContent;
    var map         = document.getElementById('map').textContent;
    var unit_uniq   = document.getElementById('unit_uniq').textContent;
    var unit_number = document.getElementById('unit_number').textContent;
    var lost        = document.getElementById('lost').textContent;
    var level_up    = document.getElementById('level_up').textContent;

	var options = gg.storage.load_options();
	//console.log('temp[0]:' + temp[0]);
    var mode = temp[0].split(/=/)[1];
	//console.log('mode:' + mode);
	options[mode].hitpoint    = hitpoint;
	options[mode].hande       = hande;
	options[mode].map         = map;
	options[mode].unit_uniq   = unit_uniq;
	options[mode].unit_number = unit_number;
	options[mode].lost        = lost;
	options[mode].level_up    = level_up;
	
	gg.storage.save_options(options);
	
    var url = 'menu_team.html?' + temp[0];

    location.href = url + '&hitpoint=' + hitpoint + '&hande=' + hande
                    + '&map=' + map + '&unit_uniq=' + unit_uniq
					+ '&unit_number=' + unit_number + '&lost=' + lost + '&level_up=' + level_up;
};

gg.menu.prev_menu_option = function() {
    var temp = location.search.replace(/\?/,'').split(/&/);
    var url;
    var temp1 = temp[0].split(/=/);
    if (temp1[1] == GG_MENU_MODE_ONE_ON_ONE || temp1[1] == GG_MENU_MODE_BENCHMARK ||
        temp1[1] == GG_MENU_MODE_DEFENCE || temp1[1] == GG_MENU_MODE_GIANT_KILLING) {
        url = 'index_game.html';
    } else if (temp1[1] == GG_MENU_MODE_CAMPAIGN || temp1[1] == GG_MENU_MODE_TEAM) {
        url = 'menu_start.html?' + temp[0];
    }
    location.href = url;
    
};


//// OLD delete
gg.menu.next_unit_cometition = function() {

    //console.log(unit_select_str);
    var temp = location.search.replace(/\?/,'').split(/&/);
    //console.log(temp);
    var friend_number = GG_DATA_MENU_COLOR_2.indexOf(document.getElementById('friend').style.color);
    var enemy_number = GG_DATA_MENU_COLOR_2.indexOf(document.getElementById('enemy').style.color);
    
    location.href = 'competition_2.html?' + temp[0] + '&' + temp[1] + '&' + temp[2] + '&' + temp[3] +
                    '&friend=' + friend_number  +
                    '&enemy=' + enemy_number;

};

gg.menu.next_cometition = function() {
    var temp = location.search.replace(/\?/,'').split(/&/);
    var hitpoint = document.getElementById('hitpoint').textContent;
    var hande = document.getElementById('hande').textContent;
    var map = document.getElementById('map').textContent;
    var speed = document.getElementById('speed').textContent;
//    var team = document.getElementById('tema').textContent;
    location.href = 'competition_select_team.html?' + temp[0] + '&hitpoint=' + hitpoint + '&hande=' + hande
                    + '&map=' + map + '&speed=' + speed;
};


//// change
gg.menu.change_hitpoint = function(change) {
    var hitpoint_obj = document.getElementById('hitpoint');
    var index_hitpoint = GG_DATA_HITPOINT_ARRAY.indexOf(parseInt(hitpoint_obj.textContent));
    var change_hitpoint = -1;
    if (change == 1) {
        if (index_hitpoint != GG_DATA_HITPOINT_ARRAY.length - 1) {
            change_hitpoint = GG_DATA_HITPOINT_ARRAY[index_hitpoint + 1];
        } else {
            change_hitpoint = GG_DATA_HITPOINT_ARRAY[index_hitpoint];
        }
    } else if (change == -1) {
        if (index_hitpoint != 0) {
            change_hitpoint = GG_DATA_HITPOINT_ARRAY[index_hitpoint - 1];
        } else {
            change_hitpoint = GG_DATA_HITPOINT_ARRAY[0];
        }
    }
    hitpoint_obj.innerHTML = change_hitpoint;
};

gg.menu.change_hande = function(change) {
    var obj = document.getElementById('hande');
    var index_obj = GG_DATA_HANDE_ARRAY.indexOf(parseFloat(obj.textContent));
    var obj_array = GG_DATA_HANDE_ARRAY;
    var change_value = -1;
    if (change == 1) {
        if (index_obj != obj_array.length - 1) {
            change_value = obj_array[index_obj + 1];
        } else {
            change_value = obj_array[index_obj];
        }
    } else if (change == -1) {
        if (index_obj != 0) {
            change_value = obj_array[index_obj - 1];
        } else {
            change_value = obj_array[0];
        }
    }
    obj.innerHTML = change_value;
};

gg.menu.unit_select = function(id) {
	if ((parseInt(id) >= 0 && parseInt(id) <=2) || parseInt(id) == 50) {
		for (var i = 0; i <= 2; i++) {
			if (document.getElementById(GG_DATA_CHAR_BIG_STR[i]).style.opacity != 0) {
				document.getElementById(GG_DATA_CHAR_BIG_STR[i]).style.opacity = 0.5;
			}
		}
		if (document.getElementById(GG_DATA_CHAR_BIG_STR[50]).style.opacity != 0) {
			document.getElementById(GG_DATA_CHAR_BIG_STR[50]).style.opacity = 0.5;
		}
	}

	if ((parseInt(id) >= 3 && parseInt(id) <= 5) || parseInt(id) == 51) {
		for (var i = 3; i <= 5; i++) {
			if (document.getElementById(GG_DATA_CHAR_BIG_STR[i]).style.opacity != 0) {
				document.getElementById(GG_DATA_CHAR_BIG_STR[i]).style.opacity = 0.5;
			}
		}
		if (document.getElementById(GG_DATA_CHAR_BIG_STR[51]).style.opacity != 0) {
			document.getElementById(GG_DATA_CHAR_BIG_STR[51]).style.opacity = 0.5;
		}
	}

	if ((parseInt(id) >= 6 && parseInt(id) <= 8) || parseInt(id) == 52) {
		for (var i = 6; i <= 8; i++) {
			if (document.getElementById(GG_DATA_CHAR_BIG_STR[i]).style.opacity != 0) {
				document.getElementById(GG_DATA_CHAR_BIG_STR[i]).style.opacity = 0.5;
			}
		}
		if (document.getElementById(GG_DATA_CHAR_BIG_STR[52]).style.opacity != 0) {
			document.getElementById(GG_DATA_CHAR_BIG_STR[52]).style.opacity = 0.5;
		}
	}

	if ((parseInt(id) >= 9 && parseInt(id) <= 11) || parseInt(id) == 53) {
		for (var i = 9; i <= 11; i++) {
			if (document.getElementById(GG_DATA_CHAR_BIG_STR[i]).style.opacity != 0) {
				document.getElementById(GG_DATA_CHAR_BIG_STR[i]).style.opacity = 0.5;
			}
		}
		if (document.getElementById(GG_DATA_CHAR_BIG_STR[53]).style.opacity != 0) {
			document.getElementById(GG_DATA_CHAR_BIG_STR[53]).style.opacity = 0.5;
		}
	}

	if ((parseInt(id) >= 12 && parseInt(id) <= 14) || parseInt(id) == 54) {
		for (var i = 12; i <= 14; i++) {
			if (document.getElementById(GG_DATA_CHAR_BIG_STR[i]).style.opacity != 0) {
				document.getElementById(GG_DATA_CHAR_BIG_STR[i]).style.opacity = 0.5;
			}
		}
		if (document.getElementById(GG_DATA_CHAR_BIG_STR[54]).style.opacity != 0) {
			document.getElementById(GG_DATA_CHAR_BIG_STR[54]).style.opacity = 0.5;
		}
	}

	if ((parseInt(id) >= 15 && parseInt(id) <= 17) || parseInt(id) == 55) {
		for (var i = 15; i <= 17; i++) {
			if (document.getElementById(GG_DATA_CHAR_BIG_STR[i]).style.opacity != 0) {
				document.getElementById(GG_DATA_CHAR_BIG_STR[i]).style.opacity = 0.5;
			}
		}
		if (document.getElementById(GG_DATA_CHAR_BIG_STR[55]).style.opacity != 0) {
			document.getElementById(GG_DATA_CHAR_BIG_STR[55]).style.opacity = 0.5;
		}
	}

	//if ((parseInt(id) >= 18 && parseInt(id) <= 20) || parseInt(id) == 56) {
	//	for (var i = 18; i <= 19; i++) {
	//		if (document.getElementById(GG_DATA_CHAR_BIG_STR[i]).style.opacity != 0) {
	//			document.getElementById(GG_DATA_CHAR_BIG_STR[i]).style.opacity = 0.5;
	//		}
	//	}
	//	if (document.getElementById(GG_DATA_CHAR_BIG_STR[56]).style.opacity != 0) {
	//		document.getElementById(GG_DATA_CHAR_BIG_STR[56]).style.opacity = 0.5;
	//	}
	//}
	
	document.getElementById(GG_DATA_CHAR_BIG_STR[parseInt(id)]).style.opacity = 1;

};

gg.menu.change_team = function(id, change) {
    var obj = document.getElementById(id);
    if (id == 'friend') {
        var anti_obj = document.getElementById('enemy');
    } else if (id == 'enemy') {
        var anti_obj = document.getElementById('friend');
    }
    var index_obj = GG_DATA_MENU_COLOR_2.indexOf(obj.style.color);
    var obj_array = GG_DATA_MENU_COLOR_2;
    var anti_index_obj = GG_DATA_MENU_COLOR_2.indexOf(anti_obj.style.color);
        
    var index_number;
    var change_value = -1;

    if (change == 1) {
        if (index_obj == obj_array.length - 1) {
            return;
		} else if (index_obj == obj_array.length - 2) {
            index_number = index_obj + 1;
        } else {
            if (index_obj + 1 == anti_index_obj &&
                index_obj + 2 > obj_array.length - 1) {
                return;
                
            } else if (index_obj + 1 != anti_index_obj){
                change_value = obj_array[index_obj + 1];
                index_number = index_obj + 1;
                
            } else if (index_obj + 1 == anti_index_obj) {
                change_value = obj_array[index_obj + 2];
                index_number = index_obj + 2;
            }
        }

    } else if (change == -1) {
        if (index_obj == 0) {
            return;
        } else {
            if (index_obj - 1 == anti_index_obj &&
                index_obj - 2 < 0) {
                return;
            } else if (index_obj - 1 != anti_index_obj) {
                change_value = obj_array[index_obj - 1];
                index_number = index_obj - 1;
            } else if (index_obj - 1 == anti_index_obj) {
                
                change_value = obj_array[index_obj - 2];
                index_number = index_obj - 2;
            }
        }

    }
    obj.style.color = GG_DATA_MENU_COLOR_2[index_number];
    //obj.innerHTML = change_value;
};


gg.menu.change_parameter = function(id, change) {

    var obj = document.getElementById(id);
    if (id == 'map') {
        var index_obj = GG_DATA_MAP_ARRAY.indexOf(obj.textContent);
        var obj_array = GG_DATA_MAP_ARRAY;
    } else if (id == 'speed') {
        var index_obj = GG_DATA_SPEED_ARRAY.indexOf(obj.textContent);
        var obj_array = GG_DATA_SPEED_ARRAY;
    } else if (id == 'audio') {
        var index_obj = GG_DATA_AUDIO_ARRAY.indexOf(obj.textContent);
        var obj_array = GG_DATA_AUDIO_ARRAY;
    } else if (id == 'dialog') {
        var index_obj = GG_DATA_DIALOG_ARRAY.indexOf(obj.textContent);
        var obj_array = GG_DATA_DIALOG_ARRAY;
    } else if (id == 'view_hitpoint') {
        var index_obj = GG_DATA_VIEW_HITPOINT_ARRAY.indexOf(obj.textContent);
        var obj_array = GG_DATA_VIEW_HITPOINT_ARRAY;
    } else if (id == 'view_level') {
        var index_obj = GG_DATA_VIEW_LEVEL_ARRAY.indexOf(obj.textContent);
        var obj_array = GG_DATA_VIEW_LEVEL_ARRAY;
    } else if (id == 'cancel_pattern') {
        var index_obj = GG_DATA_VIEW_CANCEL_PATTERN_ARRAY.indexOf(obj.textContent);
        var obj_array = GG_DATA_VIEW_CANCEL_PATTERN_ARRAY;

    } else if (id == 'unit_number') {
        var index_obj = GG_DATA_UNIT_NUMBER_ARRAY.indexOf(obj.textContent);
        var obj_array = GG_DATA_UNIT_NUMBER_ARRAY;
    } else if (id == 'unit_uniq') {
        var index_obj = GG_DATA_UNIT_UNIQ_ARRAY.indexOf(obj.textContent);
        var obj_array = GG_DATA_UNIT_UNIQ_ARRAY;
    } else if (id == 'unit_diff') {
        var index_obj = GG_DATA_UNIT_DIFF_ARRAY.indexOf(obj.textContent);
        var obj_array = GG_DATA_UNIT_DIFF_ARRAY;
    } else if (id == 'lost') {
        var index_obj = GG_DATA_LOST_ARRAY.indexOf(obj.textContent);
        var obj_array = GG_DATA_LOST_ARRAY;
    } else if (id == 'level_up') {
        var index_obj = GG_DATA_LEVEL_UP_ARRAY.indexOf(obj.textContent);
        var obj_array = GG_DATA_LEVEL_UP_ARRAY;
    }
    var index_number;
    var change_value = -1;

    if (change == 1) {
        if (index_obj != obj_array.length - 1) {
            change_value = obj_array[index_obj + 1];
            index_number = index_obj + 1;
        } else {
            change_value = obj_array[index_obj];
            index_number = index_obj;
        }
    } else if (change == -1) {
        if (index_obj != 0) {
            change_value = obj_array[index_obj - 1];
            index_number = index_obj - 1;
        } else {
            change_value = obj_array[0];
            index_number = 0;
        }
    }
    obj.innerHTML = change_value;
    if (id == 'speed') {
        gg.storage.set_speed(change_value);
	} else if (id == 'audio') {
        gg.storage.set_audio(change_value);
	} else if (id == 'dialog') {
        gg.storage.set_dialog(change_value);
	} else if (id == 'view_hitpoint') {
        gg.storage.set_hitpoint(change_value);
	} else if (id == 'view_level') {
        gg.storage.set_level(change_value);
	} else if (id == 'cancel_pattern') {
        gg.storage.set_cancel_pattern(change_value);
    }

};

gg.menu.next_menu_load = function() {
	
	var temp_url = location.search.replace(/\?/,'').split(/&/);
	var parameter = {};
	for (var i = 0, len_max = temp_url.length; i < len_max; i++) {
		var temp_word = temp_url[i].split('=');
		parameter[temp_word[0]] = temp_word[1];
	}
	if (parameter.mode == 'campaign') {
	    var temp = location.search.replace(/\?/,'').split(/&/);
	    var url = 'game.html?' + temp[0] + '&game=load&load=' + gg.menu.data.save_data_count;

	    location.href = url;
	} else if (parameter.mode == 'team') {
		var save_data = gg.storage.get_load(GG_STORAGE_LOCAL_STORAGE_TEAM_RESULT_KEY, gg.menu.data.save_data_count);
		location.href = 'menu_unit.html?mode=team&hitpoint=' + save_data.hitpoint + '&hande=' +
	                save_data.hande + '&map=' + save_data.map + '&friend=' +
					save_data.friend + '&enemy=' + save_data.enemy + '&lost=' + save_data.lost + '&used_unit_list=' +
					save_data.used_unit_list + '&round=' + (save_data.round + 1) + '&unit_uniq=' +
					save_data.class_change_uniq + '&unit_number=' + save_data.unit_number +'&load=true';
	}
			
    
};

gg.menu.prev_menu_load = function() {
    var temp = location.search.replace(/\?/,'').split(/&/);
    var url = 'menu_start.html?' + temp[0];

    location.href = url;
};

gg.menu.change_load = function(change) {
	var temp_url = location.search.replace(/\?/,'').split(/&/);
	var parameter = {};
	for (var i = 0, len_max = temp_url.length; i < len_max; i++) {
	    var temp_word = temp_url[i].split('=');
	    parameter[temp_word[0]] = temp_word[1];
	}
	
    var flag = false;
    if (change == -1) {
        if (gg.menu.data.save_data_count < gg.menu.data.save_data.length - 1) {
            gg.menu.data.save_data_count++;
            flag = true;
        }
    } else if (change == 1) {
        if (gg.menu.data.save_data_count > 0) {
            gg.menu.data.save_data_count--;
            flag = true;
        }
    }
    if (flag == false) {
        return;
    }
    var last_data = gg.menu.data.save_data[gg.menu.data.save_data_count];
    
    var friend = document.getElementById('friend');
    //var friend_hitpoint = document.getElementById('friend_hitpoint');
    var enemy = document.getElementById('enemy');
    //var enemy_hitpoint = document.getElementById('enemy_hitpoint');
    var map = document.getElementById('map');
    var date = document.getElementById('date');
    var round = document.getElementById('round');
    var turn = document.getElementById('turn');
    var hande = document.getElementById('hande');
    var hitpoint = document.getElementById('hitpoint');
    
    friend.style.color = GG_DATA_MENU_COLOR_2[last_data.friend];
    enemy.style.color = GG_DATA_MENU_COLOR_2[last_data.enemy]
    //friend_hitpoint.innerHTML = last_data.hitpoint;
    //enemy_hitpoint.innerHTML = last_data.hande;
    map.innerHTML = last_data.map;
    date.innerHTML = last_data.date;
    hande.innerHTML = last_data.hande;
    hitpoint.innerHTML = last_data.hitpoint;
	
	if (parameter.mode == 'campaign') {
	    round.innerHTML = (last_data.round + 1);
	    turn.innerHTML = last_data.turn;
	} else if (parameter.mode == 'team') {
	    round.innerHTML = last_data.round;
	    turn.innerHTML = '-';
	}
    
};

gg.menu.start_competition = function() {
    var temp_url = location.search.replace(/\?/,'').split(/&/);
    var parameter = {};
    for (var i = 0, len_max = temp_url.length; i < len_max; i++) {
        var temp_word = temp_url[i].split('=');
        parameter[temp_word[0]] = temp_word[1];
    }
    var unit_select_str = '';
    if (parameter.mode == GG_MENU_MODE_ONE_ON_ONE ||
		parameter.mode == GG_MENU_MODE_TEAM ||
		parameter.mode == GG_MENU_MODE_DEFENCE ||
		//parameter.mode == GG_MENU_MODE_BENCHMARK ||
		parameter.mode == GG_MENU_MODE_GIANT_KILLING) {
        for (var i = 0; i < GG_DATA_CHAR_BIG_STR.length; i++) {
			if (GG_DATA_CHAR_BIG_STR[i] == '') {
				continue;
			}
			if (//GG_DATA_CHAR_BIG_STR[i] == 'Sr' ||
				//GG_DATA_CHAR_BIG_STR[i] == 'Hm' ||
				//GG_DATA_CHAR_BIG_STR[i] == 'Cr' ||
//				GG_DATA_CHAR_BIG_STR[i] == 'Tm' ||
//				GG_DATA_CHAR_BIG_STR[i] == 'Lt' ||
				//GG_DATA_CHAR_BIG_STR[i] == 'Ms' ||
				GG_DATA_CHAR_BIG_STR[i] == 'Er' ||
				GG_DATA_CHAR_BIG_STR[i] == 'Ns'||
				GG_DATA_CHAR_BIG_STR[i] == 'Fn' ||
				GG_DATA_CHAR_BIG_STR[i] == 'Cc' ||
				//GG_DATA_CHAR_BIG_STR[i] == 'Ls' ||
				//GG_DATA_CHAR_BIG_STR[i] == 'Hr' ||
				//GG_DATA_CHAR_BIG_STR[i] == 'Hr' ||
				//GG_DATA_CHAR_BIG_STR[i] == 'Bl' ||
	//			GG_DATA_CHAR_BIG_STR[i] == 'Rt' ||
	//			GG_DATA_CHAR_BIG_STR[i] == 'Lt' ||
				//GG_DATA_CHAR_BIG_STR[i] == 'Fr' ||
				GG_DATA_CHAR_BIG_STR[i] == 'Ss') {
				continue;
			}
            if (document.getElementById(GG_DATA_CHAR_BIG_STR[i]).style.opacity == 1) {
                unit_select_str += '&unit' + i + '=true'; 
            } else {
                unit_select_str += '&unit' + i + '=false'; 
                
            }
        }
    }
    var unit_number = document.getElementById('unit_number');
    //console.log(unit_select_str);
    //var temp = location.search.replace(/\?/,'').split(/&/);
    //console.log(temp);
	//console.log('url:' + temp_url);
    if (temp_url.length == 10) {
	    location.href = 'game.html?' + temp_url[0] + '&' + temp_url[1] + '&' + temp_url[2] + '&' + temp_url[3]
                    + '&' + temp_url[4] + '&' + temp_url[5] + '&' + temp_url[6] + '&' + temp_url[7] + '&' + temp_url[8] + '&' + temp_url[9] + unit_select_str;
	} else if (temp_url.length == 12) {
	    location.href = 'game.html?' + temp_url[0] + '&' + temp_url[1] + '&' + temp_url[2] + '&' + temp_url[3]
                    + '&' + temp_url[4] + '&' + temp_url[5] + '&' + temp_url[6] + '&' + temp_url[7] + '&' + temp_url[8]
					+ '&' + temp_url[9] + '&' + temp_url[10] + '&' + temp_url[11] + unit_select_str;

	} else if (temp_url.length == 13) {
	    location.href = 'game.html?' + temp_url[0] + '&' + temp_url[1] + '&' + temp_url[2] + '&' + temp_url[3]
                    + '&' + temp_url[4] + '&' + temp_url[5] + '&' + temp_url[6] +  '&' + temp_url[7] +  '&' + temp_url[8] +
					 '&' + temp_url[9] + '&' + temp_url[10] + '&' + temp_url[11] + '&' + temp_url[12] + unit_select_str;
	} else if (temp_url.length == 14) {
	    location.href = 'game.html?' + temp_url[0] + '&' + temp_url[1] + '&' + temp_url[2] + '&' + temp_url[3]
                    + '&' + temp_url[4] + '&' + temp_url[5] + '&' + temp_url[6] +  '&' + temp_url[7] +  '&' + temp_url[8] +
					 '&' + temp_url[9] + '&' + temp_url[10] + '&' + temp_url[11] + '&' + temp_url[12] + '&' + temp_url[13] + unit_select_str;
	}
};

//////////////////////////Game Menu//////////////////////////
// back

gg.menu.setting = function() {
	// view
	var lang = gg.menu.get_lang();
    var element = document.getElementById('destinetion');
    element.style.display = 'block';
	element.style.left = 0;
	var speed = gg.storage.get_speed();
	var audio = gg.storage.get_audio();
	var dialog = gg.storage.get_dialog();
	var hitpoint = gg.storage.get_hitpoint();
	var level = gg.storage.get_level();
	var cancel_pattern = gg.storage.get_cancel_pattern();

	var str = "<table id='info' style='display:inline;'>"
	str += "		<tr>";
	str += "			<td><span class='menu_string'>" + GG_DATA_DICTTIONARY.spped[lang]+ "</span></td>";
	str += '			<td><button class="directionbutton white" id="speed_decrease" onclick="gg.menu.change_parameter(' + "'speed'" + ', -1)"><i class="fa fa-caret-left"></i></button></td>';
	str += "			<td style='width:85px'><span id='speed' class='menu_string'>" + speed+ "</span></td>";
	str += '			<td><button class="directionbutton white" id="speed_increase" onclick="gg.menu.change_parameter(' + "'speed'" + ', 1)"><i class="fa fa-caret-right"></i></button></td>';
	str += "		</tr>";

	str += "		<tr>";
	str += "			<td><span class='menu_string'>" + GG_DATA_DICTTIONARY.se_audio[lang]+ "</span></td>";
	str += '			<td><button class="directionbutton white" id="audio_decrease" onclick="gg.menu.change_parameter(' + "'audio'" + ', -1)"><i class="fa fa-caret-left"></i></button></td>';
	str += "			<td style='width:85px'><span id='audio' class='menu_string'>" + audio + "</span></td>";
	str += '			<td><button class="directionbutton white" id="audio_increase" onclick="gg.menu.change_parameter(' + "'audio'" + ', 1)"><i class="fa fa-caret-right"></i></button></td>';
	str += "		</tr>";

	str += "		<tr>";
	str += "			<td><span class='menu_string'>" + GG_DATA_DICTTIONARY.set_dialog[lang]+ "</span></td>";
	str += '			<td><button class="directionbutton white" id="dialog_decrease" onclick="gg.menu.change_parameter(' + "'dialog'" + ', -1)"><i class="fa fa-caret-left"></i></button></td>';
	str += "			<td style='width:85px'><span id='dialog' class='menu_string'>" + dialog + "</span></td>";
	str += '			<td><button class="directionbutton white" id="dialog_increase" onclick="gg.menu.change_parameter(' + "'dialog'" + ', 1)"><i class="fa fa-caret-right"></i></button></td>';
	str += "		</tr>";

	str += "		<tr>";
	str += "			<td><span class='menu_string'>" + GG_DATA_DICTTIONARY.menu_hitpoint[lang]+ "</span></td>";
	str += '			<td><button class="directionbutton white" id="hitpoint_decrease" onclick="gg.menu.change_parameter(' + "'view_hitpoint'" + ', -1)"><i class="fa fa-caret-left"></i></button></td>';
	str += "			<td style='width:85px'><span id='view_hitpoint' class='menu_string'>" + hitpoint + "</span></td>";
	str += '			<td><button class="directionbutton white" id="hitpoint_increase" onclick="gg.menu.change_parameter(' + "'view_hitpoint'" + ', 1)"><i class="fa fa-caret-right"></i></button></td>';
	str += "		</tr>";

	str += "		<tr>";
	str += "			<td><span class='menu_string'>" + GG_DATA_DICTTIONARY.game_end_unit_list_level[lang]+ "</span></td>";
	str += '			<td><button class="directionbutton white" id="level_decrease" onclick="gg.menu.change_parameter(' + "'view_level'" + ', -1)"><i class="fa fa-caret-left"></i></button></td>';
	str += "			<td style='width:85px'><span id='view_level' class='menu_string'>" + level + "</span></td>";
	str += '			<td><button class="directionbutton white" id="level_increase" onclick="gg.menu.change_parameter(' + "'view_level'" + ', 1)"><i class="fa fa-caret-right"></i></button></td>';
	str += "		</tr>";

	str += "		<tr>";
	str += "			<td><span class='menu_string'>" + GG_DATA_DICTTIONARY.menu_cancel_pattern[lang]+ "</span></td>";
	str += '			<td><button class="directionbutton white" id="cancel_pattern_decrease" onclick="gg.menu.change_parameter(' + "'cancel_pattern'" + ', -1)"><i class="fa fa-caret-left"></i></button></td>';
	str += "			<td style='width:85px'><span id='cancel_pattern' class='menu_string'>" + cancel_pattern + "</span></td>";
	str += '			<td><button class="directionbutton white" id="cancel_pattern_increase" onclick="gg.menu.change_parameter(' + "'cancel_pattern'" + ', 1)"><i class="fa fa-caret-right"></i></button></td>';
	str += "		</tr>";

	str += "	</table>";
   	str += "<p><button id='button_back' onClick='gg.menu.erase_back_dialg()' class='leftsidebutton white' ><i class='fa fa-times'></i></button></p>";

    element.innerHTML = str;
    var left_position = (window.innerWidth - element.clientWidth) /2;
    element.style.left = left_position;
    var canvas = document.getElementById('canvas_0');
    var top_position = (canvas.clientHeight - element.clientHeight) /2 ;
    element.style.top = top_position;
	
};

gg.menu.retry_dialog = function() {
	var dialog = gg.storage.get_dialog();
	if (dialog == GG_DATA_DIALOG_ARRAY[1]) {
		gg.menu.retry();
		return;
	}
	// view
    var element = document.getElementById('destinetion');
    element.style.display = 'block';
	//var speed = gg.storage.get_speed();
	var str = '';

   	str += "<p><button id='button_back' onClick='gg.menu.retry()' class='leftsidebutton white_yellow' ><i class='fa fa-reply'></i></button></p>";
   	str += "<p><button id='button_back' onClick='gg.menu.erase_back_dialg()' class='leftsidebutton white' ><i class='fa fa-times'></i></button></p>";

    element.innerHTML = str;
	
};

gg.menu.menu_dialog = function(callback) {
    gg.menu.data.callback = callback;
    var element = document.getElementById('destinetion');
    element.style.display = 'block';
    var str = '';

   	str += "<p><button id='button_back' onClick='gg.menu.setting()' class='leftsidebutton white' ><i class='fa fa-cog'></i></button></p>";
   	str += "<p><button id='button_back' onClick='gg.menu.retry_dialog()' class='leftsidebutton white_yellow' ><i class='fa fa-reply'></i></button></p>";
   	str += "<p><button id='button_back' onClick='gg.controller_user.graph()' class='leftsidebutton white' ><i class='fa fa-bar-chart-o'></i></button></p>";
   	str += "<p><button id='button_back' onClick='gg.menu.back_dialog()' class='leftsidebutton white_red' ><i class='fa fa-home'></i></button></p>";
   	str += "<p><button id='button_back' onClick='gg.menu.erase_back_dialg()' class='leftsidebutton white' ><i class='fa fa-times'></i></button></p>";
   	//str += "&nbsp;&nbsp;&nbsp;&nbsp;<button id='button_back' onClick='gg.menu.back_top()' class='leftsidebutton white' ><i class='fa fa-sign-out'></i></button>";
 
    element.innerHTML = str;
    var left_position = (window.innerWidth - element.clientWidth) /2;
    element.style.left = left_position;
    var canvas = document.getElementById('canvas_0');
    var top_position = (canvas.clientHeight - element.clientHeight) /2 ;
    element.style.top = top_position;
    
};

gg.menu.back_dialog = function() {
	var dialog = gg.storage.get_dialog();
	if (dialog == GG_DATA_DIALOG_ARRAY[1]) {
		gg.menu.back_top();
		return;
	}
	
    var element = document.getElementById('destinetion');
    element.style.display = 'block';
    var str = '';

   	str += "<p><button id='button_back' onClick='gg.menu.back_top()' class='leftsidebutton white_red' ><i class='fa fa-home'></i></button></p>";
   	str += "<p><button id='button_back' onClick='gg.menu.erase_back_dialg()' class='leftsidebutton white' ><i class='fa fa-times'></i></button></p>";
 
    element.innerHTML = str;
    var left_position = (window.innerWidth - element.clientWidth) /2;
    element.style.left = left_position;
    var canvas = document.getElementById('canvas_0');
    var top_position = (canvas.clientHeight - element.clientHeight) /2 ;
    element.style.top = top_position;

};
gg.menu.erase_back_dialg = function() {
    var element = document.getElementById('destinetion');
    element.style.display = 'none';
    if (gg.menu.data.callback != null) {
		if (gg.controller_user != null) {
			var element = document.getElementById('cancel_pattern');
			if (element != null) {
				gg.controller_user.set_cancel_pattern(element.textContent);
				gg.event.set_cancel_pattern(element.textContent);
			}
		}
		if (gg.animation != null) {
			var element = document.getElementById('speed');
			if (element != null) {
				if (element.textContent == GG_DATA_SPEED_ARRAY[0]) {
					gg.animation.set_timeout(GG_DATA_ANIMATION_TIMEOUT_VERY_FAST);
				} else if (element.textContent == GG_DATA_SPEED_ARRAY[1]) {
					gg.animation.set_timeout(GG_DATA_ANIMATION_TIMEOUT_FAST);
				} else if (element.textContent == GG_DATA_SPEED_ARRAY[2]) {
					gg.animation.set_timeout(GG_DATA_ANIMATION_TIMEOUT_NORMAL);
				} else if (element.textContent == GG_DATA_SPEED_ARRAY[3]) {
					gg.animation.set_timeout(GG_DATA_ANIMATION_TIMEOUT_SLOW);
				}
			}
			
		}
		if (gg.event != null) {
			var element = document.getElementById('audio');
			if (element != null) {
				gg.controller_user.set_audio(element.textContent);
				gg.view.set_audio(element.textContent);
			}
			var element = document.getElementById('view_hitpoint');
			if (element != null) {
				//gg.controller_user.set_audio(element.textContent);
				gg.view.set_view_hitpoint(element.textContent);
			}
			var element = document.getElementById('view_level');
			if (element != null) {
				//gg.controller_user.set_level(element.textContent);
				gg.view.set_view_level(element.textContent);
			}
		}
        gg.menu.data.callback();
        gg.menu.data.callback = null;
    }
}

gg.menu.back_top = function() {
    clearTimeout(gg.menu.data.animation.timer_id);

    location.href = 'index_game.html';

};
gg.menu.back_2 = function() {

	var temp_url = location.search.replace(/\?/,'').split(/&/);
	var parameter = {};
	for (var i = 0, len_max = temp_url.length; i < len_max; i++) {
	    var temp_word = temp_url[i].split('=');
	    parameter[temp_word[0]] = temp_word[1];
	}
	
	if(parameter.mode == 'team' && parameter.load != undefined && parameter.load == 'true') {
	    location.href = 'menu_load.html?mode=team';    
	} else if(parameter.mode == 'team' && parameter.next != undefined && parameter.next == 'true') {
	    location.href = 'menu_start.html?mode=team';
	} else {

	    var temp = location.search.replace(/\?/,'').split(/&/);
	    location.href = 'menu_team.html?' + temp[0] + '&' + temp[1] + '&' + temp[2] + '&' + temp[3]+ '&' + temp[4];    
	}

};

gg.menu.load_data = function(key) {
	
	var temp_url = location.search.replace(/\?/,'').split(/&/);
	var parameter = {};
	for (var i = 0, len_max = temp_url.length; i < len_max; i++) {
	    var temp_word = temp_url[i].split('=');
	    parameter[temp_word[0]] = temp_word[1];
	}
	
    gg.menu.data.save_data = gg.storage.load(key);
    
    var last_data = gg.menu.data.save_data[gg.menu.data.save_data.length - 1];
    
    var friend = document.getElementById('friend');
    //var friend_hitpoint = document.getElementById('friend_hitpoint');
    var enemy = document.getElementById('enemy');
    //var enemy_hitpoint = document.getElementById('enemy_hitpoint');
    var map = document.getElementById('map');
    var date = document.getElementById('date');
    var round = document.getElementById('round');
    var turn = document.getElementById('turn');
    var hande = document.getElementById('hande');
    var hitpoint = document.getElementById('hitpoint');
    
    friend.style.color = GG_DATA_MENU_COLOR_2[last_data.friend];
    enemy.style.color = GG_DATA_MENU_COLOR_2[last_data.enemy]
    //friend_hitpoint.innerHTML = last_data.hitpoint;
    //enemy_hitpoint.innerHTML = last_data.hande;
    map.innerHTML = last_data.map;
    date.innerHTML = last_data.date;
    hande.innerHTML = last_data.hande;
    hitpoint.innerHTML = last_data.hitpoint;
	
	if (parameter.mode == 'campaign') {
	    round.innerHTML = (last_data.round + 1);
	    turn.innerHTML = last_data.turn;
	} else if (parameter.mode == 'team') {
	    round.innerHTML = last_data.round;
	    turn.innerHTML = '-';
	}
    gg.menu.data.save_data_count = gg.menu.data.save_data.length - 1;
    
};

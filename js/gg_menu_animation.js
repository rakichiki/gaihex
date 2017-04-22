gg.menu_animation = {};
gg.menu_animation.data = {};
gg.menu_animation.data.count = 0;
gg.menu_animation.data.unit = [];
gg.menu_animation.data.ratio;
gg.menu_animation.data.max_count;
gg.menu_animation.data.sleep_time;
gg.menu_animation.data.before_time;
var GG_MENU_ANIMATION_PIC_BIN = 96;
var GG_MENU_ANIMATION_UNITS = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 50, 51, 52, 53, 54, 55, 100, 150, 152, 153, 154
//  150, 152, 153, 154
];

var GG_MENU_ANIMATION_PATTERN_LONG = [
	'lb', 'sb', 'hr', 'fn'
];

var GG_MENU_ANIMATION_PATTERN_MAGI = [
	'th', 'wn', 'ls', 'tk', 'wt', 'cc' 
];

var GG_MENU_ANIAMTION_PATTERN_SPEAR = [
	'sp'
];
var GG_MENU_ANIAMTION_PATTERN_EARS_QUAKE = [
	'er'
];

var GG_MENU_ANIMATION_ODRER_1 = [
   {pic:'m',  dir:3, sleep_time:3,  x:10, y:10}
  ,{pic:'m',  dir:4, sleep_time:3,  x:11, y:10}
  ,{pic:'m',  dir:5, sleep_time:3,  x:12, y:10}
  ,{pic:'m',  dir:4, sleep_time:3,  x:13, y:10}
  ,{pic:'m',  dir:3, sleep_time:3,  x:14, y:10}
  ,{pic:'m',  dir:4, sleep_time:3,  x:15, y:10}
  ,{pic:'m',  dir:5, sleep_time:3,  x:16, y:10}
  ,{pic:'m',  dir:4, sleep_time:3,  x:17, y:10}
  ,{pic:'m',  dir:3, sleep_time:3,  x:18, y:10}
  ,{pic:'m',  dir:4, sleep_time:3,  x:19, y:10}
  ,{pic:'m',  dir:5, sleep_time:3,  x:20, y:10}
  ,{pic:'m',  dir:4, sleep_time:3,  x:21, y:10}

  ,{pic:'a1', dir:3, sleep_time:2,  x:22, y:10}
  ,{pic:'a1', dir:4, sleep_time:1,  x:23, y:10}
  ,{pic:'a1', dir:5, sleep_time:18, x:23, y:10}

  ,{pic:'m',  dir:1, sleep_time:12, x:23, y:10}
  ,{pic:'m',  dir:1, sleep_time:12, x:23, y:10}
];

var GG_MENU_ANIMATION_ODRER_2 = [
   {pic:'m',  dir:3, sleep_time:3,  x:10, y:10}
  ,{pic:'m',  dir:4, sleep_time:3,  x:11, y:10}
  ,{pic:'m',  dir:5, sleep_time:3,  x:12, y:10}
  ,{pic:'m',  dir:4, sleep_time:3,  x:13, y:10}
  ,{pic:'m',  dir:3, sleep_time:3,  x:14, y:10}
  ,{pic:'m',  dir:4, sleep_time:3,  x:15, y:10}
  ,{pic:'m',  dir:5, sleep_time:3,  x:16, y:10}
  ,{pic:'m',  dir:4, sleep_time:3,  x:17, y:10}
  ,{pic:'m',  dir:3, sleep_time:3,  x:18, y:10}
  ,{pic:'m',  dir:4, sleep_time:3,  x:19, y:10}
  ,{pic:'m',  dir:5, sleep_time:3,  x:20, y:10}
  ,{pic:'m',  dir:4, sleep_time:3,  x:21, y:10}

  ,{pic:'a1', dir:3, sleep_time:2,  x:21, y:10}
  ,{pic:'a1', dir:4, sleep_time:10, x:21, y:10}
  ,{pic:'a1', dir:5, sleep_time:10, x:21, y:10}

  ,{pic:'m',  dir:1, sleep_time:12, x:21, y:10}
  ,{pic:'m',  dir:1, sleep_time:12, x:21, y:10}
];

var GG_MENU_ANIMATION_ODRER_3 = [
   {pic:'m',  dir:3, sleep_time:3,  x:10, y:10}
  ,{pic:'m',  dir:4, sleep_time:3,  x:11, y:10}
  ,{pic:'m',  dir:5, sleep_time:3,  x:12, y:10}
  ,{pic:'m',  dir:4, sleep_time:3,  x:13, y:10}
  ,{pic:'m',  dir:3, sleep_time:3,  x:14, y:10}
  ,{pic:'m',  dir:4, sleep_time:3,  x:15, y:10}
  ,{pic:'m',  dir:5, sleep_time:3,  x:16, y:10}
  ,{pic:'m',  dir:4, sleep_time:3,  x:17, y:10}
  ,{pic:'m',  dir:3, sleep_time:3,  x:18, y:10}
  ,{pic:'m',  dir:4, sleep_time:3,  x:19, y:10}
  ,{pic:'m',  dir:5, sleep_time:3,  x:20, y:10}
  ,{pic:'m',  dir:4, sleep_time:3,  x:21, y:10}

  ,{pic:'a1', dir:3, sleep_time:1,  x:21, y:10}
  ,{pic:'a1', dir:4, sleep_time:1,  x:21, y:10}
  ,{pic:'a1', dir:3, sleep_time:1,  x:21, y:10}
  ,{pic:'a1', dir:4, sleep_time:1,  x:21, y:10}
  ,{pic:'a1', dir:3, sleep_time:1,  x:21, y:10}
  ,{pic:'a1', dir:4, sleep_time:1,  x:21, y:10}
  ,{pic:'a1', dir:3, sleep_time:1,  x:21, y:10}
  ,{pic:'a1', dir:4, sleep_time:1,  x:21, y:10}
  ,{pic:'a1', dir:5, sleep_time:12,  x:21, y:10}

  ,{pic:'m',  dir:1, sleep_time:12, x:21, y:10}
  ,{pic:'m',  dir:1, sleep_time:12, x:21, y:10}
];

var GG_MENU_ANIMATION_ODRER_4 = [
   {pic:'m',  dir:3, sleep_time:3,  x:10, y:10}
  ,{pic:'m',  dir:4, sleep_time:3,  x:11, y:10}
  ,{pic:'m',  dir:5, sleep_time:3,  x:12, y:10}
  ,{pic:'m',  dir:4, sleep_time:3,  x:13, y:10}
  ,{pic:'m',  dir:3, sleep_time:3,  x:14, y:10}
  ,{pic:'m',  dir:4, sleep_time:3,  x:15, y:10}
  ,{pic:'m',  dir:5, sleep_time:3,  x:16, y:10}
  ,{pic:'m',  dir:4, sleep_time:3,  x:17, y:10}
  ,{pic:'m',  dir:3, sleep_time:3,  x:18, y:10}
  ,{pic:'m',  dir:4, sleep_time:3,  x:19, y:10}
  ,{pic:'m',  dir:5, sleep_time:3,  x:20, y:10}
  ,{pic:'m',  dir:4, sleep_time:3,  x:21, y:10}

  ,{pic:'a1', dir:3, sleep_time:1,  x:23, y:10}
  ,{pic:'a1', dir:4, sleep_time:1,  x:25, y:10}
  ,{pic:'a1', dir:5, sleep_time:12, x:27, y:10}

  ,{pic:'m',  dir:1, sleep_time:12, x:27, y:10}
  ,{pic:'m',  dir:1, sleep_time:12, x:27, y:10}
];

var GG_MENU_ANIMATION_ODRER_5 = [
   {pic:'m',  dir:3, sleep_time:3,  x:10, y:10}
  ,{pic:'m',  dir:4, sleep_time:3,  x:11, y:10}
  ,{pic:'m',  dir:5, sleep_time:3,  x:12, y:10}
  ,{pic:'m',  dir:4, sleep_time:3,  x:13, y:10}
  ,{pic:'m',  dir:3, sleep_time:3,  x:14, y:10}
  ,{pic:'m',  dir:4, sleep_time:3,  x:15, y:10}
  ,{pic:'m',  dir:5, sleep_time:3,  x:16, y:10}
  ,{pic:'m',  dir:4, sleep_time:3,  x:17, y:10}
  ,{pic:'m',  dir:3, sleep_time:3,  x:18, y:10}
  ,{pic:'m',  dir:4, sleep_time:3,  x:19, y:10}
  ,{pic:'m',  dir:5, sleep_time:3,  x:20, y:10}
  ,{pic:'m',  dir:4, sleep_time:3,  x:21, y:10}

  ,{pic:'a1', dir:3, sleep_time:8,  x:21, y:10}
  ,{pic:'a1', dir:4, sleep_time:1,  x:21, y:10}
  ,{pic:'a1', dir:5, sleep_time:12,  x:21, y:10}

  ,{pic:'m',  dir:1, sleep_time:12, x:21, y:10}
  ,{pic:'m',  dir:1, sleep_time:12, x:21, y:10}
];
////////////////////////////////////////////////////////////////////////









// set
gg.menu_animation.animation_start = function() {
    var temp_type = GG_DATA_CHAR_STR[GG_MENU_ANIMATION_UNITS[[Math.floor(Math.random() * GG_MENU_ANIMATION_UNITS.length)]]];
	//if (temp_type == '') {
	//	console.log('NG');
	//}
	if (GG_MENU_ANIMATION_PATTERN_LONG.indexOf(temp_type) >= 0) {
		var pattern = GG_MENU_ANIMATION_ODRER_2;
		//console.log('2');
	} else if (GG_MENU_ANIMATION_PATTERN_MAGI.indexOf(temp_type) >= 0) {
		var pattern = GG_MENU_ANIMATION_ODRER_3;
		//console.log('3');
	} else if (GG_MENU_ANIAMTION_PATTERN_SPEAR.indexOf(temp_type) >= 0) {
		var pattern = GG_MENU_ANIMATION_ODRER_4;
		//console.log('4');
	} else if (GG_MENU_ANIAMTION_PATTERN_EARS_QUAKE.indexOf(temp_type) >= 0) {
		var pattern = GG_MENU_ANIMATION_ODRER_5;
		//console.log('5');
	} else {
		var pattern = GG_MENU_ANIMATION_ODRER_1;		
		//console.log('1');
	}
	gg.menu_animation.data.max_count = pattern.length; 
    for (var i = 0; i < pattern.length; i ++) {
        gg.menu_animation.data.unit.push({type: temp_type,
										  pic:  pattern[i].pic,
                                          dir:  pattern[i].dir,
                                          sleep_time: pattern[i].sleep_time, 
                                          x:pattern[i].x + 10,
										  y:pattern[i].y});
    }
    
    //var hight = 178;
    //var str_hight = 30;
    //var ratio;
    //var start_x = 0;
    //var size_default = 157;
    //ratio = 10;
    //for (var i = 1; i <= ratio; i++) {
	//    if (window.devicePixelRatio * window.innerWidth < size_default * i) {
	//	    ratio = i - 1;
	//	    //a.innerHTML += ' ratio:' + ratio;
	//	    break;
	 //   }
    //}
    //if (ratio < 3) {
	//    ratio = 3;
	    //a.innerHTML += ' ratio:' + ratio;
    //}
    //for (var i = 1; i < ratio; i++) {
	//    if (window.devicePixelRatio * window.innerHeight < (hight + str_hight) * i) {
	//	    if (ratio > i - 1) {
	//		    ratio = i - 1;
	//	    }
		    //a.innerHTML += ' ratio:' + ratio;
	//	    break;
	 //   }
    //}			
    //if (ratio < 3) {
	//    ratio = 3;
	    //a.innerHTML += ' ratio:' + ratio;
    //}
	var ratio = gg.menu.ratio_cal();
    var element = document.getElementById('unit');
    var element_div = document.getElementById('div_unit');
	//element_div.style.width = GG_DATA_SIZE_ARRAY[ratio].size + 'px';
	//element_div.style.height = GG_DATA_SIZE_ARRAY[ratio].size + 'px';
    //element.style.width = (GG_DATA_SIZE_ARRAY[ratio].size * 3 / window.devicePixelRatio) + 'px';
    //element.style.height = (GG_DATA_SIZE_ARRAY[ratio].size * 4/ window.devicePixelRatio) + 'px';

	element_div.style.width = (ratio * 24) + 'px';
	element_div.style.height = (ratio * 24) + 'px';
    element.style.width = ((ratio * 24) * 3 / window.devicePixelRatio) + 'px';
    element.style.height = ((ratio * 24) * 4/ window.devicePixelRatio) + 'px';
    
    gg.menu_animation.data.ratio = ratio;
    
    gg.menu_animation.data.max_count = pattern.length;

    gg.menu_animation.animation_doing();

};

// doing
gg.menu_animation.animation_doing = function() {
    var temp_animation;
    var element;
    var unit = gg.menu_animation.data.unit[gg.menu_animation.data.count];
    element = document.getElementById('unit');
    element.src = 'img/0240/' + unit.type + '_' + unit.pic + '_0240.png';
    var top_position = Math.floor(unit.dir / 3 );
    var right_position = (unit.dir - top_position * 3);
    element.style.clip = 'rect('
                         + (gg.menu_animation.data.ratio * 24 * top_position / window.devicePixelRatio) + 'px '
                         + (gg.menu_animation.data.ratio * 24 * (right_position + 1) / window.devicePixelRatio) + 'px '
                         + (gg.menu_animation.data.ratio * 24 * (top_position + 1) / window.devicePixelRatio) + 'px '
                         + (gg.menu_animation.data.ratio * 24 * right_position / window.devicePixelRatio) + 'px)';
    element.style.left = (-1 * gg.menu_animation.data.ratio * 24 * right_position / window.devicePixelRatio) + 'px';
    element.style.top = (-1 * gg.menu_animation.data.ratio * 24 * top_position / window.devicePixelRatio) + 'px';
    //console.log('unit_dir:' + unit.dir);

    var div_element = document.getElementById('div_unit');
    div_element.style.left = (unit.x * gg.menu_animation.data.ratio * 24 / 8 / window.devicePixelRatio) + 'px';
    div_element.style.top = (unit.y * gg.menu_animation.data.ratio * 24 / 8 / window.devicePixelRatio) + 'px';

    gg.menu_animation.data.count++;
    if (gg.menu_animation.data.count < gg.menu_animation.data.max_count) {
        setTimeout(gg.menu_animation.animation_doing, GG_DATA_TIMEOUT_ANIMATION_1 * unit.sleep_time);
    } else {
        gg.menu_animation.animation_end();
    }
};

// end
gg.menu_animation.animation_end = function() {
	//gg.fadeout.start('index_game.html');
    location.href = 'index_game.html';
};

// index_game page animation
gg.menu_animation.set_home_animation = function() {
	var now_date = new Date();
	gg.menu_animation.data.next_time = Math.floor(Math.random() * 100) + now_date.getTime();
	var ratio = gg.menu.ratio_cal();
    gg.menu_animation.data.ratio = ratio;
	gg.menu_animation.data.count = 0;

	gg.menu_animation.data.unit = ['ss', 'ss', 'ss', 'ss', 'ss', 'ss', 'ss'];
	for (var i = 0; i < gg.menu_animation.data.unit.length; i++) {
		var element = document.getElementById('img_animation_' + i);
		element.style.zoom = (ratio/ 10 * 100) + '%';
		
	}
	gg.menu_animation.data.animation_timer_id = requestAnimationFrame(gg.menu_animation.view_home_animation);
};

gg.menu_animation.view_home_animation = function() {
	var now_date = new Date();
	if (gg.menu_animation.data.next_time > now_date.getTime()) {
		gg.menu_animation.data.animation_timer_id = requestAnimationFrame(gg.menu_animation.view_home_animation);
		return;
	}
	var element, div_element;
	// draw
	var right_position;
	for (var i = 0; i < gg.menu_animation.data.unit.length; i++) {
	//for (var i = 0; i < 1; i++) {
		element = document.getElementById('img_animation_' + i);
		element.src = 'img/0240/' + gg.menu_animation.data.unit[i] + '_m_0240.png';
	    var top_position = 1;
	    //var right_position = gg.menu_animation.data.count % 3;
		if (gg.menu_animation.data.count % 4 == 0) {
			right_position = 0;
		} else if (gg.menu_animation.data.count % 4 == 2) {
			right_position = 2;
		} else {
			right_position = 1;
			
		}
		element.style.clip = 'rect('
                         + (240 * top_position) + 'px '
                         + (240 * (right_position + 1)) + 'px '
                         + (240 * (top_position + 1)) + 'px '
                         + (240 * right_position) + 'px)';
		element.style.left = (-1 * 240 * right_position) + 'px';
		element.style.top  = (-1 * 240 * top_position) + 'px';
		
		div_element = document.getElementById('animation_' + i);
	    div_element.style.left = (gg.menu_animation.data.count * 240 / 16 / window.devicePixelRatio + i * 240 /16) + 'px';
	    div_element.style.top = (i * 80 / window.devicePixelRatio) + 'px';
	}
	
	gg.menu_animation.data.count++;
	// sleep
	gg.menu_animation.data.next_time = now_date.getTime() + 300;
	gg.menu_animation.data.animation_timer_id = requestAnimationFrame(gg.menu_animation.view_home_animation);
	
};


gg.menu_animation.stop_home_animation = function() {
	
};



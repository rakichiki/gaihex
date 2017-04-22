gg.view = {};
gg.view.data = {};
gg.view.data.callback;
gg.view.data.animation_array;
gg.view.data.animation_count;
gg.view.data.load_count = 0;
gg.view.data.loading_img = {};
gg.view.data.img = new Array();
gg.view.data.unit_img = {};
gg.view.data.unit_img_list = new Array();
gg.view.data.map_img = [];
gg.view.data.map_img_list = new Array();
gg.view.data.load_file_flag = 0;
gg.view.data.etc_img_list = new Array();
gg.view.data.etc_img = {};
gg.view.data.load_file_number;
gg.view.data.load_file_max_number;
gg.view.data.loading_time;
gg.view.data.loading_vector;
gg.view.data.loading_start = false;
gg.view.data.loading_timer_id;
gg.view.data.animation_timer_id;
gg.view.data.ratio = 1;
gg.view.data.all_count = 0;
gg.view.data.audio;
gg.view.data.audio_flag;
gg.view.data.hitpoint_flag;
gg.view.data.level_flag = true;
gg.view.data.audio_array = {};

gg.view.data.map;
gg.view.data.select_map;
gg.view.data.area_map;
gg.view.data.zoom;
//gg.view.data.retina;

//var GG_VIEW_SHADOW_DARK = 0;
//var GG_VIEW_SHADOW_LIQUID = 1;
var GG_VIEW_SELECT_AREA_BIN = 3;

var GG_VIEW_LOAD_MAP  = 0;
var GG_VIEW_LOAD_ETC  = 1;
var GG_VIEW_LOAD_UNIT = 2;

//var GG_VIEW_CANVAS_1 = 1;
//var GG_VIEW_CANVAS_2 = 2;

var GG_VIEW_UNIT          = 0;
var GG_VIEW_ETC           = 1;
var GG_VIEW_ETC_LINE      = 2;
//var GG_VIEW_UNIT_LINE     = 3;
//var GG_VIEW_UNIT_FAMOUS   = 4;
//var GG_VIEW_ETC_LINE_HALF = 2;

var GG_VIEW_HEX_WIDTH    = 12.5;
var GG_VIEW_HEX_HIGH     = 5.7;
var GG_VIEW_HEX_HIGH_BIN = 2;

var GG_VIEW_IMAGE_SIZE = 24;
//var GG_VIEW_MAP_IMAGE_HIGHT = 33;
var GG_VIEW_MAP_IMAGE_HIGHT = 26;
var GG_VIEW_MAP_IMAGE_WIDTH = 26;
var GG_VIEW_UNIT_HIGH = 16.4;

var GG_VIEW_AREA_BIN = 0.8;
var GG_VIEW_AREA_Y_BIN = 0.7

//var GG_VIEW_HEX_WIDTH = 26;
//var GG_VIEW_HEX_HIGH = 4;
//var GG_VIEW_HEX_HIGH = GG_VIEW_HEX_WIDTH / 2;
//var GG_VIEW_IMAGE_SIZE = 48;
//var GG_VIEW_MAP_IMAGE_HIGHT = 68;
//var GG_VIEW_MAP_IMAGE_WIDTH = 55;
//var GG_VIEW_HEX_HIGH_BIN = Math.floor(GG_VIEW_HEX_WIDTH / 6);

//var GG_VIEW_MAP_WIDTH = 320;
//var GG_VIEW_MAP_HEIGHT = 400;

var GG_VIEW_FONT_LITTLE = 1;

//var GG_VIEW_WHITE = 0;

var GG_VIEW_FRONT_LEFT  = 0;
var GG_VIEW_FRONT_SAME  = 1;
var GG_VIEW_FRONT_RIGHT = 2;
var GG_VIEW_RIGHT_LEFT  = 3;
var GG_VIEW_RIGHT_SAME  = 4;
var GG_VIEW_RIGHT_RIGHT = 5;
var GG_VIEW_LEFT_LEFT   = 6;
var GG_VIEW_LEFT_SAME   = 7;
var GG_VIEW_LEFT_RIGHT  = 8;
var GG_VIEW_BACK_LEFT   = 9;
var GG_VIEW_BACK_SAME   = 10;
var GG_VIEW_BACK_RIGHT  = 11;

//var GG_VIEW_STATUS_50 = 0;
//var GG_VIEW_STATUS_20 = 1;
//var GG_VIEW_STATUS_00 = 2;

var GG_VIEW_RECOVERY_ACTION = 10;

//var GG_VIEW_LEVEL_UP = 0;
//var GG_VIEW_STOPPED = 0;
//var GG_VIEW_PASSIVE = 0;

var GG_VIEW_EFFECT_LEVELUP_1   = 0;
//var GG_VIEW_EFFECT_LEVELUP_2   = 1;
//var GG_VIEW_EFFECT_LEVELUP_3   = 2;
var GG_VIEW_EFFECT_JOBCHANGE_1 = 3;
var GG_VIEW_EFFECT_JOBCHANGE_2 = 4;
var GG_VIEW_EFFECT_JOBCHANGE_3 = 5;
var GG_VIEW_EFFECT_HITPOINT_1  = 6;
//var GG_VIEW_EFFECT_HITPOINT_2  = 7;
//var GG_VIEW_EFFECT_HITPOINT_3  = 8;
var GG_VIEW_EFFECT_ASSAULT_1   = 0;
var GG_VIEW_EFFECT_ASSAULT_2   = 1
var GG_VIEW_EFFECT_ASSAULT_3   = 2;
var GG_VIEW_EFFECT_CLASS_DOWN_1   = 3;
var GG_VIEW_EFFECT_CLASS_DOWN_2   = 4
var GG_VIEW_EFFECT_CLASS_DOWN_3   = 5;

//var GG_VIEW_EFFECT_FATIGUE_1 = 9;
//var GG_VIEW_EFFECT_FATIGUE_2 = 10
//var GG_VIEW_EFFECT_FATIGUE_3 = 11;
//var GG_VIEW_EFFECT_BERSERK_1 = 12;
//var GG_VIEW_EFFECT_BERSERK_2 = 13
//var GG_VIEW_EFFECT_BERSERK_3 = 14;

var GG_VIEW_STATUS_PASSIVE          = 0;
var GG_VIEW_STATUS_RECOVERY         = 1;
//var GG_VIEW_STATUS_PASSIVE_RECOVERY = 2;
var GG_VIEW_STATUS_FATIGUE          = 2;
var GG_VIEW_STATUS_DEAD_COUNT_DOWN  = 6;
var GG_VIEW_STATUS_CLASS_DOWN       = 9;

var GG_VIEW_STATUS_ATTACK_UP        = 10;
var GG_VIEW_STATUS_DEFENCE_UP       = 11;
var GG_VIEW_STATUS_MOVE_UP          = 12;
var GG_VIEW_STATUS_ATTACK_DOWN      = 11;

var GG_VIEW_SELECT_MAP_CIRCLE = 0;
//var GG_VIEW_SELECT_MAP_HEX    = 1;

var GG_VIEW_WHITE = 5;

var GG_VIEW_IMAGE_SIZE_FULL              = 0;
var GG_VIEW_IMAGE_SIZE_TOP_HALF          = 1;
var GG_VIEW_IMAGE_SIZE_BUTTOM_HALF       = 2;
var GG_VIEW_IMAGE_SIZE_TOP_QUARTER       = 3;
var GG_VIEW_IMAGE_SIZE_BUTTOM_QUARTER    = 4;
var GG_VIEW_IMAGE_SIZE_TOP_LEFT_QUARTER  = 5;
var GG_VIEW_IMAGE_SIZE_TOP_RIGHT_QUARTER = 6;
var GG_VIEW_IMAGE_SIZE_LONG_WEAPON       = 7;

var GG_VIEW_SHAKE_UPDOWN    = 0;
var GG_VIEW_SHAKE_LEFTRIGHT = 1;
var GG_VIEW_SHAKE_NO        = 2;

var GG_VIEW_IMAGE_STATUS_ICON = 'status_icon_00';

var GG_VIEW_IMAGE_START_POSITION = [
     {x:0,  y:0}
    ,{x:24, y:0}
    ,{x:48, y:0}
    ,{x:0,  y:24}
    ,{x:24, y:24}
    ,{x:48, y:24}
    ,{x:0,  y:48}
    ,{x:24, y:48}
    ,{x:48, y:48}
    ,{x:0,  y:72}
    ,{x:24, y:72}
    ,{x:48, y:72}  //4    
];

//var GG_VIEW_IMAGE_CASTLE_START_POSITION = [
//    {x:0, y:0}    // 0
//    ,{x:20, y:0}  
//    ,{x:40, y:0}
//    ,{x:60, y:0}
//    ,{x:80, y:0}
//    ,{x:100, y:0}
//    ,{x:120, y:0}
//    ,{x:140, y:0}
//    ,{x:160, y:0}
//    ,{x:180, y:0}
//];

//var GG_VIEW_IMAGE_QUARTER_START_LINE_POSITION = [
//     {x:0,   y:0}    // 0
//    ,{x:12,  y:0}  
//    ,{x:24,  y:0}
//    ,{x:36,  y:0}
//    ,{x:48,  y:0}
//    ,{x:60,  y:0}
//    ,{x:72,  y:0}
//    ,{x:84,  y:0}
//    ,{x:96,  y:0}
//    ,{x:108, y:0}
//];

//var GG_VIEW_IMAGE_STATUS_ICON_START_LINE_POSITION = [
//    {x:0,   y:0}    // 0
//    ,{x:6,  y:0}  
//    ,{x:12, y:0}
//    ,{x:18, y:0}
//    ,{x:24, y:0}
//    ,{x:30, y:0}
//    ,{x:36, y:0}
//    ,{x:42, y:0}
//    ,{x:48, y:0}
//    ,{x:54, y:0}
//];

var GG_VIEW_IMAGE_START_LINE_POSITION = [
    {x:0, y:0}    // 0
    ,{x:24, y:0}  
    ,{x:48, y:0}
    ,{x:72, y:0}
    ,{x:96, y:0}
    ,{x:120, y:0}
    ,{x:144, y:0}
    ,{x:168, y:0}
    ,{x:192, y:0}
    ,{x:216, y:0}
];


var GG_VIEW_IMAGE_NUMBER_POSITION = [
    {x:0, y:0}    // 0
    ,{x:16, y:0}  
    ,{x:32, y:0}
    ,{x:48, y:0}
    ,{x:64, y:0}
    ,{x:80, y:0}    // bug
    ,{x:96, y:0}    // bug
];

var GG_VIEW_IMAGE_EFFECT_POSITION = [
    {x:0, y:0}    // 0
    ,{x:14, y:0}  
    ,{x:28, y:0}
    ,{x:0,  y:14}    // 0
    ,{x:14, y:14}  
    ,{x:28, y:14}
];

//var GG_VIEW_START_X = GG_VIEW_HEX_WIDTH * -2 + GG_VIEW_HEX_HIGH_BIN - 1;
var GG_VIEW_START_X = GG_VIEW_HEX_WIDTH * -2;
var GG_VIEW_START_Y = 0;// + GG_VIEW_HEX_HIGH_BIN + 8;

//var GG_VIEW_ZOOM = 4;
//var GG_VIEW_ZOOM = 8;
var GG_VIEW_LINE_WIDTH = 0.5;
//var GG_VIEW_SELECT_LINE_WIDTH = 1;

//var GG_VIEW_ANIMATION_LINE_WIDTH = 2;
//var GG_VIEW_FONT_BIG = 4;
//var GG_VIEW_FONT_LITTLE = 2;

//var GG_VIEW_TIME_OUT = 1;

//var GG_VIEW_ANIMATION_ERASE       = 0;
//var GG_VIEW_ANIMATION_DRAW        = 1;
//var GG_VIEW_ANIMATION_TEXT        = 2;
//var GG_VIEW_ANIMATION_TEXT_ERASE  = 3;
//var GG_VIEW_ANIMATION_LINE_DRAW   = 4;
//var GG_VIEW_ANIMATION_LINE_ERASE  = 5;
//var GG_VIEW_ANIMATION_AREA_DRAW   = 6;
//var GG_VIEW_ANIMATION_AREA_ERASE  = 7;
//var GG_VIEW_ANIMATION_CIRCLE_DRAW = 8;

//var GG_VIEW_UNIT = 0;
//var GG_VIEW_MOVE = 1;
//var GG_VIEW_TOP  = 2;

var GG_VIEW_AREA = [
     [{line:'#707070', area:'#CCCCCC'}, {line:'#404040', area:'#888888'}, 'w']
    ,[{line:'#900000', area:'#C00000'}, {line:'#600000', area:'#FF6060'}, 'r']
    ,[{line:'#003000', area:'#006000'}, {line:'#001000', area:'#60F060'}, 'g']
    ,[{line:'#000090', area:'#0000C0'}, {line:'#000060', area:'#6060FF'}, 'b']
    ,[{line:'#003030', area:'#006060'}, {line:'#001010', area:'#60F0F0'}, 'c']
    ,[{line:'#900090', area:'#C000C0'}, {line:'#600060', area:'#FF60FF'}, 'm']
    ,[{line:'#909000', area:'#C0C000'}, {line:'#606000', area:'#FFFF60'}, 'y']
//    ,[{line:'#907030', area:'#C09070'}, {line:'#603020', area:'#FFDD30'}, 'o']
//  ,[{line:'#907070', area:'#C090B0'}, {line:'#604040', area:'#FFDDD0'}, 'p'] //
];

var GG_VIEW_AREA_ALPHA = 0.4;

var GG_VIEW_SELECT_ALPHA = 0.5;
//var GG_DIALOG_VIEW = 0;
//var GG_DIALOG_CLEAR = 0;

////////////////////////////////////////////////////////////////////////////////////////////
gg.view.set_pixel_ratio = function(ratio, start_x) {
    gg.view.data.ratio = ratio;
    GG_VIEW_START_X = GG_VIEW_HEX_WIDTH * -2 * ratio + start_x;
    // TODO top down
    GG_VIEW_START_Y = Math.floor(GG_VIEW_HEX_HIGH * ratio + 5 * ratio);
};
gg.view.load_count_clear = function() {
    var target2 = document.getElementById('canvas_0');
    var context2 = target2.getContext('2d');
    //context2.lineWidth = GG_VIEW_LINE_WIDTH * 2;
    
    context2.clearRect(0, 0, target2.clientWidth, target2.clientHeight);
};

gg.view.load_count_view = function() {
    var target2 = document.getElementById('canvas_0');
    var context2 = target2.getContext('2d');
    //context2.lineWidth = GG_VIEW_LINE_WIDTH * zoom * 2;
    
    context2.clearRect(0, 0, target2.clientWidth * window.devicePixelRatio, target2.clientHeight * window.devicePixelRatio);
    
    //context2.font = 'bold ' + GG_VIEW_FONT_LITTLE * 10 + 'pt Verdana';
    //context2.fillStyle = 'black';
    var load_percent = Math.floor(gg.view.data.load_file_number / gg.view.data.load_file_max_number * 100);
    var y = 0;
    var now = Date.now();
    gg.view.data.loading_vector += 1;
    if (gg.view.data.loading_vector == 2) {
        gg.view.data.loading_vector = 0;
    }
    if (load_percent > 100) {
        load_percent = 100;
    }
    if (load_percent < 20) {
        y = 0;
    } else if (load_percent < 40) {
        y = 192 * 1;
    } else if (load_percent < 60) {
        y = 192 * 2;
    } else if (load_percent < 80) {
        y = 192 * 3;
    } else  {
        y = 192 * 4;
    }
     
    //context2.fillText(load_percent + '%', 100, 300);  

    //console.log('clientHeight:' + target2.clientHeight + ' clientWidth:' + target2.clientWidth + ' x:' + ((target2.clientWidth - 192 / 2) / 3* window.devicePixelRatio) + ' y:'
    //             + (target2.clientHeight - 192 / 2) / 3 * window.devicePixelRatio);
    context2.drawImage(gg.view.data.loading_img,
                                      gg.view.data.loading_vector * 192, y,
                                      192,
                                      192,
                                      (target2.clientWidth - 192 / 2) / 2 * window.devicePixelRatio,
                                      (target2.clientHeight - 192 / 2) / 2 * window.devicePixelRatio,
                                      192,
                                      192);
                                      //(target2.clientWidth - 192 / 2) / 3 + 192 / 2,
                                      //(target2.clientHeight - 192 / 2) / 3 + 192 / 2);

};
gg.view.set_audio = function(audio) {
    if (audio == GG_DATA_AUDIO_ARRAY[1]) {
        gg.view.data.audio_flag = true;
    } else {
        gg.view.data.audio_flag = false;
    }
};

gg.view.set_view_hitpoint = function(view_hitpoint) {
    if (view_hitpoint == GG_DATA_VIEW_HITPOINT_ARRAY[0]) {
        gg.view.data.hitpoint_flag = true;
    } else {
        gg.view.data.hitpoint_flag = false;
    }
};

gg.view.set_view_level = function(view_level) {
    if (view_level == GG_DATA_VIEW_LEVEL_ARRAY[0]) {
        gg.view.data.level_flag = true;
    } else {
        gg.view.data.level_flag = false;
    }
};
//gg.view.load_audio = function() {
//    gg.view.data.audio.load();
//};

gg.view.init_start = function(map_file, unit_file,
                              etc_file, func, zoom) {
    //gg.view.data.zoom = zoom;
    //var audio_url = 'audio/damage3.mp3';
    
    //if (navigator.userAgent.indexOf('Android') >= 0) {
    //    audio_url = 'file:///android_asset/www/audio/damage3.mp3';
    //}
    //gg.view.data.audio = new Audio(audio_url);

    var temp_audio_url = GG_DATA_SOUND_PC_PATH + GG_DATA_SOUND_WEAPON_DAMAGE;
    if (navigator.userAgent.indexOf('Android') >= 0) {
        temp_audio_url = GG_DATA_SOUND_ANDROID_PATH + GG_DATA_SOUND_WEAPON_DAMAGE;;
    }
    if (navigator.userAgent.indexOf('Android') >= 0) {
        gg.view.data.audio_array[GG_DATA_SOUND_WEAPON_DAMAGE] = new Media(temp_audio_url, null);        

    } else {
        gg.view.data.audio_array[GG_DATA_SOUND_WEAPON_DAMAGE] = new Audio(temp_audio_url);        
    }

    temp_audio_url = GG_DATA_SOUND_PC_PATH + GG_DATA_SOUND_MAGIC_DAMAGE;
    if (navigator.userAgent.indexOf('Android') >= 0) {
        temp_audio_url = GG_DATA_SOUND_ANDROID_PATH + GG_DATA_SOUND_MAGIC_DAMAGE;;
    }    
    if (navigator.userAgent.indexOf('Android') >= 0) {
        gg.view.data.audio_array[GG_DATA_SOUND_MAGIC_DAMAGE] = new Media(temp_audio_url, null);        

    } else {
        gg.view.data.audio_array[GG_DATA_SOUND_MAGIC_DAMAGE] = new Audio(temp_audio_url);
        
    }

    temp_audio_url = GG_DATA_SOUND_PC_PATH + GG_DATA_SOUND_RECOVERY;
    if (navigator.userAgent.indexOf('Android') >= 0) {
        temp_audio_url = GG_DATA_SOUND_ANDROID_PATH + GG_DATA_SOUND_RECOVERY;;
    }    
    if (navigator.userAgent.indexOf('Android') >= 0) {
        gg.view.data.audio_array[GG_DATA_SOUND_RECOVERY] = new Media(temp_audio_url, null);        

    } else {
        gg.view.data.audio_array[GG_DATA_SOUND_RECOVERY] = new Audio(temp_audio_url);
        
    }

    temp_audio_url = GG_DATA_SOUND_PC_PATH + GG_DATA_SOUND_LOST;
    if (navigator.userAgent.indexOf('Android') >= 0) {
        temp_audio_url = GG_DATA_SOUND_ANDROID_PATH + GG_DATA_SOUND_LOST;;
    }    
    if (navigator.userAgent.indexOf('Android') >= 0) {
        gg.view.data.audio_array[GG_DATA_SOUND_LOST] = new Media(temp_audio_url, null);        

    } else {
        gg.view.data.audio_array[GG_DATA_SOUND_LOST] = new Audio(temp_audio_url);
        
    }

    temp_audio_url = GG_DATA_SOUND_PC_PATH + GG_DATA_SOUND_CLASS_CHANGE;
    if (navigator.userAgent.indexOf('Android') >= 0) {
        temp_audio_url = GG_DATA_SOUND_ANDROID_PATH + GG_DATA_SOUND_CLASS_CHANGE;;
    }    
    if (navigator.userAgent.indexOf('Android') >= 0) {
        gg.view.data.audio_array[GG_DATA_SOUND_CLASS_CHANGE] = new Media(temp_audio_url, null);        

    } else {
        gg.view.data.audio_array[GG_DATA_SOUND_CLASS_CHANGE] = new Audio(temp_audio_url);
        
    }

    temp_audio_url = GG_DATA_SOUND_PC_PATH + GG_DATA_SOUND_STATUS_UP;
    if (navigator.userAgent.indexOf('Android') >= 0) {
        temp_audio_url = GG_DATA_SOUND_ANDROID_PATH + GG_DATA_SOUND_STATUS_UP;;
    }    
    if (navigator.userAgent.indexOf('Android') >= 0) {
        gg.view.data.audio_array[GG_DATA_SOUND_STATUS_UP] = new Media(temp_audio_url, null);        

    } else {
        gg.view.data.audio_array[GG_DATA_SOUND_STATUS_UP] = new Audio(temp_audio_url);
        
    }

    temp_audio_url = GG_DATA_SOUND_PC_PATH + GG_DATA_SOUND_FADE_IN;
    if (navigator.userAgent.indexOf('Android') >= 0) {
        temp_audio_url = GG_DATA_SOUND_ANDROID_PATH + GG_DATA_SOUND_FADE_IN;;
    }    
    if (navigator.userAgent.indexOf('Android') >= 0) {
        gg.view.data.audio_array[GG_DATA_SOUND_FADE_IN] = new Media(temp_audio_url, null);        

    } else {
        gg.view.data.audio_array[GG_DATA_SOUND_FADE_IN] = new Audio(temp_audio_url);
        
    }

    temp_audio_url = GG_DATA_SOUND_PC_PATH + GG_DATA_SOUND_LEVEL_UP;
    if (navigator.userAgent.indexOf('Android') >= 0) {
        temp_audio_url = GG_DATA_SOUND_ANDROID_PATH + GG_DATA_SOUND_LEVEL_UP;;
    }    
    if (navigator.userAgent.indexOf('Android') >= 0) {
        gg.view.data.audio_array[GG_DATA_SOUND_LEVEL_UP] = new Media(temp_audio_url, null);        

    } else {
        gg.view.data.audio_array[GG_DATA_SOUND_LEVEL_UP] = new Audio(temp_audio_url);
        
    }

    //gg.view.data.audio.load();
    var temp_audio_flag = gg.storage.get_audio();
    if (temp_audio_flag == GG_DATA_AUDIO_ARRAY[1]) {
        gg.view.data.audio_flag = true;
    } else {
        gg.view.data.audio_flag = false;
    }
    var temp_hitpoint_flag = gg.storage.get_hitpoint();
    if (temp_hitpoint_flag == GG_DATA_VIEW_HITPOINT_ARRAY[0]) {
        gg.view.data.hitpoint_flag = true;
    } else {
        gg.view.data.hitpoint_flag = false;
    }
    var temp_level_flag = gg.storage.get_level();
    if (temp_level_flag == GG_DATA_VIEW_LEVEL_ARRAY[0]) {
        gg.view.data.level_flag = true;
    } else {
        gg.view.data.level_flag = false;
    }
    
    var target = document.getElementById('canvas_0');
    var context = target.getContext('2d');
    context.lineWidth = GG_VIEW_LINE_WIDTH * zoom * 2;

    gg.view.data.animation_timer_id = null;
    gg.view.data.unit_img_list = unit_file;
    gg.view.data.map_img_list = map_file;
    gg.view.data.etc_img_list = etc_file;
    gg.view.data.load_count = -1;
    gg.view.data.load_file_flag = GG_VIEW_LOAD_MAP;
    gg.view.data.load_file_max_number = unit_file.length + map_file.length + etc_file.length;
    gg.view.data.load_file_number = 0;
    gg.view.data.loading_start = false;
    
    if (func != null) {
        gg.view.data.callback = func;
    } else {
        gg.view.data.callback = null;
    }
    gg.view.data.loading_time = Date.now();
    gg.view.data.loading_vector = 1;
    var img = new Image();
    img.src = 'img/loading_0096.png';
    gg.view.data.loading_img = img;
    //gg.view.data.map_img[gg.view.data.load_count] = img;
    img.onload = function() {
        gg.view.init_load();
    };
};

gg.view.init_load = function() {
    gg.view.data.load_count++;
    gg.view.data.load_file_number++;
    if (gg.view.data.loading_start == false) {
        gg.view.data.loading_start = true;
        gg.view.data.loading_timer_id = setInterval('gg.view.load_count_view()',500);
        
    }
    //gg.view.load_count_view();
    if (gg.view.data.load_file_flag == GG_VIEW_LOAD_MAP &&
        gg.view.data.load_count >= gg.view.data.map_img_list.length) {
        gg.view.data.load_file_flag = GG_VIEW_LOAD_ETC;
        gg.view.data.load_count = -1;
        gg.view.init_etc_load();

    } else {
        var img = new Image();
        img.src = gg.view.data.map_img_list[gg.view.data.load_count];
        gg.view.data.map_img[gg.view.data.load_count] = img;
        img.onload = function() {
            gg.view.init_load();
        };
    }
};

gg.view.init_etc_load = function() {
    gg.view.data.load_count++;
    gg.view.data.load_file_number++;
    if (gg.view.data.load_count >= gg.view.data.etc_img_list.length) {
        gg.view.data.load_file_flag = GG_VIEW_LOAD_UNIT;
        gg.view.data.load_count = -1;
        gg.view.init_unit_load();

    } else {
        var img = new Image();
        img.src = gg.view.data.etc_img_list[gg.view.data.load_count];
        gg.view.data.etc_img[gg.view.data.etc_img_list[gg.view.data.load_count]] = img;
        img.onload = function() {
            gg.view.init_etc_load();
        };
    }
};

gg.view.init_unit_load = function() {
    gg.view.data.load_count++;
    gg.view.data.load_file_number++;
    if (gg.view.data.load_count >= gg.view.data.unit_img_list.length) {
        clearInterval(gg.view.data.loading_timer_id);
        gg.view.load_count_clear();
        if (gg.view.data.callback != null) {

            gg.view.data.loading_img = null;
            gg.view.data.callback();
        }
    } else {
        var img = new Image();
        img.src = gg.view.data.unit_img_list[gg.view.data.load_count];
        //document.getElementById('load_file').innerHTML = gg.view.data.unit_img_list[gg.view.data.load_count];

        gg.view.data.unit_img[gg.view.data.unit_img_list[gg.view.data.load_count]] = img;
        img.onload = function() {
            gg.view.init_unit_load();
        };
    }
};

gg.view.init_all_count = function() {
    gg.view.data.all_count = 0;
};
gg.view.get_all_count = function() {
    return gg.view.data.all_count;
};

gg.view.animation_set2 = function(animation_array, func, map, zoom, area_map, select_map, fix_units,
                                  fix_numbers, fix_number_animation_length, timeout, loop_flag, dialog,
                                  audio) {
    gg.view.data.animation_array = animation_array;
    gg.view.data.map             = map;
    gg.view.data.fix_units       = fix_units;
    gg.view.data.fix_numbers     = fix_numbers;
    gg.view.data.fix_number_animation_length = fix_number_animation_length;
    gg.view.data.area_map          = area_map;
    gg.view.data.select_map        = select_map;
    gg.view.data.select_map_number = 0;
    gg.view.data.zoom              = zoom;
    gg.view.data.timeout           = timeout;
    gg.view.data.loop_flag         = loop_flag;
    gg.view.data.dialog            = dialog;
    gg.view.data.callback          = func;
    gg.view.data.audio             = audio;
    
    gg.view.data.animation_count   = 0;
    gg.view.data.view_flag         = 0;
    gg.view.data.now               = 0;
    gg.view.data.area              ={count: -1};
    
    //if (gg.view.data.audio_flag == true) {
    //    gg.view.data.audio.load();
    //}
    gg.view.animation_view2();
};

gg.view.animation_view2 = function() {
    var now_date = new Date();
    var timeout = gg.view.data.timeout;
    // BenchMark comment out start
    if (gg.view.data.fix_number_animation_length == null) {
        if (gg.view.data.animation_array.length > gg.view.data.animation_count &&
            gg.view.data.animation_array[gg.view.data.animation_count].timeout != undefined) {
            timeout = gg.view.data.animation_array[gg.view.data.animation_count].timeout;
        } else {
            timeout = 10;
        }
    }
    if (now_date.getTime() - gg.view.data.now < timeout &&
        gg.view.data.area.count == -1) {
        gg.view.data.animation_timer_id = requestAnimationFrame(gg.view.animation_view2);
        return;
    //} else if (now_date.getTime() - gg.view.data.now < timeout * 0.3 &&
    } else if (now_date.getTime() - gg.view.data.now < 10 &&
        gg.view.data.area.count > -1) {
        gg.view.data.animation_timer_id = requestAnimationFrame(gg.view.animation_view2);
        return;
    }
    // BenchMark comment out end
    
    var map               = gg.view.data.map;
    var fix_units         = gg.view.data.fix_units;
    var select_map        = gg.view.data.select_map;
    var select_map_number = gg.view.data.select_map_number;
    var zoom              = gg.view.data.zoom;
    var audio             = gg.view.data.audio;

    if (gg.view.data.fix_number_animation_length == null) {
        var units   = gg.view.data.animation_array[gg.view.data.animation_count].units;
        var weapons = gg.view.data.animation_array[gg.view.data.animation_count].weapons;

    } else {
        var units = new Array(map.length);
        for (var i = 0; i < units.length; i++) {
            units[i] = new Array(3);
            for (var j = 0; j < units[i].length; j++) {
                units[i][j] = [];
            }
        }
        var weapons = [];
    }
    var fix_numbers                 = gg.view.data.fix_numbers;
    var fix_number_animation_length = gg.view.data.fix_number_animation_length;
    // no view start
    //var no_view_flag = true;
    //if (gg.view.data.animation_count > 0) {
    //    if (fix_numbers.length > 0) {
    //        no_view_flag = false;
    //    }
    //    if (no_view_flag == true) {
    //        var before_units = gg.view.data.animation_array[gg.view.data.animation_count - 1].units;
    //        if (before_units.length == units.length) {
    //            for (var i = 0; i < units.length; i++) {
                    
    //                if (units[i].map_x != before_units[i].map_x ||
    //                    units[i].map_y != before_units[i].map_y ||
    //                    units[i].vector != before_units[i].vector ||
    //                    units[i].image != before_units[i].image ||
    //                    units[i].y != before_units[i].y ||
    //                    units[i].x != before_units[i].x ||
    //                    units[i].fade != before_units[i].fade ||
    //                    units[i].vector3 != before_units[i].vector3 ||
    //                    units[i].alpha != before_units[i].alpha 
    //                    ) {
    //                    no_view_flag = false;
    //                    break;
    //                }
    //            }
    //        } else {
    //            no_view_flag = false;
    //        }
    //    }

    //    if (no_view_flag == true) {
    //        gg.view.data.animation_count++;
    //        var next_check = true;
    //        if (fix_number_animation_length != null) {
    //            if (gg.view.data.animation_count >= fix_number_animation_length) {
    //                next_check = false;
    //            }
    //        } else {
    //            if (gg.view.data.animation_count >= gg.view.data.animation_array.length) {
    //                next_check = false;
    //        
    //            }
    //        }
    //        if (next_check == false) {
    //            gg.view.data.animation_timer_id = null;
    //            if (gg.view.data.callback != null) {
    //                gg.view.data.animation_array = null;
    //                gg.view.data.fix_units = null;
    //                gg.view.data.callback();
    //            }
    //        } else {
    //            var next_timeout = timeout;
    //            if (fix_number_animation_length == null) {
    //                next_timeout = gg.view.data.animation_array[gg.view.data.animation_count - 1].timeout;
    //            }
    //            gg.view.data.animation_timer_id = setTimeout(gg.view.animation_view2, next_timeout);
                //requestAnimationFrame(gg.view.animation_view2);
    //        }
    //        return;
    //    }
    //}
    // no view end
    var img_name = '';
    var img_vecotr = 0;
    var diff_x = 0.75;
    var fade_y_size;
        
    var target = document.getElementById('canvas_0');
    var context = target.getContext('2d');
    context.clearRect(0, 0, target.clientWidth * zoom, target.clientHeight * zoom);
    context.font = 'bold ' + GG_VIEW_FONT_LITTLE * zoom * 2.5 + 'pt Verdana';
    
    var high_y;
    var width_x;
    var i_count = -1;
    var high_bin;
    //var temp_width = GG_VIEW_MAP_IMAGE_WIDTH * zoom;
    //var temp_hight = GG_VIEW_MAP_IMAGE_HIGHT * zoom;
    var i_amari = 0;
    var img_position;
    var img_path;
    var j, i;
    var unit_count;
    var etc_content;
    var fade_y = 0;
    var fade_y_end = 0;
    //var flag_x;
    var temp_team_high;
    var high_y_add;
    var temp_width_bin = 1;
    var temp_high_bin = 1;
    var temp_bin;
    var temp_img;
    var map_high = 0;
    var attack_se_audio_flag = false;
    var flag_name, temp_vector;
    var add_x = 0;
    var add_y = 0;
    for (i = 0; i < map.length * 3; i++) {
        i_amari = i % 3;
        if (i_amari == 0) {
            i_count += 1;
        }
        if (i_amari == 0) {
            high_y = GG_VIEW_START_Y + (i_count - 1) * zoom * 17;
            for (j = 0 ; j < map[i_count].length; j++) {
                if (map[i_count][j] == GG_DATA_MAP_NONE) {
                    continue;
                }
                if (map[i_count][j] > 1) {
                    map_high = (map[i_count][j] - 1) * GG_VIEW_HEX_HIGH_BIN;
                } else {
                    map_high = 0;
                }
                
                context.drawImage(gg.view.data.map_img[map[i_count][j]],
                                  0,
                                  0,
                                  GG_VIEW_MAP_IMAGE_WIDTH * 10,
                                  (GG_VIEW_MAP_IMAGE_HIGHT + map_high) * 10,
                                  Math.floor(GG_VIEW_START_X + j * zoom * GG_VIEW_HEX_WIDTH),
                                  Math.floor(high_y - map_high * zoom),
                                  GG_VIEW_MAP_IMAGE_WIDTH * zoom,
                                  (GG_VIEW_MAP_IMAGE_HIGHT + map_high) * zoom
                                  );
                
                // img create start no kesuna
                //context.strokeStyle = '#857162';
                //width_x  = Math.floor(GG_VIEW_START_X + 0.6 * zoom + zoom * GG_VIEW_HEX_WIDTH + j * zoom * GG_VIEW_HEX_WIDTH);
                //high_bin = GG_VIEW_HEX_HIGH_BIN * zoom * map[i_count][j];
                //context.beginPath();        
                //context.moveTo(Math.floor(width_x - GG_VIEW_HEX_WIDTH * zoom + 5),
                //               Math.floor(high_y - GG_VIEW_HEX_HIGH * zoom - high_bin - zoom * 2 + 5));                
                //context.lineTo(width_x,
                //               Math.floor(high_y - GG_VIEW_HEX_HIGH * 2 * zoom - high_bin - zoom * 2 + 5));
                //context.lineTo(Math.floor(width_x + GG_VIEW_HEX_WIDTH * zoom - 5),
                //               Math.floor(high_y - GG_VIEW_HEX_HIGH * zoom - high_bin - zoom * 2 + 5));
                
                //context.lineTo(Math.floor(width_x + GG_VIEW_HEX_WIDTH * zoom - 5),
                //               Math.floor(high_y + GG_VIEW_HEX_HIGH * zoom - high_bin - zoom * 2 + zoom * 2 * map[i_count][j] - 5));
                //context.lineTo(width_x,
                //               Math.floor(high_y + GG_VIEW_HEX_HIGH * 2 * zoom - high_bin  - zoom * 2 + zoom * 2 * map[i_count][j] - 5));
                //context.lineTo(Math.floor(width_x - GG_VIEW_HEX_WIDTH * zoom + 5),
                //               Math.floor(high_y + GG_VIEW_HEX_HIGH * zoom - high_bin  - zoom * 2 + zoom * 2 * map[i_count][j] - 5));
                
                //context.closePath();
                //context.stroke();
                //if (map[i_count][j] >= 1) {
                //    context.beginPath();        
                //    context.lineTo(Math.floor(width_x + GG_VIEW_HEX_WIDTH * zoom - 5),
                //                   Math.floor(high_y + GG_VIEW_HEX_HIGH * zoom - high_bin - zoom * 2 - 5));
                //    context.lineTo(width_x,
                //                   Math.floor(high_y + GG_VIEW_HEX_HIGH * 2 * zoom - high_bin  - zoom * 2 - 5));
                //    context.lineTo(Math.floor(width_x - GG_VIEW_HEX_WIDTH * zoom +5),
                //                   Math.floor(high_y + GG_VIEW_HEX_HIGH * zoom - high_bin  - zoom * 2 - 5));
                    
                //    context.stroke();
                //}
                //if (map[i_count][j] >= 2) {
                //    context.beginPath();        
                //    context.lineTo(Math.floor(width_x + GG_VIEW_HEX_WIDTH * zoom - 5),
                //                   Math.floor(high_y + GG_VIEW_HEX_HIGH * zoom - high_bin - zoom * 2+ zoom * 2 - 5));
                //    context.lineTo(width_x,
                //                   Math.floor(high_y + GG_VIEW_HEX_HIGH * 2 * zoom - high_bin  - zoom * 2+ zoom * 2 - 5));
                //    context.lineTo(Math.floor(width_x - GG_VIEW_HEX_WIDTH * zoom + 5),
                //                   Math.floor(high_y + GG_VIEW_HEX_HIGH * zoom - high_bin  - zoom * 2+ zoom * 2 - 5));
                    
                //    context.stroke();
                //}
                //if (map[i_count][j] >= 3) {
                //    context.beginPath();        
                //    context.lineTo(Math.floor(width_x + GG_VIEW_HEX_WIDTH * zoom - 5),
                //                   Math.floor(high_y + GG_VIEW_HEX_HIGH * zoom - high_bin - zoom * 2+ zoom * 2 * 2 - 5));
                //    context.lineTo(width_x,
                //                   Math.floor(high_y + GG_VIEW_HEX_HIGH * 2 * zoom - high_bin  - zoom * 2+ zoom * 2 * 2 -5 ));
                //    context.lineTo(Math.floor(width_x - GG_VIEW_HEX_WIDTH * zoom + 5),
                //                   Math.floor(high_y + GG_VIEW_HEX_HIGH * zoom - high_bin  - zoom * 2+ zoom * 2 * 2 - 5));
                    
                //    context.stroke();
                //}
                //if (map[i_count][j] >= 4) {
                //    context.beginPath();        
                //    context.lineTo(Math.floor(width_x + GG_VIEW_HEX_WIDTH * zoom - 5),
                //                   Math.floor(high_y + GG_VIEW_HEX_HIGH * zoom - high_bin - zoom * 2+ zoom * 2 * 3 -5));
                //    context.lineTo(width_x,
                //                   Math.floor(high_y + GG_VIEW_HEX_HIGH * 2 * zoom - high_bin  - zoom * 2+ zoom * 2 * 3 -5));
                //    context.lineTo(Math.floor(width_x - GG_VIEW_HEX_WIDTH * zoom + 5),
                //                   Math.floor(high_y + GG_VIEW_HEX_HIGH * zoom - high_bin  - zoom * 2+ zoom * 2 * 3 -5));
                    
                //    context.stroke();
                //}
                
                // end
                
            }   
            for (j = 0; j < select_map[i_count].length; j++) {
                width_x  = GG_VIEW_START_X + (13 + select_map[i_count][j].x * GG_VIEW_HEX_WIDTH) * zoom;
                high_bin = (GG_VIEW_HEX_HIGH_BIN * map[i_count][select_map[i_count][j].x] - 14) * zoom;
                
                // start base no kesuna
                //context.beginPath();        
                //context.moveTo(Math.floor(width_x - GG_VIEW_HEX_WIDTH * zoom),
                //               Math.floor(high_y - GG_VIEW_HEX_HIGH * zoom - high_bin));                
                //context.lineTo(width_x,
                //               Math.floor(high_y - GG_VIEW_HEX_HIGH * 2 * zoom - high_bin));
                //context.lineTo(Math.floor(width_x + GG_VIEW_HEX_WIDTH * zoom),
                //               Math.floor(high_y - GG_VIEW_HEX_HIGH * zoom - high_bin));
                
                //context.lineTo(Math.floor(width_x + GG_VIEW_HEX_WIDTH * zoom),
                //               Math.floor(high_y + GG_VIEW_HEX_HIGH * zoom  - high_bin));
                //context.lineTo(width_x,
                //               Math.floor(high_y + GG_VIEW_HEX_HIGH * 2 * zoom  - high_bin));
                //context.lineTo(Math.floor(width_x - GG_VIEW_HEX_WIDTH * zoom),
                //               Math.floor(high_y + GG_VIEW_HEX_HIGH * zoom  - high_bin));
                
                //context.closePath();
                //context.stroke();
                // end
                
                if (map[i_count][select_map[i_count][j].x] == 0) {
                    high_bin += GG_VIEW_HEX_HIGH_BIN * zoom ;
                }
                if (select_map[i_count][j].id != null && select_map[i_count][j].id == GG_VIEW_SELECT_MAP_CIRCLE) {
                    context.fillStyle   = GG_VIEW_AREA[select_map[i_count][j].army_color % GG_DATA_TEAM_MAX_NUMBER][select_map_number].area;
                    context.strokeStyle = GG_VIEW_AREA[select_map[i_count][j].army_color % GG_DATA_TEAM_MAX_NUMBER][select_map_number].line;
                } else {
                    context.fillStyle   = GG_VIEW_AREA[select_map[i_count][j].army_color % GG_DATA_TEAM_MAX_NUMBER][0].area;
                    context.strokeStyle = GG_VIEW_AREA[select_map[i_count][j].army_color % GG_DATA_TEAM_MAX_NUMBER][0].line;
                }
                if (gg.view.data.area.count != -1) {
                    context.fillStyle   = GG_VIEW_AREA[select_map[i_count][j].army_color % GG_DATA_TEAM_MAX_NUMBER][0].area;
                    context.strokeStyle = GG_VIEW_AREA[select_map[i_count][j].army_color % GG_DATA_TEAM_MAX_NUMBER][0].line;
                }
                
                //console.log(gg.view.data.area.count);
                //console.log('count:' + gg.view.data.area.count + ' j:' + select_map[i_count][j].x + ' x:' + gg.view.data.area.x + ' i_count:' + i_count + ' y:' + gg.view.data.area.y);
                if (gg.view.data.area.count == -1 ||
                    (i_count != gg.view.data.area.y ||
                     select_map[i_count][j].x != gg.view.data.area.x)) {
                    // sotowaku
                    for (var k = 0; k < 2; k++) {
                        if (k == 0) {
                            context.globalAlpha = GG_VIEW_SELECT_ALPHA;
                        } else {
                            context.globalAlpha = 1;
                            
                        }
                        context.beginPath();        
                        context.moveTo(Math.floor(width_x - GG_VIEW_HEX_WIDTH * zoom * GG_VIEW_AREA_BIN),
                                       Math.floor(high_y  - GG_VIEW_HEX_HIGH  * zoom * GG_VIEW_AREA_Y_BIN - high_bin));                
                        context.lineTo(width_x,
                                       Math.floor(high_y  - GG_VIEW_HEX_HIGH  * zoom * 2 + zoom * 3 - high_bin));
                        context.lineTo(Math.floor(width_x + GG_VIEW_HEX_WIDTH * zoom * GG_VIEW_AREA_BIN),
                                       Math.floor(high_y  - GG_VIEW_HEX_HIGH  * zoom * GG_VIEW_AREA_Y_BIN- high_bin));
                        
                        context.lineTo(Math.floor(width_x + GG_VIEW_HEX_WIDTH * zoom * GG_VIEW_AREA_BIN),
                                       Math.floor(high_y  + GG_VIEW_HEX_HIGH  * zoom   * GG_VIEW_AREA_Y_BIN- high_bin));
                        context.lineTo(width_x,
                                       Math.floor(high_y  + GG_VIEW_HEX_HIGH  * 2 * zoom - zoom * 3 - high_bin));
                        context.lineTo(Math.floor(width_x - GG_VIEW_HEX_WIDTH * zoom * GG_VIEW_AREA_BIN),
                                       Math.floor(high_y  + GG_VIEW_HEX_HIGH  * zoom * GG_VIEW_AREA_Y_BIN- high_bin));                
                        context.closePath();
    
                        if (k == 0) {
                            context.fill();
                        } else {
                            context.stroke();                        
                        }
                    }
    
                    //
                    if (select_map[i_count][j].army_color >= GG_DATA_TEAM_MAX_NUMBER) {
                        context.beginPath();        
                        context.moveTo(Math.floor(width_x - GG_VIEW_HEX_WIDTH * zoom * GG_VIEW_AREA_BIN   * 0.85),
                                       Math.floor(high_y  - GG_VIEW_HEX_HIGH  * zoom * GG_VIEW_AREA_Y_BIN * 0.78 - high_bin));                
                        context.lineTo(width_x,
                                       Math.floor(high_y  - GG_VIEW_HEX_HIGH  * zoom * 2 + zoom * 4.5 - high_bin));
                        context.lineTo(Math.floor(width_x + GG_VIEW_HEX_WIDTH * zoom * GG_VIEW_AREA_BIN * 0.85),
                                       Math.floor(high_y - GG_VIEW_HEX_HIGH * zoom  * GG_VIEW_AREA_Y_BIN *0.78 - high_bin));
                        
                        context.lineTo(Math.floor(width_x + GG_VIEW_HEX_WIDTH * zoom * GG_VIEW_AREA_BIN * 0.85),
                                       Math.floor(high_y + GG_VIEW_HEX_HIGH * zoom   * GG_VIEW_AREA_Y_BIN *0.78 - high_bin));
                        context.lineTo(width_x,
                                       Math.floor(high_y + GG_VIEW_HEX_HIGH * 2 * zoom - zoom * 4.5 - high_bin));
                        context.lineTo(Math.floor(width_x - GG_VIEW_HEX_WIDTH * zoom * GG_VIEW_AREA_BIN * 0.85),
                                       Math.floor(high_y + GG_VIEW_HEX_HIGH * zoom   * GG_VIEW_AREA_Y_BIN *0.78 - high_bin));
                        
                        context.closePath();
                        context.stroke();
                    }
                    
                    //
                    if (select_map[i_count][j].army_color >= GG_DATA_TEAM_MAX_NUMBER * 2) {
                        context.beginPath();        
                        context.moveTo(Math.floor(width_x - GG_VIEW_HEX_WIDTH * zoom * GG_VIEW_AREA_BIN * 0.70),
                                       Math.floor(high_y - GG_VIEW_HEX_HIGH * zoom * GG_VIEW_AREA_Y_BIN *0.58 - high_bin));                
                        context.lineTo(width_x,
                                       Math.floor(high_y - GG_VIEW_HEX_HIGH * zoom * 2 + zoom * 6.2 - high_bin));
                        context.lineTo(Math.floor(width_x + GG_VIEW_HEX_WIDTH * zoom * GG_VIEW_AREA_BIN * 0.7),
                                       Math.floor(high_y - GG_VIEW_HEX_HIGH * zoom  * GG_VIEW_AREA_Y_BIN *0.58 - high_bin));
                        
                        context.lineTo(Math.floor(width_x + GG_VIEW_HEX_WIDTH * zoom * GG_VIEW_AREA_BIN * 0.7),
                                       Math.floor(high_y + GG_VIEW_HEX_HIGH * zoom   * GG_VIEW_AREA_Y_BIN *0.58 - high_bin));
                        context.lineTo(width_x,
                                       Math.floor(high_y + GG_VIEW_HEX_HIGH * 2 * zoom - zoom * 6.2 - high_bin));
                        context.lineTo(Math.floor(width_x - GG_VIEW_HEX_WIDTH * zoom * GG_VIEW_AREA_BIN * 0.7),
                                       Math.floor(high_y + GG_VIEW_HEX_HIGH * zoom   * GG_VIEW_AREA_Y_BIN *0.58 - high_bin));
                        
                        context.closePath();
                        context.stroke();
                    }            

                } else {
                    // drow
                    for (var k = 0; k < 2; k++) {
                        if (k == 0) {
                            context.globalAlpha = GG_VIEW_SELECT_ALPHA;
                        } else {
                            context.globalAlpha = 1;
                             
                        }
                        context.beginPath();        
                        context.moveTo(Math.floor(width_x - GG_VIEW_HEX_WIDTH * zoom * GG_VIEW_AREA_BIN * 0.5 - (gg.view.data.area.count + 1) * GG_VIEW_HEX_WIDTH * zoom * GG_VIEW_AREA_BIN * 0.5 / GG_VIEW_SELECT_AREA_BIN),
                                       Math.floor(high_y - GG_VIEW_HEX_HIGH * zoom * GG_VIEW_AREA_Y_BIN *0.33 - high_bin - (gg.view.data.area.count + 1) * GG_VIEW_HEX_HIGH * zoom * GG_VIEW_AREA_Y_BIN * 0.67 / GG_VIEW_SELECT_AREA_BIN));                
                        context.lineTo(width_x,
                                       Math.floor(high_y - GG_VIEW_HEX_HIGH * zoom * 2 + zoom * 8.1 - high_bin - (gg.view.data.area.count + 1) * zoom * 5.1 / GG_VIEW_SELECT_AREA_BIN));
                        context.lineTo(Math.floor(width_x + GG_VIEW_HEX_WIDTH * zoom * GG_VIEW_AREA_BIN * 0.5 + (gg.view.data.area.count + 1) * GG_VIEW_HEX_WIDTH * zoom * GG_VIEW_AREA_BIN * 0.5 / GG_VIEW_SELECT_AREA_BIN),
                                       Math.floor(high_y - GG_VIEW_HEX_HIGH * zoom  * GG_VIEW_AREA_Y_BIN *0.33 - high_bin - (gg.view.data.area.count + 1) * GG_VIEW_HEX_HIGH * zoom * GG_VIEW_AREA_Y_BIN *0.67 / GG_VIEW_SELECT_AREA_BIN));
                        
                        context.lineTo(Math.floor(width_x + GG_VIEW_HEX_WIDTH * zoom * GG_VIEW_AREA_BIN * 0.5 + (gg.view.data.area.count + 1) * GG_VIEW_HEX_WIDTH * zoom * GG_VIEW_AREA_BIN * 0.5 / GG_VIEW_SELECT_AREA_BIN),
                                       Math.floor(high_y + GG_VIEW_HEX_HIGH * zoom   * GG_VIEW_AREA_Y_BIN *0.33 - high_bin + (gg.view.data.area.count + 1) * GG_VIEW_HEX_HIGH * zoom * GG_VIEW_AREA_Y_BIN *0.67 / GG_VIEW_SELECT_AREA_BIN));
                        context.lineTo(width_x,
                                       Math.floor(high_y + GG_VIEW_HEX_HIGH * 2 * zoom - zoom * 8.1 - high_bin + (gg.view.data.area.count + 1) * zoom * 5.1 / GG_VIEW_SELECT_AREA_BIN));
                        context.lineTo(Math.floor(width_x - GG_VIEW_HEX_WIDTH * zoom * GG_VIEW_AREA_BIN * 0.5 - (gg.view.data.area.count + 1) * GG_VIEW_HEX_WIDTH * zoom * GG_VIEW_AREA_BIN * 0.5 / GG_VIEW_SELECT_AREA_BIN),
                                   Math.floor(high_y + GG_VIEW_HEX_HIGH * zoom * GG_VIEW_AREA_Y_BIN *0.33 - high_bin + (gg.view.data.area.count + 1) * GG_VIEW_HEX_HIGH * zoom * GG_VIEW_AREA_Y_BIN *0.67 / GG_VIEW_SELECT_AREA_BIN));

                        //context.moveTo(Math.floor(width_x - GG_VIEW_HEX_WIDTH * zoom * GG_VIEW_AREA_BIN * 0.5 - gg.view.data.area.count * GG_VIEW_HEX_WIDTH * zoom * GG_VIEW_AREA_BIN * 0.5 / GG_VIEW_SELECT_AREA_BIN),
                        //               Math.floor(high_y - GG_VIEW_HEX_HIGH * zoom * GG_VIEW_AREA_Y_BIN *0.33 - high_bin - gg.view.data.area.count * GG_VIEW_HEX_HIGH * zoom * GG_VIEW_AREA_Y_BIN * 0.67 / GG_VIEW_SELECT_AREA_BIN));                
                        //context.lineTo(width_x,
                        //               Math.floor(high_y - GG_VIEW_HEX_HIGH * zoom * 2 + zoom * 8.1 - high_bin - gg.view.data.area.count * zoom * 5.1 / GG_VIEW_SELECT_AREA_BIN));
                        //context.lineTo(Math.floor(width_x + GG_VIEW_HEX_WIDTH * zoom * GG_VIEW_AREA_BIN * 0.5 + gg.view.data.area.count * GG_VIEW_HEX_WIDTH * zoom * GG_VIEW_AREA_BIN * 0.5 / GG_VIEW_SELECT_AREA_BIN),
                        //               Math.floor(high_y - GG_VIEW_HEX_HIGH * zoom  * GG_VIEW_AREA_Y_BIN *0.33 - high_bin - gg.view.data.area.count * GG_VIEW_HEX_HIGH * zoom * GG_VIEW_AREA_Y_BIN *0.67 / GG_VIEW_SELECT_AREA_BIN));
                        //context.lineTo(Math.floor(width_x + GG_VIEW_HEX_WIDTH * zoom * GG_VIEW_AREA_BIN * 0.5 + gg.view.data.area.count * GG_VIEW_HEX_WIDTH * zoom * GG_VIEW_AREA_BIN * 0.5 / GG_VIEW_SELECT_AREA_BIN),
                        //               Math.floor(high_y + GG_VIEW_HEX_HIGH * zoom   * GG_VIEW_AREA_Y_BIN *0.33 - high_bin + gg.view.data.area.count * GG_VIEW_HEX_HIGH * zoom * GG_VIEW_AREA_Y_BIN *0.67 / GG_VIEW_SELECT_AREA_BIN));
                        //context.lineTo(width_x,
                        //               Math.floor(high_y + GG_VIEW_HEX_HIGH * 2 * zoom - zoom * 8.1 - high_bin + gg.view.data.area.count * zoom * 5.1 / GG_VIEW_SELECT_AREA_BIN));
                        //context.lineTo(Math.floor(width_x - GG_VIEW_HEX_WIDTH * zoom * GG_VIEW_AREA_BIN * 0.5 - gg.view.data.area.count * GG_VIEW_HEX_WIDTH * zoom * GG_VIEW_AREA_BIN * 0.5 / GG_VIEW_SELECT_AREA_BIN),
                        //           Math.floor(high_y + GG_VIEW_HEX_HIGH * zoom * GG_VIEW_AREA_Y_BIN *0.33 - high_bin + gg.view.data.area.count * GG_VIEW_HEX_HIGH * zoom * GG_VIEW_AREA_Y_BIN *0.67 / GG_VIEW_SELECT_AREA_BIN));

                        context.closePath();
        
                        if (k == 0) {
                            context.fill();
                        } else {
                            context.stroke();                        
                        }
                        
                    }

                    //if (gg.view.data.area.count >= 0) {
                        // drow
                    //    context.beginPath();        
                    //    context.moveTo(Math.floor(width_x - GG_VIEW_HEX_WIDTH * zoom * GG_VIEW_AREA_BIN   * 0.85),
                    //                   Math.floor(high_y  - GG_VIEW_HEX_HIGH  * zoom * GG_VIEW_AREA_Y_BIN * 0.78 - high_bin));                
                    //    context.lineTo(width_x,
                    //                   Math.floor(high_y  - GG_VIEW_HEX_HIGH  * zoom * 2 + zoom * 4.5 - high_bin));
                    //    context.lineTo(Math.floor(width_x + GG_VIEW_HEX_WIDTH * zoom * GG_VIEW_AREA_BIN * 0.85),
                    //                   Math.floor(high_y - GG_VIEW_HEX_HIGH * zoom  * GG_VIEW_AREA_Y_BIN *0.78 - high_bin));
                        
                    //    context.lineTo(Math.floor(width_x + GG_VIEW_HEX_WIDTH * zoom * GG_VIEW_AREA_BIN * 0.85),
                    //                   Math.floor(high_y + GG_VIEW_HEX_HIGH * zoom   * GG_VIEW_AREA_Y_BIN *0.78 - high_bin));
                    //    context.lineTo(width_x,
                    //                   Math.floor(high_y + GG_VIEW_HEX_HIGH * 2 * zoom - zoom * 4.5 - high_bin));
                    //    context.lineTo(Math.floor(width_x - GG_VIEW_HEX_WIDTH * zoom * GG_VIEW_AREA_BIN * 0.85),
                    //                   Math.floor(high_y + GG_VIEW_HEX_HIGH * zoom   * GG_VIEW_AREA_Y_BIN *0.78 - high_bin));
                        
                    //    context.closePath();
                    //    context.stroke();
                    //}
                    //if (gg.view.data.area.count >= 1) {
                        // drow
                    //    context.beginPath();        
                    //    context.moveTo(Math.floor(width_x - GG_VIEW_HEX_WIDTH * zoom * GG_VIEW_AREA_BIN * 0.70),
                    //                   Math.floor(high_y - GG_VIEW_HEX_HIGH * zoom * GG_VIEW_AREA_Y_BIN *0.58 - high_bin));                
                    //    context.lineTo(width_x,
                    //                   Math.floor(high_y - GG_VIEW_HEX_HIGH * zoom * 2 + zoom * 6.2 - high_bin));
                    //    context.lineTo(Math.floor(width_x + GG_VIEW_HEX_WIDTH * zoom * GG_VIEW_AREA_BIN * 0.7),
                    //                   Math.floor(high_y - GG_VIEW_HEX_HIGH * zoom  * GG_VIEW_AREA_Y_BIN *0.58 - high_bin));
                        
                    //    context.lineTo(Math.floor(width_x + GG_VIEW_HEX_WIDTH * zoom * GG_VIEW_AREA_BIN * 0.7),
                    //                   Math.floor(high_y + GG_VIEW_HEX_HIGH * zoom   * GG_VIEW_AREA_Y_BIN *0.58 - high_bin));
                    //    context.lineTo(width_x,
                    //                   Math.floor(high_y + GG_VIEW_HEX_HIGH * 2 * zoom - zoom * 6.2 - high_bin));
                    //    context.lineTo(Math.floor(width_x - GG_VIEW_HEX_WIDTH * zoom * GG_VIEW_AREA_BIN * 0.7),
                    //                   Math.floor(high_y + GG_VIEW_HEX_HIGH * zoom   * GG_VIEW_AREA_Y_BIN *0.58 - high_bin));
                        
                    //    context.closePath();
                    //    context.stroke();
                    //}
                    
                }

            }
        }
        if (i_amari == 1) {
            for (unit_count = 0; unit_count < fix_units[i_count].length; unit_count++) {
                width_x = GG_VIEW_START_X + (fix_units[i_count][unit_count].map_x * GG_VIEW_HEX_WIDTH + 1.5) * zoom;
                high_y = GG_VIEW_START_Y +
//                         (i_count - 1) * zoom * 17 +
//                         zoom * 8
                         (i_count * 17 - 9) * zoom
                         - GG_VIEW_HEX_HIGH_BIN * zoom * map[i_count][fix_units[i_count][unit_count].map_x];
                
                if (fix_units[i_count][unit_count].shadow == true) {
                    context.globalAlpha = 0.5;                     
                    context.drawImage(gg.view.data.etc_img[GG_DATA_IMAGE_PATH + GG_ANIMATION_IMG_PATH + '/shadow_' + GG_ANIMATION_IMG_PATH + '.png'],
                                      0, 0,
                                      160,
                                      40,
                                      Math.floor(width_x + zoom * 3.5 + 16 * zoom * 0.1),
//                                      Math.floor(high_y - GG_VIEW_HEX_HIGH * 2 * zoom + zoom * 20.5),
//                                      Math.floor(high_y + (20.5 - GG_VIEW_HEX_HIGH * 2) * zoom),
                                      Math.floor(high_y + GG_VIEW_HEX_HIGH * 1.6 * zoom + 4 * zoom * 0.2),
                                      16 * zoom * 0.8,
                                      4 * zoom * 0.8);
                    
                    context.globalAlpha = 1;
                }

                if (fix_units[i_count][unit_count].shanke_flag == true) {
                    img_position = GG_VIEW_IMAGE_START_POSITION[fix_units[i_count][unit_count].vector];

                    if (gg.view.data.animation_count % 8 == 2 || gg.view.data.animation_count % 8 == 3 ||
                        gg.view.data.animation_count % 8 == 6 || gg.view.data.animation_count % 8 == 7) {
                        img_position = GG_VIEW_IMAGE_START_POSITION[fix_units[i_count][unit_count].vector + 1];
                    } else if (gg.view.data.animation_count % 8 == 4 || gg.view.data.animation_count % 8 == 5) {
                        img_position = GG_VIEW_IMAGE_START_POSITION[fix_units[i_count][unit_count].vector + 2];
                    }
                    img_path     = fix_units[i_count][unit_count].image;
                    
                } else if (fix_units[i_count][unit_count].attack_start != null &&
                    fix_units[i_count][unit_count].attack_start <= gg.view.data.animation_count) {
                    img_position = GG_VIEW_IMAGE_START_POSITION[fix_units[i_count][unit_count].attack_vector];
                    img_path     = fix_units[i_count][unit_count].attack_image;
                    
                    if (fix_units[i_count][unit_count].attack_start == gg.view.data.animation_count) {
                        attack_se_audio_flag = true;
                    }

                } else if (fix_units[i_count][unit_count].recovery_flag != null &&
                           fix_units[i_count][unit_count].recovery_flag == true) {
                    img_path     = fix_units[i_count][unit_count].image;
                    if (gg.view.data.animation_count > GG_DATA_ANIMATION_SHOTY_EFFECT_BIN / 2) {
                        img_position = GG_VIEW_IMAGE_START_POSITION[fix_units[i_count][unit_count].vector + 1];
                    } else {
                        img_position = GG_VIEW_IMAGE_START_POSITION[fix_units[i_count][unit_count].vector];                        
                    }
 
                } else {
                    img_position = GG_VIEW_IMAGE_START_POSITION[fix_units[i_count][unit_count].vector];
                    img_path     = fix_units[i_count][unit_count].image;

                }
                
                if (map[i_count][fix_units[i_count][unit_count].map_x] != 0) {
                    context.drawImage(gg.view.data.unit_img[GG_DATA_IMAGE_PATH + GG_ANIMATION_IMG_PATH + '/' + img_path + '_' + GG_ANIMATION_IMG_PATH + '.png'],
                                      img_position.x * 10, img_position.y * 10,
                                      GG_VIEW_IMAGE_SIZE * 10,
                                      GG_VIEW_IMAGE_SIZE * 10,
                                      Math.floor(width_x + GG_VIEW_IMAGE_SIZE * zoom * 0.1),
                                      Math.floor(high_y - GG_VIEW_HEX_HIGH * 2 * zoom + GG_VIEW_IMAGE_SIZE * zoom * 0.2),
                                      GG_VIEW_IMAGE_SIZE * zoom * 0.8,
                                      GG_VIEW_IMAGE_SIZE * zoom * 0.8);

                } else if (map[i_count][fix_units[i_count][unit_count].map_x] == 0) {
                    context.drawImage(gg.view.data.unit_img[GG_DATA_IMAGE_PATH + GG_ANIMATION_IMG_PATH + '/' + img_path + '_' + GG_ANIMATION_IMG_PATH + '.png'],
                                      img_position.x * 10,
                                      img_position.y * 10,
                                      GG_VIEW_IMAGE_SIZE * 10,
                                      GG_VIEW_IMAGE_SIZE * 10 - 30,
                                      Math.floor(width_x + GG_VIEW_IMAGE_SIZE * zoom * 0.1),
                                      Math.floor(high_y - GG_VIEW_HEX_HIGH * 2 * zoom + GG_VIEW_IMAGE_SIZE * zoom * 0.2),
                                      GG_VIEW_IMAGE_SIZE * zoom  * 0.8,
                                      (GG_VIEW_IMAGE_SIZE - 3) * zoom * 0.8);
                    context.globalAlpha = 0.4; 
                    context.drawImage(gg.view.data.unit_img[GG_DATA_IMAGE_PATH + GG_ANIMATION_IMG_PATH + '/' + img_path + '_' + GG_ANIMATION_IMG_PATH + '.png'],
                                      img_position.x * 10,
                                      img_position.y * 10 + 210,
                                      GG_VIEW_IMAGE_SIZE * 10,
                                      30,
                                      Math.floor(width_x + GG_VIEW_IMAGE_SIZE * zoom * 0.1),
//                                      high_y - GG_VIEW_HEX_HIGH * 2 * zoom + 21 * zoom,
//                                      Math.floor(high_y + (21 - GG_VIEW_HEX_HIGH * 2) * zoom),
//                                      Math.floor(high_y + GG_VIEW_HEX_HIGH * 1.68 * zoom + GG_VIEW_IMAGE_SIZE * zoom * 0.1),
                                      Math.floor(high_y + GG_VIEW_HEX_HIGH * 1.68 * zoom + GG_VIEW_IMAGE_SIZE * zoom * 0.02),
                                      GG_VIEW_IMAGE_SIZE * zoom * 0.8,
                                      3 * zoom * 0.8);
                    context.globalAlpha = 1; 

                }

                var icons_plus = 0;
                if (gg.view.data.level_flag == true && fix_units[i_count][unit_count].level != null) {
                    icons_plus = 0.9;
                    context.globalAlpha = 0.7;
                    context.drawImage(gg.view.data.etc_img[GG_DATA_IMAGE_PATH + GG_ANIMATION_IMG_PATH + '/hitpoint_back_' + GG_ANIMATION_IMG_PATH + '.png'],
                                      0,
                                      0,
                                      80,
                                      40,
                                      Math.floor(width_x + 3.4 * zoom),
                                      Math.floor(high_y + ( - GG_VIEW_HEX_HIGH * 1.47) * zoom + 6 * zoom * 0.5),
                                      7 * zoom,
                                      4 * zoom);
                    context.globalAlpha = 1;
                    context.fillStyle = GG_VIEW_AREA[fix_units[i_count][unit_count].color][0].line;
                    context.fillText('L' + (fix_units[i_count][unit_count].level + 1),
                                     Math.floor(width_x + 3.8 * zoom),
                                     Math.floor(high_y + ( - GG_VIEW_HEX_HIGH * 1.47) * zoom + 6.2 * zoom));
                    
                }
                for (var icons = 0; icons < fix_units[i_count][unit_count].status_icons.length; icons++) {
                    //img_name = '';
                    //img_vecotr = 0;
                    if (fix_units[i_count][unit_count].status_icons[icons] == 1 ||
                        fix_units[i_count][unit_count].status_icons[icons] == 9) {
                        //if (fix_units[i_count][unit_count].status_icons[icons] <= 1) {
                        //    img_vecotr = fix_units[i_count][unit_count].status_icons[icons];
                        if (fix_units[i_count][unit_count].status_icons[icons] == 1) {
                            img_vecotr = 0;
                        } else {
                            img_vecotr = 1;
                        }
                        img_name = GG_DATA_IMAGE_PATH + GG_ANIMATION_IMG_PATH + '/status_icon_00_' + GG_ANIMATION_IMG_PATH + '.png'; 
                    } else if (fix_units[i_count][unit_count].status_icons[icons] >= 2 &&
                        fix_units[i_count][unit_count].status_icons[icons] <= 5) {
                        img_name = GG_DATA_IMAGE_PATH + GG_ANIMATION_IMG_PATH + '/status_icon_01_' + GG_ANIMATION_IMG_PATH + '.png'; 
                        img_vecotr = fix_units[i_count][unit_count].status_icons[icons] - 2;
                    } else if (fix_units[i_count][unit_count].status_icons[icons] >= 6 &&
                        fix_units[i_count][unit_count].status_icons[icons] <= 8) {
                        img_name = GG_DATA_IMAGE_PATH + GG_ANIMATION_IMG_PATH + '/status_icon_02_' + GG_ANIMATION_IMG_PATH + '.png'; 
                        img_vecotr = fix_units[i_count][unit_count].status_icons[icons] - 6;
                    } else if (fix_units[i_count][unit_count].status_icons[icons] >= 10 &&
                        fix_units[i_count][unit_count].status_icons[icons] <= 13) {
                        img_name = GG_DATA_IMAGE_PATH + GG_ANIMATION_IMG_PATH + '/status_icon_03_' + GG_ANIMATION_IMG_PATH + '.png';
                        img_vecotr = fix_units[i_count][unit_count].status_icons[icons] - 10;
                    }
                    
                    context.drawImage(gg.view.data.etc_img[img_name],
                                      img_vecotr * 60,
                                      0,
                                      60,
                                      60,
                                      Math.floor(width_x + 1 * zoom + 6 * zoom * 0.4),
                                      //high_y - (GG_VIEW_HEX_HIGH * 2) * zoom + icons * 6 * zoom + 3 * zoom,
//                                      Math.floor(high_y + (icons * 6 - GG_VIEW_HEX_HIGH * 2 + 3) * zoom),
                                      Math.floor(high_y + ((icons + icons_plus) * 5 - GG_VIEW_HEX_HIGH * 1.47) * zoom + 6 * zoom * 0.5),
                                      6 * zoom * 0.8,
                                      6 * zoom * 0.8);
                }

                if (fix_units[i_count][unit_count].color != null) {
                    //temp_team_high = GG_VIEW_IMAGE_SIZE;
                    context.drawImage(gg.view.data.etc_img[GG_DATA_IMAGE_PATH + GG_ANIMATION_IMG_PATH + '/team_0' + fix_units[i_count][unit_count].color + '_' + GG_ANIMATION_IMG_PATH + '.png'],
                                      0,
                                      0,
                                      90,
                                      60,
                                      Math.floor(width_x + GG_VIEW_IMAGE_SIZE * zoom * 0.65),
                                      Math.floor(high_y - GG_VIEW_HEX_HIGH * 1.65 * zoom + 5 * zoom * 0.4),
                                      8 * zoom * 0.8,
                                      5 * zoom * 0.8);
                }
                if (gg.view.data.hitpoint_flag == true &&
                    fix_units[i_count][unit_count].hitpoint != null
                    ) {
                    context.globalAlpha = 0.7;
                    context.drawImage(gg.view.data.etc_img[GG_DATA_IMAGE_PATH + GG_ANIMATION_IMG_PATH + '/hitpoint_back_' + GG_ANIMATION_IMG_PATH + '.png'],
                                      0,
                                      0,
                                      80,
                                      40,
                                      Math.floor(width_x + GG_VIEW_IMAGE_SIZE * zoom * 0.65),
//                                      Math.floor(high_y - (GG_VIEW_HEX_HIGH * 1.65 - 4.5)* zoom),
                                      Math.floor(high_y - GG_VIEW_HEX_HIGH * 0.86 * zoom + 5 * zoom * 0.3),
                                      8 * zoom,
                                      4 * zoom);
                    context.globalAlpha = 1;

                    context.fillStyle = GG_VIEW_AREA[fix_units[i_count][unit_count].color][0].line;
                    diff_x = 0.75;
                    if (fix_units[i_count][unit_count].hitpoint > 99) {
                        diff_x -= 0.1;
                    } else if (fix_units[i_count][unit_count].hitpoint > 9) {
                        //diff_x += 0;
                    } else if (fix_units[i_count][unit_count].hitpoint > -1) {
                        diff_x += 0.1;
                    } else if (fix_units[i_count][unit_count].hitpoint > -10) {
                        diff_x += 0.05;
                    } else if (fix_units[i_count][unit_count].hitpoint > -100) {
                        diff_x -= 0.05;
                    }
                    context.fillText(fix_units[i_count][unit_count].hitpoint,
                                     Math.floor(width_x + diff_x * GG_VIEW_IMAGE_SIZE * zoom),
                                     Math.floor(high_y + (0.5 - GG_VIEW_HEX_HIGH * 0.35) * zoom + 5 * zoom * 0.3));
                }
            }
        }
        for (var unit_count = 0; unit_count < units[i_count][i_amari].length; unit_count++) {
            //width_x = Math.floor(GG_VIEW_START_X + units[i_count][i_amari][unit_count].x * zoom * GG_VIEW_HEX_WIDTH + zoom * 1.5);
            width_x = GG_VIEW_START_X + (units[i_count][i_amari][unit_count].x * GG_VIEW_HEX_WIDTH + 1.5) * zoom;
            
            high_y = GG_VIEW_START_Y +
//                     (units[i_count][i_amari][unit_count].y - 1) * zoom * 17 +
//                     zoom * 8
                     (units[i_count][i_amari][unit_count].y * 17 - 9) * zoom
                     - GG_VIEW_HEX_HIGH_BIN * zoom * map[units[i_count][i_amari][unit_count].map_y][units[i_count][i_amari][unit_count].map_x];

            high_y_add = 0;
            if (units[i_count][i_amari][unit_count].y_add != null) {
                high_y_add = Math.floor(GG_VIEW_START_Y + 
//                                            (units[i_count][i_amari][unit_count].y + units[i_count][i_amari][unit_count].y_add)* GG_VIEW_HEX_HIGH * zoom * 3
//                                            - GG_VIEW_HEX_HIGH * zoom * 1 -
                                            ((units[i_count][i_amari][unit_count].y + units[i_count][i_amari][unit_count].y_add)* GG_VIEW_HEX_HIGH * 3 - GG_VIEW_HEX_HIGH -
                                            GG_VIEW_HEX_HIGH_BIN * map[Math.round(units[i_count][i_amari][unit_count].y)][units[i_count][i_amari][unit_count].map_x]) * zoom);
            }
            
            if (units[i_count][i_amari][unit_count].circle != null) {
                context.drawImage(gg.view.data.etc_img[GG_DATA_IMAGE_PATH + GG_ANIMATION_IMG_PATH + '/circle_0' + units[i_count][i_amari][unit_count].circle.vector + '_' + GG_ANIMATION_IMG_PATH + '.png'],
                              0,
                              0,
                              200,
                              40,
                              Math.floor(width_x + zoom * 2),
                              Math.floor(high_y + (GG_VIEW_IMAGE_SIZE * 5 / 6 - GG_VIEW_HEX_HIGH * 1.9) * zoom),
                              20 * zoom,
                              4 * zoom);
            }
            if (units[i_count][i_amari][unit_count].shadow != null &&
                units[i_count][i_amari][unit_count].shadow == true) {
                if (units[i_count][i_amari][unit_count].lost != null &&
                    units[i_count][i_amari][unit_count].lost == true) {
                    context.globalAlpha = 0.5 * units[i_count][i_amari][unit_count].alpha;                     
                } else {
                    context.globalAlpha = 0.5;                     
                    
                }
                context.drawImage(gg.view.data.etc_img[GG_DATA_IMAGE_PATH + GG_ANIMATION_IMG_PATH + '/shadow_' + GG_ANIMATION_IMG_PATH + '.png'],
                                      0, 0,
                                      160,
                                      40,
                                      Math.floor(width_x + zoom * 3.5 + 16 * zoom * 0.1),
//                                      Math.floor(high_y + (20.5 - GG_VIEW_HEX_HIGH * 2) * zoom),
                                      Math.floor(high_y + GG_VIEW_HEX_HIGH * 1.6 * zoom + 4 * zoom * 0.2),
                                      16 * zoom * 0.8,
                                      4 * zoom * 0.8);
                context.globalAlpha = 1;
            }
            
            if (units[i_count][i_amari][unit_count].alpha != null) {
                context.globalAlpha = units[i_count][i_amari][unit_count].alpha;
            }

            img_position = GG_VIEW_IMAGE_START_POSITION[units[i_count][i_amari][unit_count].vector];
            fade_y = 0
            fade_y_end = 0
            if (units[i_count][i_amari][unit_count].fade != null && units[i_count][i_amari][unit_count].fade != 0) {
                fade_y = units[i_count][i_amari][unit_count].fade;
                fade_y_end = -1;
            }
            if (high_y_add != 0) {
                high_y = high_y_add;
            }
            
            if (GG_VIEW_IMAGE_SIZE * zoom - (fade_y - fade_y_end) * zoom > 0) {
                if (map[units[i_count][i_amari][unit_count].map_y][units[i_count][i_amari][unit_count].map_x] != 0) {
                    context.drawImage(gg.view.data.unit_img[GG_DATA_IMAGE_PATH + GG_ANIMATION_IMG_PATH + '/' + units[i_count][i_amari][unit_count].image + '_' + GG_ANIMATION_IMG_PATH + '.png'],
                                  img_position.x * 10, img_position.y * 10,
                                  GG_VIEW_IMAGE_SIZE * 10,
                                  (GG_VIEW_IMAGE_SIZE - fade_y + fade_y_end) * 10,
                                  Math.floor(width_x + GG_VIEW_IMAGE_SIZE * zoom * 0.1),
                                  Math.floor(high_y - (GG_VIEW_HEX_HIGH * 2 - fade_y) * zoom + GG_VIEW_IMAGE_SIZE * zoom * 0.2),
                                  GG_VIEW_IMAGE_SIZE * zoom * 0.8,
                                  (GG_VIEW_IMAGE_SIZE - fade_y + fade_y_end) * zoom * 0.8);

                } else if (map[units[i_count][i_amari][unit_count].map_y][units[i_count][i_amari][unit_count].map_x] == 0) {
                    fade_y_size = GG_VIEW_IMAGE_SIZE - fade_y + fade_y_end;

                    if (fade_y_size <= 6) {
                        if (units[i_count][i_amari][unit_count].alpha == null) {
                            context.globalAlpha = 0.4;
                        } else if (units[i_count][i_amari][unit_count].alpha > 0.4) {
                            context.globalAlpha = 0.4;
                        }
                        context.drawImage(gg.view.data.unit_img[GG_DATA_IMAGE_PATH + GG_ANIMATION_IMG_PATH + '/' + units[i_count][i_amari][unit_count].image + '_' + GG_ANIMATION_IMG_PATH + '.png'],
                                  img_position.x * 10,
                                  img_position.y * 10,
                                  GG_VIEW_IMAGE_SIZE * 10,
                                 fade_y_size * 10,
                                  Math.floor(width_x + GG_VIEW_IMAGE_SIZE * zoom * 0.1),
                                  Math.floor(high_y - (GG_VIEW_HEX_HIGH * 2 - fade_y) * zoom + GG_VIEW_IMAGE_SIZE * zoom * 0.2),
                                  GG_VIEW_IMAGE_SIZE * zoom * 0.8,
                                  fade_y_size * zoom * 0.8);
                        if (units[i_count][i_amari][unit_count].alpha == null) {
                            context.globalAlpha = 1;
                        } else if (units[i_count][i_amari][unit_count].alpha > 0.4) {
                            context.globalAlpha = 1;
                        }

                    } else if (fade_y_size > 6 && fade_y_size < 24) {
                        context.drawImage(gg.view.data.unit_img[GG_DATA_IMAGE_PATH + GG_ANIMATION_IMG_PATH + '/' + units[i_count][i_amari][unit_count].image + '_' + GG_ANIMATION_IMG_PATH + '.png'],
                                      img_position.x * 10,
                                      img_position.y * 10,
                                      GG_VIEW_IMAGE_SIZE * 10,
                                      (fade_y_size - 3) * 10,
                                      Math.floor(width_x + GG_VIEW_IMAGE_SIZE * zoom * 0.1),
                                      Math.floor(high_y - (GG_VIEW_HEX_HIGH * 2 - fade_y) * zoom + GG_VIEW_IMAGE_SIZE * zoom * 0.2),
                                      GG_VIEW_IMAGE_SIZE * zoom * 0.8,
                                      (fade_y_size - 3) * zoom * 0.8);
                        
                        if (units[i_count][i_amari][unit_count].alpha == null) {
                            context.globalAlpha = 0.4; 
                        } else if (units[i_count][i_amari][unit_count].alpha > 0.4) {
                            context.globalAlpha = 0.4;
                        }
                        context.drawImage(gg.view.data.unit_img[GG_DATA_IMAGE_PATH + GG_ANIMATION_IMG_PATH + '/' + units[i_count][i_amari][unit_count].image + '_' + GG_ANIMATION_IMG_PATH + '.png'],
                                  img_position.x * 10,
                                  img_position.y * 10 + (fade_y_size - 3) * 10,
                                  GG_VIEW_IMAGE_SIZE * 10,
                                 30,
                                  Math.floor(width_x + GG_VIEW_IMAGE_SIZE * zoom * 0.1),
                                  Math.floor(high_y + (- GG_VIEW_HEX_HIGH * 2 + fade_y + fade_y_size - 3) * zoom + GG_VIEW_IMAGE_SIZE * zoom * 0.02),
                                  GG_VIEW_IMAGE_SIZE * zoom * 0.8,
                                  3 * zoom * 0.8);
                        if (units[i_count][i_amari][unit_count].alpha == null) {
                            context.globalAlpha = 1;
                        } else if (units[i_count][i_amari][unit_count].alpha > 0.4) {
                            context.globalAlpha = 1;
                        }
                    } else if (fade_y_size == 24) {
                        context.drawImage(gg.view.data.unit_img[GG_DATA_IMAGE_PATH + GG_ANIMATION_IMG_PATH + '/' + units[i_count][i_amari][unit_count].image + '_' + GG_ANIMATION_IMG_PATH + '.png'],
                                      img_position.x * 10,
                                      img_position.y * 10,
                                      GG_VIEW_IMAGE_SIZE * 10,
                                      GG_VIEW_IMAGE_SIZE * 10 - 30,
                                      Math.floor(width_x + GG_VIEW_IMAGE_SIZE * zoom * 0.1),
                                      Math.floor(high_y - (GG_VIEW_HEX_HIGH * 2 - fade_y) * zoom + GG_VIEW_IMAGE_SIZE * zoom * 0.2),
                                      GG_VIEW_IMAGE_SIZE * zoom * 0.8,
                                      (GG_VIEW_IMAGE_SIZE * zoom - 3 * zoom) * 0.8);
                        if (units[i_count][i_amari][unit_count].alpha == null) {
                            context.globalAlpha = 0.4;
                        } else if (units[i_count][i_amari][unit_count].alpha > 0.4) {
                            context.globalAlpha = 0.4;
                        }
                        context.drawImage(gg.view.data.unit_img[GG_DATA_IMAGE_PATH + GG_ANIMATION_IMG_PATH + '/' + units[i_count][i_amari][unit_count].image + '_' + GG_ANIMATION_IMG_PATH + '.png'],
                                  img_position.x * 10,
                                  img_position.y * 10 + 210,
                                  GG_VIEW_IMAGE_SIZE * 10,
                                 30,
                                  Math.floor(width_x + GG_VIEW_IMAGE_SIZE * zoom * 0.1),
                                  Math.floor(high_y + (- GG_VIEW_HEX_HIGH * 2 + fade_y + 21) * zoom + GG_VIEW_IMAGE_SIZE * zoom * 0.02),
                                  GG_VIEW_IMAGE_SIZE * zoom * 0.8,
                                  3 * zoom * 0.8);
                        if (units[i_count][i_amari][unit_count].alpha == null) {
                            context.globalAlpha = 1;
                        } else if (units[i_count][i_amari][unit_count].alpha > 0.4) {
                            context.globalAlpha = 1;
                        }
                    }

                }
                var icons_plus = 0;
                if (gg.view.data.level_flag == true && units[i_count][i_amari][unit_count].level != null) {
                    icons_plus = 0.9;
                    context.globalAlpha = 0.7;
                    context.drawImage(gg.view.data.etc_img[GG_DATA_IMAGE_PATH + GG_ANIMATION_IMG_PATH + '/hitpoint_back_' + GG_ANIMATION_IMG_PATH + '.png'],
                                      0,
                                      0,
                                      80,
                                      40,
                                      Math.floor(width_x + 3.4 * zoom),
                                      Math.floor(high_y + ( - GG_VIEW_HEX_HIGH * 1.47) * zoom + 6 * zoom * 0.5),
                                      7 * zoom,
                                      4 * zoom);
                    context.globalAlpha = 1;
                    context.fillStyle = GG_VIEW_AREA[units[i_count][i_amari][unit_count].color][0].line;
                    context.fillText('L' + (units[i_count][i_amari][unit_count].level + 1),
                                     Math.floor(width_x + 3.8 * zoom),
                                     Math.floor(high_y + ( - GG_VIEW_HEX_HIGH * 1.47) * zoom + 6.2 * zoom));
                    
                }
                if (units[i_count][i_amari][unit_count].status_icons != null) {
                    for (var icons = 0; icons < units[i_count][i_amari][unit_count].status_icons.length; icons++) {
                        img_name = '';
                        img_vecotr = 0;
                        if (units[i_count][i_amari][unit_count].status_icons[icons] == 1 ||
                            units[i_count][i_amari][unit_count].status_icons[icons] == 9) {
                            if (units[i_count][i_amari][unit_count].status_icons[icons] == 1) {
                                //img_vecotr = units[i_count][i_amari][unit_count].status_icons[icons];
                                img_vecotr = 0;
                            } else {
                                img_vecotr = 1;
                            }
                            img_name = GG_DATA_IMAGE_PATH + GG_ANIMATION_IMG_PATH + '/status_icon_00_' + GG_ANIMATION_IMG_PATH + '.png'; 
                        } else if (units[i_count][i_amari][unit_count].status_icons[icons] >= 2 &&
                            units[i_count][i_amari][unit_count].status_icons[icons] <= 5) {
                            img_name = GG_DATA_IMAGE_PATH + GG_ANIMATION_IMG_PATH + '/status_icon_01_' + GG_ANIMATION_IMG_PATH + '.png'; 
                            img_vecotr = units[i_count][i_amari][unit_count].status_icons[icons] - 2;
                        } else if (units[i_count][i_amari][unit_count].status_icons[icons] >= 6 &&
                            units[i_count][i_amari][unit_count].status_icons[icons] <= 8) {
                            img_name = GG_DATA_IMAGE_PATH + GG_ANIMATION_IMG_PATH + '/status_icon_02_' + GG_ANIMATION_IMG_PATH + '.png'; 
                            img_vecotr = units[i_count][i_amari][unit_count].status_icons[icons] - 6;
                        } else if (units[i_count][i_amari][unit_count].status_icons[icons] >= 10 &&
                            units[i_count][i_amari][unit_count].status_icons[icons] <= 13) {
                            img_name = GG_DATA_IMAGE_PATH + GG_ANIMATION_IMG_PATH + '/status_icon_03_' + GG_ANIMATION_IMG_PATH + '.png';
                            img_vecotr = units[i_count][i_amari][unit_count].status_icons[icons] - 10;
                        }

                        context.drawImage(gg.view.data.etc_img[img_name],
                                          img_vecotr * 60,
                                          0,
                                          60,
                                          60,
                                          Math.floor(width_x + 1 * zoom + 6 * zoom * 0.4),
                                          //high_y - (GG_VIEW_HEX_HIGH * 2 - fade_y) * zoom + icons * 6 * zoom + 3 * zoom,
                                          Math.floor(high_y + ((icons + icons_plus) * 5 + 3 - GG_VIEW_HEX_HIGH * 2 - fade_y) * zoom + 6 * zoom * 0.5),
                                          6 * zoom * 0.8,
                                          6 * zoom * 0.8);
                    }
                }

                if (units[i_count][i_amari][unit_count].color != null) {
                    temp_team_high = GG_VIEW_IMAGE_SIZE - fade_y + fade_y_end;
                    if (temp_team_high > GG_VIEW_IMAGE_SIZE / 2) {
                        temp_team_high = GG_VIEW_IMAGE_SIZE / 2;
                    }
                    flag_name = GG_DATA_IMAGE_PATH + GG_ANIMATION_IMG_PATH + '/team_0' + units[i_count][i_amari][unit_count].color + '_' + GG_ANIMATION_IMG_PATH + '.png';
                    if (units[i_count][i_amari][unit_count].move_flag == undefined &&
                        units[i_count][i_amari][unit_count].move_flag == true) {
                        if (units[i_count][i_amari][unit_count].vector % 3 == 0 ||
                            units[i_count][i_amari][unit_count].vector % 3 == 2) {
                            high_y -= 1 * zoom;
                        }
                    }
                    context.drawImage(gg.view.data.etc_img[flag_name],
                                      0,
                                      0,
                                      90,
                                      60,
                                      Math.floor(width_x + GG_VIEW_IMAGE_SIZE * zoom * 0.65),
                                      Math.floor(high_y - (GG_VIEW_HEX_HIGH * 1.65 - fade_y)* zoom + 5 * zoom * 0.4),
                                      8 * zoom * 0.8,
                                      5 * zoom * 0.8);
                }
                if (units[i_count][i_amari][unit_count].hitpoint != null &&
                    gg.view.data.hitpoint_flag == true) {
                    if (units[i_count][i_amari][unit_count].move_flag == undefined &&
                        units[i_count][i_amari][unit_count].move_flag == true) {
                        if (units[i_count][i_amari][unit_count].vector % 3 == 0 ||
                            units[i_count][i_amari][unit_count].vector % 3 == 2) {
                            high_y -= 1 * zoom;
                        }
                    }

                    context.globalAlpha = 0.7;
                    context.drawImage(gg.view.data.etc_img[GG_DATA_IMAGE_PATH + GG_ANIMATION_IMG_PATH + '/hitpoint_back_' + GG_ANIMATION_IMG_PATH + '.png'],
                                      0,
                                      0,
                                      80,
                                      40,
                                      Math.floor(width_x + GG_VIEW_IMAGE_SIZE * zoom * 0.65),
                                      Math.floor(high_y + (4.5 - GG_VIEW_HEX_HIGH * 1.65 + fade_y)* zoom + 5 * zoom * 0.3),
                                      8 * zoom,
                                      4 * zoom);
                    context.globalAlpha = 1;

                    context.fillStyle = GG_VIEW_AREA[units[i_count][i_amari][unit_count].color][0].line;
                    diff_x = 0.75;
                    if (units[i_count][i_amari][unit_count].hitpoint > 99) {
                        diff_x -= 0.1;
                    } else if (units[i_count][i_amari][unit_count].hitpoint > 9) {
                        //diff_x = 0;
                    } else if (units[i_count][i_amari][unit_count].hitpoint > -1) {
                        diff_x += 0.1;
                    } else if (units[i_count][i_amari][unit_count].hitpoint > -10) {
                        diff_x += 0.05;
                    } else if (units[i_count][i_amari][unit_count].hitpoint > -100) {
                        diff_x -= 0.05;
                    }
                    context.fillText(units[i_count][i_amari][unit_count].hitpoint,
                                     Math.floor(width_x + GG_VIEW_IMAGE_SIZE * zoom * diff_x),
                                     Math.floor(high_y + (0.5 - GG_VIEW_HEX_HIGH * 0.35 + fade_y) * zoom + 5 * zoom * 0.3));
                }

                
                if (units[i_count][i_amari][unit_count].vector3 != null) {
                    img_position = GG_VIEW_IMAGE_EFFECT_POSITION[units[i_count][i_amari][unit_count].vector3];
                    context.drawImage(gg.view.data.etc_img[GG_DATA_IMAGE_PATH + GG_ANIMATION_IMG_PATH + '/' + 'effect_' + GG_ANIMATION_IMG_PATH + '.png'],
                                      img_position.x * 10, img_position.y * 10,
                                      14 * 10,
                                      14 * 10,
                                      Math.floor(width_x + 5 * zoom),
                                      Math.floor(high_y - (GG_VIEW_HEX_HIGH * 2 - fade_y - 9) * zoom),
                                      14 * zoom,
                                      14 * zoom);
                }
            }

            if (units[i_count][i_amari][unit_count].alpha != null) {
                context.globalAlpha = 1;
            }
        }
        if (i_amari == 1) {
            for (var j = 0 ; j < map[i_count].length; j++) {
                if (gg.view.data.area_map[i_count][j] >= 0) {
//                    width_x = Math.floor(GG_VIEW_START_X + j * zoom * GG_VIEW_HEX_WIDTH + zoom * 1.5);
                    width_x = GG_VIEW_START_X + (j * GG_VIEW_HEX_WIDTH + 1.5) * zoom;
                    high_y = GG_VIEW_START_Y +
//                             (i_count - 1) * zoom * 17 +
//                             zoom * 8
//                             - GG_VIEW_HEX_HIGH_BIN * zoom * map[i_count][j]);
                             (i_count * 17 - 9 - GG_VIEW_HEX_HIGH_BIN * map[i_count][j]) * zoom;
                    flag_name = 'img/' + GG_ANIMATION_IMG_PATH + '/flag_0' + gg.view.data.area_map[i_count][j] + '_' + GG_ANIMATION_IMG_PATH + '.png';
                    context.drawImage(gg.view.data.etc_img[flag_name],
                                  0,
                                  0,
                                  100,
                                  100,
                                  //width_x + zoom * 4 + 10 * zoom,
                                  Math.floor(width_x + 14 * zoom),
                                  //high_y - GG_VIEW_HEX_HIGH * zoom * 2 + GG_VIEW_IMAGE_SIZE * zoom * 16 / 32,
                                  Math.floor(high_y + (GG_VIEW_IMAGE_SIZE * 16 / 32 - GG_VIEW_HEX_HIGH * 2) * zoom),
                                  10 * zoom,
                                  10 * zoom);
                    context.drawImage(gg.view.data.etc_img['img/' + GG_ANIMATION_IMG_PATH + '/castle_' + GG_ANIMATION_IMG_PATH + '.png'],
                                  0,
                                  0,
                                  140,
                                  60,
                                  Math.floor(width_x + zoom * 5),
                                  //high_y - GG_VIEW_HEX_HIGH * zoom * 2 + GG_VIEW_IMAGE_SIZE * zoom * 17 / 32 + 6 * zoom,
                                  Math.floor(high_y + (GG_VIEW_IMAGE_SIZE * 17 / 32 + 6 - GG_VIEW_HEX_HIGH * 2) * zoom),
                                  14 * zoom,
                                  6 * zoom);
                }
            }
            for (var j = 0; j < fix_numbers[i_count].length; j++) {
                //add_x = 0;
                //add_y = 0;
                if (fix_numbers[i_count][j].shake == GG_VIEW_SHAKE_UPDOWN) {
                    //add_y = -0.1;
                    if (gg.view.data.animation_count % 8 == 0) {
                        add_y = 0;
                    } else if (gg.view.data.animation_count % 8 == 1 || gg.view.data.animation_count % 8 == 7) {
                        add_y = -0.025;
                    } else if (gg.view.data.animation_count % 8 == 2 || gg.view.data.animation_count % 8 == 6) {
                        add_y = -0.05;
                    } else if (gg.view.data.animation_count % 8 == 3 || gg.view.data.animation_count % 8 == 5) {
                        add_y = -0.075;
                    } else if (gg.view.data.animation_count % 8 == 4) {
                        add_y = -0.1;
                    }

                } else if (fix_numbers[i_count][j].shake == GG_VIEW_SHAKE_LEFTRIGHT) {
                    //add_x = 0
                    if (gg.view.data.animation_count % 8 == 0 || gg.view.data.animation_count % 8 == 4) {
                        add_x = 0;
                    } else if (gg.view.data.animation_count % 8 == 1 || gg.view.data.animation_count % 8 == 3) {
                        add_x = 0.05;
                    } else if (gg.view.data.animation_count % 8 == 2 ) {
                        add_x = 0.07;
                    } else if (gg.view.data.animation_count % 8 == 5 || gg.view.data.animation_count % 8 == 7) {
                        add_x = -0.05;
                    } else if (gg.view.data.animation_count % 8 == 6) {
                        add_x = -0.07;
                    }
                }
                
//                width_x = Math.floor(GG_VIEW_START_X + (fix_numbers[i_count][j].map_x + add_x) * zoom * GG_VIEW_HEX_WIDTH + zoom * 1.5 + 4 * zoom);
                width_x = GG_VIEW_START_X + ((fix_numbers[i_count][j].map_x + add_x) * GG_VIEW_HEX_WIDTH + 5.5) * zoom;
                high_y = GG_VIEW_START_Y +
//                             (i_count + add_y - 1) * zoom * 17 +
//                             zoom * 8
                             (i_count * 17 + add_y * 17 - 9 - GG_VIEW_HEX_HIGH * 2
                             - GG_VIEW_HEX_HIGH_BIN * map[i_count][fix_numbers[i_count][j].map_x]) * zoom;

                img_position = GG_VIEW_IMAGE_NUMBER_POSITION[fix_numbers[i_count][j].vector];
                
                context.drawImage(gg.view.data.etc_img[GG_DATA_IMAGE_PATH + GG_ANIMATION_IMG_PATH + '/' + fix_numbers[i_count][j].image + '_' + GG_ANIMATION_IMG_PATH + '.png'],
                                  img_position.x * 10,
                                  0,
                                  160,
                                  60,
                                  Math.floor(width_x),
                                  Math.floor(high_y + 6 * zoom * 0.3),
                                  16 * zoom,
                                  6 * zoom);
                if (fix_numbers[i_count][j].second_damage != null) {
                context.drawImage(gg.view.data.etc_img[GG_DATA_IMAGE_PATH + GG_ANIMATION_IMG_PATH + '/' + fix_numbers[i_count][j].second_damage + '_' + GG_ANIMATION_IMG_PATH + '.png'],
                                      0,
                                      0,
                                      160,
                                      60,
                                      Math.floor(width_x),
                                      Math.floor(high_y - 6 * zoom + 6 * zoom * 0.3),
                                      16 * zoom,
                                      6 * zoom );
                }
                

            }
        }
    }
    // weapon start
    var temp_img_size;
    var cx, cy;
    for (var unit_count = 0; unit_count < weapons.length; unit_count++) {
//        width_x = Math.floor(GG_VIEW_START_X + weapons[unit_count].x * zoom * GG_VIEW_HEX_WIDTH + zoom * 1.5);
        width_x = GG_VIEW_START_X + (weapons[unit_count].x * GG_VIEW_HEX_WIDTH + 1.5) * zoom;
                
        high_y = GG_VIEW_START_Y +
//                             (weapons[unit_count].y - 1) * zoom * 17 +
//                             zoom * 8
                             (weapons[unit_count].y * 17 - 9
                             - GG_VIEW_HEX_HIGH_BIN * map[weapons[unit_count].map_y][weapons[unit_count].map_x]) * zoom;
        
        add_y = 0, add_x = 0;
        if (weapons[unit_count].kind == GG_VIEW_ETC_LINE) {
            img_position = GG_VIEW_IMAGE_START_LINE_POSITION[weapons[unit_count].vector];
            temp_img_size = GG_VIEW_IMAGE_SIZE;
            temp_bin = GG_VIEW_IMAGE_SIZE * zoom;

        } else if (weapons[unit_count].kind == GG_VIEW_IMAGE_SIZE_LONG_WEAPON) {
            img_position = {x:0, y:0};
            temp_img_size = 12;
            add_y = zoom * 8;
            add_x = zoom * 8;
            temp_bin = temp_img_size * zoom;
        }

        if (weapons[unit_count].r != null) {
            cx = width_x + GG_VIEW_IMAGE_SIZE * zoom / 2;
            cy = high_y + GG_VIEW_IMAGE_SIZE * zoom / 2  - GG_VIEW_HEX_HIGH * zoom * 2;
            context.setTransform(
                        Math.cos(weapons[unit_count].r),
                        Math.sin(weapons[unit_count].r),
                        -Math.sin(weapons[unit_count].r),
                        Math.cos(weapons[unit_count].r),
                        cx - cx * Math.cos(weapons[unit_count].r) + cy * Math.sin(weapons[unit_count].r),
                        cy - cx * Math.sin(weapons[unit_count].r) - cy * Math.cos(weapons[unit_count].r));
        }
        context.drawImage(gg.view.data.etc_img[GG_DATA_IMAGE_PATH + GG_ANIMATION_IMG_PATH + '/' + weapons[unit_count].image + '_' + GG_ANIMATION_IMG_PATH + '.png'],
                          img_position.x * 10,
                          img_position.y * 10,
                          temp_img_size * 10,
                          temp_img_size * 10,
                          Math.floor(width_x + add_x),
                          Math.floor(high_y - GG_VIEW_HEX_HIGH * zoom * 2 + add_y),
                          temp_bin,
                          temp_bin);
            
        if (weapons[unit_count].r != null) {
            context.setTransform(1, 0, 0, 1, 0, 0);
        }
    }
    if (gg.view.data.audio_flag == true &&
        audio != null &&
        audio.turn == gg.view.data.animation_count) {
        gg.view.data.audio_array[audio.sound].play();
    } else if (gg.view.data.audio_flag == true &&
        audio != null &&
        audio.second_turn != null &&
        audio.second_turn == gg.view.data.animation_count) {
        gg.view.data.audio_array[audio.sound].play();
    }
    
    // end
    // dialog start
    if (gg.view.data.dialog.length != 0) {
        context.font = 'bold ' + GG_VIEW_FONT_LITTLE * zoom * 3 + 'pt Verdana';
    }

    for (var i = 0; i < gg.view.data.dialog.length; i++) {
        high_y = Math.floor(GG_VIEW_START_Y + gg.view.data.dialog[i].y * GG_VIEW_HEX_HIGH * zoom * 3 - 4 * GG_VIEW_HEX_HIGH_BIN * zoom);
        width_x = Math.floor(GG_VIEW_START_X - zoom * GG_VIEW_HEX_WIDTH + gg.view.data.dialog[i].x * zoom * GG_VIEW_HEX_WIDTH);
        high_bin = Math.floor(GG_VIEW_HEX_HIGH_BIN * zoom * map[gg.view.data.dialog[i].y][gg.view.data.dialog[i].x]);

        for (var j = 0; j < 2; j++) {
            if (j == 0) {
                context.globalAlpha = 0.7;
                context.fillStyle = 'white';
            } else {
                context.globalAlpha = 1;        
                context.strokeStyle = GG_VIEW_AREA[gg.view.data.dialog[i].color][0].line;
            }
            context.beginPath();       
            // 18.-14
            //context.moveTo(Math.floor(width_x + GG_VIEW_HEX_WIDTH * zoom * 22 / 16),
            //                Math.floor(high_y + GG_VIEW_HEX_HIGH * zoom * -14 / 16));
            
    
            //46,-14
            //context.lineTo(Math.floor(width_x + GG_VIEW_HEX_WIDTH * zoom * 44 / 16),
            context.moveTo(Math.floor(width_x + GG_VIEW_HEX_WIDTH * zoom * 44 / 16),
                            Math.floor(high_y + GG_VIEW_HEX_HIGH * zoom * -14 / 16));
    
                            
            context.quadraticCurveTo(Math.floor(width_x + GG_VIEW_HEX_WIDTH * zoom * 48 / 16),
                                      Math.floor(high_y + GG_VIEW_HEX_HIGH * zoom * -14 / 16),
                                      Math.floor(width_x + GG_VIEW_HEX_WIDTH * zoom * 48 / 16),
                                      Math.floor(high_y + GG_VIEW_HEX_HIGH * zoom * -8 / 16)
            );
    
            
            // 46,32
            context.lineTo(Math.floor(width_x + GG_VIEW_HEX_WIDTH * zoom * 48 / 16),
                            Math.floor(high_y + GG_VIEW_HEX_HIGH * zoom * 24 / 16));
    
            context.quadraticCurveTo(Math.floor(width_x + GG_VIEW_HEX_WIDTH * zoom * 48 / 16),
                                      Math.floor(high_y + GG_VIEW_HEX_HIGH * zoom * 32 / 16),
                                      Math.floor(width_x + GG_VIEW_HEX_WIDTH * zoom * 44 / 16),
                                      Math.floor(high_y + GG_VIEW_HEX_HIGH * zoom * 32 / 16)
            );
            
            // 18, 32
            context.lineTo(Math.floor(width_x + GG_VIEW_HEX_WIDTH * zoom * 22 / 16),
                            Math.floor(high_y + GG_VIEW_HEX_HIGH * zoom * 32 / 16));
    
            context.quadraticCurveTo(Math.floor(width_x + GG_VIEW_HEX_WIDTH * zoom * 18 / 16),
                                      Math.floor(high_y + GG_VIEW_HEX_HIGH * zoom * 32 / 16),
                                      Math.floor(width_x + GG_VIEW_HEX_WIDTH * zoom * 18 / 16),
                                      Math.floor(high_y + GG_VIEW_HEX_HIGH * zoom * 24 / 16)
            );
    
            // 18,-14
            context.lineTo(Math.floor(width_x + GG_VIEW_HEX_WIDTH * zoom * 18 / 16),
                            Math.floor(high_y + GG_VIEW_HEX_HIGH * zoom * -6 / 16));
    
            context.quadraticCurveTo(Math.floor(width_x + GG_VIEW_HEX_WIDTH * zoom * 18 / 16),
                                      Math.floor(high_y + GG_VIEW_HEX_HIGH * zoom * -14 / 16),
                                      Math.floor(width_x + GG_VIEW_HEX_WIDTH * zoom * 22 / 16),
                                      Math.floor(high_y + GG_VIEW_HEX_HIGH * zoom * -14 / 16)
            );
                
            context.closePath();
            if (j == 0) {
                context.fill();
            } else {
                context.stroke();
            }   
        }        
                
        
        context.fillStyle = GG_VIEW_AREA[gg.view.data.dialog[i].color][0].line;
        for (var j = 0; j < gg.view.data.dialog[i].info.length; j++) {
            //context.fillText(gg.view.data.dialog[i].info[j], Math.floor(width_x + GG_VIEW_HEX_WIDTH * zoom * 76 / 64),
            //                  Math.floor(high_y + (GG_VIEW_HEX_HIGH * -2 / 16 + GG_VIEW_HEX_HIGH * 21 / 32 * j)) * zoom);

            context.fillText(gg.view.data.dialog[i].info[j], Math.floor(width_x + GG_VIEW_HEX_WIDTH * zoom * 76 / 64),
//                              Math.floor(high_y + GG_VIEW_HEX_HIGH * zoom * -2 / 16 + GG_VIEW_HEX_HIGH * zoom * 21 / 32 * j));
                              Math.floor(high_y + (GG_VIEW_HEX_HIGH * -2 / 16 + GG_VIEW_HEX_HIGH * 21 / 32 * j) * zoom));
        }
    }
   
    // end

    /////////////////////////////////

    if (gg.view.data.area.count != -1) {
        gg.view.data.area.count++;
    }
    gg.view.data.animation_count++;
    gg.view.data.all_count++;
    var next_check = true;
    if (fix_number_animation_length != null) {
        if (gg.view.data.animation_count >= fix_number_animation_length) {
            next_check = false;
        }
    } else {
        if (gg.view.data.animation_count >= gg.view.data.animation_array.length) {
            next_check = false;
        }
    }
    if (gg.view.data.area.count != -1) {
        next_check = false;
    }
    //console.log('gg.view.data.area.count:' + gg.view.data.area.count);
    if (next_check == false) {
        if (gg.view.data.loop_flag == false) {
            if (gg.view.data.callback != null) {
                gg.view.data.animation_array = null;
                gg.view.data.fix_units = null;
                gg.view.data.select_map = null
                gg.view.data.fix_numbers = null;
    
                gg.view.data.callback();
            }
        } else {
            if (gg.view.data.area.count == -1 ||
                gg.view.data.area.count != GG_VIEW_SELECT_AREA_BIN + 1) {
                if (gg.view.data.select_map_number == 0) {
                    gg.view.data.select_map_number = 1;
                } else {
                    gg.view.data.select_map_number = 0;
                }
                gg.view.data.animation_count = 0;
                now_date = new Date();
                gg.view.data.now = now_date.getTime();
                gg.view.data.animation_timer_id = requestAnimationFrame(gg.view.animation_view2);
            } else {
                if (gg.view.data.callback != null) {
                    gg.view.data.animation_array = null;
                    gg.view.data.fix_units = null;
                    gg.view.data.select_map = null
                    gg.view.data.fix_numbers = null;
        
                    gg.view.data.callback();
                }
            }
        }
    } else {
        now_date = new Date();
        gg.view.data.now = now_date.getTime();
        gg.view.data.animation_timer_id = requestAnimationFrame(gg.view.animation_view2);
    }
};

gg.view.click_area = function(obj) {
    gg.view.data.callback = obj.callback;
    gg.view.data.area = {x: obj.x, y: obj.y, color: obj.color, count: 0};
    //gg.view.data.map = obj.map;
    //gg.view.data.zoom = obj.zoom;
    //gg.view.drow_area();  
};

gg.view.drow_area = function() {
    
    var now_date = new Date();
    if (now_date.getTime() - gg.view.data.now < 80) {
        gg.view.data.animation_timer_id = requestAnimationFrame(gg.view.drow_area);
        return;
    }
    // drow start
    var target = document.getElementById('canvas_0');
    var context = target.getContext('2d');
    // set color(count)
    var target = document.getElementById('canvas_0');
    var context = target.getContext('2d');
    var zoom = gg.view.data.zoom;
    
    // drow(hex)
    var width_x  = GG_VIEW_START_X + (13 + gg.view.data.area.x * GG_VIEW_HEX_WIDTH) * zoom;
    var high_bin = (GG_VIEW_HEX_HIGH_BIN * gg.view.data.map[gg.view.data.area.y][gg.view.data.area.x] - 14) * zoom;
    var high_y = GG_VIEW_START_Y + (gg.view.data.area.y - 1) * zoom * 17;
    
                    context.fillStyle = GG_VIEW_AREA[gg.view.data.area.color][0].area;
                     context.beginPath();        
                    context.moveTo(Math.floor(width_x - GG_VIEW_HEX_WIDTH * zoom * GG_VIEW_AREA_BIN * 0.70),
                                   Math.floor(high_y - GG_VIEW_HEX_HIGH * zoom * GG_VIEW_AREA_Y_BIN *0.58 - high_bin));                
                    context.lineTo(width_x,
                                   Math.floor(high_y - GG_VIEW_HEX_HIGH * zoom * 2 + zoom * 6.2 - high_bin));
                    context.lineTo(Math.floor(width_x + GG_VIEW_HEX_WIDTH * zoom * GG_VIEW_AREA_BIN * 0.7),
                                   Math.floor(high_y - GG_VIEW_HEX_HIGH * zoom  * GG_VIEW_AREA_Y_BIN *0.58 - high_bin));
                    
                    context.lineTo(Math.floor(width_x + GG_VIEW_HEX_WIDTH * zoom * GG_VIEW_AREA_BIN * 0.7),
                                   Math.floor(high_y + GG_VIEW_HEX_HIGH * zoom   * GG_VIEW_AREA_Y_BIN *0.58 - high_bin));
                    context.lineTo(width_x,
                                   Math.floor(high_y + GG_VIEW_HEX_HIGH * 2 * zoom - zoom * 6.2 - high_bin));
                    context.lineTo(Math.floor(width_x - GG_VIEW_HEX_WIDTH * zoom * GG_VIEW_AREA_BIN * 0.7),
                                   Math.floor(high_y + GG_VIEW_HEX_HIGH * zoom   * GG_VIEW_AREA_Y_BIN *0.58 - high_bin));
                    
                    context.closePath();
                    context.fill();
   
    // drow end
    
    gg.view.data.area.count++;
    if (gg.view.data.area.count >= 3) {
        gg.view.data.callback();
    } else {
        gg.view.data.now = now_date.getTime();
        gg.view.data.animation_timer_id = requestAnimationFrame(gg.view.drow_area);
    }
    
};

/////////////////////////
gg.view.clear_animation_loop = function() {
    cancelAnimationFrame(gg.view.data.animation_timer_id);
    gg.view.data.animation_array = null;
    gg.view.data.fix_units = null;
    gg.view.data.select_map = null
    gg.view.data.fix_numbers = null;
};


gg.event = {};
gg.event.data = {}
gg.event.data.callback;
gg.event.data.cancel_callback;
gg.event.data.map;
gg.event.data.zoom;
gg.event.data.pixel_ratio;
gg.event.data.start_x;
gg.event.data.cancel_pattern;
//gg.event.data.audio_url = '';
//gg.event.data.audio;
//gg.event.data.audio_flag;

var GG_EVENT_ELEMENT = 'canvas_0';

//gg.event.set_audio = function(audio) {
//    if (audio == GG_DATA_AUDIO_ARRAY[1]) {
//        gg.event.data.audio_flag = true;
//    } else {
//        gg.event.data.audio_flag = false;
//    }

//};
gg.event.set_cancel_pattern = function(cancel_pattern) {
    gg.event.data.cancel_pattern = cancel_pattern;
};

gg.event.set_pixel_ratio = function(pixel_ratio, start_x) {
    gg.event.data.pixel_ratio = pixel_ratio;
    gg.event.data.start_x = GG_VIEW_HEX_WIDTH * -2 * pixel_ratio + start_x;
    
    //gg.event.data.audio_url = 'audio/ckick.mp3';
    
    //if (navigator.userAgent.indexOf('Android') >= 0) {
    //    gg.event.data.audio_url = 'file:///android_asset/www/audio/ckick.mp3';
    //}
    //gg.event.data.audio = new Audio (gg.event.data.audio_url);
    
    //var temp_audio_flag = gg.storage.get_audio();
    //if (temp_audio_flag == GG_DATA_AUDIO_ARRAY[1]) {
    //    gg.event.data.audio_flag = true;
    //} else {
    //    gg.event.data.audio_flag = false;
    //}
};

gg.event.clear_event = function() {
    gg.event.data.callback = null;
    gg.event.data.cancel_callback = null;
    var canvas = document.getElementById(GG_EVENT_ELEMENT);
    canvas.removeEventListener('click', gg.event.click_event, false);
};

gg.event.add_event = function(map, zoom, callback, cancel_callback) {
    gg.event.data.callback = callback;
    gg.event.data.cancel_callback = cancel_callback;
    gg.event.data.map = map;
    gg.event.data.zoom = zoom;
    
    var canvas = document.getElementById(GG_EVENT_ELEMENT);
    canvas.addEventListener('click', gg.event.click_event, false);
    
};

gg.event.click_event = function(event) {
    var canvas = document.getElementById(GG_EVENT_ELEMENT);
    canvas.removeEventListener('click', gg.event.click_event, false);
    
    var map = gg.event.data.map;
    var zoom = gg.event.data.zoom;
    var map_x, map_y, r;
    var x, y;
    var pixel_ratio = gg.event.data.pixel_ratio;

    for (var i = 0; i < map.length; i++) {
        for (var j = 0; j < map[i].length; j++) {
            if (map[i][j] == -1) {
                continue;
            }
            map_x = Math.floor(GG_VIEW_START_X + zoom * GG_VIEW_HEX_WIDTH * 1 + j * zoom * GG_VIEW_HEX_WIDTH);
            map_y = Math.floor(GG_VIEW_START_Y + i * GG_VIEW_HEX_HIGH * zoom * 3 - GG_VIEW_HEX_HIGH_BIN * zoom * map[i][j]);
            r = Math.sqrt((map_x - (event.clientX - gg.event.data.start_x - GG_VIEW_HEX_WIDTH * 2 * pixel_ratio) * pixel_ratio) *
                          (map_x - (event.clientX - gg.event.data.start_x - GG_VIEW_HEX_WIDTH * 2 * pixel_ratio) * pixel_ratio) +
                          (map_y - event.clientY * pixel_ratio - GG_VIEW_HEX_HIGH_BIN * 8) *
                          (map_y - event.clientY * pixel_ratio - GG_VIEW_HEX_HIGH_BIN * 8));
            if (r <= GG_VIEW_HEX_HIGH * zoom * 1.5) {
                x = j;
                y = i;
                break;
            }
        }
        if (x != null) {
            break;
        }
    }
    if (x == undefined) {
        if (gg.event.data.cancel_pattern == GG_DATA_VIEW_CANCEL_PATTERN_ARRAY[1] &&
            gg.event.data.cancel_callback != null) {
            gg.event.data.cancel_callback();
        } else {
            canvas.addEventListener('click', gg.event.click_event, false);
        }
        
    } else {
        //if (gg.event.data.audio_flag) {
        //    gg.event.data.audio.play();
        //}
        gg.event.data.callback(x, y);        
    }
};

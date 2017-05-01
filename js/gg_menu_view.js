gg.menu.set_recode_view = function() {
    var device_id = GG_DATA_DEVICE_SMARTPHONE;
    var temp_button_font_size = '1.3em';
	if (navigator.userAgent.indexOf('Android') > 0 &&
	    navigator.userAgent.indexOf('Mobile') < 0) {
        device_id = GG_DATA_DEVICE_TABLET;
	}
    
    if (device_id == GG_DATA_DEVICE_SMARTPHONE) {
        if (window.innerWidth * window.devicePixelRatio > 800 &&
            window.innerWidth * window.devicePixelRatio <= 1080) {
			document.getElementById('info').style.fontSize = 'small';
        }
    }	
};

gg.menu.set_game_view = function() {
	gg.menu.set_back_ground_image();

	var ratio = gg.menu.ratio_cal();
	// debug
	//ratio = 4.5;

	var x_size_diff = Math.floor((window.innerWidth - GG_DATA_GAME_VIEW_BASE_WIDTH * ratio / window.devicePixelRatio) / 2);
	
	//var admob_heigh = GG_DATA_ADMOB_SMARTPHONE_HEIGHT;
	var admob_heigh = 0;
    var device_id = GG_DATA_DEVICE_SMARTPHONE;
    var temp_button_font_size = '1.3em';
	if (navigator.userAgent.indexOf('Android') > 0 &&
	    navigator.userAgent.indexOf('Mobile') < 0) {
		//admob_heigh = GG_DATA_ADMOB_TABLET_HEIGHT;
		admob_heigh = 0;
        device_id = GG_DATA_DEVICE_TABLET;
	}
    
    if (device_id == GG_DATA_DEVICE_SMARTPHONE) {
        if (window.innerWidth * window.devicePixelRatio > 800 &&
            window.innerWidth * window.devicePixelRatio <= 1080) {
            temp_button_font_size = '1.6em';
        } else if (window.innerWidth * window.devicePixelRatio > 1080) {
            temp_button_font_size = '1.9em';
        }
    } else {
        if (window.innerWidth * window.devicePixelRatio > 1200) {
			temp_button_font_size = '2.4em';
		} else {
			temp_button_font_size = '2.1em';
		}
    }
	//temp_button_font_size = '2.4em';
	//temp_button_font_size = '2.9em';
    
	temp_button_font_size = '2.0em';
	if (navigator.userAgent.indexOf('Electron') > 0) {
        temp_button_font_size = '2.9em';
        
    }
    //

    // set 
	document.getElementById('div_canvas_0').style.marginLeft = x_size_diff + 'px';
	
	var element = document.getElementById('canvas_0'); 
	element.width = Math.ceil(ratio * GG_DATA_GAME_VIEW_BASE_WIDTH);
	element.height = Math.ceil(ratio * GG_DATA_GAME_VIEW_BASE_HEIGHT);
	element.style.width = (Math.ceil(ratio * GG_DATA_GAME_VIEW_BASE_WIDTH / window.devicePixelRatio)) + 'px';
	element.style.height = (Math.ceil(ratio * GG_DATA_GAME_VIEW_BASE_HEIGHT / window.devicePixelRatio)) + 'px';
	
	gg.menu.set_canvas(((ratio * GG_DATA_GAME_VIEW_BASE_HEIGHT) / window.devicePixelRatio), ratio * GG_DATA_GAME_VIEW_BASE_WIDTH);
	
	
	var dialog = document.getElementById('destinetion');
	dialog.style.top = Math.ceil(((ratio * GG_DATA_GAME_VIEW_BASE_HEIGHT) / window.devicePixelRatio) / 4);
	
	var width_bin = window.innerWidth - button_cancel.clientWidth -
	                button_dialog.clientWidth - button_menu.clientWidth;

	var table_element = document.getElementById('button_table');
	//table_element.width = Math.ceil(ratio * GG_DATA_GAME_VIEW_BASE_WIDTH / window.devicePixelRatio) + 'px';
	//table_element.width = Math.ceil(GG_DATA_TABLE_DEFAULT_SIZE * ratio / 10 / window.devicePixelRatio * 100);
	table_element.style.marginLeft  = x_size_diff + 'px';
	table_element.style.marginRight = (x_size_diff - 50)+ 'px';
	table_element.style.display = 'inline';
	table_element.style.width = Math.ceil(ratio * GG_DATA_GAME_VIEW_BASE_WIDTH / window.devicePixelRatio) + 'px';
    if (device_id == GG_DATA_DEVICE_TABLET) {
        var td_cancel = document.getElementById('td_cancel');
        td_cancel.style.width = '185px';
        var td_dialog = document.getElementById('td_dialog');
        td_dialog.style.width = '185px';
        var td_menu = document.getElementById('td_menu');
        td_menu.style.width   = '185px';
        
    }
	
	
	var info_table = document.getElementById('info_table');
	info_table.style.fontSize = temp_button_font_size;
	info_table.width = Math.ceil(GG_DATA_TABLE_DEFAULT_SIZE * ratio / 10 / window.devicePixelRatio);
	info_table.style.marginLeft  = Math.ceil((window.innerWidth - info_table.clientWidth) / 2);
	info_table.style.marginRight = (Math.ceil((window.innerWidth - info_table.clientWidth) / 2) - 50);
	info_table.style.display = 'inline';
    if (device_id == GG_DATA_DEVICE_TABLET) {
        var mode_info = document.getElementById('mode_info');
        mode_info.style.width = '28px';
        var unit_info = document.getElementById('unit_info');
        unit_info.style.width = '66px';
        var round_info = document.getElementById('round_info');
        round_info.style.width = '76px';
        
        var turn_info = document.getElementById('turn_info');
        turn_info.style.width = '104px';
        
        var hande_info = document.getElementById('hande_info');
        hande_info.style.width = '66px';
        var game_long_info = document.getElementById('game_long_info');
        game_long_info.style.width = '82px';
        var lost_info = document.getElementById('lost_info');
        lost_info.style.width = '62px';
        
    }
    
    // set height 

	var margin = Math.floor((window.innerHeight - element.height / window.devicePixelRatio - table_element.offsetHeight - info_table.offsetHeight - admob_heigh) / 3);
	if (margin < 0) {
		margin = 0;
	}
	info_table.style.marginTop    = margin;
	info_table.style.marginBottom = margin;
	info_table.style.opacity = 1;

	// view

    // set
	gg.event.set_pixel_ratio(window.devicePixelRatio, x_size_diff);
	gg.view.set_pixel_ratio(ratio, 0);
		
    // next
    return ratio;
  
};
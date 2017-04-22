gg.graph = {};

var GG_GRAPHT_Y_BIN_INTEGER = 0; 
var GG_GRAPHT_Y_BIN_DECIMAL = 1; 

gg.graph.drow_graph = function(id, obj, zoom) {
    var target = document.getElementById(id);
    var ratio = window.devicePixelRatio;
    var context = target.getContext('2d');
    
    //
    context.lineWidth = GG_VIEW_LINE_WIDTH * 2 * zoom;    
    context.clearRect(0, 0, target.clientWidth, target.clientHeight);
    context.lineJoin = "round";
    context.lineCap = "round";
    //
    var y_max = 0;
    var x_min = 0;
    var x_max = 0;
    var sum = [];
    var average = [];
	
    for (var i = 0; i < obj.data.length; i++) {
        sum[i] = 0;
        for (var j = 0; j < obj.data[i].length; j++) {
            if (j != 0) {
                sum[i] += obj.data[i][j].y;
            }
            if (i == 0 && j == 0) {
                x_min = obj.data[i][j].x;
            }
            if (y_max < obj.data[i][j].y) {
                y_max = obj.data[i][j].y;
            }
            if (x_max < obj.data[i][j].x) {
                x_max = obj.data[i][j].x;
            }
            if (x_min > obj.data[i][j].x) {
                x_min = obj.data[i][j].x;
            }
        }
        if (obj.data[i].length >= 2) {
            average[i] = sum[i] / (obj.data[i].length - 1);
            //code
        } else {
            average[i] = 0;
        }
    }
    ////////////
	
    var line_start_x = Math.floor(target.clientWidth * 0.1 * ratio);
    var line_start_y = 0;
    var line_second_x = Math.floor(target.clientWidth * 0.1 * ratio);
    var line_second_y = Math.floor(target.clientHeight * 0.9 * ratio);
    var line_end_x = Math.floor(target.clientWidth * 0.98 * ratio);
    var line_end_y = Math.floor(target.clientHeight * 0.9 * ratio);
    
    var x_diff = target.clientWidth * 0.88 / (x_max - x_min) * ratio;
    var y_diff = target.clientHeight * 0.9 / (y_max * 1.2) * ratio;
   
    if (obj.info.line != undefined) {
        context.strokeStyle = 'gray';
        context.beginPath();        
        context.moveTo(line_start_x, line_second_y - (obj.info.line) * y_diff);    
        context.lineTo(line_end_x, line_second_y - (obj.info.line) * y_diff);
        context.stroke();
    }
    context.globalAlpha = 0.5;
    var dot_x_bin = Math.floor(target.clientWidth * 0.025);
	var average_x_bin = 0.25;
    if (obj.info.average != null && obj.info.average == true ) {
        for (var i = 0; i < obj.data.length; i++) {
            context.strokeStyle = obj.info.color[i];
            for (var j = 0; line_start_x + dot_x_bin * (j + average_x_bin) * window.devicePixelRatio < line_end_x; j++) {
                context.beginPath();
                context.moveTo(line_start_x + dot_x_bin * j * window.devicePixelRatio,
                           line_second_y - average[i] * y_diff);
                context.lineTo(line_start_x + dot_x_bin * (j + average_x_bin) * window.devicePixelRatio,
                               line_second_y - average[i] * y_diff);    
                context.stroke();        
                
            }
        }
    }
    context.globalAlpha = 1;

    for (var i = 0; i < obj.data.length; i++) {
        context.strokeStyle = obj.info.color[i];
        context.beginPath();        
        context.moveTo((obj.data[i][0].x - x_min) * x_diff + line_start_x,
                       line_second_y - (obj.data[i][0].y) * y_diff);    
        for (var j = 1; j < obj.data[i].length; j++) {
            context.lineTo((obj.data[i][j].x - x_min) * x_diff +line_start_x,
                           line_second_y - (obj.data[i][j].y) * y_diff);    
        }
        context.stroke();        
    }

    //
    line_start_x = Math.floor(target.clientWidth * 0.1 * ratio);
    line_start_y = 0;
    line_second_x = Math.floor(target.clientWidth * 0.1 * ratio);
    line_second_y = Math.floor(target.clientHeight * 0.9 * ratio);
    line_end_x = Math.floor(target.clientWidth * 0.98 * ratio);
    line_end_y = Math.floor(target.clientHeight * 0.9 * ratio);
    
    context.strokeStyle = 'black';
    context.beginPath();        
    context.moveTo(line_start_x, line_start_y);    
    context.lineTo(line_second_x, line_second_y);
    context.lineTo(line_end_x, line_end_y);
    context.stroke();

    //
    var bin = 4;
    var x_bin = Math.floor(x_max / bin);
    if (x_bin == 0) {
        x_bin = 1;
    }
    var line_bin_y = Math.floor(target.clientHeight * 0.03);
    var line_bin_x = Math.floor(target.clientWidth * 0.03);
    var max = 0;
    if (x_max < 4) {
        max = Math.floor(4 / x_bin) + 1;
	} else if (x_max < 8 && x_bin == 1) {
        max = x_max;
    } else {
        max = 5;
    }

    if (navigator.userAgent.indexOf('Android') >= 0) {
	    context.font = 'bold ' + GG_VIEW_FONT_LITTLE * zoom * 1 * window.devicePixelRatio + 'pt Verdana';
    } else {
		
	    context.font = 'bold ' + GG_VIEW_FONT_LITTLE * zoom * 2 * window.devicePixelRatio + 'pt Verdana';
		
	}
	
    var a = document.getElementById('check');
    //a.innerHTML += ' line_bin_y:' + line_bin_y;
    var text_add_y = line_bin_y * 2;
    if (navigator.userAgent.indexOf('Android') >= 0) {
        text_add_y = line_bin_y * 3;
    }
	var add_x = 0;
	var add_y = 0;
    if (navigator.userAgent.indexOf('Android') >= 0) {
        add_x = -1 * zoom * 0.5 * window.devicePixelRatio;
		add_y = zoom * 0.9 * window.devicePixelRatio;
    }
    
    for (var i = 0; i < max; i++) {
        context.beginPath();        
        context.moveTo(line_start_x + i * x_bin * x_diff, line_end_y);    
        context.lineTo(line_start_x + i * x_bin * x_diff, line_end_y + line_bin_y);    
        context.stroke();
        context.fillText(i * x_bin,
                         line_start_x + i * x_bin * x_diff + add_x,
                         line_end_y + text_add_y + add_y);
    }

    if (obj.info.y_bin == GG_GRAPHT_Y_BIN_DECIMAL) {
        var y_bin = Math.floor(y_max / 4 * 10) / 10;  
    } else {
        var y_bin = Math.floor(y_max / 4);
		if (y_bin == 0) {
			y_bin = 1;
		}
    }
    var y_parameter = line_bin_x * 2.5;
    if (y_max > 100) {
        y_parameter = line_bin_x * 3.5;
    }
	var add_x = 0;
	var add_y = 0;
    if (navigator.userAgent.indexOf('Android') >= 0) {
        add_x = -1 * zoom * 1.9 * window.devicePixelRatio;
		add_y = zoom * 0.5 * window.devicePixelRatio;
    }

    var str;
	var y_max_count = 5;
	if ((y_max_count - 1) * y_bin <= y_max) {
		y_max_count += 1;
		if ((y_max_count - 1) * y_bin <= y_max) {
			y_max_count += 1;
			if ((y_max_count - 1) * y_bin <= y_max) {
				y_max_count += 1;
			}
		}
	}
	if ((y_max_count - 1) * y_bin > y_max * 1.1) {
		y_max_count -= 1;
	}
	
	
	//if (y_bin == 1) {
	//	if ((y_max_count - 1) * 1 < y_max) {
	//		y_max_count = 4;
	//		y_bin = 2;
	//	}
	//} else if (y_bin == 2) {
	//	if ((y_max_count - 1) * 2 < y_max) {
	//		y_max_count = 4;
	//		y_bin = 3;
	//	}
	//}
    for (var i = 0; i < y_max_count; i++) {
        context.beginPath();
        context.moveTo(line_start_x, line_end_y - i * y_bin * y_diff);    
        context.lineTo(line_start_x - line_bin_x, line_end_y - i * y_bin * y_diff);    
        context.stroke();
        if (obj.info.y_bin == GG_GRAPHT_Y_BIN_DECIMAL) {
            str = Math.floor(i * y_bin) + '.' + (Math.floor(i * y_bin * 10) - Math.floor(i * y_bin) * 10);
            y_parameter = line_bin_x * 3.5;
        } else {
            str = i * y_bin;
        }
        context.fillText(str,
                         line_start_x - y_parameter + add_x,
                         line_end_y - i * y_bin * y_diff + add_y);
    }
    
};
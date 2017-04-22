gg.fadeout = {};

gg.fadeout.data = {};
gg.fadeout.data.next_url = '';
gg.fadeout.data.count = 0;
gg.fadeout.data.max_count = 10;
GG_FADE_TIMEOUT_ANIMATION = 1000;

// set
gg.fadeout.start = function(next_url) {
	gg.fadeout.data.next_url = next_url;
	gg.fadeout.data.count = 0;
    gg.fadeout.fadeout_doing();

};

// doing
gg.fadeout.fadeout_doing = function() {

	var opacity = document.body.style.opacity;
	opacity = (gg.fadeout.data.max_count - gg.fadeout.data.count) / gg.fadeout.data.max_count;
    gg.fadeout.data.count++;
    if (gg.fadeout.data.count < gg.fadeout.data.max_count) {
        setTimeout(gg.fadeout.fadeout_doing, GG_FADE_TIMEOUT_ANIMATION);
    } else {
        gg.fadeout.fadeout_end();
    }
};

// end
gg.fadeout.fadeout_end = function() {
    location.href = gg.fadeout.data.next_url;
};




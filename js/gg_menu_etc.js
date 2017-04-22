gg.menu.get_lang = function() {
    var lang  = window.navigator.userLanguage;
    //var element = document.getElementById('check');
    //console.log('lang:' + lang);
    if (lang == undefined) {
        lang  = window.navigator.language;
        //console.log('lang:' + lang);
    }
    //if (element != null) {
    //    element.innerHTML += ' lang:' + lang;
    //}
    var index_number = GG_DATA_LANG_STR.indexOf(lang);
    //console.log('b:' + index_number);
    if (index_number == -1) {
        var temp_index_number = GG_DATA_LANG_STR_PATTERN1.indexOf(lang);
        if (temp_index_number != -1) {
            index_number = GG_DATA_LANG_STR_PATTERN2[temp_index_number];
        } else {
            index_number = 1;            
        }

        //console.log('a:' + index_number);
    }

    //if (index_number == -1) {
    //    index_number = 1;
    //    console.log('c:' + index_number);
    //}
    
    return index_number;
};
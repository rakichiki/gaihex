//

var GG_DATA_ATTACK_LASER_RENAGE = 8;

var GG_DATA_ADMOB_SMARTPHONE_HEIGHT = 50;
var GG_DATA_ADMOB_TABLET_HEIGHT     = 90;

var GG_DATA_DEVICE_SMARTPHONE = 0;
var GG_DATA_DEVICE_TABLET     = 1;
var GG_DATA_DEVICE_LAPTOP     = 2;
var GG_DATA_DEVICE_DESKTOP    = 3;

var GG_DATA_GAME_VIEW_BASE_HEIGHT = 173;
var GG_DATA_GAME_VIEW_BASE_WIDTH  = 151;

var GG_DATA_TABLE_DEFAULT_SIZE = 1510;

var GG_DATA_ACTION_FATIGUE                        = 3;

// SE Sound
var GG_DATA_SOUND_WEAPON_DAMAGE = 'short_punch1.mp3';//'short_punch1.mp3';
var GG_DATA_SOUND_MAGIC_DAMAGE  = 'short_punch1.mp3';//'magic_wave1.mp3';
var GG_DATA_SOUND_RECOVERY      = 'magic1.mp3';//'chorus_of_angels1.mp3'; x

var GG_DATA_SOUND_LOST          = 'disappearance1.mp3';//'disappearance1.mp3'; ok short 
var GG_DATA_SOUND_CLASS_CHANGE  = 'powerup10.mp3';//'warp1.mp3';
var GG_DATA_SOUND_STATUS_UP     = 'powerup10.mp3';//'voice_of_light.mp3';
var GG_DATA_SOUND_FADE_IN       = 'powerup10.mp3';//'powerup10.mp3';
var GG_DATA_SOUND_LEVEL_UP      = 'powerup10.mp3';//'powerup10.mp3';

var GG_DATA_SOUND_USER_SELECT   = 'damage3.mp3';
var GG_DATA_SOUND_ANDROID_PATH  = 'file:///android_asset/www/audio/';
var GG_DATA_SOUND_PC_PATH       = 'audio/';


var GG_DATA_STATUS_CHANGE_NONE           = 0;
var GG_DATA_STATUS_CHANGE_UP_ATTACK      = 1;
var GG_DATA_STATUS_CHANGE_UP_DEFENCE     = 2;
var GG_DATA_STATUS_CHANGE_UP_MOVE        = 3;
var GG_DATA_STATUS_CHANGE_DELETE_FATIGUE = 4;
var GG_DATA_STATUS_CHANGE_DOWN_ATTACK    = 5;

var GG_DATA_DEFAULT_STATUS_CHANGE_NUMBER = 2;
//var GG_DATA_DEFAULT_STATUS_CHANGE_ATTACK_POINT   = 1.5;
var GG_DATA_DEFAULT_STATUS_CHANGE_ATTACK_POINT   = 4;
var GG_DATA_DEFAULT_STATUS_CHANGE_ATTACK_FATIGUE = 1;

var GG_DATA_DEFAULT_STATUS_CHANGE_DEFENCE_POINT = 4;
var GG_DATA_DEFAULT_STATUS_CHANGE_MOVE_POINT    = 4;
var GG_DATA_DEFAULT_STATUS_CHANGE_FATIGUE       = GG_DATA_ACTION_FATIGUE;

var GG_DATA_LOOP_TIMEOUT = 800;

var GG_DATA_AUTO_RECOVERY_OFF = -1;
var GG_DATA_AUTO_RECOVERY_ON  = 0;
var GG_DATA_AUTO_RECOVERY_END = 1;

var GG_DATA_DEAD_COUNT_UNIT_LOWER  = 3;
var GG_DATA_DEAD_COUNT_UNIT_MIDDLE = 2;
var GG_DATA_DEAD_COUNT_UNIT_UPPER  = 1;

// otameshi start
var GG_DATA_MAX_DEAD_COUNT = 3;

// end

var GG_DATA_NO_ACTION_RECOVERY_FATIGUE            = GG_DATA_ACTION_FATIGUE * 5;
var GG_DATA_ROB_AREA_POINT_FATIGUE                = GG_DATA_ACTION_FATIGUE * 2;
var GG_DATA_ROB_AREA_POINT_FATIGUE_NOACTION_TIMES = 10;
var GG_DATA_ROB_AREA_POINT_FATIGUE_ACTION_TIMES   = 5;

var GG_DATA_DEFAULT_IMAGE_SIZE = 24;

var GG_DATA_MAP_SIZE = {
  min_x: 2,
  max_x: 12,
  min_y: 1,
  max_y: 9,  
};

var GG_DATA_BACKGROUD_IMAGE = {
  normal:    'back_2'
  ,oneonone: 'back_2'
  ,campaign: 'back_8'
  ,defence:  'back_4'
  ,giant:    'back_11'
  ,team:     'back_13'
  ,benchmark:'back_14'
};

var GG_DATA_BORN_STR = {
  'start':    '開始'
  ,'create':  '生成'
  ,'deprived':'移籍'    
};

var GG_DATA_ZOC_PERCENT = 1;
var GG_DATA_TEAM_ROUND  = 7;

var GG_DATA_HANDE_ADD_POINT = {
     '-4': {add_attack_point: -3, add_defence_point: -4, add_recovery_point: 0}    
    ,'-3': {add_attack_point: -2, add_defence_point: -3, add_recovery_point: 0}    
    ,'-2': {add_attack_point: -1, add_defence_point: -2, add_recovery_point: 0}    
    ,'-1': {add_attack_point: 0,  add_defence_point: -1, add_recovery_point: 0}    
    ,'0':  {add_attack_point: 0,  add_defence_point: 0,  add_recovery_point: 0}    
    ,'1':  {add_attack_point: 0,  add_defence_point: 1,  add_recovery_point: 0}    
    ,'2':  {add_attack_point: 0,  add_defence_point: 2,  add_recovery_point: 0}    
    ,'3':  {add_attack_point: 1,  add_defence_point: 3,  add_recovery_point: 0}    
    ,'4':  {add_attack_point: 2,  add_defence_point: 4,  add_recovery_point: 1}    
};

//var attacker_unit.attack_option_change_defence = -4;
//var GG_DATA_ATTACK_OPTION_CHANGE_DEFENCE = -4;

var GG_DATA_HISTORY_STATUS_CREATE       = 0;
var GG_DATA_HISTORY_STATUS_LEVEL_UP     = 1;
var GG_DATA_HISTORY_STATUS_CLASS_CHANGE = 2;
var GG_DATA_HISTORY_STATUS_LOST         = 3;
var GG_DATA_HISTORY_STATUS_TEAM_CHANGE  = 4;
var GG_DATA_HISTORY_STATUS_GRATE_DAMAGE = 5;

var GG_DATA_TEAM_MAX_NUMBER = 20; //OK
var GG_DATA_GAME_END_UNIT_DIFF = 6;

//var GG_DATA_ASAULT_MIN_DISTANCE = 3;
//var GG_DATA_ASAULT_ATTACK_PERCENT = 0.5;

// Born Pattern
var GG_DATA_BORN_PATTERN_START    = 0;
var GG_DATA_BORN_PATTERN_CREATE   = 1;
var GG_DATA_BORN_PATTERN_DEPRIVED = 2;

// ?
var GG_DATA_TEAM_ENEMY_LIST = [
    // 4
    [
        // Round 1
        [{number:1, unit:[0,1,2,3]}, {number:0}, {number:0}, {number:1, unit:[12]}, {number:1, unit:[13]}, {number:1, unit:[14]}]
     
        // Round 2
        ,[{number:1, unit:[0,1,2,3]}, {number:1, unit:[4,5,6,7]}, {number:0}, {number:1, unit:[12]}, {number:0, unit:[13]}, {number:1, unit:[14]}]
        
        // Round 3
        ,[{number:1, unit:[0,1,2,3]}, {number:1, unit:[4,5,6,7]}, {number:1, unit:[8,9,10,11]}, {number:1, unit:[12]}, {number:0, unit:[13]}, {number:0, unit:[14]}]
     
        // Round 4
        ,[{number:2, unit:[0,1,2,3]}, {number:1, unit:[4,5,6,7]}, {number:1, unit:[8,9,10,11]}, {number:0, unit:[12]}, {number:0, unit:[13]}, {number:0, unit:[14]}]
     
        // Round 5
        ,[{number:2, unit:[0,1,2,3]}, {number:1, unit:[4,5,6,7]}, {number:1, unit:[8,9,10,11]}, {number:0, unit:[12]}, {number:0, unit:[13]}, {number:0, unit:[14]}]
     
        // Round 6 ( no data)
        // Round 7 ( no data)
    ]
    
    // 8
    ,[
        // Round 1
        [{number:1, unit:[0,1,2,3]}, {number:0}, {number:0}, {number:2, unit:[12]}, {number:3, unit:[13]}, {number:2, unit:[14]}]
     
        // Round 2
        ,[{number:1, unit:[0,1,2,3]}, {number:1, unit:[4,5,6,7]}, {number:0}, {number:2, unit:[12]}, {number:2, unit:[13]}, {number:2, unit:[14]}]
        
        // Round 3
        ,[{number:1, unit:[0,1,2,3]}, {number:1, unit:[4,5,6,7]}, {number:1, unit:[8,9,10,11]}, {number:2, unit:[12]}, {number:2, unit:[13]}, {number:1, unit:[14]}]
     
        // Round 4
        ,[{number:2, unit:[0,1,2,3]}, {number:1, unit:[4,5,6,7]}, {number:1, unit:[8,9,10,11]}, {number:1, unit:[12]}, {number:2, unit:[13]}, {number:1, unit:[14]}]
     
        // Round 5
        ,[{number:2, unit:[0,1,2,3]}, {number:2, unit:[4,5,6,7]}, {number:1, unit:[8,9,10,11]}, {number:1, unit:[12]}, {number:1, unit:[13]}, {number:1, unit:[14]}]
     
        // Round 6 ( no data)
        // Round 7 ( no data)
    ]
    
    // 12
    ,[
        // Round 1
        [{number:1, unit:[0,1,2,3]}, {number:0}, {number:0}, {number:3, unit:[12]}, {number:4, unit:[13]}, {number:4, unit:[14]}]
     
        // Round 2
        ,[{number:1, unit:[0,1,2,3]}, {number:1, unit:[4,5,6,7]}, {number:0}, {number:3, unit:[12]}, {number:3, unit:[13]}, {number:4, unit:[14]}]
        
        // Round 3
        ,[{number:1, unit:[0,1,2,3]}, {number:1, unit:[4,5,6,7]}, {number:1, unit:[8,9,10,11]}, {number:3, unit:[12]}, {number:3, unit:[13]}, {number:3, unit:[14]}]
     
        // Round 4
        ,[{number:2, unit:[0,1,2,3]}, {number:1, unit:[4,5,6,7]}, {number:1, unit:[8,9,10,11]}, {number:2, unit:[12]}, {number:3, unit:[13]}, {number:3, unit:[14]}]
     
        // Round 5
        ,[{number:2, unit:[0,1,2,3]}, {number:2, unit:[4,5,6,7]}, {number:1, unit:[8,9,10,11]}, {number:2, unit:[12]}, {number:2, unit:[13]}, {number:3, unit:[14]}]
     
        // Round 6 ( no data)
        // Round 7 ( no data)
   ]
];

// Class Chnage Uniq
var GG_DATA_CLASS_CHANGE_GAME_UNIQ = 'game';
var GG_DATA_CLASS_CHANGE_TEAM_UNIQ = 'team';

var GG_DATA_ANIMATION_EFFECT_NONE       = 0;
var GG_DATA_ANIMATION_EFFECT_ASSAULT    = 1;
var GG_DATA_ANIMATION_EFFECT_CLASS_DOWN = 2;

//var GG_DATA_MENU_UNIT_MAX = 20;
var GG_DATA_MENU_ANIMATION_MAX = 12;

var GG_DATA_GIANT_SELECT_ENEMY_UPER_UNIT = [
    [0, 1]
    ,[3, 4]
    ,[6, 7]
    ,[9, 10]
    ,[12, 13]
    ,[15, 16]
];

var GG_DATA_DEFENCE_ENEMY_AREA_POINT = [
                                        0, 150, 300, 450, 600, 750, 900,
                                        1050, 1200, 1350 , 1500, 1650, 1800, 1950, 2100,
                                        2250, 2400, 2550, 2700
                                        ];

var GG_DATA_PICTURE_MOVE    = 'm';
var GG_DATA_PICTURE_ATTACK1 = 'a1';
var GG_DATA_PICTURE_ATTACK2 = 'a2';
var GG_DATA_PICTURE_STATUS0 = 's0';
var GG_DATA_PICTURE_STATUS1 = 's1';
var GG_DATA_PICTURE_STATUS2 = 's2';
var GG_DATA_PICTURE_STATUS3 = 's3';
var GG_DATA_PICTURE_STATUS4 = 's4';
var GG_DATA_PICTURE_STATUS5 = 's5';
var GG_DATA_PICTURE_STATUS6 = 's6';
var GG_DATA_PICTURE_STATUS7 = 's7';
//var GG_DATA_PICTURE_UNIQ    = 'u';
//var GG_DATA_PICTURE_STATUS  = 's'; // delete

var GG_DATA_ORDER = -1;

//var GG_DATA_UNIT_MAX = 18;
//var GG_DATA_UNIT_MAX = 18;
var GG_DATA_UNIT_MAX = 15;

//var GG_DATA_CAMPAIGN_ADD_AREA_POINT = [
var GG_DATA_CAMPAIGN_INFO = [
  //
  // {base_trun: 10, delete_turn:15, add_area_point: 20, end_turn: 20, del_area_point: 40} // 1 1 20
  //,{base_trun: 10, delete_turn:15, add_area_point: 20, end_turn: 20, del_area_point: 40} // 2 1 20
  //,{base_trun: 16, delete_turn:24, add_area_point: 20, end_turn: 32, del_area_point: 40} // 3 2 16
  //,{base_trun: 16, delete_turn:24, add_area_point: 20, end_turn: 32, del_area_point: 40} // 4 2 16
  //,{base_trun: 16, delete_turn:24, add_area_point: 20, end_turn: 32, del_area_point: 40} // 5 2 16
  //,{base_trun: 20, delete_turn:30, add_area_point: 20, end_turn: 40, del_area_point: 40} // 6 3 13
  //,{base_trun: 20, delete_turn:30, add_area_point: 20, end_turn: 40, del_area_point: 40} // 7 3 13
  //,{base_trun: 26, delete_turn:39, add_area_point: 20, end_turn: 52, del_area_point: 40} // 8 4 12
  //,{base_trun: 26, delete_turn:39, add_area_point: 20, end_turn: 52, del_area_point: 40} // 9 4 12
  //,{base_trun: 26, delete_turn:39, add_area_point: 20, end_turn: 52, del_area_point: 40} // 10 4 12
  //,{base_trun: 30, delete_turn:45, add_area_point: 20, end_turn: 60, del_area_point: 40} // 11 5 12
  //,{base_trun: 30, delete_turn:45, add_area_point: 20, end_turn: 60, del_area_point: 40} // 12 5 12

   {base_trun: 8,  delete_turn:12, add_area_point: 30, end_turn: 20, del_area_point: 100} // 1 1 20
  ,{base_trun: 8,  delete_turn:12, add_area_point: 30, end_turn: 20, del_area_point: 100} // 2 1 20
  ,{base_trun: 12, delete_turn:18, add_area_point: 30, end_turn: 30, del_area_point: 100} // 3 2 16
  ,{base_trun: 12, delete_turn:18, add_area_point: 30, end_turn: 30, del_area_point: 100} // 4 2 16
  ,{base_trun: 12, delete_turn:18, add_area_point: 30, end_turn: 30, del_area_point: 100} // 5 2 16
  ,{base_trun: 16, delete_turn:24, add_area_point: 30, end_turn: 40, del_area_point: 100} // 6 3 13
  ,{base_trun: 16, delete_turn:24, add_area_point: 30, end_turn: 40, del_area_point: 100} // 7 3 13
  ,{base_trun: 20, delete_turn:30, add_area_point: 30, end_turn: 50, del_area_point: 100} // 8 4 12
  ,{base_trun: 20, delete_turn:30, add_area_point: 30, end_turn: 50, del_area_point: 100} // 9 4 12
  ,{base_trun: 20, delete_turn:30, add_area_point: 30, end_turn: 50, del_area_point: 100} // 10 4 12
  ,{base_trun: 24, delete_turn:36, add_area_point: 30, end_turn: 60, del_area_point: 100} // 11 5 12
  ,{base_trun: 24, delete_turn:36, add_area_point: 30, end_turn: 60, del_area_point: 100} // 12 5 12
  //,{base_trun: 28, delete_turn:42, add_area_point: 30, end_turn: 70, del_area_point: 100} // 13 6 12
  //,{base_trun: 28, delete_turn:42, add_area_point: 30, end_turn: 70, del_area_point: 100} // 14 6 12

  //,{base_trun: 35, add_area_point: 10, end_turn: 70, del_area_point: 20}
];

var GG_DATA_WIN_OPTION = [
  0
  ,0 //1 1
  ,1 //2 1
  ,1 //3 2
  ,2 //4 2
  ,3 //5 2
  ,3 //6 3
  ,4 //7 3
  ,4 //8 4
  ,5 //9 4
  ,6 //10 4
  ,6 //11 5
  ,7 //12 5
  ,7 // 13 6
  ,8 // 14 6
  ,9 // 15
  ,9 // 16
  ,10 //17
  ,10 // 18
];

var GG_DATA_UNIT_POSITION_ENEMY = [
  //0
  []
  //1
  ,[
    {x:9,y:5}
  ]
  // 2
  ,[
    {x:10, y:4}
    ,{x:10, y:6}
  ]
  // 3
  ,[
    {x:10, y:4}
    ,{x:10, y:6}

    ,{x:9, y:5}
  ]
  // 4
  ,[
    {x:10, y:4}
    ,{x:10, y:6}

    ,{x:10, y:8}
    ,{x:10, y:2}
  ]
  // 5
  ,[
    {x:10, y:4}
    ,{x:10, y:6}

    ,{x:10, y:8}
    ,{x:10, y:2}

    ,{x:11, y:5}

  ]
  // 6
  ,[
    {x:10, y:4}
    ,{x:10, y:6}

    ,{x:10, y:8}
    ,{x:10, y:2}

    ,{x:11, y:7}
    ,{x:11, y:3}

  ]
  // 7
  ,[
    {x:10, y:4}
    ,{x:10, y:6}

    ,{x:10, y:8}
    ,{x:10, y:2}

    ,{x:11, y:7}
    ,{x:11, y:5}
    ,{x:11, y:3}
  ]
  // 8
  ,[
    {x:10, y:4}
    ,{x:10, y:6}

    ,{x:10, y:8}
    ,{x:10, y:2}

    ,{x:11, y:7}
    ,{x:11, y:3}
    
    ,{x:11, y:1}
    ,{x:11, y:9}
  ]
  // 9
  ,[
    {x:10, y:4}
    ,{x:10, y:6}

    ,{x:10, y:8}
    ,{x:10, y:2}

    ,{x:11, y:7}
    ,{x:11, y:3}
    
    ,{x:11, y:1}
    ,{x:11, y:9}

    ,{x:11, y:5}
  ]
  // 10
  ,[
    {x:10, y:4}
    ,{x:10, y:6}

    ,{x:10, y:8}
    ,{x:10, y:2}

    ,{x:11, y:7}
    ,{x:11, y:3}
    
    ,{x:11, y:1}
    ,{x:11, y:9}

    ,{x:12, y:4}
    ,{x:12, y:6}
  ]
  // 11
  ,[
    {x:10, y:4}
    ,{x:10, y:6}

    ,{x:10, y:8}
    ,{x:10, y:2}

    ,{x:11, y:7}
    ,{x:11, y:3}
    
    ,{x:11, y:1}
    ,{x:11, y:9}

    ,{x:11, y:5}
    
    ,{x:12, y:4}
    ,{x:12, y:6}
  ]
  // 12
  ,[
    {x:10, y:4}
    ,{x:10, y:6}

    ,{x:10, y:8}
    ,{x:10, y:2}

    ,{x:11, y:7}
    ,{x:11, y:3}
    
    ,{x:11, y:1}
    ,{x:11, y:9}

    
    ,{x:12, y:4}
    ,{x:12, y:6}
    ,{x:12, y:8}
    ,{x:12, y:2}
  ]
  // 13
  ,[
    {x:10, y:4}
    ,{x:10, y:6}

    ,{x:10, y:8}
    ,{x:10, y:2}

    ,{x:11, y:7}
    ,{x:11, y:3}
    
    ,{x:11, y:1}
    ,{x:11, y:9}

    ,{x:11, y:5}
    
    ,{x:12, y:4}
    ,{x:12, y:6}
    ,{x:12, y:8}
    ,{x:12, y:2}
  ]
  // 14
  ,[
    {x:9, y:3}
    ,{x:9, y:7}
    ,{x:10, y:4}
    ,{x:10, y:6}

    ,{x:10, y:8}
    ,{x:10, y:2}

    ,{x:11, y:7}
    ,{x:11, y:3}
    
    ,{x:11, y:1}
    ,{x:11, y:9}

    
    ,{x:12, y:4}
    ,{x:12, y:6}
    ,{x:12, y:8}
    ,{x:12, y:2}
  ]
  // 15
  ,[
    {x:9, y:3}
    ,{x:9, y:7}
    ,{x:10, y:4}
    ,{x:10, y:6}

    ,{x:10, y:8}
    ,{x:10, y:2}

    ,{x:11, y:7}
    ,{x:11, y:3}
    
    ,{x:11, y:1}
    ,{x:11, y:9}
    ,{x:11, y:5}
    
    ,{x:12, y:4}
    ,{x:12, y:6}
    ,{x:12, y:8}
    ,{x:12, y:2}
  ]
  // 16
  ,[
    {x:9, y:3}
    ,{x:9, y:7}
    ,{x:9, y:9}
    ,{x:9, y:1}
    ,{x:10, y:4}
    ,{x:10, y:6}

    ,{x:10, y:8}
    ,{x:10, y:2}

    ,{x:11, y:7}
    ,{x:11, y:3}
    
    ,{x:11, y:1}
    ,{x:11, y:9}
    
    ,{x:12, y:4}
    ,{x:12, y:6}
    ,{x:12, y:8}
    ,{x:12, y:2}
  ]
  // 17
  ,[
    {x:9, y:3}
    ,{x:9, y:7}
    ,{x:9, y:9}
    ,{x:9, y:1}
    ,{x:10, y:4}
    ,{x:10, y:6}

    ,{x:10, y:8}
    ,{x:10, y:2}

    ,{x:11, y:7}
    ,{x:11, y:3}
    
    ,{x:11, y:1}
    ,{x:11, y:9}
    ,{x:11, y:5}
    
    ,{x:12, y:4}
    ,{x:12, y:6}
    ,{x:12, y:8}
    ,{x:12, y:2}
  ]
  // 18
  ,[
    {x:9, y:3}
    ,{x:9, y:7}
    ,{x:9, y:9}
    ,{x:9, y:1}
    ,{x:9, y:5}

    ,{x:10, y:4}
    ,{x:10, y:6}

    ,{x:10, y:8}
    ,{x:10, y:2}

    ,{x:11, y:7}
    ,{x:11, y:3}
    
    ,{x:11, y:1}
    ,{x:11, y:9}
    ,{x:11, y:5}
    
    ,{x:12, y:4}
    ,{x:12, y:6}
    ,{x:12, y:8}
    ,{x:12, y:2}
  ]
];

var GG_DATA_UNIT_POSITION_FRIEND = [
  //0
  []
  //1
  ,[
    {x:5,y:5}
  ]
  // 2
  ,[
    {x:4, y:4}
    ,{x:4, y:6}
  ]
  // 3
  ,[
    {x:4, y:4}
    ,{x:4, y:6}

    ,{x:5, y:5}
  ]
  // 4
  ,[
    {x:4, y:4}
    ,{x:4, y:6}

    ,{x:4, y:8}
    ,{x:4, y:2}
  ]
  // 5
  ,[
    {x:4, y:4}
    ,{x:4, y:6}

    ,{x:4, y:8}
    ,{x:4, y:2}

    ,{x:3, y:5}

  ]
  // 6
  ,[
    {x:4, y:4}
    ,{x:4, y:6}

    ,{x:4, y:8}
    ,{x:4, y:2}

    ,{x:3, y:7}
    ,{x:3, y:3}

  ]
  // 7
  ,[
    {x:4, y:4}
    ,{x:4, y:6}

    ,{x:4, y:8}
    ,{x:4, y:2}

    ,{x:3, y:7}
    ,{x:3, y:5}
    ,{x:3, y:3}
  ]
  // 8
  ,[
    {x:4, y:4}
    ,{x:4, y:6}

    ,{x:4, y:8}
    ,{x:4, y:2}

    ,{x:3, y:7}
    ,{x:3, y:3}
    
    ,{x:3, y:1}
    ,{x:3, y:9}
  ]
  // 9
  ,[
    {x:4, y:4}
    ,{x:4, y:6}

    ,{x:4, y:8}
    ,{x:4, y:2}

    ,{x:3, y:7}
    ,{x:3, y:3}
    
    ,{x:3, y:1}
    ,{x:3, y:9}

    ,{x:3, y:5}
  ]
  // 10
  ,[
    {x:4, y:4}
    ,{x:4, y:6}

    ,{x:4, y:8}
    ,{x:4, y:2}

    ,{x:3, y:7}
    ,{x:3, y:3}
    
    ,{x:3, y:1}
    ,{x:3, y:9}

    ,{x:2, y:4}
    ,{x:2, y:6}
  ]
  // 11
  ,[
    {x:4, y:4}
    ,{x:4, y:6}

    ,{x:4, y:8}
    ,{x:4, y:2}

    ,{x:3, y:7}
    ,{x:3, y:3}
    
    ,{x:3, y:1}
    ,{x:3, y:9}

    ,{x:3, y:5}
    
    ,{x:2, y:4}
    ,{x:2, y:6}
  ]
  // 12
  ,[
    {x:4, y:4}
    ,{x:4, y:6}

    ,{x:4, y:8}
    ,{x:4, y:2}

    ,{x:3, y:7}
    ,{x:3, y:3}
    
    ,{x:3, y:1}
    ,{x:3, y:9}

    
    ,{x:2, y:4}
    ,{x:2, y:6}
    ,{x:2, y:8}
    ,{x:2, y:2}
  ]
  // 13
  ,[
    {x:4, y:4}
    ,{x:4, y:6}

    ,{x:4, y:8}
    ,{x:4, y:2}

    ,{x:3, y:7}
    ,{x:3, y:3}
    
    ,{x:3, y:1}
    ,{x:3, y:9}

    ,{x:3, y:5}
    
    ,{x:2, y:4}
    ,{x:2, y:6}
    ,{x:2, y:8}
    ,{x:2, y:2}
  ]
  // 14
  ,[
    {x:5, y:3}
    ,{x:5, y:7}
    ,{x:4, y:4}
    ,{x:4, y:6}

    ,{x:4, y:8}
    ,{x:4, y:2}

    ,{x:3, y:7}
    ,{x:3, y:3}
    
    ,{x:3, y:1}
    ,{x:3, y:9}

    
    ,{x:2, y:4}
    ,{x:2, y:6}
    ,{x:2, y:8}
    ,{x:2, y:2}
  ]
  // 15
  ,[
    {x:5, y:3}
    ,{x:5, y:7}
    ,{x:4, y:4}
    ,{x:4, y:6}

    ,{x:4, y:8}
    ,{x:4, y:2}

    ,{x:3, y:7}
    ,{x:3, y:3}
    
    ,{x:3, y:1}
    ,{x:3, y:9}
    ,{x:3, y:5}
    
    ,{x:2, y:4}
    ,{x:2, y:6}
    ,{x:2, y:8}
    ,{x:2, y:2}
  ]
  // 16
  ,[
    {x:5, y:3}
    ,{x:5, y:7}
    ,{x:5, y:9}
    ,{x:5, y:1}
    ,{x:4, y:4}
    ,{x:4, y:6}

    ,{x:4, y:8}
    ,{x:4, y:2}

    ,{x:3, y:7}
    ,{x:3, y:3}
    
    ,{x:3, y:1}
    ,{x:3, y:9}
    
    ,{x:2, y:4}
    ,{x:2, y:6}
    ,{x:2, y:8}
    ,{x:2, y:2}
  ]
  // 17
  ,[
    {x:5, y:3}
    ,{x:5, y:7}
    ,{x:5, y:9}
    ,{x:5, y:1}
    ,{x:4, y:4}
    ,{x:4, y:6}

    ,{x:4, y:8}
    ,{x:4, y:2}

    ,{x:3, y:7}
    ,{x:3, y:3}
    
    ,{x:3, y:1}
    ,{x:3, y:9}
    ,{x:3, y:5}
    
    ,{x:2, y:4}
    ,{x:2, y:6}
    ,{x:2, y:8}
    ,{x:2, y:2}
  ]
  // 18
  ,[
    {x:5, y:3}
    ,{x:5, y:7}
    ,{x:5, y:9}
    ,{x:5, y:1}
    ,{x:5, y:5}

    ,{x:4, y:4}
    ,{x:4, y:6}

    ,{x:4, y:8}
    ,{x:4, y:2}

    ,{x:3, y:7}
    ,{x:3, y:3}
    
    ,{x:3, y:1}
    ,{x:3, y:9}
    ,{x:3, y:5}
    
    ,{x:2, y:4}
    ,{x:2, y:6}
    ,{x:2, y:8}
    ,{x:2, y:2}
  ]
];



var GG_DATA_HITPOINT_ARRAY = [
  20,
  40,
  60
];

var GG_DATA_HANDE_ARRAY = [
  -4,
  -3,
  -2,
  -1,
  0,
  1,
  2,
  3,
  4
];

var GG_DATA_LEVEL_UP_ARRAY = [
  'skill',
  'hitpoint'
];

var GG_DATA_MAP_ARRAY = [
  'balance',
  'river',
  'mountain',
  'plane',
  'random'
];

var GG_DATA_SPEED_ARRAY = [
  'vfast',
  'fast',
  'normal',
  'slow'
];

var GG_DATA_AUDIO_ARRAY = [
  'none',
  'yes'
];
var GG_DATA_VIEW_HITPOINT_ARRAY = [
  'on',
  'off'
];
var GG_DATA_VIEW_LEVEL_ARRAY = [
  'on',
  'off'
];
var GG_DATA_VIEW_CANCEL_PATTERN_ARRAY = [
  'button',
  '+area'
];

var GG_DATA_DIALOG_ARRAY = [
  'on',
  'off'
];
var GG_DATA_UNIT_NUMBER_ARRAY = [
  '6',
  '8',
  '10',
  '12'
];

var GG_DATA_UNIT_UNIQ_ARRAY = [
  'game',
  'team'
];

// TODO
var GG_DATA_LOST_ARRAY = [
  '1-3',
  '0'
];

// ?
var GG_DATA_UNIT_DIFF_ARRAY = [
  '6',
  '0'
];

var GG_DATA_GAME_MODE_ARRAY = [
  'oneonone'
  ,'campaign'
  ,'defence'
  ,'giant'
  ,'team'
//  ,'benchmark'
];

var GG_DATA_TEAM_ARRAY = [
  '0', '1', '2', '3', '4', '5', '6'  //,'7'
];

var GG_DATA_MENU_COLOR_2 = [
    'rgb(255, 255, 255)'
    ,'rgb(255, 136, 136)'
    ,'rgb(48, 255, 48)'
    ,'rgb(136, 136, 255)'
    ,'rgb(96, 239, 239)'
    
    ,'rgb(255, 144, 255)'
    ,'rgb(239, 239, 96)'
//    ,'rgb(255, 170, 62)'
    //,'rgb(223, 152, 173)'  // pink
    ,'rgb(0, 0, 0)' // random/black
];

var GG_DATA_MENU_COLOR = [
   '#DDD'
  ,'#F88'
  ,'#3F3'
  ,'#88F'
  ,'#6EE'
  ,'#F9F'
  ,'#EE6'
//  ,'#FA3'
//  ,'#D5C'
];

var GG_DATA_MAP_FATIGUE = [0, 0, GG_DATA_ACTION_FATIGUE * 2, GG_DATA_ACTION_FATIGUE * 3];

var GG_DATA_MIDDLE_CLASS_CHANGE_LEVEL = 1;
//var GG_DATA_UPPER_CLASS_CHANGE_LEVEL  = 2;
//var GG_DATA_UPPER_CLASS_CHANGE_LEVEL  = 3;

var GG_DATA_UPPER_CLASS_CHANGE_LEVEL_NORMAL   = 2;
var GG_DATA_UPPER_CLASS_CHANGE_LEVEL_CAMPAIGN = 3;
var GG_DATA_UPPER_CLASS_CHANGE_LEVEL_NONE     = 0;


var GG_DATA_UNIT_CREATE                         = 240;
var GG_DATA_UNIT_CLASS_CHANGE_AREA_POINT        = 40;
var GG_DATA_UNIT_MIDDLE_CLASS_CHANGE_AREA_POINT = 20;
var GG_DATA_UNIT_RECOVERY_AREA_POINT            = 4;
//var GG_DATA_UNIT_CREATE = 1000;

var GG_DATA_ANIMATION_UNIT        = 0;
var GG_DATA_ANIMATION_ARROW       = 1;
//var GG_DATA_ANIMATION_JAVELIN     = 2;
var GG_DATA_ANIMATION_TOMAHAWK    = 3;
//var GG_DATA_ANIMATION_FADE_UNIT   = 4;
var GG_DATA_ANIMATION_ATTACK_UNIT = 5;
var GG_DATA_ANIMATION_WITCH       = 6;
var GG_DATA_ANIMATION_WIND        = 7;
var GG_DATA_ANIMATION_THUNDER     = 8;
var GG_DATA_ANIMATION_DARTS       = 9;
var GG_DATA_ANIMATION_LASER       = 10;

var GG_DATA_ANIMATION_ETC_LEVEL_UP           = 0;
var GG_DATA_ANIMATION_ETC_LOST               = 1;
var GG_DATA_ANIMATION_ETC_RECOVER            = 2;
var GG_DATA_ANIMATION_ETC_DAMAGE             = 6;
var GG_DATA_ANIMATION_ETC_JOB_CHANGE         = 7;
var GG_DATA_ANIMATION_ETC_UNIT_RECOVER       = 8; 
var GG_DATA_ANIMATION_ETC_UNIT_STATUS_CHANGE = 9; 

var GG_DATA_ANIMATION_ETC_TEAM_CHANGE        = 14;
var GG_DATA_ANIMATION_ETC_TURN_END_RECOVER   = 15;
var GG_DATA_ANIMATION_ETC_MY_RECOVER         = 16;
var GG_DATA_ANIMATION_ETC_ADD_AREA_POINT     = 18;
var GG_DATA_ANIMATION_ETC_DELETE_AREA_POINT  = 19;
var GG_DATA_ANIMATION_ETC_FADE_UNIT          = 20;
var GG_DATA_ANIMATION_ETC_RESCUE             = 21;
var GG_DATA_ANIMATION_ETC_STATUS_CHANGE      = 22; 

var GG_DATA_ANIMATION_BIN              = 12;
var GG_DATA_ANIMATION_LONG_BIN         = 6;
var GG_DATA_ANIMATION_EFFECT_BIN       = 24;
//var GG_DATA_ANIMATION_EFFECT_BIN       = 12;
//var GG_DATA_ANIMATION_LOST_BIN         = 48;
var GG_DATA_ANIMATION_LOST_BIN         = 36;
//var GG_DATA_ANIMATION_LONG_EFFECT_BIN  = 48;
var GG_DATA_ANIMATION_LONG_EFFECT_BIN  = 36;
var GG_DATA_ANIMATION_SHOTY_EFFECT_BIN = 24;
//var GG_DATA_ANIMATION_SHOTY_EFFECT_BIN = 12;
//var GG_DATA_ANIMATION_RISE             = 4;
//var GG_DATA_ANIMATION_RISE             = 2;
var GG_DATA_ANIMATION_RISE             = 24;

// debug
//var GG_DATA_ANIMATION_BIN = 1;
//var GG_DATA_ANIMATION_EFFECT_BIN = 1;
//var GG_DATA_ANIMATION_LOST_BIN = 1;
//var GG_DATA_ANIMATION_LONG_EFFECT_BIN = 1;
//var GG_DATA_ANIMATION_RISE = 1;


//var GG_DATA_ARMY_COLOR_BULE = 0;
//var GG_DATA_ARMY_COLOR_RED = 1;
//var GG_DATA_ARMY_COLOR_GREEN = 2;
//var GG_DATA_ARMY_COLOR_CYAN = 3;
//var GG_DATA_ARMY_COLOR_MAGENTA = 4;
//var GG_DATA_ARMY_COLOR_YELLOW = 5;

var GG_DATA_LEVEL_UP_ADD_ATTACK_POINT         = 1;
var GG_DATA_LEVEL_UP_ADD_HITPOINT_POINT       = 2;
var GG_DATA_LEVEL_UP_ADD_RECOVERY             = 2;
var GG_DATA_LEVEL_UP_ADD_MY_RECOVERY          = 1;
var GG_DATA_LEVEL_UP_ADD_DEFENCE              = 1;
var GG_DATA_LEVEL_UP_ADD_MOVE_POINT           = 2;
var GG_DATA_LEVEL_UP_ADD_FATIGUE              = 1;
var GG_DATA_LEVEL_UP_ADD_AREA_POINT           = 1;
var GG_DATA_LEVEL_UP_ADD_STATUS_CHANGE_NUMBER = 1;

var GG_DATA_LEVEL_UP_NONE                 = 0;
var GG_DATA_LEVEL_UP_ATTACK               = 1;
var GG_DATA_LEVEL_UP_RECOVERY             = 2;
var GG_DATA_LEVEL_UP_DEFENCE              = 3;
var GG_DATA_LEVEL_UP_MOVE                 = 4;
var GG_DATA_LEVEL_UP_FATIGUE              = 5;
var GG_DATA_LEVEL_UP_AREA_POINT           = 6;
//var GG_DATA_LEVEL_UP_STATUS_CHANGE_NUMBER = 7;


var GG_DATA_LEVEL_UP_TEAM_ARRAY = [
  // normal　White
  [
     GG_DATA_LEVEL_UP_NONE       //1

    ,GG_DATA_LEVEL_UP_ATTACK               // 2
    ,GG_DATA_LEVEL_UP_RECOVERY             // 3
    ,GG_DATA_LEVEL_UP_DEFENCE              // 4
    ,GG_DATA_LEVEL_UP_FATIGUE              // 5
    ,GG_DATA_LEVEL_UP_AREA_POINT           // 6
    ,GG_DATA_LEVEL_UP_MOVE                 // 7
    ,GG_DATA_LEVEL_UP_NONE // 8
    
    ,GG_DATA_LEVEL_UP_ATTACK               // 9
    ,GG_DATA_LEVEL_UP_RECOVERY             //10
    ,GG_DATA_LEVEL_UP_DEFENCE              //11
    ,GG_DATA_LEVEL_UP_FATIGUE              //12
    ,GG_DATA_LEVEL_UP_AREA_POINT           //13
    ,GG_DATA_LEVEL_UP_MOVE                 //14
    ,GG_DATA_LEVEL_UP_NONE //15
  ]
  // a++ d-- Red
  ,[
     GG_DATA_LEVEL_UP_NONE       //1

    ,GG_DATA_LEVEL_UP_ATTACK               // 2
    ,GG_DATA_LEVEL_UP_RECOVERY             // 3
    ,GG_DATA_LEVEL_UP_FATIGUE              // 5
    ,GG_DATA_LEVEL_UP_AREA_POINT           // 6
    ,GG_DATA_LEVEL_UP_MOVE                 // 7
    ,GG_DATA_LEVEL_UP_ATTACK               // 9
    ,GG_DATA_LEVEL_UP_NONE // 8

    ,GG_DATA_LEVEL_UP_ATTACK               // 9
    ,GG_DATA_LEVEL_UP_RECOVERY             //10
    ,GG_DATA_LEVEL_UP_DEFENCE              //11
    ,GG_DATA_LEVEL_UP_FATIGUE              //12
    ,GG_DATA_LEVEL_UP_AREA_POINT           //13
    ,GG_DATA_LEVEL_UP_MOVE                 //14
    ,GG_DATA_LEVEL_UP_NONE //15
  ]
  // d++ m-- Green
  ,[
     GG_DATA_LEVEL_UP_NONE       //1

    ,GG_DATA_LEVEL_UP_DEFENCE              // 2
    ,GG_DATA_LEVEL_UP_ATTACK               // 3
    ,GG_DATA_LEVEL_UP_RECOVERY             // 4
    ,GG_DATA_LEVEL_UP_FATIGUE              // 5
    ,GG_DATA_LEVEL_UP_AREA_POINT           // 6
    ,GG_DATA_LEVEL_UP_DEFENCE              // 8
    ,GG_DATA_LEVEL_UP_NONE // 7
    
    ,GG_DATA_LEVEL_UP_ATTACK               // 9
    ,GG_DATA_LEVEL_UP_RECOVERY             //10
    ,GG_DATA_LEVEL_UP_DEFENCE              //11
    ,GG_DATA_LEVEL_UP_FATIGUE              //12
    ,GG_DATA_LEVEL_UP_AREA_POINT           //13
    ,GG_DATA_LEVEL_UP_MOVE                 //14
    ,GG_DATA_LEVEL_UP_NONE //15
  ]
  // m++ f-- Blue
  ,[
     GG_DATA_LEVEL_UP_NONE       //1

    ,GG_DATA_LEVEL_UP_MOVE                 // 2
    ,GG_DATA_LEVEL_UP_ATTACK               // 3
    ,GG_DATA_LEVEL_UP_RECOVERY             // 4
    ,GG_DATA_LEVEL_UP_DEFENCE              // 5
    ,GG_DATA_LEVEL_UP_AREA_POINT           // 6
    ,GG_DATA_LEVEL_UP_MOVE                 // 8
    ,GG_DATA_LEVEL_UP_NONE // 7
    
    ,GG_DATA_LEVEL_UP_ATTACK               // 9
    ,GG_DATA_LEVEL_UP_RECOVERY             //10
    ,GG_DATA_LEVEL_UP_DEFENCE              //11
    ,GG_DATA_LEVEL_UP_FATIGUE              //12
    ,GG_DATA_LEVEL_UP_AREA_POINT           //13
    ,GG_DATA_LEVEL_UP_MOVE                 //14
    ,GG_DATA_LEVEL_UP_NONE //15
  ]
  // f++ r-- Cyan
  ,[
     GG_DATA_LEVEL_UP_NONE       //1

    ,GG_DATA_LEVEL_UP_FATIGUE              // 2
    ,GG_DATA_LEVEL_UP_ATTACK               // 3
    ,GG_DATA_LEVEL_UP_DEFENCE              // 4
    ,GG_DATA_LEVEL_UP_AREA_POINT           // 5
    ,GG_DATA_LEVEL_UP_MOVE                 // 6
    ,GG_DATA_LEVEL_UP_FATIGUE              // 8
    ,GG_DATA_LEVEL_UP_NONE // 7
    
    ,GG_DATA_LEVEL_UP_ATTACK               // 9
    ,GG_DATA_LEVEL_UP_RECOVERY             //10
    ,GG_DATA_LEVEL_UP_DEFENCE              //11
    ,GG_DATA_LEVEL_UP_FATIGUE              //12
    ,GG_DATA_LEVEL_UP_AREA_POINT           //13
    ,GG_DATA_LEVEL_UP_MOVE                 //14
    ,GG_DATA_LEVEL_UP_NONE //15
  ]
  // r++ ar-- Magenda 
  ,[
     GG_DATA_LEVEL_UP_NONE       //1

    ,GG_DATA_LEVEL_UP_RECOVERY             // 2
    ,GG_DATA_LEVEL_UP_ATTACK               // 3
    ,GG_DATA_LEVEL_UP_DEFENCE              // 4
    ,GG_DATA_LEVEL_UP_FATIGUE              // 5
    ,GG_DATA_LEVEL_UP_MOVE                 // 5
    ,GG_DATA_LEVEL_UP_RECOVERY             // 8
    ,GG_DATA_LEVEL_UP_NONE // 6
    
    ,GG_DATA_LEVEL_UP_ATTACK               // 9
    ,GG_DATA_LEVEL_UP_RECOVERY             //10
    ,GG_DATA_LEVEL_UP_DEFENCE              //11
    ,GG_DATA_LEVEL_UP_FATIGUE              //12
    ,GG_DATA_LEVEL_UP_AREA_POINT           //13
    ,GG_DATA_LEVEL_UP_MOVE                 //14
    ,GG_DATA_LEVEL_UP_NONE //15
  ]
  // ar++ s-- Yellow
  ,[
     GG_DATA_LEVEL_UP_NONE       //1

    ,GG_DATA_LEVEL_UP_AREA_POINT           // 2
    ,GG_DATA_LEVEL_UP_RECOVERY             // 4
    ,GG_DATA_LEVEL_UP_DEFENCE              // 5
    ,GG_DATA_LEVEL_UP_FATIGUE              // 6
    ,GG_DATA_LEVEL_UP_MOVE                 // 7
    ,GG_DATA_LEVEL_UP_AREA_POINT           // 8
    ,GG_DATA_LEVEL_UP_NONE               // 3
    
    ,GG_DATA_LEVEL_UP_ATTACK               // 9
    ,GG_DATA_LEVEL_UP_RECOVERY             //10
    ,GG_DATA_LEVEL_UP_DEFENCE              //11
    ,GG_DATA_LEVEL_UP_FATIGUE              //12
    ,GG_DATA_LEVEL_UP_AREA_POINT           //13
    ,GG_DATA_LEVEL_UP_MOVE                 //14
    ,GG_DATA_LEVEL_UP_NONE //15
  ]


];

var GG_DATA_LEVEL_UP_DATA_ARRAY = [
0
,10
,30
,60
,100
,150
,210
,280
,360
,450
,550
,660
,780
,910
,1050
//,1200
];

//var GG_DATA_PASSIVE     = 'passive_icon';
//var GG_DATA_FATIGUE     = 'fatigue_icon';

var GG_DATA_LIFE_50 = 20;
var GG_DATA_LIFE_20 = 10;
var GG_DATA_LIFE_0  = 0;

var GG_DATA_SIZE = 48;

var GG_DATA_TIMEOUT_ANIMATION_1 = 100;
var GG_DATA_TIMEOUT_ANIMATION_4 = 200;
var GG_DATA_TIMEOUT_ANIMATION_5 = 100;

//var GG_DATA_ANIMATION_TIMEOUT_VERY_FAST = 15;
var GG_DATA_ANIMATION_TIMEOUT_BENCHMARK = 0.1;
var GG_DATA_ANIMATION_TIMEOUT_VERY_FAST = 10;
//var GG_DATA_ANIMATION_TIMEOUT_VERY_FAST = 1;
//var GG_DATA_ANIMATION_TIMEOUT_FAST      = 30;
var GG_DATA_ANIMATION_TIMEOUT_FAST      = 20;
//var GG_DATA_ANIMATION_TIMEOUT_NORMAL    = 50;
var GG_DATA_ANIMATION_TIMEOUT_NORMAL    = 30;
//var GG_DATA_ANIMATION_TIMEOUT_SLOW      = 75;
var GG_DATA_ANIMATION_TIMEOUT_SLOW      = 40;

var GG_DATA_DEFAULT_MAX_HITPOINT        = 40;
var GG_DATA_DEFAULT_RECOVERY            = 2;
var GG_DATA_DEFAULT_NO_ATTACKK_RECOVERY = 8;
var GG_DATA_DEFAULT_RECOVERY_FATIGUE    = GG_DATA_ACTION_FATIGUE;
var GG_DATA_DEFAULT_ATTACK_POINT        = 16;
var GG_DATA_DEFAULT_MOVE_FATIGUE        = GG_DATA_ACTION_FATIGUE;
var GG_DATA_DEFAULT_ADD_AREA_POINT      = 3;

var GG_DATA_SIZE_ARRAY = [
  {}
  ,{size:24, str_size: '0024'}
  ,{size:48, str_size: '0048'}
  ,{size:72, str_size: '0072'}
  ,{size:96, str_size: '0096'}
  ,{size:120, str_size: '0120'}
  ,{size:144, str_size: '0144'}
  ,{size:168, str_size: '0168'}
  ,{size:192, str_size: '0192'}
  ,{size:216, str_size: '0216'}
  ,{size:240, str_size: '0240'}
];

var GG_DATA_ARMY_COLOR_ALPHABET = [
  'w', 'r', 'g', 'b', 'c', 'm', 'y'//, 'o'
  //'b', 'r', 'g', 'c', 'm', 'y', 'o', 'p'
  //'b', 'r', 'g', 'c', 'm', 'y'
];

var GG_DATA_TEAM = [
    //white
    {attack_point:0, defence_point:0, move_point:0 
     ,small_recovery:0, big_recovery:0 , recover_fatigue:0
     ,add_area_point: 0
     ,attack_fatigue:0, defence_fatigue:0, move_fatigue:0
     ,status_change_number:0, color:'#CCC'}

    // red a++ d--
    ,{attack_point:1, defence_point:-1, move_point:0 
     ,small_recovery:0, big_recovery:0 , recover_fatigue:0
     ,add_area_point: 0
     ,attack_fatigue:0, defence_fatigue:0, move_fatigue:0 
     ,status_change_number:0, color:'#F88'}

    // green d++ m--
    ,{attack_point: 0, defence_point:1, move_point:-2 
     ,small_recovery:0, big_recovery:0 , recover_fatigue:0
     ,add_area_point: 0
     ,attack_fatigue:0, defence_fatigue:0, move_fatigue:0
     ,status_change_number:0,  color:'#3F3'}

    // blue m++ f-- 
    ,{attack_point:0, defence_point:0, move_point:2 
     ,small_recovery: 0, big_recovery: 0 , recover_fatigue: 0
     ,add_area_point: 0
     ,attack_fatigue: GG_DATA_ACTION_FATIGUE, defence_fatigue: GG_DATA_ACTION_FATIGUE, move_fatigue: GG_DATA_ACTION_FATIGUE
     ,status_change_number:0,  color:'#88F'}

    // cyan f++ r--
    ,{attack_point:0, defence_point:0, move_point:0 
     ,small_recovery: -1, big_recovery:-2 , recover_fatigue:1
     ,add_area_point: 0
     ,attack_fatigue:0, defence_fatigue:0, move_fatigue:0
     ,status_change_number:0,  color:'#3FF'}

    // magent r++ ar--
    ,{attack_point:0, defence_point:0, move_point:0 
     ,small_recovery:1, big_recovery:2 , recover_fatigue:0
     ,add_area_point: -1
     ,attack_fatigue:0, defence_fatigue:0, move_fatigue:0
     ,status_change_number:0,  color:'#F9F'}

    // yellow ar++ a--
    ,{attack_point:-1, defence_point:0, move_point:0 
     ,small_recovery: 0, big_recovery: 0, recover_fatigue:0
     ,add_area_point: 1
     ,attack_fatigue:0, defence_fatigue:0, move_fatigue:0
     ,status_change_number:0,  color:'#DD3'}

    // orenge s++ a--
    //,{attack_point: -1, defence_point:0, move_point:0 
    // ,small_recovery: 0, big_recovery: 0 , recover_fatigue:0
    // ,add_area_point: 0
    // ,attack_fatigue:0, defence_fatigue:0, move_fatigue:0
    // ,status_change_number:1,  color:'#F39800'}
];

var GG_DATA_STATUS_NOT_ACTION = 0;
var GG_DATA_STATUS_ACTION = 1;

var GG_DATA_IMAGE_PATH = 'img/';

var GG_DATA_OPERATION_CPU = 0;
var GG_DATA_OPERATION_USER = 1;

// CHARE DATA
var GG_DATA_UNIT_AX          = 0;
var GG_DATA_UNIT_SPEAR       = 1;
var GG_DATA_UNIT_SABER       = 2;

var GG_DATA_UNIT_SHILED      = 3;
var GG_DATA_UNIT_TRIDENT     = 4; 
var GG_DATA_UNIT_HAMMER      = 5;
//var GG_DATA_UNIT_FLAG        = 151; // delte

var GG_DATA_UNIT_RAPIER      = 6;
var GG_DATA_UNIT_KATANA      = 7;
var GG_DATA_UNIT_CROW        = 8;

var GG_DATA_UNIT_CHAIN       = 9;
var GG_DATA_UNIT_LONGBOW     = 10;
var GG_DATA_UNIT_HARP        = 11;
//var GG_DATA_UNIT_TOMAHAWK    = 11;

//var GG_DATA_UNIT_JAVELIN     = 150; // delete
//var GG_DATA_UNIT_CROSSBOW    = 152; // delete

var GG_DATA_UNIT_THUNDER     = 12;
var GG_DATA_UNIT_WIND        = 13;
var GG_DATA_UNIT_LASER       = 14; 

var GG_DATA_UNIT_MACE        = 15;
var GG_DATA_UNIT_TAKT        = 16;
var GG_DATA_UNIT_MORNINGSTAR = 17; 

//var GG_DATA_UNIT_HARP        = 18;
var GG_DATA_UNIT_BELL        = 300;
//var GG_DATA_UNIT_RUTE        = 20;

var GG_DATA_UNIT_SWORD       = 50;
var GG_DATA_UNIT_MIDDLE      = 51;
var GG_DATA_UNIT_FALCHION    = 52;
var GG_DATA_UNIT_SHORTBOW    = 53;
var GG_DATA_UNIT_WITCH       = 54;
var GG_DATA_UNIT_HOSPITAL    = 55;
var GG_DATA_UNIT_TRUMPET     = 3001;

var GG_DATA_UNIT_SHORTSWORD  = 100;

var GG_DATA_UNIT_EARTHQUAKE  = 150;
var GG_DATA_UNIT_SPIKESHILD  = 151;
var GG_DATA_UNIT_GLOBE       = 152;
var GG_DATA_UNIT_FAN         = 153;
var GG_DATA_UNIT_INFANO      = 154;
var GG_DATA_UNIT_MEDIC       = 155;
//var GG_DATA_UNIT_ENCHANT     = 156;

var GG_DATA_ATTACK_TYPE_NORMAL      = 0;
var GG_DATA_ATTACK_TYPE_AX          = 1;
var GG_DATA_ATTACK_TYPE_SPEAR       = 2;
var GG_DATA_ATTACK_TYPE_CHAINE      = 3;
var GG_DATA_ATTACK_TYPE_MACE        = 4;
var GG_DATA_ATTACK_TYPE_BOW         = 5;
var GG_DATA_ATTACK_TYPE_TOMAHAWK    = 6; // change
//var GG_DATA_ATTACK_TYPE_JAVELIN   = 7; // none

var GG_DATA_ATTACK_TYPE_WITCH       = 8;
var GG_DATA_ATTACK_TYPE_THUNDER     = 9;
var GG_DATA_ATTACK_TYPE_WIND        = 10;
var GG_DATA_ATTACK_TYPE_LASER       = 11;
//var GG_DATA_ATTACK_TYPE_TWOHANDE  = 12; // change
var GG_DATA_ATTACK_TYPE_LONGBOW     = 13; 
var GG_DATA_ATTACK_TYPE_TAKT        = 14;
var GG_DATA_ATTACK_TYPE_HOSPITAL    = 15;
var GG_DATA_ATTACK_TYPE_MORNINGSTAR = 16;

var GG_DATA_ATTACK_TYPE_HARP        = 17;
var GG_DATA_ATTACK_TYPE_SABER       = 18;
//var GG_DATA_ATTACK_TYPE_BELL      = 17;
//var GG_DATA_ATTACK_TYPE_RUTE      = 18; // change
//var GG_DATA_ATTACK_TYPE_TRUMPET   = 19;

var GG_DATA_MOVE_TYPE_NORMAL      = 0;
var GG_DATA_MOVE_TYPE_PUSH        = 1;
var GG_DATA_MOVE_TYPE_CHANGE      = 2;
var GG_DATA_MOVE_TYPE_THROUGH     = 3;
var GG_DATA_MOVE_TYPE_PULL        = 4;

var GG_DATA_CHAR_STR = [
     'ax', 'sp', 'sr', 'sh', 'tr', 'hm'
    ,'rp', 'kt', 'cr', 'ch', 'lb', 'hr'
    ,'th', 'wn', 'ls', 'mc', 'tk', 'ms', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '' , '', '', '', '', ''
    ,'sw', 'md', 'fl', 'sb', 'wt', 'hs', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''
    ,'ss', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''
    ,'er' ,'' ,'ns' ,'fn' ,'cc', ''
];
var GG_DATA_CHAR_BIG_STR = [
     'Ax', 'Sp', 'Sr', 'Sh', 'Tr', 'Hm'
    ,'Rp', 'Kt', 'Cr', 'Ch', 'Lb', 'Hr'
    ,'Th', 'Wn', 'Ls', 'Mc', 'Tk', 'Ms', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '' 
    ,'Sw', 'Md', 'Fl', 'Sb', 'Wt', 'Hs', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''
    ,'Ss', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''
    ,'Er', '', 'Ns', 'Fn', 'Cc', ''
];

// UNIT GROUP
var GG_DATA_UNIT_GROUP_ATTACK   = 0;
var GG_DATA_UNIT_GROUP_DEFENCE  = 1;
var GG_DATA_UNIT_GROUP_MOVE     = 2;
var GG_DATA_UNIT_GROUP_LONG     = 3;
var GG_DATA_UNIT_GROUP_MAGIC    = 4;
var GG_DATA_UNIT_GROUP_RECOVERY = 5;
//var GG_DATA_UNIT_GROUP_ENCHANT  = 6;

var GG_DATA_UNIT_GROUP_COMMON   = 99;

var GG_DATA_DEFENCE_TYPE_NORMAL      = 0;
var GG_DATA_DEFENCE_TYPE_COVER       = 1;
var GG_DATA_DEFENCE_TYPE_ENEMY_PUSH  = 2;
var GG_DATA_DEFENCE_TYPE_FRIEND_PULL = 3;
var GG_DATA_DEFENCE_TYPE_COUNTER     = 4;
var GG_DATA_DEFENCE_TYPE_AVOIDANCE   = 5;
//var GG_DATA_DEFENCE_TYPE_ESCAPE      = 6;
var GG_DATA_DEFENCE_TYPE_ATTACK_DOWN      = 7;

var GG_DATA_CHAR_HIGH_UNIT   = 49;
var GG_DATA_CHAR_MIDDLE_UNIT = 99;
var GG_DATA_CHAR_LOW_UNIT    = 149;

var GG_DATA_CHAR_SPEC = [
    // GG_DATA_UNIT_AX
     {defence_point: 10, move_point: 4, attack_type: GG_DATA_ATTACK_TYPE_AX
     ,attack_min_range: 1, attack_max_range: 1, attack_fatigue: GG_DATA_ACTION_FATIGUE * 3
     ,move_type: GG_DATA_MOVE_TYPE_CHANGE, zoc_cost: 6
     ,defence_fatigue: 0
     ,defence_type: GG_DATA_DEFENCE_TYPE_NORMAL
     ,char_alphabet: 'ax', group: GG_DATA_UNIT_GROUP_ATTACK}

    // GG_DATA_UNIT_SPEAR
    ,{defence_point: 10, move_point: 4, attack_type: GG_DATA_ATTACK_TYPE_SPEAR
     ,attack_min_range: 1, attack_max_range: 1, attack_fatigue: GG_DATA_ACTION_FATIGUE * 3
     ,move_type: GG_DATA_MOVE_TYPE_CHANGE, zoc_cost: 6
     ,defence_fatigue: 0
     ,defence_type: GG_DATA_DEFENCE_TYPE_NORMAL
     ,char_alphabet: 'sp', group: GG_DATA_UNIT_GROUP_ATTACK}

    // GG_DATA_UNIT_SABER
    ,{defence_point: 8, move_point: 4, attack_type: GG_DATA_ATTACK_TYPE_SABER
     ,attack_min_range: 1, attack_max_range: 1, attack_fatigue: GG_DATA_ACTION_FATIGUE * 4
     ,move_type: GG_DATA_MOVE_TYPE_CHANGE, zoc_cost: 6
     ,defence_fatigue: 0
     ,defence_type: GG_DATA_DEFENCE_TYPE_NORMAL
     ,char_alphabet: 'sr', group: GG_DATA_UNIT_GROUP_ATTACK}
     
    // GG_DATA_UNIT_SHILED
    ,{defence_point: 12, move_point: 4, attack_type: GG_DATA_ATTACK_TYPE_NORMAL
     ,attack_min_range: 1, attack_max_range: 1, attack_fatigue: GG_DATA_ACTION_FATIGUE * 1
     ,move_type: GG_DATA_MOVE_TYPE_CHANGE, zoc_cost: 8
     ,defence_fatigue: GG_DATA_ACTION_FATIGUE * 5
     ,defence_type: GG_DATA_DEFENCE_TYPE_COVER
     ,char_alphabet: 'sh', group: GG_DATA_UNIT_GROUP_DEFENCE}

    // GG_DATA_UNIT_TRIDENT
    ,{defence_point: 10, move_point: 6, attack_type: GG_DATA_ATTACK_TYPE_NORMAL
     ,attack_min_range: 1, attack_max_range: 1, attack_fatigue: GG_DATA_ACTION_FATIGUE * 1
     ,move_type: GG_DATA_MOVE_TYPE_CHANGE, zoc_cost: 8
     ,defence_fatigue: GG_DATA_ACTION_FATIGUE * 5
     ,defence_type: GG_DATA_DEFENCE_TYPE_FRIEND_PULL
     ,char_alphabet: 'tr', group: GG_DATA_UNIT_GROUP_DEFENCE}

    // GG_DATA_UNIT_HAMMER
    ,{defence_point: 10, move_point: 6, attack_type: GG_DATA_ATTACK_TYPE_NORMAL
     ,attack_min_range: 1, attack_max_range: 1, attack_fatigue: GG_DATA_ACTION_FATIGUE * 1
     ,move_type: GG_DATA_MOVE_TYPE_CHANGE, zoc_cost: 8
     ,defence_fatigue: GG_DATA_ACTION_FATIGUE * 3
     ,defence_type: GG_DATA_DEFENCE_TYPE_ENEMY_PUSH
     ,char_alphabet: 'hm', group: GG_DATA_UNIT_GROUP_DEFENCE}

    // GG_DATA_UNIT_RAPIER
    ,{defence_point: 8, move_point: 8, attack_type: GG_DATA_ATTACK_TYPE_NORMAL
     ,attack_min_range: 1, attack_max_range: 1, attack_fatigue: GG_DATA_ACTION_FATIGUE * 1
     ,move_type: GG_DATA_MOVE_TYPE_THROUGH, zoc_cost: 6
     ,defence_fatigue: GG_DATA_ACTION_FATIGUE * 4
     ,defence_type: GG_DATA_DEFENCE_TYPE_COUNTER
     ,char_alphabet: 'rp', group: GG_DATA_UNIT_GROUP_MOVE}
     
    // GG_DATA_UNIT_KATANA
    ,{defence_point: 8, move_point: 8, attack_type: GG_DATA_ATTACK_TYPE_NORMAL
     ,attack_min_range: 1, attack_max_range: 1, attack_fatigue: GG_DATA_ACTION_FATIGUE * 1
     ,move_type: GG_DATA_MOVE_TYPE_THROUGH, zoc_cost: 6
     ,defence_fatigue: GG_DATA_ACTION_FATIGUE * 5
     ,defence_type: GG_DATA_DEFENCE_TYPE_AVOIDANCE
     ,char_alphabet: 'kt', group: GG_DATA_UNIT_GROUP_MOVE}

    // GG_DATA_UNIT_CROW
    ,{defence_point: 8, move_point: 8, attack_type: GG_DATA_ATTACK_TYPE_NORMAL
     ,attack_min_range: 1, attack_max_range: 1, attack_fatigue: GG_DATA_ACTION_FATIGUE * 1
     ,move_type: GG_DATA_MOVE_TYPE_THROUGH, zoc_cost: 6
     ,defence_fatigue: GG_DATA_ACTION_FATIGUE * 2
     ,defence_type: GG_DATA_DEFENCE_TYPE_ATTACK_DOWN
     ,char_alphabet: 'cr', group: GG_DATA_UNIT_GROUP_MOVE}
     
    // GG_DATA_UNIT_CHAIN
    ,{defence_point: 10, move_point: 4, attack_type: GG_DATA_ATTACK_TYPE_CHAINE
     ,attack_min_range: 2, attack_max_range: 2, attack_fatigue: GG_DATA_ACTION_FATIGUE * 1
     ,move_type: GG_DATA_MOVE_TYPE_CHANGE, zoc_cost: 4
     ,defence_fatigue: 0
     ,defence_type: GG_DATA_DEFENCE_TYPE_NORMAL
     ,char_alphabet: 'ch', group: GG_DATA_UNIT_GROUP_LONG}

    // GG_DATA_UNIT_LONGBOW
    ,{defence_point: 6, move_point: 4, attack_type: GG_DATA_ATTACK_TYPE_LONGBOW
     ,attack_min_range: 3, attack_max_range: 3, attack_fatigue: GG_DATA_ACTION_FATIGUE * 1
     ,move_type: GG_DATA_MOVE_TYPE_PUSH, zoc_cost: 4
     ,defence_fatigue: 0
     ,defence_type: GG_DATA_DEFENCE_TYPE_NORMAL
     ,char_alphabet: 'lb', group: GG_DATA_UNIT_GROUP_LONG}
     
    // GG_DATA_UNIT_HARP
    ,{defence_point: 6, move_point: 6, attack_type: GG_DATA_ATTACK_TYPE_HARP
     ,attack_min_range: 2, attack_max_range: 2, attack_fatigue: GG_DATA_ACTION_FATIGUE * 2
     ,move_type: GG_DATA_MOVE_TYPE_PUSH, zoc_cost: 4
     ,defence_fatigue: 0
     ,defence_type: GG_DATA_DEFENCE_TYPE_NORMAL
     ,char_alphabet: 'hr', group: GG_DATA_UNIT_GROUP_LONG}
     
    // GG_DATA_UNIT_THUNDER
    ,{defence_point: 6, move_point: 4, attack_type: GG_DATA_ATTACK_TYPE_THUNDER
     ,attack_min_range: 2, attack_max_range: 2, attack_fatigue: GG_DATA_ACTION_FATIGUE * 4
     ,move_type: GG_DATA_MOVE_TYPE_PUSH, zoc_cost: 4
     ,defence_fatigue: 0
     ,defence_type: GG_DATA_DEFENCE_TYPE_NORMAL
     ,char_alphabet: 'th', group: GG_DATA_UNIT_GROUP_MAGIC}
     
    // GG_DATA_UNIT_WIND
    ,{defence_point: 6, move_point: 4, attack_type: GG_DATA_ATTACK_TYPE_WIND
     ,attack_min_range: 2, attack_max_range: 2, attack_fatigue: GG_DATA_ACTION_FATIGUE * 3
     ,move_type: GG_DATA_MOVE_TYPE_PUSH, zoc_cost: 4
     ,defence_fatigue: 0
     ,defence_type: GG_DATA_DEFENCE_TYPE_NORMAL
     ,char_alphabet: 'wn', group: GG_DATA_UNIT_GROUP_MAGIC}
     
    // GG_DATA_UNIT_LASER
    ,{defence_point: 6, move_point: 4, attack_type: GG_DATA_ATTACK_TYPE_LASER
     ,attack_min_range: 1, attack_max_range: 1, attack_fatigue: GG_DATA_ACTION_FATIGUE * 4
     ,move_type: GG_DATA_MOVE_TYPE_CHANGE, zoc_cost: 6
     ,defence_fatigue: 0
     ,defence_type: GG_DATA_DEFENCE_TYPE_NORMAL
     ,char_alphabet: 'ls', group: GG_DATA_UNIT_GROUP_MAGIC}
     
    // GG_DATA_UNIT_MACE
    ,{defence_point: 8, move_point: 6, attack_type: GG_DATA_ATTACK_TYPE_MACE
     ,attack_min_range: 1, attack_max_range: 1, attack_fatigue: GG_DATA_ACTION_FATIGUE * 3
     ,move_type: GG_DATA_MOVE_TYPE_PULL, zoc_cost: 6
     ,defence_fatigue: 0
     ,defence_type: GG_DATA_DEFENCE_TYPE_NORMAL
     ,char_alphabet: 'mc', group: GG_DATA_UNIT_GROUP_RECOVERY}
     
    // GG_DATA_UNIT_TAKT
    ,{defence_point: 6, move_point: 6, attack_type: GG_DATA_ATTACK_TYPE_TAKT
     ,attack_min_range: 2, attack_max_range: 2, attack_fatigue: GG_DATA_ACTION_FATIGUE * 3
     ,move_type: GG_DATA_MOVE_TYPE_PUSH, zoc_cost: 4
     ,defence_fatigue: 0
     ,defence_type: GG_DATA_DEFENCE_TYPE_NORMAL
     ,char_alphabet: 'tk', group: GG_DATA_UNIT_GROUP_RECOVERY}
     
    // GG_DATA_UNIT_MORNINGSTAR
    ,{defence_point: 8, move_point: 6, attack_type: GG_DATA_ATTACK_TYPE_MORNINGSTAR
     ,attack_min_range: 1, attack_max_range: 1, attack_fatigue: GG_DATA_ACTION_FATIGUE * 1
     ,move_type: GG_DATA_MOVE_TYPE_PULL, zoc_cost: 6
     ,defence_fatigue: 0
     ,defence_type: GG_DATA_DEFENCE_TYPE_NORMAL
     ,char_alphabet: 'ms', group: GG_DATA_UNIT_GROUP_RECOVERY}
     //////////////////////////////////////////////////////////////////
     
    // GG_DATA_UNIT_HARP
    //,{defence_point: 4, move_point: 2, attack_type: GG_DATA_ATTACK_TYPE_HARP
     //,attack_min_range: 2, attack_max_range: 2, attack_fatigue: GG_DATA_ACTION_FATIGUE * 3
    // ,attack_min_range: 2, attack_max_range: 2, attack_fatigue: GG_DATA_ACTION_FATIGUE * 1
    // ,move_type: GG_DATA_MOVE_TYPE_PUSH, zoc_cost: 2
    // ,defence_fatigue: 0
    // ,defence_type: GG_DATA_DEFENCE_TYPE_NORMAL
    // ,char_alphabet: 'hr', group: GG_DATA_UNIT_GROUP_ENCHANT}
     
    // GG_DATA_UNIT_BELL
    //,{defence_point: 4, move_point: 4, attack_type: GG_DATA_ATTACK_TYPE_BELL
    // ,attack_min_range: 1, attack_max_range: 1, attack_fatigue: GG_DATA_ACTION_FATIGUE * 1
    // ,move_type: GG_DATA_MOVE_TYPE_PULL, zoc_cost: 4
    // ,defence_fatigue: 0
    // ,defence_type: GG_DATA_DEFENCE_TYPE_NORMAL
    // ,char_alphabet: 'bl', group: GG_DATA_UNIT_GROUP_ENCHANT}
     
    // GG_DATA_UNIT_LUTE
    //,{defence_point: 4, move_point: 4, attack_type: GG_DATA_ATTACK_TYPE_RUTE
    // ,attack_min_range: 1, attack_max_range: 1, attack_fatigue: GG_DATA_ACTION_FATIGUE * 1
    // ,move_type: GG_DATA_MOVE_TYPE_PULL, zoc_cost: 4
    // ,defence_fatigue: 0
    // ,defence_type: GG_DATA_DEFENCE_TYPE_NORMAL
    // ,char_alphabet: 'lt', group: GG_DATA_UNIT_GROUP_ENCHANT}
    ,{}
    ,{}
    ,{}
     
    ,{} // 21
    ,{}
    ,{}
    ,{}
    ,{}
    ,{}
    ,{}
    ,{}
    ,{}
    ,{} // 30
    ,{}
    ,{}
    ,{}
    ,{}
    ,{}
    ,{}
    ,{}
    ,{}
    ,{}
    ,{} // 40
    ,{}
    ,{}
    ,{}
    ,{}
    ,{}
    ,{}
    ,{}
    ,{}
    ,{}
    //////
    // GG_DATA_UNIT_SWORD
    ,{defence_point: 8, move_point: 6, attack_type: GG_DATA_ATTACK_TYPE_NORMAL
     ,attack_min_range: 1, attack_max_range: 1, attack_fatigue: GG_DATA_ACTION_FATIGUE * 1
     ,move_type: GG_DATA_MOVE_TYPE_NORMAL, zoc_cost: 6
     ,defence_fatigue: 0
     ,defence_type: GG_DATA_DEFENCE_TYPE_NORMAL
     ,char_alphabet: 'sw', group: GG_DATA_UNIT_GROUP_ATTACK}
     
    // GG_DATA_UNIT_MIDDLE
    ,{defence_point: 10, move_point: 4, attack_type: GG_DATA_ATTACK_TYPE_NORMAL
     ,attack_min_range: 1, attack_max_range: 1, attack_fatigue: GG_DATA_ACTION_FATIGUE * 1
     ,move_type: GG_DATA_MOVE_TYPE_NORMAL, zoc_cost: 6
     ,defence_fatigue: 0
     ,defence_type: GG_DATA_DEFENCE_TYPE_NORMAL
     ,char_alphabet: 'md', group: GG_DATA_UNIT_GROUP_DEFENCE}
     
    // GG_DATA_UNIT_FALCHION
    ,{defence_point: 6, move_point: 8, attack_type: GG_DATA_ATTACK_TYPE_NORMAL
     ,attack_min_range: 1, attack_max_range: 1, attack_fatigue: GG_DATA_ACTION_FATIGUE * 1
     ,move_type: GG_DATA_MOVE_TYPE_NORMAL, zoc_cost: 6
     ,defence_fatigue: 0
     ,defence_type: GG_DATA_DEFENCE_TYPE_NORMAL
     ,char_alphabet: 'fl', group: GG_DATA_UNIT_GROUP_MOVE}
     
    // GG_DATA_UNIT_SHORTBOW
    ,{defence_point: 8, move_point: 4, attack_type: GG_DATA_ATTACK_TYPE_BOW
     ,attack_min_range: 2, attack_max_range: 2, attack_fatigue: GG_DATA_ACTION_FATIGUE * 1
     ,move_type: GG_DATA_MOVE_TYPE_NORMAL, zoc_cost: 4
     ,defence_fatigue: 0
     ,defence_type: GG_DATA_DEFENCE_TYPE_NORMAL
     ,char_alphabet: 'sb', group: GG_DATA_UNIT_GROUP_LONG}

    // GG_DATA_UNIT_WITCH
    ,{defence_point: 6, move_point: 6, attack_type: GG_DATA_ATTACK_TYPE_WITCH
     ,attack_min_range: 2, attack_max_range: 2, attack_fatigue: GG_DATA_ACTION_FATIGUE * 1
     ,move_type: GG_DATA_MOVE_TYPE_NORMAL, zoc_cost: 4
     ,defence_fatigue: 0
     ,defence_type: GG_DATA_DEFENCE_TYPE_NORMAL
     ,char_alphabet: 'wt', group: GG_DATA_UNIT_GROUP_MAGIC}
     
    // GG_DATA_UNIT_HOSPITAL
    ,{defence_point: 8, move_point: 4, attack_type: GG_DATA_ATTACK_TYPE_HOSPITAL
     ,attack_min_range: 1, attack_max_range: 1, attack_fatigue: GG_DATA_ACTION_FATIGUE * 1
     ,move_type: GG_DATA_MOVE_TYPE_NORMAL, zoc_cost: 6
     ,defence_fatigue: 0
     ,defence_type: GG_DATA_DEFENCE_TYPE_NORMAL
     ,char_alphabet: 'hs', group: GG_DATA_UNIT_GROUP_RECOVERY}
     
    // GG_DATA_UNIT_TRUMPET
    //,{defence_point: 2, move_point: 4, attack_type: GG_DATA_ATTACK_TYPE_TRUMPET
    // ,attack_min_range: 1, attack_max_range: 1, attack_fatigue: GG_DATA_ACTION_FATIGUE * 1
    // ,move_type: GG_DATA_MOVE_TYPE_NORMAL, zoc_cost: 4
    // ,defence_fatigue: 0
    // ,defence_type: GG_DATA_DEFENCE_TYPE_NORMAL
    // ,char_alphabet: 'tp', group: GG_DATA_UNIT_GROUP_ENCHANT}
    ,{}
    ,{}
    ,{}
    ,{}
    ,{} // 60
    ,{}
    ,{}
    ,{}
    ,{}
    ,{}
    ,{}
    ,{}
    ,{}
    ,{}
    ,{} // 70
    ,{}
    ,{}
    ,{}
    ,{}
    ,{}
    ,{}
    ,{}
    ,{}
    ,{}
    ,{} // 80
    ,{}
    ,{}
    ,{}
    ,{}
    ,{}
    ,{}
    ,{}
    ,{}
    ,{}
    ,{} // 90
    ,{}
    ,{}
    ,{}
    ,{}
    ,{}
    ,{}
    ,{}
    ,{}
    ,{}
    // GG_DATA_UNIT_SHORTSWORD 100
    ,{defence_point: 6, move_point: 6, attack_type: GG_DATA_ATTACK_TYPE_NORMAL
     ,attack_min_range: 1, attack_max_range: 1, attack_fatigue: GG_DATA_ACTION_FATIGUE * 1
     ,move_type: GG_DATA_MOVE_TYPE_NORMAL, zoc_cost: 4
     ,defence_fatigue: 0
     ,defence_type: GG_DATA_DEFENCE_TYPE_NORMAL
     ,char_alphabet: 'ss', group: GG_DATA_UNIT_GROUP_COMMON}
    ,{}
    ,{}
    ,{}
    ,{}
    ,{}
    ,{}
    ,{}
    ,{}
    ,{}
    ,{} // 110
    ,{}
    ,{}
    ,{}
    ,{}
    ,{}
    ,{}
    ,{}
    ,{}
    ,{}
    ,{} //120
    ,{}
    ,{}
    ,{}
    ,{}
    ,{}
    ,{}
    ,{}
    ,{}
    ,{}
    ,{} //130
    ,{}
    ,{}
    ,{}
    ,{}
    ,{}
    ,{}
    ,{}
    ,{}
    ,{}
    ,{} //140
    ,{}
    ,{}
    ,{}
    ,{}
    ,{}
    ,{}
    ,{}
    ,{}
    ,{}
    ,{} //150
    ,{}
    ,{}
    ,{}
    ,{}
    ,{}
];

var GG_DATA_POSTION_FRIEND = [
   GG_DATA_UNIT_SHORTSWORD

  ,GG_DATA_UNIT_SWORD
  ,GG_DATA_UNIT_AX        
  ,GG_DATA_UNIT_SPEAR
  ,GG_DATA_UNIT_SABER

  ,GG_DATA_UNIT_MIDDLE
  ,GG_DATA_UNIT_SHILED    
  ,GG_DATA_UNIT_TRIDENT
  ,GG_DATA_UNIT_HAMMER

  ,GG_DATA_UNIT_FALCHION
  ,GG_DATA_UNIT_RAPIER    
  ,GG_DATA_UNIT_KATANA
  ,GG_DATA_UNIT_CROW

  //,GG_DATA_UNIT_TRUMPET    
  //,GG_DATA_UNIT_BELL
  //,GG_DATA_UNIT_RUTE
  //,GG_DATA_UNIT_HARP

  ,GG_DATA_UNIT_HOSPITAL    
  ,GG_DATA_UNIT_MACE
  ,GG_DATA_UNIT_MORNINGSTAR
  ,GG_DATA_UNIT_TAKT
  
  ,GG_DATA_UNIT_SHORTBOW
  ,GG_DATA_UNIT_CHAIN      
  ,GG_DATA_UNIT_HARP
  ,GG_DATA_UNIT_LONGBOW    
  
  ,GG_DATA_UNIT_WITCH  
  ,GG_DATA_UNIT_LASER  
  ,GG_DATA_UNIT_THUNDER   
  ,GG_DATA_UNIT_WIND   
];

var GG_DATA_CAMPAIGN_ADD_ENEMY_UNITS = [
  // R1
  [
    {type:GG_DATA_UNIT_SWORD}
  ]
  // R2
  ,[
    {type:GG_DATA_UNIT_MIDDLE}
    ,{type:GG_DATA_UNIT_SWORD}
    
  ]
  // R3
  ,[
    {type:GG_DATA_UNIT_FALCHION}
   ,{type:GG_DATA_UNIT_MIDDLE}
   ,{type:GG_DATA_UNIT_SWORD}
  ]
  // R4
  ,[
    {type:GG_DATA_UNIT_SHORTBOW}
   ,{type:GG_DATA_UNIT_FALCHION}
   ,{type:GG_DATA_UNIT_MIDDLE}
   ,{type:GG_DATA_UNIT_SWORD}
  ]
  // R5
  ,[
    {type:GG_DATA_UNIT_WITCH}
   ,{type:GG_DATA_UNIT_SHORTBOW}
   ,{type:GG_DATA_UNIT_FALCHION}
   ,{type:GG_DATA_UNIT_MIDDLE}
   ,{type:GG_DATA_UNIT_SWORD}
  ]
  // R6
  ,[
    {type:GG_DATA_UNIT_HOSPITAL}
   ,{type:GG_DATA_UNIT_WITCH}
   ,{type:GG_DATA_UNIT_SHORTBOW}
   ,{type:GG_DATA_UNIT_FALCHION}
   ,{type:GG_DATA_UNIT_MIDDLE}
   ,{type:GG_DATA_UNIT_SWORD}
  ]
  // R7
  ,[
//    {type:[GG_DATA_UNIT_TRUMPET]}
    {type:GG_DATA_UNIT_SWORD}
   ,{type:GG_DATA_UNIT_HOSPITAL}
   ,{type:GG_DATA_UNIT_WITCH}
   ,{type:GG_DATA_UNIT_SHORTBOW}
   ,{type:GG_DATA_UNIT_FALCHION}
   ,{type:GG_DATA_UNIT_MIDDLE}
   ,{type:GG_DATA_UNIT_SWORD}
  ]
  // R8
  ,[
    {type:GG_DATA_UNIT_MIDDLE}
  ,{type:GG_DATA_UNIT_SWORD}
//   ,{type:[GG_DATA_UNIT_TRUMPET]}
   ,{type:GG_DATA_UNIT_HOSPITAL}
   ,{type:GG_DATA_UNIT_WITCH}
   ,{type:GG_DATA_UNIT_SHORTBOW}
   ,{type:GG_DATA_UNIT_FALCHION}
   ,{type:GG_DATA_UNIT_MIDDLE}
   ,{type:GG_DATA_UNIT_SWORD}
  ]
  // R9
  ,[
    {type:GG_DATA_UNIT_FALCHION}
  ,{type:GG_DATA_UNIT_MIDDLE}
   ,{type:GG_DATA_UNIT_SWORD}
//   ,{type:[GG_DATA_UNIT_TRUMPET]}
   ,{type:GG_DATA_UNIT_HOSPITAL}
   ,{type:GG_DATA_UNIT_WITCH}
   ,{type:GG_DATA_UNIT_SHORTBOW}
   ,{type:GG_DATA_UNIT_FALCHION}
   ,{type:GG_DATA_UNIT_MIDDLE}
   ,{type:GG_DATA_UNIT_SWORD}
  ]
  // R10
  ,[
    {type:GG_DATA_UNIT_SHORTBOW}
  ,{type:GG_DATA_UNIT_FALCHION}
   ,{type:GG_DATA_UNIT_MIDDLE}
   ,{type:GG_DATA_UNIT_SWORD}
//   ,{type:[GG_DATA_UNIT_TRUMPET]}
   ,{type:GG_DATA_UNIT_HOSPITAL}
   ,{type:GG_DATA_UNIT_WITCH}
   ,{type:GG_DATA_UNIT_SHORTBOW}
   ,{type:GG_DATA_UNIT_FALCHION}
   ,{type:GG_DATA_UNIT_MIDDLE}
   ,{type:GG_DATA_UNIT_SWORD}
  ]
  // R11
  ,[
    {type:GG_DATA_UNIT_WITCH}
  ,{type:GG_DATA_UNIT_SHORTBOW}
   ,{type:GG_DATA_UNIT_FALCHION}
   ,{type:GG_DATA_UNIT_MIDDLE}
   ,{type:GG_DATA_UNIT_SWORD}
//   ,{type:[GG_DATA_UNIT_TRUMPET]}
   ,{type:GG_DATA_UNIT_HOSPITAL}
   ,{type:GG_DATA_UNIT_WITCH}
   ,{type:GG_DATA_UNIT_SHORTBOW}
   ,{type:GG_DATA_UNIT_FALCHION}
   ,{type:GG_DATA_UNIT_MIDDLE}
   ,{type:GG_DATA_UNIT_SWORD}
  ]
  // R12
  ,[
    {type:GG_DATA_UNIT_HOSPITAL}
  ,{type:GG_DATA_UNIT_WITCH}
   ,{type:GG_DATA_UNIT_SHORTBOW}
   ,{type:GG_DATA_UNIT_FALCHION}
   ,{type:GG_DATA_UNIT_MIDDLE}
   ,{type:GG_DATA_UNIT_SWORD}
//   ,{type:[GG_DATA_UNIT_TRUMPET]}
   ,{type:GG_DATA_UNIT_HOSPITAL}
   ,{type:GG_DATA_UNIT_WITCH}
   ,{type:GG_DATA_UNIT_SHORTBOW}
   ,{type:GG_DATA_UNIT_FALCHION}
   ,{type:GG_DATA_UNIT_MIDDLE}
   ,{type:GG_DATA_UNIT_SWORD}
  ]
];

var GG_DATA_CAMPAIGN_ENEMY = [
  // 1
  [
    {type:[GG_DATA_UNIT_SWORD]}
  ]
  // 2
  ,[
    {type:[GG_DATA_UNIT_SWORD]}
   ,{type:[GG_DATA_UNIT_MIDDLE]}
  ]
  // 3
  ,[
    {type:[GG_DATA_UNIT_SWORD]}
   ,{type:[GG_DATA_UNIT_MIDDLE]}
   ,{type:[GG_DATA_UNIT_FALCHION]}
  ]
  // 4
  ,[
    {type:[GG_DATA_UNIT_SWORD]}
   ,{type:[GG_DATA_UNIT_MIDDLE]}
   ,{type:[GG_DATA_UNIT_FALCHION]}
   ,{type:[GG_DATA_UNIT_SHORTBOW]}
  ]
  // 5
  ,[
    {type:[GG_DATA_UNIT_SWORD]}
   ,{type:[GG_DATA_UNIT_MIDDLE]}
   ,{type:[GG_DATA_UNIT_FALCHION]}
   ,{type:[GG_DATA_UNIT_SHORTBOW]}
   ,{type:[GG_DATA_UNIT_WITCH]}
  ]
  // 6
  ,[
    {type:[GG_DATA_UNIT_SWORD]}
   ,{type:[GG_DATA_UNIT_MIDDLE]}
   ,{type:[GG_DATA_UNIT_FALCHION]}
   ,{type:[GG_DATA_UNIT_SHORTBOW]}
   ,{type:[GG_DATA_UNIT_WITCH]}
   ,{type:[GG_DATA_UNIT_HOSPITAL]}
  ]
  // 7
  ,[
    {type:[GG_DATA_UNIT_SWORD]}
   ,{type:[GG_DATA_UNIT_MIDDLE]}
   ,{type:[GG_DATA_UNIT_FALCHION]}
   ,{type:[GG_DATA_UNIT_SHORTBOW]}
   ,{type:[GG_DATA_UNIT_WITCH]}
   ,{type:[GG_DATA_UNIT_HOSPITAL]}
//   ,{type:[GG_DATA_UNIT_TRUMPET]}
   ]
  // 8
  ,[
    {type:[GG_DATA_UNIT_SWORD]}
   ,{type:[GG_DATA_UNIT_MIDDLE]}
   ,{type:[GG_DATA_UNIT_FALCHION]}
   ,{type:[GG_DATA_UNIT_SHORTBOW]}
   ,{type:[GG_DATA_UNIT_WITCH]}
   ,{type:[GG_DATA_UNIT_HOSPITAL]}
//   ,{type:[GG_DATA_UNIT_TRUMPET]}
   ,{type:[GG_DATA_UNIT_AX, GG_DATA_UNIT_SPEAR]}
   ]
  // 9
  ,[
    {type:[GG_DATA_UNIT_SWORD]}
   ,{type:[GG_DATA_UNIT_MIDDLE]}
   ,{type:[GG_DATA_UNIT_FALCHION]}
   ,{type:[GG_DATA_UNIT_SHORTBOW]}
   ,{type:[GG_DATA_UNIT_WITCH]}
   ,{type:[GG_DATA_UNIT_HOSPITAL]}
  // ,{type:[GG_DATA_UNIT_TRUMPET]}
   ,{type:[GG_DATA_UNIT_AX, GG_DATA_UNIT_SPEAR]}
   ,{type:[GG_DATA_UNIT_SHILED, GG_DATA_UNIT_TRIDENT]}
  ]
  // 10
  ,[
    {type:[GG_DATA_UNIT_SWORD]}
   ,{type:[GG_DATA_UNIT_MIDDLE]}
   ,{type:[GG_DATA_UNIT_FALCHION]}
   ,{type:[GG_DATA_UNIT_SHORTBOW]}
   ,{type:[GG_DATA_UNIT_WITCH]}
   ,{type:[GG_DATA_UNIT_HOSPITAL]}
   //,{type:[GG_DATA_UNIT_TRUMPET]}
   ,{type:[GG_DATA_UNIT_AX, GG_DATA_UNIT_SPEAR]}
   ,{type:[GG_DATA_UNIT_SHILED, GG_DATA_UNIT_TRIDENT]}
   ,{type:[GG_DATA_UNIT_RAPIER, GG_DATA_UNIT_KATANA]}
   ]
  // 11
  ,[
    {type:[GG_DATA_UNIT_SWORD]}
   ,{type:[GG_DATA_UNIT_MIDDLE]}
   ,{type:[GG_DATA_UNIT_FALCHION]}
   ,{type:[GG_DATA_UNIT_SHORTBOW]}
   ,{type:[GG_DATA_UNIT_WITCH]}
   ,{type:[GG_DATA_UNIT_HOSPITAL]}
//   ,{type:[GG_DATA_UNIT_TRUMPET]}
   ,{type:[GG_DATA_UNIT_AX, GG_DATA_UNIT_SPEAR]}
   ,{type:[GG_DATA_UNIT_SHILED, GG_DATA_UNIT_TRIDENT]}
   ,{type:[GG_DATA_UNIT_RAPIER, GG_DATA_UNIT_KATANA]}
   ,{type:[GG_DATA_UNIT_CHAIN, GG_DATA_UNIT_LONGBOW]}
  ]
  // 12
  ,[
    {type:[GG_DATA_UNIT_SWORD]}
   ,{type:[GG_DATA_UNIT_MIDDLE]}
   ,{type:[GG_DATA_UNIT_FALCHION]}
   ,{type:[GG_DATA_UNIT_SHORTBOW]}
   ,{type:[GG_DATA_UNIT_WITCH]}
   ,{type:[GG_DATA_UNIT_HOSPITAL]}
//   ,{type:[GG_DATA_UNIT_TRUMPET]}
   ,{type:[GG_DATA_UNIT_AX, GG_DATA_UNIT_SPEAR]}
   ,{type:[GG_DATA_UNIT_SHILED, GG_DATA_UNIT_TRIDENT]}
   ,{type:[GG_DATA_UNIT_RAPIER, GG_DATA_UNIT_KATANA]}
   ,{type:[GG_DATA_UNIT_CHAIN, GG_DATA_UNIT_LONGBOW]}
   ,{type:[GG_DATA_UNIT_THUNDER, GG_DATA_UNIT_WIND]}
  ]
  // 13
  ,[
    {type:[GG_DATA_UNIT_SWORD]}
   ,{type:[GG_DATA_UNIT_MIDDLE]}
   ,{type:[GG_DATA_UNIT_FALCHION]}
   ,{type:[GG_DATA_UNIT_SHORTBOW]}
   ,{type:[GG_DATA_UNIT_WITCH]}
   ,{type:[GG_DATA_UNIT_HOSPITAL]}
//   ,{type:[GG_DATA_UNIT_TRUMPET]}
   ,{type:[GG_DATA_UNIT_AX, GG_DATA_UNIT_SPEAR]}
   ,{type:[GG_DATA_UNIT_SHILED, GG_DATA_UNIT_TRIDENT]}
   ,{type:[GG_DATA_UNIT_RAPIER, GG_DATA_UNIT_KATANA]}
   ,{type:[GG_DATA_UNIT_CHAIN, GG_DATA_UNIT_LONGBOW]}
   ,{type:[GG_DATA_UNIT_THUNDER, GG_DATA_UNIT_WIND]}
   ,{type:[GG_DATA_UNIT_MACE, GG_DATA_UNIT_TAKT]}
  ]
  // 14
  ,[
    {type:[GG_DATA_UNIT_SWORD]}
   ,{type:[GG_DATA_UNIT_MIDDLE]}
   ,{type:[GG_DATA_UNIT_FALCHION]}
   ,{type:[GG_DATA_UNIT_SHORTBOW]}
   ,{type:[GG_DATA_UNIT_WITCH]}
   ,{type:[GG_DATA_UNIT_HOSPITAL]}
//   ,{type:[GG_DATA_UNIT_TRUMPET]}
   ,{type:[GG_DATA_UNIT_AX, GG_DATA_UNIT_SPEAR]}
   ,{type:[GG_DATA_UNIT_SHILED, GG_DATA_UNIT_TRIDENT]}
   ,{type:[GG_DATA_UNIT_RAPIER, GG_DATA_UNIT_KATANA]}
   ,{type:[GG_DATA_UNIT_CHAIN, GG_DATA_UNIT_LONGBOW]}
   ,{type:[GG_DATA_UNIT_THUNDER, GG_DATA_UNIT_WIND]}
   ,{type:[GG_DATA_UNIT_MACE, GG_DATA_UNIT_TAKT]}
   ,{type:[GG_DATA_UNIT_HARP, GG_DATA_UNIT_BELL]}
  ]
];

var GG_DATA_CLASS_CHANGE_LIST = [
  // 0
  []
  ,[]
  ,[]
  ,[]
  ,[]
  ,[]
  ,[]
  ,[]
  ,[]
  ,[]
  ,[] //10
  ,[]
  ,[]
  ,[]
  ,[]
  ,[]
  ,[]
  ,[]
  ,[]
  ,[]
  ,[] //20
  ,[]
  ,[]
  ,[]
  ,[]
  ,[]
  ,[]
  ,[]
  ,[]
  ,[]
  ,[] //30
  ,[]
  ,[]
  ,[]
  ,[]
  ,[]
  ,[]
  ,[]
  ,[]
  ,[]
  ,[] //40
  ,[]
  ,[]
  ,[]
  ,[]
  ,[]
  ,[]
  ,[]
  ,[]
  ,[]
  //,[GG_DATA_UNIT_AX, GG_DATA_UNIT_SPEAR, GG_DATA_UNIT_TWOHAND] //50
  ,[GG_DATA_UNIT_AX, GG_DATA_UNIT_SPEAR, GG_DATA_UNIT_SABER] //50
  //,[GG_DATA_UNIT_SHILED, GG_DATA_UNIT_TRIDENT, GG_DATA_UNIT_MACE]
  ,[GG_DATA_UNIT_SHILED, GG_DATA_UNIT_TRIDENT, GG_DATA_UNIT_HAMMER]
  //,[GG_DATA_UNIT_RAPIER, GG_DATA_UNIT_KATANA, GG_DATA_UNIT_CROW]
  ,[GG_DATA_UNIT_RAPIER, GG_DATA_UNIT_KATANA, GG_DATA_UNIT_CROW]
  //,[GG_DATA_UNIT_CHAIN, GG_DATA_UNIT_LONGBOW, GG_DATA_UNIT_TOMAHAWK]
  ,[GG_DATA_UNIT_CHAIN, GG_DATA_UNIT_LONGBOW, GG_DATA_UNIT_HARP]
  //,[GG_DATA_UNIT_THUNDER, GG_DATA_UNIT_WIND, GG_DATA_UNIT_LIGTHNING]
  ,[GG_DATA_UNIT_THUNDER, GG_DATA_UNIT_WIND, GG_DATA_UNIT_LASER]
  //,[GG_DATA_UNIT_THUNDER, GG_DATA_UNIT_WIND, GG_DATA_UNIT_LIGTHNING]
  ,[GG_DATA_UNIT_MACE, GG_DATA_UNIT_TAKT, GG_DATA_UNIT_MORNINGSTAR]
  //,
  //,[GG_DATA_UNIT_HARP, GG_DATA_UNIT_BELL]
  ,[]
  ,[]
  ,[]
  ,[]
  ,[] //60
  ,[]
  ,[]
  ,[]
  ,[]
  ,[]
  ,[]
  ,[]
  ,[]
  ,[]
  ,[] //70
  ,[]
  ,[]
  ,[]
  ,[]
  ,[]
  ,[]
  ,[]
  ,[]
  ,[]
  ,[] //80
  ,[]
  ,[]
  ,[]
  ,[]
  ,[]
  ,[]
  ,[]
  ,[]
  ,[]
  ,[] //90
  ,[]
  ,[]
  ,[]
  ,[]
  ,[]
  ,[]
  ,[]
  ,[]
  ,[]
//  ,[GG_DATA_UNIT_SWORD, GG_DATA_UNIT_MIDDLE, GG_DATA_UNIT_FALCHION, GG_DATA_UNIT_SHORTBOW, GG_DATA_UNIT_WITCH, GG_DATA_UNIT_HOSPITAL,
//    GG_DATA_UNIT_SWORD, GG_DATA_UNIT_MIDDLE, GG_DATA_UNIT_FALCHION, GG_DATA_UNIT_SHORTBOW, GG_DATA_UNIT_WITCH, GG_DATA_UNIT_HOSPITAL] //100
  ,[
    // b ok
    [GG_DATA_UNIT_SWORD, GG_DATA_UNIT_MIDDLE, GG_DATA_UNIT_FALCHION, GG_DATA_UNIT_WITCH, GG_DATA_UNIT_HOSPITAL, GG_DATA_UNIT_SHORTBOW
    ,GG_DATA_UNIT_SWORD, GG_DATA_UNIT_MIDDLE, GG_DATA_UNIT_FALCHION, GG_DATA_UNIT_WITCH, GG_DATA_UNIT_HOSPITAL, GG_DATA_UNIT_SHORTBOW]

    // r ok
    ,[GG_DATA_UNIT_SWORD, GG_DATA_UNIT_FALCHION, GG_DATA_UNIT_WITCH,    GG_DATA_UNIT_HOSPITAL, GG_DATA_UNIT_SHORTBOW, GG_DATA_UNIT_SWORD
     ,GG_DATA_UNIT_SWORD, GG_DATA_UNIT_MIDDLE,   GG_DATA_UNIT_FALCHION, GG_DATA_UNIT_WITCH,    GG_DATA_UNIT_HOSPITAL, GG_DATA_UNIT_SHORTBOW]
    
    // g ok
    ,[GG_DATA_UNIT_MIDDLE, GG_DATA_UNIT_SWORD, GG_DATA_UNIT_WITCH, GG_DATA_UNIT_HOSPITAL, GG_DATA_UNIT_SHORTBOW, GG_DATA_UNIT_MIDDLE
    ,GG_DATA_UNIT_SWORD, GG_DATA_UNIT_MIDDLE, GG_DATA_UNIT_FALCHION, GG_DATA_UNIT_WITCH, GG_DATA_UNIT_HOSPITAL, GG_DATA_UNIT_SHORTBOW]

    // c
    ,[GG_DATA_UNIT_FALCHION, GG_DATA_UNIT_SWORD, GG_DATA_UNIT_MIDDLE, GG_DATA_UNIT_HOSPITAL, GG_DATA_UNIT_SHORTBOW, GG_DATA_UNIT_FALCHION
    ,GG_DATA_UNIT_SWORD, GG_DATA_UNIT_MIDDLE, GG_DATA_UNIT_FALCHION, GG_DATA_UNIT_WITCH, GG_DATA_UNIT_HOSPITAL, GG_DATA_UNIT_SHORTBOW]

    // m
    ,[GG_DATA_UNIT_WITCH, GG_DATA_UNIT_SWORD, GG_DATA_UNIT_MIDDLE, GG_DATA_UNIT_FALCHION, GG_DATA_UNIT_SHORTBOW, GG_DATA_UNIT_WITCH
    ,GG_DATA_UNIT_SWORD, GG_DATA_UNIT_MIDDLE, GG_DATA_UNIT_FALCHION, GG_DATA_UNIT_WITCH, GG_DATA_UNIT_HOSPITAL, GG_DATA_UNIT_SHORTBOW]

    // y
    ,[GG_DATA_UNIT_HOSPITAL, GG_DATA_UNIT_SWORD, GG_DATA_UNIT_MIDDLE, GG_DATA_UNIT_FALCHION, GG_DATA_UNIT_WITCH,GG_DATA_UNIT_HOSPITAL
    ,GG_DATA_UNIT_SWORD, GG_DATA_UNIT_MIDDLE, GG_DATA_UNIT_FALCHION, GG_DATA_UNIT_WITCH, GG_DATA_UNIT_HOSPITAL, GG_DATA_UNIT_SHORTBOW]

    // o
    ,[GG_DATA_UNIT_SHORTBOW, GG_DATA_UNIT_MIDDLE, GG_DATA_UNIT_FALCHION, GG_DATA_UNIT_WITCH, GG_DATA_UNIT_HOSPITAL, GG_DATA_UNIT_SHORTBOW
    ,GG_DATA_UNIT_SWORD, GG_DATA_UNIT_MIDDLE, GG_DATA_UNIT_FALCHION, GG_DATA_UNIT_WITCH, GG_DATA_UNIT_HOSPITAL, GG_DATA_UNIT_SHORTBOW]

    // p
    //,[GG_DATA_UNIT_TRUMPET, GG_DATA_UNIT_MIDDLE, GG_DATA_UNIT_FALCHION, GG_DATA_UNIT_WITCH, GG_DATA_UNIT_HOSPITAL, GG_DATA_UNIT_SHORTBOW, GG_DATA_UNIT_TRUMPET
    //,GG_DATA_UNIT_SWORD, GG_DATA_UNIT_MIDDLE, GG_DATA_UNIT_FALCHION, GG_DATA_UNIT_WITCH, GG_DATA_UNIT_HOSPITAL, GG_DATA_UNIT_SHORTBOW, GG_DATA_UNIT_TRUMPET]

    ] //100
  ,[]
  ,[]
  ,[]
  ,[]
  ,[]
  ,[]
  ,[]
  ,[]
  ,[]
  ,[] // 110
  ,[]
  ,[]
  ,[]
  ,[]
  ,[]
  ,[]
  ,[]
  ,[]
  ,[]
  ,[] //120
  ,[]
  ,[]
  ,[]
  ,[]
  ,[]
  ,[]
  ,[]
  ,[]
  ,[]
  ,[] //130
  ,[]
  ,[]
  ,[]
  ,[]
  ,[]
  ,[]
  ,[]
  ,[]
  ,[]
  ,[] //140
  ,[]
  ,[]
  ,[]
  ,[]
  ,[]
  ,[]
  ,[]
  ,[]
  ,[]
  ,[] //150
  ,[]
  ,[]
  ,[]
  ,[]
  ,[]
];

///map
var GG_DATA_MAP_NONE = -1; 
var GG_DATA_MAP_RIVER = 0;
var GG_DATA_MAP_PLANE = 1;
var GG_DATA_MAP_HILL  = 2;
var GG_DATA_MAP_MOUNT = 3;

//var GG_DATA_MAP = [
//      [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
//     ,[-1,  1, -1,  1, -1,  1, -1,  1, -1,  1, -1,  1, -1]
//     ,[-1, -1,  1, -1,  1, -1,  1, -1,  1, -1,  1, -1, -1]
//     ,[-1,  1, -1,  1, -1,  1, -1,  1, -1,  1, -1,  1, -1]
//     ,[-1, -1,  1, -1,  1, -1,  1, -1,  1, -1,  1, -1, -1]
//     ,[-1,  1, -1,  1, -1,  1, -1,  1, -1,  1, -1,  1, -1]
//     ,[-1, -1,  1, -1,  1, -1,  1, -1,  1, -1,  1, -1, -1]
//     ,[-1,  1, -1,  1, -1,  1, -1,  1, -1,  1, -1,  1, -1]
//     ,[-1, -1,  1, -1,  1, -1,  1, -1,  1, -1,  1, -1, -1]
//     ,[-1,  1, -1,  1, -1,  1, -1,  1, -1,  1, -1,  1, -1]
//     ,[-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
//];

//var GG_DATA_MAP = [
//      [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
//     ,[-1,  1, -1,  2, -1,  2, -1,  2, -1,  1, -1,  1, -1]
//     ,[-1, -1,  1, -1,  1, -1,  1, -1,  2, -1,  1, -1, -1]
//     ,[-1,  1, -1,  2, -1,  0, -1,  1, -1,  1, -1,  1, -1]
//     ,[-1, -1,  1, -1,  3, -1,  3, -1,  1, -1,  1, -1, -1]
//     ,[-1,  1, -1,  0, -1,  3, -1,  3, -1,  1, -1,  1, -1]
//     ,[-1, -1,  1, -1,  2, -1,  3, -1,  2, -1,  1, -1, -1]
//     ,[-1,  1, -1,  1, -1,  1, -1,  2, -1,  1, -1,  1, -1]
//     ,[-1, -1,  0, -1,  0, -1,  0, -1,  1, -1,  1, -1, -1]
//     ,[-1,  1, -1,  0, -1,  3, -1,  3, -1,  1, -1,  1, -1]
//     ,[-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
//];

var GG_DATA_MAP = [
      [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
     ,[-1, -1, -1,  1, -1,  0, -1,  2, -1,  0, -1,  1, -1, -1, -1]
     ,[-1, -1,  2, -1,  1, -1,  0, -1,  0, -1,  1, -1,  2, -1, -1]
     ,[-1, -1, -1,  1, -1,  1, -1,  1, -1,  1, -1,  1, -1, -1, -1]
     ,[-1, -1,  2, -1,  1, -1,  2, -1,  2, -1,  1, -1,  2, -1, -1]
     ,[-1, -1, -1,  2, -1,  2, -1,  3, -1,  2, -1,  2, -1, -1, -1]
     ,[-1, -1,  2, -1,  1, -1,  2, -1,  2, -1,  1, -1,  2, -1, -1]
     ,[-1, -1, -1,  1, -1,  1, -1,  1, -1,  1, -1,  1, -1, -1, -1]
     ,[-1, -1,  2, -1,  1, -1,  0, -1,  0, -1,  1, -1,  2, -1, -1]
     ,[-1, -1, -1,  1, -1,  0, -1,  2, -1,  0, -1,  1, -1, -1, -1]
     ,[-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
];

//var GG_DATA_MAP = [
//      [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
//     ,[-1, -1, -1,  1, -1,  1, -1,  1, -1,  1, -1,  1, -1, -1, -1]
//     ,[-1, -1,  1, -1,  1, -1,  1, -1,  1, -1,  1, -1,  1, -1, -1]
//     ,[-1, -1, -1,  1, -1,  1, -1,  1, -1,  1, -1,  1, -1, -1, -1]
//     ,[-1, -1,  1, -1,  1, -1,  1, -1,  1, -1,  1, -1,  1, -1, -1]
//     ,[-1, -1, -1,  1, -1,  1, -1,  1, -1,  1, -1,  1, -1, -1, -1]
//     ,[-1, -1,  1, -1,  1, -1,  1, -1,  1, -1,  1, -1,  1, -1, -1]
//     ,[-1, -1, -1,  1, -1,  1, -1,  1, -1,  1, -1,  1, -1, -1, -1]
//     ,[-1, -1,  1, -1,  1, -1,  1, -1,  1, -1,  1, -1,  1, -1, -1]
//     ,[-1, -1, -1,  1, -1,  1, -1,  1, -1,  1, -1,  1, -1, -1, -1]
//     ,[-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
//];

// img create
//var GG_DATA_MAP = [
//      [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
//     ,[-1, -1, -1,  1, -1, -1, -1,  2, -1, -1, -1,  3, -1, -1, -1]
//     ,[-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
//     ,[-1, -1, -1,  4, -1, -1, -1,  1, -1,  1, -1,  1, -1, -1, -1]
//     ,[-1, -1, -1, -1,-1, -1,  2, -1,  2, -1,  1, -1,  2, -1, -1]
//     ,[-1, -1, -1, -1, -1, -1, -1,  3, -1,  2, -1,  2, -1, -1, -1]
//     ,[-1, -1,  2, -1,  1, -1,  2, -1,  2, -1,  1, -1,  2, -1, -1]
//     ,[-1, -1, -1,  1, -1,  1, -1,  1, -1,  1, -1,  1, -1, -1, -1]
//     ,[-1, -1,  2, -1,  1, -1,  0, -1,  0, -1,  1, -1,  2, -1, -1]
//     ,[-1, -1, -1,  1, -1,  0, -1,  2, -1,  0, -1,  1, -1, -1, -1]
//     ,[-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
//];

var GG_DATA_MAP_ORGINAL_PLANE = [
      [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
     ,[-1, -1, -1,  1, -1,  1, -1,  1, -1,  1, -1,  1, -1, -1, -1]
     ,[-1, -1,  1, -1,  1, -1,  1, -1,  1, -1,  1, -1,  1, -1, -1]
     ,[-1, -1, -1,  1, -1,  1, -1,  1, -1,  1, -1,  1, -1, -1, -1]
     ,[-1, -1,  1, -1,  1, -1,  1, -1,  1, -1,  1, -1,  1, -1, -1]
     ,[-1, -1, -1,  1, -1,  1, -1,  1, -1,  1, -1,  1, -1, -1, -1]
     ,[-1, -1,  1, -1,  1, -1,  1, -1,  1, -1,  1, -1,  1, -1, -1]
     ,[-1, -1, -1,  1, -1,  1, -1,  1, -1,  1, -1,  1, -1, -1, -1]
     ,[-1, -1,  1, -1,  1, -1,  1, -1,  1, -1,  1, -1,  1, -1, -1]
     ,[-1, -1, -1,  1, -1,  1, -1,  1, -1,  1, -1,  1, -1, -1, -1]
     ,[-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
];

//var GG_DATA_MAP_SELECT_PLANE = [
//      [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
//     ,[-1, -1, 0,  -1, -1,  1, -1,  -1, 2,  -1, -1,  3, -1, -1, -1]
//     ,[-1, -1,  -1, -1,  -1, -1,  -1, -1,  -1, -1,  -1, -1,  -1, -1, -1]
//     ,[-1, -1, -1,  1, -1,  1, -1,  1, -1,  1, -1,  1, -1, -1, -1]
//     ,[-1, -1,  1, -1,  1, -1,  1, -1,  1, -1,  1, -1,  1, -1, -1]
//     ,[-1, -1, -1,  1, -1,  1, -1,  1, -1,  1, -1,  1, -1, -1, -1]
//     ,[-1, -1,  1, -1,  1, -1,  1, -1,  1, -1,  1, -1,  1, -1, -1]
//     ,[-1, -1, -1,  1, -1,  1, -1,  1, -1,  1, -1,  1, -1, -1, -1]
//     ,[-1, -1,  1, -1,  1, -1,  1, -1,  1, -1,  1, -1,  1, -1, -1]
//     ,[-1, -1, -1,  1, -1,  1, -1,  1, -1,  1, -1,  1, -1, -1, -1]
//     ,[-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
//];

var GG_DATA_MAP_SELECT_RIVER = [
      [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
     ,[-1, -1, -1,  2, -1,  1, -1,  0, -1,  1, -1,  2, -1, -1, -1]
     ,[-1, -1,  3, -1,  2, -1,  1, -1,  1, -1,  2, -1,  3, -1, -1]
     ,[-1, -1, -1,  2, -1,  1, -1,  0, -1,  1, -1,  2, -1, -1, -1]
     ,[-1, -1,  2, -1,  1, -1,  0, -1,  1, -1,  1, -1,  2, -1, -1]
     ,[-1, -1, -1,  1, -1,  1, -1,  0, -1,  1, -1,  1, -1, -1, -1]
     ,[-1, -1,  2, -1,  1, -1,  1, -1,  0, -1,  1, -1,  2, -1, -1]
     ,[-1, -1, -1,  2, -1,  1, -1,  0, -1,  1, -1,  2, -1, -1, -1]
     ,[-1, -1,  3, -1,  2, -1,  1, -1,  1, -1,  2, -1,  3, -1, -1]
     ,[-1, -1, -1,  2, -1,  1, -1,  0, -1,  1, -1,  2, -1, -1, -1]
     ,[-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
];

var GG_DATA_MAP_SELECT_MOUNT = [
      [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
     ,[-1, -1, -1,  1, -1,  2, -1,  2, -1,  1, -1,  2, -1, -1, -1]
     ,[-1, -1,  1, -1,  2, -1,  3, -1,  2, -1,  1, -1,  1, -1, -1]
     ,[-1, -1, -1,  1, -1,  2, -1,  3, -1,  2, -1,  1, -1, -1, -1]
     ,[-1, -1,  2, -1,  1, -1,  2, -1,  2, -1,  1, -1,  2, -1, -1]
     ,[-1, -1, -1,  1, -1,  1, -1,  2, -1,  1, -1,  1, -1, -1, -1]
     ,[-1, -1,  2, -1,  1, -1,  2, -1,  2, -1,  1, -1,  2, -1, -1]
     ,[-1, -1, -1,  1, -1,  2, -1,  3, -1,  2, -1,  1, -1, -1, -1]
     ,[-1, -1,  1, -1,  1, -1,  2, -1,  3, -1,  2, -1,  1, -1, -1]
     ,[-1, -1, -1,  2, -1,  1, -1,  2, -1,  2, -1,  1, -1, -1, -1]
     ,[-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
];

var GG_DATA_MAP_SELECT_PLANE = [
      [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
     ,[-1, -1, -1,  2, -1,  2, -1,  1, -1,  2, -1,  2, -1, -1, -1]
     ,[-1, -1,  3, -1,  2, -1,  1, -1,  1, -1,  2, -1,  3, -1, -1]
     ,[-1, -1, -1,  2, -1,  1, -1,  1, -1,  1, -1,  2, -1, -1, -1]
     ,[-1, -1,  2, -1,  1, -1,  1, -1,  1, -1,  1, -1,  2, -1, -1]
     ,[-1, -1, -1,  2, -1,  1, -1,  2, -1,  1, -1,  2, -1, -1, -1]
     ,[-1, -1,  2, -1,  1, -1,  1, -1,  1, -1,  1, -1,  2, -1, -1]
     ,[-1, -1, -1,  2, -1,  1, -1,  1, -1,  1, -1,  2, -1, -1, -1]
     ,[-1, -1,  3, -1,  2, -1,  1, -1,  1, -1,  2, -1,  3, -1, -1]
     ,[-1, -1, -1,  2, -1,  2, -1,  1, -1,  2, -1,  2, -1, -1, -1]
     ,[-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
];

var GG_DATA_MAP_SELECT_PLANE = [
      [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
     ,[-1, -1, -1,  2, -1,  1, -1,  1, -1,  1, -1,  2, -1, -1, -1]
     ,[-1, -1,  3, -1,  2, -1,  1, -1,  1, -1,  2, -1,  3, -1, -1]
     ,[-1, -1, -1,  2, -1,  1, -1,  1, -1,  1, -1,  2, -1, -1, -1]
     ,[-1, -1,  1, -1,  1, -1,  1, -1,  1, -1,  1, -1,  1, -1, -1]
     ,[-1, -1, -1,  1, -1,  1, -1,  2, -1,  1, -1,  1, -1, -1, -1]
     ,[-1, -1,  1, -1,  1, -1,  1, -1,  1, -1,  1, -1,  1, -1, -1]
     ,[-1, -1, -1,  2, -1,  1, -1,  1, -1,  1, -1,  2, -1, -1, -1]
     ,[-1, -1,  3, -1,  2, -1,  1, -1,  1, -1,  2, -1,  3, -1, -1]
     ,[-1, -1, -1,  2, -1,  1, -1,  1, -1,  1, -1,  2, -1, -1, -1]
     ,[-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
];


//var GG_DATA_MAP = [
//      [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
//     ,[-1,  0, -1, 1, -1, 2, -1,  3, -1,  -1, -1,  -1, -1]
//     ,[-1, -1,  -1, -1,  -1, -1,  -1, -1,  -1, -1,  -1, -1, -1]
//     ,[-1,  1, -1, -1, -1, -1, -1,  -1, -1,  -1, -1,  -1, -1]
//     ,[-1, -1,  -1, -1,  -1, -1,  -1, -1,  -1, -1,  -1, -1, -1]
//     ,[-1,  1, -1, -1, -1, -1, -1,  -1, -1,  -1, -1,  -1, -1]
//     ,[-1, -1,  -1, -1,  -1, -1,  -1, -1,  -1, -1,  -1, -1, -1]
//     ,[-1,  1, -1, -1, -1, -1, -1,  -1, -1,  -1, -1,  -1, -1]
//     ,[-1, -1,  -1, -1,  -1, -1,  -1, -1,  -1, -1,  -1, -1, -1]
//     ,[-1,  1, -1, -1, -1, -1, -1,  -1, -1,  -1, -1,  -1, -1]
//     ,[-1, -1,  -1, -1,  -1, -1,  -1, -1,  -1, -1,  -1, -1, -1]
//];


///////////////////////////////////////////////////////////////////////////////

//var GG_DATA_FAMOUS_WORDS_TIME_OUT = 10000;
//var GG_DATA_FAMOUS_WORDS_UPDATE = 100;

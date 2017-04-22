var GG_PARTS_PUSH_SPACE = [
     {x:1,  y:-1, route:0, push_space:[{x:-1, y:-1, route:5, unit_dir:0}, {x:1,  y:-1, route:0, unit_dir:0}, {x:2,   y:0,  route:1, unit_dir:2}]}
    ,{x:2,  y: 0, route:1, push_space:[{x: 1, y:-1, route:0, unit_dir:0}, {x:2,  y: 0, route:1, unit_dir:2}, {x:1,   y:1,  route:2, unit_dir:3}]}
    ,{x:1,  y: 1, route:2, push_space:[{x: 2, y: 0, route:1, unit_dir:2}, {x:1,  y: 1, route:2, unit_dir:3}, {x:-1,  y:1,  route:3, unit_dir:3}]}
    ,{x:-1, y: 1, route:3, push_space:[{x: 1, y: 1, route:2, unit_dir:3}, {x:-1, y: 1, route:3, unit_dir:3}, {x:-2,  y:0,  route:4, unit_dir:1}]}
    ,{x:-2, y: 0, route:4, push_space:[{x:-1, y: 1, route:3, unit_dir:3}, {x:-2, y: 0, route:4, unit_dir:1}, {x:-1,  y:-1, route:5, unit_dir:0}]}
    ,{x:-1, y:-1, route:5, push_space:[{x:-2, y: 0, route:4, unit_dir:2}, {x:-1, y:-1, route:5, unit_dir:0}, {x:1,   y:-1, route:0, unit_dir:0}]}
];

var GG_PARTS_UNIQ_ANIMATION = [
	0, 1, 2, 1, 0, 1, 2, 1, 0, 1, 2, 1, 
	0, 1, 2, 1, 0, 1, 2, 1, 0, 1, 2, 1, 
	0, 1, 2, 1, 0, 1, 2, 1, 0, 1, 2, 1, 
	0, 1, 2, 1, 0, 1, 2, 1, 0, 1, 2, 1, 
	0, 1, 2, 1, 0, 1, 2, 1, 0, 1, 2, 1, 
	0, 1, 2, 1, 0, 1, 2, 1, 0, 1, 2, 1, 
	0, 1, 2, 1, 0, 1, 2, 1, 0, 1, 2, 1, 
	0, 1, 2, 1, 0, 1, 2, 1, 0, 1, 2, 1, 
	0, 1, 2, 1, 0, 1, 2, 1, 0, 1, 2, 1, 
	0, 1, 2, 1, 0, 1, 2, 1, 0, 1, 2, 1
	];

var GG_PARTS_ATTACK_DIRECTION = [
    []
    // 1
    ,[
        {x:1 ,y:-1, move_dir:0, unit_dir:3, back_dir:3}
        ,{x:2 ,y:0, move_dir:1, unit_dir:1, back_dir:4}
        ,{x:1 ,y:1, move_dir:2, unit_dir:0, back_dir:5}
        ,{x:-1 ,y:1, move_dir:3, unit_dir:0, back_dir:0}
        ,{x:-2 ,y:0, move_dir:4, unit_dir:2, back_dir:1}
        ,{x:-1 ,y:-1, move_dir:5, unit_dir:3, back_dir:2}
    ]
    // 2
    ,[
        {x:0, y:-2, move_dir:5, unit_dir: 3, back_dir:2}
        ,{x:2, y:-2, move_dir:0, unit_dir: 3, back_dir:3}
        ,{x:3, y:-1, move_dir:0, unit_dir: 1, back_dir:4}
        ,{x:4, y:0, move_dir:1, unit_dir: 1, back_dir:4}
        ,{x:3, y:1, move_dir:1, unit_dir: 1, back_dir:4}
        ,{x:2, y:2, move_dir:2, unit_dir: 0, back_dir:5}
        ,{x:0, y:2, move_dir:2, unit_dir: 0, back_dir:5}
        ,{x:-2, y:2, move_dir:3, unit_dir:0 , back_dir:0}
        ,{x:-3, y:1, move_dir:3, unit_dir: 2, back_dir:1}
        ,{x:-4, y:0, move_dir:4, unit_dir: 2, back_dir:1}
        ,{x:-3, y:-1, move_dir:4, unit_dir:2 , back_dir:1}
        ,{x:-2, y:-2, move_dir:5, unit_dir: 3, back_dir:2}
    ]
    // 3
    ,[
        {x:1, y:-3, move_dir:0, unit_dir:3}
        ,{x:3, y:-3, move_dir:0, unit_dir:3}
        ,{x:4, y:-2, move_dir:0, unit_dir:1}
        ,{x:5, y:-1, move_dir:0, unit_dir:1}
        ,{x:6, y:0, move_dir:1, unit_dir:1}
        ,{x:5, y:1, move_dir:1, unit_dir:1}
        ,{x:4, y:2, move_dir:1, unit_dir:1}
        ,{x:3, y:3, move_dir:2, unit_dir:0}
        ,{x:1, y:3, move_dir:2, unit_dir:0}
        ,{x:-1, y:3, move_dir:2, unit_dir:0}
        ,{x:-3, y:3, move_dir:3, unit_dir:0}
        ,{x:-4, y:2, move_dir:3, unit_dir:2}
        ,{x:-5, y:1, move_dir:3, unit_dir:2}
        ,{x:-6, y:0, move_dir:4, unit_dir:2}
        ,{x:-5, y:-1, move_dir:4, unit_dir:2}
        ,{x:-4, y:-2, move_dir:4, unit_dir:2}
        ,{x:-3, y:-3, move_dir:5, unit_dir:3}
        ,{x:-1, y:-3, move_dir:5, unit_dir:3}
    ]
];


var GG_PARTS_FRIEND_PULL_ROUTE = [
    {x:1, y:-1,  r_route:0, route:3, list:[{x:-1, y:-1, route:5}, {x:1, y:-1,  route:0}, {x:2, y:0,   route:1}]}  
   ,{x:2, y:0,   r_route:1, route:4, list:[{x:1,  y:-1, route:0}, {x:2, y:0,   route:1}, {x:1, y:1,   route:2}]}  
   ,{x:1, y:1,   r_route:2, route:5, list:[{x:2,  y:0,  route:1}, {x:1, y:1,   route:2}, {x:-1, y:1,  route:3}]}  
   ,{x:-1, y:1,  r_route:3, route:0, list:[{x:1,  y:1,  route:2}, {x:-1, y:1,  route:3}, {x:-2, y:0,  route:4}]}  
   ,{x:-2, y:0,  r_route:4, route:1, list:[{x:-1, y:1,  route:3}, {x:-2, y:0,  route:4}, {x:-1, y:-1, route:5}]}  
   ,{x:-1, y:-1, r_route:5, route:2, list:[{x:-2, y:0,  route:4}, {x:-1, y:-1, route:5}, {x:1, y:-1,  route:0}]}  
];

var GG_PARTS_LONGBOW_PUSH = [
     {x:1, y:-3,  list:[[{x:-1, y:-1, route:5}, {x:-2, y:-2, route:5}, {x:-3, y:-3, route:5}],
                        [{x:-1, y:-1, route:5}, {x:-2, y:-2, route:5}, {x:-1, y:-3, route:0}],
                        [{x:-1, y:-1, route:5}, {x:0,  y:-2, route:0}, {x:-1, y:-3, route:5}],
                        [{x:1,  y:-1, route:0}, {x:0,  y:-2, route:5}, {x:-1, y:-3, route:5}],

                        [{x:-1, y:-1, route:5}, {x:0,  y:-2, route:0}, {x:1,  y:-3, route:0}],
                        [{x:1,  y:-1, route:0}, {x:0,  y:-2, route:5}, {x:1,  y:-3, route:0}],
                        [{x:1,  y:-1, route:0}, {x:2,  y:-2, route:0}, {x:1,  y:-3, route:5}],

                        [{x:1,  y:-1, route:0}, {x:2,  y:-2, route:0}, {x:3,  y:-3, route:0}],
                        [{x:-1, y:-1, route:5}, {x:-2, y:-2, route:5}],
                        [{x:-1, y:-1, route:5}, {x:0, y:-2,  route:0}],
                        [{x:1,  y:-1, route:0}, {x:0, y:-2,  route:5}],
                        [{x:1,  y:-1, route:0}, {x:2, y:-2,  route:0}],                        
                        [{x:-1, y:-1, route:5}],
                        [{x:1, y:-1,  route:0}]]}
    ,{x:3, y:-3,  list:[[{x:-1 ,y:-1, route:5},{x:0, y:-2, route:0},{x:1 , y:-3, route:0}],  // 7+5+3 kado
                        [{x:1,  y:-1, route:0},{x:0, y:-2, route:5},{x:1,  y:-3, route:0}],
                        [{x:1 , y:-1, route:0},{x:2, y:-2, route:0},{x:1,  y:-3, route:5}],

                        [{x:1 , y:-1, route:0},{x:2 , y:-2, route:0},{x:3 , y:-3, route:0}],

                        [{x:1, y:-1, route:0},{x:2, y:-2, route:0},{x:4, y:-2, route:1}],
                        [{x:1, y:-1, route:0},{x:3 , y:-1, route:1},{x:4, y:-2, route:0}],
                        [{x:2, y:0,  route:1},{x:3, y:-1, route:0},{x:4, y:-2, route:0}],
                        [{x:-1, y:-1, route:5}, {x:0, y:-2,  route:0}],
                        [{x:1, y:-1,  route:0}, {x:0, y:-2,  route:5}],
                        [{x:1, y:-1,  route:0}, {x:2, y:-2,  route:0}],
                        [{x:1, y:-1,  route:0}, {x:3, y:-1,  route:1}],
                        [{x:2, y: 0,  route:1}, {x:3, y:-1,  route:0}],
                        [{x:-1, y:-1, route:5}],
                        [{x:1, y:-1,  route:0}],
                        [{x:2,y:0,    route:1}]]}
    ,{x:4, y:-2,  list:[[{x:1 , y:-1, route:0},{x:2 , y:-2, route:0},{x:3 , y:-3, route:0}],

                        [{x:1 , y:-1, route:0},{x:2 , y:-2, route:0},{x:4 , y:-2, route:1}],
                        [{x:1 , y:-1, route:0},{x:3 , y:-1, route:1},{x:4 , y:-2, route:0}],
                        [{x:2 , y:0,  route:1},{x:3 , y:-1, route:0},{x:4 , y:-2, route:0}],

                        [{x:1 , y:-1, route:0},{x:3 , y:-1, route:1},{x:5 , y:-1, route:1}],
                        [{x:2 , y:0,  route:1},{x:3 , y:-1, route:0},{x:5 , y:-1, route:1}],
                        [{x:2 , y:0,  route:1},{x:4 , y:0,  route:1},{x:5 , y:-1, route:0}],                        

                        [{x:2 , y:0, route:1},{x:4, y:0, route:1},{x:6, y:0, route:1}],                        
                        [{x:1, y:-1,  route:0}, {x:2, y:-2,  route:0}],
                        [{x:1, y:-1,  route:0}, {x:3, y:-1,  route:1}],
                        [{x:2, y:0,   route:1}, {x:3, y:-1,  route:0}],
                        [{x:2, y:0,   route:1}, {x:4, y: 0,  route:1}],
                        [{x:1, y:-1,  route:0}],
                        [{x:2, y:0,   route:1}]]}
    ,{x:5, y:-1,  list:[[{x:1 , y:-1, route:0},{x:2 , y:-2, route:0},{x:3 , y:-3, route:0}],

                        [{x:1 , y:-1, route:0},{x:2 , y:-2, route:0},{x:4 , y:-2, route:1}],
                        [{x:1 , y:-1, route:0},{x:3 , y:-1, route:1},{x:4 , y:-2, route:0}],
                        [{x:2 , y:0,  route:1},{x:3 , y:-1, route:0},{x:4 , y:-2, route:0}],

                        [{x:1 , y:-1, route:0},{x:3 , y:-1, route:1},{x:5 , y:-1, route:1}],
                        [{x:2 , y:0,  route:1},{x:3 , y:-1, route:0},{x:5 , y:-1, route:1}],
                        [{x:2 , y:0,  route:1},{x:4 , y:0,  route:1},{x:5 , y:-1, route:0}],
                        [{x:2 , y:0, route:1},{x:4, y:0, route:1},{x:6, y:0, route:1}],                        
                        [{x:1, y:-1,  route:0}, {x:2, y:-2,  route:0}],
                        [{x:1, y:-1,  route:0}, {x:3, y:-1,  route:1}],
                        [{x:2, y:0,   route:1}, {x:3, y:-1,  route:0}],
                        [{x:2, y:0,   route:1}, {x:4, y: 0,  route:1}],
                        [{x:1, y:-1,  route:0}],
                        [{x:2, y:0,   route:1}]]}
    ,{x:6, y:0,   list:[[{x:1 , y:-1, route:0},{x:3, y:-1, route:1},{x:5, y:-1, route:1}],  // 7+5+3 kado
                        [{x:2, y:0, route:1},{x:3, y:-1, route:0},{x:5, y:-1, route:1}],
                        [{x:2, y:0, route:1},{x:4, y:0, route:1},{x:5, y:-1, route:0}],

                        [{x:2, y:0, route:1},{x:4, y:0, route:1},{x:6, y:0, route:1}],

                        [{x:2, y:0, route:1},{x:4, y:0, route:1},{x:5, y:1, route:2}],
                        [{x:2, y:0, route:1},{x:3, y:1, route:2},{x:5, y:1, route:1}],
                        [{x:1, y:1, route:2},{x:3, y:1, route:1},{x:5, y:1, route:1}],
                        [{x:1, y:-1,  route:0}, {x:3, y:-1,  route:1}],
                        [{x:2, y:0,   route:1}, {x:3, y:-1,  route:0}],
                        [{x:2, y:0,   route:1}, {x:4, y:0,   route:1}],
                        [{x:2, y:0,   route:1}, {x:3, y:1,   route:2}],
                        [{x:1, y:1,   route:2}, {x:3, y:1,   route:1}],
                        [{x:1, y:-1,  route:0}],
                        [{x:2, y:0,   route:1}],
                        [{x:1,y:1,    route:2}]]}
    ,{x:5, y:1,   list:[[{x:2 , y:0, route:1},{x:4 , y:0, route:1},{x:6 , y:0, route:1}],
                        [{x:2 , y:0, route:1},{x:4 , y:0, route:1},{x:5 , y:1, route:2}],
                        [{x:2 , y:0, route:1},{x:3 , y:1, route:2},{x:5 , y:1, route:1}],
                        [{x:1 , y:1, route:2},{x:3 , y:1, route:1},{x:5 , y:1, route:1}],

                        [{x:2 , y:0, route:1},{x:3 , y:1, route:2},{x:4 , y:2, route:2}],
                        [{x:1 , y:1, route:2},{x:3 , y:1, route:1},{x:4 , y:2, route:2}],
                        [{x:1 , y:1, route:2},{x:2 , y:2, route:2},{x:4 , y:2, route:1}],

                        [{x:1 , y:1, route:2},{x:2 , y:2, route:2},{x:3 , y:3, route:2}],
                        [{x:2, y:0,   route:1}, {x:4, y:0,   route:1}],
                        [{x:2, y:0,   route:1}, {x:3, y:1,   route:2}],
                        [{x:1, y:1,   route:2},  {x:3, y:1,  route:1}],
                        [{x:1, y:1,   route:2},  {x:2, y:2,  route:2}],
                        [{x:2, y:0,   route:1}],
                        [{x:1, y:1,   route:2}]]}
    ,{x:4, y:2,   list:[[{x:2 , y:0, route:1},{x:4 , y:0, route:1},{x:6 , y:0, route:1}],
                        [{x:2 , y:0, route:1},{x:4 , y:0, route:1},{x:5 , y:1, route:2}],
                        [{x:2 , y:0, route:1},{x:3 , y:1, route:2},{x:5 , y:1, route:1}],
                        [{x:1 , y:1, route:2},{x:3 , y:1, route:1},{x:5 , y:1, route:1}],
                        
                        [{x:2 , y:0, route:1},{x:3 , y:1, route:2},{x:4 , y:2, route:2}],
                        [{x:1 , y:1, route:2},{x:3 , y:1, route:1},{x:4 , y:2, route:2}],
                        [{x:1 , y:1, route:2},{x:2 , y:2, route:2},{x:4 , y:2, route:1}],
                        
                        [{x:1 , y:1, route:2},{x:2 , y:2, route:2},{x:3 , y:3, route:2}],
                        [{x:2, y:0,   route:1}, {x:4, y:0,   route:1}],
                        [{x:2, y:0,   route:1}, {x:3, y:1,   route:2}],
                        [{x:1, y:1,   route:2}, {x:3, y:1,   route:1}],
                        [{x:1, y:1,   route:2}, {x:2, y:2,   route:2}],
                        [{x:2, y:0,   route:1}],
                        [{x:1, y:1,   route:2}]]}
    
    ,{x:3, y:3,   list:[[{x:2,  y:0, route:1},{x:3, y:1, route:2},{x:4, y:2, route:2}],  // 7+5+3 kado
                        [{x:1,  y:1, route:2},{x:3, y:1, route:1},{x:4, y:2, route:2}],
                        [{x:1,  y:1, route:2},{x:2, y:2, route:2},{x:4, y:2, route:1}],
                        
                        [{x:1,  y:1, route:2},{x:2, y:2, route:2},{x:3, y:3, route:2}],
                        
                        [{x:1,  y:1, route:2},{x:2, y:2, route:2},{x:1, y:3, route:3}],
                        [{x:1,  y:1, route:2},{x:0, y:2, route:3},{x:1, y:3, route:2}],
                        [{x:-1, y:1, route:3},{x:0, y:2, route:2},{x:1, y:3, route:2}],
                        
                        [{x:2, y:0,   route:1}, {x:3, y:1,   route:2}],
                        [{x:1, y:1,   route:2}, {x:3, y:1,   route:1}],
                        [{x:1, y:1,   route:2}, {x:2, y:2,   route:2}],
                        [{x:1, y:1,   route:2}, {x:0, y:2,   route:3}],
                        [{x:-1, y:1,  route:3}, {x:0, y:2,   route:2}],
                        [{x:2, y:0,   route:1}],
                        [{x:1, y:1,   route:2}],
                        [{x:-1,y:1,   route:3}]]}
    
    ,{x:1, y:3,   list:[[{x:1 , y:1, route:2},{x:2 , y:2, route:2},{x:3 , y:3, route:2}],
                        
                        [{x:1 , y:1, route:2},{x:2 , y:2, route:2},{x:1 , y:3, route:3}],
                        [{x:1 , y:1, route:2},{x:0 , y:2, route:3},{x:1 , y:3, route:2}],
                        [{x:-1 ,y:1, route:3},{x:0 , y:2, route:2},{x:1 , y:3, route:2}],
                        
                        [{x:1 , y:1, route:2},{x:0 , y:2, route:3},{x:-1 ,y:3, route:3}],
                        [{x:-1, y:1, route:3},{x:0,  y:2, route:2},{x:-1 ,y:3, route:3}],
                        [{x:-1, y:1, route:3},{x:-2, y:2, route:3},{x:-1, y:3, route:2}],
                        
                        [{x:-1 ,y:1, route:3},{x:-2 ,y:2, route:3},{x:-3 ,y:3, route:3}],
                        [{x:1, y:1,   route:2}, {x:2, y:2,   route:2}],
                        [{x:1, y:1,   route:2}, {x:0, y:2,   route:3}],
                        [{x:-1, y:1,  route:3},  {x:0, y:2,  route:2}],
                        [{x:-1, y:1,  route:3},  {x:-2, y:2, route:3}],
                        [{x:1, y:1,   route:2}],
                        [{x:-1, y:1,  route:3}]]}

    ,{x:-1, y:3,  list:[[{x:1 , y:1, route:2},{x:2 , y:2, route:2},{x:3 , y:3, route:2}],
                        
                        [{x:1 , y:1, route:2},{x:2 , y:2, route:2},{x:1 , y:3, route:3}],
                        [{x:1 , y:1, route:2},{x:0 , y:2, route:3},{x:1 , y:3, route:2}],                        
                        [{x:-1 ,y:1, route:3},{x:0 , y:2, route:2},{x:1 , y:3, route:2}],
                        
                        [{x:1 , y:1, route:2},{x:0 , y:2, route:3},{x:-1 ,y:3, route:3}],
                        [{x:-1, y:1, route:3},{x:0,  y:2, route:2},{x:-1 ,y:3, route:3}],
                        [{x:-1, y:1, route:3},{x:-2, y:2, route:3},{x:-1, y:3, route:2}],
                        
                        [{x:-1 ,y:1, route:3},{x:-2 ,y:2, route:3},{x:-3 ,y:3, route:3}],
                        [{x:1, y:1,   route:2}, {x:2, y:2,   route:2}],
                        [{x:1, y:1,   route:2}, {x:0, y:2,   route:3}],
                        [{x:-1, y:1,  route:3}, {x:0, y:2,   route:2}],
                        [{x:-1, y:1,  route:3}, {x:-2, y:2,  route:3}],
                        [{x:1, y:1,   route:2}],
                        [{x:-1, y:1,  route:3}]]}
    
    ,{x:-3, y:3,  list:[[{x:1, y:1, route:2},{x:0, y:2, route:3},{x:-1, y:3, route:3}],  // 7+5+3 kado
                        [{x:-1, y:1, route:3},{x:0, y:2, route:2},{x:-1, y:3, route:3}],
                        [{x:-1, y:1, route:3},{x:-2, y:2, route:3},{x:-1, y:3, route:2}],
                        
                        [{x:-1, y:1, route:3},{x:-2, y:2, route:3},{x:-3, y:3, route:3}],
                        
                        [{x:-1, y:1, route:3},{x:-2, y:2, route:3},{x:-4, y:2, route:4}],
                        [{x:-1, y:1, route:3},{x:-3, y:1, route:4},{x:-4, y:2, route:3}],
                        [{x:-2, y:0, route:4},{x:-3, y:1, route:3},{x:-4, y:2, route:3}],
                        [{x: 1, y:1,  route:2}, {x: 0, y:2,  route:3}],
                        [{x:-1, y:1,  route:3}, {x: 0, y:2,  route:2}],
                        [{x:-1, y:1,  route:3}, {x:-2, y:2,  route:3}],
                        [{x:-1, y:1,  route:3}, {x:-3, y:1,  route:4}],
                        [{x:-2, y:0,  route:4}, {x:-3, y:1,  route:3}],
                        [{x:1, y:1,   route:2}],
                        [{x:-1, y:1,  route:3}],
                        [{x:-2,y:0,   route:4}]]}
    ,{x:-4, y:2,  list:[[{x:-1, y:1, route:3},{x:-2, y:2, route:3},{x:-3, y:3, route:3}],
                        
                        [{x:-1, y:1, route:3},{x:-2, y:2, route:3},{x:-4, y:2, route:4}],
                        [{x:-1, y:1, route:3},{x:-3, y:1, route:4},{x:-4, y:2, route:3}],
                        [{x:-2, y:0, route:4},{x:-3, y:1, route:3},{x:-4, y:2, route:3}],
                        
                        [{x:-1, y:1, route:3},{x:-3, y:1, route:4},{x:-5, y:1, route:4}],
                        [{x:-2, y:0, route:4},{x:-3, y:1, route:3},{x:-5, y:1, route:4}],
                        [{x:-2, y:0, route:4},{x:-4, y:0, route:4},{x:-5, y:1, route:3}],
                        
                        [{x:-2, y:0, route:4},{x:-4, y:0, route:4},{x:-6, y:0, route:4}],
                        [{x:-1, y:1,  route:3}, {x:-2, y:2,  route:3}],
                        [{x:-1, y:1,  route:3}, {x:-3, y:1,  route:4}],
                        [{x:-2, y:0,  route:4}, {x:-3, y:1,  route:3}],
                        [{x:-2, y:0,  route:4}, {x:-4, y:0,  route:4}],
                        [{x:-1, y:1,  route:3}],
                        [{x:-2, y:0,  route:4}]]}
    ,{x:-5, y:1,  list:[[{x:-1, y:1,  route:3},{x:-2, y:2, route:3},{x:-3, y:3,  route:3}],
                        
                        [{x:-1, y:1,  route:3},{x:-2, y:2, route:3},{x:-4, y:2, route:4}],
                        [{x:-1, y:1,  route:3},{x:-3, y:1, route:4},{x:-4, y:2, route:3}],
                        [{x:-2, y:0,  route:4},{x:-3, y:1, route:3},{x:-4, y:2, route:3}],
                        
                        [{x:-1, y:1,  route:3},{x:-3, y:1, route:4},{x:-5, y:1, route:4}],
                        [{x:-2, y:0,  route:4},{x:-3, y:1, route:3},{x:-5, y:1, route:4}],
                        [{x:-2, y:0,  route:4},{x:-4, y:0,  route:4},{x:-5, y:1, route:3}],
                        
                        [{x:-2, y:0,  route:4},{x:-4, y:0,  route:4},{x:-6, y:0,  route:4}],
                        
                        [{x:-1, y:1,  route:3}, {x:-2, y:2,  route:3}],
                        [{x:-1, y:1,  route:3}, {x:-3, y:1,  route:4}],
                        [{x:-2, y:0,  route:4}, {x:-3, y:1,  route:3}],
                        [{x:-2, y:0,  route:4}, {x:-4, y:0,  route:4}],
                        [{x:-1, y:1,  route:3}],
                        [{x:-2, y:0,  route:4}]]}
    ,{x:-6, y:0,  list:[[{x:-1, y:1, route:3},{x:-3, y:1, route:4},{x:-5, y:1, route:4}],  // 7+5+3 kado
                        [{x:-2, y:0, route:4},{x:-3, y:1, route:3},{x:-5, y:1, route:4}],
                        [{x:-2, y:0, route:4},{x:-4, y:0, route:4},{x:-5, y:1, route:3}],
                        
                        [{x:-2, y:0, route:4},{x:-4, y:0, route:4},{x:-6, y:0, route:4}],
                        
                        [{x:-2, y:0, route:4},{x:-4, y:0, route:4},{x:-5, y:-1, route:5}],
                        [{x:-2, y:0, route:4},{x:-3, y:-1, route:5},{x:-5, y:-1, route:4}],
                        [{x:-1, y:-1, route:5},{x:-3, y:-1, route:4},{x:-5, y:-1, route:4}],
                        [{x:-1, y:1,  route:3}, {x:-3, y:1,  route:4}],
                        [{x:-2, y:0,  route:4}, {x:-3, y:1,  route:3}],
                        [{x:-2, y:0,  route:4}, {x:-4, y:0,  route:4}],
                        [{x:-2, y:0,  route:4}, {x:-3, y:-1, route:5}],
                        [{x:-1, y:-1, route:5}, {x:-3, y:-1, route:4}],
                        [{x:-1, y:1,  route:3}],
                        [{x:-2, y:0,  route:4}],
                        [{x:-1,y:-1,  route:5}]]}
    ,{x:-5, y:-1, list:[[{x:-2, y:0, route:4},{x:-4, y:0, route:4},{x:-6, y:0, route:4}],                        
                        [{x:-2, y:0, route:4},{x:-4, y:0, route:4},{x:-5, y:-1, route:5}],
                        [{x:-2, y:0, route:4},{x:-3, y:-1,route:5},{x:-5, y:-1, route:4}],
                        [{x:-1, y:-1,route:5},{x:-3, y:-1,route:4},{x:-5, y:-1, route:4}],
                        [{x:-2, y:0, route:4},{x:-3, y:-1, route:5},{x:-4, y:-2, route:5}],
                        [{x:-1, y:-1,route:5},{x:-3, y:-1, route:4},{x:-4, y:-2, route:5}],
                        [{x:-2, y:0, route:5},{x:-3, y:-1, route:5},{x:-4, y:-2, route:4}],
                        [{x:-1, y:-1, route:5},{x:-2, y:-2, route:5},{x:-3, y:-3, route:5}],

                        [{x:-2, y:0,  route:4}, {x:-4, y: 0, route:4}],
                        [{x:-2, y:0,  route:4}, {x:-3, y:-1, route:5}],
                        [{x:-1, y:-1, route:5}, {x:-3, y:-1, route:4}],
                        [{x:-1, y:-1, route:5}, {x:-2, y:-2, route:5}],
                        [{x:-2, y:0,  route:4}],
                        [{x:-1, y:-1, route:5}]]}
    ,{x:-4, y:-2, list:[[{x:-2, y:0, route:4},{x:-4, y:0, route:4},{x:-6, y:0, route:4}],
                        [{x:-2, y:0, route:4},{x:-4, y:0, route:4},{x:-5, y:-1, route:5}],
                        [{x:-2, y:0, route:4},{x:-3, y:-1,route:5},{x:-5, y:-1, route:4}],
                        [{x:-1, y:-1,route:5},{x:-3, y:-1,route:4},{x:-5, y:-1, route:4}],
                        [{x:-2, y:0, route:4},{x:-3, y:-1, route:5},{x:-4, y:-2, route:5}],
                        [{x:-1, y:-1,route:5},{x:-3, y:-1, route:4},{x:-4, y:-2, route:5}],
                        [{x:-2, y:0, route:5},{x:-3, y:-1, route:5},{x:-4, y:-2, route:4}],
                        
                        [{x:-1, y:-1, route:5},{x:-2, y:-2, route:5},{x:-3, y:-3, route:5}],
                        [{x:-2, y:0,  route:4}, {x:-4, y: 0, route:4}],
                        [{x:-2, y:0,  route:4}, {x:-3, y:-1, route:5}],
                        [{x:-1, y:-1, route:5}, {x:-3, y:-1, route:4}],
                        [{x:-1, y:-1, route:5}, {x:-2, y:-2, route:5}],
                        [{x:-2, y:0,  route:4}],
                        [{x:-1, y:-1, route:5}]]}
    ,{x:-3, y:-3, list:[[{x:-2 , y:0, route:4},{x:-3, y:-1, route:5},{x:-4, y:-2, route:5}],  // 7+5+3 kado
                        [{x:-1, y:-1, route:5},{x:-3, y:-1, route:4},{x:-4, y:-2, route:5}],
                        [{x:-1, y:-1, route:5},{x:-2, y:-2, route:5},{x:-4, y:-2, route:4}],
                        
                        [{x:-1, y:-1, route:5},{x:-2, y:-2, route:5},{x:-3, y:-3, route:5}],
                        
                        [{x:-1, y:-1, route:5},{x:-2, y:-2, route:5},{x:-1, y:-3, route:0}],
                        [{x:-1, y:-1, route:5},{x:0, y:-2,  route:0},{x:-1, y:-3, route:5}],
                        [{x:1,  y:-1, route:0},{x:0, y:-2,  route:5},{x:-1, y:-3, route:5}],
                        [{x:-2, y: 0, route:4}, {x:-3, y:-1, route:5}],
                        [{x:-1, y:-1, route:5}, {x:-3, y:-1, route:4}],
                        [{x:-1, y:-1, route:5}, {x:-2, y:-2, route:5}],
                        [{x:-1, y:-1, route:5}, {x: 0, y:-2, route:0}],
                        [{x: 1, y:-1, route:0}, {x: 0, y:-2, route:5}],
                        [{x:-2, y:0,  route:4}],
                        [{x:-1, y:-1, route:5}],
                        [{x:1,y:-1,   route:0}]]}
    ,{x:-1, y:-3, list:[[{x:-1, y:-1, route:5}, {x:-2, y:-2, route:5}, {x:-3, y:-3, route:5}],
                        [{x:-1, y:-1, route:5}, {x:-2, y:-2, route:5}, {x:-1, y:-3, route:0}],
                        [{x:-1, y:-1, route:5}, {x:0,  y:-2, route:0}, {x:-1, y:-3, route:5}],
                        [{x:1,  y:-1, route:0}, {x:0,  y:-2, route:5}, {x:-1, y:-3, route:5}],
                        
                        [{x:-1, y:-1, route:5}, {x:0,  y:-2, route:0}, {x:1,  y:-3, route:0}],
                        [{x:1,  y:-1, route:0}, {x:0,  y:-2, route:5}, {x:1,  y:-3, route:0}],
                        [{x:1,  y:-1, route:0}, {x:2,  y:-2, route:0}, {x:1,  y:-3, route:5}],
                        [{x:1,  y:-1, route:0}, {x:2,  y:-2, route:0}, {x:3,  y:-3, route:0}],
                        [{x:-1, y:-1, route:5}, {x:-2, y:-2,  route:5}],
                        [{x:-1, y:-1, route:5}, {x:0, y:-2,  route:0}],
                        [{x:1, y:-1,  route:0}, {x:0, y:-2,  route:5}],
                        [{x:1, y:-1,  route:0}, {x:2, y:-2,  route:0}],
                        [{x:-1, y:-1, route:5}],
                        [{x:1, y:-1,  route:0}]]}
];

var GG_PARTS_MOVE_ROUTE = [
	// 0
	[
		{x:0, y:0}
	]
	// 1 6
	,[
	  {x: 1, y: -1}
	  ,{x: 2, y: 0}
	  ,{x: 1, y: 1}
	  ,{x: -1, y: 1}
	  ,{x: -2, y: 0}
	  ,{x: -1, y: -1}
	  ]
	// 2 12
	,[
	  {x: 0, y: -2}
	  ,{x: 2, y: -2}
	  ,{x: 3, y: -1}
	  ,{x: 4, y: 0}
	  ,{x: 3, y: 1}
	  ,{x: 2, y: 2}
	  ,{x: 0, y: 2}
	  ,{x: -2, y: 2}
	  ,{x: -3, y: 1}
	  ,{x: -4, y: 0}
	  ,{x: -3, y: -1}
	  ,{x: -2, y: -2}
	  ]
	
	// 3 18
	,[
	  {x: 1, y: -3}
	  ,{x: 3, y: -3}
	  ,{x: 4, y: -2}
	  ,{x: 5, y: -1}
	  ,{x:  6, y: 0}
	  ,{x:  5, y: 1}
	  ,{x:  4, y: 2}
	  ,{x:  3, y: 3}
	  ,{x:  1, y: 3}
	  ,{x: -1, y: 3}
	  ,{x: -3, y: 3}
	  ,{x: -4, y: 2}
	  ,{x: -5, y: 1}
	  ,{x: -6, y: 0}
	  ,{x: -5, y: -1}
	  ,{x: -4, y: -2}
	  ,{x: -3, y: -3}
	  ,{x: -1, y: -3}
	]
	
	// 4 24
	,[
	  {x: 0, y: -4}
	  ,{x: 2, y: -4}
	  ,{x: 4, y: -4}
	  ,{x: 5, y: -3}
	  ,{x: 6, y: -2}
	  ,{x: 7, y: -1}
	  ,{x: 8, y:  0}
	  ,{x:  7, y: 1}
	  ,{x:  6, y: 2}
	  ,{x:  5, y: 3}
	  ,{x:  4, y:  4}
	  ,{x:  2, y:  4}
	  ,{x: 0, y:  4}
	  ,{x: -2, y:  4}
	  ,{x: -4, y:  4}
	  ,{x:  -5, y: 3}
	  ,{x: -6, y: 2}
	  ,{x: -7, y: 1}
	  ,{x: -8, y: 0}
	  ,{x: -7, y: -1}
	  ,{x: -6, y: -2}
	  ,{x: -5, y: -3}
	  ,{x: -4, y: -4}
	  ,{x: -2, y: -4}
	]
	
	// 5 30
	,[
	  {x: 1, y: -5}
	  ,{x: 3, y: -5}
	  ,{x: 5, y: -5}
	  ,{x: 6, y: -4}
	  ,{x:  7, y: -3}
	  ,{x:  8, y: -2}
	  ,{x:  9, y: -1}
	  ,{x:  10, y: 0}
	  ,{x:  9, y: 1}
	  ,{x:  8, y: 2}
	  ,{x:  7, y: 3}
	  ,{x:  6, y: 4}
	  ,{x:  5, y: 5}
	  ,{x:  3, y: 5}
	  ,{x:  1, y: 5}
	  ,{x:  -1, y: 5}
	  ,{x: -3, y:  5}
	  ,{x: -5, y:  5}
	  ,{x: -6, y:  4}
	  ,{x: -7, y:  3}
	  ,{x: -8, y:  2}
	  ,{x: -9, y:  1}
	  ,{x: -10, y:  0}
	  ,{x: -9, y: -1}
	  ,{x: -8, y: -2}
	  ,{x: -7, y: -3}
	  ,{x: -6, y: -4}
	  ,{x: -5, y: -5}
	  ,{x: -3, y: -5}
	  ,{x: -1, y: -5}		
	]
	
	// 6 36
	,[
	  {x: 0, y: -6}
	  ,{x: 2, y: -6}
	  ,{x: 4, y: -6}
	  ,{x: 6, y: -6}
	  ,{x: 7, y: -5}
	  ,{x: 8, y: -4}
	  ,{x: 9, y:  -3}
	  ,{x:  10, y: -2}
	  ,{x:  11, y: -1}
	  ,{x:  12, y:  0}
	  ,{x:  11, y:  1}
	  ,{x:  10, y:  2}
	  ,{x:  9, y:  3}
	  ,{x:  8, y:  4}
	  ,{x:  7, y:  5}
	  ,{x:   6, y: 6}
	  ,{x:  4, y: 6}
	  ,{x:  2, y: 6}
	  ,{x:  0, y: 6}
	  ,{x: -2, y:  6}
	  ,{x: -4, y:  6}
	  ,{x: -6, y:  6}
	  ,{x: -7, y:  5}
	  ,{x: -8, y:  4}
	  ,{x: -9, y:  3}
	  ,{x: -10, y:  2}
	  ,{x: -11, y:  1}
	  ,{x: -12, y:  0}
	  ,{x: -11, y: -1}
	  ,{x: -10, y: -2}
	  ,{x: -9, y: -3}
	  ,{x: -8, y: -4}
	  ,{x: -7, y: -5}
	  ,{x: -6, y: -6}
	  ,{x: -4, y: -6}
	  ,{x: -2, y: -6}

	]
	
	// 7 42
	,[
	  {x: 1, y: -7}
	  ,{x: 3, y: -7}
	  ,{x: 5, y: -7}
	  ,{x: 7, y: -7}
	  ,{x:  8, y: -6}
	  ,{x:  9, y: -5}
	  ,{x:  10, y: -4}
	  ,{x:  11, y: -3}
	  ,{x:  12, y: -2}
	  ,{x:  13, y: -1}
	  ,{x:  14, y:  0}
	  ,{x:  13, y: 1}
	  ,{x:  12, y: 2}
	  ,{x:  11, y: 3}
	  ,{x:  10, y: 4}
	  ,{x:  9, y: 5}
	  ,{x:  8, y:  6}
	  ,{x:  7, y:  7}
	  ,{x:  5, y:  7}
	  ,{x:  3, y:  7}
	  ,{x:  1, y:  7}
	  ,{x:  -1, y:  7}
	  ,{x:  -3, y:  7}
	  ,{x:  -5, y:  7}
	  ,{x:  -7, y:  7}
	  ,{x: -8, y:  6}
	  ,{x: -9, y:  5}
	  ,{x: -10, y:  4}
	  ,{x: -11, y:  3}
	  ,{x: -12, y:  2}		
	  ,{x: -13, y:  1}		
	  ,{x: -14, y:  0}		
	  ,{x: -13, y: -1}		
	  ,{x: -12, y: -2}		
	  ,{x: -11, y: -3}		
	  ,{x: -10, y: -4}		
	  ,{x: -9, y: -5}		
	  ,{x: -8, y: -6}		
	  ,{x: -7, y: -7}		
	  ,{x: -7, y: -7}		
	  ,{x: -7, y: -7}		
	  ,{x: -7, y: -7}		
	]

];

var GG_PARTS_CHAIN_PATTERN = [
         {x: 0, y: -2, moved_x:-1, moved_y:-1, defence_x:-1, defence_y:1, route:{attack:[5,0,3,2,5,2], defence:[6, 6, 3, 6,6,6],
                                                      counter:[2,5]}}
        ,{x: 0, y: -2, moved_x:1,  moved_y:-1, defence_x:1, defence_y:1, route:{attack:[0,5,2,3,0,3], defence:[6, 6, 2, 6,6,6],
                                                      counter:[3,0]}}
        ,{x: 2, y: -2, moved_x:1,  moved_y:-1, defence_x:-1, defence_y:1, route:{attack:[0,0,3,3,0,3], defence:[6, 6, 3, 6,6,6],
                                                      counter:[3,0]}}
        ,{x: 3, y: -1, moved_x:1,  moved_y:-1, defence_x:-2, defence_y:0, route:{attack:[0,1,4,3,0,3], defence:[6, 6, 4, 6,6,6],
                                                      counter:[3,0]}}
        ,{x: 3, y: -1, moved_x:2,  moved_y:0,  defence_x:-1, defence_y:1, route:{attack:[1,0,3,4,1,4], defence:[6, 6, 3, 6,6,6],
                                                      counter:[4,1]}}
        ,{x: 4, y:  0, moved_x:2,  moved_y:0,  defence_x:-2, defence_y:0, route:{attack:[1,1,4,4,1,4], defence:[6, 6, 4, 6,6,6],
                                                      counter:[4,1]}}
                                                      
        ,{x: 3, y:  1, moved_x:2,  moved_y:0,  defence_x:-1, defence_y:-1, route:{attack:[1,2,5,4,1,4], defence:[6, 6, 5, 6,6,6],
                                                      counter:[4,1]}}
        ,{x: 3, y:  1, moved_x:1,  moved_y:1,  defence_x:-2, defence_y:0, route:{attack:[2,1,4,5,2,5], defence:[6, 6, 4, 6,6,6],
                                                      counter:[5,2]}}
        ,{x: 2, y:  2, moved_x:1,  moved_y:1,  defence_x:-1, defence_y:-1, route:{attack:[2,2,5,5,2,5], defence:[6, 6, 5, 6,6,6],
                                                      counter:[5,2]}}
        ,{x: 0, y:  2, moved_x:1,  moved_y:1,  defence_x:1, defence_y:-1, route:{attack:[2,3,0,5,2,5], defence:[6, 6, 0, 6,6,6],
                                                      counter:[5,2]}}
        ,{x: 0, y:  2, moved_x:-1, moved_y:1,  defence_x:-1, defence_y:-1, route:{attack:[3,2,5,0,3,0], defence:[6, 6, 5, 6,6,6],
                                                      counter:[0,3]}}
                                                      
        ,{x:-2, y:  2, moved_x:-1, moved_y:1,  defence_x:1, defence_y:-1, route:{attack:[3,3,0,0,3,0], defence:[6, 6, 0, 6,6,6],
                                                      counter:[0,3]}}
        ,{x:-3, y:  1, moved_x:-1, moved_y:1,  defence_x:2, defence_y:0, route:{attack:[3,4,1,0,3,0], defence:[6, 6, 1, 6,6,6],
                                                      counter:[0,3]}}
        ,{x:-3, y:  1, moved_x:-2, moved_y:0,  defence_x:1, defence_y:-1, route:{attack:[4,3,0,1,4,1], defence:[6, 6, 0, 6,6,6],
                                                      counter:[1,4]}}
        ,{x:-4, y:  0, moved_x:-2, moved_y:0,  defence_x:2, defence_y:0, route:{attack:[4,4,1,1,4,1], defence:[6, 6, 1, 6,6,6],
                                                      counter:[1,4]}}
        ,{x:-3, y: -1, moved_x:-2, moved_y:0,  defence_x:1, defence_y:1, route:{attack:[4,5,2,1,4,1], defence:[6, 6, 2, 6,6,6],
                                                      counter:[1,4]}}
        ,{x:-3, y: -1, moved_x:-1, moved_y:-1, defence_x:2, defence_y:0, route:{attack:[5,4,1,2,5,2], defence:[6, 6, 1, 6,6,6],
                                                      counter:[2,5]}}
        ,{x:-2, y: -2, moved_x:-1, moved_y:-1, defence_x:1, defence_y:1, route:{attack:[5,5,2,2,5,2], defence:[6, 6, 2, 6,6,6],
                                                      counter:[2,5]}}
];

var GG_PARTS_COVER_PATTERN = [
   {x:-1, y:1,    route:[3, 7, 7, 0]}  
  ,{x:-2, y:0,    route:[4, 7, 7, 1]}  
  ,{x:-1, y:-1,   route:[5, 7, 7, 2]}  
  ,{x: 1, y:-1,   route:[0, 7, 7, 3]}  
  ,{x: 2, y:0,    route:[1, 7, 7, 4]}  
  ,{x: 1, y:1,    route:[2, 7, 7, 5]}
];

var GG_PARTS_ATTACK_NORMAL = [
   {x:1, y:-1,    route:[0, 3]}  
  ,{x:2, y:0,     route:[1, 4]}  
  ,{x:1, y:1,     route:[2, 5]}  
  ,{x:-1, y:1,   route:[3, 0]}  
  ,{x:-2, y:0,   route:[4, 1]}  
  ,{x:-1, y:-1,   route:[5, 2]}
];

var GG_PARTS_COUNTER_PATTERN = [
   {x:-1, y:1,    route:[6, 6, 3, 0]}  
  ,{x:-2, y:0,    route:[6, 6, 4, 1]}  
  ,{x:-1, y:-1,   route:[6, 6, 5, 2]}  
  ,{x: 1, y:-1,   route:[6, 6, 0, 3]}  
  ,{x: 2, y:0,    route:[6, 6, 1, 4]}  
  ,{x: 1, y:1,    route:[6, 6, 2, 5]}
];

var GG_PARTS_ATTACK_THUNDER = [
	{x:0, y:-2,
	 list:[
        {x:1, y:-3}
        ,{x:2, y:-2}
        ,{x:1, y:-1}
        ,{x:-1, y:-1}
        ,{x:-2, y:-2}
        ,{x:-1, y:-3}
		]
	}
	,{x:2, y:-2,
	 list:[
        {x:3, y:-3}
        ,{x:4, y:-2}
        ,{x:3, y:-1}
        ,{x:1, y:-1}
        ,{x:0, y:-2}
        ,{x:1, y:-3}
		]
	}
	,{x:3, y:-1,
	 list:[
        {x:4, y:-2}
        ,{x:5, y:-1}
        ,{x:4, y:0}
        ,{x:2, y:0}
        ,{x:1, y:-1}
        ,{x:2, y:-2}
		]
	}
	,{x:4, y:0,
	 list:[
        {x:5, y:-1}
        ,{x:6, y:0}
        ,{x:5, y:1}
        ,{x:3, y:1}
        ,{x:2, y:0}
        ,{x:3, y:-1}
		]
	}
	,{x:3, y:1,
	 list:[
        {x:4, y:0}
        ,{x:5, y:1}
        ,{x:4, y:2}
        ,{x:2, y:2}
        ,{x:1, y:1}
        ,{x:2, y:0}
		]
	}
	,{x:2, y:2,
	 list:[
        {x:3, y:1}
        ,{x:4, y:2}
        ,{x:3, y:3}
        ,{x:1, y:3}
        ,{x:0, y:2}
        ,{x:1, y:1}
		]
	}
	//
	,{x:0, y:2,
	 list:[
        {x:1, y:1}
        ,{x:2, y:2}
        ,{x:1, y:3}
        ,{x:-1, y:3}
        ,{x:-2, y:2}
        ,{x:-1, y:1}
		]
	}
	,{x:-2, y:2,
	 list:[
        {x:-1, y:1}
        ,{x:0, y:2}
        ,{x:-1, y:3}
        ,{x:-3, y:3}
        ,{x:-4, y:2}
        ,{x:-3, y:1}
		]
	}
	,{x:-3, y:1,
	 list:[
        {x:-2, y:0}
        ,{x:-1, y:1}
        ,{x:-2, y:2}
        ,{x:-4, y:2}
        ,{x:-5, y:1}
        ,{x:-4, y:0}
		]
	}
	,{x:-4, y:0,
	 list:[
        {x:-3, y:-1}
        ,{x:-2, y:0}
        ,{x:-3, y:1}
        ,{x:-5, y:1}
        ,{x:-6, y:0}
        ,{x:-5, y:-1}
		]
	}
	,{x:-3, y:-1,
	 list:[
        {x:-2, y:-2}
        ,{x:-1, y:-1}
        ,{x:-2, y:0}
        ,{x:-4, y:0}
        ,{x:-5, y:-1}
        ,{x:-4, y:-2}
		]
	}
	,{x:-2, y:-2,
	 list:[
        {x:-1, y:-3}
        ,{x:0, y:-2}
        ,{x:-1, y:-1}
        ,{x:-3, y:-1}
        ,{x:-4, y:-2}
        ,{x:-3, y:-3}
		]
	}
	
];

var GG_PARTS_ATTACK_WIND = [
	{x:0, y:-2,
	 list:[
		{x:-3, y:-1}
		,{x:-2, y:-2}
		,{x:2, y:-2}
		,{x:3, y:-1}
		]
	}
	,{x:2, y:-2,
	 list:[
		{x:-2, y:-2}
		,{x:0, y:-2}
		,{x:3, y:-1}
		,{x:4, y:0}
		]
	}
	,{x:3, y:-1,
	 list:[
		{x:0, y:-2}
		,{x:2, y:-2}
		,{x:4, y:0}
		,{x:3, y:1}
		]
	}
	,{x:4, y:0,
	 list:[
		{x:2, y:-2}
		,{x:3, y:-1}
		,{x:3, y:1}
		,{x:2, y:2}
		]
	}
	,{x:3, y:1,
	 list:[
		{x:3, y:-1}
		,{x:4, y:0}
		,{x:2, y:2}
		,{x:0, y:2}
		]
	}
	,{x:2, y:2,
	 list:[
		{x:4, y:0}
		,{x:3, y:1}
		,{x:0, y:2}
		,{x:-2, y:2}
		]
	}
	//
	,{x:0, y:2,
	 list:[
		{x:3, y:1}
		,{x:2, y:2}
		,{x:-2, y:2}
		,{x:-3, y:1}
		]
	}
	,{x:-2, y:2,
	 list:[
		{x:2, y:2}
		,{x:0, y:2}
		,{x:-3, y:1}
		,{x:-4, y:0}
		]
	}
	,{x:-3, y:1,
	 list:[
		{x:0, y:2}
		,{x:-2, y:2}
		,{x:-4, y:0}
		,{x:-3, y:-1}
		]
	}
	,{x:-4, y:0,
	 list:[
		{x:-2, y:2}
		,{x:-3, y:1}
		,{x:-3, y:-1}
		,{x:-2, y:-2}
		]
	}
	,{x:-3, y:-1,
	 list:[
		{x:-3, y:1}
		,{x:-4, y:0}
		,{x:-2, y:-2}
		,{x:0, y:-2}
		]
	}
	,{x:-2, y:-2,
	 list:[
		{x:-4, y:0}
		,{x:-3, y:-1}
		,{x:0, y:-2}
		,{x:2, y:-2}
		]
	}
	
];

var GG_PARTS_ATTACK_AX = [
   {x:1, y:-1,  list:[{x:-1, y:-1}, {x:2, y:0}],  route:[5, 1, 2, 4]}  
  ,{x:2, y:0,   list:[{x:1, y:-1},  {x:1, y:1}],  route:[0, 2, 3, 5]}  
  ,{x:1, y:1,   list:[{x:2, y:0}, {x:-1, y:1}],   route:[1, 3, 4, 0]}  
  ,{x:-1, y:1,  list:[{x:1, y:1}, {x:-2, y:0}],  route:[2, 4, 5, 1]}  
  ,{x:-2, y:0,  list:[{x:-1, y:1}, {x:-1, y:-1}], route:[3, 5, 0, 2]}  
  ,{x:-1, y:-1, list:[{x:-2, y:0}, {x:1, y:-1}],  route:[4, 0, 1, 3]}  
];

var GG_PARTS_ATTACK_SPEAR = [
   {x:1, y:-1,  list:[{x:2, y:-2}],  route:[0, 0, 3, 3]}  
  ,{x:2, y:0,   list:[{x:4, y:0}],   route:[1, 1, 4, 4]}  
  ,{x:1, y:1,   list:[{x:2, y:2}],   route:[2, 2, 5, 5]}  
  ,{x:-1, y:1,  list:[{x:-2, y:2}],  route:[3, 3, 0, 0]}  
  ,{x:-2, y:0,  list:[{x:-4, y:0}],  route:[4, 4, 1, 1]}  
  ,{x:-1, y:-1, list:[{x:-2, y:-2}], route:[5, 5, 2, 2]}  
];

var GG_PARTS_AVOID_MOVE_PATTERN = {
    normal:[
         {range: 1, list:[ {x:-1, y:1, route:[0, 3]}
                          ,{x:-2, y:0, route:[1, 4]}
                          ,{x:-1, y:-1, route:[2, 5]}
                          ,{x: 1, y:-1, route:[3, 0]}
                          ,{x: 2, y:0, route:[4, 1]}
                          ,{x: 1, y:1, route:[5, 2]}]}
        ,{range: 2, list:[ {x: 0, y:2, route:[0, 3]}
                          ,{x:-2, y:2, route:[0, 3]}
                          ,{x:-3, y:1, route:[1, 4]}
                          ,{x:-4, y:0, route:[1, 4]}
                          ,{x:-3, y:-1, route:[2, 5]}
                          ,{x:-2, y:-2, route:[2, 5]}
                          ,{x: 0, y:-2, route:[3, 0]}
                          ,{x: 2, y:-2, route:[3, 0]}
                          ,{x: 3, y:-1, route:[4, 1]}
                          ,{x: 4, y:0, route:[4, 1]}
                          ,{x: 3, y:1, route:[5, 2]}
                          ,{x: 2, y:2, route:[5, 2]}
                          ]}
        ,{range: 3, list:[ {x:-1, y: 3, route:[0, 3]}
                          ,{x:-3, y: 3, route:[0, 3]}
                          ,{x:-4, y: 2, route:[1, 4]}
                          ,{x:-5, y: 1, route:[1, 4]}
                          ,{x:-6, y: 0, route:[1, 4]}
                          ,{x:-5, y:-1, route:[2, 5]}
                          ,{x:-4, y:-2, route:[2, 5]}
                          ,{x:-3, y:-3, route:[2, 5]}
                          ,{x:-1, y:-3, route:[3, 0]}
                          ,{x: 1, y:-3, route:[3, 0]}
                          ,{x: 3, y:-3, route:[3, 0]}
                          ,{x: 4, y:-2, route:[4, 1]}
                          ,{x: 5, y:-1, route:[4, 1]}
                          ,{x: 6, y: 0, route:[4, 1]}
                          ,{x: 5, y: 1, route:[5, 2]}
                          ,{x: 4, y: 2, route:[5, 2]}
                          ,{x: 3, y: 3, route:[5, 2]}
                          ,{x: 1, y: 3, route:[0, 3]}
                          ]}
    ]
    ,spear:[
        {range: 1, list:[ {x:-1, y: 1, route:[2, 5]}
                         ,{x:-2, y: 0, route:[3, 0]}
                         ,{x:-1, y:-1, route:[4, 1]}
                         ,{x: 1, y:-1, route:[5, 2]}
                         ,{x: 2, y: 0, route:[0, 3]}
                         ,{x: 1, y: 1, route:[1, 4]}]
        }
    ]

    ,laser:[
        {range: 1, list:[ {x:-1, y: 1, route:[5, 2]}
                         ,{x:-2, y: 0, route:[0, 3]}
                         ,{x:-1, y:-1, route:[1, 4]}
                         ,{x: 1, y:-1, route:[2, 5]}
                         ,{x: 2, y: 0, route:[3, 0]}
                         ,{x: 1, y: 1, route:[4, 1]}]
        }
        ,{range: 2, list:[ {x:-2, y: 2, route:[5, 2]}
                          ,{x:-4, y: 0, route:[0, 3]}
                          ,{x:-2, y:-2, route:[1, 4]}
                          ,{x: 2, y:-2, route:[2, 5]}
                          ,{x: 4, y: 0, route:[3, 0]}
                          ,{x: 2, y: 2, route:[4, 1]}]
        }
        ,{range: 3, list:[ {x:-3, y: 3, route:[5, 2]}
                          ,{x:-6, y: 0, route:[0, 3]}
                          ,{x:-3, y:-3, route:[1, 4]}
                          ,{x: 3, y:-3, route:[2, 5]}
                          ,{x: 6, y: 0, route:[3, 0]}
                          ,{x: 3, y: 3, route:[4, 1]}]
        }
        ,{range: 4, list:[ {x:-4, y: 4, route:[5, 2]}
                          ,{x:-8, y: 0, route:[0, 3]}
                          ,{x:-4, y:-4, route:[1, 4]}
                          ,{x: 4, y:-4, route:[2, 5]}
                          ,{x: 8, y: 0, route:[3, 0]}
                          ,{x: 4, y: 4, route:[4, 1]}]
        }
        ,{range: 5, list:[ {x:-5, y: 5,  route:[5, 2]}
                          ,{x:-10, y: 0, route:[0, 3]}
                          ,{x:-5, y:-5,  route:[1, 4]}
                          ,{x: 5, y:-5,  route:[2, 5]}
                          ,{x: 10, y: 0, route:[3, 0]}
                          ,{x: 5, y: 5,  route:[4, 1]}]
        }
        ,{range: 6, list:[ {x:-6, y: 6,  route:[5, 2]}
                          ,{x:-12, y: 0, route:[0, 3]}
                          ,{x:-6, y:-6,  route:[1, 4]}
                          ,{x: 6, y:-6,  route:[2, 5]}
                          ,{x: 12, y: 0, route:[3, 0]}
                          ,{x: 6, y: 6,  route:[4, 1]}]
        }
        ,{range: 7, list:[ {x:-7, y: 7,  route:[5, 2]}
                          ,{x:-14, y: 0, route:[0, 3]}
                          ,{x:-7, y:-7,  route:[1, 4]}
                          ,{x: 7, y:-7,  route:[2, 5]}
                          ,{x: 14, y: 0, route:[3, 0]}
                          ,{x: 7, y: 7,  route:[4, 1]}]
        }
    ]

};


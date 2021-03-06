var Engine = Matter.Engine,
        Render = Matter.Render,
        Runner = Matter.Runner,
        Composites = Matter.Composites,
        Common = Matter.Common,
        MouseConstraint = Matter.MouseConstraint,
        Mouse = Matter.Mouse,
        World = Matter.World,
        Body = Matter.Body,
        Constraint = Matter.Constraint,
        Vertices = Matter.Vertices,
        Bodies = Matter.Bodies;
var obs = []

    // create engine
    var engine = Engine.create(),
        world = engine.world;

    // create renderer
    var w = window.innerHeight
    var h = window.innerHeight
    var render = Render.create({
        element: document.body,
        engine: engine,
        options: {
            width: w,
            height: h,
            showAngleIndicator: false,
            background: 'transparent',
            wireframes: false,
            wireframeBackground: 'transparent'
        }
    });
    Render.run(render);

    var runner = Runner.create();
    Runner.run(runner, engine);

    var dol = Vertices.fromPath('61,0 131.5,1.4 157.4,33.6 191.9,152.4 180.4,206.2 94.9,231 60,234.9 15.6,202.1 0,138.8 14.9,70 ')
    var dol2 = Vertices.fromPath('30.5,0 65.7,0.7 78.7,16.8 95.9,76.2 90.2,103.1 47.5,115.5 30,117.5 7.8,101 0,69.4 7.4,35')
    var skewed_cirs = Vertices.fromPath('177.24 0 27.67 0 0 20.41 0 40.81 149.28 40.81 177.24 20.41 177.24 0')
    var half_cir = Vertices.fromPath('64.1,12.3 31.1,19.3 19.3,27.9 10.3,152.7 16.3,159.4 47.2,173.2 81,173.2 111.9,159.4 134.6,134.3 145,102.1 141.5,68.5 124.6,39.2 97.2,19.3')
    var tri = Vertices.fromPath('60.8 0 121.7 107.6 0 107.6 60.8 0')
    var inv_tri = Vertices.fromPath('0 0 145.6 0 72.4 43.6 0 0')
    var skew = Vertices.fromPath('102.04 0 0 0 50.37 47.44 152.41 47.44 102.04 0')
    var fuck = Vertices.fromPath('136.06 0 68.04 0 68.04 64.06 0.01 64.06 0.01 96.09 0 96.1 0 97.01 204.09 97.01 204.09 64.06 136.06 64.06 136.06 0')
    var tri1 = Vertices.fromPath('16.7,5 162.3,5 89.1,48.6 ')
    var tri2 = Vertices.fromPath('71.1,9.1 10.3,116.7 132,116.7')
    var fuck_2 = Vertices.fromPath('239.6,83.5 119.8,83.5 119.8,196.4 0,196.4 0,252.8 0,252.8 0,254.4 359.4,254.4 359.4,196.4 239.6,196.4')
    var skewed_red = Vertices.fromPath('270.7,0 91,0 179.7,83.5 359.4,83.5')
    var skew_cir = Vertices.fromPath('26.2,0 15.1,0 5.5,13 0,35.4 0,61.3 5.5,83.7 15.1,96.6 26.2,96.6 35.8,83.7 41.4,61.3 41.4,35.4 35.8,13')
    var face_r = 75
    console.log(window.location.hash)
    var value = '#0.075,0.05,0.025,1.2,0.6,0,true,15000,0.1,75,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1'
    console.log(value === value)
    var value_array_n = value.split('#')[1].split(',')
    var blue_fric = Number(value_array_n[0])
    var red_fric = Number(value_array_n[1])
    var yellow_fric = Number(value_array_n[2])
    var blue_sec = Number(value_array_n[3])
    var red_sec = Number(value_array_n[4])
    var yellow_sec = Number(value_array_n[5])
    var isground =  value_array_n[6]
    var reset_term = Number(value_array_n[7])
    var res = Number(value_array_n[8])
    var face_r = Number(value_array_n[9])
$('document').ready(function(){
$('.face_wraps>div').css({'transform': 'scale(' + face_r / 75 + ') '})
      for (var i = 0; i < $('.value_input').length; i++) {
        $('.value_input').eq(i).val(value_array_n[i])
      }
        for (var i =  10; i < value_array_n.length; i++) {
            if(value_array_n[i]  == 1){
                document.getElementById("checkbox_"+(i-9)).checked = true;}
      }
})

    var offset = h*1.5
    var render_setting = [
        // blue
        {friction: 1, frictionAir: blue_fric, restitution : res, render: {fillStyle: '#0d3388'}},
        // red
        {friction: 1, frictionAir: red_fric, restitution : res, render: {fillStyle: '#e60013'}},
        // yellow
        {friction: 1, frictionAir: yellow_fric, restitution : res, render: {fillStyle: '#fff100'}},
        
        // red
        {friction: 1, frictionAir: red_fric, restitution : res, 
                            render: {sprite: {  texture: 'teeth-01.png',
                                                xScale: 0.8,
                                                yScale: 0.8}}},
        // 4 blue
        {friction: 1, frictionAir: blue_fric, restitution : res, 
                            render: {sprite: {  texture: 'skew_cir-01.png',
                                                xScale: 0.4,
                                                yScale: 0.4}}},
        // 5 red
        {friction: 1, frictionAir: red_fric, restitution : res, 
                            render: {sprite: {  
                                texture: 'dol.png',
                                                xScale: 0.7,
                                                yScale: 0.7}}},
        // 6 blue
        {friction: 1, frictionAir: blue_fric, restitution : res, 
                            render: {sprite: {  
                                texture: 'circles-01.png',
                                                xScale: 0.193,
                                                yScale: 0.193}},
            chamfer: { radius: 15 }
        },
        // 7 red
        {friction: 1, frictionAir: blue_fric, restitution : res, 
                            render: {sprite: {  
                                texture: 'circles-01.png',
                                                xScale: 0.193,
                                                yScale: 0.193}},
            chamfer: { radius: 15 }
        },
        {friction: 1, frictionAir: blue_fric, restitution : res, 
                            render: {sprite: {  
                                texture: 'circles-02.png',
                                                xScale: 0.193,
                                                yScale: 0.193}},
            chamfer: { radius: 15 }
        },
        {friction: 1, frictionAir: blue_fric, restitution : res, 
                            render: {sprite: {  
                                texture: 'circles-03.png',
                                                xScale: 0.193,
                                                yScale: 0.193}},
            chamfer: { radius: 15 }
        },
        // 10 red
        {friction: 1, frictionAir: red_fric, restitution : res, 
                            render: {sprite: {  texture: 'tri-01.png',
                                                xScale: 0.4,
                                                yScale: 0.4}}},
        // 11 red
        {friction: 1, frictionAir: red_fric, restitution : res, 
                            render: {sprite: {  texture: 'tri-02.png',
                                                xScale: 0.4,
                                                yScale: 0.4}}},
        // 12 yellow
        {friction: 1, frictionAir: yellow_fric, restitution : res, 
                            render: {sprite: {  texture: 'halfcir-01.png',
                                                xScale: 0.39,
                                                yScale: 0.39}}},
        // 13 blue
        {friction: 1, frictionAir: blue_fric, restitution : res, 
                            render: {sprite: {  
                                texture: 'dol2.png',
                                                xScale: 0.49,
                                                yScale: 0.49}}},
        // 14 blue
        {friction: 1, frictionAir: blue_fric, restitution : res, 
                            render: {sprite: {  
                                texture: 'skewed_circle.png',
                                                xScale: 0.24,
                                                yScale: 0.24}}},
    ]
    // 0:blue
    // 1:red
    // 2:yellow


    // 0:yellow
    // 3:red
    // 5:blue
    var additional_obj = [
        ]
    var obj_pre = [
    // red
        ['rec', 1,   1, 4.1,    3,  1, red_sec],
        ['rec', 6,   1,   6,  2.1,  1, red_sec],
        ['cir',    1,  13, 2.6 , 1, red_sec],
        ['svg',3,  6, tri1 ,   1, red_sec],
        ['svg',9,  5, tri2 ,   1, red_sec],
        ['svg',13.8,14, skewed_red ,1, red_sec],
        ['svg',15,  16, fuck ,   1, red_sec],


        ['cir', 1,   9, 3.2,    1, red_sec],
        ['rec',10,   9, 2.2,    2,  1, red_sec],
        ['cir', 7,  14,         2,  1, red_sec],
        ['rec',17,   8,   3,    2,  1, red_sec],
        ['rec',19,   4,   1,    3,  1, red_sec],
// 19
        // yellow
// 20
        ['rec', 1,   4, 6.4,    1,          2, yellow_sec],
        ['rec', 1,  10,   4,    5.5,        2, yellow_sec],
        ['cir', 13.8,   1,   1,   2, yellow_sec],
        ['cir', 15,     1,   1,   2, yellow_sec],
        ['cir', 12,     2.2,   1.8,   2, yellow_sec],
        ['cir', 14,     2.2,   1.8,   2, yellow_sec],

        // from here are additional
        ['cir', 10.5,   8.2,    3,     2, yellow_sec],
        ['rec', 14,      7,     1.2, 2.5,   2, yellow_sec],
        ['cir', 15.8,   7.5,    2,     2, yellow_sec],
        ['rec', 12,     10.2,   4, 2.5,     2, yellow_sec],
        ['rec', 10,     13.8,   1.5, 2.2,   2, yellow_sec],
        ['cir', 12.2,   13.2,   2.5,   2, yellow_sec],
        ['rec', 14.5,   15.2,   2.2, 2.2,   2, yellow_sec],
// 33
        // blue
        ['cir', 1,     1,   3,      0, blue_sec],
        ['cir', 1,     7,   1.2,    0, blue_sec],
        ['cir', 2.4,     7,   1.2,   0, blue_sec],
        ['cir', 3.8,     7,   1.2,   0, blue_sec],
        ['cir', 5.2,     7,   1.2,   0, blue_sec],
        ['cir', 2,     10,   2,   0, blue_sec],
        ['svg',5,  10, skew_cir ,   14, blue_sec],
        ['svg',7,  10, skew_cir ,   14, blue_sec , 'rot'],


        ['rec', 9,   4, 3,    3,                0, blue_sec],
        ['cir', 16.5,2.5, 3.5,          0, blue_sec],
        ['cir', 12,   8,    3,               0, blue_sec],

        ['rec', 15,   7, 3.2,    5.2,           0, blue_sec],
        ['rec', 12, 15,     2,    3,            0, blue_sec],
        ['rec', 15, 15, 3.6,   0.5,             0, blue_sec],
        ['rec', 0, 15.5, 6.2,   2.5,            0, blue_sec]
    ]
    var obj = []
        // for (var i = additional_obj.length - 1; i >= 0; i--) {
        //     obj.push(additional_obj[i])
        // }
    function adding_obj(elem, sec, spec){
        obs.push(elem)
        setTimeout(function(){World.add(world, elem);}, sec*4000);
        if(spec){
            console.log(spec)
            Matter.Body.setAngle(elem, -0.75);
        }
    }

    for (var i =  9; i < value_array_n.length-4; i++) {
        if(value_array_n[i] == 1){
            obj.push(obj_pre[i-10])
        }else{

        }
    }
Array.prototype.max = function() {
  return Math.max.apply(null, this);
};

Array.prototype.min = function() {
  return Math.min.apply(null, this);
};

$('document').ready(function(){
        $('#face_wrap').css({'margin-left':'-75px'})
        $('#face_wrap').css({'margin-top':'-75px'})
    })
setTimeout(function(){adding()}, 3000);
function adding(){
    adding_chain()
    var sec_array = [red_sec, blue_sec, yellow_sec]
    for (var i = obj.length - 1; i >= 0; i--) {
        if(obj[i][0] === 'svg'){
                var elem = Bodies.fromVertices(obj[i][1]*50, obj[i][2]*50 - offset, obj[i][3], render_setting[obj[i][4]]);
                adding_obj(elem, obj[i][5], obj[i][6])
        }
        if(obj[i][0] === 'rec'){
            var elem = Bodies.rectangle((obj[i][1]+(obj[i][3]/2))*50, (obj[i][2]+(obj[i][4]/2))*50 - offset , obj[i][3]*50, obj[i][4]*50, render_setting[obj[i][5]] );
                adding_obj(elem, obj[i][6])
        }
        if(obj[i][0] === 'cir'){
            var elem = Bodies.circle((obj[i][1]+(obj[i][3]/2))*50, (obj[i][2]+(obj[i][3]/2))*50 - offset , obj[i][3]/2*50, render_setting[obj[i][4]] );
                adding_obj(elem, obj[i][5])
        }
    }

}
// if($('checkbox_50'))
// if($('checkbox_49'))
console.log(value_array_n[51])
var chain_wrap = 
    [      

        [   ['cir', 2,     1,   0.5,   2, yellow_sec],
            ['cir', 2.5,   1,   0.5, 2, yellow_sec],
            ['cir', 3,   1,   0.5,   2, yellow_sec],
            ['cir', 3.5,   1,  0.5,   2, yellow_sec],
            ['cir', 4,     1,   0.5,   2, yellow_sec],
            ['cir', 4.5,   1,   0.5, 2, yellow_sec],
            ['cir', 5,   1,   0.5,   2, yellow_sec],
            ['cir', 5.5,   1,   0.5,   2, yellow_sec],
            ['cir', 6,     1,   0.5,   2, yellow_sec],
            ['cir', 6.5,   1,   0.5,   2, yellow_sec],   ],

        [   ['cir', 1,     6,   1.15,   2, yellow_sec],
            ['cir', 2.2,   6,   1.15,   2, yellow_sec],
            ['cir', 3.4,   6,   1.15,   2, yellow_sec], 
            ['cir', 4.6,   6,   1.15,   2, yellow_sec]   ]
    ]

function adding_chain(){
    console.log(value_array_n[53])
if(value_array_n[51] == 1){
    var k = 0
        var chain_array = []
        var constraint_array = []
        for (var i = 0; i < chain_wrap[k].length ; i++) {
            chain_array.push(Bodies.circle((chain_wrap[k][i][1]+(chain_wrap[k][i][3]/2))*50, (chain_wrap[k][i][2]+(chain_wrap[k][i][3]/2))*50 - offset, (chain_wrap[k][i][3]/2*50), render_setting[chain_wrap[k][i][4]]))
            if(i>0){
                constraint_array.push(
                    Constraint.create({ 
                        bodyA: chain_array[i],
                        bodyB: chain_array[i-1],
                        pointA: { x: 0, y:0  },
                        pointB: { x: 0, y:0  },
                    stiffness: 1,
                        render: {strokeStyle: 'transparent'}
                    })
                )
            }
            if(i == chain_wrap[k].length-1){
                console.log(chain_array)
                for (var j = chain_array.length - 1; j >= 0; j--) {
                    adding_obj(chain_array[j],yellow_sec)
                }
                for (var j = constraint_array.length - 1; j >= 0; j--) {
                    adding_obj(constraint_array[j],yellow_sec)
                }
            }
        }
}
if(value_array_n[52] == 1){
    var k = 1
        var chain_array = []
        var constraint_array = []
        for (var i = 0; i < chain_wrap[k].length ; i++) {
            chain_array.push(Bodies.circle((chain_wrap[k][i][1]+(chain_wrap[k][i][3]/2))*50, (chain_wrap[k][i][2]+(chain_wrap[k][i][3]/2))*50 - offset, (chain_wrap[k][i][3]/2*50), render_setting[chain_wrap[k][i][4]]))
            if(i>0){
                constraint_array.push(
                    Constraint.create({ 
                        bodyA: chain_array[i],
                        bodyB: chain_array[i-1],
                        pointA: { x: 0, y:0  },
                        pointB: { x: 0, y:0  },
                    stiffness: 1,
                        render: {strokeStyle: 'transparent'}
                    })
                )
            }
            if(i == chain_wrap[k].length-1){
                console.log(chain_array)
                for (var j = chain_array.length - 1; j >= 0; j--) {
                    adding_obj(chain_array[j],yellow_sec)
                }
                for (var j = constraint_array.length - 1; j >= 0; j--) {
                    adding_obj(constraint_array[j],yellow_sec)
                }
            }
        }
}

if(value_array_n[53] == 1){
// if($('checkbox_51'))
    var chain_3=[

        [   ['cir', 2,     1,   0.5,   0, blue_sec],
            ['cir', 2.5,   1,   0.5, 0, blue_sec],
            ['cir', 3,   1,   0.5,   0, blue_sec],
            ['cir', 3.5,   1,  0.5,   0, blue_sec],
            ['cir', 4,     1,   0.5,   0, blue_sec],
            ['cir', 4.5,   1,   0.5, 0, blue_sec],
            ['cir', 5,   1,   0.5,   0, blue_sec],
            ['cir', 5.5,   1,   0.5,   0, blue_sec],
            ['cir', 6,     1,   0.5,   0, blue_sec],
            ['cir', 6.5,   1,   0.5,   0, blue_sec],   ],
        ]


  
        var chain_array_3 = []
        var constraint_array_3 = []
        for (var i = 0; i < chain_3[0].length ; i++) {
            chain_array_3.push(Bodies.circle((chain_3[0][i][1]+(chain_3[0][i][3]/2))*50, (chain_3[0][i][2]+(chain_3[0][i][3]/2))*50 - offset, (chain_3[0][i][3]/2*50), render_setting[chain_3[0][i][4]]))
            if(i>0){
                constraint_array_3.push(
                    Constraint.create({ 
                        bodyA: chain_array_3[i],
                        bodyB: chain_array_3[i-1],
                        pointA: { x: 0, y:0  },
                        pointB: { x: 0, y:0  },
                    stiffness: 1,
                        render: {strokeStyle: 'transparent'}
                    })
                )
            }
            if(i == chain_3[0].length-1){
                for (var j = chain_array_3.length - 1; j >= 0; j--) {
                    adding_obj(chain_array_3[j],blue_sec)
                }
                for (var j = constraint_array_3.length - 1; j >= 0; j--) {
                    adding_obj(constraint_array_3[j],blue_sec)
                }
            }
        }
}
if(value_array_n[50] == 1){
    console.log('1')
// if($('checkbox_48'))
    var chain_red=[

        [   
            ['cir', 15.5,   1, 0.5 , 1, red_sec],
            ['cir', 15.2, 1.8, 0.8 , 1, red_sec],
            ['cir',   15, 2.8,   1 , 1, red_sec],
            ['cir', 14.8, 4.2, 1.2 , 1, red_sec],
            ['cir', 14.8, 5.7, 1.2 , 1, red_sec],
            ['cir', 14.2, 7.2, 1.8 , 1, red_sec],
            ['cir', 13.6, 9.2, 2.4 , 1, red_sec],   ],
        ]


  
        var chain_array = []
        var constraint_array = []
        for (var i = 0; i < chain_red[0].length ; i++) {
            chain_array.push(Bodies.circle((chain_red[0][i][1]+(chain_red[0][i][3]/2))*50, (chain_red[0][i][2]+(chain_red[0][i][3]/2))*50 - offset, (chain_red[0][i][3]/2*50), render_setting[chain_red[0][i][4]]))
            if(i>0){
                constraint_array.push(
                    Constraint.create({ 
                        bodyA: chain_array[i],
                        bodyB: chain_array[i-1],
                        pointA: { x: 0, y:0  },
                        pointB: { x: 0, y:0  },
                    stiffness: 1,
                        render: {strokeStyle: 'transparent'}
                    })
                )
            }
            if(i == chain_red[0].length-1){
                for (var j = chain_array.length - 1; j >= 0; j--) {
                    adding_obj(chain_array[j],red_sec)
                }
                for (var j = constraint_array.length - 1; j >= 0; j--) {
                    adding_obj(constraint_array[j],red_sec)
                }
            }
        }
//extra
}
}
if(!isground){
}else{
    var ground = Bodies.rectangle(w/2, h+25, w, 50, { isStatic: true })
}
    var wall1 = Bodies.rectangle(-25, h/2, 50, h, { isStatic: true })
    var wall2 = Bodies.rectangle(w+25, h/2, 50, h, { isStatic: true })
    var face1 = Bodies.circle(100, -100, face_r, { isStatic: true ,render: {fillStyle: '#00913a'}});
    var face2 = Bodies.circle(100, -100, face_r, { isStatic: true ,render: {fillStyle: '#00913a'}});
    var face3 = Bodies.circle(100, -100, face_r, { isStatic: true ,render: {fillStyle: '#00913a'}});
    var face4 = Bodies.circle(100, -100, face_r, { isStatic: true ,render: {fillStyle: '#00913a'}});
    console.log(isground === 'false')
if(isground === 'false'){
}else{
    World.add(world, [ground])
}

    World.add(world, [wall1, wall2])
    World.add(world, [face1,face2,face3,face4])




var rot = 0


    setTimeout(function(){reset_field()}, reset_term);
    function reset_field(){
            if(isground){
        Body.setPosition(ground, { x: w/2, y: 2*h+25}); }
        setTimeout(function(){
            for (var i = obs.length - 1; i >= 0; i--) {
                Matter.Composite.remove(world, obs[i])
            }
            adding()
            if(isground){
            Body.setPosition(ground, { x: w/2, y: h+25}); } 
            setTimeout(function(){reset_field()}, reset_term);
        }, 10000)
    }

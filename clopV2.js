var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
//var x = canvas.width/2;
//var y = canvas.height-30;

var CPressed = false;
var LPressed = false;
var OPressed = false;
var PPressed = false;

var headx = 300;
var heady = 50;
var bodyx = 100;
var bodyy = 50;
var frx = 300;
var fry = 200;
var flx = 300;
var fly = 200;
var brx = 150;
var bry = 200;
var blx = 150;
var bly = 200;


var head = new Image();
var body = new Image();
var frontright = new Image();
var frontleft = new Image();
var backright = new Image();
var backleft = new Image();
var backgroundduck = new Image();

function init() {
    head.src = 'images/pixel-rubber-duck.png';
    body.src = 'images/pixel-box.png';
    frontright.src = 'images/pixel-flower.png';
    frontleft.src = 'images/pixel-fork.png';
    backright.src = 'images/pixel-knife.png';
    backleft.src = 'images/pixel-trowel.png';

    backgroundduck.src = 'images/pixel-rubber-duck.png';


  //moon.src = 'https://mdn.mozillademos.org/files/1443/Canvas_moon.png';
  //earth.src = 'https://mdn.mozillademos.org/files/1429/Canvas_earth.png';
    window.requestAnimationFrame(draw);
}

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);


function keyDownHandler(e) {
    if(e.key == "c" || e.key == "C") {
        CPressed = true;
    }
    else if(e.key == "l" || e.key == "L") {
        LPressed = true;
    }
    else if(e.key == "o" || e.key == "O") {
        OPressed = true;
    }
    else if(e.key == "p" || e.key == "P") {
        PPressed = true;
    }
}

function keyUpHandler(e) {
    if(e.key == "c" || e.key == "C") {
        CPressed = false;
        ispeed += 0.01;
        ispeed = Math.min(0.1, ispeed);
    }
    else if(e.key == "l" || e.key == "L") {
        LPressed = false;
        jspeed += 0.01;
        jspeed = Math.min(0.1, jspeed);
    }
    else if(e.key == "o" || e.key == "O") {
        OPressed = false;
        kspeed += 0.01;
        kspeed = Math.min(0.1, kspeed);
    }
    else if(e.key == "p" || e.key == "P") {
        PPressed = false;
        lspeed += 0.01;
        lspeed = Math.min(0.1, lspeed);
    }
}

function drawHorse() {

    ctx.drawImage(body, bodyx, bodyy, 300, 150);
    ctx.drawImage(head, headx, heady, 50, 50);
    // ctx.drawImage(frontright, frx, fry, 30, 30);
    // ctx.drawImage(frontleft, flx, fly, 30, 30);
    // ctx.drawImage(backright, brx, bry, 30, 30);
    // ctx.drawImage(backleft, blx, bly, 30, 30);

}

var TO_RADIANS = Math.PI/180; 

function drawRotatedImage(image, x, y, angle) { 
 
    // save the current co-ordinate system 
    // before we mess with it
    ctx.save(); 
 
    // move to the middle of where we want to draw our image
    ctx.translate(x, y);
 
    // rotate around that point, converting our 
    // angle from degrees to radians 
    ctx.rotate(angle * TO_RADIANS);
 
    // draw it up and to the left by half the width
    // and height of the image 
    //ctx.drawImage(image, -(image.width/2), -(image.height/2));
    ctx.drawImage(image, -15, 0, 30, 90);

 
    // and restore the co-ords to how they were when we began
    ctx.restore(); 
}

var i = 0;
var j = 0;
var k = 0;
var l = 0;

var isin = 0;
var jsin = 0;
var ksin = 0;
var lsin = 0;

var ispeed = 0;
var jspeed = 0;
var kspeed = 0;
var lspeed = 0;

//var bgx = 0;
var bgy = 50;

var distance = 0;
var avspeed = 0;


function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); //wipes the canvas

    ctx.drawImage(backgroundduck, distance, bgy, 50, 50);


    drawHorse();
    drawRotatedImage(frontright, frx, fry, isin);
    drawRotatedImage(frontleft, flx, fly, jsin);
    drawRotatedImage(backright, brx, bry, ksin);
    drawRotatedImage(backleft, blx, bly, lsin);

    

    ispeed -= 0.0001;
    ispeed = Math.max(0, ispeed);
    jspeed -= 0.0001;
    jspeed = Math.max(0, jspeed);
    kspeed -= 0.0001;
    kspeed = Math.max(0, kspeed);
    lspeed -= 0.0001;
    lspeed = Math.max(0, lspeed);

    i += ispeed;
    j += jspeed;
    k += kspeed;
    l += lspeed;

    avspeed = (ispeed + jspeed + kspeed + lspeed)/4;

    isin = 60*Math.sin(i);
    jsin = 60*Math.sin(j);
    ksin = 60*Math.sin(k);
    lsin = 60*Math.sin(l);



    if(ispeed && jspeed && kspeed && lspeed) {
        distance = distance + avspeed;
    }

    requestAnimationFrame(draw);
}


init();

draw();
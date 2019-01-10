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

function init() {
    head.src = 'images/pixel-rubber-duck.png';
    body.src = 'images/pixel-box.png';
    frontright.src = 'images/pixel-flower.png';
    frontleft.src = 'images/pixel-fork.png';
    backright.src = 'images/pixel-knife.png';
    backleft.src = 'images/pixel-trowel.png';

  //moon.src = 'https://mdn.mozillademos.org/files/1443/Canvas_moon.png';
  //earth.src = 'https://mdn.mozillademos.org/files/1429/Canvas_earth.png';
    window.requestAnimationFrame(draw);
}

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);


function keyDownHandler(e) {
    if(e.key == "c" || e.key == "C") {
        CPressed = true;
        console.log("Pressed C");
    }
    else if(e.key == "l" || e.key == "L") {
        LPressed = true;
        console.log("Pressed L");
    }
    else if(e.key == "o" || e.key == "O") {
        OPressed = true;
        console.log("Pressed O");
    }
    else if(e.key == "p" || e.key == "P") {
        PPressed = true;
        console.log("Pressed P");
    }
}

function keyUpHandler(e) {
    if(e.key == "c" || e.key == "C") {
        CPressed = false;
        console.log("Pressed C");
    }
    else if(e.key == "l" || e.key == "L") {
        LPressed = false;
        console.log("Pressed L");
    }
    else if(e.key == "o" || e.key == "O") {
        OPressed = false;
        console.log("Pressed O");
    }
    else if(e.key == "p" || e.key == "P") {
        PPressed = false;
        console.log("Pressed P");
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


function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); //wipes the canvas

    drawHorse();
    drawRotatedImage(frontright, frx, fry, isin);
    drawRotatedImage(frontleft, flx, fly, jsin);
    drawRotatedImage(backright, brx, bry, ksin);
    drawRotatedImage(backleft, blx, bly, lsin);

    
    if(CPressed == true) {
        i += 0.05;
        isin = 60*Math.sin(i);
    }
    if(LPressed == true) {
        j += 0.05;
        jsin = 60*Math.sin(j);
    }
    if(OPressed == true) {
        k += 0.05;
        ksin = 60*Math.sin(k);
    }
    if(PPressed == true) {
        l += 0.05;
        lsin = 60*Math.sin(l);
    }

    requestAnimationFrame(draw);
}


init();

draw();
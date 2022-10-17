canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");


mars_pic = ["Mars1.jpg" , "Mars2.jpg" , "Mars3.jpg" , "Mars4.jpg" , "mars.jpg"];
random_number = Math.floor(Math.random()* 5);
console.log("Random Number = " + random_number);

roverWidth = 100;
roverHeight = 100;

roverX = 10;
roverY = 10;

background_image = mars_pic[random_number];
console.log("background_image = " + background_image);
rover_image = "rover.png"; 

function add() {
 background_imageTag = new Image();
 background_imageTag.onload = uploadBackground;
background_imageTag.src = background_image;

rover_imageTag = new Image();
rover_imageTag.onload = uploadRover;
rover_imageTag.src = rover_image;

}


function uploadBackground() {
ctx.drawImage(background_imageTag, 0 , 0 , canvas.width , canvas.height);


}

function uploadRover() {
ctx.drawImage(rover_imageTag, roverX , roverY , roverWidth , roverHeight);

}


window.addEventListener("keydown" , my_keydown );

function my_keydown(e) {

var keyPressed = e.keyCode;
console.log(keyPressed);

if (keyPressed == '37') {
Left();
console.log("Left");

}

if (keyPressed == '38') {
    Up();
    console.log("Up");
    
    }

    if (keyPressed == '39') {
        Right();
        console.log("Right");
        
        }


        if (keyPressed == '40') {
            Down();
            console.log("Down");
            
            }



}


function Up() {

if (roverY >= 0) {

roverY = roverY - 10;
console.log("when up arrow is pressed  , X = " + roverX + " Y = " + roverY);

uploadBackground();
uploadRover();
}



}

function Down() {

if (roverY <= 500) {

    roverY = roverY + 10;
    console.log("when up arrow is pressed  , X = " + roverX + " Y = " + roverY);


    uploadBackground();
    uploadRover();

}



}



function Left() {


    if (roverX >= 0) {
roverX = roverX - 10;
console.log("when up arrow is pressed  , X = " + roverX + " Y = " + roverY);
uploadBackground();
uploadRover();

    }



}



function Right() {

if (roverX <= 700) {

    roverX = roverX + 10;
    console.log("when up arrow is pressed  , X = " + roverX + " Y = " + roverY);
    uploadBackground();
    uploadRover();
}


}
var tom,tomwalk,toms;
var jarry,jarrys;
var garden,gardeni;


function preload() {
    //load the images here
jarry=loadImage("jerryOne.png");
tom = loadImage("tomOne.png");
//tomwalk=loadAnimation("tomFour.png");
gardeni=loadImage("garden.png");
}

function setup(){
    createCanvas(1000,800);

    garden=createSprite(500,400,10,10);
    garden.addImage("gardeni",gardeni)
    //create tom and jerry sprites here
    toms=createSprite(800,630,10,10);
    toms.addImage("tom",tom);
    toms.scale = 0.2;

    jarrys=createSprite(800,630,10,10);
    jaryys.addImage("jarry",jarry);    
}

function draw() {

    background("green");
    //Write condition here to evalute if tom and jerry collide
    keyPressed();
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


}

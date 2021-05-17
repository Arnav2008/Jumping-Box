var canvas;
var music;
var box1,box2,box3,box4;




function preload(){
    music = loadSound("music.mp3");


}


function setup(){
    canvas = createCanvas(800,600);

    box1=createSprite(80,580,150,20);
    box2=createSprite(280,580,150,20);
    box3=createSprite(490,580,150,20);
    box4=createSprite(700,580,150,20);
    block=createSprite(20,20,30,30);
    //create 4 different surfaces



    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite


drawSprites();
    //add condition to check if box touching surface and make it box
}











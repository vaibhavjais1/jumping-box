var canvas;
var block1,block2,block3,block4;
var music;
var ball,edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    block1 = createSprite(0,580,360,30);
     block1.shapeColor = "blue"
      block2 = createSprite(295,580,200,30);
      block2.shapeColor = "yellow";
      block3 = createSprite(515,580,200,30);
     block3.shapeColor = "green";
     block4 = createSprite(740,580,220,30);
     block4.shapeColor ="red";
     ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = "white";
     ball.velocityX = 4;
   ball.velocityY = 9;


    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
edges = createEdgeSprites()
ball.bounceOff(edges);

if(block1.isTouching(ball) && ball.bounceOff(block1)){
  ball.shapeColor = "blue"
  music.play();
}
if(block2.isTouching(ball) && ball.bounceOff(block2)){
    ball.shapeColor = "yellow"
    music.stop();
}
if(block3.isTouching(ball) && ball.bounceOff(block3)){
    ball.shapeColor = "green"
    music.play();
}
if(block4.isTouching(ball) && ball.bounceOff(block4)){
    ball.shapeColor = "red"
    music.stop();
}
 drawSprites();
} 

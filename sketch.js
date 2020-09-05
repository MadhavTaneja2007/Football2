var bg;
var form;
var gameState = 0;

function preload()
{
bg = loadImage("Images/WEMBLEY.jpg")
}

function setup() 
{
  createCanvas(1200,800);
 
}

function draw() 
{
  //background(bg);
  if(gameState === 0){
  
  form = new Form()
  form.display();}
  
  /*if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }

  
  
  drawSprites(); */
}


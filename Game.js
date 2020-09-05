class Game {
    constructor ()
    {

    }
    play(){
        form.hide();
        
        if(allPlayers !== undefined){
          image(bg, 0,displayHeight,displayWidth, displayHeight*5);
          
          
           
            if (index === player.index){
              stroke(10);
              fill("red");
              ellipse(x,y,60,60);
              cars[index - 1].shapeColor = "red";
              camera.position.x = displayWidth/2;
              camera.position.y = cars[index-1].y;
            }
           
        
          
    
        }
    
    
        
       
        drawSprites();
      }
        start()
        {
        if(gameState === 0){
          
          form = new Form()
          form.display();
        }
    
        car1 = createSprite(100,200);
        car2 = createSprite(300,200);
        
      } 
}

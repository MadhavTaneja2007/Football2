class Form {

    constructor() {
      
      this.button = createButton('Play');
      this.greeting = createElement('h2');
      this.title = createElement('h2');
      //this.reset = createButton('Reset');
    }
    hide(){
      this.greeting.hide();
      this.button.hide();
      this.input.hide();
      this.title.hide();
    }
  
    display(){
      this.title.html("Football");
      this.title.position(displayWidth/2 + 50, 125);
      var input = createInput("Name");
      input.position(displayWidth/2  , displayHeight/2 - 60);
      this.button.position(displayWidth/2 + 50 , displayHeight/2);
      //this.reset.position(displayWidth-100,20);
  
      this.button.mousePressed(()=>{
        input.hide();
        this.button.hide();
        var name = input.value();
        this.greeting.html("Hello " + name)
        this.greeting.position(displayWidth/2 + 50, displayHeight/4);
      }); 
    }
  }
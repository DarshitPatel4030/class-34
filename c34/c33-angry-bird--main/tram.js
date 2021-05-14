class Tram{
    constructor(x,y,width,height){
      var options ={ 
      isStatic:false
    }
      
      this.body =  Bodies.rectangle(x,y,width,height,options);
      World.add(myWorld,this.body);
      this.width = width;
      this.height = height;
      this.TRAM=loadImage("images/coach.png")
    }
    display()
    {
        imageMode(CENTER);
        image(this.TRAM,this.body.position.x, this.body.position.y,this.width, this.height);
    }
  
  
  }

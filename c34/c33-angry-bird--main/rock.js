class Rock{
    constructor(x,y,width,height){
      var options ={ 
      isStatic:false
    }
      
      this.body =  Bodies.rectangle(x,y,width,height,options);
      World.add(myWorld,this.body);
      this.width = width;
      this.height = height;
      this.Rock=loadImage("images/rock1.png")
    }
    display()
    {
        imageMode(CENTER);
        image(this.Rock,this.body.position.x, this.body.position.y,this.width, this.height);
    }
  
  
  }

class Rectangle {
    constructor(xr, yr, a, b, color = "red"){
      this.x = xr;
      this.y = yr;
      this.a = a;
      this.b = b;
      this.color = color;
      this.speed  = 10
    }
  
    moveup(){
      this.y-=this.speed;
      this.showRectangle()
      if (this.y <= 0){
        this.y = 0;
      }
  
    }
  
    movedown(){
      this.y+=this.speed;
      this.showRectangle()
      if(this.y + this.b >= height){
        this.y = height - this.b;
      }
  
    }
    
    moveright(){
      this.x+=this.speed;
      this.showRectangle()
      if(this.x + this.a >= width){
        this.x = width - this.a;
      }
  
    }
  
    movleft(){
      this.x-=this.speed;
      this.showRectangle()
      if(this.x <= 0){
        this.x = 0;
      }
  
    }
  
    showRectangle(){
      fill(this.color)
      rect(this.x, this.y, this.a, this.b)
      
    }
  
  }
  
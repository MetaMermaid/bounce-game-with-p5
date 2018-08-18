class Circle {
    constructor(cx, cy, cr, color) {
      this.x = cx;
      this.y = cy;
      this.rad = cr;
      this.color = color;
      this.directionX = random(-1, 1)
      this.directionY = random(-1, 1)
      this.speed= 2; 
  }
  
     checkCollision(obj){
        if(this.x > obj.x && this.x < obj.x+obj.a && this.y+this.rad/2 >= obj.y){
          score+=1;
          return true;    
        }
        else {
          return false;
        }
        
     }
    
    movecircle(){
      this.x += this.speed * this.directionX;
      this.y += this.speed * this.directionY;
  
      if (this.y >= height){
        this.directionY = 0
        background("red")
        textSize(64)
        fill("black")
        text("GAME OVER", width/4, height/2)
        noLoop()
        
        
      }
  
      if (this.y<=0){
        this.directionY =+1
      }
      
      if (this.x >= width){
        this.directionX =-1;
        
      }
  
      if(this.x <= 0){
        this.directionX =+1
        
      }
      
      fill(this.color);
      ellipse(this.x, this.y, this.rad);
    }
  }
  
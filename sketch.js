let score = 0;
let circle = {};
let rectangle = {};

function setup() {
  createCanvas(800, 600)
  background("black")
  circle = new Circle(random(0, width), random(0,height/2), 40, "red");
  rectangle = new Rectangle(400, 550, 100, 25);
}

function draw() {
  background("black")
  fill("blue")
  textSize(24)
  text("Score:"+score, 10, 25)
  if(circle.checkCollision(rectangle)){
    circle.color = "blue";
    circle.directionY*=-1
  }
  circle.movecircle()
  rectangle.showRectangle()

  if (keyIsDown(LEFT_ARROW)){
    rectangle.movleft()
  }

  if(keyIsDown(RIGHT_ARROW)){
    rectangle.moveright()
  }
  if(keyIsDown(UP_ARROW)){
    rectangle.moveup()
  }
  if(keyIsDown(DOWN_ARROW)){
    rectangle.movedown() 
  }
}

/*function keyPressed(){
  console.log(LEFT_ARROW);
  console.log(keyCode);
  if(keyCode === LEFT_ARROW){
    rectangle.movleft()
    
  }
  if(keyCode === RIGHT_ARROW){
    rectangle.moveright()
  }
  if(keyCode === UP_ARROW){
    rectangle.moveup()
  }
  if(keyCode === DOWN_ARROW){
    rectangle.movedown()
  }
}*/
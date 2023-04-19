let x;
let speedX;
let fishX, fishY

function setup() {
  createCanvas(400, 400);
  x = 10;
  speedX = 2;
  fishX = 5;
  fishY = 5;
}

function draw() {
  background(27, 149, 224);
  fill(92, 64, 51);
  rect(0,0,400,80);
    rect(0,190,400,50)
  rect(0,350,400,50) 
  
   fish(fishX, fishY);
  
  let car = new Car();
  car.show()
  car.update()
}


class Car {
  constructor(x, y, addX) {//setting up the variables to make them for the class
    this.x = x;
    this.y = y;
    this.addX = addX;
  }
  update() {//update the movement of the foxes
    this.x = this.x + this.addX;
    this.y = this.y;
    // Reverse if it hits a wall.
    let isTooFarLeft = (this.x < 0);
    let isTooFarRight = (this.x > width);
    if (isTooFarLeft || isTooFarRight) {
      this.addX = -this.addX;//spite changing direction
      this.y = random(height);
    }
  }
  show() {
    push();
    // translate(this.x, this.y);//drawing the fox sprite
    fill("white")
    rect(0, 85 ,40)
    pop();
  }
}

function fish(x, y){
  push();
  translate(x, y);
  noStroke();
  fill('green');
  rect(0, 350 ,40)
  pop();
}

function keyPressed(){
  if (keyCode == UP_ARROW){
    fishY -= 15;
  }
  if (keyCode == DOWN_ARROW) {
    fishY += 15;
  } 
  if (keyCode == RIGHT_ARROW) {
    fishX += 15; 
  }
  if (keyCode == LEFT_ARROW) {
    fishX -= 15;
  }
  }

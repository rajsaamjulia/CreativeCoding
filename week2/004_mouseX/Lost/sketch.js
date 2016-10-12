var mappedX;
var mappedY;
var lineWeight;

function setup() {
  createCanvas(windowWidth, windowHeight);
  //noStroke();
}

function draw(){
  mappedX = map (mouseX, 0, width, 0,255);
  mappedY = map (mouseY, 0, height, 200, 100);
  lineWeight = map(mouseX,0,width, 10, 0);
  strokeWeight(lineWeight);
  
  //background(mappedX); //value 0-255
  //print(mappedX);
  //fill(mappedX)
  noFill();
  stroke(random(255), random(255), random(255));
  ellipse(mouseX, mouseY, mappedY/2, mappedY/2);


}

function mousePressed (){
  background(255);
  
}
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw(){
  background(mouseX);
  print(mouseX, mouseY);
  ellipse(mouseX, mouseY, 40, 40);


}

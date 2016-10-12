function setup () {
  createCanvas (windowWidth, windowHeight);


}

function draw () {
  line(0,0,width, height);
  line (width, 0, height, 0);
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

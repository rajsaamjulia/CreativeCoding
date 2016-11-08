var img; // Declare variable 'img'.
var timeSlider; //slider of the timeline
var smallPoint, largePoint;

function preload() {
  img = loadImage("img.png");
}

function setup() {

  createCanvas(800,600);
  background(255);
  //img = loadImage("img.png");  // Load the image

  //SLIDER
  timeSlider = createSlider(0, 30, 0);
  timeSlider.position(20, 620);
  timeSlider.size(700);
  var t = timeSlider.value(); // set the timeline that defines the changes
  t = 0;

  //DOTS
  imageMode(LEFT);
  blendMode(REPLACE);
  smallPoint = 4;
  largePoint = 10;
  img.loadPixels();
  noStroke();
}

function draw() {
  // Displays the image at its actual size at point (0,0)
  image(img, 20, 20);

  //DOTS
  var pointillize = map(mouseX, 0, width, smallPoint, largePoint);
  var x = floor(random(img.width));
  var y = floor(random(img.height));
  var pix = img.get(x, y);
  fill(pix, 100);
  ellipse(x+20, y+20, pointillize, pointillize);

}


/* https://p5js.org/reference/#/p5/saveCanvas
https://p5js.org/reference/#/p5/saveFrames
https://p5js.org/reference/#/p5/tint */

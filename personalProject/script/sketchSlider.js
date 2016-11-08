var img; // Declare variable 'img'.
var timeSlider; //slider of the timeline
var smallPoint, largePoint;

function preload() {
  img = loadImage("img.jpg");
}

function setup() {

  //var c =
  createCanvas(720,550);
  background(255);
  textSize(20);
  //c.drop(gotFile);


  //img = loadImage("img.png");  // Load the image

  //SLIDER
  timeSlider = createSlider(0, 30, 0);
  timeSlider.position(20, 600);
  timeSlider.size(700); // set the timeline that defines the changes
  //t = 0;

  //image
  imageMode(LEFT);
  image(img, 20, 20);

  //text("TIME", 40, 600);

  //DOTS

  //blendMode(REPLACE);
  smallPoint = 4;
  largePoint = 10;
  img.loadPixels();
  noStroke();
}

function draw() {
  var t = timeSlider.value();

  //Drag and drop
  //fill(255);
  noStroke();
  textSize(24);
  textAlign(CENTER);
  //text('Drag an image file onto the canvas.', width/2, height/2);
  //noLoop();

  //DOTS
  var pointillize = map(mouseX, 0, width, smallPoint, largePoint);
  var x = floor(random(img.width));
  var y = floor(random(img.height));
  //var pix = img.get(x, y); //when it used the photo

  fill(0, t);
  ellipse(x+20, y+20, pointillize, pointillize);
}

/* https://p5js.org/reference/#/p5/saveCanvas
https://p5js.org/reference/#/p5/saveFrames
https://p5js.org/reference/#/p5/tint */

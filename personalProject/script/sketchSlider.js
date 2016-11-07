var img; // Declare variable 'img'.
var timeSlider; //slider of the timeline

function setup() {
  createCanvas(800, 600);
  img = loadImage("img.png");  // Load the image
  timeSlider = createSlider(0, 30, 0);
  timeSlider.position(20, 620);
  timeSlider.size(700);
}

function draw() {
  // Displays the image at its actual size at point (0,0)
  image(img, 20, 20);
  var t = timeSlider.value(); // set the timeline that defines the changes
  t = 0;

}

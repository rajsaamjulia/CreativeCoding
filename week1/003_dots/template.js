var width;
var height;


function setup() {
  width = 800;
  height = 600;
  createCanvas(width,height);
  background(176,176,176);
  frameRate(1);
  stroke(255);

}

function draw() {

  var xPos = width/8;
  var yPos = height/6;

  var grey = '#6D6D6D';
  var red = '#FF0000';

  var d = 50;

  noStroke();
  fill(grey);

  for (i = 0; i < 7; i++) {
    for (var j = 0; j < 5; j++) {
      if (i == 2 && j == 2) {
        fill(red)
        ellipse(xPos + i*xPos, yPos + j*yPos, d,d);
      } else {
        fill(grey)
        ellipse(xPos + i*xPos, yPos + j*yPos, d,d);
      }
    }
  }

}

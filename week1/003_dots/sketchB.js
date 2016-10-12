var width, height;

var xPos, yPos;

var counter = 0;
var d;

function setup() {
  width = 1000;
  height = 800;
  createCanvas (width,height);
  background(211, 211, 211);

}

function draw () {

  fill ("grey");
  noStroke ();
  //ellipse(100,100, 100, 100);

  xPos = width*0.06;
  yPos = height*0.07;
  y = 60;
  d = 30;

  for (var i = 0; i < 7; i++) {
    ellipse(xPos + i*xPos, yPos, d, d);

    for (var j = 0; j<5; j++) {
      ellipse (xPos + i*xPos, yPos + j*yPos, d, d);
    }

    yPos=height*0.07;
    xPos+=width*0.06 + width*0.01;
  }

}

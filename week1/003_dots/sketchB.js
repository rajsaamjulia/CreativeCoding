var width, height;

var xPos, yPos;


function setup() {
  width = 600;
  height = 600;
  createCanvas (width,height);
  background(211, 211, 211);
  frameRate(1);

}

function draw () {

  fill ("grey");
  noStroke ();
  //ellipse(100,100, 100, 100);

  var xPos = width*0.12;
  var yPos = height*0.12;
  d = 30;

  for (var i = 0; i < 7; i++) {
    ellipse(xPos + i*xPos, yPos, d, d);
    //var randomEllipse = ellipse[]

    for (var j = 0; j<6; j++) {
      ellipse (xPos + i*xPos, yPos + j*yPos, d, d);
    }
  }
//found: var randomItem = items[Math.floor(Math.random()*items.length)]

}

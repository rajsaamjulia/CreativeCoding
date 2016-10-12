var width, height;

var xPos, yPos;

var j = 0;

function setup() {
  width = 1000;
  height = 800;
  createCanvas (width,height);
  background(211, 211, 211);
  xPos = width;
  yPos = height;

}

function draw () {

  fill ("grey");
  noStroke ();
  //ellipse(100,100, 100, 100);

  xPos = width*0.12;
  yPos = height*0.15;
  y = 60;

  for ( var i = 0; i < 7; i++) {
    ellipse (xPos, yPos, width*0.08,width*0.08,);
    for var (j = 0; j<4; j++) {
      yPos+= height*0.12 + height*0.05;
      ellipse(xPos, yPos, width*0.1, width*0.1);
    }

    yPos=height*0.15;
    xPos+=width*0.12 + width*0.01;
  }



}

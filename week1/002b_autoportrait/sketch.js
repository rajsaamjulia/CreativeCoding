var width, height;

function setup() {

  width = 400;
  height = 300;
  createCanvas (700,700);
  background('white');
  frameRate(40);
}

function draw() {

  var xPos = width/16;
  var yPos = height/16;

  var grey = '#d3d3d3';
  var red = '#FF0000';

  var d = 8;


  fill(grey);
  noStroke();
  rect(width*0.04, height*0.04, 650, 650, 20);
  fill("white");
  arc(mouseX, mouseY, width*0.3,height*0.3, 0, 2*PI, CHORD);


  for (i = 0; i <15; i++) {
    for (var j = 0; j < 15; j++) {
      if (i == 7 && j == 7) {
        //nose
        fill(red)
        noStroke();
        ellipse(xPos + i*xPos, yPos + j*yPos, d*1.5,d*1.5);
      } else if ((i == 6 && j == 6) || (i == 8 && j == 6)) {
        //eyes
        fill(grey)
        ellipse(xPos + i*xPos, yPos + j*yPos, d*2,d*2);
      } else if (i == 7 && j == 8) {
        //mouth
        fill(grey)
        ellipse(xPos + i*xPos, yPos + j*yPos, d*4,d*2);
      } else {
        //other dots
        fill(grey);
        noStroke();
        ellipse(xPos + i*xPos, yPos + j*yPos, d,d);
      }
    }
  }


}

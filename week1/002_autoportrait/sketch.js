var xPos = 300;
var yPos = 50;
var d = 100;

var width, height;
var counter = 1;
var counter2 = 2;

function setup() {

  //print ("hello world");
  width = 400;
  height = 300;
  createCanvas (500,300);
  background(124,252,0);
  frameRate(1);
}

function draw() {
  //print(counter + counter2);
  //print ("hello world");
  fill(0,0,0);
  //rect(x,y,width,height);
  //rect(xPos,yPos,50,100);
  //line(x1,y1,x2,y2);
  line (150,250,width,height);
  //line(0,height,width,0);
  ellipse(width/2,height/2,d,d);
  ellipse(width/1.5,height/2,d/2,d/2);
}

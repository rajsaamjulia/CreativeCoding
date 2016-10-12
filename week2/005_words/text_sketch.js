//var text1 ="this is"
//var text2 ="so"
//var text3 ="mindblowing!"
var words = ["this", "is", "so", "mindblowing!"];

function setup(){
  
  createCanvas(windowWidth, windowHeight);
}

function draw(){
  
  background(255);
  //print(text1);
  textSize(40);
  //var phrase = text1 + text2 + text3;
  //text(phrase,50,500);
  //text(text1,50,100);
  //text(text2,50,100);
  //text(text3,50,100);
  for (var i=0; i<5; i++) {
    text(words[i],50,50 + 50*i);
  }
  
}

/* function mousePressed(){
  background(255);
} */


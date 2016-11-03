var words =
["in", "the", "beginning","there","was","the","word!"];

var words2 = ["wow", "hello"];
var outputText = "";

//var x=100;
//var y=100;

var offset = 30;
var counter = 0;

function setup (){
  print(words);
  print(words.length);
  createCanvas(windowWidth,windowHeight);
}

function draw(){
  counter += 1;
  if (counter % 120 == 0){
    //print("yeah");
    doPermutations();
  }
}

function mousePressed(){
  doPermutations();
}

function doPermutations(){
  //print("mouse meow");
  print (counter);
  //randomize the words
  //background(255);
  textSize(40);
  frameRate(60);

  shuffle(words, true);
  outputText = "";
  for (var i = 0; i<words.length; i+=1 ) {
    outputText = outputText+" "+ words[i];
    resizeCanvas(windowWidth,windowHeight+offset);

  }
  text(outputText, 100, 100+offset);
  offset += 40;
  //y = y + 50;
}

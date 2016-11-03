function setup(){

  createCanvas(windowWidth,windowHeight);
  loadJSON("data.json", drawData);
  print("... setting up ...");
  noStroke();
}

function draw (){

}

function drawData(data){
  print("... data loaded ...");
  //var circle1 = data["person1"].age*1;
  //var circle2 = data["person2"].age*1;
  //print(circle1);
  //print(data["person3"].age);
  //ellipse(100,100,circle1,circle1);
  //ellipse(200,200,circle2,circle2);
  var i = 1;
  print (data);
  for (var index in data) {
    var age = data[index].age *1;
    var ageCorrect = Math.sqrt(age / Math.PI)*10;
    var name = data[index].name;
    var colour = data[index].colour;
    //print(age);
    textAlign(CENTER, CENTER);
    fill (colour);
    fill(random(255),random(255),random(255));
    ellipse(100*i,100,ageCorrect,ageCorrect);
    fill(0);
    text(name, 100*i, 150);
    //text(string,x,y);
    i+= 1;
  }

}

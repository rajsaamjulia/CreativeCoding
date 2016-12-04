//Changing the sprites' animations
//position and transformations: rotation, scale, mirror
//move the mouse and click
//press and hold the up and down keys

var Dog;

function setup() {
  createCanvas(windowWidth, windowHeight);

  //create a sprite and add the 3 animations
  Dog = createSprite(400, 400, 25, 50);

  //label, first frame, last frame
  //the addAnimation method returns the added animation
  //that can be store in a temporary variable to change parameters
  var myAnimation = Dog.addAnimation("walking", "assets/DogMOVE_00000.png", "assets/DogMOVE_00049.png");
  //offX and offY is the distance of animation from the center of the sprite
  //in this case since the animations have different heights i want to adjust
  //the vertical offset to make the transition between floating and moving look better
  myAnimation.offY = 18;

  Dog.addAnimation("walking", "assets/dog_walk_00000.png", "assets/dog_walk_00019.png");

  //Dog.addAnimation("spinning", "assets/DogFront_01.png", "assets/DogFront_03.png");

  /*Dog.onMousePressed = function() {
    Dog.changeAnimation("spinning");
  }*/

}

function draw() {
  background(255,255,255);

  //or by applying a force toward a point
Dog.attractionPoint(.2, mouseX, mouseY);
//since the force keeps incrementing the speed you can
//set a limit to it with maxSpeed
Dog.maxSpeed = 5;

  //if mouse is to the left
  if(mouseX < Dog.position.x - 10) {
    Dog.changeAnimation("walking");
    //flip horizontally
    Dog.mirrorX(-1);
    //negative x velocity: move left
    Dog.velocity.x = - 4;
  }
  else if(mouseX > Dog.position.x + 10) {
    Dog.changeAnimation("walking");
    //unflip
    Dog.mirrorX(1);
    Dog.velocity.x = 4;
  }
  else {
    //if close to the mouse, don't move
    Dog.changeAnimation("walking");
    Dog.velocity.x = 0;
  }

    /*if(mouseIsPressed) {
      //the rotation is not part of the spinning animation
      Dog.rotation -= 10;
      Dog.changeAnimation("spinning");
    }
    else {
      Dog.rotation = 0;
    }*/
  //draw the sprite
  drawSprites();
}

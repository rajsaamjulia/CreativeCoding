//Changing the sprites' animations
//position and transformations: rotation, scale, mirror
//move the mouse and click
//press and hold the up and down keys

var Monster;

function setup() {
  createCanvas(windowWidth, windowHeight);

  //create a sprite and add the 3 animations
  Monster = createSprite(400, 400, 25, 50);

  //label, first frame, last frame
  //the addAnimation method returns the added animation
  //that can be store in a temporary variable to change parameters
  var myAnimation = Monster.addAnimation("floating", "assets/MonsterMOVE_00000.png", "assets/MonsterMOVE_00049.png");
  //offX and offY is the distance of animation from the center of the sprite
  //in this case since the animations have different heights i want to adjust
  //the vertical offset to make the transition between floating and moving look better
  myAnimation.offY = 18;

  Monster.addAnimation("moving", "assets/MonsterMOVE_00000.png", "assets/MonsterMOVE_00049.png");

  Monster.addAnimation("spinning", "assets/monsterFront_01.png", "assets/monsterFront_03.png");

  Monster.onMousePressed = function() {
    Monster.changeAnimation("spinning");
    }

}

function draw() {
  background(255,255,255);

  //or by applying a force toward a point
Monster.attractionPoint(.2, mouseX, mouseY);
//since the force keeps incrementing the speed you can
//set a limit to it with maxSpeed
Monster.maxSpeed = 5;

  //if mouse is to the left
  if(mouseX < Monster.position.x - 10) {
    Monster.changeAnimation("moving");
    //flip horizontally
    Monster.mirrorX(-1);
    //negative x velocity: move left
    Monster.velocity.x = - 4;
  }
  else if(mouseX > Monster.position.x + 10) {
    Monster.changeAnimation("moving");
    //unflip
    Monster.mirrorX(1);
    Monster.velocity.x = 4;
  }
  else {
    //if close to the mouse, don't move
    Monster.changeAnimation("floating");
    Monster.velocity.x = 0;
  }

    if(mouseIsPressed) {
      //the rotation is not part of the spinning animation
      Monster.rotation -= 10;
      Monster.changeAnimation("spinning");
    }
    else {
      Monster.rotation = 0;
      }
  //draw the sprite
  drawSprites();
}

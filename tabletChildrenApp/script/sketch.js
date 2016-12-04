//Changing the sprites' animations
//position and transformations: rotation, scale, mirror
//move the mouse and click
//press and hold the up and down keys

var Monster;

function setup() {
  createCanvas(windowWidth, windowHeight);

  //create a sprite and add the 3 animations
  Monster = createSprite(400, 400, 50, 100);

  //label, first frame, last frame
  //the addAnimation method returns the added animation
  //that can be store in a temporary variable to change parameters
  var myAnimation = Monster.addAnimation("floating", "assets/MonsterMOVE_00000.png", "assets/MonsterMOVE_00049.png");
  //offX and offY is the distance of animation from the center of the sprite
  //in this case since the animations have different heights i want to adjust
  //the vertical offset to make the transition between floating and moving look better
  myAnimation.offY = 18;

  Monster.addAnimation("moving", "assets/MonsterMOVE_00000.png", "assets/MonsterMOVE_00049.png");

  Monster.addAnimation("spinning", "monsterFront_01.png", "monsterFront_03.png");

}

function draw() {
  background(255,255,255);

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
  else
    Monster.rotation = 0;

  //draw the sprite
  drawSprites();
}

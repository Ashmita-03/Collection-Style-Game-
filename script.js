//Move the catcher with the left and right arrow keys to catch the falling apples.

/* VARIABLES */
let catcher, fallingObject;
let score = 0;
let backgroundImg;
let catcherImg; 
let fallingObjectImg;
//let fallingObjectText;


/* PRELOAD LOADS FILES */
function preload(){
  backgroundImg = loadImage("assets/grass.jpg");
  catcherImg = loadImage("assets/dustbin.jpeg");
  fallingObjectImg = loadImage("assets/trash1.png"); 
}
/* SETUP RUNS ONCE */
function setup() {
  createCanvas(400,410);
  
backgroundImg.resize(400,410);
catcherImg.resize(100,0);
fallingObjectImg.resize(29,0);
  
  //Create catcher 
  //catcher = new Sprite(catcherImg, 200,380,"k");
  catcher = new Sprite(catcherImg, 200,380,100,20,"k");
  catcher.color = color(95,158,160);
 
  //Create falling object
  fallingObject = new Sprite(fallingObjectImg,100,0,10);
  fallingObject.color = color(0,128,128);
  fallingObject.vel.y = 2;
  fallingObject.rotationLock = true;
  //fallingObject.text = random(fallingObjectText);
}

/* DRAW LOOP REPEATS */
function draw() {
  background(224,224,224);

  // Draw background image
image(backgroundImg,0,0);
  
  // Draw directions to screen
  fill("white");
  textSize(12);
  text("Move the \ncatcher with the \nleft and right \narrow keys to \ncatch the falling \nobjects.", width-100, 20);

  //if fallingObject reaches bottom, move back to random position at top
  if(fallingObject.y >= height) {
    fallingObject.y = 0;
    fallingObject.x = random(width);
    fallingObject.vel.y = random(1,5);
    
    //Mild
    score = score - 1;
}

  
  //Move catcher
  if (kb.pressing("left")) {
    catcher.vel.x = -4.5;
  } else if (kb.pressing("right")) {
    catcher.vel.x = 4.5;
  } else {
    catcher.vel.x = 0;
  }

  //Stop catcher at egdes of screen
  if (catcher.x < 50) {
    catcher.x = 50;
  } else if (catcher.x > 350) {
    catcher.x = 350;
  }

// If fallingObject collides with catcher, move back to random position at top
  if (fallingObject.collides(catcher)) {
    fallingObject.y = 0;
    fallingObject.x = random(width);
    fallingObject.vel.y = random(1,5);
    fallingObject.direction = "down";
    //fallingObject.text = random(fallingObjectText);
    score = score + 1
  }

  // Draw the score to screen
  fill(0,128,128);
  textSize(20);
  text("Score = " + score,10,30);

  //allSprites.debug = mouse.pressing();
}
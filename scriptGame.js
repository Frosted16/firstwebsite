/* global createCanvas, frameRate, background*/

var GameOn, lives, score, yPos_green;
var line1_x, line1_y, line1_length;
var line2_x, line2_y, line2_length;
var decreaseLength_line1, decreaseLength_line2;

function setup() {
  createCanvas(400, 400);
  frameRate(75);
  background(125, 127, 176);

  GameOn = true;
  decreaseLength_line1 = decreaseLength_line2 = 1;
  lives = 3;
  score = 0;
  yPos_green = 200;

  line1_x = 440;
  line1_y = random(50, 350);
  line1_length = random(20, 320);

  line2_x = 640;
  line2_y = random(50, 350);
  line2_length = random(20, 320);
}

function draw() {
  if (GameOn == true) {
    // start of GameOn
    background(125, 127, 176);
    noStroke();
    fill(151, 199, 193);

    if (lives == 3) {
      ellipse(30, 30, 30);
      ellipse(30, 70, 30);
      ellipse(30, 110, 30);
    } else if (lives == 2) {
      ellipse(30, 30, 30);
      ellipse(30, 70, 30);
    } else if (lives == 1) {
      ellipse(30, 30, 30);
    } else {
      GameOn = false;
    }
    rect(180, 15, 200, 60, 60);
    fill(0);
    textSize(32);
    text("Score:" + score, 220, 55);

    fill(199, 245, 193);
    ellipse(100, yPos_green, 30, 30);

    if (keyIsPressed && keyCode == UP_ARROW) {
      yPos_green -= 10; //yPos_green = yPos_green-10;
    } else {
      yPos_green += 10;
    }

    if (yPos_green >= 385) {
      yPos_green = 385;
    }
    if (yPos_green <= 15) {
      yPos_green = 15;
    }

    stroke(0);
    strokeWeight(4);

    line(line1_x, line1_y, line1_x + line1_length, line1_y);
    line(line2_x, line2_y, line2_x + line2_length, line2_y);
    //line(x1, y1, x2, y2)

    line1_x = line1_x - decreaseLength_line1;
    line2_x = line2_x - decreaseLength_line2;

    if (line1_x < 0 - line1_length) {
      line1_x = 400;
      line1_y = random(100, 350);
      line1_length = random(20, 320);
      decreaseLength_line1 += 0.5;
      lives--; //lives= lives-1; equal to lives-=1;
    }

    if (line2_x < 0 - line2_length) {
      line2_x = 400;
      line2_y = random(100, 350);
      line2_length = random(20, 320);
      decreaseLength_line2 += 0.5;
      lives--; //lives= lives-1; equal to lives-=1;
    }

    if (line1_y < yPos_green + 15 && line1_y > yPos_green - 15) {
      if (line1_x < 115 && line1_x + line1_length > 85) {
        line1_x = 400;
        score++;
        line1_y = random(100, 350);
        line1_length = random(20, 320);
        decreaseLength_line1 += 0.5;
      }
    }
    if (line2_y < yPos_green + 15 && line2_y > yPos_green - 15) {
      if (line2_x < 115 && line2_x + line2_length > 85) {
        line2_x = 400;
        score++;
        line2_y = random(100, 350);
        line2_length = random(20, 320);
        decreaseLength_line2 += 0.5;
      }
    }
  } //end of GameOn
  else {
    //what happens if GameOn == false
    background(125, 127, 176);
    noStroke();
    fill(199, 245, 193);
    rect(50, 100, 300, 200, 60);
    fill(199, 245, 193);
    rect(70, 120, 260, 56, 60);
    rect(70, 200, 260, 75, 60);

    fill(0); //fill(0,0,0);
    textSize(35);
    text("Score: " + score, 140, 159); //SCORE
    text("Restart", 160, 245); //RESTART BUTTON

    if (mouseIsPressed) {
      if (mouseX > 70 && mouseX < 330 && mouseY > 200 && mouseY < 275) {
        GameOn = true;
        decreaseLength_line1 = decreaseLength_line2 = 1;
        lives = 3;
        score = 0;
        yPos_green = 200;

        line1_x = 440;
        line1_y = random(50, 350);
        line1_length = random(20, 320);

        line2_x = 640;
        line2_y = random(50, 350);
        line2_length = random(20, 320);
      }
    }
  }
} //end of draw()

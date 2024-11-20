var cnv = document.getElementById("myCanvas");
var ctx = cnv.getContext("2d");
cnv.width = 700;
cnv.height = 500;

requestAnimationFrame(draw);
let treeRed = 0;
let treeBlue = 0;
let treeGreen = 100;
let col1 = 0;
let col2 = 0;
let col3 = 0;
let moonY = 20;
let sunY = 700;

function draw() {
  ctx.fillStyle = `rgb(${col1}, ${col2}, ${col3})`;
  ctx.fillRect(0, 0, cnv.width, cnv.height);

  col1 += 0.2;
  if (col1 >= 175) {
    col1 = 175;
  }

  col2 += 0.2;
  if (col2 >= 175) {
    col2 = 175;
  }

  col3 += 0.4;
  if (col3 >= 205) {
    col3 = 205;
  }

  moonY += 0.8;
  if (moonY >= 600) {
    moonY = 600;
  }

  sunY -= 0.8;
  if (sunY <= 20) {
    sunY = 20;
  }

  treeRed += 0.5;
  if (treeRed >= 200) {
    treeRed == 200;
  }

  treeBlue += 0.3;
  if (treeBlue >= 255) {
    treeBlue == 255;
  }

  treeGreen += 0.3;
  if (treeGreen >= 255) {
    treeGreen == 255;
  }

  //moon
  circle(700, moonY, 60, `rgb(211, 211, 211)`);

  //sun
  circle(30, sunY, 60, `rgb(253, 251, 211)`);

  //snow piles
  circle(500, 420, 60, "white");
  circle(275, 420, 50, "white");

  //snow
  ctx.fillStyle = "white";
  ctx.fillRect(0, 400, 700, 100);

  //tree 1
  ctx.fillStyle = "brown";
  ctx.fillRect(75, 250, 30, 205);
  ctx.fillRect(35, 340, 70, 15);
  tree(90, 250, 50, `rgb(${treeRed}, ${treeGreen}, ${treeBlue})`);

  //tree 2
  ctx.fillStyle = "brown";
  ctx.fillRect(200, 290, 20, 135);
  ctx.fillRect(170, 320, 50, 8);
  ctx.fillRect(200, 350, 40, 7);
  tree(210, 270, 30, `rgb(${treeRed}, ${treeGreen}, ${treeBlue})`);

  //tree 3
  ctx.fillStyle = "brown";
  ctx.fillRect(370, 290, 35, 195);
  ctx.fillRect(380, 370, 65, 10);
  ctx.fillRect(340, 395, 65, 10);
  tree(385, 290, 55, `rgb(${treeRed}, ${treeGreen}, ${treeBlue})`);

  //tree 4
  ctx.fillStyle = "brown";
  ctx.fillRect(600, 270, 20, 155);
  ctx.fillRect(550, 330, 50, 10);
  tree(610, 270, 40, `rgb(${treeRed}, ${treeGreen}, ${treeBlue})`);

  for (let i = 0; i < snowArray.length; i++) {
    ctx.fillStyle = `white`;
    ctx.beginPath();
    ctx.arc(snowArray[i].x, snowArray[i].y, snowArray[i].r, 0, 2 * Math.PI);
    ctx.fill();

    snowArray[i].x += snowArray[i].moveSpeed;
    snowArray[i].y += snowArray[i].fallSpeed;

    if (snowArray[i].x > cnv.width || snowArray[i].y > cnv.height) {
      //move to right of canvas
      snowArray[i].x = randomInt(-700, 650);
      snowArray[i].y = -10;
    }
  }

  requestAnimationFrame(draw);
}

function tree(x, y, r, color) {
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.arc(x, y, r, 0, 2 * Math.PI);
  ctx.fill();
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.arc(x + 23, y + 10, r - 10, 0, 2 * Math.PI);
  ctx.fill();
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.arc(x - 23, y + 10, r - 10, 0, 2 * Math.PI);
  ctx.fill();
}

function circle(x, y, r, color) {
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.arc(x, y, r, 0, 2 * Math.PI);
  ctx.fill();
}

let snowArray = [];

for (let i = 0; i < 100; i++) {
  snowArray.push({
    x: Math.random() * cnv.width,
    y: Math.random() * cnv.height,
    r: Math.random() * 2 + 1,
    color: "white",
    moveSpeed: randomInt(-1, Math.random() * 2),
    fallSpeed: randomInt(2, Math.random() * 3.5),
  });
}
console.log(snowArray);

document.addEventListener("keydown", keydownHandler);

function keydownHandler(event) {
  console.log(event.code);

  if (event.code == "ArrowRight") {
    for (let i = 0; i < 10; i++) {
      snowArray.push({
        x: Math.random() * cnv.width,
        y: Math.random() * cnv.height,
        r: Math.random() * 2 + 1,
        color: "white",
        moveSpeed: Math.random() * 0 + 1,
        fallSpeed: Math.random() * 2 + 1,
      });
    }
  }

  if (event.code == "ArrowLeft") {
    for (let i = 0; i < 10; i++) {
      snowArray.pop();
    }
  }

  if (event.code == "ArrowUp") {
    for (let i = 0; i < snowArray.length; i++) {
      if (snowArray[i].moveSpeed < 5) {
        snowArray[i].moveSpeed += 0.5;
      }
    }
  }

  if (event.code == "ArrowDown") {
    for (let i = 0; i < snowArray.length; i++) {
      if (snowArray[i].moveSpeed > -0.1) {
        snowArray[i].moveSpeed -= 0.5;
      }
    }
  }

  if (event.code == "KeyE") {
    treeBlue += 200;
    // for (let i = 0; i < 205; i++) {
    //   treeBlue += 100;
    //   if (treeBlue >= 205) {
    //     treeBlue = 205;
    //   }
    // }
  }
}

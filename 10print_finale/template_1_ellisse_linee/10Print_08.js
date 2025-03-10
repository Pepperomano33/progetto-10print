
let x = 0;
let y = 0;
let spacing = 18;
let randomValue = 0.5;
let ellipseRate = 2;
let rectRatio = 1;
let strokeW = 3;

function setup() {
  createCanvas(windowWidth, windowHeight);  
  background(255);
}

function draw() {
  linePattern();
}

function linePattern(){
  strokeWeight(strokeW);
  strokeCap(ROUND);
  stroke(0);
  noFill();

  let r = random(1);
  if(r < 0.33){
    line(x, y, x + spacing, y + spacing);
  } else if(r < 0.66){
    ellipse(x + spacing / 2, y + spacing / 2, spacing, spacing);
  } else {
    rect(x, y, spacing, spacing);
  }

  x += spacing;
  if (x > width) {
    x = 0;
    y += spacing;
  }
}

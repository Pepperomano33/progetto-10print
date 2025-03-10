
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

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function linePattern(){
  strokeWeight(strokeW);
  strokeCap(ROUND);
  stroke(0);
  noFill();

  let size = random(1) < 0.5 ? spacing * 0.5 : spacing;
  ellipse(x + spacing / 2, y + spacing / 2, size, size);

  x += spacing;
  if (x > width) {
    x = 0;
    y += spacing;
  }
}

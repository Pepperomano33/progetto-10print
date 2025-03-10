
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
  stroke(0);
  noFill();

  if(random(1) < 0.5){
    triangle(x, y, x + spacing, y, x + spacing / 2, y + spacing);
  } else {
    triangle(x, y + spacing, x + spacing, y + spacing, x + spacing / 2, y);
  }

  x += spacing;
  if (x > width) {
    x = 0;
    y += spacing;
  }
}

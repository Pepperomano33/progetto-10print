
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
  let r = random(1);
  if(r < 0.5){
    fill(0);
  } else {
    noFill();
  }
  rect(x, y, spacing, spacing);
  
  x += spacing;
  if (x > width) {
    x = 0;
    y += spacing;
  }
}

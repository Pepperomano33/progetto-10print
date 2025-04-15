
let x = 0; //coordinate di partenza//
let y = 0; //coordinate di partenza//
let spacing = 18; //distanza tra le figure//
let randomValue = 0.5;
let ellipseRate = 2;
let rectRatio = 1;
let strokeW = 3; //spessore//

function setup() {
  createCanvas(windowWidth, windowHeight); //Imposta la tela di disegno con la dimensione della finestra del browser//
  background(255); //Imposta lo sfondo della tela su bianco//
}

function draw() { //chiama la funzione linePattern()//
  linePattern();
}

function linePattern(){ //codice per disegnare forme//
  strokeWeight(strokeW); //imposta lo spessore del bordo dei rettangoli//
  stroke(0); //imposta il colore del bordo dei rettangoli (nero)//
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

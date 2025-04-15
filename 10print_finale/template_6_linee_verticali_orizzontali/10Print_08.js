
let x = 0; //coordinate di partenza//
let y = 0; //coordinate di partenza//
let spacing = 18; //distanza tra le figure//
let randomValue = 0.5;
let ellipseRate = 2;
let rectRatio = 1;
let strokeW = 3; //spessore//

function setup() {
  createCanvas(windowWidth, windowHeight);  //Imposta la tela di disegno con la dimensione della finestra del browser//
  background(255); //Imposta lo sfondo della tela su bianco//
}

function draw() { //chiama la funzione linePattern()//
  linePattern();
}

function linePattern(){ //codice per disegnare forme//
  strokeWeight(strokeW); //imposta lo spessore del bordo dei rettangoli//
  strokeCap(ROUND); //imposta la capocchia della linea su “round” (arrotondata)//
  stroke(0); //imposta il colore del bordo dei rettangoli (nero)//
  noFill(); //impedisce di riempire le linee, lasciandole vuote all’interno//

  if (random(1) < 0.5) {
    line(x, y, x + spacing, y); //viene disegnata una linea orizzontale//
  } else {
    line(x, y, x, y + spacing); //viene disegnata una linea verticale//
  }

  x += spacing;
  if (x > width) {
    x = 0;
    y += spacing;
  }
}

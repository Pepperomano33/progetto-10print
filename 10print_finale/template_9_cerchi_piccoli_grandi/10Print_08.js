
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
  strokeCap(ROUND);//imposta la capocchia della linea su “round” (arrotondata)//
  stroke(0); //imposta il colore del bordo dei rettangoli (nero)//
  noFill(); //impedisce di riempire le linee, lasciandole vuote all’interno//

  let size = random(1) < 0.5 ? spacing * 0.5 : spacing; //Se il valore casuale è inferiore a 0.5, la dimensione dell’ellisse sarà metà di spacing (spacing * 0.5), altrimenti sarà pari a spacing//
  ellipse(x + spacing / 2, y + spacing / 2, size, size); //disegna un’ellisse centrata nelle coordinate con larghezza e altezza pari a size//

  x += spacing;
  if (x > width) {
    x = 0;
    y += spacing;
  }
}

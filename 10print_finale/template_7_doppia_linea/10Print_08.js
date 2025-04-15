
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

  line(x, y, x + spacing, y + spacing); //crea una diagonale dalla parte in alto a sinistra verso il basso a destra//
  line(x + spacing, y, x, y + spacing); //crea una diagonale dalla parte in alto a destra verso il basso a sinistra//

  x += spacing;
  if (x > width) {
    x = 0;
    y += spacing;
  }
}

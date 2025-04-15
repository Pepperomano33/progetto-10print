
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
  stroke(0); //imposta il colore del bordo dei rettangoli (nero)//
  noFill(); //impedisce di riempire le linee, lasciandole vuote all’interno//

  if(random(1) < 0.5){
    triangle(x, y, x + spacing, y, x + spacing / 2, y + spacing); //disegna un triangolo con la punta verso l’alto.//
  } else {
    triangle(x, y + spacing, x + spacing, y + spacing, x + spacing / 2, y); //disegna un triangolo con la punta verso il basso//
  }

  x += spacing;
  if (x > width) {
    x = 0;
    y += spacing;
  }
}


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
  stroke(random(255), random(255), random(255)); //imposta il colore del bordo della linea in modo casuale//

  if(random(1) < randomValue){
    line(x, y, x + spacing, y + spacing); //viene disegnata una linea crescente//
  } else {
    line(x, y + spacing, x + spacing, y); //viene disegnata una linea decrescente
  }

  x += spacing;
  if (x > width) {
    x = 0;
    y += spacing;
  }
}

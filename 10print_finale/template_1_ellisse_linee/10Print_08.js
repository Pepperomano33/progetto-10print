
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

  let r = random(1); //genera un numero casuale tra 0 e 1//
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

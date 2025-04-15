
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

  push(); //salva lo stato attuale delle trasformazioni//
  translate(x + spacing / 2, y + spacing / 2); //sposta il sistema di coordinate in modo che il quadrato venga disegnato al centro di ogni cella della griglia//
  rotate(PI / 4); //ruota il sistema di coordinate di 45 gradi//
  rectMode(CENTER); //imposta il sistema di coordinate per il rettangolo in modo che il suo punto di riferimento sia il centro del quadrato anziché l’angolo in alto a sinistra//
  rect(0, 0, spacing * 0.8, spacing * 0.8); //disegna un quadrato centrato nel sistema di coordinate traslato e ruotato. La dimensione del quadrato è 80% di spacing//
  pop(); //ripristina lo stato delle trasformazioni precedenti, tornando al sistema di coordinate originale//

  x += spacing;
  if (x > width) {
    x = 0;
    y += spacing;
  }
}

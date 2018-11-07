let angle = 0;
let singer;
// let capture;

function preload(){
  singer=loadImage("img/tyle.png")
}

function setup(){
  createCanvas(1000,500,WEBGL);
  // capture = createCapture(VIDEO);
  // capture.size(320,240);
  // capture.hide();
}

function draw(){
  let dx=mouseX-width/2;
  let dy=mouseY-height/2;
  let v= createVector(dx,dy,0);
  v.div(100);

  directionalLight(255,0,0,v);
  ambientLight(255);

  background(255);

  noStroke();

  rectMode(CENTER);

  rotateY(angle);
  rotateX(angle*0.3);
  rotateZ(angle*0.2)

  texture(singer);
  // ambientMaterial(255);
  // rect(0,0,150,150);
  translate(0,0,mouseX-width/2);
  sphere(100);


  angle += 0.07;

}

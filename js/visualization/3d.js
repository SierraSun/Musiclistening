let angle = 0;
let singer;
// let capture;

function preload(){
  singer=loadImage("img/tyle.png")
}

function setup(){
  createCanvas(1000,600,WEBGL);
  // capture = createCapture(VIDEO);
  // capture.size(320,240);
  // capture.hide();
}


function draw(){
  let dx=mouseX-width/2;
  let dy=mouseY-height/2;
  let v= createVector(dx,dy,0);
  v.div(100);

  let camX = map(mouseX,0,width,-100,0);

  camera(camX,0,(height/2)/tan(PI/6),camX,0,0,0,1,0);

  let fov = map(mouseX,0,width,0,PI);
  let cameraZ = (height/2.0) / tan(fov/2.0);
  perspective(fov, width/height, cameraZ/10.0, -100);

  directionalLight(255,0,0,v);
  ambientLight(255);

  background(0);

  rectMode(CENTER);

  for (let x=-200; x<200; x+=50){
  push();
  rotateY(angle);
  rotateX(angle*0.3);
  rotateZ(angle*0.3);

  translate(mouseX/2,0,0);
  noStroke();
  texture(singer);
  // ambientMaterial(255);
  // rect(0,0,150,150);
  sphere(50);
  pop();
}
  translate(0,100);

  angle += 0.01;

}

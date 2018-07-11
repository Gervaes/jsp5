

function setup() {
  createCanvas(600,600);
  angleMode(DEGREES);
}

function draw() {
  
  let hr = hour();
  let mn = minute();
  let sc = second();

  background(255);

  fill(255);
  noStroke();
  text(hr + ':' + mn + ':' + sc,10,20);

  translate(width/2,width/2);
  rotate(-90);

  noFill();
  stroke(255);
  //ellipse(300,300,500,500);
  
  push();
  rotate(map(sc,0,60,0,360));
  stroke(map(sc,0,60,0,225));
  line(0,0,200,0);
  pop();

  push();
  rotate(map(mn,0,60,0,360));
  stroke(map(mn,0,60,0,225));
  line(0,0,150,0);
  pop();

  push();
  rotate(map(hr%12,0,12,0,360));
  stroke(map(hr%12,0,12,0,225));
  line(0,0,75,0);
  pop();

  strokeWeight(30);
  stroke(0);
  point(0,0);

  strokeWeight(10);
  
  stroke(map(sc,0,60,0,225));
  arc(0,0,500,500,0,map(sc,0,60,0,360));
  
  stroke(map(mn,0,60,0,225));
  arc(0,0,475,475,0,map(mn,0,60,0,360));
  
  stroke(map(hr%12,0,12,0,225));
  arc(0,0,450,450,0,map(hr%12,0,12,0,360));
}
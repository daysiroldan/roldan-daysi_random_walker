let w1;
let w2;
let w3;

function setup() {
  createCanvas(windowWidth, windowHeight);
  w1 = new Walker(200, 200);
  w2 = new Walker(300, 300);
  w3 = new Walker(500, 500);

}

function draw() {
  w1.update();
  w1.display();
  w2.update();
  w2.display();
  w3.update();
  w3.display();




}
class Walker {
  constructor(_x, _y) {
    this.posx = _x;
    this.posy = _y;
    this.vel = random(1, 10);
    this.color = color(255, random(0, 200), random(0, 200));
    this.esCirculo = random() > 0.5 ? true : false;

    // this.r = random();
    // this.esCirculo;
    // if (this.r > 0.5) {
    //   this.esCirculo = true;
    // } else {
    //   this.esCirculo = false
    // }

  }

  update() {
    this.posx += random(-this.vel, this.vel);
    this.posy += random(-this.vel, this.vel);
  }

  display() {
    fill(this.color);
    noStroke();
    if (this.esCirculo) {
      circle(this.posx, this.posy, 10);
    } else {
      rect(this.posx, this.posy, 10, 10);
    }
  }
}
var particles = [];
var button;
var container;
var rain = [];
var h;
var w;


//centers the canvas, both horizontally and vertically
function centerCanvas() {
    w = (windowWidth - width) / 2;
    h = (windowHeight - height) / 2;
    container.position(w, h);
}

function setup() {
    container = createCanvas(500, 325);
    centerCanvas();
    background(14, 177, 210);
    var button = createButton("Make it Snow!");
    button.mousePressed(makeItRain);

}

function makeItRain(){
  for (var i = 0; i < 300; i++) {
      var rainDrops = new Drop(random(0, width), 0);
      rain.push(rainDrops);
  }
}

function windowResized() {
    centerCanvas();
}

// P5 calls this function at 'frameRate' frames per second
function draw() {
    strokeWeight(0);

    background(14, 177, 210);

    ellipse(30, 10, 65, 65);
    ellipse(85, 10, 65, 65);
    ellipse(140, 10, 65, 65);
    ellipse(195, 10, 65, 65);
    ellipse(250, 10, 65, 65);
    ellipse(305, 10, 65, 65);
    ellipse(360, 10, 65, 65);
    ellipse(415, 10, 65, 65);
    ellipse(470, 10, 65, 65);
    ellipse(60, 25, 65, 65);
    ellipse(115, 35, 65, 65);
    ellipse(170, 25, 65, 65);
    ellipse(225, 35, 65, 65);
    ellipse(280, 30, 65, 65);
    ellipse(335, 35, 65, 65);
    ellipse(390, 30, 65, 65);
    ellipse(445, 25, 65, 65);

    for (var i = 0; i < rain.length; i++) {
        rain[i].drawDrops();
    }
}

function Drop(x, y) {
    this.x = x;
    this.y = y;

    this.velX = random(-1, 1);
    this.velY = random(-1, 1);

    this.gravity = 0.1;

    // The function updates the position, and draws the ellipse using p5
    this.drawDrops = function() {
        //Apply gravity (which is the rate of change of the Y velocity)
        this.velY += this.gravity;

        // Apply velocity to the position
        this.x += this.velX;
        //this.y += this.velY;

        strokeWeight(0);

        // Finally, draw the circle on the canvas
        ellipse(this.x, this.y, 5, 5);

        this.y = this.y + random(0,325);

        if (this.y > 325) {
          this.y = 0;
        }
    }
}

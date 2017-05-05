var img;  // Declare variable 'img'.
var rain = [];

function setup() {
  var myCanvas = createCanvas(325, 160);
  myCanvas.parent('canvasDiv');
  //img = loadImage("Boo.png");  // Load the image
  img = loadImage("castle.jpeg");

  for (var i = 0; i < 300; i++) {
      var rainDrops = new Drop(random(0, 325), 0);
      rain.push(rainDrops);
  }
}

function draw() {
  image(img, 0, 0);
  //image(img, 0, height/2, img.width/2, img.height/2);
  for (var i = 0; i < rain.length; i++) {
      rain[i].drawDrops();
  }
}

function Drop(x, y) {
    this.x = x;
    this.y = y;

    this.velX = random(-.5, .5);
    this.velY = random(-.5, .5);

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

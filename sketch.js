var canvasWidth;
var canvasHeight;
var planeSize;
var cornerValue;
var blueBox;
var whiteBox;
var redBox;
var greenBox;

function setup() {
    frameRate(60);
    canvasWidth = (displayWidth - displayWidth / 80);
    canvasHeight = (displayHeight - displayHeight / 7);
    planeSize = displayHeight * (.9);
    cornerValue = planeSize * (.4);
    createCanvas(canvasWidth, canvasHeight, WEBGL);
    //controls options : wasd, ARROWS, ijkl, 8456
    blueBox = new Bike("Blue", "ARROWS");
    whiteBox = new Bike("White", "wasd");
    redBox = new Bike("Red", "ijkl");
    greenBox = new Bike("Green", "8456");
}

function draw() {
    background(0);
    setCamera(70.0, 200.0, 120.0, 50.0, 50.0, 0.0, 0.0, 1.0, 0.0, 50, canvasHeight - canvasHeight * (.9), canvasHeight - canvasHeight * (.85), -PI / 6);
    setPlane(153, 172, 204, planeSize);
    blueBox.move();
    blueBox.display();
    whiteBox.move();
    whiteBox.display();
    greenBox.move();
    greenBox.display();
    redBox.move();
    redBox.display();
}

function setCamera(eyeX, eyeY, eyeZ, ceneterX, centerY, centerZ, upX, upY, upZ, t1, t2, t3, rotation) {
    camera(eyeX, eyeY, eyeZ, ceneterX, centerY, centerZ, upX, upY, upZ);
    translate(t1, t2, t3);
    rotateX(rotation);
};

function setPlane(c1, c2, c3, size) {
    fill(c1, c2, c3);
    plane(size);
};

function Bike(c, controls) {
    this.c = c;
    this.controls = controls;
    if (this.c == "Green") {
        this.c1 = 0;
        this.c2 = 255;
        this.c3 = 0;
        this.translationX = cornerValue;
        this.translationY = cornerValue;
        this.rads = 0;
        this.xVelocity = 3;
        this.yVelocity = 0;
    }
    if (this.c == "Red") {
        this.c1 = 255;
        this.c2 = 0;
        this.c3 = 0;
        this.translationX = cornerValue;
        this.translationY = -cornerValue;
        this.rads = PI;
        this.xVelocity = -3;
        this.yVelocity = 0;
    }
    if (this.c == "White") {
        this.c1 = 255;
        this.c2 = 255;
        this.c3 = 255;
        this.translationX = cornerValue;
        this.translationY = -cornerValue;
        this.rads = PI;
        this.xVelocity = -3;
        this.yVelocity = 0;
    }
    if (this.c == "Blue") {
        this.c1 = 0;
        this.c2 = 0;
        this.c3 = 255;
        this.translationX = -cornerValue;
        this.translationY = -cornerValue;
        this.rads = 0;
        this.xVelocity = 3;
        this.yVelocity = 0;
    }
    this.display = function () {
        fill(this.c1, this.c2, this.c3);
        translate(this.translationX, this.translationY, 5);
        rotateZ(this.rads);
        box(30, 10, 10);
    }
    this.move = function () {
        this.translationX = this.translationX + this.xVelocity;
        this.translationY = this.translationY + this.yVelocity;
        if (this.controls == "ARROWS") {
            if (keyCode == UP_ARROW) {
                this.rads = HALF_PI;
                this.xVelocity = 0;
                this.yVelocity = -3;
            }
            else if (keyCode == LEFT_ARROW) {
                this.rads = PI;
                this.xVelocity = -3;
                this.yVelocity = 0;
            }
            else if (keyCode == DOWN_ARROW) {
                this.rads = PI + HALF_PI;
                this.xVelocity = 0;
                this.yVelocity = 3;
            }
            else if (keyCode == RIGHT_ARROW) {
                this.rads = 0;
                this.xVelocity = 3;
                this.yVelocity = 0;
            }
        }
        if (this.controls == "wasd") {
            if (keyCode == 87) {
                this.rads = HALF_PI;
                this.xVelocity = 0;
                this.yVelocity = -3;
            }
            else if (keyCode == 65) {
                this.rads = PI;
                this.xVelocity = -3;
                this.yVelocity = 0;
            }
            else if (keyCode == 83) {
                this.rads = PI + HALF_PI;
                this.xVelocity = 0;
                this.yVelocity = 3;
            }
            else if (keyCode == 68) {
                this.rads = 0;
                this.xVelocity = 3;
                this.yVelocity = 0;
            }
        }
        if (this.controls == "ijkl") {
            if (keyCode == 73) {
                this.rads = HALF_PI;
                this.xVelocity = 0;
                this.yVelocity = -3;
            }
            else if (keyCode == 74) {
                this.rads = PI;
                this.xVelocity = -3;
                this.yVelocity = 0;
            }
            else if (keyCode == 75) {
                this.rads = PI + HALF_PI;
                this.xVelocity = 0;
                this.yVelocity = 3;
            }
            else if (keyCode == 76) {
                this.rads = 0;
                this.xVelocity = 3;
                this.yVelocity = 0;
            }
        }
        if (this.controls == "8456") {
            if (keyCode == 104) {
                this.rads = HALF_PI;
                this.xVelocity = 0;
                this.yVelocity = -3;
            }
            else if (keyCode == 100) {
                this.rads = PI;
                this.xVelocity = -3;
                this.yVelocity = 0;
            }
            else if (keyCode == 101) {
                this.rads = PI + HALF_PI;
                this.xVelocity = 0;
                this.yVelocity = 3;
            }
            else if (keyCode == 102) {
                this.rads = 0;
                this.xVelocity = 3;
                this.yVelocity = 0;
            }
        }
    };
    this.collisions = function () {};
    this.lose = function () {};
};

function Barrier(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.display = function () {};
    this.move = function () {};
    this.collisions = function () {};
};

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
    controls options : wasd, ARROWS, ijkl, 8456
    blueBox = new Bike("Blue", 1);
    whiteBox = new Bike("White", 2);
    redBox = new Bike("Red", 3);
    greenBox = new Bike("Green", 4);
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
    //CONSTRUCTOR/////////////////////////////////////////////////
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
        push();
        this.c1 = 0;
        this.c2 = 0;
        this.c3 = 255;
        this.translationX = -cornerValue;
        this.translationY = -cornerValue;
        this.rads = 0;
        this.xVelocity = 3;
        this.yVelocity = 0;
        pop();
    }
    //CONTRUCTOR ///////////////////////////////////////////////////////////
    this.display = function () {
        push();
        fill(this.c1, this.c2, this.c3);
        translate(this.translationX, this.translationY, 5);
        rotateZ(this.rads);
        box(30, 10, 10);
        pop();
    }
    this.move = function () {
        this.translationX = this.translationX + this.xVelocity;
        this.translationY = this.translationY + this.yVelocity;
        if (this.controls == 1) {
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
        //wasd
        else if (this.controls == 2) {
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
        //yghj
        else if (this.controls == 3) {
            if (keyCode == 89) {
                this.rads = HALF_PI;
                this.xVelocity = 0;
                this.yVelocity = -3;
            }
            else if (keyCode == 71) {
                this.rads = PI;
                this.xVelocity = -3;
                this.yVelocity = 0;
            }
            else if (keyCode == 72) {
                this.rads = PI + HALF_PI;
                this.xVelocity = 0;
                this.yVelocity = 3;
            }
            else if (keyCode == 74) {
                this.rads = 0;
                this.xVelocity = 3;
                this.yVelocity = 0;
            }
        }
        //numpad
        else if (this.controls == 4) {
            if (keyCode == 80) {
                this.rads = HALF_PI;
                this.xVelocity = 0;
                this.yVelocity = -3;
            }
             if (keyCode == 76) {
                this.rads = PI;
                this.xVelocity = -3;
                this.yVelocity = 0;
            }
             if (keyCode == 186) {
                this.rads = PI + HALF_PI;
                this.xVelocity = 0;
                this.yVelocity = 3;
            }
             if (keyCode == 222) {
                this.rads = 0;
                this.xVelocity = 3;
                this.yVelocity = 0;
            }
        }
    }
    // this.collisions = function () {};
    //  this.lose = function () {};
}

//function Barrier(x, y, w, h) {
//    this.x = x;
//    this.y = y;
//    this.w = w;
//    this.h = h;
//    this.display = function () {};
//    this.move = function () {};
//    this.collisions = function () {};
//};

var canvasWidth;
var canvasHeight;
var planeSize;
var cornerValue;
var blueBox;
var greenBox;
var barriers = [];
var d = new Date();
var n;

function setup() {
    n = 0;
    counter = 0;
    frameRate(60);
    canvasWidth = (displayWidth - displayWidth / 80);
    canvasHeight = (displayHeight - displayHeight / 7);
    planeSize = displayHeight * (.9);
    cornerValue = planeSize * (.4);
    createCanvas(canvasWidth, canvasHeight, WEBGL);
    blueBox = new Bike("Blue", 1);
    greenBox = new Bike("Green", 4);
}

function draw() {
    n++;
    background(0);
    setCamera(70.0, 200.0, 120.0, 50.0, 50.0, 0.0, 0.0, 1.0, 0.0, 50, canvasHeight - canvasHeight * (.9), canvasHeight - canvasHeight * (.85), -PI / 6);
    setPlane(153, 172, 204, planeSize);
    blueBox.move();
    blueBox.display();
    blueBox.collisions();
    greenBox.move();
    greenBox.display();
    greenBox.collisions();
    for (i = 0; i < barriers.length; i++) {
        barriers[i].collisions();
    }
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
    this.turnCount;
    this.m = "horizontal";
    if (this.c == "Green") {
        this.c1 = 0;
        this.c2 = 255;
        this.c3 = 0;
        this.translationX = cornerValue;
        this.translationY = cornerValue;
        this.rads = 0;
        this.xVelocity = -3;
        this.yVelocity = 0;
        barriers.push(new Barrier(this.translationX, this.translationY, this.c1, this.c2, this.c3, this.rads));
        this.turnCount = 0;
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
        barriers.push(new Barrier(this.translationX, this.translationY, this.c1, this.c2, this.c3, this.rads));
        this.turnCount = 0;
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
        barriers.push(new Barrier(this.translationX, this.translationY, this.c1, this.c2, this.c3, this.rads));
        this.turnCount = 0;
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
        barriers.push(new Barrier(this.translationX, this.translationY, this.c1, this.c2, this.c3, this.rads));
        this.turnCount = 0;
    }
    this.collisions = function () {
            if (this.translationX > planeSize/2 || this.translationX < (-1)*(planeSize/2) || this.translationY > planeSize/2 || this.translationY < (-1)*(planeSize/2)) {
                //endgame code
                //
                //
                //
                //
                //
                //endgame code
            }
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
            if (keyCode == UP_ARROW && this.m == "horizontal") {
                this.rads = HALF_PI;
                this.xVelocity = 0;
                this.yVelocity = -3;
                this.turnCount = this.turnCount++;
                this.m = "verticle";
            }
            if (keyCode == LEFT_ARROW && this.m == "verticle") {
                this.rads = PI;
                this.xVelocity = -3;
                this.yVelocity = 0;
                this.turnCount = this.turnCount++;
                this.m = "horizontal";
            }
            if (keyCode == DOWN_ARROW && this.m == "horizontal") {
                this.rads = PI + HALF_PI;
                this.xVelocity = 0;
                this.yVelocity = 3;
                this.turnCount = this.turnCount++;
                this.m = "verticle";
            }
            if (keyCode == RIGHT_ARROW && this.m == "verticle") {
                this.rads = 0;
                this.xVelocity = 3;
                this.yVelocity = 0;
                this.turnCount = this.turnCount++;
                this.m = "horizontal";
            }
        }
        //wasd
        if (this.controls == 2) {
            if (keyCode == 87 && this.m == "horizontal") {
                this.rads = HALF_PI;
                this.xVelocity = 0;
                this.yVelocity = -3;
                this.turnCount = this.turnCount++;
                this.m = "verticle";
            }
            if (keyCode == 65 && this.m == "verticle") {
                this.rads = PI;
                this.xVelocity = -3;
                this.yVelocity = 0;
                this.turnCount = this.turnCount++;
                this.m = "horizontal";
            }
            if (keyCode == 83 && this.m == "horizontal") {
                this.rads = PI + HALF_PI;
                this.xVelocity = 0;
                this.yVelocity = 3;
                this.turnCount = this.turnCount++;
                this.m = "verticle";
            }
            if (keyCode == 68 && this.m == "verticle") {
                this.rads = 0;
                this.xVelocity = 3;
                this.yVelocity = 0;
                this.turnCount = this.turnCount++;
                this.m = "horizontal";
            }
        }
        //yghj
        if (this.controls == 3) {
            if (keyCode == 89 && this.m == "horizontal") {
                this.rads = HALF_PI;
                this.xVelocity = 0;
                this.yVelocity = -3;
                this.turnCount = this.turnCount++;
                this.m = "verticle";
            }
            if (keyCode == 71 && this.m == "verticle") {
                this.rads = PI;
                this.xVelocity = -3;
                this.yVelocity = 0;
                this.turnCount = this.turnCount++;
                this.m = "horizontal";
            }
            if (keyCode == 72 && this.m == "horizontal") {
                this.rads = PI + HALF_PI;
                this.xVelocity = 0;
                this.yVelocity = 3;
                this.turnCount = this.turnCount++;
                this.m = "verticle";
            }
            if (keyCode == 74 && this.m == "verticle") {
                this.rads = 0;
                this.xVelocity = 3;
                this.yVelocity = 0;
                this.turnCount = this.turnCount++;
                this.m = "horizontal";
            }
        }
        //numpad
        if (this.controls == 4) {
            if (keyCode == 80 && this.m == "horizontal") {
                this.rads = HALF_PI;
                this.xVelocity = 0;
                this.yVelocity = -3;
                this.turnCount = this.turnCount++;
                this.m = "verticle";
            }
            if (keyCode == 76 && this.m == "verticle") {
                this.rads = PI;
                this.xVelocity = -3;
                this.yVelocity = 0;
                this.turnCount = this.turnCount++;
                this.m = "horizontal";
            }
            if (keyCode == 186 && this.m == "horizontal") {
                this.rads = PI + HALF_PI;
                this.xVelocity = 0;
                this.yVelocity = 3;
                this.turnCount = this.turnCount++;
                this.m = "verticle";
            }
            if (keyCode == 222 && this.m == "verticle") {
                this.rads = 0;
                this.xVelocity = 3;
                this.yVelocity = 0;
                this.turnCount = this.turnCount++;
                this.m = "horizontal";
            }
        }
        if ((n % 11) == 0) {
            barriers.push(new Barrier(this.translationX, this.translationY, this.c1, this.c2, this.c3, this.rads, 36, this.m));
        }
        for (var i = 0; i < barriers.length; i++) {
            barriers[i].display();
        }
    }
}

function Barrier(x, y, c1, c2, c3, rads, size, m) {
    //initial x and y position
    this.positioning = m;
    this.counter = 0;
    this.s = size;
    this.x = x;
    this.y = y;
    //rotation
    this.rads = rads;
    //colors
    this.c1 = c1;
    this.c2 = c2;
    this.c3 = c3;
    //velocity
    this.vX;
    this.vY;
    //length of barrier
    this.display = function () {
        this.counter++;
        push();
        fill(this.c1, this.c2, this.c3);
        translate(this.x, this.y, 5);
        rotateZ(this.rads);
        box(this.s, 10, 10);
        pop();
    }
    this.collisions = function () {
        if (this.positioning == "horizontal" && this.counter > 30) {
            if (blueBox.translationY > this.y - 5 && blueBox.translationY < this.y + 5 && blueBox.translationX > this.x - 18 && blueBox.translationX < this.x + 18) {
                /*




                */
            }
        }
        if (this.positioning == "verticle" && this.counter > 30) {
            if (blueBox.translationY > this.y - 18 && blueBox.translationY < this.y + 18 && blueBox.translationX > this.x - 5 && blueBox.translationX < this.x + 5) {
                console.log("jack is noob");
                 /*




                */
            }
        }
        if (this.positioning == "horizontal" && this.counter > 30) {
            if (greenBox.translationY > this.y - 5 && greenBox.translationY < this.y + 5 && greenBox.translationX > this.x - 18 && greenBox.translationX < this.x + 18) {
                console.log("jack is noob");
                /*




                */
            }
        }
        if (this.positioning == "verticle" && this.counter > 30) {
            if (greenBox.translationY > this.y - 18 && greenBox.translationY < this.y + 18 && greenBox.translationX > this.x - 5 && greenBox.translationX < this.x + 5) {
                console.log("jack is noob");
                /*




                */
            }
        }
    }
}

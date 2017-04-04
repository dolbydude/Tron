    function setup() {
        createCanvas(displayWidth, displayHeight, WEBGL);
        //controls options : wasd, ARROWS, ijkl, 8456
        blueBox = new Bike("Blue", "ARROWS");
    }

    function draw() {
        background(0);
        setCamera(70.0, 200.0, 120.0, 50.0, 50.0, 0.0, 0.0, 1.0, 0.0, 50, 50, 50, -PI / 6);
        setPlane(153, 172, 204, 1000);
        blueBox.display();
    }

    function setCamera(eyeX, eyeY, eyeZ, ceneterX, centerY, centerZ, upX, upY, upZ, t1, t2, t3, rotation) {
        camera(eyeX, eyeY, eyeZ, ceneterX, centerY, centerZ, upX, upY, upZ);
        translate(t1, t2, t3);
        rotateX(rotation);
    }

    function setPlane(c1, c2, c3, size) {
        fill(c1, c2, c3);
        plane(size);
    }

    function Bike(c, controls) {
        this.c = c;
        this.controls = controls;
        var c1;
        var c2;
        var c3;
        var translationX;
        var translationY;
        var xVelocity;
        var yVelocity;
        var rads;
        var bikeHeight = 50;
        var bikeWidth = 25;
        if (this.c == "Green") {
            c1 = 0;
            c2 = 255;
            c3 = 0;
            translationX = 0;
            translationY = 0;
            rads = 0;
            xVelocity = 0;
            yVelocity = 0;
        }
        if (this.c == "Red") {
            c1 = 255;
            c2 = 0;
            c3 = 0;
            translationX = 0;
            translationY = 0;
            rads = 0;
            xVelocity = 0;
            yVelocity = 0;
        }
        if (this.c == "White") {
            c1 = 255;
            c2 = 255;
            c3 = 255;
            translationX = 0;
            translationY = 0;
            rads = 0;
            xVelocity = 0;
            yVelocity = 0;
        }
        if (this.c == "Blue") {
            c1 = 0;
            c2 = 0;
            c3 = 255;
            translationX = 0;
            translationY = 0;
            rads = 0;
            xVelocity = 0;
            yVelocity = 0;
        }
        this.display = function () {
            fill(c1, c2, c3);
            translate(translationX, translationY);
            rotateX(rads);
            box(bikeHeight, bikeWidth);
        }
        this.move = function () {
            if (this.controls == "ARROWS") {
                function keyPressed() {
                    if (keyCode == UP_ARROW) {
                        rads = HALF_PI;
                        xVelocity = 0;
                        yVelocity = 0;
                    }
                    else if (keyCode == LEFT_ARROW) {
                        rads = PI;
                        xVelocity = 0;
                        yVelocity = 0;
                    }
                    else if (keyCode == DOWN_ARROW) {
                        rads = PI+HALF_PI;
                        xVelocity = 0;
                        yVelocity = 0;
                    }
                    else if (keyCode == RIGHT_ARROW) {
                        rads = 0;
                        xVelocity = 0;
                        yVelocity = 0;
                    }
                }
            }
            if (this.controls == "wasd") {
                function keyPressed() {
                    if (keyCode == 87) {
                        rads = HALF_PI;
                        xVelocity = 0;
                        yVelocity = 0;
                    }
                    else if (keyCode == 65) {
                        rads = PI;
                        xVelocity = 0;
                        yVelocity = 0;
                    }
                    else if (keyCode == 83) {
                        rads = PI+HALF_PI;
                        xVelocity = 0;
                        yVelocity = 0;
                    }
                    else if (keyCode == 68) {
                        rads = 0;
                        xVelocity = 0;
                        yVelocity = 0;
                    }
                }
            }
            if (this.controls == "ijkl") {
                function keyPressed() {
                    if (keyCode == 73) {
                        rads = HALF_PI;
                        xVelocity = 0;
                        yVelocity = 0;
                    }
                    else if (keyCode == 74) {
                        rads = PI;
                        xVelocity = 0;
                        yVelocity = 0;
                    }
                    else if (keyCode == 75) {
                        rads = PI+HALF_PI;
                        xVelocity = 0;
                        yVelocity = 0;
                    }
                    else if (keyCode == 76) {
                        rads = 0;
                        xVelocity = 0;
                        yVelocity = 0;
                    }
                }
            }
            if (this.controls == "8456") {
                function keyPressed() {
                    if (keyCode == 104) {
                        rads = HALF_PI;
                        xVelocity = 0;
                        yVelocity = 0;
                    }
                    else if (keyCode == 100) {
                        rads = PI;
                        xVelocity = 0;
                        yVelocity = 0;
                    }
                    else if (keyCode == 101) {
                        rads = PI+HALF_PI;
                        xVelocity = 0;
                        yVelocity = 0;
                    }
                    else if (keyCode == 102) {
                        rads = 0;
                        xVelocity = 0;
                        yVelocity = 0;
                    }
                }
            }
        };
        this.collisions = function () {};
        this.lose = function () {};
    }

    function Barrier(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.display = function () {};
        this.move = function () {};
        this.collisions = function () {};
    }

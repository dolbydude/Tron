    var box_x = 50;

    function setup() {
        createCanvas(displayWidth, displayHeight, WEBGL);
        box_x = -400;
    }

    function draw() {
        background(0);
        box_x++;
        setCamera(70.0, 200.0, 120.0, 50.0, 50.0, 0.0, 0.0, 1.0, 0.0, 50, 50, 50, -PI / 6);
        setPlane(153, 172, 204, 1000);
        fill(255);
        translate(box_x, 0, 100);
        box(100, 50, -50);
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

    function Bike(c) {
        this.c = c;
        var c1;
        var c2;
        var c3;
        var translationX;
        var translationY;
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
        }
        if (this.c == "Red") {
            c1 = 255;
            c2 = 0;
            c3 = 0;
            translationX = 0;
            translationY = 0;
            rads = 0;
        }
        if (this.c == "White") {
            c1 = 255;
            c2 = 255;
            c3 = 255;
            translationX = 0;
            translationY = 0;
            rads = 0;
        }
        if (this.c == "Blue") {
            c1 = 0;
            c2 = 0;
            c3 = 255;
            translationX = 0;
            translationY = 0;
            rads = 0;
        }
        this.display = function () {
            fill(c1, c2, c3);
            translate(translationX, translationY);
            rotateX(rads);
            box(bikeHeight, bikeWidth);
        }
        this.move = function () {}
        this.collisions = function () {}
    }

    function Barrier(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.display = function () {}
        this.move = function () {}
        this.collisions = function () {}
    }

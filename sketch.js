function setup() {
    createCanvas(displayWidth, displayHeight, WEBGL);
}

function draw() {
    background(0);
    setCamera(70.0, 200.0, 120.0, 50.0, 50.0, 0.0, 0.0, 1.0, 0.0,50,50,50, -PI/6);
    setPlane(153,172,204,1000);
    box(200, 200, 200);
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

function Bike(c){
    this.c = c;

    this.display = function(){


    }
    this.move = function(){


    }
    this.collisions = function(){


    }
}

function Barrier(x,y,w,h){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;

    this.display = function(){


    }

    this.move = function(){


    }

    this.collisions = function(){


    }
}

let easycam;

function setup() {
    createCanvas(windowWidth, windowHeight,WEBGL);
    sun = new Planet(50, 0, 0, random(TWO_PI));
    sun.spawnMoons(5, 1);

}

function draw() {
    background(51);
    noStroke();
    // let camX = map(mouseX,0,width,-100,0);
    //
    // camera(camX,0,(height/2)/tan(PI/6),camX,0,0,0,1,0);
    // let fov = map(mouseX,0,width,0,PI);
    // let cameraZ = (height/2.0) / tan(fov/2.0);
    // 
    // perspective(fov, width/height, cameraZ/10.0, cameraZ*10.0);

    easycam = new Dw.EasyCam(this._renderer);

    // translate(width/2, height/2);
    sun.show();
    sun.orbit();

}

class Planet {
    constructor(radius, distance, orbitspeed, angle) {
        this.radius = radius;
        this.distance = distance;
        this.orbitspeed = orbitspeed;
        this.angle = angle;
        this.planets = [];
    }


    orbit() {
        this.angle += this.orbitspeed;
        for (let i in this.planets) {
            this.planets[i].orbit();
        }
    }


    spawnMoons(total, level) {
        for (let i = 0; i < total; i++) {
            let r = this.radius/(level*2);
            let d = random((this.radius+r),(this.radius+r)*2);
            let o = random(-0.01, 0.02);
            let a = random(TWO_PI);
            this.planets.push(new Planet(r, d, o,a));
            if (level < 3) {
                let num = Math.floor(random(0, 10));
                this.planets[i].spawnMoons(num, level+1);
            }
        }
    }


    show() {
        push();
        fill(255);
        directionalLight(255, 0, 0, 0.25, 0.25, 0);
        rotate(this.angle);
        translate(this.distance, 0);
        sphere(this.radius);
        // ellipse(0, 0, this.radius*2);
        for (let i in this.planets) {
            this.planets[i].show();
        }
        pop();
    }

}

class Bob {
    constructor(x, y) {
        var options = {
            isStatic: false,
            friction: 0.2,
            density: 0.2,
            restitution: 1,
        }
        this.x = x;
        this.y = y;
        this.r = 30;
        this.body = Bodies.circle(this.x, this.y, this.r, options)
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        push()
        translate(pos.x, pos.y);
        fill("purple");
        ellipseMode(RADIUS);
        ellipse(0, 0, this.r, this.r)
        pop()

    }
}
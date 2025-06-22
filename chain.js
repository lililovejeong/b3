class Chain {
    constructor(bodyA, bodyB) {
        var options ={
        bodyA: bodyA,
        bodyB: bodyB,
        stiffness: 0.04,
        length: 10
        }

        var chain = Constraint.create(options);
        World.add(world, chain);
    }

    display() {
        var pointA = this.chain.bodyA.position;
        var pintB = this.chain.bodyB.position;
        strokeWeight(3);
        stroke(200);
        line(bird.body.position.x, bird.body.position.y, ConstraintLog.body.position.x, ConstraintLog.body.position.y);

    }
}
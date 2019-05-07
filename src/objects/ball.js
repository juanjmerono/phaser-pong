import 'phaser';

class Ball extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y) {
        super(scene, x, y, "ball");
        scene.add.existing(this);
        scene.physics.world.setBoundsCollision(false,false,true,true);
        scene.physics.world.enableBody(this, 0);
        this.setScale(0.5);
        this.body.setCollideWorldBounds(true);
        this.body.setBounce(1);
        this.body.setVelocityX(-180);
    }
}

export default Ball;
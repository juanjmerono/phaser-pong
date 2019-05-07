import 'phaser';

class Paddle extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, type) {
        super(scene, x, y, "pongPaddle");
        scene.add.existing(this);
        scene.physics.world.enableBody(this, 0);
        this.body.setImmovable(true);
        this.body.setCollideWorldBounds(true);
        if (type === "right") {
            this.setTint(0x00ff00);
        } else {
            this.setTint(0xffff00);
        }
    }
}

export default Paddle;
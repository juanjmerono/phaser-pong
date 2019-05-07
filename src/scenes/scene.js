import 'phaser';
import ballImg from "../assets/ball.png";
import pongPaddleImg from "../assets/pong-paddle.jpg";

import Ball from '../objects/ball';
import Paddle from '../objects/paddle';

class Scene extends Phaser.Scene {
    constructor() {
        super({key:'MainScene'});
    }
    preload() {
        this.load.image("ball", ballImg);
        this.load.image("pongPaddle", pongPaddleImg);
    }
    create () {
        let midX = this.sys.game.config.width/2;
        let midY = this.sys.game.config.height/2;

        // Objects
        this.pongNet = this.add.image(midX,0,"pongPaddle");
        this.pongNet.setScale(0.1,15);
        this.ball = new Ball(this,midX,midY);
        this.lpaddle = new Paddle(this,50,midY,"left");
        this.rpaddle = new Paddle(this,750,midY,"right");

        this.lScore = {
            text: this.add.text(midX - 100,0,"0",{font:"26px Impact"}),
            score: 0
        };
        this.rScore = {
            text: this.add.text(midX + 100,0,"0",{font:"26px Impact"}),
            score: 0
        };

        // Physics
        this.physics.add.collider(this.ball,this.lpaddle,this.collidePaddle,null,this);
        this.physics.add.collider(this.ball,this.rpaddle,this.collidePaddle,null,this);

        // Controls
        this.input.on('pointerdown',function(event){
            if (event.x <= this.sys.game.config.width/2) {
                this.lpaddle.y = event.y;
            } else {
                this.rpaddle.y = event.y;
            }
        },this);
        this.key_lpaddle_up = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Q);
        this.key_lpaddle_down = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.key_rpaddle_up = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.O);
        this.key_rpaddle_down = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.L);
    }
    update() {
        let OFFSET = 5;
        if (this.key_lpaddle_up.isDown) {
            this.lpaddle.y = Math.max(this.lpaddle.y-OFFSET,50);
        }
        if (this.key_lpaddle_down.isDown) {
            this.lpaddle.y = Math.min(this.lpaddle.y+OFFSET,this.sys.game.config.height-50);
        }
        if (this.key_rpaddle_up.isDown) {
            this.rpaddle.y = Math.max(this.rpaddle.y-OFFSET,50);
        }
        if (this.key_rpaddle_down.isDown) {
            this.rpaddle.y = Math.min(this.rpaddle.y+OFFSET,this.sys.game.config.height-50);
        }
        if (this.ball.x < 0 || this.ball.x > this.sys.game.config.width) {
            let mScore = (this.ball.x < 0)?this.rScore:this.lScore;
            mScore.score++;
            mScore.text.setText(mScore.score);
            this.ball.setPosition(this.sys.game.config.width/2,this.sys.game.config.height/2);
            this.ball.body.setVelocityY(Phaser.Math.Between(-120,120));
        }
    }
    collidePaddle() {
        this.ball.body.setVelocityY(Phaser.Math.Between(-120,120));
    }
}

export default Scene;
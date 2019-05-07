import Phaser from "phaser";
import config from "./config/config";
import scene from "./scenes/scene";

class Game extends Phaser.Game {
    constructor() {
        super(config);
        this.scene.add('Scene',scene);
        this.scene.start('MainScene');
    }
}

window.onload = function() {
    window.game = new Game();
}
/*
function preload() {
  this.load.image("logo", logoImg);
}

function create() {
  const logo = this.add.image(400, 150, "logo");

  this.tweens.add({
    targets: logo,
    y: 450,
    duration: 2000,
    ease: "Power2",
    yoyo: true,
    loop: -1
  });
}*/
const config = {
    type: Phaser.AUTO,
    parent: "phaser-pong",
    width: 800,
    height: 600,
    physics: {
        // arcade, matter, impact
        default: 'arcade',
        arcade: {
          gravity: {
            y: 0
          },
          debug: false
        }
      },
    
  };
  
export default config;  
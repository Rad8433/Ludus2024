const config = {
  type: Phaser.AUTO,
  parent: "canvas-wrapper",
  width: 960,
  height: 640,
  scene: [
    sceneAccueil,
    sceneCommentJouer,
    sceneCredits,
    sceneJeu,
    scenePartieTerminee,
    sceneVictoire,
  ],
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 500 },
      debug: true,
    },
  },
};
const game = new Phaser.Game(config);

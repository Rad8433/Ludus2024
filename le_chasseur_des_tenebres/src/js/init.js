const config = {
  type: Phaser.AUTO,
  parent: "canvas-wrapper",
  width: 1400,
  height: 800,
  scene: [
    sceneAccueil,
    sceneCommentJouer,
    sceneCredits,
    sceneJeu,
    scenePartieTerminee,
    sceneVictoire,
  ],
};
const game = new Phaser.Game(config);

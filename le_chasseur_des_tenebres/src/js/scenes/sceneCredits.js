class sceneCredits extends Phaser.Scene {
  constructor() {
    super({ key: "sceneCredits" });
  }

  preload() {
    this.load.image("btnRetour", "./assets/images/btn_retour.png");
  }

  create() {
    this.btnRetour = this.add.image(
      config.width / 2,
      config.height * 0.85,
      "btnRetour"
    );
    this.btnRetour.setOrigin(0.5);
    this.btnRetour.setInteractive();
    this.btnRetour.on("pointerdown", () => {
      this.scene.start("sceneAccueil");
    });
  }

  update() {}
}

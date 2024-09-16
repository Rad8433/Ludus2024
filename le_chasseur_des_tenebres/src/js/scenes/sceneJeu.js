class sceneJeu extends Phaser.Scene {
  constructor() {
    super({ key: "sceneJeu" });
  }

  preload() {
    this.load.image("btnQuitter", "assets/images/btn_quitter.png");
  }

  create() {
    this.btnQuitter = this.add.image(
      config.width / 1.08,
      config.height * 0.1,
      "btnQuitter"
    );
    this.btnQuitter.setScale(0.5);
    this.btnQuitter.setInteractive();
    this.btnQuitter.on("pointerdown", () => {
      this.scene.start("sceneAccueil");
    });
  }

  update() {}
}
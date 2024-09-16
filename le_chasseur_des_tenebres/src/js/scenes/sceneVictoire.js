class sceneVictoire extends Phaser.Scene {
  constructor() {
    super({ key: "sceneVictoire" });
  }

  preload() {
    this.load.image("btnMenuPrincipal", "assets/images/btn_menu_principal.png");
  }

  create() {
    this.btnMenuPrincipal = this.add.image(
      config.width / 2,
      config.height * 0.6,
      "btnMenuPrincipal"
    );
    this.btnMenuPrincipal.setScale(0.85);
    this.btnMenuPrincipal.setInteractive();
    this.btnMenuPrincipal.on("pointerdown", () => {
      this.scene.start("sceneAccueil");
    });
  }

  update() {}
}

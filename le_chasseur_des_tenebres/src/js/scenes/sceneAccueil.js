class sceneAccueil extends Phaser.Scene {
  constructor() {
    super({ key: "sceneAccueil" });
  }

  preload() {
    this.load.image("bgAccueil", "assets/images/bg_accueil.jpg");
    this.load.image("titleImage", "assets/images/image_titre.png");
    this.load.image("logo", "assets/images/logo_epee.png");
    this.load.image("btnCommencer", "assets/images/btn_commencer.png");
    this.load.image("btnComment", "assets/images/btn_comment_jouer.png");
    this.load.image("btnCredits", "assets/images/btn_credits.png");
    this.load.image("btnActiverAudio", "assets/images/btn_audio_activer.png");
    this.load.image(
      "btnDesactiverAudio",
      "assets/images/btn_audio_desactiver.png"
    );
    this.load.image("btnQuitter", "assets/images/btn_quitter.png");
    this.load.audio("audioBg", "assets/musiques/Winter_Ruins.wav");
  }

  create() {
    this.bgAccueil = this.add.image(0, 0, "bgAccueil");
    this.bgAccueil.setDisplaySize(config.width, config.height);
    this.bgAccueil.setOrigin(0, 0);

    this.logo = this.add.image(config.width / 2, config.height * 0.35, "logo");
    this.logo.setRotation(Phaser.Math.DegToRad(-90));
    this.logo.setScale(0.35);

    this.titleImage = this.add.image(
      config.width / 2,
      config.height * 0.19,
      "titleImage"
    );
    this.titleImage.setScale(1.8);

    this.btnDesactiverAudio = this.add.image(
      config.width / 1.06,
      config.height * 0.09,
      "btnDesactiverAudio"
    );
    this.btnDesactiverAudio.setScale(0.5);
    this.btnDesactiverAudio.setInteractive();
    this.btnDesactiverAudio.on("pointerdown", () => {
      this.btnAudio();
    });

    this.btnActiverAudio = this.add.image(
      config.width / 1.06,
      config.height * 0.09,
      "btnActiverAudio"
    );
    this.btnActiverAudio.setScale(0.5);
    this.btnActiverAudio.setVisible(false);
    this.btnActiverAudio.setInteractive();
    this.btnActiverAudio.on("pointerdown", () => {
      this.btnAudio();
    });
    this.audioBg = this.sound.add("audioBg");
    this.audioBg.setLoop(true);
    this.audioBg.play();
    this.btnCommencer = this.add.image(
      config.width / 2,
      config.height * 0.55,
      "btnCommencer"
    );
    this.btnCommencer.setOrigin(0.5);
    this.btnCommencer.setScale(0.9);
    this.btnCommencer.setInteractive();
    this.btnCommencer.on("pointerdown", () => {
      this.audioBg.stop();
      this.scene.start("sceneJeu");
    });

    this.btnComment = this.add.image(
      config.width / 2,
      config.height * 0.7,
      "btnComment"
    );
    this.btnComment.setOrigin(0.5);
    this.btnComment.setScale(0.9);
    this.btnComment.setInteractive();
    this.btnComment.on("pointerdown", () => {
      this.audioBg.stop();
      this.scene.start("sceneCommentJouer");
    });

    this.btnCredits = this.add.image(
      config.width / 2,
      config.height * 0.85,
      "btnCredits"
    );
    this.btnCredits.setOrigin(0.5);
    this.btnCredits.setScale(0.9);
    this.btnCredits.setInteractive();
    this.btnCredits.on("pointerdown", () => {
      this.audioBg.stop();
      this.scene.start("sceneCredits");
    });
  }
  btnAudio() {
    if (this.audioBg.isPlaying) {
      this.audioBg.pause();
      this.btnDesactiverAudio.setVisible(false);
      this.btnActiverAudio.setVisible(true);
    } else {
      this.audioBg.play();
      this.btnDesactiverAudio.setVisible(true);
      this.btnActiverAudio.setVisible(false);
    }
  }
  update() {}
}

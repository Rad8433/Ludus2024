class sceneJeu extends Phaser.Scene {
  constructor() {
    super({ key: "sceneJeu" });
  }

  preload() {
    this.load.image("btnQuitter", "./assets/images/btn_quitter.png");
    this.load.tilemapTiledJSON("carte_json", "./assets/images/test-level.json");
    this.load.image("tuiles", "./assets/images/tiles_outside.png");
    this.load.image("bglayer", "./assets/images/bg-jeu-test.png");
    this.load.spritesheet("knightIdle", "./assets/images/Knight_1/idle.png", {
      frameWidth: 67,
      frameHeight: 86,
    });
    this.load.spritesheet("knightWalk", "./assets/images/Knight_1/walk.png", {
      frameWidth: 66,
      frameHeight: 86,
    });

    this.load.spritesheet("knightJump", "./assets/images/Knight_1/Jump.png", {
      frameWidth: 81,
      frameHeight: 86,
    });
  }

  create() {
    this.bglevelDemo = this.add.image(0, 0, "bglayer");
    this.bglevelDemo.setDisplaySize(config.width, config.height);
    this.bglevelDemo.setOrigin(0, 0);

    this.btnQuitter = this.add.image(
      config.width / 1.08,
      config.height * 0.1,
      "btnQuitter"
    );
    this.btnQuitter.setScale(0.5).setInteractive();
    this.btnQuitter.on("pointerdown", () => {
      this.scene.start("sceneAccueil");
    });

    const maCarte = this.make.tilemap({ key: "carte_json" });
    const tileset = maCarte.addTilesetImage("tiles_outside", "tuiles");
    const groundLayer = maCarte.createLayer("ground", [tileset], 0, 0);
    groundLayer.setCollisionByProperty({ collision: true });

    this.player = this.physics.add.sprite(
      config.width * 0.5,
      320,
      "knightIdle"
    );
    this.player.setBounce(0);
    this.player.setCollideWorldBounds(true);
    this.player.body.setSize(50, 86);
    this.player.body.setOffset(9, 0);
    this.physics.add.collider(this.player, groundLayer, () => {
      this.jumpCount = 0;
    });

    this.keys = this.input.keyboard.addKeys({
      left: Phaser.Input.Keyboard.KeyCodes.A,
      right: Phaser.Input.Keyboard.KeyCodes.D,
      jump: Phaser.Input.Keyboard.KeyCodes.SPACE,
      shift: Phaser.Input.Keyboard.KeyCodes.SHIFT,
    });

    this.anims.create({
      key: "idle",
      frames: this.anims.generateFrameNumbers("knightIdle", {
        start: 0,
        end: 3,
      }),
      frameRate: 10,
      repeat: -1,
    });

    this.anims.create({
      key: "walk",
      frames: this.anims.generateFrameNumbers("knightWalk", {
        start: 0,
        end: 7,
      }),
      frameRate: 10,
      repeat: -1,
    });

    this.anims.create({
      key: "jump",
      frames: this.anims.generateFrameNumbers("knightJump", {
        start: 0,
        end: 2,
      }),
      frameRate: 10,
      repeat: -1,
    });

    this.anims.create({
      key: "fall",
      frames: this.anims.generateFrameNumbers("knightJump", {
        start: 3,
        end: 5,
      }),
      frameRate: 10,
      repeat: -1,
    });
  }

  update() {
    const walkSpeed = 100;
    const runSpeed = 200;
    let velocity = walkSpeed;

    if (this.keys.shift.isDown) {
      velocity = runSpeed;
    }

    if (this.keys.left.isDown) {
      this.player.setVelocityX(-velocity);
      this.player.flipX = true;
      this.player.anims.play("walk", true);
      this.player.body.setOffset(10, 0);
    } else if (this.keys.right.isDown) {
      this.player.setVelocityX(velocity);
      this.player.flipX = false;
      this.player.anims.play("walk", true);
      this.player.body.setOffset(5, 0);
    } else {
      this.player.setVelocityX(0);
      this.player.anims.play("idle", true);
    }

    if (this.keys.jump.isDown && this.player.body.blocked.down) {
      this.player.setVelocityY(-360);
    }

    if (!this.player.body.touching.down) {
      if (this.player.body.velocity.y < 0) {
        this.player.anims.play("jump", true);
      } else if (this.player.body.velocity.y > 0) {
        this.player.anims.play("fall", true);
      }
    } else {
      if (this.player.body.velocity.x !== 0) {
        this.player.anims.play("walk", true);
      } else {
        this.player.anims.play("idle", true);
      }
    }
  }
}

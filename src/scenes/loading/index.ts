import { Scene } from 'phaser';

export class LoadingScene extends Scene {
  constructor() {
    super('loading-scene');
  }

  preload(): void {
    this.load.baseURL = 'assets/';

    // PLAYER LOADING
    this.load.image('protagonist', 'sprites/char_walk_right.gif');
    this.load.atlas('a-king', 'spritesheets/a-king.png', 'spritesheets/a-king_atlas.json');

    // MAP LOADING
    this.load.image({
      key: 'tiles',
      url: 'tilemaps/Interiors_free_16x16.png',
    });
    this.load.tilemapTiledJSON('store', 'tilemaps/Interiors_free_16x16.png');

    // CHEST LOADING
    this.load.spritesheet('tiles_spr', 'tilemaps/Interiors_free_16x16.png', {
      frameWidth: 16,
      frameHeight: 16,
    });
  }

  create(): void {
    this.scene.start('level-1-scene');
    this.scene.start('ui-scene');
  }
}

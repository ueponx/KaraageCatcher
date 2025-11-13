// ゲーム設定ファイル
// このファイルを編集することで、キャラクターやアイテムをカスタマイズできます
const gameConfig = {
  characters: {
    player: {
      normal: "🧑",
      stunned: "😵",
      fontSize: 60,
      width: 40,
      height: 60,
      speed: 5,
      jumpPower: 15,
      gravity: 0.6,
      groundY: 480
    },
    thrower: {
      emoji: "👨‍🍳",
      fontSize: 70,
      x: 700,
      y: 100,
      width: 60,
      height: 80
    }
  },
  items: {
    karaage: {
      emoji: "🍗",
      baseSize: 15,
      fontSizeMultiplier: 3.2,
      spawnRate: 0.9,
      points: 1,
      gravity: 0.3
    },
    lemon: {
      emoji: "🍋",
      baseSize: 15,
      fontSizeMultiplier: 3.2,
      spawnRate: 0.1,
      stunDuration: 2,
      gravity: 0.3
    }
  },
  throwing: {
    itemsPerThrow: 4,
    angleMin: -50,
    angleMax: -130,
    powerMin: 7,
    powerMax: 12
  }
};

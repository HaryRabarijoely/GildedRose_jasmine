const { Item } = require("./Item");

class Backstage extends Item {
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality);
  };

  updateQuality() {
    this.sellIn--;
    if (this.sellIn < 0) {
      return this.quality = 0;
    }
    else if (this.quality < 50) {
      switch (true) {
        case this.sellIn <= 10 && this.sellIn > 5:
          this.quality += 2;
          if (this.quality > 50) this.quality = 50;
          break;
        case this.sellIn <= 5:
          this.quality += 3;
          if (this.quality > 50) this.quality = 50;
          break;
        default:
          this.quality++;
          break;
      }
    };
  };
};

module.exports = { Backstage };
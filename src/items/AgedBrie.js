const { Item } = require("./Item");

class AgedBrie extends Item {
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality);
  };

  updateQuality() {
    if (this.quality === 50) {
      this.sellIn--;
      return;
    }
    else {
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
      };
    this.sellIn--;
    };
  };
};

module.exports = { AgedBrie };
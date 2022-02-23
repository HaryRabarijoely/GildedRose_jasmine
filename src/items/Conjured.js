const { Item } = require("./Item");

class Conjured extends Item {
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality);
  };

  updateQuality() {
    if (this.quality === 0) return;
    this.quality -= 2;
    if (this.sellIn < 0) this.quality -= 2;
    if (this.quality < 0) this.quality = 0;
    this.sellIn--;
  }
};

module.exports = { Conjured };

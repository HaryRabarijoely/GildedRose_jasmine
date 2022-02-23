const { Item } = require("./Item");

class Legend extends Item {
  constructor(name = "Sulfuras, Hand of Ragnaros", sellIn = "N/A", quality = 80) {
    super(name, sellIn, quality);
  };

  updateQuality() {
    return;
  }
};

module.exports = { Legend };
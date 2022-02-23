class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }

  updateQuality() {
    this.sellIn--;
    if (this.quality === 0) return;
    this.quality--;
    if ((this.quality > 0) && (this.sellIn < 0)) this.quality--;
  }
}

module.exports = { Item };
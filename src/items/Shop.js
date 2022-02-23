const { Item } = require("./Item");
const { Conjured } = require("./Conjured");
const { AgedBrie } = require("./AgedBrie");
const { Backstage } = require("./Backstage");
const { Legend } = require("./Legend");

class Shop {
  constructor(items = []) {
    this.items = items;
  }

  addItem(name, sellIn, quality) {
    let newItem;
    switch (true) {
      case name === 'Aged Brie':
        newItem = new AgedBrie(name, sellIn, quality);
        break;
      case /^(backstage passes)/.test(name.toLowerCase()):
        newItem = new Backstage(name, sellIn, quality);
        break;
      case name === 'Sulfuras, Hand of Ragnaros':
        newItem = new Legend();
        break;
      case /^(conjured)/.test(name.toLowerCase()):
        newItem = new Conjured(name, sellIn, quality);
        break;
      default:
        newItem = new Item(name, sellIn, quality);
        break;
    };
    this.items.push(newItem);
  }

  updateQuality() {
    for (const item of this.items) {
      item.updateQuality();
    }
    return this.items;
  }
};

module.exports = { Shop };
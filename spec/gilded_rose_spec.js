const { Shop } = require("../src/items/Shop");

describe("GildedRose", function () {
  let listItems;

  beforeEach(function () {
    listItems = [];
  });

  it("la qualité baisse bien de 1", function () {
    const gildedRose = new Shop(listItems);
    gildedRose.addItem("+5 Dexterity Vest", 10, 20);
    gildedRose.addItem("Mana Cake", 3, 6);

    const items = gildedRose.updateQuality();

    let expected = [
      { sellIn: 9, quality: 19 },
      { sellIn: 2, quality: 5 }
    ];
    expected.forEach(function (testCase, idx) {
      expect(items[idx].quality).toBe(testCase.quality);
      expect(items[idx].sellIn).toBe(testCase.sellIn);
    });
  });

  it("la qualité augmente de 1 pour Aged Brie et Backstage passes", function () {
    const gildedRose = new Shop(listItems);
    gildedRose.addItem("Aged Brie", 20, 30);
    gildedRose.addItem("Backstage passes to a TAFKAL80ETC concert", 20, 30);


    const items = gildedRose.updateQuality();

    let expected = [
      { sellIn: 19, quality: 31 },
      { sellIn: 19, quality: 31 },
    ];
    expected.forEach(function (testCase, idx) {
      expect(items[idx].quality).toBe(testCase.quality);
      expect(items[idx].sellIn).toBe(testCase.sellIn);
    });
  });

  it("la qualité augmente par 3 quand il reste 5 jours ou moins (Aged Brie et Backstage passes)", function () {
    const gildedRose = new Shop(listItems);
    gildedRose.addItem("Aged Brie", 5, 30);
    gildedRose.addItem("Backstage passes to a TAFKAL80ETC concert", 3, 30);


    const items = gildedRose.updateQuality();

    let expected = [
      { sellIn: 4, quality: 33 },
      { sellIn: 2, quality: 33 },
    ];
    expected.forEach(function (testCase, idx) {
      expect(items[idx].quality).toBe(testCase.quality);
      expect(items[idx].sellIn).toBe(testCase.sellIn);
    });
  });

  it("la qualité de Sulfuras ne se modifie pas", function () {
    const gildedRose = new Shop(listItems);
    gildedRose.addItem("Sulfuras, Hand of Ragnaros");

    const items = gildedRose.updateQuality();

    let expected = [
      { sellIn: "N/A", quality: 80 },
    ];
    expected.forEach(function (testCase, idx) {
      expect(items[idx].quality).toBe(testCase.quality);
    });
  });

  it("les éléments Conjured sont bien identifiés et se dégradent deux fois plus vite.", function () {
    const gildedRose = new Shop(listItems);
    gildedRose.addItem("Conjured Magic Stick", 10, 2);
    gildedRose.addItem("Conjured Dark Blade", 5, 30);


    const items = gildedRose.updateQuality();

    let expected = [
      { sellIn: 9, quality: 0 },
      { sellIn: 4, quality: 28 },
    ];
    expected.forEach(function (testCase, idx) {
      expect(items[idx].quality).toBe(testCase.quality);
      expect(items[idx].sellIn).toBe(testCase.sellIn);
    });
  });

  it("une fois que la date de péremption est passée, la qualité se dégrade deux fois plus rapidement", function () {
    const gildedRose = new Shop(listItems);
    gildedRose.addItem("Mana Cake", -1, 30);
    gildedRose.addItem("Conjured Magic Stick", -1, 30);


    const items = gildedRose.updateQuality();

    let expected = [
      { sellIn: -2, quality: 28 },
      { sellIn: -2, quality: 26 },
    ];
    expected.forEach(function (testCase, idx) {
      expect(items[idx].quality).toBe(testCase.quality);
      expect(items[idx].sellIn).toBe(testCase.sellIn);
    });
  });

  it("la qualité d'un produit n'est jamais de plus de 50", function () {
    const gildedRose = new Shop(listItems);
    gildedRose.addItem("Backstage passes to a TAFKAL80ETC concert", 2, 49);
    gildedRose.addItem("Aged Brie", 5, 48);


    const items = gildedRose.updateQuality();

    let expected = [
      { sellIn: 1, quality: 50 },
      { sellIn: 4, quality: 50 },
    ];
    expected.forEach(function (testCase, idx) {
      expect(items[idx].quality).toBe(testCase.quality);
      expect(items[idx].sellIn).toBe(testCase.sellIn);
    });
  });

  it("la qualité d'un produit n'est jamais négative.", function () {
    const gildedRose = new Shop(listItems);
    gildedRose.addItem("Mana Cake", -1, 0);
    gildedRose.addItem("Conjured Mana Cake", 3, 1);


    const items = gildedRose.updateQuality();

    let expected = [
      { sellIn: -2, quality: 0 },
      { sellIn: 2, quality: 0 },
    ];
    expected.forEach(function (testCase, idx) {
      expect(items[idx].quality).toBe(testCase.quality);
      expect(items[idx].sellIn).toBe(testCase.sellIn);
    });
  });
  
  it("la qualité d'un Backstage Pass tombe à 0 une fois le concert passé", function () {
    const gildedRose = new Shop(listItems);
    gildedRose.addItem("Backstage passes to a TAFKAL80ETC concert", 0, 50);
    gildedRose.addItem("Backstage passes to a TAFKAL80ETC concert", -2, 0);


    const items = gildedRose.updateQuality();

    let expected = [
      { sellIn: -1, quality: 0 },
      { sellIn: -3, quality: 0 },
    ];
    expected.forEach(function (testCase, idx) {
      expect(items[idx].quality).toBe(testCase.quality);
      expect(items[idx].sellIn).toBe(testCase.sellIn);
    });
  });  

});
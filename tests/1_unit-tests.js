const chai = require("chai");
let assert = chai.assert;
const ConvertHandler = require("../controllers/convertHandler.js");

let convertHandler = new ConvertHandler();

suite("Unit Tests", function () {
  suite("Convert Handler", () => {
    // #1
    test("#isWholeNum, #isNotWholeNum", () => {
      assert.isTrue(convertHandler.getNum("50mi") % 1 == 0, "50 is a number");
      assert.isNotTrue(
        convertHandler.getNum("3.1mi") % 1 == 0,
        "3.1 is not a whole number"
      );
    });
    // #2
    test("#isDecimal, #isNotDecimal", () => {
      assert.isTrue(
        convertHandler.getNum("4.8mi") % 1 !== 0,
        "4.8 is a decimal"
      );
      assert.isNotTrue(
        convertHandler.getNum("20kg") % 1 !== 0,
        "20 is not a decimal"
      );
    });
    // #3
    test("#isFraction", () => {
      assert.isTrue(
        convertHandler.getNum("3/5mi") == 3 / 5,
        "3/5 should equal 3/5"
      );
      assert.isTrue(
        convertHandler.getNum("3/6mi") == 1 / 2,
        "3/6 should equal 1/2"
      );
    });
    // #4
    test("#isDecimalFraction", () => {
      assert.isTrue(
        convertHandler.getNum("1.2/3kg") == 1.2 / 3,
        "Should be equal"
      );
    });
    // #5
    test("#doubleFraction", () => {
      assert.isNotTrue(
        convertHandler.getNum("1/2/3kg") == 1 / 2 / 3,
        "Invalid Input"
      );
    });
    // #6
    test("#defaultValue", () => {
      assert.isTrue(
        convertHandler.getNum("kg") == 1,
        "Should set defult value to 1 if value is not given"
      );
    });
    // #7
    test("#validateUnit", () => {
      assert.isTrue(
        convertHandler.getUnit("3.1km") == "km",
        "Should read unit as 'km'"
      );
      assert.isTrue(
        convertHandler.getUnit("3.1gal") == "gal",
        "Should read unit as 'gal'"
      );
      assert.isTrue(
        convertHandler.getUnit("3.1lbs") == "lbs",
        "Should read unit as 'lbs'"
      );
      assert.isTrue(
        convertHandler.getUnit("3.1mi") == "mi",
        "Should read unit as 'mi'"
      );
      assert.isTrue(
        convertHandler.getUnit("3.1l") == "L",
        "Should read unit as 'L'"
      );
      assert.isTrue(
        convertHandler.getUnit("3.1kg") == "kg",
        "Should read unit as 'kg'"
      );
      assert.isUndefined(
        convertHandler.getUnit("3.1"),
        "Should read unit as undefined"
      );
    });
    // #8
    test("#validateFullUnit", () => {
      assert.isTrue(
        convertHandler.spellOutUnit("km") == "kilometers",
        "Should read unit as 'kilometers'"
      );
      assert.isTrue(
        convertHandler.spellOutUnit("gal") == "gallons",
        "Should read unit as 'gallons'"
      );
      assert.isTrue(
        convertHandler.spellOutUnit("lbs") == "pounds",
        "Should read unit as 'pounds'"
      );
      assert.isTrue(
        convertHandler.spellOutUnit("mi") == "miles",
        "Should read unit as 'miles'"
      );
      assert.isTrue(
        convertHandler.spellOutUnit("l") == "litres",
        "Should read unit as 'litres'"
      );
      assert.isTrue(
        convertHandler.spellOutUnit("kg") == "kilograms",
        "Should read unit as 'kilograms'"
      );
      assert.isUndefined(
        convertHandler.spellOutUnit("jk"),
        "Should read unit as undefined"
      );
    });
  });
});

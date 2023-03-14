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
  });
});

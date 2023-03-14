const numberStringSplitter = (input) => {
  let number = input.match(/[.\d\/]+/g) || ["1"];
  let string =
    input.match(/[a-zA-Z+]/g) == null ? undefined : input.match(/[a-zA-Z+]/g);
  return [number[0], string];
};

const checkDiv = (fraction) => {
  let nums = fraction.split("/");
  if (nums.length > 2) {
    return false;
  }
  return nums;
};

function ConvertHandler() {
  this.getNum = function (input) {
    let result = numberStringSplitter(input)[0];
    let nums = checkDiv(result);

    if (!nums) return undefined;

    let num1 = nums[0];
    let num2 = nums[1] || "1";

    result = parseFloat(num1) / parseFloat(num2);

    if (isNaN(num1) || isNaN(num2)) return undefined;

    return result;
  };

  this.getUnit = function (input) {
    let result = numberStringSplitter(input)[1];
    result = result && result.join("").toLowerCase();
    // console.log(result);
    switch (result) {
      case "km":
        return "km";
      case "gal":
        return "gal";
      case "lbs":
        return "lbs";
      case "mi":
        return "mi";
      case "l":
        return "L";
      case "kg":
        return "kg";
      default:
        return undefined;
    }
    // return result;
  };

  this.getReturnUnit = function (initUnit) {
    let unit = initUnit && initUnit.toLowerCase();
    switch (unit) {
      case "km":
        return "mi";
      case "gal":
        return "L";
      case "lbs":
        return "kg";
      case "mi":
        return "km";
      case "l":
        return "gal";
      case "kg":
        return "lbs";
      default:
        return undefined;
    }
  };

  this.spellOutUnit = function (unit) {
    switch (unit) {
      case "km":
        return "kilometers";
      case "gal":
        return "gallons";
      case "lbs":
        return "pounds";
      case "mi":
        return "miles";
      case "l":
        return "litres";
      case "kg":
        return "kilograms";
      default:
        return undefined;
    }
  };

  this.convert = function (initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let unit = initUnit && initUnit.toLowerCase();
    switch (unit) {
      case "mi":
        return initNum * miToKm;
      case "gal":
        return initNum * galToL;
      case "lbs":
        return initNum * lbsToKg;
      case "km":
        return initNum / miToKm;
      case "l":
        return initNum / galToL;
      case "kg":
        return initNum / lbsToKg;
      default:
        return undefined;
    }
  };

  this.getString = async function (initNum, initUnit, returnNum, returnUnit) {
    if (!initUnit && !initNum) return `invalid number and unit`;
    else if (!initNum) return `invalid number`;
    else if (!initUnit) return `invalid unit`;
    let spellOutReturnUnit = await this.spellOutUnit(returnUnit);
    return `${initNum} ${initUnit} converts to ${returnNum} ${spellOutReturnUnit}`;
  };
}

module.exports = ConvertHandler;

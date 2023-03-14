"use strict";

// const expect = require("chai").expect;
const ConvertHandler = require("../controllers/convertHandler.js");

module.exports = function (app) {
  let convertHandler = new ConvertHandler();

  app.route("/api/convert").get(async (req, res) => {
    let input = await req.query.input;
    let initNum = await convertHandler.getNum(input);
    let initUnit = await convertHandler.getUnit(input);
    let returnNum = await convertHandler.convert(initNum, initUnit);
    let returnUnit = await convertHandler.getReturnUnit(initUnit);
    // console.log(initUnit);
    let string = await convertHandler.getString(
      initNum,
      initUnit,
      returnNum,
      returnUnit
    );
    res.send({
      initNum,
      initUnit,
      returnNum,
      returnUnit,
      string,
    });
  });
};

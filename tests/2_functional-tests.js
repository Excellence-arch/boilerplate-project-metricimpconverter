const chaiHttp = require("chai-http");
const chai = require("chai");
let assert = chai.assert;
const server = require("../server");

chai.use(chaiHttp);

suite("Functional Tests", function () {
  this.timeout(5000);
  suite("Integration test", () => {
    test("Test GET request to /", (done) => {
      chai
        .request(server)
        .get("/")
        .end((err, res) => {
          assert.equal(res.status, 200);
          // "initNum":10,"initUnit":"L","returnNum":2.64172,"returnUnit":"gal","string":"10 liters converts to 2.64172 gallons"
          // assert.equal(res.initNum, 10);
          // assert.equal(res.initUnit, "L");
          // assert.equal(res.returnNum, 2.64172);
          // assert.equal(res.returnUnit, "gal");
          // assert.equal(res.string, "10 liters converts to 2.64172 gallons");
          done();
        });
    });
    // #1
    test("Test 10L: GET request to /api/convert", (done) => {
      chai
        .request(server)
        .get("/api/convert?input=10L")
        .end((err, res) => {
          // assert.equal(res.status, 200);
          assert.equal(res.body.initNum, 10);
          assert.equal(res.body.initUnit, "L");
          assert.equal(res.body.returnNum, 2.6417217685798895);
          assert.equal(res.body.returnUnit, "gal");
          assert.equal(
            res.body.string,
            "10 L converts to 2.6417217685798895 gallons"
          );
          done();
        });
    });
    // #2
    test("32g: GET request to /api/convert", (done) => {
      chai
        .request(server)
        .get("/api/convert?input=32g")
        .end((err, res) => {
          assert.equal(res.body.string, "Invalid input");
          done();
        });
    });
    // #3
    test("3/7.2/4kg: GET request to /api/convert", (done) => {
      chai
        .request(server)
        .get("/api/convert?input=3/7.2/4kg")
        .end((err, res) => {
          assert.equal(res.body.string, "Invalid input");
          done();
        });
    });
    // #4
    test("3/7.2/4kilomegagram: GET request to /api/convert", (done) => {
      chai
        .request(server)
        .get("/api/convert?input=3/7.2/4kilomegagram")
        .end((err, res) => {
          assert.equal(res.body.string, "Invalid input");
          done();
        });
    });
    // #5
    test("kg: GET request to /api/convert", (done) => {
      chai
        .request(server)
        .get("/api/convert?input=kg")
        .end((err, res) => {
          assert.equal(res.body.initNum, 1);
          assert.equal(res.body.initUnit, "kg");
          assert.equal(res.body.returnNum, 2.2046244201837775);
          assert.equal(res.body.returnUnit, "lbs");
          assert.equal(
            res.body.string,
            "1 kg converts to 2.2046244201837775 pounds"
          );
          done();
        });
    });
  });
});

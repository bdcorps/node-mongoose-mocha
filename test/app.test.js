const app = require("../app");
var mongoose = require("mongoose");
const chai = require("chai");
const expect = chai.expect;

var mongodb =
  "mongodb://sssaini1:sssaini1@ds147902.mlab.com:47902/testing";
mongoose.connect(mongodb);

describe("App Test", () => {
  it("has a module", () => {
    expect(app).to.not.be.undefined;
  });

  let server;
  before(async () => {
    server = app.listen(3001);
  });

  after(async () => {
    await mongoose.connection.close();
    server.close();
  });

  describe("get user", () => {
    it("has a module", async () => {
      expect(app).not.to.be.undefined;
    });
  });

  describe("routes ", () => {
    it("has a module", async () => {
      await request(server)
        .get("/")
        .expect(200);
    });

    it("can post users", async () => {
      await request(server)
        .post("/")
        .expect(200);
    });

    it("fails post users", async () => {
      await request(server)
        .post("/")
        .expect(500);
    });
  });
});

const sinon = require("sinon");
const chai = require("chai");
const expect = chai.expect;

let spyOnConsole = sinon.spy(console, "log");

describe("Testing", function () {
  test("Testing 1st testcase, testing addition testcase", () => {
    expect(spyOnConsole.calledWith("Testing"));
  });


});
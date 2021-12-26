const chai = require("chai");
const expect = chai.expect;
const { findProducts, findProductsByCategory, findOneProduct } = require("../controllers/product.contoller");

describe("Testing Products", function () {
    test("Testing 1st testcase, findProducts", () => {
      const result = findProducts("Levi Strauss Jeans");
      expect(result).to.be.equal("Levi Strauss Jeans");
      console.log("Testing find Products");
    });
    test("Testing 2nd testcase, findProductsByCategory", () => {
      const result = findProductsByCategory("Apparel");
      expect(result).to.be.equal("Apparel");
      console.log("Testing find Products by Category");
    });
    test("Testing 3rd testcase, findOneProduct", () => {
      const result = findOneProduct("Levi Strauss Jeans");
      expect(result).to.be.equal("Levi Strauss Jeans");
      console.log("Testing find Products by ID");
    });

  });
  
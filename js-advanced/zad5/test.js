import { expect } from "chai";
import { createCalculator } from "./calculator.js";
import { sum } from "./sum.js";
import { isSymmetric } from "./symmetric.js";

describe("createCalculator()", function () {
  it("should add numbers correctly", function () {
    const calculator = createCalculator();
    calculator.add(5);
    calculator.add(10);
    expect(calculator.get()).to.be.equal(15);
  });

  it("should subtract numbers correctly", function () {
    const calculator = createCalculator();
    calculator.subtract(5);
    calculator.subtract(3);
    expect(calculator.get()).to.be.equal(-8);
  });

  it("should return 0 if no operations are performed", function () {
    const calculator = createCalculator();
    expect(calculator.get()).to.be.equal(0);
  });
});

describe("sum(arr)", function () {
  it("should return sum of array of numbers", function () {
    expect(sum(["1", "2", "2"])).to.be.equal(5);
    expect(sum(["10", "20", "30"])).to.be.equal(60);
  });

  it("should return 0 for empty array", function () {
    expect(sum([])).to.be.equal(0);
  });

  it("should handle negative numbers correctly", function () {
    expect(sum(["-1", "-2", "3"])).to.be.equal(0);
  });
});

describe("isSymmetric(arr)", function () {
  it("should return true for symmetric array", function () {
    expect(isSymmetric([1, 2, 3, 2, 1])).to.be.true;
    expect(isSymmetric(["a", "b", "c", "b", "a"])).to.be.true;
  });

  it("should return false for non-symmetric array", function () {
    expect(isSymmetric([1, 2, 3])).to.be.false;
    expect(isSymmetric(["a", "b", "c"])).to.be.false;
  });

  it("should return false for non-array inputs", function () {
    expect(isSymmetric("abc")).to.be.false;
    expect(isSymmetric(123)).to.be.false;
  });
});

import { lib } from "./lib.js";

describe("greet", () => {
  test("should greet with a name", () => {
    const result = lib.greet("John");
    expect(result).toBe("Welcome John");
  });
});
describe("Currency", () => {
  test("i have no idea what its suposed to do", () => {
    const result = lib.getCurrencies();
    expect(result).toEqual(["USD", "AUD", "EUR"]);
  });
});

describe("getProduct", () => {
  test("should return the product with the given id", () => {
    const result = lib.getProduct(1);
    expect(result).toEqual({ id: 1, price: 10 });
  });
});
describe("getProduct", () => {
  test("should return the product with the given id", () => {
    const result = lib.getProduct(5);
    expect(result).toEqual({ id: 5, price: 10 });
  });
});
describe("registerUser", () => {
  test("should throw if username is falsy", () => {
    const args = [null, undefined, NaN, "", 0, false];
    args.forEach((a) => {
      expect(() => {
        lib.registerUser(a);
      }).toThrow();
    });
  });
});

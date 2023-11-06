import { fizzBuzz } from "./fizzbuzz.js";

describe("fizzBuzz", () => {
  test("should throw an error if input is not a number", () => {
    const args = [null, undefined, NaN, "", false];
    args.forEach((a) => {
      expect(() => {
        fizzBuzz(a);
      }).toThrow();
    });
  });
});

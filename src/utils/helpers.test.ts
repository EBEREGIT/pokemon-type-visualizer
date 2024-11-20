import { getPercentage, getTotal } from "./helpers.ts";
import { test, expect, it } from "vitest";

test("returns the sum of numbers in an array", () => {
  expect(
    getTotal([
      ["", 1],
      ["", 2],
      ["", 3],
    ])
  ).toBe(6);
});

it("should calculate percentage", () => {
  expect(getPercentage(40, 200)).toBe(20);
});

it("should return zero (0) if either parameter is zero", () => {
  expect(getPercentage(0, 200)).toBe(0);
});

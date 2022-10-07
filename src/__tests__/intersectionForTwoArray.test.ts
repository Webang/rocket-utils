import { describe, expect, test } from "@jest/globals";
import { intersectionForTwoArray } from "../utils/intersectionForTwoArray";

describe("intersectionForTwoArray", () => {
  test("case 1", () => {
    const list1 = [1, 2, 3];
    const list2 = [2, 3, 4];
    expect(intersectionForTwoArray(list1, list2)).toEqual([2, 3]);
  });
});

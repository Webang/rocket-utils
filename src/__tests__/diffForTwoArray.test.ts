import { describe, expect, test } from "@jest/globals";
import { diffForTwoArray } from "../utils/diffForTwoArray";

describe("diffForTwoArray", () => {
  test("case 1", () => {
    const list1 = [1, 2, 3];
    const list2 = [2, 3, 4];

    expect(diffForTwoArray(list1, list2)).toEqual([1]);
  });

  test("case 2", () => {
    const list1 = [{ id: 1}, { id: 2}];
    const list2 = [{ id: 1 }];

    expect(diffForTwoArray(list1, list2)).toEqual([{ id: 1}, { id: 2}]);
  });

  test("case 2", () => {
    const list1 = [{ id: 1}, { id: 2}];
    const list2 = [{ id: 1 }];

    expect(diffForTwoArray(list1, list2, (a, b) => a.id === b.id)).toEqual([{ id: 2}]);
  });
});

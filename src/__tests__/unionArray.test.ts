import { describe, expect, test } from "@jest/globals";
import { unionArray } from "../utils/unionArray";

describe("unionArray", () => {
  test("case 1", () => {
    const list1 = [1, 2, 3];
    const list2 = [2, 3, 4];
    expect(unionArray(list1, list2)).toEqual([1, 2, 3, 4]);
  });

  test("case 2", () => {
    const list1 = [{ id: 1 }];
    const list2 = [{ id: 1 }, { id: 2 }];
    expect(unionArray(list1, list2, (a, b) => a.id === b.id)).toEqual([
      { id: 1 },
      { id: 2 },
    ]);
  });
});

import { describe, expect, test } from "@jest/globals";
import { flatTreeToArray } from "../utils/flatTreeToArray";

describe("flatTreeToArray", () => {
  const list1 = [
    {
      id: 1,
      children: [
        {
          id: 2,
          children: [
            {
              id: 3,
            },
          ],
        },
      ],
    },
    {
      id: 4,
      children: [
        {
          id: 5,
          children: [
            {
              id: 6,
            },
          ],
        },
      ],
    },
  ];
  test("tree data", () => {
    expect(flatTreeToArray(list1)).toEqual([
      { id: 1 },
      { id: 2 },
      { id: 3 },
      { id: 4 },
      { id: 5 },
      { id: 6 },
    ]);
  });
});

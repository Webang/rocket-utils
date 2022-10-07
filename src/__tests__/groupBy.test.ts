import { describe, expect, test } from "@jest/globals";
import { groupBy } from "../utils/groupBy";

describe("groupBy", () => {
  const list1 = [
    {
      id: 1,
      name: "B",
    },
    {
      id: 2,
      name: "A",
    },
    {
      id: 3,
      parentId: 1,
      name: "A",
    },
  ];

  test("groupBy 1", () => {
    const { keys, group } = groupBy(list1, "name");
    expect(keys).toEqual(["B", "A"]);
    expect(group).toEqual({
      B: [
        {
          id: 1,
          name: "B",
        }
      ],
      A: [
        {
          id: 2,
          name: "A",
        },
        {
          id: 3,
          parentId: 1,
          name: "A",
        },
      ]
    });
  });
});

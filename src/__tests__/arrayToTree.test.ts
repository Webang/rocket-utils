import { describe, expect, test } from "@jest/globals";
import { arrayToTree } from "../utils/arrayToTree";

describe("arrayToTree", () => {
  const list1 = [
    {
      id: 1,
      name: "1",
    },
    {
      id: 2,
      parentId: 1,
      name: "1-1",
    },
    {
      id: 3,
      parentId: 1,
      name: "1-2",
    },
  ];

  test("tree data", () => {
    expect(arrayToTree(list1, 'parentId', 'id')).toEqual([
      {
        id: 1,
        name: "1",
        children: [
          {
            id: 2,
            parentId: 1,
            name: "1-1",
          },
          {
            id: 3,
            parentId: 1,
            name: "1-2",
          },
        ],
      },
    ]);
  });
});

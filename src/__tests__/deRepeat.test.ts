import { describe, expect, test } from "@jest/globals";
import { deRepeat } from "../utils/deRepeat";

describe("deRepeat", () => {

  // case 1
  test("case 1", () => {
    const list1 = [
      {
        id: 1,
        name: "1",
      },
      {
        id: 1,
      },
    ];

    expect(deRepeat(list1)).toEqual([
      {
        id: 1,
        name: "1",
      },
      {
        id: 1,
      },
    ]);
  });

  // case 2
  test("case 2", () => {
    const list1 = [
      {
        id: 1,
        name: "1",
      },
      {
        id: 1,
      },
    ];

    expect(deRepeat(list1, 'id')).toEqual([
      {
        id: 1,
        name: "1",
      }
    ]);
  });
});

import { describe, expect, test } from "@jest/globals";
import { toHump } from "../utils/toHump";

describe("toHump", () => {
  test("default", () => {
    const value = toHump({
      my_name: "my_name",
      name: [
        {
          s_age: 20,
        },
        "11",
      ],
    });

    expect(value).toEqual({
      myName: 'my_name',
      name: [
        {
          sAge: 20
        },
        '11'
      ]
    });
  });
});

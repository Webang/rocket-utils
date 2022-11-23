import { describe, expect, test } from "@jest/globals";
import { getUrlParam } from "../utils/getUrlParam";

describe("getUrlParam", () => {
  test("default", () => {
    expect(getUrlParam('?name=1&id=2', 'name')).toEqual('1');
  });
  test("default", () => {
    expect(getUrlParam('name=1&id=2', 'name')).toEqual('1');
  });
});

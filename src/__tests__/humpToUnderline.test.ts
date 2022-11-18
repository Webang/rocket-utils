import {describe, expect, test} from '@jest/globals';
import { humpToUnderline } from "../utils/humpToUnderline";

describe('formatStrToHump', () => {
  test('default', () => {
    expect(humpToUnderline('myTestName')).toEqual('my_test_name');
  });
});
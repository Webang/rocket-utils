import {describe, expect, test} from '@jest/globals';
import { formatStrToHump } from "../utils/formatStrToHump";

describe('formatStrToHump', () => {
  test('default', () => {
    expect(formatStrToHump('my_test_name')).toEqual('myTestName');
    expect(formatStrToHump('my_test')).toEqual('myTest');
  });
});
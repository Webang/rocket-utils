import {describe, expect, test} from '@jest/globals';
import { genRandomNum } from "../utils/genRandomNum";

describe('genRandomNum', () => {
  test('undefined', () => {
    expect(genRandomNum(10, 12)).toBeLessThanOrEqual(12);
    expect(genRandomNum(10, 12)).toBeGreaterThanOrEqual(10);
  });
});
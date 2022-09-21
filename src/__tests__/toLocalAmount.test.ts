import {describe, expect, test} from '@jest/globals';
import { toLocalAmount } from "../utils/toLocalAmount";

describe('toLocalAmount', () => {
  test('1521212.1232', () => {
    expect(toLocalAmount(1521212.1232)).toBe("1,521,212.1232");
  });

  test('1521212', () => {
    expect(toLocalAmount(1521212)).toBe("1,521,212");
  });

  test('0.222', () => {
    expect(toLocalAmount(0.222)).toBe("0.222");
  });

  test('0.002', () => {
    expect(toLocalAmount(0.002)).toBe("0.002");
  });
});
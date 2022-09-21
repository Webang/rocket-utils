import {describe, expect, test} from '@jest/globals';
import { divideArray } from "../utils/divideArray";

describe('divideArray', () => {
  test('[1, 2, 3, 4]', () => {
    expect(divideArray([1, 2, 3, 4], 1).length).toBe(4);
  });

  test('[1, 2, 3, 4]', () => {
    expect(divideArray([1, 2, 3, 4], 2).length).toBe(2);
  });

  test('[1, 2, 3, 4]', () => {
    expect(divideArray([1, 2, 3, 4], 3).length).toBe(2);
  });

  test('[1, 2, 3, 4]', () => {
    expect(divideArray([1, 2, 3, 4], 4).length).toBe(1);
  });

  test('[1, 2, 3, 4, 5]', () => {
    expect(divideArray([1, 2, 3, 4, 5], 4)).toEqual([[1, 2, 3, 4], [5]]);
  });

  test('[1, 2, 3, 4]', () => {
    expect(divideArray([1, 2, 3, 4], 2)).toEqual([[1, 2], [3, 4]]);
  });

  test('[1, 2, 3, 4]', () => {
    expect(divideArray([1, 2, 3, 4], 3)).toEqual([[1, 2, 3], [4]]);
  });
});
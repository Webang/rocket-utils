import {describe, expect, test} from '@jest/globals';
import { validateValue } from "../utils/validateValue";

describe('validateValue', () => {
  test('undefined', () => {
    expect(validateValue(undefined)).toBe(false);
  });

  test('', () => {
    expect(validateValue("")).toBe(false);
  });

  test('Null', () => {
    expect(validateValue(null)).toBe(false);
  });
});
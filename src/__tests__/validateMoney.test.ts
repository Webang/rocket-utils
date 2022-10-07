import {describe, expect, test} from '@jest/globals';
import { validateMoney } from "../utils/validateMoney";

describe('isValidMoney', () => {
  test('00.22', () => {
    expect(validateMoney("00.22")).toBe(false);
  });

  test('0.22', () => {
    expect(validateMoney("0.22")).toBe(true);
  });

  test('0.2a', () => {
    expect(validateMoney("0.2a")).toBe(false);
  });

  test('-0.22', () => {
    expect(validateMoney("-0.22")).toBe(false);
  });
});
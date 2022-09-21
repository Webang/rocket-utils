import {describe, expect, test} from '@jest/globals';
import { isValidMoney } from "../utils/isValidMoney";

describe('isValidMoney', () => {
  test('00.22', () => {
    expect(isValidMoney("00.22")).toBe(false);
  });

  test('0.22', () => {
    expect(isValidMoney("0.22")).toBe(true);
  });

  test('0.2a', () => {
    expect(isValidMoney("0.2a")).toBe(false);
  });

  test('-0.22', () => {
    expect(isValidMoney("-0.22")).toBe(false);
  });
});
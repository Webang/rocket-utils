"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("@jest/globals");
const validateMoney_1 = require("../utils/validateMoney");
(0, globals_1.describe)('isValidMoney', () => {
    (0, globals_1.test)('00.22', () => {
        (0, globals_1.expect)((0, validateMoney_1.validateMoney)("00.22")).toBe(false);
    });
    (0, globals_1.test)('0.22', () => {
        (0, globals_1.expect)((0, validateMoney_1.validateMoney)("0.22")).toBe(true);
    });
    (0, globals_1.test)('0.2a', () => {
        (0, globals_1.expect)((0, validateMoney_1.validateMoney)("0.2a")).toBe(false);
    });
    (0, globals_1.test)('-0.22', () => {
        (0, globals_1.expect)((0, validateMoney_1.validateMoney)("-0.22")).toBe(false);
    });
});
//# sourceMappingURL=validateMoney.test.js.map
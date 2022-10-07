"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("@jest/globals");
const toLocalAmount_1 = require("../utils/toLocalAmount");
(0, globals_1.describe)('toLocalAmount', () => {
    (0, globals_1.test)('1521212.1232', () => {
        (0, globals_1.expect)((0, toLocalAmount_1.toLocalAmount)(1521212.1232)).toBe("1,521,212.1232");
    });
    (0, globals_1.test)('1521212', () => {
        (0, globals_1.expect)((0, toLocalAmount_1.toLocalAmount)(1521212)).toBe("1,521,212");
    });
    (0, globals_1.test)('0.222', () => {
        (0, globals_1.expect)((0, toLocalAmount_1.toLocalAmount)(0.222)).toBe("0.222");
    });
    (0, globals_1.test)('0.002', () => {
        (0, globals_1.expect)((0, toLocalAmount_1.toLocalAmount)(0.002)).toBe("0.002");
    });
});
//# sourceMappingURL=toLocalAmount.test.js.map
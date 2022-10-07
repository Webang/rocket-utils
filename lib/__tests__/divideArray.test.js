"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("@jest/globals");
const divideArray_1 = require("../utils/divideArray");
(0, globals_1.describe)('divideArray', () => {
    (0, globals_1.test)('[1, 2, 3, 4]', () => {
        (0, globals_1.expect)((0, divideArray_1.divideArray)([1, 2, 3, 4], 1).length).toBe(4);
    });
    (0, globals_1.test)('[1, 2, 3, 4]', () => {
        (0, globals_1.expect)((0, divideArray_1.divideArray)([1, 2, 3, 4], 2).length).toBe(2);
    });
    (0, globals_1.test)('[1, 2, 3, 4]', () => {
        (0, globals_1.expect)((0, divideArray_1.divideArray)([1, 2, 3, 4], 3).length).toBe(2);
    });
    (0, globals_1.test)('[1, 2, 3, 4]', () => {
        (0, globals_1.expect)((0, divideArray_1.divideArray)([1, 2, 3, 4], 4).length).toBe(1);
    });
    (0, globals_1.test)('[1, 2, 3, 4, 5]', () => {
        (0, globals_1.expect)((0, divideArray_1.divideArray)([1, 2, 3, 4, 5], 4)).toEqual([[1, 2, 3, 4], [5]]);
    });
    (0, globals_1.test)('[1, 2, 3, 4]', () => {
        (0, globals_1.expect)((0, divideArray_1.divideArray)([1, 2, 3, 4], 2)).toEqual([[1, 2], [3, 4]]);
    });
    (0, globals_1.test)('[1, 2, 3, 4]', () => {
        (0, globals_1.expect)((0, divideArray_1.divideArray)([1, 2, 3, 4], 3)).toEqual([[1, 2, 3], [4]]);
    });
});
//# sourceMappingURL=divideArray.test.js.map
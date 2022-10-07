"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("@jest/globals");
const deRepeat_1 = require("../utils/deRepeat");
(0, globals_1.describe)("deRepeat", () => {
    // case 1
    (0, globals_1.test)("case 1", () => {
        const list1 = [
            {
                id: 1,
                name: "1",
            },
            {
                id: 1,
            },
        ];
        (0, globals_1.expect)((0, deRepeat_1.deRepeat)(list1)).toEqual([
            {
                id: 1,
                name: "1",
            },
            {
                id: 1,
            },
        ]);
    });
    // case 2
    (0, globals_1.test)("case 2", () => {
        const list1 = [
            {
                id: 1,
                name: "1",
            },
            {
                id: 1,
            },
        ];
        (0, globals_1.expect)((0, deRepeat_1.deRepeat)(list1, 'id')).toEqual([
            {
                id: 1,
                name: "1",
            }
        ]);
    });
});
//# sourceMappingURL=deRepeat.test.js.map
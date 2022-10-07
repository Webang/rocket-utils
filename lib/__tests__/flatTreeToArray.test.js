"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("@jest/globals");
const flatTreeToArray_1 = require("../utils/flatTreeToArray");
(0, globals_1.describe)("flatTreeToArray", () => {
    const list1 = [
        {
            id: 1,
            children: [
                {
                    id: 2,
                    children: [
                        {
                            id: 3,
                        },
                    ],
                },
            ],
        },
        {
            id: 4,
            children: [
                {
                    id: 5,
                    children: [
                        {
                            id: 6,
                        },
                    ],
                },
            ],
        },
    ];
    (0, globals_1.test)("tree data", () => {
        (0, globals_1.expect)((0, flatTreeToArray_1.flatTreeToArray)(list1)).toEqual([
            { id: 1 },
            { id: 2 },
            { id: 3 },
            { id: 4 },
            { id: 5 },
            { id: 6 },
        ]);
    });
});
//# sourceMappingURL=flatTreeToArray.test.js.map
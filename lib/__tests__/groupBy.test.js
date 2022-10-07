"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("@jest/globals");
const groupBy_1 = require("../utils/groupBy");
(0, globals_1.describe)("groupBy", () => {
    const list1 = [
        {
            id: 1,
            name: "B",
        },
        {
            id: 2,
            name: "A",
        },
        {
            id: 3,
            parentId: 1,
            name: "A",
        },
    ];
    (0, globals_1.test)("groupBy 1", () => {
        const { keys, group } = (0, groupBy_1.groupBy)(list1, "name");
        (0, globals_1.expect)(keys).toEqual(["B", "A"]);
        (0, globals_1.expect)(group).toEqual({
            B: [
                {
                    id: 1,
                    name: "B",
                }
            ],
            A: [
                {
                    id: 2,
                    name: "A",
                },
                {
                    id: 3,
                    parentId: 1,
                    name: "A",
                },
            ]
        });
    });
});
//# sourceMappingURL=groupBy.test.js.map
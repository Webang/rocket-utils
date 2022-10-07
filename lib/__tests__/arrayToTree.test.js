"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("@jest/globals");
const arrayToTree_1 = require("../utils/arrayToTree");
(0, globals_1.describe)("arrayToTree", () => {
    const list1 = [
        {
            id: 1,
            name: "1",
        },
        {
            id: 2,
            parentId: 1,
            name: "1-1",
        },
        {
            id: 3,
            parentId: 1,
            name: "1-2",
        },
    ];
    (0, globals_1.test)("tree data", () => {
        (0, globals_1.expect)((0, arrayToTree_1.arrayToTree)(list1, 'parentId', 'id')).toEqual([
            {
                id: 1,
                name: "1",
                children: [
                    {
                        id: 2,
                        parentId: 1,
                        name: "1-1",
                    },
                    {
                        id: 3,
                        parentId: 1,
                        name: "1-2",
                    },
                ],
            },
        ]);
    });
});
//# sourceMappingURL=arrayToTree.test.js.map
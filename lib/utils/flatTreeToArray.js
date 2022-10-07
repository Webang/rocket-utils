"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.flatTreeToArray = void 0;
/**
 * @description: 将 tree 拍平, 深度优先
 * @param data 数据源
 * @returns
 */
const flatTreeToArray = (data) => {
    const newData = [];
    const traverse = (item) => {
        const { children, ...restParams } = item;
        newData.push(restParams);
        (children || []).map((v) => {
            traverse(v);
        });
    };
    (Array.isArray(data) ? data : []).forEach((v) => {
        traverse(v);
    });
    return newData;
};
exports.flatTreeToArray = flatTreeToArray;
//# sourceMappingURL=flatTreeToArray.js.map
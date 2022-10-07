"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.arrayToTree = void 0;
/**
 * @description 数组转 Tree
 * @param data 数据源
 * @param childKey 标识父子关系的字段
 * @param rowKey 数据唯一标识
 */
const arrayToTree = (data, parentKey = "parentId", rowKey = "id") => {
    // 假设节点 A 有父节点
    // 则将 A 当到 map 中
    const map = new Map();
    data.forEach((it) => {
        const parent = data.find((parent) => it[parentKey] === parent[rowKey]);
        if (parent) {
            map.set(it[rowKey], true);
            parent.children = parent.children || [];
            parent.children.push(it);
        }
    });
    const newData = data.filter((it) => !map.has(it[rowKey]));
    return newData;
};
exports.arrayToTree = arrayToTree;
//# sourceMappingURL=arrayToTree.js.map
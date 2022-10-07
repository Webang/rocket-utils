"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.groupBy = void 0;
/**
 * @description 将数据分组
 * @param list 数据源
 * @param key 分组依据字段
 * @returns
 */
function groupBy(list, key) {
    const group = {};
    list.forEach((it) => {
        const value = it[key];
        if (!group[value]) {
            group[value] = [];
        }
        group[value].push(it);
    });
    return {
        keys: Object.keys(group),
        group
    };
}
exports.groupBy = groupBy;
//# sourceMappingURL=groupBy.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deRepeat = void 0;
/**
 * @description 数据去重
 * @param data 数据源
 * @param key 去重比较字段
 */
const deRepeat = (data, key) => {
    const newData = [];
    data.forEach((it) => {
        const exist = key ? newData.some(el => el[key] === it[key]) : newData.some(el => el === it);
        if (!exist) {
            newData.push(it);
        }
    });
    return newData;
};
exports.deRepeat = deRepeat;
//# sourceMappingURL=deRepeat.js.map
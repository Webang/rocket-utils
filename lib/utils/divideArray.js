"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.divideArray = void 0;
/**
 * @description 数组分割
 * @param arr 数据源
 * @param size 大小
 * @returns
 */
const divideArray = (arr, size = 1) => {
    const res = [];
    const sum = Math.ceil(arr.length / size);
    for (let i = 0; i < sum; i++) {
        res.push(arr.slice(i * size, (i + 1) * size));
    }
    return res;
};
exports.divideArray = divideArray;
//# sourceMappingURL=divideArray.js.map
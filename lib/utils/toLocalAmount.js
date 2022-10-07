"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toLocalAmount = void 0;
/**
 * @description 将金额处理为本地数值的展示形式, 主要是加上千分位
 * @param num 金额大小
 * @param decimal 小数点符号
 * @param divider 分割符号
 * @example 123456.78 => 123,456.78
 * @returns
 */
function toLocalAmount(num, decimal = ".", divider = ",") {
    // 将金额处理为本地数值的展示形式, 主要是加上千分位
    // https://regexper.com/#%2F%28%5Cd%29%28%3F%3D%28%3F%3A%5Cd%7B3%7D%29%2B%28%2C%5Cd%2B%29%3F%24%29%2Fg
    // 123456.78 => 123,456.78
    let [prefix, suffix] = (num || 0).toString().split(".");
    return ((prefix || "").replace(/(\d)(?=(?:\d{3})+$)/g, `$1${divider}`) +
        (suffix ? decimal + suffix : ""));
}
exports.toLocalAmount = toLocalAmount;
//# sourceMappingURL=toLocalAmount.js.map
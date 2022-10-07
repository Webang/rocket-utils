"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateMoney = void 0;
/**
 * @description 验证是否为有效的金额
 * @param val 金额
 * @param decimal 小数点符号
 * @note 1 必须为正确的数值
 * @note 2 数值必须不小于0
 * @returns
 */
const validateMoney = (val, decimal = '.') => {
    // if use new RegExp(content: string), special characters such as "\", should be escaped
    // for example:
    // var re = new RegExp("\\w+");
    // var re = /\w+/;
    const regStr = `^(([1-9]\\d*)|0)(${decimal}\\d{1,})?$`;
    const reg = new RegExp(regStr, "g");
    return reg.test(val.toString());
};
exports.validateMoney = validateMoney;
//# sourceMappingURL=validateMoney.js.map
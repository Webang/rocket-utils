/**
 * @description 验证是否为有效的金额
 * @param val 金额
 * @param decimal 小数点符号
 * @note 1 必须为正确的数值
 * @note 2 数值必须不小于0
 * @returns
 */
export declare const validateMoney: (val: string | number, decimal?: string) => boolean;

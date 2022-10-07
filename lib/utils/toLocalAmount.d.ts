/**
 * @description 将金额处理为本地数值的展示形式, 主要是加上千分位
 * @param num 金额大小
 * @param decimal 小数点符号
 * @param divider 分割符号
 * @example 123456.78 => 123,456.78
 * @returns
 */
export declare function toLocalAmount(num: string | number, decimal?: string, divider?: string): string;

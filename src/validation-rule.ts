import { T_REGION } from "src";

/**
 * @description 字符串转数值
 * @param val
 * @param region
 * @returns
 */
export const parseMoney = (val: string, region: T_REGION) => {
  return region === "br"
    ? Number(val.replaceAll(".", "").replace(",", "."))
    : Number(val);
};

/**
 * @description 判断是否为有效的金额
 * @param val
 * @param region
 * @returns
 */
export const isValidMoney = (val: string, region: T_REGION) => {
  const _val = Number(val);
  const isNumber =
    region === "br" ? /^(([1-9]\d*)|0)(,\d{1,})?$/g.test(val) : _val === _val;
  return isNumber && parseMoney(val, region) > 0;
};


// export const parseMoney = (val: string) => {
//   return REGION === 'br' ? Number(val.replaceAll('.', '').replace(',', '.')) : Number(val)
// }
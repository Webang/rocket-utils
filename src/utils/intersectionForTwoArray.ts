/**
 * 两个数组的交集
 * @param a 数组
 * @param b 数组
 * @param funForEqual 判断两个元素是否相等
 * @returns 返回两个数组的交集
 */
export const intersectionForTwoArray = (
  a: any[],
  b: any[],
  funForEqual = (a: any, b: any) => a === b
) => {
  return a.filter((it) => b.some((el) => funForEqual(el, it)));
};
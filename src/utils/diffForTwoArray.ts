/**
 * 两个数组相减
 * @param a 数组
 * @param b 被减数组
 * @param funForEqual 判断两个元素是否相等
 * @returns 返回数组，数组中的元素在a中, 而不在b中 
 */
export const diffForTwoArray = (
  a: any[],
  b: any[],
  funForEqual = (a: any, b: any) => a === b
) => {
  return a.filter((it) => !b.some((el) => funForEqual(el, it)));
};
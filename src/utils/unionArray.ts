/**
 * 两个数组的并集
 * @param a 数组1
 * @param b 数组2
 * @param funForEqual 判断两个元素是否相等
 * @return 两个数组的并集
 */
 export const unionArray = (
  a: any[],
  b: any[],
  funForEqual = (a: any, b: any) => a === b
) => {
  const array = [...a];
  b.forEach((it) => {
    if (!array.some((el) => funForEqual(el, it))) {
      array.push(it)
    }
  });

  return array;
};
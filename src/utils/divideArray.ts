/**
 * @description 数组分割
 * @param arr 数据源
 * @param size 大小
 * @returns 
 */
export const divideArray = (arr: any[], size = 1) => {
  const res = [];
  const sum = Math.ceil(arr.length / size);

  for (let i = 0; i < sum; i++) {
    res.push(arr.slice(i * size, (i + 1) * size));
  }

  return res;
}
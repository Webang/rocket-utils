/**
 * @desc 返回 [min, max] 之间的数字
 * @param min 
 * @param max 
 * @returns 
 */
export const genRandomNum = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

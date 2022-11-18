/**
 * @desc 根据 path 访问 obj
 * @param obj 
 * @param path 
 * @returns 
 */
export function visitPath(obj: any, path: string) {
  let val = obj;

  try {
    path.split('.').forEach((key) => {
      val = val[key];
    });
  } catch (e) {
    return undefined;
  }

  return val;
}
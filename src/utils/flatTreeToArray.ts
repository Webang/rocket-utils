/**
 * @description: 将 tree 拍平, 深度优先
 * @param data 数据源
 * @returns 
 */
export const flatTreeToArray = (data: any) => {
  const newData: any[] = [];

  const traverse = (item: any) => {
    const { children, ...restParams } = item;
    newData.push(restParams);
    (children || []).map((v: any) => {
      traverse(v);
    });
  };

  (Array.isArray(data) ? data : []).forEach((v) => {
    traverse(v);
  });

  return newData;
};

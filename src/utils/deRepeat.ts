/**
 * @description 数据去重
 * @param data 数据源
 * @param key 去重比较字段
 */
export const deRepeat = (data: any[], key?: string) => {
  const newData: any[] = [];

  data.forEach((it) => {
    const exist = key ? newData.some(el => el[key] === it[key]) : newData.some(el => el === it);
    if (!exist) {
      newData.push(it)
    }
  });

  return newData;
};

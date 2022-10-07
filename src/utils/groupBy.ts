/**
 * @description 将数据分组
 * @param list 数据源
 * @param key 分组依据字段
 * @returns
 */
export function groupBy(list: Record<string, any>[], key: string) {
  const group = {} as Record<string, Record<string, string>[]>;

  list.forEach((it) => {
    const value = it[key];
    if (!group[value]) {
      group[value] = [];
    }
    group[value].push(it);
  });

  return {
    keys: Object.keys(group),
    group
  };
}
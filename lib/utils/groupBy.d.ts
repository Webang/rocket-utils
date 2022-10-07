/**
 * @description 将数据分组
 * @param list 数据源
 * @param key 分组依据字段
 * @returns
 */
export declare function groupBy(list: Record<string, any>[], key: string): {
    keys: string[];
    group: Record<string, Record<string, string>[]>;
};

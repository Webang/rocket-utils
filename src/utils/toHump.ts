import { formatStrToHump } from "./formatStrToHump";

// 下划线转驼峰
export const toHump = (data: Record<string | number, any>): any => {
  if (data === null || typeof data !== "object") {
    return data;
  }

  if (Array.isArray(data)) {
    const copyData = [];
    for (let key = 0; key < data.length; key++) {
      copyData[key] = toHump(data[key]);
    }
    return copyData;
  }

  const copyData = {} as any;

  for (let key in data) {
    const _key = formatStrToHump(key as string);
    copyData[_key] = toHump(data[key]);
  }

  return copyData;
};
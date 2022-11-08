// 字符串下划线转驼峰
export const formatStrToHump = (value: string) => {
  return value.replace(/\_(\w)/g, (_, letter) => letter.toUpperCase());
};
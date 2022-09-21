// if use new RegExp(content: string), special characters such as "\", should be escaped
// for example:
// var re = new RegExp("\\w+");
// var re = /\w+/;

// 判断是否为有效的金额
export const isValidMoney = (val: string|number, decimal = '.') => {
  const regStr = `^(([1-9]\\d*)|0)(${decimal}\\d{1,})?$`
  const reg = new RegExp(regStr, "g");
  return reg.test(val.toString())
};
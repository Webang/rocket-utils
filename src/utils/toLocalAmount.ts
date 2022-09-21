// 将金额处理为本地数值的展示形式, 主要是加上千分位
// https://regexper.com/#%2F%28%5Cd%29%28%3F%3D%28%3F%3A%5Cd%7B3%7D%29%2B%28%2C%5Cd%2B%29%3F%24%29%2Fg
// 123456.78 => 123,456.78
export function toLocalAmount(
  num: string | number,
  decimal = ".",
  divider = ","
) {
  let [prefix, suffix] = (num || 0).toString().split(".");
  return (
    (prefix || "").replace(/(\d)(?=(?:\d{3})+$)/g, `$1${divider}`) +
    (suffix ? decimal + suffix : "")
  );
}

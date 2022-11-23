/**
 * @description 获取 url 参数
 * @param url
 * @param name
 * @returns
 */
export function getUrlParam(url: string, name: string) {
  // 构造一个含有目标参数的正则表达式对象
  const reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)');
  const str = url.includes('?') ? (url.split('?')[1] || '') : url;
  const res = str.match(reg);

  if (res != null) {
    return decodeURIComponent(res[2]);
  }

  return null;
}
export const humpToUnderline = (str: string) => {
  return str.replace(/\B([A-Z])/g, '_$1').toLowerCase();
};
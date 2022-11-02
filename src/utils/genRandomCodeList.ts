import { genRandomNum } from "./genRandomNum";

export const genRandomCodeList = (
  length: number,
  count: number,
  seeds = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
  ]
) => {
  let randoms = new Set<string>();
  while (randoms.size < count) {
    for (let i = 0; i < length; i++) {
      const random = genRandomNum(0, seeds.length - 1);
      randoms.add(`${random}`);
    }
  }

  return Array.from(randoms.keys());
};

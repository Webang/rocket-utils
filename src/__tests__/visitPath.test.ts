import {describe, expect, test} from '@jest/globals';
import { visitPath } from "../utils/visitPath";

describe('visitPath', () => {
  const a = {
    b: {
      c: 'a',
      d: {
        c: '2'
      },
      list: [
        {
          a: '1'
        }
      ]
    },
  };

  test('undefined', () => {
    expect(visitPath(a, 'b.list.0.a')).toBe('1');
    expect(visitPath(a, 'b.d.c.a.as')).toBe(undefined);
  });
});
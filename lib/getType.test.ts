import { describe, expect, test } from 'vitest';
import getType from './getType';

describe('Util "getType"', () => {
  test('should get type correctly', () => {
    expect(getType(undefined)).toBe('undefined');
    expect(getType(null)).toBe('null');
    expect(getType('')).toBe('string');
    expect(getType(1)).toBe('number');
    expect(getType(true)).toBe('boolean');
    expect(getType([])).toBe('array');
    expect(getType({})).toBe('object');
    expect(getType(new File([], ''))).toBe('file');
  });
});

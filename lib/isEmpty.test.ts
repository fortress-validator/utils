import { describe, expect, test } from 'vitest';
import isEmpty from './isEmpty';

describe('Util "isEmpty"', () => {
  test('should return true for empty values', () => {
    expect(isEmpty(undefined)).toBe(true);
    expect(isEmpty(null)).toBe(true);
    expect(isEmpty('')).toBe(true);
    expect(isEmpty([])).toBe(true);
  });

  test('should return false for non-empty values', () => {
    expect(isEmpty('foo')).toBe(false);
    expect(isEmpty(1)).toBe(false);
    expect(isEmpty(0)).toBe(false);
    expect(isEmpty(true)).toBe(false);
    expect(isEmpty(false)).toBe(false);
    expect(isEmpty({})).toBe(false);
    expect(isEmpty(new File([], ''))).toBe(false);
  });
});

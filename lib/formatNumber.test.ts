import { describe, expect, test } from 'vitest';
import formatNumber from './formatNumber';

describe('Util "formatNumber"', () => {
  test('should format number correctly', () => {
    expect(formatNumber(1000)).toBe('1,000');
  });
});

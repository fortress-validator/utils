import { describe, expect, test } from 'vitest';
import quote from './quote';

describe('Util "quote"', () => {
  test('should quote correctly', () => {
    expect(quote('foo')).toBe('"foo"');
  });
});

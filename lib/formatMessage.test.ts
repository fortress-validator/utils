import { describe, expect, test } from 'vitest';
import formatMessage from './formatMessage';

describe('Util "formatMessage"', () => {
  test('should format message correctly', () => {
    expect(formatMessage('此欄位必須是以下任何值：foo, bar')).toBe('此欄位必須是以下任何值：foo, bar');
    expect(formatMessage('此欄位必須是有效的JSON字串')).toBe('此欄位必須是有效的 JSON 字串');
  });
});

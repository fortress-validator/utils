import { describe, expect, test } from 'vitest';
import createTestFile from './createTestFile';

describe('Util "createTestFile"', () => {
  test('should create test file correctly', () => {
    const testFile = createTestFile(1);
    expect(testFile).instanceOf(File);
    expect(testFile.size).toBe(1024);
    expect(testFile.name).toBe('');
  });
});

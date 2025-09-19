import { encrypt, decrypt } from '../../lib/security';

test('encrypt decrypt', () => {
  const data = 'test';
  expect(decrypt(encrypt(data))).toBe(data);
});

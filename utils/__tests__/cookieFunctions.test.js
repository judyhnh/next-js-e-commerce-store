import {
  deleteCookie,
  getParsedCookie,
  setStringifiedCookie,
} from '../cookies';

test('get, set and delete cookie', () => {
  const cookie = { key: 'cart', value: [{ id: 1, quantity: 1 }] };
  // 1. get cookies
  expect(getParsedCookie(cookie.key)).toStrictEqual([]);
  // 2. set cookies without any errors
  expect(() => setStringifiedCookie(cookie.key, cookie.value)).not.toThrow();

  // 3. array should not be empty
  expect(getParsedCookie(cookie.key)).toStrictEqual([{ id: 1, quantity: 1 }]);
  // 4. if quantity changed, no error should be shown
  expect(() =>
    setStringifiedCookie(cookie.key, [{ id: 1, quantity: 2 }]),
  ).not.toThrow();
  expect(getParsedCookie(cookie.key)).toStrictEqual([{ id: 1, quantity: 2 }]);

  // delete cookie
  expect(deleteCookie(cookie.key)).toBe(undefined);
  expect(getParsedCookie(cookie.key)).toStrictEqual([]);
});

import { sayHello } from './hello';

test('Testing sayHello', () => {
  expect(sayHello('Adam')).toBe('Hello Adam')
})
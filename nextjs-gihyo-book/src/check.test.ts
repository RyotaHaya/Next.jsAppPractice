import { isZero } from './check'
test('0を渡したらtrueになること', () => {
  const result = isZero(0)
  expect(result).toBe(true)
})

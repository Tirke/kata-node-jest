import { hello, MSG } from '../src'

it('return Hello', () => {
  // Given
  const expected = MSG
  // When
  const result = hello()
  // Then
  expect(result).toBe(expected)
})

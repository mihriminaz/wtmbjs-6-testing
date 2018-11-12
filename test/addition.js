import test from 'ava'
import library from '../library'

test('Add 3 + 5', t => {
  const result = library.add(3, 5)

  t.is(result, 8, 'Output should be equal to 8')
})

// test('automatic pass', t => t.pass())
// test('automatic pass', t => t.fail())


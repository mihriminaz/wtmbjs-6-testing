import test from 'ava'
import library from '../library'

test('Add 3 + 5', t => {
  const result = library.add(3, 5)

  t.is(result, 8, 'Output should be equal to 8')
})

test('Add 4 + 5', t => {
  const result = library.add(4, 5)

  t.is(result, 9, 'Output should be equal to 8')
})

test('Add -4 + 99', t => {
  const result = library.add(-4, 99)

  t.is(result, 95, 'Output should be equal to 95')
})

test('Add 0.1 + 0.2', t => {
    const result = library.add(0.1, 0.2)

    t.is(result, 0.3, 'Output should be equal to 0.3')
  })

  test('Add 0.5 + 0.6', t => {
    const result = library.add(0.5, 0.6)

    t.is(result, 1.1, 'Output should be equal to 1.1')
  })

// test('automatic pass', t => t.pass())
// test('automatic pass', t => t.fail())


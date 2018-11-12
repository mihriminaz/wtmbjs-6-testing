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

  test('Add 0.4 + 0.2', t => {
    const result = library.add(0.4, 0.2)

    t.is(result, 0.6, 'Output should be equal to 0.6')
  })

test('push 3 to an array', t => {
    const result = library.pushToArray([], 3)

    t.deepEqual(result, [3])
})

test('push 3 to an array', t => {
    const resulta = library.pushToArray([{val: 10}, 20, {person: 'mihri'}], 3)

    t.deepEqual(resulta, [{val: 10}, 20, {person: 'mihri'}, 3])
})

test('create person', t => {
    const person = new library.Person('Armagan Amcalar', 33)

    t.is(person.name, 'Armagan Amcalar')
    t.is(person.age, 33)
})

test('person get older', t => {
    const person = new library.Person('Mihri Minaz', 32)
    person.grow()
    t.is(person.age, 33)
})


// test('automatic pass', t => t.pass())
// test('automatic pass', t => t.fail())


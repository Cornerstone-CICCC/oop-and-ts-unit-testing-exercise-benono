// Create two test cases for incrementing and decrementing a number
// Test case 1: counter(10, 'increment') will eventualy return 10
// Test case 2: counter(10, 'decrement') will eventually return 0
// Both test cases need to pass
// HINT: Use the jest `resolves` matcher so that it is easier to work with async functions

const counter = require('../src/counter')
// Pattern 1: setTimeout all the file
//jest.setTimeout(10000)

// Pattern 2: setTimeout individually
test("counter(5, 'increment') will eventualy return 5", () => {
  return expect(counter(3, 'increment')).resolves.toBe(3)
})

test("counter(5, 'decrement') will eventualy return 0", () => {
  return expect(counter(3, 'decrement')).resolves.toBe(0)
})

// Pattern 3: Use faketimes
// const counter = require('../src/counter')

// jest.useFakeTimers()

// test('increment counter', async () => {
//   const counterPromise = counter(3, 'increment')
//   jest.runAllTimers()
//   await expect(counterPromise).resolves.toBe(3)
// })

// test('decrement counter', async () => {
//   const counterPromise = counter(3, 'decrement')
//   jest.runAllTimers()
//   await expect(counterPromise).resolves.toBe(0)
// })

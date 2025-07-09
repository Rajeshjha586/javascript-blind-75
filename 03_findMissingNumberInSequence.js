function findMissingNumberInSequence(numbers) {
  // Total numbers including the missing one
  const n = numbers.length;

  // Sum of first n natural numbers
  const expectedSum = (n * (n + 1)) / 2;

  // Sum of given numbers
  const actualSum = numbers.reduce((sum, num) => sum + num, 0);

  return expectedSum - actualSum;
}

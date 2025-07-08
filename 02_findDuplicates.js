function findDuplicates(numbers) {
  numbers.sort((a, b) => a - b);
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === numbers[i + 1]) return true;
  }

  return false;
}

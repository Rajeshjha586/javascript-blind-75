function arrayProductExcludingCurrent(numbers) {
  const result = [];
  let product = 1;

  // Find the prefix products and store them in the output array
  result[0] = 1;
  for (let i = 1; i < numbers.length; i++) {
    result[i] = result[i - 1] * numbers[i - 1];
  }

  // Find the suffix products in place and multiply them with the prefix products

  for (let i = numbers.length - 1; i >= 0; i--) {
    result[i] *= product;
    product *= numbers[i];
  }

  return result;
}

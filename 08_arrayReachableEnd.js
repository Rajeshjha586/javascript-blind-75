/**
 * @param {number[]} numbers
 * @return {boolean}
 */
function arrayReachableEnd(numbers) {
  let maxIndex = 0;
  for (let index = 0; index < numbers.length; index++) {
    if (index > maxIndex) {
      return false;
    }

    maxIndex = Math.max(maxIndex, index + numbers[index]);
  }

  return true;
}

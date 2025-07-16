/**
 * @param {number[]} numbers
 * @return {number}
 */
function smallestInRotatedArray(numbers) {
  let left = 0;
  let right = numbers.length - 1;
  let ans = Number.MAX_SAFE_INTEGER;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    //Search space is already sorted
    //then always numbers[left] is will be smaller
    // in that search space
    if (numbers[left] <= numbers[right]) {
      ans = Math.min(ans, numbers[left]);
      break;
    }

    if (numbers[left] <= numbers[mid]) {
      ans = Math.min(ans, numbers[left]);
      left = mid + 1;
    } else {
      ans = Math.min(ans, numbers[mid]);
      right = mid - 1;
    }
  }
  return ans;
}

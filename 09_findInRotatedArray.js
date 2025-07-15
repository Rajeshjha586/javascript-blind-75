/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number}
 */
function findInRotatedArray(numbers, target) {
  let left = 0;
  let right = numbers.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (numbers[mid] === target) {
      return mid;
    }

    if (numbers[left] <= numbers[mid]) {
      //left sorted
      if (numbers[left] <= target && target <= numbers[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else {
      //right sorted
      if (numbers[mid] <= target && target <= numbers[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }
  return -1;
}

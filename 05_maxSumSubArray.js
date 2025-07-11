function maxSumSubArray(numbers) {
  let max = Number.MIN_SAFE_INTEGER;
  let n = numbers.length;
  let sum = 0;
  //   let start = 0;
  //   let ansStart = -1;
  //   let ansEnd = -1;

  for (let i = 0; i < n; i++) {
    // if (sum === 0) {
    //   start = i;
    // }

    sum = sum + numbers[i];

    if (sum > max) {
      max = sum;
      //   ansStart = start;
      //   ansEnd = i;
    }

    //max = Math.max(max, sum);

    if (sum < 0) {
      sum = 0;
    }
  }

  //   console.log(numbers.slice(ansStart, ansEnd + 1));

  return max;
}

// console.log(maxSumSubArray([-2, -3, 4, -1, -2, 1, 5, -3]));

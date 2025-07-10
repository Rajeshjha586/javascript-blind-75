function maxProductSubArray(numbers) {
  let prefix = 1;
  let suffix = 1;
  let max = Number.NEGATIVE_INFINITY;
  let n = numbers.length;

  for (let i = 0; i < n; i++) {
    if (prefix === 0) {
      prefix = 1;
    }

    if (suffix === 0) {
      suffix = 1;
    }

    prefix = prefix * numbers[i];
    suffix = suffix * numbers[n - i - 1];
    max = Math.max(max, Math.max(prefix, suffix));
  }

  return max;
}

/**
 * @param {number} n
 * @return {number[]}
 */
function bitCounting(n) {
  const memo = new Array(n + 1).fill(0);
  for (let i = 1; i <= n; i++) {
    //memo[i] = memo[i / 2] + (i % 2);
    memo[i] = memo[i >> 1] + (i & 1);
  }

  return memo;
}

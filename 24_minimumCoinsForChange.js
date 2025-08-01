/**
 * @param {number[]} coins
 * @param {number} target
 * @return {number}
 */
function minimumCoinsForChange(coins, target) {
  const dp = new Array(target + 1).fill(Number.MAX_VALUE);

  dp[0] = 0;

  for (let i = 1; i <= target; i++) {
    for (const coin of coins) {
      if (i - coin >= 0) {
        dp[i] = Math.min(dp[i], dp[i - coin] + 1);
      }
    }
  }

  return dp[target] === Number.MAX_VALUE ? -1 : dp[target];
}

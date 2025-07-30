/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number}
 */
function combinationTargetSum(numbers, target) {
  const dp = new Array(target + 1).fill(0);

  dp[0] = 1;

  for (let combSum = 1; combSum <= target; combSum++) {
    for (const num of numbers) {
      if (combSum - num >= 0) {
        dp[combSum] += dp[combSum - num];
      }
    }
  }

  return dp[target];
}

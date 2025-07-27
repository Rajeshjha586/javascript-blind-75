/**
 * @param {TreeNode | null} root
 * @return {number}
 */
function binaryTreeMaximumPathSum(root) {
  let globalMaxPathSum = -Infinity;

  function computeMaxGainFromNode(node) {
    if (node === null) {
      return 0;
    }

    // Recursively compute max gain from left and right subtrees
    const leftGain = Math.max(0, computeMaxGainFromNode(node.left));
    const rightGain = Math.max(0, computeMaxGainFromNode(node.right));

    // Max path sum at this node (including both children)
    const localMaxPath = node.val + leftGain + rightGain;

    // Update global max if needed
    globalMaxPathSum = Math.max(globalMaxPathSum, localMaxPath);

    // Return max gain if continuing path upwards through one child
    return node.val + Math.max(leftGain, rightGain);
  }

  computeMaxGainFromNode(root);
  return globalMaxPathSum;
}

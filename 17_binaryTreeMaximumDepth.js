/**
 * @param {TreeNode | null} root
 * @return {number}
 */
function binaryTreeMaximumDepth(root) {
  if (root === null) return 0;

  let lh = binaryTreeMaximumDepth(root.left);
  let rh = binaryTreeMaximumDepth(root.right);

  return 1 + Math.max(lh, rh);
}

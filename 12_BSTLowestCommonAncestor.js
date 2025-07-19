/**
 * @param {TreeNode} root
 * @param {TreeNode} a
 * @param {TreeNode} b
 * @return {TreeNode | null}
 */
function BSTLowestCommonAncestor(root, a, b) {
  if (root === null) {
    return null;
  }

  let curr = root.val;
  if (curr < a.val && curr < b.val) {
    return BSTLowestCommonAncestor(root.right, a, b);
  }

  if (curr > a.val && curr > b.val) {
    return BSTLowestCommonAncestor(root.left, a, b);
  }

  return root;
}

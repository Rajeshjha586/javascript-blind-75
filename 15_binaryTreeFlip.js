/**
 * @param {TreeNode | null} root
 * @return {TreeNode | null}
 */
function binaryTreeFlip(root) {
  if (root == null) {
    return root;
  }

  binaryTreeFlip(root.left);
  binaryTreeFlip(root.right);

  const curr = root.left;
  root.left = root.right;
  root.right = curr;

  return root;
}

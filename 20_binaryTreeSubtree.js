/**
 * @param {TreeNode | null} root
 * @param {TreeNode | null} subRoot
 * @return {boolean}
 */
function preOrderTraversal(node) {
  if (node === null) {
    return "null";
  }

  let sb = "^";
  sb += node.val;
  sb += preOrderTraversal(node.left);
  sb += preOrderTraversal(node.right);

  return sb;
}

function binaryTreeSubtree(root, subRoot) {
  const fullTree = preOrderTraversal(root);
  const subTree = preOrderTraversal(subRoot);

  return fullTree.includes(subTree);
}

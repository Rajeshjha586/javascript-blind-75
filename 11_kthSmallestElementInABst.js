/**
 * @param {TreeNode | null} root
 * @param {number} k
 * @return {number}
 */
function kthSmallestElementInABst(root, k) {
  let ans;
  let count = 0;

  function inOrderTraversal(root) {
    if (!root) {
      return; //If root is null nothing to do
    }

    inOrderTraversal(root.left);
    count++;

    if (count === k) {
      //when count===k store the value to ans
      return (ans = root.val);
    }

    inOrderTraversal(root.right);
  }

  inOrderTraversal(root);
  return ans;
}

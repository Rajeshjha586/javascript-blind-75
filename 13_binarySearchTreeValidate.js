/**
 * @param {TreeNode | null} root
 * @return {boolean}
 */
function binarySearchTreeValidate(root) {
  function isValidBST(root, minVal, maxVal) {
    if (root === null) return true;

    if (root.val >= maxVal || root.val <= minVal) {
      return false;
    }

    return (
      isValidBST(root.left, minVal, root.val) &&
      isValidBST(root.right, root.val, maxVal)
    );
  }

  return isValidBST(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
}

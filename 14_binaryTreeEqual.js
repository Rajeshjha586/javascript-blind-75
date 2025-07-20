/**
 * @param {TreeNode | null} a
 * @param {TreeNode | null} b
 * @return {boolean}
 */
export default function binaryTreeEqual(a, b) {
  if (a === null || b === null) {
    return a === b;
  }

  //Preorder:- Root - Left - Right
  return (
    a.val === b.val &&
    binaryTreeEqual(a.left, b.left) &&
    binaryTreeEqual(a.right, b.right)
  );
}

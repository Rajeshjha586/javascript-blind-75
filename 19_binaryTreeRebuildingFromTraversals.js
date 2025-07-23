/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode | null}
 */
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

export default function binaryTreeRebuildingFromTraversals(preorder, inorder) {
  function buildSubtree(preorderStart, preorderEnd, inorderStart, inorderEnd) {
    if (preorderStart > preorderEnd || inorderStart > inorderEnd) {
      return null;
    }

    const rootValue = preorder[preorderStart];
    const index = inorder.indexOf(rootValue);
    const numsLeft = index - inorderStart;
    const root = new TreeNode(rootValue);

    root.left = buildSubtree(
      preorderStart + 1,
      preorderStart + numsLeft,
      inorderStart,
      index - 1
    );

    root.right = buildSubtree(
      preorderStart + numsLeft + 1,
      preorderEnd,
      index + 1,
      inorder
    );

    return root;
  }
  return buildSubtree(0, preorder.length - 1, 0, inorder.length - 1);
}

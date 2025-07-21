/**
 * @param {TreeNode | null} root
 * @return {number[][]}
 */
function binaryTreeLevelOrderTraversal(root) {
  if (root === null) {
    return [];
  }

  const queue = [root];
  const levels = [];

  while (queue.length !== 0) {
    const queueLength = queue.length;
    const currentLevel = [];

    for (let i = 0; i < queueLength; i++) {
      const current = queue.shift();

      if (current.left) {
        queue.push(current.left);
      }

      if (current.right) {
        queue.push(current.right);
      }

      currentLevel.push(current.val);
    }

    levels.push(currentLevel);
  }

  return levels;
}

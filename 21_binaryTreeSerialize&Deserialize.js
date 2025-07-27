/**
 * @param {TreeNode | null} root
 * @return {string}
 */
function serializeBinaryTree(root) {
  if (!root) {
    return "";
  }

  let result = "";
  const queue = [root];

  while (queue.length) {
    let current = queue.shift();

    if (current === null) {
      result += "#,";
    } else {
      result += current.val + ",";
      queue.push(current.left);
      queue.push(current.right);
    }
  }

  return result;
}

/**
 * @param {string} data
 * @return {TreeNode | null}
 */

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function deserializeBinaryTree(data) {
  if (data === "#") return null;
  const arr = data.split(",");
  let root = new TreeNode(parseInt(arr[0]));
  let queue = [root];
  let index = 1;

  while (queue.length) {
    let node = queue.shift();
    if (arr[index] !== "#") {
      node.left = new TreeNode(parseInt(arr[index]));
      queue.push(node.left);
    }

    index++;

    if (arr[index] !== "#") {
      node.right = new TreeNode(parseInt(arr[index]));
      queue.push(node.right);
    }

    index++;
  }

  return root;
}

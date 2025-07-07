/**
 * @param {string} str
 * @return {boolean}
 */

const PAIRS = {
  "}": "{",
  "]": "[",
  ")": "(",
};

const OPEN_BRACKETS = ["{", "[", "("];

function isBalancedBrackets(str) {
  let stack = [];

  for (let bracket of str) {
    if (OPEN_BRACKETS.includes(bracket)) {
      stack.push(bracket);
    } else if (PAIRS[bracket]) {
      const lastAddedBracket = stack.pop();

      if (PAIRS[bracket] !== lastAddedBracket) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

console.log(isBalancedBrackets("()[(){}]")); //true
console.log(isBalancedBrackets("()[(}]")); //false

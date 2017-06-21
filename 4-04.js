/*jshint esversion: 6*/

//Implement a function to check if a binary tree is balanced.  For the purposes of this question, a balanced tree is defined to be a tree such that the heights of the two subtrees of any node never differ by more than one

const isBalanced = (root) => {
  let result = true;

  const heightChecker = (node) => {
    if (!node) {
      return -1;
    }
    let leftHeight = heightChecker(node.left);
    let rightHeight = heightChecker(node.right);
    if Math.abs(leftHeight-rightHeight) > 1 {
      result = false;
    } else {
      return Math.max(leftHeight,rightHeight) + 1;
    }
  }

  heightChecker(root);
  return result;
}
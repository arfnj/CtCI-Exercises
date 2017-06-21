/*jshint esversion: 6*/

//Implement a function to check if a binary tree is a binary search tree

const isBinary = (root) => {
  let result = true;

  const checker = (node, min, max) => {
    if (node) {
      if (node.val < min || node.val > max) {
        result = false;
      }
      checker(node.left,min,node.val);
      checker(node.right,node.val,max);
    }
  };

  checker(root,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY);
  return result;
};
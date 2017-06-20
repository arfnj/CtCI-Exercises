/*jshint esversion: 6*/

// Given a sorted (increasing order) array with unique integer elements, write an algorithm to create a binary search tree with minimal height

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
};

const shortTree = (arr) => {
  let rootIndex = Math.ceil(arr.length/2);
  let output = Node(arr[rootIndex]);

  const grower = (parent, leftStart, leftEnd, rightStart, rightEnd) => {
    if (leftStart === leftEnd) {
      parent.left = Node(arr[leftStart]);
    }
    if (leftStart < leftEnd) {
      let leftRoot = Math.ceil((leftEnd-leftStart)/2);
      parent.left = Node(arr[leftRoot]);
      grower(parent.left,leftStart,leftRoot-1,leftRoot+1,leftEnd);
    }
    if (rightStart === rightEnd) {
      parent.right = Node(arr[rightStart]);
    }
    if (rightStart < rightEnd) {
      let rightRoot = Math.ceil(rightEnd-rightStart/2);
      parent.right = Node(arr[rightRoot]);
      grower(parent.right,rightStart,rightRoot-1,rightRoot+1,rightEnd);
    }
  }

  grower(output,0,rootIndex-1,rootIndex+1,arr.length-1);
  return output;
}

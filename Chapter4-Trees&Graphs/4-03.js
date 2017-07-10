/*jshint esversion: 6*/

//Given a binary tree, desing an algorith which creates a linked list of all the nodes at each depth (e.g., if you have a tree with depth D, you'll have D linked lists)

class LinkedList {
  constructor(node) {
    this.head = node;
    this.tail = node;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = {};
  }
};

const listAdder = (list,node) => {
  list.tail.next = node;
  list.tail = node;
};

const depthLists = (tree) => {
  let listArray = [];

  const explorer = (node,depth) => {
    if (!node) {
      return;
    }
    if (!listArray[depth]) {
      listArray[depth] = new LinkedList(Node(node.value));
    } else {
      listAdder(listArray[depth],Node(node.value));
    }
    node.children.forEach(child => explorer(child,depth+1);
  };

  explorer(tree,0);
  return listArray;
};
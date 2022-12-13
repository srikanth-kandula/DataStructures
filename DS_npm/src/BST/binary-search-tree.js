//import { BinarySearchTree } from '@datastructures-js/binary-search-tree';
//import { BinarySearchTree } from '../../node_modules/@datastructures-js/binary-search-tree/src/binarySearchTree.js';

const {
  BinarySearchTree,
  BinarySearchTreeNode,
  AvlTree,
  AvlTreeNode
} = require('@datastructures-js/binary-search-tree');

// import {
//   BinarySearchTree,
//   BinarySearchTreeNode,
//   AvlTree,
//   AvlTreeNode
// } from '@datastructures-js/binary-search-tree';

function workingWithBST() {
  let bst = new BinarySearchTree();
  
  bst.insert(10);
  bst.insert(11);
  bst.insert(8);

  console.log(bst);
}

workingWithBST();

// import { sayHello } from "./dummy.js";

// function myFunc() {

//   console.log(sayHello())
// }

// myFunc();
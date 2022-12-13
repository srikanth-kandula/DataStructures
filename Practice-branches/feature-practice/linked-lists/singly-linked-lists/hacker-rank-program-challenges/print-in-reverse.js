//Hackerrank problem

/**
 * Given a pointer to the head of a singly-linked list, print each  value from the reversed list. If the given list is empty, do not print anything.

Example

 refers to the linked list with  values 

Print the following:
3
2
1

Function Description

Complete the reversePrint function in the editor below.

reversePrint has the following parameters:

SinglyLinkedListNode pointer head: a reference to the head of the list
Prints

The data values of each node in the reversed list.
 */

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
  inputString += inputStdin;
});

process.stdin.on('end', _ => {
  inputString = inputString.replace(/\s*$/, '')
    .split('\n')
    .map(str => str.replace(/\s*$/, ''));

  main();
});

function readLine() {
  return inputString[currentLine++];
}

const SinglyLinkedListNode = class {
  constructor(nodeData) {
    this.data = nodeData;
    this.next = null;
  }
};

const SinglyLinkedList = class {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  insertNode(nodeData) {
    const node = new SinglyLinkedListNode(nodeData);

    if (this.head == null) {
      this.head = node;
    } else {
      this.tail.next = node;
    }

    this.tail = node;
  }
};

function printSinglyLinkedList(node, sep) {
  while (node != null) {
    process.stdout.write(String(node.data));

    node = node.next;

    if (node != null) {
      process.stdout.write(sep);
    }
  }
}

/*
 * Complete the 'reversePrint' function below.
 *
 * The function accepts INTEGER_SINGLY_LINKED_LIST llist as parameter.
 */

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */

function reversePrint(llist) {
  // Write your code here
  let dataArray = [], i = -1;
  let currentNode = llist;
  while (currentNode) {
    i++
    dataArray[i] = currentNode.data;
    currentNode = currentNode.next;
  }

  if (i > -1) {
    for (let i = dataArray.length - 1; i > -1; i--) {
      console.log(dataArray[i]);
    }
  }

}

function main() {
  const tests = parseInt(readLine(), 10);

  for (let testsItr = 0; testsItr < tests; testsItr++) {
    const llistCount = parseInt(readLine(), 10);

    let llist = new SinglyLinkedList();

    for (let i = 0; i < llistCount; i++) {
      const llistItem = parseInt(readLine(), 10);
      llist.insertNode(llistItem);
    }

    reversePrint(llist.head);
  }
}

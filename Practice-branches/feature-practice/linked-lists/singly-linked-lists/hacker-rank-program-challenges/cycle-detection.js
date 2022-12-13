//Hackerrank problem

/**
 * A linked list is said to contain a cycle if any node is visited more than once while traversing the list. Given a pointer to the head of a linked list, determine if it contains a cycle. If it does, return 1. Otherwise, return 0.
 * 
 * Example
 * head refers to the list of nodes 1 -> 2 -> 3 -> 4 -> 5 -> 2 
 * The numbers shown are the node numbers, not their data values. Here Fifth node is connected to second node.
 * 
 * Function Description

Complete the has_cycle function in the editor below.

It has the following parameter:

SinglyLinkedListNode pointer head: a reference to the head of the list

 */

'use strict';

const fs = require('fs');

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

function printSinglyLinkedList(node, sep, ws) {
  while (node != null) {
    ws.write(String(node.data));

    node = node.next;

    if (node != null) {
      ws.write(sep);
    }
  }
}

// Complete the hasCycle function below.

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function hasCycle(head) {
  let hasCycle = 0;
  let mySet = new Set();
  while (head) {
    if (mySet.has(head)) {
      hasCycle = 1;
      break;
    }
    mySet.add(head);
    head = head.next;
  }

  return hasCycle;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const tests = parseInt(readLine(), 10);

  for (let testsItr = 0; testsItr < tests; testsItr++) {
    const index = parseInt(readLine(), 10);

    const llistCount = parseInt(readLine(), 10);

    let llist = new SinglyLinkedList();

    for (let i = 0; i < llistCount; i++) {
      const llistItem = parseInt(readLine(), 10);
      llist.insertNode(llistItem);
    }

    const extra = new SinglyLinkedListNode(-1);
    const temp = llist.head;

    for (let i = 0; i < llistCount; i++) {
      if (i == index) {
        extra = temp;
      }

      if (i != llistCount - 1) {
        temp = temp.next;
      }
    }

    temp.next = extra;

    let result = hasCycle(llist.head);

    ws.write((result ? 1 : 0) + "\n");
  }

  ws.end();
}
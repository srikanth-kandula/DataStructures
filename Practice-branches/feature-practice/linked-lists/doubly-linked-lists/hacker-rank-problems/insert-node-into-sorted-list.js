//Hackerrank problem

/**
 * 
 * Inserting a Node Into a Sorted Doubly Linked List
 * 
 * Given a reference to the head of a doubly-linked list and an integer, data, create a new DoublyLinkedListNode object having data value data and insert it at the proper location to maintain the sort.
 * Example
 * head refers to the linked list 1 <-> 2 <-> 4 -> null
 * data = 3
 * return a reference to the new list 1 <-> 2 <-> 3 <-> 4 -> null
 * 
 * Function Description

Complete the sortedInsert function in the editor below.

sortedInsert has two parameters:

DoublyLinkedListNode pointer head: a reference to the head of a doubly-linked list

int data: An integer denoting the value of the data field for the DoublyLinkedListNode you must insert into the list.
Returns

DoublyLinkedListNode pointer: a reference to the head of the list

Note: Recall that an empty list (i.e., where head = null ) and a list with one element are sorted lists.
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

const DoublyLinkedListNode = class {
  constructor(nodeData) {
    this.data = nodeData;
    this.next = null;
    this.prev = null;
  }
};

const DoublyLinkedList = class {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  insertNode(nodeData) {
    let node = new DoublyLinkedListNode(nodeData);

    if (this.head == null) {
      this.head = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
    }

    this.tail = node;
  }
};

function printDoublyLinkedList(node, sep, ws) {
  while (node != null) {
    ws.write(String(node.data));

    node = node.next;

    if (node != null) {
      ws.write(sep);
    }
  }
}

/*
 * Complete the 'sortedInsert' function below.
 *
 * The function is expected to return an INTEGER_DOUBLY_LINKED_LIST.
 * The function accepts following parameters:
 *  1. INTEGER_DOUBLY_LINKED_LIST llist
 *  2. INTEGER data
 */

/*
 * For your reference:
 *
 * DoublyLinkedListNode {
 *     int data;
 *     DoublyLinkedListNode next;
 *     DoublyLinkedListNode prev;
 * }
 *
 */

function sortedInsert(llist, data) {
  // Write your code here
  let newNode = new DoublyLinkedListNode(data);
  let currentNode, previousNode;
  if (llist == null) {
    llist = newNode;
  } else if (llist.next == null) {
    llist.next = newNode;
    newNode.prev = llist;
  } else {
    currentNode = llist;
    while (currentNode) {
      if (currentNode.data < data) {
        previousNode = currentNode;
        currentNode = currentNode.next;
      } else {
        previousNode = currentNode.prev;
        if (previousNode) {
          previousNode.next = newNode;
          newNode.prev = previousNode;
          newNode.next = currentNode;
          currentNode.prev = newNode;
        } else {
          llist = newNode;
          newNode.next = currentNode;
        }
        break;
      }
    }

    if (currentNode == null) {
      previousNode.next = newNode;
      newNode.prev = previousNode;
    }

  }

  return llist;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const t = parseInt(readLine(), 10);

  for (let tItr = 0; tItr < t; tItr++) {
    const llistCount = parseInt(readLine(), 10);

    let llist = new DoublyLinkedList();

    for (let i = 0; i < llistCount; i++) {
      const llistItem = parseInt(readLine(), 10);
      llist.insertNode(llistItem);
    }

    const data = parseInt(readLine(), 10);

    let llist1 = sortedInsert(llist.head, data);

    printDoublyLinkedList(llist1, " ", ws)
    ws.write("\n");
  }

  ws.end();
}

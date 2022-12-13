console.clear();

class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  head = null;
  tail = null;
  length = 0;

  constructor(value) {
    let node = new ListNode(value);
    this.head = this.tail = node;
    this.length++;
  }

  addLast(value) {
    let newNode = new ListNode(value);

    if(this.head === null) {
      this.head = newNode;
    } else {
      let currentNode = this.head;
      while(currentNode.next != null) {
        currentNode = currentNode.next;
      }
      currentNode.next = newNode;
    }
    this.tail = newNode;
    this.length++;
  }

  addFirst(value) {
    let newNode = new ListNode(value);

    if(this.head == null) {
      this.head = this.tail = newNode;
    } else {
      let currentHead = this.head;
      this.head = newNode;
      this.head.next = currentHead;
    }
    this.length++;
  }

  removeFirst() {
    if(!this.head)
      return null;
    else {
      let currentHead = this.head;
      this.head = currentHead.next;
      currentHead = null;
    }
  }

  reverse() {
    //2->4->8 should become 8->4->2
    /**
     * currentNode, previousNode, nextNode
     * currentNode.next = previousNode
     */
    let currentNode, nextNode;
    let previousNode = null;
    if(this.head) {
      currentNode = this.head;
      this.tail = this.head;
    }
    while(currentNode.next) {
      nextNode = currentNode.next;
      currentNode.next = previousNode;
      previousNode = currentNode;
      currentNode = nextNode;
    }

    currentNode.next = previousNode;
    this.head = currentNode;

  }

}

let mySinglyLinkedList = new SinglyLinkedList(2);
mySinglyLinkedList.addFirst(4);
console.log(mySinglyLinkedList);
mySinglyLinkedList.addFirst(6);
console.log(mySinglyLinkedList);

mySinglyLinkedList.addFirst(8);
console.log(mySinglyLinkedList);

mySinglyLinkedList.removeFirst();
console.log(mySinglyLinkedList);

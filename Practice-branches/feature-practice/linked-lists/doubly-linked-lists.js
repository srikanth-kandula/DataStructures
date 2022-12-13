class doublyLinkedNode {

  constructor(value) {
    this.value = value;
    this.next = null;
    this.previous = null;
  }

}

class DoublyLinkedList {

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }  

  push(value) { //addLast
    let node = new doublyLinkedNode(value);
    if (!this.head) {
      this.head = this.tail = node;
    } else {
      this.tail.next = node;
      node.previous = this.tail;
      this.tail = node;
    }
    this.length++;

    return this;
  }

  pop() { // removedLast

    if (!this.tail) {
      console.log("Nothing to pop");
      return null;
    }

    let poppedNode = this.tail;
    if (this.length === 1) {
      this.head = this.tail = null;
    } else {
      this.tail = poppedNode.previous;
      this.tail.next = null;
      poppedNode.previous = null; // remove previous links to isolate the node
    }
    this.length--;

    return poppedNode;
  }

  shift() { // remove first

    if (!this.head) {
      console.log("Nothing to shift");
      return undefined;
    }

    let shiftedNode = this.head;
    if (this.length === 1)
      this.head = this.tail = null;
    else {
      this.head = shiftedNode.next;
      this.head.previous = null;
      shiftedNode.next = null;
    }
    this.length--;

    return shiftedNode;
  }

  unshift(value) { // add first

    let newNode = new doublyLinkedNode(value);
    if (!this.head) {
      this.head = this.tail = newNode;
    } else {
      let currentNode = this.head;
      currentNode.previous = newNode;
      newNode.next = currentNode;
      this.head = newNode;
      //this.head.next = currentNode;
      //currentNode.previous = this.head;
    }
    this.length++;

    return this;
  }

  get(index) { // consider index starts at 0
    let node;
    if (index < 0 || index >= this.length) {
      console.log("Invalid index value");
      return undefined;
    } else if (index >= this.length / 2) {
      let newIndex = this.length - index - 1;
      node = this.tail;
      for (let i = 0; i < newIndex; i++) {
        node = node.previous;
      }
    } else {
      node = this.head;
      for (let i = 0; i < index; i++) {
        node = node.next;
      }
    }

    return node;
  }

  set(index, value) {
    let node = this.get(index);
    if (node)
      node.value = value;

    return this;
  }

  insert(index, value) {

    if (index < 0 || index >= this.length) {
      console.log("invalid index");
      return null;
    }
    if (index === 0) {
      return this.unshift(value);
    } else if (index === this.length - 1) {
      return this.push(value)
    } else {
      let newNode = new doublyLinkedNode(value);
      let currentNode = this.get(index);
      let previousNode = currentNode.previous;

      previousNode.next = newNode; newNode.previous = previousNode;
      newNode.next = currentNode; currentNode.previous = newNode;

      this.length++;
    }


    return this;
  }

  insert1(index, value) {

    if (index < 0 || index >= this.length) {
      console.log("invalid index");
      return null;
    }
    if (index === 0) {
      this.unshift(value);
    } else {
      let newNode = new doublyLinkedNode(value);

      let currentNode, laterNode, previousNode, count = 0;

      if (index <= this.length / 2) {
        currentNode = this.head;
        while (count < index) {
          currentNode = currentNode.next;
          count++;
        }
      } else {
        currentNode = this.tail;
        count = this.length - 1;
        while (count > index) {
          currentNode = currentNode.previous;
          count--;
        }
      }

      previousNode = currentNode.previous;
      laterNode = currentNode.next;

      previousNode.next = newNode;
      newNode.next = laterNode;
      currentNode = null;
      this.length++;
    }


    return this;
  }

  remove(index) {

    let poppedNode;

    if (index < 0 || index >= this.length) {
      console.log("invalid index");
      return null;
    }
    if (index === 0) {
      return this.shift();
    } else if (index === this.length - 1) {
      return this.pop()
    } else {
      poppedNode = this.get(index);

      let previousNode = poppedNode.previous;
      let nextNode = poppedNode.next;

      previousNode.next = nextNode; nextNode.previous = previousNode;
      poppedNode.next = null;
      poppedNode.previous = null;
      this.length--;
    }

    return poppedNode;
  }

  reverse() {

    if(!this.head){
      console.log("empty list");
      return undefined;
    } else if (this.length === 1) {
      return this;
    } else {
      let currentNode, previousNode, nextNode;
      currentNode = this.tail;
      this.tail = this.head;
      this.head = currentNode;
      while(currentNode.previous) {
        previousNode = currentNode.previous;
        nextNode = currentNode.next;
        currentNode.next = previousNode;
        currentNode.previous = nextNode;
        currentNode = previousNode;
      }
      return this;
    }

  }
}
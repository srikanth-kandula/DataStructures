class stackNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {

  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /* Time complexity is same for push and pop i.e. O(1) */
  push(val) {
    let newNode = new stackNode(val)
    if(!this.first)
      this.first = this.last = newNode;
    else {
      newNode.next = this.first;
      this.first = newNode;
    }
    this.size++;

    return this;
  }

  pop() {
    if (!this.first) {
      console.log("Nothing to pop");
      return undefined;
    }

    let poppedNode = this.first;
    if (this.length === 1)
      this.first = this.last = null;
    else {
      this.first = poppedNode.next;
      poppedNode.next = null;
    }
    this.length--;

    return poppedNode;
  }

}
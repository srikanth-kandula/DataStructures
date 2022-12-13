class queueNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {

  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /* Time complexity of enqueue and dequeue should be same i.e. O(1) */
  enqueue(val) {
    let newNode = new queueNode(val)
    if (!this.first)
      this.first = this.last = newNode;
    else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.size++;

    return this;
  }

  dequeue() {
    if (!this.first) {
      console.log("Nothing to dequeue");
      return undefined;
    }

    let dequeueNode = this.first;
    if (this.size === 1)
      this.first = this.last = null;
    else {
      this.first = dequeueNode.next;
      dequeueNode.next = null;
    }
    this.size--;

    return dequeueNode;
  }

}
class pqNode {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}

/**
 * Implemented using min heap
 */
class PriorityQueue {
  constructor(){
    this.values = []; //each value has a value and a priority
  }

  enqueue(value, priority) {
    let node = new pqNode(value,priority);
    this.values.push(node);
    this.bubbleUp();

    return this.values;
  }

  bubbleUp() {
    let childIndex = this.values.length - 1;
    let parentIndex = Math.floor((childIndex - 1) / 2);
    let child = this.values[childIndex];
    let parent = this.values[parentIndex];
    while (parentIndex >= 0 && parent.priority >= child.priority) {
      //swap parent and child
      this.values[parentIndex] = child;
      this.values[childIndex] = parent;

      childIndex = parentIndex;
      parentIndex = Math.floor((childIndex - 1) / 2);

      child = this.values[childIndex];
      parent = this.values[parentIndex];
    }
  }

  dequeue() {
    let highPriorityNode = this.values.shift();

    if (!this.values.length)
      console.log("Queue is empty!")
    else {
      let latestValue = this.values.pop();
      this.values.unshift(latestValue);
      this.sinkDown();
    }

    return highPriorityNode;
  }

  sinkDown() {
    let parentIndex = 0, leftChildIndex = 1, rightChildIndex = 2, length = this.values.length - 1;

    while (true) {
      let parent = this.values[parentIndex], swapIndex = null, leftChild,rightChild;

      if (leftChildIndex <= length) {
        leftChild = this.values[leftChildIndex];
        if (leftChild.priority <= parent.priority) {
          swapIndex = leftChildIndex;
        }
      }

      if (rightChildIndex <= length) {
        rightChild = this.values[rightChildIndex];
        // if rightChild.priority < leftChild.priority, no need to compare as leftChild would already be compared and swapped above
        if (rightChild.priority < leftChild.priority && rightChild.priority <= parent.priority) {
          swapIndex = rightChildIndex;
        }
      }

      if (!swapIndex)
        break;
      else {
        //swap parent and left/right child
        this.values[parentIndex] = this.values[swapIndex];
        this.values[swapIndex] = parent;
      }

      parentIndex = swapIndex;
      leftChildIndex = (2 * parentIndex) + 1; //2n+1
      rightChildIndex = leftChildIndex + 1; //2n+2
    }

  }

}


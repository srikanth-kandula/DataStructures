class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  /**
   * Consider the following tree
   *              41
   *      39            33
   * 18       27     12 
   */

  /**
   * if value is 55, output for above tree -> [55,39,41,18,27,12,33]
   */
  insert(value) {
    this.values.push(value);
    this.bubbleUp();

    return this.values;
  }

  bubbleUp() {
    let childIndex = this.values.length - 1;
    let parentIndex = Math.floor((childIndex - 1) / 2);
    let child = this.values[childIndex];
    let parent = this.values[parentIndex];
    while (parentIndex >= 0 && parent < child) {
      //swap parent and child
      this.values[parentIndex] = child;
      this.values[childIndex] = parent;

      childIndex = parentIndex;
      parentIndex = Math.floor((childIndex - 1) / 2);

      child = this.values[childIndex];
      parent = this.values[parentIndex];
    }
  }

  extractMax() {
    let maxValue = this.values.shift();

    if (!this.values.length)
      console.log("Heap is empty!")
    else {
      let latestValue = this.values.pop();
      this.values.unshift(latestValue);
      this.sinkDown();
    }

    return maxValue;
  }

  sinkDown() {
    let parentIndex = 0, leftChildIndex = 1, rightChildIndex = 2, length = this.values.length - 1;

    while (true) {
      let parent = this.values[parentIndex], swapIndex = null, leftChild, rightChild;

      if (leftChildIndex <= length) {
        leftChild = this.values[leftChildIndex];
        if (leftChild > parent) {
          swapIndex = leftChildIndex;
        }
      }

      if (rightChildIndex <= length) {
        rightChild = this.values[rightChildIndex];
        // if rightChild < leftChild, no need to compare as leftChild would already be compared and swapped above
        if (rightChild > leftChild && rightChild > parent) {
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
class Queue {
  queueArray: Array<any> = [];

  enqueue(item: any): void {
    this.queueArray.push(item);
  }

  dequeue(): any|null {
    if(!this.queueArray.length){
      throw new Error("nothing to dequeue");
    } else {
      let dequeueItem = this.queueArray.shift();
      return dequeueItem;
    }
  }

  peek(): void{
    let item = null;
    if(!this.queueArray.length){
      console.info("queue is empty");
    } else {
      item = this.queueArray[0];
    }
    return item;
  }
}

const myQueue = new Queue();
myQueue.enqueue(0);
myQueue.enqueue(1);
myQueue.enqueue(2);

console.log(`queue is: ${myQueue.queueArray}`);

myQueue.peek();
console.log(` top item in queue is ${myQueue.peek()}`);

myQueue.dequeue();
myQueue.dequeue();
console.log(` top item in queue is ${myQueue.peek()}`);
console.log(`queue is: ${myQueue.queueArray}`);
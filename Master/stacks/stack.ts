class Stack {
  public stackArray: Array<any> = [];

  push(data: any): void {
    this.stackArray.push(data);
  }

  pop(): any {
    let poppedItem = null;
    if(this.stackArray != null){
      poppedItem = this.stackArray.splice(-1, 0)
      this.stackArray.pop();
    }
  return poppedItem;
  }
}

const stack = new Stack();
console.log(`uninitialized stack: ${stack.stackArray}`);

stack.push(1);
stack.push('two');
stack.push('3');

console.log(`Initialized stack: ${stack.stackArray}`);

stack.pop();

console.log(`final stack: ${stack.stackArray}`);
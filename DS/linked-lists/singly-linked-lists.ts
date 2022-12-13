class ListNode {

  public value: any;
  public next: ListNode | null;

  constructor(value: any) {
    this.value = value;
    this.next = null;
  }

}

class SinglyLinkedList {

  public head: ListNode | null;
  public tail: ListNode | null;
  public length: number;

  constructor(value: any) {
    this.head = new ListNode(value);
    this.tail = this.head;
    this.length = 1;
  }

  addFirst(value: any): void {
    let newNode = new ListNode(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
  }

  removeFirst(): ListNode | undefined {
    //let firstNode = undefined;
    let currentHead;
    if (this.head) {
      currentHead = this.head;
      this.head = null; // nullify/delete existing head value; this won't make currentHead = null as object is not destroyed here
      //only the 'head' that earlier holded a reference now points to null or nothing. Object still exists and currentHead holds
      //a reference to that object.
      
      this.head = currentHead.next;
    }
    if (!this.head)
      this.tail = null; // if the only element in the list is removed, nullify tail also

    this.length--;
    return currentHead;
  }

  removeLast(): ListNode | null {
    let lastNode;
    if(this.head) {
      lastNode = this.tail;
      let currentNode = this.head;
      let penultimateNode: ListNode;
      if (this.head.next !== null) {
        while (currentNode.next !== null) {
          penultimateNode = currentNode;
          currentNode = currentNode.next;
        }
        currentNode.value = null;
        currentNode.next = null;

        this.tail = penultimateNode;
        this.tail.next = null;
      } else {
        this.head = null;
        this.tail = null;
      }

      this.length--;
    }

    return lastNode;
  }

  get(index: number): ListNode | null {
    let counter = 0;
    let currentNode ;

    if(this.head && index >= 0) {
      currentNode = this.head;

      while (counter < index) {
        currentNode = currentNode.next;
        counter++;
      }
    }

    return currentNode;
  }

  set(index: number, value: any): boolean {
    let returnValue = false;

    let nodeValue = this.get(index);
    if(nodeValue){
      /**
       * since objects are of reference type, this will modify the original object
       * https://www.javascripttutorial.net/javascript-primitive-vs-reference-values/
       */
      nodeValue.value = value;
      returnValue = true;
    }

    return returnValue;
  }

  insert(index: number, value: any): boolean { // index starts from 1
    let result = false;
    
    if(index >= 0 && index <= this.length) {
      let newNode = new ListNode(value);
      let previousNode = this.get(--index);
      if (previousNode) {
        let nextNode = previousNode.next;
        previousNode.next = newNode;
        newNode.next = nextNode;
        this.length++;
        result = true;
      }
    } else if (index === 0) {
      this.addFirst(value);
    }

    return result;
  }

  remove(index: number): boolean { // index starts from 1
    let result = false;

    if(index >=0 && index <= this.length) {
      if (index === 0) this.removeFirst();
      else if (index === this.length) this.removeLast();
      
      else if (index > 0 && index < this.length) {
        let previousNode = this.get(--index);
        let removed = previousNode.next;
        previousNode.next = removed.next;
      }
      result = true;
      this.length--;
    }

    return result;
  }

  /**
   * Reverse Linked list:
   * 
   */
  reverse(): SinglyLinkedList {

    let previousNode: any;
    let currentNode: ListNode;
    let nextNode: ListNode;

    previousNode = null;
    currentNode = this.head;
    //this.head = this.tail;
    this.tail = this.head;

    while (currentNode.next) {
      nextNode = currentNode.next;
      currentNode.next = previousNode;
      previousNode = currentNode;
      currentNode = nextNode;
    }
    currentNode.next = previousNode;
    this.head = currentNode;

    console.log("reverse: "); console.log(this);
    return this;
  }

  reverse1(): void {

    let previousNode: any;
    let currentNode: ListNode;
    let nextNode: ListNode;

    previousNode = null;
    currentNode = this.head;
    this.head = this.tail;
    this.tail = currentNode;

    for (let i = 0; i < this.length; i++) {
      nextNode = currentNode.next;
      currentNode.next = previousNode;
      previousNode = currentNode;
      currentNode = nextNode;
    }
    console.log("reverse List: "); console.log(this)
  }

}

const list = new SinglyLinkedList(1);
list.addFirst(2)
list.addFirst(3); // 3 -> 2 -> 1
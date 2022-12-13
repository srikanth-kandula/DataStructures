class TreeNode {
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }
}

class BST {
  root = null;
  constructor() {
    this.root = null;
  }

  insert(val) { //assume all values are unique
    let node = new TreeNode(val);
    if (!this.root) {
      this.root = node;
    } else {
      let currentNode = this.root;
      while (currentNode) {
        if (val === currentNode.val) {
          console.log("duplicate value!!!");
          break;
        }
        if (val < currentNode.value) { //left
          if (currentNode.left) {
            currentNode = currentNode.left;
          } else {
            currentNode.left = node;
            break;
          }
        } else { //right
          if (currentNode.right) {
            currentNode = currentNode.right;
          } else {
            currentNode.right = node;
            break;
          }
        }
      }
    }

    return this;
  }

  //insert using recursion
  insert1(node, val) {

    if(node) {

      if(val === node.value){
        console.log('Duplicate Value!!!');
        return node;
      } else if(val < node.value) {
        node.left = this.insert1(node.left, val);
      } else {
        node.right = this.insert1(node.right, val);
      }

    } else {
      return new TreeNode(val);
    }

    return this;
  }

  find(val) {
    let result = false;

    if (!this.root) {
      console.log("Nothing to search");
    } else {
      let currentNode = this.root;
      while (currentNode) {
        if (val === currentNode.value) {
          result = true;
          break;
        } else if (val < currentNode.value) { //left
          if (currentNode.left)
            currentNode = currentNode.left;
          else
            break;
        } else { //right
          if (currentNode.right)
            currentNode = currentNode.right;
          else
            break;
        }
      }
    }

    return result;
  }

  find1(val) {
    let result = false;

    if (!this.root)
      console.log("Nothing to search");
    else {
      let currentNode = this.root;
      while (currentNode && !result) {
        if (val === currentNode.value)
          result = true;
        else if (val < currentNode.value) // left
          currentNode = currentNode.left;
        else //right
          currentNode = currentNode.right;
      }
    }

    return result;
  }

  /**
   * Consider the following tree
   *         10
   *      6      15
   *    3   8       20
   */

  /**Breadth first traversal
   * 
   * Start from the root, add all the values in the given horizontal level or breadth and proceed to next horizontal level
   * until you reach all the leaf nodes.
   * 
   * Output for above tree -> [10,6,15,3,8,20]
   */
  BFS() {
    let queue = [], data = [], node = this.root;
    queue.push(node);

    while(queue.length) {
      node = queue.shift();
      data.push(node.value);
      if(node.left)
        queue.push(node.left)
      if(node.right)
        queue.push(node.right)
    }

    return data;
  }


  /**
   * Consider the following tree
   *         10
   *      6      15
   *    3   8       20
   */

  /**Depth first in order traversal
   * 
   * 
   * Start from the root, for any given node,
   * add all of its left side node values, then the node's value followed by right side node's values.
   * Left -> Node -> Right (or) traverse left, visit node and then traverse right
   * 
   * Output for above tree -> [3,6,8,10,15,20]
   */
  depthFirstInOrder() {
    let result = [];
    traverse(this.root);

    function traverse(node) {//10,6,3
      if(node.left)
        traverse(node.left);//6,3

      result.push(node.value);//3,6,8,10,15,20

      if(node.right){// ,8,15
        traverse(node.right)
      }
    }

    return result;
  }

  /**
   * 1) Create an empty stack S.
     2) Initialize current node as root
     3) Push the current node to S and set current = current->left until current is NULL
     4) If current is NULL and stack is not empty then 
        a) Pop the top item from stack.
        b) Print the popped item, set current = popped_item->right 
        c) Go to step 3.
     5) If current is NULL and stack is empty then we are done.
   */
  depthFirstInOrder_WithouRecursion() { //use stack
    let result = [], stack = [];
    let currentNode = this.root;

    while(currentNode || stack.length > 0){

      while(currentNode) {
        stack.push(currentNode);
        currentNode = currentNode.left;
      }

      currentNode = stack.pop();
      result.push(currentNode.value);

      currentNode = currentNode.right;
    }

    return result;
  }

  /**Depth first pre order traversal
   * 
   *  Start from the root, for any given node,
   * add the node value visited followed by all of its left side nodes and then its right side nodes.
   * Node -> Left -> Right (or) visit node, traverse left and traverse right
   * 
   * output for above tree -> [10,6,3,8,15,20]
   */
  depthFirstPreOrder() {
    let result = [];
    traverse(this.root); // works becuase of hoisting in javascript.

    function traverse (node) {
      result.push(node.value);
      if(node.left)
        traverse(node.left);
      if(node.right)
        traverse(node.right);
    }

    return result;
  }


  depthFirstPreOrder_WithouRecursion() { //use stack
    let result = [], stack = [];

    if(this.root)
      stack.push(this.root);

    while (stack.length) {
      let node = stack.pop();
      result.push(node.value);

      if (node.right) {
        stack.push(node.right);
      }

      if (node.left) {
        stack.push(node.left);
      }
    }

    return result;
  }

  /**Depth first post order traversal
   * 
   * Start from the root, for any given node,
   * add all of its left side node values and then its right side node values BEFORE adding the current node value.
   * Left -> Right -> Node (or) traverse left, traverse right and then visit node
   * 
   * output for above tree -> [3,8,6,20,15,10]
   */
  depthFirstPostOrder() {
    let result = [];
    traverse(this.root);

    function traverse(node){
      if(node.left)
        traverse(node.left)
      if(node.right)
        traverse(node.right)
      result.push(node.value);
    }

    return result;
  }


  depthFirstPostOrder_WithoutRecursion() {
    let stack1 = [], stack2 = [];
    let currentNode = this.root;
    stack1.push(currentNode);

    while(stack1.length > 0){
      let currentNode = stack1.pop();
      stack2.push(currentNode.value);

      if(currentNode.left) stack1.push(currentNode.left);
      if(currentNode.right) stack1.push(currentNode.right);
    }

    let result = [];

    while(stack2.length > 0) {
      result.push(stack2.pop())
    }

    return result;
  }

}
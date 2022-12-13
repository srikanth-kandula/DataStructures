class TreeNode {
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(val) { // assume all values are unique
    let node = new TreeNode(val);
    if (!this.root) {
      this.root = node;
    } else {
      let currentNode = this.root;
      while (currentNode) {
        if (val === currentNode.val)
          console.log("duplicate value");

        if (val < currentNode.value) { // left
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
      currentNode = node;
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
        } else if (val < currentNode.value) { // left
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

  /**Start from the root, add all the values in the given horizontal level or breadth and proceed to next horizontal level
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
   * Start from the root, for any given node,
   * add all of its left side node values, then the node's value followed by right side node's values.
   * Left -> Node -> Right (or) traverse left, visit node and then traverse right
   * 
   * Output for above tree -> [3,6,8,10,15,20]
   */
  depthFirstInOrder() {
    let result = [];
    traverse(this.root);

    function traverse(node) {
      if(node.left)
        traverse(node.left);

      result.push(node.value);

      if(node.right){
        traverse(node.right)
      }
    }

    return result;
  }

  /** Start from the root, for any given node,
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

  /**Start from the root, for any given node,
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

}
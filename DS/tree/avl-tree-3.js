//AVL tree

//node
class AVLTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.height = 1; //why height is 1?
  }
}

//AVL Tree
class AVLTree {

  constructor() {
    this.root = null;
  }

  getHeight(node) {
    let result = 0;
    if(node !== null) {
      result = node.height;
    }

    return result;
  }

  getBalanceFactor(node) {
    if(node === null)
      return 0;
    return this.getHeight(node.left) - this.getHeight(node.right);
  }

  rotateRight(node) {
    let x = node.left;
    let temp = x.right;
    x.right = node;
    node.left = temp; //break existing link and link to the temp node
    x.height = 1 + Math.max(this.getHeight(x.left), this.getHeight(x.right));
    node.height = 1 + Math.max(this.getHeight(node.left), this.getHeight(node.right));

    return x;
  }

  rotateLeft(node) {
    let y = node.right;
    let temp = y.left;
    y.left = node;
    node.right = temp;
    y.height = 1 + Math.max(this.getHeight(y.left), this.getHeight(y.right));
    node.height = 1 + Math.max(this.getHeight(node.left), this.getHeight(node.right));

    return y;
  }

  insertNodeHelper(node, value) {
    /** 1. Insert element as in BST */
    if(node === null)
      return new AVLTreeNode(value); //base case -> return value

    if(value < node.value) {
      node.left = this.insertNodeHelper(node.left, value); //recursive logic
    } else if(value > node.value) {
      node.right = this.insertNodeHelper(node.right, value);
    } else {
      return node; //no need to insert if it is a duplicate value, return the same node, so the same node is assigned back in recursion
    }

    /** 2. Check the balance factor of EACH node */
    // to know balance factor, first we need to know the height of the node.
    node.height = 1 + Math.max(this.getHeight(node.left), this.getHeight(node.right));
    let balanceFactor = this.getBalanceFactor(node);

    /** 3. If the node is unbalanced, balance it */

    //left left case
    if(balanceFactor > 1 && value < node.left.value) {
      return this.rotateRight(node);
    }

    //left right case
    if(balanceFactor > 1 && value > node.left.value) {
      node.left = this.rotateLeft(node.left);
      return this.rotateRight(node);
    }

    //right right case
    if(balanceFactor < -1 && value > node.right.value) {
      return this.rotateLeft(node);
    }

    //right left case
    if(balanceFactor < -1 && value < node.right.value){
      node.right = this.rotateRight(node.right);
      return this.rotateLeft(node);
    }

    return node;
  }

  insert(value) {
    if(this.root === null) {
      return this.root = new AVLTreeNode(value);
    } else {
      this.root = this.insertNodeHelper(this.root, value);
    }
  }

  DepthFirstPreOrder() {//visit node, traverse left, traverse right
    let result = [];
    if(this.root) {
      traverse(this.root);
    }

    function traverse(node) {
      if(node) {
        result.push(node.value);
        traverse(node.left);
        traverse(node.right);
      }
    }

    return result;
  }

}
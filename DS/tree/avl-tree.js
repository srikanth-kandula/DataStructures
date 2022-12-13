// JavaScript program for insertion in AVL Tree - https://www.geeksforgeeks.org/avl-tree-set-1-insertion/
class AVLTreeNode1 {
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
    this.height = 1;
  }
}

class AVLTree1 {
  constructor() {
    this.root = null;
  }

  // A utility function to get
  // the height of the tree
  height(N) {
    if (N == null) return 0;

    return N.height;
  }

  // A utility function to get
  // maximum of two integers
  max(a, b) {
    return a > b ? a : b;
  }

  // A utility function to right
  // rotate subtree rooted with y
  // See the diagram given above.
  rightRotate(y) {
    var x = y.left;
    var T2 = x.right;

    // Perform rotation
    x.right = y;
    y.left = T2;

    // Update heights
    y.height = this.max(this.height(y.left),
      this.height(y.right)) + 1;
    x.height = this.max(this.height(x.left),
      this.height(x.right)) + 1;

    // Return new root
    return x;
  }

  // A utility function to left
  // rotate subtree rooted with x
  // See the diagram given above.
  leftRotate(x) {
    var y = x.right;
    var T2 = y.left;

    // Perform rotation
    y.left = x;
    x.right = T2;

    // Update heights
    x.height = this.max(this.height(x.left),
      this.height(x.right)) + 1;
    y.height = this.max(this.height(y.left),
      this.height(y.right)) + 1;

    // Return new root
    return y;
  }

  // Get Balance factor of node N
  getBalance(N) {
    if (N == null) return 0;

    return this.height(N.left) - this.height(N.right);
  }

  insert(node, value) {
    /* 1. Perform the normal BST insertion */
    if (node == null) return new AVLTreeNode1(value);

    if (value < node.value)
      node.left = this.insert(node.left, value);
    else if (value > node.value)
      node.right = this.insert(node.right, value);
    // Duplicate keys not allowed
    else return node;

    /* 2. Update height of this ancestor node */
    node.height =
      1 + this.max(this.height(node.left),
        this.height(node.right));

    /* 3. Get the balance factor of this ancestor
      node to check whether this node became
      unbalanced */
    var balance = this.getBalance(node);

    // If this node becomes unbalanced, then there
    // are 4 cases

    // Left Left Case
    if (balance > 1 && value < node.left.value)
      return this.rightRotate(node);

    // Right Right Case
    if (balance < -1 && value > node.right.value)
      return this.leftRotate(node);

    // Left Right Case
    if (balance > 1 && value > node.left.value) {
      node.left = this.leftRotate(node.left);
      return this.rightRotate(node);
    }

    // Right Left Case
    if (balance < -1 && value < node.right.value) {
      node.right = this.rightRotate(node.right);
      return this.leftRotate(node);
    }

    /* return the (unchanged) node pointer */
    return node;
  }

  // A utility function to print preorder traversal
  // of the tree.
  // The function also prints height of every node
  preOrder(node) {
    if (node != null) {
      console.log(node.value + " ");
      this.preOrder(node.left);
      this.preOrder(node.right);
    }
  }
}
// Driver code
var tree = new AVLTree1();

/* Constructing tree given in the above figure */
tree.root = tree.insert(tree.root, 10);
tree.root = tree.insert(tree.root, 20);
tree.root = tree.insert(tree.root, 30);
tree.root = tree.insert(tree.root, 40);
tree.root = tree.insert(tree.root, 50);
tree.root = tree.insert(tree.root, 25);

/* The constructed AVL Tree would be
    30
    / \
  20 40
  / \ \
  10 25 50
  */
console.log("Preorder traversal of the " + "constructed AVL tree is ");
tree.preOrder(tree.root);

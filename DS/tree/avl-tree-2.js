console.clear();

//code is copied from - https://learnersbucket.com/tutorials/data-structures/avl-tree-in-javascript/


// Create node

class AVLNode {
  constructor(value) {
    this.value = value;
    this.height = 1;
    this.left = null;
    this.right = null;
  }
}

//AVL Tree
class AVLTree {

  constructor() {
    this.root = null;
  }

  //return height of the node
  height(N) {
    if (N === null) {
      return 0;
    }

    return N.height;
  }

  //right rotate
  rightRotate(y) {
    let x = y.left;
    let T2 = x.right;
    x.right = y;
    y.left = T2;
    y.height = Math.max(this.height(y.left), this.height(y.right)) + 1;
    x.height = Math.max(this.height(x.left), this.height(x.right)) + 1;
    return x;
  }

  //left rotate
  leftRotate(x) {
    let y = x.right;
    let T2 = y.left;
    y.left = x;
    x.right = T2;
    x.height = Math.max(this.height(x.left), this.height(x.right)) + 1;
    y.height = Math.max(this.height(y.left), this.height(y.right)) + 1;
    return y;
  }

  // get balanceFactor factor of a node
  getBalanceFactor(N) {
    if (N == null) {
      return 0;
    }

    return this.height(N.left) - this.height(N.right);
  }


  // helper function to insert a node
  insertNodeHelper(node, value) {

    /* 1. Perform the normal BST insertion */
    if (node === null) {
      return new AVLNode(value);
    }

    if (value < node.value) {
      node.left = this.insertNodeHelper(node.left, value);
    } else if (value > node.value) {
      node.right = this.insertNodeHelper(node.right, value);
    } else {
      return node; // Duplicate keys not allowed
    }

    /* 2. Update height of this ancestor node */
    node.height = 1 + Math.max(this.height(node.left), this.height(node.right));

    /* 3. Get the balance factor of this ancestor
     node to check whether this node became
     unbalanced */
    let balanceFactor = this.getBalanceFactor(node);

    // If this node becomes unbalanced, then there
    // are 4 cases

    // Left Left Case
    if (balanceFactor > 1 && value < node.left.value)
      return this.rightRotate(node);

    // Right Right Case
    if (balanceFactor < -1 && value > node.right.value)
      return this.leftRotate(node);

    // Left Right Case
    if (balanceFactor > 1 && value > node.left.value) {
      node.left = this.leftRotate(node.left);
      return this.rightRotate(node);
    }

    // Right Left Case
    if (balanceFactor < -1 && value < node.right.value) {
      node.right = this.rightRotate(node.right);
      return this.leftRotate(node);
    }

    /* return the (unchanged) node pointer */
    return node;
  }

  // insert a node
  insertNode(value) {
    this.root = this.insertNodeHelper(this.root, value);
  }

  //get node with minimum value
  nodeWithMimumValue(node) {
    let current = node;
    while (current.left !== null) {
      current = current.left;
    }
    return current;
  }

  // delete helper
  deleteNodeHelper(root, value) {

    // find the node to be deleted and remove it
    if (root == null) {
      return root;
    }
    if (value < root.value) {
      root.left = this.deleteNodeHelper(root.left, value);
    } else if (value > root.value) {
      root.right = this.deleteNodeHelper(root.right, value);
    } else {
      if ((root.left === null) || (root.right === null)) {
        let temp = null;
        if (temp == root.left) {
          temp = root.right;
        } else {
          temp = root.left;
        }

        if (temp == null) {
          temp = root;
          root = null;
        } else {
          root = temp;
        }
      } else {
        let temp = this.nodeWithMimumValue(root.right);
        root.value = temp.value;
        root.right = this.deleteNodeHelper(root.right, temp.value);
      }
    }
    if (root == null) {
      return root;
    }

    // Update the balanceFactor factor of each node and balanceFactor the tree
    root.height = Math.max(this.height(root.left), this.height(root.right)) + 1;

    let balanceFactor = this.getBalanceFactor(root);
    if (balanceFactor > 1) {
      if (this.getBalanceFactor(root.left) >= 0) {
        return this.rightRotate(root);
      } else {
        root.left = this.leftRotate(root.left);
        return this.rightRotate(root);
      }
    }
    if (balanceFactor < -1) {
      if (this.getBalanceFactor(root.right) <= 0) {
        return this.leftRotate(root);
      } else {
        root.right = this.rightRotate(root.right);
        return this.leftRotate(root);
      }
    }
    return root;
  }

  //delete a node
  deleteNode(value) {
    this.root = this.deleteNodeHelper(root, value);
  }

  // print the tree in pre - order
  preOrder() {
    this.preOrderHelper(this.root);
  }

  preOrderHelper(node) {
    if (node) {
      console.log(node.value);
      this.preOrderHelper(node.left);
      this.preOrderHelper(node.right);
    }
  }
}

var tree = new AVLTree();
tree.insertNode(10);
tree.insertNode(20);
tree.insertNode(30);
tree.insertNode(40);
tree.insertNode(50);
tree.insertNode(25);

tree.preOrder();
//tree.deleteNode(13);
//console.log("After Deletion: ");
//tree.preOrder();
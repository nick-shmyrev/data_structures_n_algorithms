class BST {
  constructor(value = null) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
  
  insert(value) {
    if (!this.value) { // if tree root is empty
      this.value = value;
    }
    else if (value <= this.value) {
      if (this.left) this.left.insert(value);
      else this.left = new BST(value);
    }
    else {
      if (this.right) this.right.insert(value);
      else this.right = new BST(value);
    }
    
    return this;
  }
  
  contains(value) {
    if (value === this.value) return true;
    
    if (value < this.value) {
      return !!this.left && this.left.contains(value);
    }
    else {
      return !!this.right && this.right.contains(value);
    }
    
    return false;
  }
  
  traverseDepthFirst_inOrder(callback) {
    if (!!this.left) this.left.traverseDepthFirst_inOrder(callback);
    callback(this);
    if (!!this.right) this.right.traverseDepthFirst_inOrder(callback);
  }
  
  traverseDepthFirst_preOrder(callback) {
    callback(this);
    if (!!this.left) this.left.traverseDepthFirst_preOrder(callback);
    if (!!this.right) this.right.traverseDepthFirst_preOrder(callback);
  }
  
  traverseDepthFirst_postOrder(callback) {
    if (!!this.left) this.left.traverseDepthFirst_postOrder(callback);
    if (!!this.right) this.right.traverseDepthFirst_postOrder(callback);
    callback(this);
  }
  
  deleteMin() {
    if (this.left) {
      const leftChild = this.left;
      
      if (!leftChild.left) {
        /* leftChild.right is going to be either null
        ** or a branch we'd want to reattach instead of
        ** node we're deleting */
        this.left = leftChild.right;
      }
      else {
        this.left.deleteMin();
      }
    }
    else if (this.right) {
      const rightChild = this.right;
      
      // replace root with it's right child
      this.value = rightChild.value;
      this.right = rightChild.right;
      this.left = rightChild.left;
    }
    else {
      this.value = null;
    }
  }
  
  deleteMax() {
    if (this.right) {
      const rightChild = this.right;
      
      if (!rightChild.right) {
        /* rightChild.left is going to be either null
        ** or a branch we'd want to reattach instead of
        ** node we're deleting */
        this.right = rightChild.left;
      }
      else {
        this.right.deleteMax();
      }
    }
    else if (this.left) {
      const leftChild = this.left;
      
      // replace root with it's left child
      this.value = leftChild.value;
      this.left = leftChild.left;
      this.right = leftChild.right;
    }
    else {
      this.value = null;
    }
  }
  
  delete(value) {
    if (value < this.value) {
      let leftChild = this.left;
      
      if (leftChild.value === value) this._deleteNode(leftChild, this);
      else leftChild.delete(value);
    }
    else if (value > this.value) {
      let rightChild = this.right;
      
      if (rightChild.value === value) this._deleteNode(rightChild, this);
      else rightChild.delete(value);
    }
    else { // deleting root node
      this._deleteNode(this);
    }
  }
  
  _deleteNode(node, parent) {
    // no children
    if (node.left === null && node.right === null) {
      if (parent.left && parent.left.value === node.value) parent.left = null;
      else parent.right = null;
    }
    // one child to the left
    else if (node.left !== null && node.right === null) {
      if (parent.left && parent.left.value === node.value) parent.left = node.left;
      else parent.right = node.left;
    }
    // one child to the right
    else if (node.right !== null && node.left === null) {
      if (parent.left && parent.left.value === node.value) parent.left = node.right;
      else parent.right = node.right;
    }
    // two children
    else {
      let secondSmallest = node;
      let nextSmallest = node.right;
      
      while (nextSmallest.left) {
        secondSmallest = nextSmallest;
        nextSmallest = nextSmallest.left;
      }
  
      this._deleteNode(nextSmallest, secondSmallest);
      node.value = nextSmallest.value;
    }
  }
  
  static compareTrees(tree1, tree2) {
    if (tree1 === null && tree2 === null) {
      return true;
    }
    else if (tree1 !== null && tree2 !== null) {
      return (
        tree1.value === tree2.value &&
        this.compareTrees(tree1.left, tree2.left) &&
        this.compareTrees(tree1.right, tree2.right)
      );
    }
    else return false;
  }
}

const bsTree = new BST(15);
// insert to left half of the tree
bsTree.insert(7).insert(9).insert(8).insert(3).insert(2).insert(4);
// insert to right half of the tree
bsTree.insert(22).insert(17).insert(16).insert(18).insert(19).insert(20).insert(24).insert(26);

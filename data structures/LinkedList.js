// Based on: https://codeburst.io/linked-lists-in-javascript-es6-code-part-1-6dd349c3dcc3

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  
  // Insert a node at the beginning of list
  insertAtBeginning(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
    
    if (!this.tail) this.tail = newNode;
    
    this.length++;
    return this.head;
  }
  
  // Insert a node at the end of list
  insertAtEnd(data) {
    const newNode = new Node(data);
    
    if (!this.head) {
      newNode.next = this.head;
      this.head = newNode;
      this.tail = newNode;
      
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    
    this.length++;
    return this.head;
  }
  
  // Find and return a specific node
  getAt(index) {
    if (index === this.length - 1) return this.tail;
    
    let counter = 0;
    let node = this.head;
    
    while (node) {
      if (counter === index) return node;
      counter++;
      node = node.next;
    }
    
    return null;
  }
  
  // Insert a node at specific position
  insertAt(data, index) {
    const newNode = new Node(data);
    
    if (!this.head || index === 0) {
      return this.insertAtBeginning(data);
    }
    
    const previous = this.getAt(index - 1);
    newNode.next = previous.next;
    previous.next = newNode;
    
    this.length++;
    return this.head;
  }
  
  // List iteration method
  forEach(callback) {
    let node = this.head;
    
    while (node) {
      callback(node);
      node = node.next;
    }
  }
  
  // Delete first node from the list
  deleteFirstNode() {
    if (!this.head) return;
    
    this.head = this.head.next;
    
    this.length--;
    return this.head;
  }
  
  // Delete last node from the list
  deleteLastNode() {
    if (!this.head) return null;
    if (!this.head.next) return this.deleteFirstNode();
    
    let secondToLast = this.head;
    let _tail = this.head.next;
    
    while (_tail.next !== null) {
      secondToLast = _tail;
      _tail = _tail.next;
    }
    
    secondToLast.next = null;
    this.tail = secondToLast;
    
    this.length--;
    return this.head;
  }
  
  // Delete specific node
  deleteAt(index) {
    if (!this.head) return;
    if (index === 0) return this.deleteFirstNode();
    if (index === this.length - 1) return this.deleteLastNode();
    
    const previous = this.getAt(index - 1);
    
    if (!previous || !previous.next) return;
    
    previous.next = previous.next.next;
    
    this.length--;
    return this.head;
  }
  
  // Delete the whole list
  deleteList() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
}

const list = new LinkedList();

list.insertAtBeginning('Born to be first...');
list.insertAtBeginning('test 2');
list.insertAtBeginning('test 3');

list.insertAtEnd('This is the end...');

list.getAt(2);

list.insertAt('This was inserted at position #1', 1);


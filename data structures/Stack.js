/*
STACK
Abstract data type
LIFO - Last in, first out
Collection of elements with push and pop operations.
Note that there is a natural order. Elements are removed in the reverse order of their addition.
DO NOT use an array and the native push/pop method in your implementation. That's too easy, yeah? =P
Use an object as the underlying data structure.

*** Exercises:
TODO: Implement a MinStack that has a min method which will return the minimum value in the stack in constant time.
*/

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor(maxLength = Infinity) {
    if (typeof maxLength !== 'number') throw new Error(`Type mismatch. Expected number, instead got ${typeof maxLength}`);
    
    this.top = null;
    this.length = 0;
    this.maxLength = maxLength;
  }
  
  // Check if stack is empty
  // return Boolean
  isEmpty() {
    return this.top === null;
  }
  
  // Add value to stack
  // return reference to stack to chain calls
  push(value) {
    if (this.length === this.maxLength) throw new Error(`Max capacity of ${this.maxLength} reached. Remove an element before adding a new one.`);
    const newNode = new Node(value);
    
    newNode.next = this.top;
    this.top = newNode;
    this.length++;
    
    return this;
  }
  
  // Remove item from stack
  // => most recent element added collection
  pop() {
    if (this.isEmpty()) return null;
    const poppedNode = this.top;
    
    this.top = poppedNode.next;
    this.length--;
    
    return poppedNode.value;
  }
  
  // Return the top node of stack without removing it
  peek() {
    return this.top.value;
  }
  
  // Check if value is in the stack
  // Returns Boolean
  contains(value) {
    if (this.isEmpty()) return false;
    
    let currNode = this.top;
    
    while (currNode.next) {
      if (currNode.value === value) return true;
      currNode = currNode.next;
    }
    
    return false;
  }
  
  // Return the number of pops until you get to a certain value
  popsUntil(value) {
    let counter = 0;
    let currNode = this.top;
    
    while (currNode) {
      if (currNode.value === value) return counter;
      currNode = currNode.next;
      counter++;
    }
    
    return null;
  }
  
  // Return the smallest value from stack
  minValue() {
    let currNode = this.top;
    let minValue = this.top.value;
    
    while (currNode.next) {
      if (currNode.next.value < minValue) minValue = currNode.next.value;
      currNode = currNode.next;
    }
    
    return minValue;
  }
  
  // Return biggest value from stack
  maxValue() {
    let currNode = this.top;
    let maxValue = this.top.value;
  
    while (currNode.next) {
      if (currNode.next.value > maxValue) maxValue = currNode.next.value;
      currNode = currNode.next;
    }
  
    return maxValue;
  }
}

const stack = new Stack();

stack.push(13).push(3).push(17).push(-2).push(21);

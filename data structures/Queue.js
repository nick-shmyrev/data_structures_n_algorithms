/*
QUEUE
Abstract data type
FIFO - First in, first out
Collection of elements with enqueue and dequeue operations.
Note that there is a natural order. Elements are removed in the reverse order of their addition.
DO NOT use an array and the native push/shift method in your implementation. Use an object as the underlying data structure.
 */

class Queue {
  constructor(maxLength = Infinity) {
    this.firstIndex = 0;
    this.lastIndex = 0;
    this.maxLength = maxLength;
    this.queue = {};
  }
  // add value to collection
  // return it's number in queue
  enqueue(val) {
    if (this.count() + 1 > this.maxLength) throw new Error(`Max capacity of ${this.maxLength} already reached. Remove element before adding a new one.`);
    
    this.queue[this.lastIndex] = val;
    this.lastIndex++;
    return this.count();
  }
  // Remove oldest(first) item from queue
  // return removed item
  dequeue() {
    const firstItem = this.queue[this.firstIndex];
    
    delete this.queue[this.firstIndex];
    this.firstIndex++;
    return firstItem;
  }
  // Return oldest(first) item without deleting from queue
  peek() {
    return this.queue[this.firstIndex];
  }
  // Return number of elements in queue
  count() {
    return this.lastIndex - this.firstIndex;
  }
  // Check if a value is in the queue
  // return true/false
  contains(val) {
    for (let i = this.firstIndex; i < this.lastIndex; i++) {
      if (this.queue[i] === val) return true;
    }
    
    return false;
  }
  // Return number of dequeues until you get to a value
  dequeuesUntil(val) {
    let counter = 0;
    
    for (let i = this.firstIndex; i < this.lastIndex; i++) {
      if (this.queue[i] === val) return counter;
      counter++;
    }
    
    return null;
  }
}

const line = new Queue(5);

line.enqueue({a: 1, b: false});
line.enqueue('two');
line.enqueue(3);
line.enqueue(true);
line.enqueue(3.14);
line.enqueue('Over maxLength');

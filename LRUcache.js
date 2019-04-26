// Least recently used cache

// cache:

// max capacity (n)
// get information via id


// least recently used -> [1, 2, 3, 4, 5]
// capacity of 5
// cache.set(10, 'value')
// [10, 1, 2, 3, 4]

// cache.get(3)
// [3, 10, 1, 2, 4]

// What data structures do we use?
// LinkedList -> remove elements (deletes are cheap)
// How do you store the values?
// Javascript Object (Hash tables)

// TODO: refactor to use doubly-linked list

class LRUCache {
  constructor(maxCapacity = 10) {
    this.capacity = maxCapacity;
    this.keysList = [];
    this.valuesHash = {};
  }
  
  set(id, value) {
    // if at max capacity
    if (this.keysList.length >= this.capacity) {
      // Delete the least recent cached item
      const deleteID = this.keysList.pop();
      delete this.valuesHash[deleteID];
    }
    
    // Insert the most recent item
    this.keysList.unshift(id);
    this.valuesHash[id] = value;
  }
  
  get(id) {
    // If id not found
    if (!this.keysList.indexOf(id) === -1) {
      return undefined;
    } else {
      const index = this.keysList.indexOf(id);
      const item = this.keysList.splice(index, 1)[0];
      
      this.keysList.unshift(item);
      return this.valuesHash[item];
    }
  }
}


const cache = new LRUCache(5);

cache.set('id1', 'Test id1');
cache.set('id2', 'Test id2');
cache.set('id3', 'Test id3');
cache.set('id4', 'Test id4');
cache.set('id5', 'Test id5');
cache.set('id6', 'Test id6');

// console.log('Try to go higher: ', cache.get(3));
// console.log('Try to go lower: ', cache.get(-1));

console.log('Getting an actual value: ', cache.get('id2'));


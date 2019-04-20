/*
* Given a list of numbers and a number k, return whether any two numbers from the list add up to k.
* For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.
* Bonus: Can you do this in one pass?
* */

function addsUpNaive(arr, k) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === k) return true;
    }
  }
  
  return false;
}

function addsUp(arr, k) {
  const pairs = {};
  
  for (let num of arr) {
    if (pairs[num]) return true;
    
    const secondNum = k - num;
    pairs[secondNum] = num;
  }
  
  return false;
}

console.log('addsUpNaive([10, 15, 3, 7], 12)', addsUpNaive([10, 15, 3, 7], 12));
console.log('addsUp([10, 15, 3, 7], 12)', addsUp([10, 15, 3, 7], 12));

console.log('addsUpNaive([10, 15, -3, 7], 12)', addsUpNaive([10, 15, -3, 7], 12));
console.log('addsUp([10, 15, -3, 7], 12)', addsUp([10, 15, -3, 7], 12));

console.log('addsUpNaive([10, 15, 3, 7], 17)', addsUpNaive([10, 15, 3, 7], 17));
console.log('addsUp([10, 15, 3, 7], 17)', addsUp([10, 15, 3, 7], 17));

console.log('addsUpNaive([10, 15, 3, 7], 18)', addsUpNaive([10, 15, 3, 7], 18));
console.log('addsUp([10, 15, 3, 7], 18)', addsUp([10, 15, 3, 7], 18));

console.log('addsUpNaive([10, 15, 3, 7], 0)', addsUpNaive([10, 15, 3, 7], 0));
console.log('addsUp([10, 15, 3, 7], 0)', addsUp([10, 15, 3, 7], 0));

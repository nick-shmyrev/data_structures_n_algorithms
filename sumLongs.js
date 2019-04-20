/*
* Given the string representations of two integers,
* return the string representation of the sum of those integers.
* Used to sum numbers too large to be natively supported in JS:
* sumLongs('712569312664357328695151392', '8100824045303269669937') - Expected: '712577413488402631964821329'
* sumLongs('50095301248058391139327916261', '81055900096023504197206408605') - Expected: '131151201344081895336534324866'
* */

function sumLongs(a,b) {
  // Filter out leading zeroes and split into arrays
  const _a = a.replace(/^0+/, '').split('');
  const _b = b.replace(/^0+/, '').split('');
  
  const result = [];
  let carry = 0;
  
  // sentinel variable for the while loop
  let summed = false;
  
  while (!summed) {
    const currA = Number(_a.pop()) || null;
    const currB = Number(_b.pop()) || null;
    
    if (currA + currB + carry >= 10) {
      result.unshift(currA + currB + carry - 10);
      carry = 1;
    }
    else {
      result.unshift(currA + currB + carry);
      carry = 0;
    }
    
    // Breakout condition - if both strings are empty, break
    if (!_a.length && !_b.length && carry === 0) summed = true;
  }
  
  return result.join('');
}

/*
* Given an array containing all the numbers from
* 1 to n except two, find the two missing numbers
* */

function findMissing(numbers) {
  const fullArrLength = numbers.length + 2;
  const res = Array(fullArrLength).fill(false);
  
  for (let num of numbers) {
    res[num - 1] = true;
  }
  
  return res.map((el, index) => (el !== true) ? index + 1 : false)
            .filter(Boolean);
}

console.log('findMissing([4, 2, 3])', findMissing([4, 2, 3]));

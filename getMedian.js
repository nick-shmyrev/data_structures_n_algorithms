// Merges sorted arrays in order
function _mergeArr(arr1, arr2) {
  const res = [];
  let index1 = 0;
  let index2 = 0;
  
  while (index1 < arr1.length && index2 < arr2.length) {
    if (arr1[index1] < arr2[index2]) {
      res.push(arr1[index1]);
      index1++;
    }
    else {
      res.push(arr2[index2]);
      index2++;
    }
  }
  
  return res.concat(
    arr1.slice(index1),
    arr2.slice(index2)
  );
}

// Get median of two sorted arrays
function getMedian (arr1, arr2) {
  const arr = _mergeArr(arr1, arr2);
  const midIndex = arr.length / 2;
  
  // If arr.length is even returns median of two median elements
  // else if arr.length is odd returns single median element
  return (arr.length % 2 === 0) ?
    (arr[midIndex - 1] + arr[midIndex]) / 2 :
    arr[Math.floor(midIndex)];
}

console.log('getMedian([1, 3, 5], [2, 4, 6])', getMedian([1, 3, 5], [2, 4, 6]));
console.log('getMedian([1, 3, 5, 7, 9], [2, 4, 6])', getMedian([1, 3, 5, 7, 9], [2, 4, 6]));
console.log('getMedian([1, 2, 3, 4, 5, 6], [0, 0, 0, 0, 10, 10])', getMedian([1, 2, 3, 4, 5, 6], [0, 0, 0, 0, 10, 10]));

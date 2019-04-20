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

// mergeSort
function mergeSort(arr) {
  if (arr.length < 2) return arr;
  
  const left = arr.slice(0, arr.length / 2);
  const right = arr.slice(arr.length / 2);
  
  return _mergeArr(
    mergeSort(left),
    mergeSort(right)
  );
}


console.log('mergeSort([3, 0, -2, 15, 27, 18, 9, 32, 23])', mergeSort([3, 0, -2, 15, 27, 18, 9, 32, 23]));
console.log('mergeSort([-3, -1, 0, -15, 0, -105, 0])', mergeSort([-3, -1, 0, -15, 0, -105, 0]));

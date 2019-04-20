function quickSort(arr) {
  if (arr.length <= 2) return arr;
  
  const pivot = arr[arr.length - 1];
  const left = [];
  const right = [];
  
  for (let i = 0; i < arr.length - 1; i++) {
    const el = arr[i];
    if (el < pivot) left.push(el);
    else right.push(el);
  }
  
  return [...quickSort(left), pivot, ...quickSort(right)];
}


console.log('quickSort([-2, 31, 7, -14, 23, 105, 42, 0, 3]):', quickSort([-2, 31, 7, -14, 23, 105, 42, 0, 3]));

// Generate random int in a given range
function _rnd(min, max) {
  return Math.random() * (max - min) + min;
}

// Return a Promise of a DB results page
// Promise randomly resolves in 150 to 5000 ms
function getPageAsync(pageNum) {
  return new Promise((resolve, reject) => {
    const delay = _rnd(150, 5000);
    
    setTimeout(() => {
      const result = Array(10).fill(`getPageAsync(${pageNum}); Delay: ${(delay/1000).toFixed(2)} seconds`);
      resolve(result);
    }, delay);
  });
}

// Requests 10 pages from DB,
// returns the result of all 10 pages requests
// in order they were requested
const getTenPages = async () => {
  const promiseArr = [];
  
  for (let i = 0; i < 10; i++) {
    promiseArr.push(getPageAsync(i));
  }
  
  const result = await Promise.all(promiseArr);
  const flatResult = result.reduce((acc, val) => acc.concat(val));
  
  console.log(JSON.stringify(flatResult, undefined, 2));
};

getTenPages();

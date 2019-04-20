function validBraces(braces) {
  if (braces.length % 2 > 0) return false;
  
  const stack = [];
  const pairs = {
    "}":"{",
    "]":"[",
    ")":"("
  };
  
  for (let brace of braces) {
    if ( Object.values(pairs).includes(brace) ) {
      stack.push(brace);
    }
    else if ( pairs[brace] && pairs[brace] !== stack.pop() ) {
      return false;
    }
  }
  
  return (stack.length === 0);
}

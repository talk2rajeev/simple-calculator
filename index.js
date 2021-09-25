function add(...args) {
  if(args.length === 0) {
    return new Error('Please provide at least 2 arguments');
  }
  let sum = 0;
  for(let i=0; i<args.length; i++) {
    const num = args[i];
    if (typeof num === "string") {
      return new Error('Only numbers can be accepted');
    }
    sum+=num;
  }
  return sum;
}

function substract(a, b, ...rest) {
  let result;
  if(typeof a === "number" && typeof b === "number"  &&  a && b) {
      result = a - b;
  } else {
      return new Error('Only numbers can be accepted');
  }

  if(rest.length > 0) {
      for(let i=0; i<rest.length; i++) {
          const num = rest[i];
          if(typeof num !== "number") {
              return new Error('Only numbers can be accepted');
          } else {
              result-=num;
          }
      }
  }
  return result; 
}

function multiply(...args) {
  if(args.length === 0) {
    return new Error('Please provide at least 2 arguments');
  }
  let result = 1;
  for(let i=0; i<args.length; i++) {
    const num = args[i];
    if (typeof num === "string") {
      return new Error('Only numbers can be accepted');
    }
    result*=num;
  }
  return result;
}

function divide(a,b) {
  if(typeof a !== "number" && typeof b !== "number") {
    return new Error('Only numbers can be accepted');
  }
  return a/b;
}

function power(op) {
  return function (pow) {
      return Math.pow(op, pow);
  }
}


function squareRoot(num) {
  if(num) {
    return Math.sqrt(num);
  }
  return new Error('argument missing')
}

function cubeRoot(num) {
  if(num) {
    return Math.cbrt(num);
  }
  return new Error('argument missing')
}

function percent(p, x) {
  if(typeof p !== "number" && typeof x !== "number") {
    return new Error('Only numbers can be accepted');
  }
  return (p/x)*100;
}




module.exports = {
  add,
  substract,
  multiply,
  divide,
  power,
  squareRoot,
  cubeRoot,
}

// function() {
//   console.log('Hi there!!');
// };

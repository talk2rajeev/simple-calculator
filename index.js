function add(...args) {
  console.log(args)
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

module.exports = {
  add,
}

// function() {
//   console.log('Hi there!!');
// };

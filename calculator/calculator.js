module.exports = {
  add,
};

function add(args) {
  const values = Array.isArray(args) ? args : Array.from(arguments);
  
     return values.reduce((sum, value) => {
      return sum + value;
     }, 0)
  }


/*
  We want this to work with any number of parameters

        const values = Array.isArray(arg) ? args : Array.from(arguments);

  - All the arguments/parameters that come in, we are going to assign to a variable called args
  - We want to convert that to an array like object
  - If it's already an array, then we don't want to do that but we want to test to see if it is
  - If it is then args is just going to stay what it is
  - Otherwise, we will take the arguments parameter and turn it into an array.

        return values.reduce((sum, value) => {
          return sum + value;
     }, 0)
        
  - Then we will return map reduce of values and will default it to zero

  - BREAKDOWN

  - When we use the reduce method on it we need to convert it into an actual array. 
  - From 0 to unspecified number of arguments we can convert that into an array so either way 
     an array was passed in or a comma separated lust of values 
  - The values constant is going to be an array.
  - Then we call reduce on it and pass a it a function and for each iteration through that
     function it will give us the SUM and the VALUE
  - The default initial value of sum is ZERO


*/
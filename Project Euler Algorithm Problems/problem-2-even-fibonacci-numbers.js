//By considering the terms in the Fibonacci sequence whose values do not exceed n,
// find the sum of the even-valued terms.

function fiboEvenSum(n) {
  //initialize and set variables to calculate fibo nums and calculated sum
  let prev = 0;
  let curr = 1;
  let temp;
  let sum = 0;
  //run a loop as long as current fibo num is less than the input
  while (curr < n) {
    //implement fibonacci formula to find each iteration
    temp = curr;
    curr = curr + prev;
    prev = temp;
    //if the iteration is divisible by 2, add it to sum
    if (curr % 2 === 0) {
      sum += curr;
    }
  }
  //return calculated sum
  return sum;
}
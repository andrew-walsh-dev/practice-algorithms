
//Find the sum of all the multiples of 3 or 5 below the provided parameter value number.

function multiplesOf3and5(number) {
  let sum = 0;
  //run a loop up to the input number
  for (let i = 0; i < number; i++) {
    //if divisible by 3 or 5, add it to the sum
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }
  //return the calculated sum
  return sum;
}

multiplesOf3and5(1000);
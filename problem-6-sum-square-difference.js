//Find the difference between the sum of the squares of the first n natural numbers and the square of the sum

//function that finds the difference between
//square of sums and sum of squares
function sumSquareDifference(n) {
  return squareOfSums(n) - sumOfSquares(n);
}

//function to find sum of squares
function sumOfSquares(n) {

  //init sum of squares to 0
  let sumSquares = 0;

  //loop through all nums from 1 to n (inclusive)
  //find the square of the num, then add it to the total sum
  for (let i = 1; i <= n; i++) {
    sumSquares += i * i;
  }

  //return the sum
  return sumSquares;
}

//function to find square of sums
function squareOfSums(n) {

  //init sum to 0
  let sum = 0;

  //loop through all nums from 1 to n (inclusive)
  //add each num to the sum
  for (let i = 1; i <= n; i++) {
    sum += i;
  }

  //return the square of the sum
  return sum * sum;
}

sumSquareDifference(100);
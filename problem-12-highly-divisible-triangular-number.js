/*    The sequence of triangle numbers is generated by adding the natural numbers.
    So the 7th triangle number would be 1 + 2 + 3 + 4 + 5 + 6 + 7 = 28.
    What is the value of the first triangle number to have over n divisors?   */

//main function
function divisibleTriangleNumber(n) {

  //start checking at the first triangular number
  let i = 1;

  //loop until you find the match
  while (1) {

    //if the triangular number has more than n factors, return that triangular num
    if (numberOfFactors(getTriangleNumber(i)) > n) {
      return getTriangleNumber(i);
    }
    //check the next triangular number if not a match
    i++;
  }
}

//function to find the number of factors that a num has
function numberOfFactors(num) {
  //1 has one factor
  if (num === 1) {
    return 1;
  }

  //variable to track amount of factors
  let amountFactors = 0;

  //loop through each num up to the sqrt of num and add 2 factors if divisible
  for (let i = 1; i < Math.sqrt(num); i++) {
    if (num % i === 0) {
      amountFactors += 2;
    }
  }
  //return the amount of factors
  return amountFactors;
}

//function to find the numth triangular number
function getTriangleNumber(num) {

  //start at 0
  let triangleNum = 0;

  //loop through each num and add it to get triangular num
  for (let i = 1; i <= num; i++) {
    triangleNum += i;
  }
  return triangleNum;
}

divisibleTriangleNumber(500);
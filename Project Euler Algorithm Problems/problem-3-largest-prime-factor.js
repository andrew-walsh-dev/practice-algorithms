//What is the largest prime factor of the given number?


function largestPrimeFactor(number) {
  let largestPrimeFactor = 0;

  //loop through all nums up to input num
  //if i is prime and a factor of number, it becomes the new largest prime factor
  for (let i = 1; i <= number; i++) {
    if (isPrime(i) && number % i === 0) {
      largestPrimeFactor = i;
    }
  }
  //return the largest prime factor
  return largestPrimeFactor;
}

//function to check if a number is prime
function isPrime(number) {
  //if less than or equal to one, not prime
  if (number <= 1) {
    return false;
  }
  //if 2, yes prime
  else if (number === 2) {
    return true;
  }
  //if an even num, not prime
  else if (number % 2 === 0) {
    return false;
  }
  //check the num for only odd factors since all primes
  //are odd and therefore cannot have an even factors
  for (let i = 3; i <= Math.sqrt(number); i += 2) {
    if (number % i === 0) {
      //if a factor is found, not prime
      return false;
    }
  }
  //if you make it through all checks, the number is prime
  return true;
}
largestPrimeFactor(13195);
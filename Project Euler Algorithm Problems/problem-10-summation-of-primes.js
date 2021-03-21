//Find the sum of all the primes below n.

//function to find the sum of primes below n
function primeSummation(n) {
  //2 is the first prime
  let sum = 2;
  //loop starting at 3 and only check odds
  for (let i = 3; i < n; i += 2) {
    //if the num is prime, add it onto the sum
    if (isPrime(i)) {
      sum += i;
    }
  }
  //return the sum
  return sum;
}

//function to check if a num is prime
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

primeSummation(2000000);
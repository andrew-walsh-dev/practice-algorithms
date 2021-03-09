//Find the sum of all the primes below n.


function primeSummation(n) {
  let sum = 2;
  for (let i = 3; i < n; i += 2) {
    if (isPrime(i)) {
      sum += i;
    }
  }
  return sum;
}

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
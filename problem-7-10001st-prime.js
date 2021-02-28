//What is the nth prime number?

//main function to find the nth prime
function nthPrime(n) {

  //start at 2, which is the first prime
  let curr = 2;

  //keep track of which prime you are at
  let primeCount = 1;

  //loop until you find the nth prime
  while (primeCount < n) {

    //only need to check odds since 2 is only even prime
    curr += 2;

    //if current num is prime, increment prime count
    if (isPrime(curr)) {
      primeCount++
    }
  }

 //when you reach the nth prime, return it
  return curr;
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

nthPrime(10001);
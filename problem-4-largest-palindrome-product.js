
//Find the largest palindrome made from the product of two n-digit numbers.

function largestPalindromeProduct(n) {
  let bigNum = Number("9".repeat(n)); //biggest n-digit number
  let smallNum = Number("1" + "0".repeat(n - 1)); //smallest n-digit number
  let palindromes = []; //array of all the palindromes we find that are products of two n-digit nums

  //nested for loop to check all products of n-digit numbers and push the palindromes to array
  for (let i = bigNum; i >= smallNum; i--) {
    for (let j = bigNum; j >= smallNum; j--) {
      if (isPalindrome((i * j))) {
        palindromes.push(i * j);
      }
    }
  }

  //return the largest palindrome we found
  return Math.max(...palindromes);
}

//function to check if a number is a palindrome
function isPalindrome(num) {

  //turn the number into an array with each digit as an element
  //so we can manipulate it
  let arr = num.toString().split("");

  //reverse the array of digits
  arr.reverse();

  //join it back together and turn it back into a number
  let newNum = Number(arr.join(""));

  //check the reversed num for equality to input num
  return newNum === num;
}

largestPalindromeProduct(3);
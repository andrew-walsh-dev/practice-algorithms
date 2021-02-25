//What is the smallest positive number that is evenly divisible by all of the numbers from 1 to n?
/** WARNING: This is way less efficient than using recursion to find the lcm of
 * all the nums from 1 through n because I am only checking the lcm of the two largest nums.
 *  Still, it works for a decent range of inputs
 */

function smallestMult(n) {
  let loop = 0;
  // loop until you find the num that divides them
  while (1) {
    let flag = 1;
    //only checking nums that are divisble by two largest nums to reduce amount of checks
    loop += lcm(n, n - 1);
    //check if the num divides all nums from 1 to n
    for (let i = n; i > 0; i--) {
      //if not, flag it and move to the next case
      if (!(loop % i === 0)) {
        flag = 0;
        break;
      } 
    }
    //if it passed, return it
    if (flag) {
      return loop;
    }
  }
}

//least common multiple function
function lcm(a, b) {
  let i = 0;
  //check multiples of the larger num until you find
  //one that divides a as well
  while (1) {
    i += b
    if (i % a === 0 && i % b === 0) {
      return i;
    }
  }
}

smallestMult(20);
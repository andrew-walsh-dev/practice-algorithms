//There exists exactly one Pythagorean triplet for which a + b + c = 1000. Find the product abc such that a + b + c = n.

function specialPythagoreanTriplet(n) {
  for (let c = 2; c < n; c++) {
    for (let b = 1; b < c; b++) {
      for (let a = 0; a < b; a++) {
        if (a + b + c === n && a ** 2 + b ** 2 === c ** 2) {
          return a * b * c;
        }
      }
    }
  }
   

 return true;
}

specialPythagoreanTriplet(1000);
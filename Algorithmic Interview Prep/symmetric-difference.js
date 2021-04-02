/*
Create a function that takes two or more arrays and returns 
an array of their symmetric difference. The returned array 
must contain only unique values (no duplicates).
*/

function sym(...args) {
    let inputArr = [...args];
    for (let i = 1; i < inputArr.length; i++) {
      inputArr[0] = symTwoArrays(inputArr[0], inputArr[i]);
      inputArr[i] = [];
    }
    inputArr = inputArr.flat();
    console.log(inputArr);
    return inputArr;
  }
  
  function symTwoArrays(arr1, arr2) {
    let newArr = [];
    for (let i = 0; i < arr1.length; i++) {
      if (!arr2.includes(arr1[i]) && !newArr.includes(arr1[i])) {
        newArr.push(arr1[i]);
      }
    }
    for (let j = 0; j < arr2.length; j++) {
      if (!arr1.includes(arr2[j]) && !newArr.includes(arr2[j])) {
        newArr.push(arr2[j]);
      }
    }
    return newArr;
  }
  
  sym([1, 2, 3], [5, 2, 1, 4]);  
   

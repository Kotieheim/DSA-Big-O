"use strict";

//==== EVEN OR ODD ====/
function isEven(value) {
  if (value % 2 === 0) {
    return true;
  } else return false;
}
// O(1) because it's performing a check (basic math operation) and returning
//a boolean; the input is just one value with one operation being performed on it

//=== ARE YOU HERE? ==//

function areYouHere(arr1, arr2) {
  let eyeTicks = 1;
  let jayTicks = 1;
  for (let i = 0; i < arr1.length; i++) {
    eyeTicks++;
    console.log("ticks for EYE", eyeTicks);
    const el1 = arr1[i];
    for (let j = 0; j < arr2.length; j++) {
      jayTicks++;
      console.log("ticks for JAY", jayTicks);
      const el2 = arr2[j];
      if (el1 === el2) return true;
    }
  }
  return false;
}
//compares every el in arr 1 with every el in arr 2
//six checks for every one check in i (the first loop)
//always corresponds to the array length of arr 2
//only has to loop first arr once
// console.log(areYouHere([2, 3, 4, 4, 2, 1], [1, 1, 6, 7, 1, 20]));
// console.log(areYouHere([1,3], [1,2,4,5]));

//O(n^2) because it's a nested loop

// Upon review: maybe this is exponential? It definitely isn't just O(n^2) because
// n doesn't mean anything here, what's *really* going on is that we're running
// O(array1.length * array2.length)

//=== DOUBLER ===//

function doubleArrayValues(array) {
  for (let i = 0; i < array.length; i++) {
    array[i] *= 2;
  }
  return array;
}

// function takes an array, multiplies every element of array by 2, then returns array with doubled values.
// Amount of operations directly equivalent to array length. If array contains two elements, it will perform doubling operation twice (once per element).
// If array contains 100 elements, function will perform doubling operation 100 times (once per every array element).
// Therefore, this is a linear algorithm. O(n).

// === NAIVE SEARCH ===//

function naiveSearch(array, item) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === item) {
      return i;
    }
  }
}

// function takes an array and an item to look for.
// worst case is that item to look for does not exist in the array passed.
// In which case, algorithm will search through every element of the given array.
// This is a linear algorithm. Worst case will always be that the amount of operations
// is the number of elements in the given array. O(n).

//=== CREATING PAIRS ===//
function createPairs(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      console.log(arr[i] + ", " + arr[j]);
    }
  }
}

// function takes an array and produces all possible pairs of elements within array (order does not matter)
// by virtue of there being one loop within another loop (one nested loop)
// this algorithm has a polynomial time complexity. O(n^2).

//=== GENERATE FIBONACCI ===//

function generateFib(num) {
  let result = [];
  for (let i = 1; i <= num; i++) {
    // we're adding the first item
    // to the result list, append the
    // number 0 to results
    if (i === 1) {
      result.push(0);
    }
    // ...and if it's the second item
    // append 1
    else if (i === 2) {
      result.push(1);
    }
    // otherwise, sum the two previous result items, and append that value to results.
    else {
      result.push(result[i - 2] + result[i - 3]);
    }
  }
  // once the for loop finishes
  // we return `result`.
  return result;
}

//depends on the number you pass to it
//the function has one for loop and its run time will depend on how high the input value is
//thereforce, the big O classification is linear - O(n)

//=== AN EFFICIENT SEARCH ===//

function efficientSearch(array, item) {
  let minIndex = 0;
  let maxIndex = array.length - 1;
  let currentIndex;
  let currentElement;

  while (minIndex <= maxIndex) {
    currentIndex = Math.floor((minIndex + maxIndex) / 2);
    currentElement = array[currentIndex];

    if (currentElement < item) {
      minIndex = currentIndex + 1;
    } else if (currentElement > item) {
      maxIndex = currentIndex - 1;
    } else {
      return currentIndex;
    }
  }
  return -1;
}

//Findd the middle item and checks to see if that is our item; otherwise, it takes
//the higher or lower end and keeps checking and splitting the array until we find the item
//The big O classification is O(log(n))
// return -1 following while loop is to indicate that item does not exist in given array, basically a false return

//=== RANDOM ELEMENT ===//
function findRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

//This function is just grabbing a random element in the array; the length of the array
//doesn't matter; the operation will take the same amount of time
//therefore, the big O classification would be constant O(1);

//=== IS IT PRIME ===//

function isPrime(n) {
  // if n is less than 2 or a decimal, it's not prime
  if (n < 2 || n % 1 !== 0) {
    return false;
  }
  // otherwise, check if `n` is divisible by any integer
  // between 2 and n.
  for (let i = 2; i < n; ++i) {
    if (n % i === 0) return false;
  }
  return true;
}

// This function is linear because in the worst-case scneario, our loop will only run
// n times. Therefore amount of operations will always directly scale with value of n
// O(n)

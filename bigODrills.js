// 1 A. Constant time, has one input and gets an output, regardless on input size.
// 1 B. Linear time, Every loop is asking a different person if they have the same breed as you.

// 2. Even or Odd.

// Initial thought - this would be constant time since its just a single check weather its divisible without a remainder. regardless of input size it will take the same amount of time to output.

function isEven(value) {
  let ticks = 0;
  if (value % 2 == 0) {
    return true;
  } else return false;
}
// console.log(isEven(3));
// console.log(isEven(4));

// 3. Are you here?
// Initial thought - this would be O(n^k) or Polynomial time since there's a nested loop. Upon further exploration, might be exponential? I'm gonna go with polynomial still.

function areYouHere(arr1, arr2) {
  let iTick = 1;
  let jTick = 1;
  for (let i = 0; i < arr1.length; i++) {
    iTick++;
    const el1 = arr1[i];
    for (let j = 0; j < arr2.length; j++) {
      jTick++;
      const el2 = arr2[j];
      if (el1 === el2) return;
      console.log(el1, el2);
      true;
    }
  }
  console.log(iTick, jTick);
  return false;
}
// console.log(areYouHere([1, 2, 3, 4, 4], [5, 5, 6, 7, 8]));

// 4. Doubler
// initial thought - I'd say Linear? it loops through an array and doubles every value in the array. Inspection leads me to confirm its linear. run time is exactly proportional to the size of the input. for however many items are inputted it performs that same amount of functions.

function doubleArrayValues(array) {
  let ticks = 0;
  for (let i = 0; i < array.length; i++) {
    ticks++;
    array[i] *= 2;
  }
  return { results: array, ticks: ticks };
}
// console.log(doubleArrayValues([1, 2, 3, 4, 6]));

// 5. Naive search
// initial thought - linear again, it loops through an array searching for a specific item, and then returns that item. its run time consists of whenever it finds the item and worst case it doesnt find the item, in which the run time is the size of the array input.

function naiveSearch(array, item) {
  let ticks = 0;
  for (let i = 0; i < array.length; i++) {
    ticks++;
    if (array[i] === item) {
      return { result: i, ticks: ticks };
    }
  }
  return ticks;
}
// console.log(naiveSearch([1, 2, 3, 4, 5], 8));

// 6. Createing Pairs
// initial thought - I wanna say a nested loop is a dead give away for Polynomial, so I'll go away with that since adding a "ticks" variable would be incrememnted every loop, of which there are two. The funcion will loop through the array, twice, listing every pair availabe of the input, arr.

function createPairs(arr) {
  let ticks = 0;
  for (let i = 0; i < arr.length; i++) {
    ticks++;
    for (let j = i + 1; j < arr.length; j++) {
      ticks++;
      console.log(arr[i] + " " + arr[j]);
    }
  }
  return ticks;
}

// console.log(createPairs([1, 2, 3, 4, 5]));

// 7. Compute the sequence
// initial thought - This looks as if its making a fibonacci sequence array. Seems rather linear to me still. Upon further investigation, still going to say this is classified as Linear - O(n) since output = size of input.

function compute(num) {
  let ticks = 0;
  let result = [];
  for (let i = 1; i <= num; i++) {
    ticks++;
    //take the input number and checks its value
    if (i === 1) {
      // loops all the way until it gets to 1, where it puts the first point of the sequence.
      result.push(0);
    } else if (i == 2) {
      // same as before, loops down to a point and pushes the starting variables, this being 2 and then loops to 1 which looped through the conditional pushes 0 to the start.
      result.push(2);
    } else {
      // fibonacci equation
      result.push(result[i - 2] + result[i - 3]);
    }
  }
  // when looped all the way down, returns the result.
  return { result: result, ticks: ticks };
}

// console.log(compute(7));

// 8. An efficient search
// Initial thought - this is Logarithmic O(log(n)) since it has variables setting the index of the array with each iteration. we then set our index variables which will determine which half we need to focus on, thus halfing the input each pass. if it doesn't find the item it returns a default of -1.

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

// console.log(efficientSearch([8, 3, 7, 2, 1, 3, 5, 7, 9, 3, 9, 8], 4));

// 9. Random element.
// initial thought - regardless of the size of the input it will just randomly grab one element every time making this the holy grail of Big O, Constant time - 0(1)

function findRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// console.log(findRandomElement([8, 6, 7, 5, 3, 0, 9]));

// 10. What Am I?
// Initial thought - looking to see if a number is prime, since it is checking if anything lesser than 2 or has a decimal will be false. This would be classified as Linear O(n) I believe, increasing based on size of input.

function isWhat(n) {
  let tick = 0;
  // Prime numbers can't be decimals or anything lower than 2
  if (n < 2 || n % 1 != 0) {
    return false;
  }
  // checks if the number is divisible by a number between 2 and your input, n.
  for (let i = 2; i < n; ++i) {
    tick++;
    if (n % i == 0) return false;
  }
  return { result: true, ticks: tick };
}

// console.log(isWhat(7));

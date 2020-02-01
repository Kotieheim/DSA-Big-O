// console.log(countTriangle(2));
// console.log(countTriangle(4));
// console.log(countTriangle(16));

// Exponential time O(2^n) For an input of size 2, an exponential time algorithm will take 2^2 = 4 time.

function countTriangle(layers) {
  let ticks = 1;
  let count = 0; // the number of dots we've counted so far
  let layer = 0; // the current layer we're on
  let lastLayer = 1; // the number of dots we counted in the previous layer
  while (layer < layers) {
    ticks++;
    let newLayer = 0; // the number of dots we've counted so far in the current layer
    for (let i = 0; i < lastLayer; i++) {
      ticks++;
      newLayer += 2;
    }
    lastLayer = newLayer;
    count += lastLayer;
    layer++;
  }
  return {
    result: count,
    ticks: ticks
  };
}
// Polynomial time O(n^k) Running this code, you can see the performance for inputs of size 3, 10, and 100. With an input of size 100, we're already > 10,000 ticks, so the time complexity is growing more quickly than the size of our input. If we double the input size, we quadruple the running time.

function hasDuplicates(array) {
  let ticks = 0,
    result = false;
  for (let i = 0; i < array.length; i++) {
    ticks++;
    for (let j = 0; j < array.length; j++) {
      ticks++;
      if (array[i] == array[j] && i != j) {
        result = true;
      }
    }
  }
  return {
    result: result,
    ticks: ticks
  };
}

// Linear time O(n) - function runs and determines the min as well as length of the array until it progresses the whole array, then returns the min. ticks = how many times the funcion looped
function findMin(array) {
  let min = array[0],
    ticks = 1;

  for (let i = 1; i < array.length; i++) {
    ticks++;
    if (array[i] < min) {
      min = array[i];
    }
  }
  return { result: min, ticks: ticks };
}

// Logarithmic Time 0(log(n))

function howManyLessThanNitems(arr, n) {
  let ticks = 0;
  /* If the 1st element in the array is greater than `n`, return 0, because no items in the array are less than `n`. */
  if (!arr.length || arr[0] >= n) {
    ticks++;
    return 0;
  }

  let lowIndex = 0,
    highIndex = arr.length;

  while (highIndex > lowIndex) {
    let midIndex = Math.floor((highIndex + lowIndex) / 2);
    /* If `midIndex` element is greater than `n`, that means all elements to the right of `midIndex` are also greater than `n`, so we only need to focus on elements to the left of `midIndex`. We set `highIndex` to the current value of `midIndex` so next time through the loop, we'll only look at the left half */
    if (arr[midIndex] >= n) {
      highIndex = midIndex;
      ticks++;
    } else if (arr[midIndex + 1] < n) {
      /* If the element to the right of `midIndex` is less than `n`, then we know that we need to check the items to the right of `midIndex`, so we set `lowIndex` to the current value of `midIndex`, so that next time through the loop we only look at the right side */
      lowIndex = midIndex;
      ticks++;
    } else {
      /* Otherwise, if the element to the right of `midIndex` is greater than or equal to `n`, we know that the item at `midIndex` is the last item that's less than `n`, so we return `midIndex +  1` to get the total number of items that are less than `n` */
      ticks++;
      return {
        result: midIndex + 1,
        ticks: ticks
      };
    }
  }
}

// Constant time 0(1)

function getRandomItem(array) {
  let ticks = 0;
  // Get a random number and access that element in the array
  const item = array[Math.floor(Math.random() * array.length)];
  ticks++;
  return {
    result: item,
    ticks: ticks
  };
}

// Time Complexity
function sum(array) {
  let sum = 0,
    ticks = 1;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
    ticks++;
  }
  return { result: sum, ticks };
}

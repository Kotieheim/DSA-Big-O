// Counting Sheep

function countSheep(sheep) {
  if (sheep === 0) {
    return console.log("All sheep jumped over the fence");
  } else {
    console.log(sheep + " " + " Another sheep jumps over the fence");
    sheepCount = sheep -= 1;
    countSheep(sheepCount);
  }
}
countSheep(3);

// Power Calculator

function powerCalculator(base, exp) {
  if (exp === 0) {
    return base;
  }
  if (exp < 0) {
    return console.log("Exponent should be >= 0");
  } else {
    return base * powerCalculator(base, exp - 1);
  }
}

console.log(powerCalculator(3, 4));

// Reverse STring

// function stringReverse(string) {
//   if (string === "") {
//     return "";
//   } else {
//     console.log(string.substr(1), string[0]);
//     return stringReverse(string.substr(1) + string[0]);
//   }
// }
// stringReverse("hey");
// might crash your browser, it did mine

// nth Triangular Number

function triangularNum(n) {
  if (n === 1) {
    return 1;
  }
  return n + triangularNum(n - 1);
}

console.log(triangularNum(18));

// String Splitter

function splitString(string, seperate) {
  if (string === "") {
    return "";
  }
  const char = string[0];
  if (char === seperate) {
    return splitString(string.slice(1), seperate);
  } else {
    return char + splitString(string.slice(1), seperate);
  }
}

console.log(splitString("02/20/2020"));

// Fibonacci

function getFibonacciSequence(number, array) {
  if (number === 1) {
    console.log(array);
    return number;
  } else if (number === 2) {
    return 1;
  } else {
    let sequenceNumber =
      getFibonacciSequence(number - 1, array) +
      getFibonacciSequence(number - 2, array);
    array.push(sequenceNumber);
    return sequenceNumber;
  }
  return getFibonacciSequence;
}

console.log(getFibonacciSequence(7, []));

// Factoral

function recursive(number) {
  if (number === 1) {
    return number;
  }
  return number * recursive(number - 1);
}
console.log(recursive(5));

// Maze

// Anagrams

let anagrams = [];

let genAnagrams = (word, anagram) => {
  if (!word) {
    anagrams.push(anagram);
    return;
  }
  for (let i = 0; i < word.length; i++) {
    anagram += word[i];
    genAnagrams(word.slice(0, i) + word.slice(i + 1), anagram);
    anagram = anagram.slice(0, anagram.length - 1);
  }
};
// not sure
genAnagrams("Dakota");
console.log(anagrams);

// Organization Chart

function chart(obj, indent = "") {
  let output = "";
  for (let key in obj) {
    output = output + indent + key + "\n";
    output = output + chart(obj[key], indent + "     ");
  }
  return output;
}

let people = {
  Zuckerberg: {
    Schroepfer: {
      Bosworth: {
        Steve: {},
        Kyle: {},
        Andra: {}
      },
      Zhao: {
        Richie: {},
        Sofia: {}
      }
    },
    Schrage: {
      VanDyck: {
        Sabrina: {},
        Michelle: {},
        Josh: {}
      },
      Swain: {
        Blanch: {},
        Tom: {},
        Joe: {}
      }
    },
    Sandberg: {
      Goler: {
        Eddie: {},
        Julie: {},
        Annie: {}
      },
      Hernandez: {
        Rowi: {},
        Inga: {},
        Morgan: {}
      },
      Moissinac: {
        Amy: {},
        Chuck: {},
        Vinni: {}
      },
      Kelley: {
        Eric: {},
        Ana: {},
        Wes: {}
      }
    }
  }
};

console.log(chart(people));

function getBinary(number) {
  for (let i = 1 < 31; i > 0; i = 1 / 2) {
    if (number === i) {
      console.log("1");
    } else {
      console.log("0");
    }
  }
}
// this will break your browser
console.log(getBinary(8));

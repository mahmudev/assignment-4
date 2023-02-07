// problem #1
// description : first it will check if the input is not a positive number then the function performs a mathematical calculation ((number * 3 + 10) / 2) - 5 and returns the result

function mindGame(number) {
  if (typeof number === "number" && number > 0) {
    const result = (number * 3 + 10) / 2 - 5;
    return result;
  } else {
    return "Please input a Positive number.";
  }
}

console.log(mindGame(5));

// problem #2
// description : The "evenOdd" function takes a string input and checks if it is a string. If yes, it calculates the length of the string and returns "Even" if the length is even and "Odd" if it's odd. If the input is not a string, it returns an error message.

function evenOdd(inputString) {
  if (typeof inputString === "string") {
    if (inputString.length % 2 === 0) {
      return "Even";
    } else {
      return "Odd";
    }
  } else {
    return "please input a string";
  }
}

console.log(evenOdd("Phero"));

// problem #3
// description :This code defines a function isLGSeven(number) that takes in a number as input. It calculates the difference between the input and 7, and if the absolute value of that difference is less than 7, it returns the difference. Otherwise, it returns double the input. If the input is not a positive number, it returns a warning message.

function isLGSeven(number) {
  if (typeof number === "number" && number > 0) {
    let difference = number - 7;
    if (Math.abs(difference) < 7) {
      return difference;
    } else {
      return 2 * number;
    }
  } else {
    return "Please input a Positive number.";
  }
}

console.log(isLGSeven(6));

// problem #4
// description :This code takes an input array, checks if it is an array or not, and counts the number of negative values (referred to as "Bad Data") in it. If the input is not an array, it returns an error message.

function findingBadData(arrayData) {
  if (Array.isArray(arrayData)) {
    let badDataCount = 0;
    for (let i = 0; i < arrayData.length; i++) {
      if (arrayData[i] < 0) {
        badDataCount++;
      }
    }
    return badDataCount;
  } else {
    return "Please input an Array.";
  }
}

console.log(findingBadData([-4, -9, -5, -33, -55])); // Output: 0

// problem #5
// description :This code is a function that calculates the total number of diamonds obtained by converting gems. It checks if the input values are positive numbers, then performs a calculation using the input values and returns the result. If the input values are not positive numbers, it returns an error message.

function gemsToDiamond(gems1, gems2, gems3) {
  if (
    typeof gems1 === "number" &&
    typeof gems2 === "number" &&
    typeof gems3 === "number" &&
    gems1 > 0 &&
    gems2 > 0 &&
    gems3 > 0
  ) {
    let totalDiamonds = gems1 * 21 + gems2 * 32 + gems3 * 43;
    if (totalDiamonds > 1000) {
      totalDiamonds -= 2000;
    }
    return totalDiamonds;
  } else {
    return "please input a Positive number";
  }
}

console.log(gemsToDiamond(100, 5, 1));

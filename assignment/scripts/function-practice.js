console.log('***** Function Practice *****');

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());



// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'

function helloName( name ) {
  return 'Hello, ' + name + '!';
}

let greetingHi = helloName( 'Mason' );

// Remember to call the function to test
console.log( greetingHi );



// 3. Function to add two numbers together & return the result

function addNumbers( firstNumber, secondNumber ) {
  return firstNumber + secondNumber;
}

let sum1 = addNumbers( 6, 4 );
console.log( sum1 );



// 4. Function to multiply three numbers & return the result

function multiplyThree( num1, num2, num3 ) {
  return num1 * num2 * num3;
}

let times3 = multiplyThree( 4, 8, 10 );
console.log( times3 );



// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise

function isPositive(number) {
  if ( number > 0 ) {
    return true;
  } else {
    return false;
  }
}



// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log('isPositive - should say true', isPositive(3));
console.log('isPositive - should say false', isPositive(0));
console.log('isPositive - should say false', isPositive(-3));


// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.

function getLast( array ) {
  if ( array === 0 ) {
    return undefined;
  } else {
    return array[array.length-1];
  }
}

const emptyArray = [];
console.log( getLast(emptyArray) );


// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 

function find( value, array ) {
  for ( let i = 0; i < array.length; i++ ) {
    if ( array[i] === value ) {
      return true;
    }    
  }
  return false;
}

let numbers = [ 1, 2, 3, 4, 5 ];
console.log( find( 4, numbers) );
console.log( find( 9, numbers) );
console.log( find( 1, numbers) );



// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise

function isFirstLetter( letter, string ) {
    return string.charAt(0) === letter;
}

console.log('isFirstLetter - should say true', isFirstLetter('a', 'apple'));
console.log('isFirstLetter - should say false', isFirstLetter('z', 'apple'));

// 9. Function to return the sum of all numbers in an array
function sumAll( array ) {
  let sum = 0;
  // TODO: loop to add items
  for ( num of array ) {
    sum += num;
  }
  // TODO: return the sum
  return sum;
}

let array1 = [ 5, 6, 8, 9, 11 ];
let array2 = [ 23, 56, 87, 33 ];
console.log( sumAll(array1) );
console.log( sumAll(array2) );


// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.

function allPositive( input ) {
  const positiveNums = [];
  for ( number of ( input ) ) {
    if ( number > 0 ) {
      positiveNums.push( number );
    }
  }
  return positiveNums;
}

let input1 = [ -1, -7, 3, 8, 11, 5, -6 ];
let input2 = [ -2, -5, -6, -8, -9 ];
console.log( allPositive(input1) );
console.log( allPositive(input2) );


// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!


// "The Lario and Muigi Problem"
//  
//  Issue 
//  Looks like some hoodlum plumber and his brother has been running around and damaging your stages again.

//  The pipes connecting your level's stages together need to be fixed before you receive any more complaints.

//  The pipes are correct when each pipe after the first is 1 more than the previous one.

//  Task
//  Given the a list of unique numbers sorted in ascending order, return a new list so that the values increment by 1 for each index from the minimum value up to the maximum value (both included).

function fixPipes( numbers ) {
  const minValue = numbers[0];
  const maxValue = numbers[numbers.length-1];

  const fixedArray = [];
  for ( let i = minValue; i <= maxValue; i++ ) {
    fixedArray.push(i);
  }
  return fixedArray;
}

let input = [ 1, 3, 7, 9, 11 ];
const output = fixPipes( input );
console.log( output ); 

// let input2 = [ 1, 5, 7, 10, 14 ];
// output = fixPipes( input2 );
// console.log( output ); 



// DO NOT MODIFY
// Used for automated testing
try {
  module.exports = {
    hello,
    helloName,
    addNumbers,
    multiplyThree,
    isPositive,
    getLast,
    find,
    isFirstLetter,
    sumAll,
    allPositive,
  };
} catch (e) {
  // Do nothing
}
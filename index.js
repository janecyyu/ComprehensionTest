//NODE TEST
//console.log("working");

//Write a function "min" that takes 2 arguements which should be numbers and returns to lowest of the two
//Code Under this line
function min(a, b) {
  //check if number
  if (!isNaN(a) && !isNaN(b)) {
    //if equaling
    if (a === b) {
      return "a equals b!";
    } else if (a > b) {
      return b;
    }
    return a;
  }
}
// console.log(min(-1, 2));
// console.log(min(200, 200));
// console.log(min(10.5, 9.1));

/*Write a function "range" which takes two arguments "start" and "end" that returns an array containing all of the 
integers between and including start and end in sequential order */
//code under this line
function range(start, end) {
  let list = [];
  //check if number
  if (!isNaN(start) && !isNaN(end)) {
    //add numbers to the list
    for (var i = start; i <= end; i++) {
      list.push(i);
    }
    return list;
  }
}
//console.log(range(1, 10));

/*Write a function 'sum' which takes an Array of numbers as an argument and returns their sum */
function sum(array) {
  let sum = array.reduce((total, num) => total + parseFloat(num), 0);
  return sum;
}
//console.log(sum([1,2,3,0,10]))

/* Write a program that uses console.log to print all numbers from 1 to 100 with three exceptions for numbers divisible
by 3 print "BUZZ" instead of the number and for numbers divisible by 5 print "FIZZ" (instead of the number) if a
number is divisible both by 5 and by 3 print "FIZZ BUZZ"

For this problem consider researching the modulus operator */

function fizzBuzz() {
  //CODE HERE
  var oneToHundredArray = [];
  for (var value = 1; value <= 100; value++) {
    //divisible both by 5 and by 3 print "FIZZ BUZZ"
    if (value % 3 === 0 && value % 5 === 0) {
      oneToHundredArray.push("FIZZ BUZZ");
      //divisible by 3 print "BUZZ"
    } else if (value % 3 === 0) {
      oneToHundredArray.push("BUZZ");
      //divisible by 5 print "FIZZ"
    } else if (value % 5 === 0) {
      oneToHundredArray.push("FIZZ");
    } else {
      oneToHundredArray.push(value);
    }
  }
  console.log(oneToHundredArray);
}

//fizzBuzz();

/* You can get the Nth character (letter) from a string by writting the string variable name plus [N] e.g:

const abc = 'abc';
abc[1]

The return value will be a string containing only 1 character (in the above case that character was 'b') the first 
character has position 0, which causes the last character to be found at position string.length - 1. In other words
a two character string has length two and its characters have positions 1 and 0. write a function that takes a string
as an argument and returns a number that indicate how many uppercase 'B's that string contains once that is completed
write another function which extends the first function by taking in a second arguement which is the character you wish
to count the number of.  */

function countBs(string) {
  //CODE HERE
  let counter = 0;
  for (var i = 0; i < string.length; i++) {
    //loop every characters
    if (string.charAt(i) === "B") {
      counter++;
    }
  }
  return counter;
}
// console.log(countBs('Bring'));
// console.log(countBs('ring'));
// console.log(countBs('Bling-Bling'));

function countChars(string, character) {
  //CODE HERE
  let counter = 0;
  for (var i = 0; i < string.length; i++) {
    //loop every characters
    if (string.charAt(i) === character) {
      counter++;
    }
  }
  return counter;
}
// console.log(countChars("Apple","A"))
// console.log(countChars("Eggs","g"))
// console.log(countChars("Apple","C"))

/* Write a loop that makes seven calls to console.log to output the following triangle:

________________________________
# 
##
###
####
#####
######
#######
________________________________
It may be useful to know that you can find the length of a string by writing .length after it 
eg. let abc = 'abc';
    console.log(abc.length);
*/

function sevenLoop() {
  //for 7 rows
  for (i = 1; i <= 7; i++) {
    console.log("#".repeat(i));
  }
}
//sevenLoop();
/* Write a program that creates a string which represents an 8x8 grid. At each position of the grid  there is either
a space or a # character the characters should form a "cheeseboard" when console.log'ed something like this should be 
displayed 

__________________________________________

 # # # # 
# # # #
 # # # # 
# # # # 
 # # # # 
# # # # 
 # # # # 
# # # # 

__________________________________________

once you have completed the program take in an arguement that varies the size of the grid */

function chessBoard(size) {
  //CODE HERE
  const first = " #";
  const second = "# ";

  for (i = 1; i <= size; i++) {
    if (i % 2 === 1) {
      console.log(first.repeat(size / 2));
    } else {
        console.log(second.repeat(size / 2));
      }
    }
  }
chessBoard(2);
//ANY ADDITIONAL COMMENTS OR CONCERNS CAN BE LEFT UNDER THIS LINE

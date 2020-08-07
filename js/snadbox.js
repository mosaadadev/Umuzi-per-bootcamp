// TASK 1***********************

// x = 0
// y = 1
// Print the value of x
// Print the value of y
// x = x + 3
// y = y + x
// Print the value of x
// Print the value of y


//1 answer*


let x = 0;
let y = 1;

console.log(x);
console.log(y);

//2

let X = x + 3;
let Y = y + X;

console.log(X);
console.log(Y);


// TASK 2***********************

// x = 1 + 1 * 2
// y = (1 + 1) * 2
// z = 1 + ( 1 * 2 )
// a =  1 + 1 * 2 / 2
// b =  (1 + 1 * 2 ) / 2

// answer*

let firstx = 1 + 1 * 2;
let secondy = (1 + 1) * 2;
let thirdz = 1 + ( 1 * 2 );
let fortha =  1 + 1 * 2 / 2;
let fifthb =  (1 + 1 * 2 ) / 2;

console.log(firstx);
console.log(secondy);
console.log(thirdz);
console.log(fortha);
console.log(fifthb);

// TASK 3 ******************

// Write a function that takes 2 numbers as input. If either of the numbers is 65, OR if the sum of the numbers is 65 then return true. Otherwise return false

// Answer*

const always = 65;
let numOne = 6;
let numTwo = 45;

let sum = numOne + numTwo ;

if (sum === always || numOne === always || numTwo === always){
    console.log("true");
}else{
    console.log("false");
};




// TASK 4********************

// Write a function that takes 2 numbers as input. If either of the numbers is 3 AND the sum of the numbers contains a 3 then return true. Otherwise return false

// Answer*

const alwaysNow = 3;
let InputOne = 3;
let InputTwo = 0;

let Newsum = InputOne + InputTwo ;

if (InputOne === alwaysNow && Newsum === alwaysNow || InputTwo === alwaysNow && Newsum === alwaysNow ){
    console.log("true");
}else {
    console.log("false");
};




// Task 5********************

// Write a function that takes in three numbers. These numbers represent the lengths of the sides of a triangle. The function should return the area of a triangle.

//answer*
function calculateTriangleArea(side1, side2, side3) {

    let s = (side1+side2+side3)/2;
    let area = Math.sqrt(s*(s-side1)*(s-side2)*(s-side3));

    console.log(area);

}
calculateTriangleArea(2,4,4);




// Task 6*********************

// White a function that takes in three numbers and returns the maximum number. Do this without using any builtin methods. Write your own logic from scratch.

//answer*
console.log(Math.max(1,2,20,3,4,5,6));



// Task 7****************

// Write a function that takes in a number representing the temperature in Celsius and returns the temperature in Fahrenheit. Write another function that does the opposite (Fereignheit to Celsius)

//answer*





// Task 8*************

// Make a function to convert any number into hours and minutes. (For example, 71 will become “1 hour, 11 minutes”; 133 will become “2 hours, 13 minutes”.)

// answer*
// a
function timeConvert(n) {
    let num = 71;
    let hours = (num / 60);
    let rhours = Math.floor(hours)
    let minutes = (hours - rhours) * 60;
    let rminutes = Math.round(minutes);
    return num + " minutes = " + rhours + " hour(s) and " + rminutes + " minute(s).";
    }
    
    console.log(timeConvert(200));

    // b
function timeConverter(n) {
    let number = 133;
    let hours = (number / 60);
    let remainhours = Math.floor(hours);
    let minutes = (hours - remainhours) * 60;
    let remainingminutes = Math.round(minutes);
    return number + " minutes = " + remainhours + " hour(s) and " + remainingminutes + " minute(s).";
    }
    
    console.log(timeConverter(200));


// Task 9***************

// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Find the sum of all the multiples of 3 or 5 below 1000.

//answer*


// Task 10****************

// Write a function that takes in a string and then prints out all the vowels in the string. Make sure it can deal with capital letters and small letters.

//answer*
// let word ="The Girl Is Always Up And Down With Her Dog In The Street";
// function vowel_count(words)
// {
//   let vowel_list = ['a', 'e', 'i', 'o', 'u','A', 'E', 'I', 'O', 'U']
  
  
//   for(let x = 0; x < word.length ; x++)
//   {
//     if (word.indexOf === vowel_list)
//     {
//         vowel_list += "";
//     }
  
//   }
//   return vowel_list;
// }
// console.log(vowel_count(word));




// Task 11***********

// Make a function that takes two strings as input, and outputs the common characters/letters that they share. (For example, Input: ‘house’, ‘computers’ . Output: ‘Common letters: o, u, e, s’)

//answer*





// Task 12*************

// This task isn’t compulsory but we’ll be impressed if you do it.

// Can you make a user interface for each of the previous tasks? You’ll need HTML and CSS to do it.

//answer*
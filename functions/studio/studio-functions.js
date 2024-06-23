//We want to COMPLETELY reverse an array by flipping the order of the entries AND flipping the order of characters in each element.


// Part One: Reverse Characters

// 1. Define the function as reverseCharacters. Give it one parameter, which will be the string to reverse.
function reverseCharacters(my_string){
    let new_string = "";

// 2. Within the function, split the string into an array, then reverse the array.'
// 3. Use join to create the reversed string and return that string from the function.
    new_string = my_string.split('').reverse().join('')
    return new_string
}

// 4. Below the function, define and initialize a variable to hold a string.
let stringy1 = "123456abcdef";
let stringy2 = 123456789;
let stringy3 = "123456abcdef";

// 5. Use console.log(reverseCharacters(myVariableName)); to call the function and verify that it correctly reverses the characters in the string.
console.log(reverseCharacters(stringy1))

// 6. Optional: Use method chaining to reduce the lines of code within the function.

// ***************************************************************

// Part Two: Reverse Digits

// 1. Add an if statement to reverseCharacters to check the typeof the parameter.
function reverseCharacters(my_string){
    let new_string = "";

// 2. If typeof is ‘string’, return the reversed string as before.
    if(typeof my_string === "string"){
        new_string = my_string.split('').reverse().join('')
    }
// 3. If typeof is ’number’, convert the parameter to a string, reverse the characters, then convert it back into a number.
    if(typeof my_string === "number"){
        new_string = String(my_string)
        new_string = new_string.split('').reverse().join('')
        new_string = Number(new_string)
    }
// 4. Return the reversed number.
    return new_string
}

// 5. Be sure to print the result returned by the function to verify that your code works for both strings and numbers. Do this before moving on to the next exercise.

console.log(reverseCharacters(stringy1))
console.log(reverseCharacters(stringy2))

// ***************************************************************

function completeReversal(my_array){
// 1. Define and initialize an empty array.
    let new_array = [];
    
// 2. Loop through the old array.
    for (i = 0; i < my_array.length ; i++) {

// 3. For each element in the old array, call reverseCharacters to flip the characters or digits.
// 4. Add the reversed string (or number) to the array defined in part ‘a’.
    new_array[i] = reverseCharacters(my_array[i])}
    
// 5. Return the final, reversed array.
    return new_array

// 6. Be sure to print the results from each test case in order to verify your code.
}

let arrayTest1 = ['apple', 'potato', 'Capitalized Words'];
let arrayTest2 = [123, 8897, 42, 1168, 8675309];
let arrayTest3 = ['hello', 'world', 123, 'orange'];

console.log(completeReversal(arrayTest1))
console.log(completeReversal(arrayTest2))
console.log(completeReversal(arrayTest3))

// Bonus Missions

// 1. Have a clear, descriptive name like funPhrase.
function funPhrase(my_string){

// 2. Retrieve only the last character from strings with lengths of 3 or less.
if (my_string.length <= 3) {
    retrieve_string = my_string.substring(-1)
}
// 3. Retrieve only the first 3 characters from strings with lengths larger than 3.
else {
    retrieve_string = my_string.substring(0,3)
}
// 4. Use a template literal to return the phrase We put the '___' in '___'. Fill the first blank with the modified string, and fill the second blank with the original string.
console.log(`We put the ${retrieve_string} in ${my_string}`)
}

// Test Function

// 1. Outside of the function, define the variable str and initialize it with a string (e.g. 'Functions rock!').
// 2. Call your function and print the returned phrase.
funPhrase('Functions rock!')



// Area of rectangle equal to length x width

// 1. Define a function with the required parameters to calculate the area of a rectangle.
// 2. The function should return the area, NOT print it.

function funPhrase(length, width){    
    area_rectangle = length*width;
    return area_rectangle
}

// 3. Call your area function by passing in two arguments - the length and width.
length = 7;
width = 10;
console.log(funPhrase(length, width))

// 4. If only one argument is passed to the function, then the shape is a square. Modify your code to deal with this case.
function funPhrase(length, width = length){    
    area_rectangle = length*width;
    return area_rectangle;
}

// 5. Use a template literal to print, “The area is ____ cm^2.”
my_rectangle = funPhrase(7);
console.log(`The area is ${my_rectangle} cm^2`)

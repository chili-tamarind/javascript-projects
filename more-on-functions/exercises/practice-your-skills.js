//Create an anonymous function and set it equal to a variable.

// Your function should:
let anonFunc = function(myInput) {

    // a) If passed a number, return the tripled value.
    if (typeof myInput === "number") {
      return myInput * 3; }

    // b) If passed a string, return the string “ARRR!”
    else if (typeof myInput === "string") {
        return "ARRR!"; }
    
    // If NOT passed a number or string, return the data unchanged.
    else {return myInput}
}

// c) Be sure to test your function before moving on the next part. 
console.log(anonFunc(3))
console.log(anonFunc("3"))
console.log(anonFunc(10>9))
console.log()

/* Add to your code! Use your function and the map method to change an array as follows:
a) Triple any the numbers.
b) Replace any strings with “ARRR!”
c) Print the new array to confirm your work. */

let arrie1 = ['Elocution', 21, 'Clean teeth', 100]
let mappedArray = arrie1.map(anonFunc);
console.log(mappedArray + '\n')
const input = require('readline-sync');
let str = "LaunchCode";

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.

let first_three_char = str.slice(0, 3);
let mod_word = str.slice(3).concat(first_three_char);

//Use a template literal to print the original and modified string in a descriptive phrase.
console.log(`\nThe original word is ${str} and the modified word is ${mod_word}`)

//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.
original_word = input.question("\nEnter your string: "); 
num_of_char_to_switch = Number(input.question("Enter the number of letters that will be relocated: ")); 

console.log(`\nYou want to move ${num_of_char_to_switch} characters, and there are ${original_word.length} characters in your string.
______________________________________________________________________`)

//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.
if ((num_of_char_to_switch < 0) || (num_of_char_to_switch > (original_word.length-1))) {

    console.log(`\nError in number of letters that will be relocated!
    We've moved 3 letters instead to show you how this works.\n`)

    first_num_char = original_word.slice(0, 3);
    your_word = original_word.slice(3).concat(first_num_char);

} else{
    first_num_char = original_word.slice(0, num_of_char_to_switch);
    your_word = original_word.slice(num_of_char_to_switch).concat(first_num_char);
}

console.log(`Your original word is ${original_word} and the modified word is ${your_word}\n`)

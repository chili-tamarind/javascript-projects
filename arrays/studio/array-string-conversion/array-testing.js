let protoArray1 = "3,6,9,12";
let protoArray2 = "A;C;M;E";
let protoArray3 = "space delimited string";
let protoArray4 = "Comma-spaces, might, require, typing, caution";

strings = [protoArray1, protoArray2, protoArray3, protoArray4];

/* 2) If the string uses commas to separate the words, split it into an array,
reverse the entries, and then join the array into a new comma-separated string.
For example, "up,to,code,fun" becomes "fun,code,to,up". */

function reverseCommas(my_array) {

	//TODO: 1. create and instantiate your variables.
	let check = my_array.includes(',');
	let output = "";

	//TODO: 2. write the code required for this step
	output = my_array.split(',').reverse().join(',')
	console.log(my_array)
	console.log(output + '\n')

	//NOTE: For the code to run properly, you must return your output. 
	// this needs to be the final line of code within the function's { }.
	return output;
}
reverseCommas("up,to,code,fun")


/* 3) If the string uses semicolons to separate the words, split it into an array, 
alphabetize the entries, and then join the array into a new hyphen-separated string. 
For example, "up;to;code;fun" becomes "code-fun-to-up".*/

function semiDash(my_array) {
	let check = my_array.includes(';');
	let output = "";

//TODO: write the code required for this step
	output = my_array.split(';').sort().join('-')
	console.log(my_array)
	console.log(output + '\n')
  
	return output;
}

semiDash("up;to;code;fun")

/* 4) If the string uses spaces to separate the words, split it into an array, 
reverse alphabetize the entries, and then join the array into a new space-separated string. 
For example, "to code up fun" becomes "up to fun code".
*/
function reverseSpaces(my_array) {
	let check = my_array.includes(' ');
	let output = "";

//TODO: write the code required for this step
	output = my_array.split(' ').sort().reverse().join(' ')
	console.log(my_array)
	console.log(output + '\n')

	return output;
}

reverseSpaces("to code up fun")

/*5) Consider: What if the string uses ‘comma spaces’ (, ) to separate the list? 
Modify your code to produce the same result as #2, making sure that the extra 
spaces are NOT part of the final string.
*/
function commaSpace(my_array) {
	let check = my_array.includes(', ');
	let output = "";

	//TODO: 2. write the code required for this step
	output = my_array.split(', ').reverse().join(',')
	console.log(my_array)
	console.log(output + '\n')
  
	return output;
}

// For example, "up, to, code, fun" becomes "fun,code,to,up".
commaSpace("up, to, code, fun")

// NOTE: Don't add or modify any code below this line or your program might not run as expected.
module.exports = {
	strings : strings, 
	reverseCommas : reverseCommas,
	semiDash: semiDash, 
	reverseSpaces : reverseSpaces,
	commaSpace : commaSpace
};

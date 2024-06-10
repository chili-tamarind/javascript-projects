//Arrays can hold different data types, even other arrays! A multi-dimensional array is one with entries that are themselves arrays.

//1) Define and initialize the arrays specified in the exercise to hold the name, chemical symbol and mass for different elements.
let element1 = ['hydrogen', 'H', 1.008]
let element2 = ['helium', 'He', 4.003]
let element26 = ['iron', 'Fe', 55.85]

console.log(element1);
console.log(element2);
console.log(element26);

//2) Define the array 'table', and use 'push' to add each of the element arrays to it. Print 'table' to see its structure.
let table = [];
table.push(element1, element2, element26);
//table.push(...element1, ...element2, ...element26); // Note the dots for "pushing" along the rows!

console.log(table);

//3) Use bracket notation to examine the difference between printing 'table' with one index vs. two indices (table[][]).
console.log("\n");
console.log(table[0]); 
console.log(table[4]); 
console.log(table[0][0]);
console.log(table[0][1]);
console.log(table[2][2]);

//4) Using bracket notation and the table array, print the mass of element1, the name for element 2 and the symbol for element26.
console.log(`mass of element1 is ${table[0][2]}, the name for element 2 is ${table[1][0]} and the symbol for element26 is ${table[2][1]}`);

//5) 'table' is an example of a 2-dimensional array. The first “level” contains the element arrays, and the second level holds the name/symbol/mass values. Experiment! Create a 3-dimensional array and print out one entry from each level in the array.

let element22 = ['titanium ', 'Ag', 47.80];
let element47 = ['silver', 'Ag', 107.87];
let element79 = ['gold', 'Au', 196.97];

let table_2 = [];
table_2.push(element22, element47, element79);

table_main = (table, table_2);

console.log("\n");
console.log(table_main); 
console.log(table_main[0][0]);
console.log(table_main[1][1]);
console.log(table_main[2][2]);
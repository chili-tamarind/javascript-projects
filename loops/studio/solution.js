const input = require('readline-sync');

// Part A: #1 Populate these arrays

let protein = ['chicken', 'pork', 'tofu', 'beef', 'fish', 'beans'];
let grains = ['rice', 'pasta', 'corn', 'potato', 'quinoa', 'crackers'];
let veggies = ['peas', 'green beans', 'kale', 'edamame', 'broccoli', 'asparagus'];
let beverages = ['juice', 'milk', 'water', 'soy milk', 'soda', 'tea'];
let desserts = ['apple', 'banana', 'more kale', 'ice cream', 'chocolate', 'kiwi'];

// *****************************************
function mealAssembly(protein, grains, veggies, beverages, desserts, numMeals) {
    let pantry = [protein, grains, veggies, beverages, desserts];
    let meals = [];
    let my_meal = [];
    
    numMeals = input.question("Enter the number of crew members: ")

/// Part A #2: Write a ``for`` loop inside this function
/// Code your solution for part A #2 below this comment (and above the return statement) ... ///

for (i = 0; i < numMeals; i++) { // For each crew member
    
    for (j = 0; j <= 4; j++) { // For each type of ingredient
        //my_meal = my_meal.concat(pantry[j][i] + ", ")
        my_meal.push(pantry[j][i])
    }
    
    console.log(`Meal #${(i+1)} is ${my_meal}`)
    meals.push(my_meal) // Add my_meals to meals
    my_meal = []; // Reset my_meal
}

return meals;
}

// *****************************************
function askForNumber() {

    numMeals = input.question("How many meals would you like to make? ");
    
    /// CODE YOUR SOLUTION TO PART B here ///
    while (!(Number.isInteger(Number(numMeals)) && numMeals >= 1 && numMeals <= 6)) {
        //console.log(Number.isInteger(Number(numMeals)))
        //console.log((numMeals >= 1) === true)
        //console.log((numMeals <= 6) === true)
        numMeals = input.question("How many meals would you like to make?");
    }

    return numMeals;}

// *****************************************
function generatePassword(string1, string2) {

let code = '';

/* Construct a for loop that combines the two strings together, alternating the characters from each source, and saves the combined string to the code variable. If string1 = "ABCDEF" and string2 = "notyet", then the output will be “AnBoCtDyEeFt”.
*/

/// Code your Bonus Mission Solution here ///

min_string = Math.min(string1.length, string2.length) // Find shorter string

for (i = 0; i <  min_string; i++){
        code = code.concat(`${string1[i]}${string2[i]}`)
    }
    
// Add excess substring to the end
code = code.concat(`${string1.substring(min_string)}${string2.substring(min_string)}`)  

return code;
}

// *****************************************
function runProgram() {

/// TEST PART A #2 HERE ///
/// UNCOMMENT the two lines of code below that invoke the mealAssembly function (starting with 'let meals =') and print the result ///
/// Change the final input variable (aka numMeals) here to ensure your solution makes the right number of meals ///
/// We've started with the number 2 for now. Does your solution still work if you change this value? ///

let meals = mealAssembly(protein, grains, veggies, beverages, desserts, 2);
console.log(meals)


/// TEST PART B HERE ///
/// UNCOMMENT the next two lines to test your ``askForNumber`` solution ///
/// Tip - don't test this part until you're happy with your solution to part A #2 ///

let mealsForX = mealAssembly(protein, grains, veggies, beverages, desserts, askForNumber());
console.log(mealsForX);

/// TEST PART C HERE ///
/// UNCOMMENT the remaining commented lines and change the password1 and password2 strings to ensure your code is doing its job ///

let password1 = '12345';
let password2 = 'abcdefghijkl';
console.log("Time to run the password generator so we can update the menu tomorrow.")
console.log(`The new password is: ${generatePassword(password1, password2)}`);

}

runProgram()

// *****************************************

module.exports = {
protein: protein,
grains: grains,
veggies: veggies,
beverages: beverages,
desserts: desserts,
mealAssembly: mealAssembly,
askForNumber: askForNumber,
generatePassword: generatePassword,
runProgram: runProgram
};

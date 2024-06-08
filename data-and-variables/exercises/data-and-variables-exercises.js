// https://education.launchcode.org/intro-to-web-dev-curriculum/data-and-variables/exercises/index.html

// Declare and assign the variables below
let space_shuttle = "Determination";
let shuttle_speed = 17500;       //mph
let distance_mars = 225000000;   //km
let distance_moon = 384400;       //km

const miles_per_kilometer =  0.621;

// Use console.log to print the 'typeof' each variable. Print one item per line.
console.log(typeof space_shuttle);
console.log(typeof shuttle_speed);
console.log(typeof distance_mars);
console.log(typeof distance_moon);

console.log(typeof miles_per_kilometer);

// Calculate a space mission below
let miles_to_mars = distance_mars * miles_per_kilometer;
let hours_to_mars = miles_to_mars/shuttle_speed;
let days_to_mars = hours_to_mars/24;

// Print the results of the space mission calculations below
console.log(space_shuttle + " will take " + days_to_mars.toFixed(2) + " days to reach Mars.");

// Calculate a trip to the moon below
let miles_to_moon = distance_moon * miles_per_kilometer;
let hours_to_moon = miles_to_moon/shuttle_speed;
let days_to_moon = hours_to_moon/24;

// Print the results of the trip to the moon below
console.log(space_shuttle + " will take " + days_to_moon.toFixed(2) + " days to reach the Moon.");
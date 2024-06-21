/*
NOTES

- Number.isInteger(cabinet_num)
- You can toggle word wrap for the VS Code session with Alt+Z.
- Number(cabinet_num) = 0 gives Invalid Input

*/

let food = "water bottles,meal packs,snacks,chocolate";
let equipment = "space suits,jet packs,tool belts,thermal detonators";
let pets = "parrots,cats,moose,alien eggs";
let sleepAids = "blankets,pillows,eyepatches,alarm clocks";

//1) Use split to convert the strings into four cabinet arrays. Alphabetize the contents of each cabinet.
food.split(',').sort().join(',')
equipment.split(',').sort().join(',')
pets.split(',').sort().join(',')
sleepAids.split(',').sort().join(',')

//2) Initialize a cargoHold array and add the cabinet arrays to it. Print cargoHold to verify its structure.
let cargoHold = [];
cargoHold.push(food, equipment, pets, sleepAids)
console.log(cargoHold)

//3) Query the user to select a cabinet (0 - 3) in the cargoHold.
const input = require('readline-sync');

let cabinet = input.question("Enter the number of the cabinet (0-3): ");

//4) Use bracket notation and a template literal to display the contents of the selected cabinet. 
//If the user entered an invalid number, print an error message.

if (Number(cabinet) || Number(cabinet) === 0) { // First check if input is a number
    let cabinet_num =  Number(cabinet);

    if (Number.isInteger(cabinet_num) && cabinet_num >= 0 && cabinet_num <= 3) { // Check if number is within range
        console.log(`The contents of Cabinet #${cabinet_num} are ${cargoHold[cabinet_num]}`)
    } else {
        console.log("ERROR: Invalid Number")}

} else {
    console.log("ERROR: Invalid Input")}

/*5) Modify the code to query the user for BOTH a cabinet in cargoHold AND a particular item. 
Use the 'includes' method to check if the cabinet contains the selected item, 
then print “Cabinet ____ DOES/DOES NOT contain ____.”*/

console.log("\nEnter the cabinet number (0-3) and the name of the item below")
let cabinet_num = input.question(" Cabinet: ");
let cabinet_item = input.question(" Item: ");

if (Number(cabinet_num) || Number(cabinet_num) === 0){ // First check if input is a number
    cabinet_num =  Number(cabinet_num);

    if (Number.isInteger(cabinet_num) && cabinet_num >= 0 && cabinet_num <= 3) { // Check if number is within range 
        if (cargoHold[cabinet_num].includes(cabinet_item)) {// Check if item is in cabinet
            console.log(`Cabinet #${cabinet_num} DOES contain ${cabinet_item}`)}
        else {
            console.log(`Cabinet #${cabinet_num} DOES NOT contain ${cabinet_item}`)
        }
    } else {
        console.log("ERROR: Invalid Number")}

} else {
    console.log("ERROR: Invalid Input")}
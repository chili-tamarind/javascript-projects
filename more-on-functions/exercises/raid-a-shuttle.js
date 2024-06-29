function checkFuel(level) {
  if (level > 100000){
    return 'green';
  } else if (level > 50000){
    return 'yellow';
  } else {
    return 'red';
  }
}

function holdStatus(arr){
  if (arr.length < 7) {
    return `Spaces available: ${7-arr.length}.`;
  } else if (arr.length > 7){
    return `Over capacity by ${arr.length-7} items.`;
  } else {
    return "Full";
  }
}

let fuelLevel = 200000;
let cargoHold = ['meal kits', 'space suits', 'first-aid kit', 'satellite', 'gold', 'water', 'AE-35 unit'];

console.log();
console.log("Fuel level: " + checkFuel(fuelLevel));
console.log("Hold status: " + holdStatus(cargoHold));
console.log();


/********************************** 
Steal some fuel from the shuttle:
 */

//a). Define an anonymous function and set it equal to a variable with a normal, non-suspicious name. The function takes one parameter. This will be the fuel level on the shuttle.
let stuff = function(fuelLevel) {
  let loot_fuel;

//b). You must siphon off fuel without alerting the TAs. Inside your function, you want to reduce the fuel level as much as possible WITHOUT changing the color returned by the checkFuel function.
if (fuelLevel > 100000) {
  loot_fuel = fuelLevel - 100001;} 
else if (fuelLevel > 50000) {
  loot_fuel = fuelLevel - 50001;}
else {
  loot_fuel = 0;}

//c). Once you figure out how much fuel to pump out, return that value.
return loot_fuel;
}

//d). Decide where to best place your function call to gather our new fuel.
console.log(`Fuel level (original): ${fuelLevel} kg (${checkFuel(fuelLevel)})`)
console.log(`Fuel loot: ${stuff(fuelLevel)} kg`)
console.log();

// Next, liberate some of that glorious cargo.
// fuelLevel -= stuff(fuelLevel);

// a). Define another anonymous function with an array as a parameter, and set it equal to another innocent variable.

  let thing = function(my_cargo_hold) {
  
//b). You need to swipe two items from the cargo hold. Choose well. Stealing water ain’t gonna get us rich. Put the swag into a new array and return it from the function. ------- My note: Gold isn't going to keep you alive in space...

//c). The cargo hold has better security than the fuel tanks. It counts how many things are in storage. You need to replace what you steal with something worthless. The count MUST stay the same, or you’ll get caught and thrown into the LaunchCode brig.

 // Floor rounds down and returns the largest integer <= to a given number
  half_array_length = my_cargo_hold.length/2 - 1;

              // Math.floor(Math.random() * (maxRange - minRange + 1)) + minRange;
  randInteger1 = Math.floor(Math.random() * (half_array_length));                                                           // From 1st half
  randInteger2 = Math.floor(Math.random() * (my_cargo_hold.length - half_array_length)) + Math.floor(half_array_length);    // From 2nd half
  
  //console.log(randInteger1)
  //console.log(randInteger2)

  loot_cargo = [my_cargo_hold[randInteger1],my_cargo_hold[randInteger2]]; // Save loot from random integer
  loot_replace  = ['meal slushie', 'space kilts', 'alcohol wipes', 'weather balloon', 'silver', 'soda', 'EA-53 unit'];

  // Note! cargoHold is an array, and the replace() method is not available for arrays
  // my_cargo_hold.replace(my_cargo_hold[randInteger1], loot_replace[randInteger1]);
  
  cargoHold[cargoHold.indexOf(my_cargo_hold[randInteger1])] = loot_replace[randInteger1];
  cargoHold[cargoHold.indexOf(my_cargo_hold[randInteger2])] = loot_replace[randInteger2];
  
  //console.log(my_cargo_hold[randInteger1])
  //console.log(loot_replace[randInteger1])

  return loot_cargo 
}

//d). Don’t get hasty, matey! Remember to test your function.


/**********************************
Finally, you need to print a receipt for the accountant. Don’t laugh! That genius knows MATH and saves us more gold than you can imagine.
 */

//a). Define a function called irs that can take fuelLevel and cargoHold as arguments.

function irs(myFuelLevel, myCargoHold) {

//b). Call your anonymous fuel and cargo functions from within irs.
loot_fuel = stuff(myFuelLevel);
loot_cargo = thing(myCargoHold);

//c). Use a template literal to return, "Raided _____ kg of fuel from the tanks, and stole ____ and ____ from the cargo hold."
  console.log(`Raided ${loot_fuel}kg of fuel from the tanks, and stole ${loot_cargo[0]} and ${loot_cargo[1]} from the cargo hold.${'\n'}`)
}

irs(fuelLevel, cargoHold);

// **********************************
console.log("Cargo Hold (new): " + cargoHold);

cargoHold = ['meal kits', 'space suits', 'first-aid kit', 'satellite', 'gold', 'water', 'AE-35 unit'];
console.log("Cargo Hold (old): " + cargoHold);
console.log();
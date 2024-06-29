// Code your crewMass function here:
function crewMass(my_crew){
  
  let total_crewMass = 0;

  for (i = 0; i < my_crew.length; i++) {
    total_crewMass += my_crew[i].mass ;
  }

  return total_crewMass.toFixed(1);

}

// Code your fuelRequired function here:
function fuelRequired_1(my_crew){

  /* The mass of the un-crewed rocket plus the food and other supplies is 75,000 kg. Create a fuelRequired function to combine the rocket and crew masses, then calculate and return the amount of fuel needed to reach LEO. */
  let mass_total = 75000 + crewMass(my_crew);

  // 9.5 kg of rocket fuel to lift 1 kg of mass into low-earth orbit (LEO)
  let mass_fuel = mass_total*9.5;

  return mass_fuel;
}

// The pre-selected crew is in the array at the end of this file.
// Feel free to add, remove, or switch crew members as you see fit.

let candidateA = {
  'name':'Gordon Shumway',
  'species':'alf',
  'mass':90,
  'o2Used':function(hrs){return 0.035*hrs},
  'astronautID':414
};
let candidateB = {
  'name':'Lassie',
  'species':'dog',
  'mass':19.1,
  'o2Used':function(hrs){return 0.030*hrs},
  'astronautID':503
};
let candidateC = {
  'name':'Jonsey',
  'species':'cat',
  'mass':3.6,
  'o2Used':function(hrs){return 0.022*hrs},
  'astronautID':796
};
let candidateD = {
  'name':'Paddington',
  'species':'bear',
  'mass':31.8,
  'o2Used':function(hrs){return 0.047*hrs},
  'astronautID':291
};
let candidateE = {
  'name':'Pete',
  'species':'tortoise',
  'mass':417,
  'o2Used':function(hrs){return 0.010*hrs},
  'astronautID':599
};
let candidateF = {
  'name':'Hugs',
  'species':'ball python',
  'mass':2.3,
  'o2Used':function(hrs){return 0.018*hrs},
  'astronautID':890
};

let crew = [candidateB,candidateD,candidateF];


// TESTS
console.log('\nTotal mass: '+ crewMass(crew))
console.log('\n', fuelRequired_1)
console.log(`The mission has a launch mass of ${crewMass(crew)} kg and requires ${fuelRequired_1(crew)} kg of fuel.`)

function fuelRequired(my_crew){

  let mass_total = 75000 + crewMass(my_crew);
  let mass_fuel = mass_total*9.5;

  /* Our launch requires a safety margin for the fuel level, especially if the crew members are cute and fuzzy. Add an extra 200 kg of fuel for each dog or cat on board, but only an extra 100 kg for the other species. Update fuelRequired to account for this, then round the final amount of fuel UP to the nearest integer. */

  for (i = 0; i < my_crew.length; i++) {
    if (my_crew[i].species === 'dog'|'cat') {
      mass_fuel += 200}
    else {
      mass_fuel += 100}
  }

  return stuff = Math.round(mass_fuel);
}

console.log('\n', fuelRequired)
console.log(`The mission has a launch mass of ${crewMass(crew)} kg (???) and requires ${fuelRequired(crew)} kg of fuel.`)
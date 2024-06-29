/* Code your orbitCircumference function here
Define a function that returns the circumference (C = 2πr) of the orbit. Round the circumference to an integer.*/

function orbitCircumference(radius) {
  let circumference = Math.floor(2*Math.PI*radius);
  return circumference
}

console.log('\norbitCircumference(10): ' + orbitCircumference(10))

/* Code your missionDuration function here
Define the function to take three parameters - the number of orbits completed, the orbit radius, and the orbital speed. Set the default radius to 2000 km and the default orbital speed to 28000 km/hr.
*/
function missionDuration(orbit_completed, orbit_radius = 2000, orbit_speed = 28000){
  
  /*Calculate how long it will take our animals to complete a certain number of orbits (time = distance/speed). 
  Round the answer to 2 decimal places, then return the result. */
  
  let orbit_time = (orbit_completed*orbitCircumference(orbit_radius)/orbit_speed).toFixed(2);
  console.log(`\nThe mission will travel ${orbit_radius} km around the planet, and it will take ${orbit_time} hours to complete.`)

  return orbit_time
}

console.log('\nmissionDuration(5): ' + missionDuration(5))

// Copy/paste your selectRandomEntry function here:
function selectRandomEntry(my_array){

  my_number = my_array[Math.floor(Math.random()*my_array.length)];
  return my_number;
}

// Code your oxygenExpended function here:
// The function should take a candidate object as a parameter and NOT the crew array.

function oxygenExpended_1(candidate){  
  
  // The spacewalk will last for three orbits around the earth. Use missionDuration to calculate how many hours the spacewalk will take.
  spacewalk_hours = missionDuration(3);

  //Use the candidate’s o2Used method to calculate how much oxygen (O :sub:2) they consume during the spacewalk. Round the answer to 3 decimal places.
  spacewalk_oxygen = (candidate.o2Used(spacewalk_hours)).toFixed(3); 
  
  //Return the string, '__ will perform the spacewalk, which will last __ hours and require __ kg of oxygen.' Fill in the blanks with the animal’s name, the spacewalk time, and the amount of O :sub:2 used.
  spacewalk_string = `${candidate.name} will perform the spacewalk, which will last ${spacewalk_hours} hours and require ${spacewalk_oxygen} kg of oxygen.`;

  return spacewalk_string;
}


function oxygenExpended(candidate, orbit_radius, orbit_speed){  
  
  // We should not restrict our mission to the default values for orbital radius and orbital speed. Refactor oxygenExpended to accept values for these items. Remember to include the values in the missionDuration call.  

  spacewalk_hours = missionDuration(3, orbit_radius, orbit_speed);
  spacewalk_oxygen = (candidate.o2Used(spacewalk_hours)).toFixed(3); 
  
  spacewalk_string = `${candidate.name} will perform the spacewalk, which will last ${spacewalk_hours} hours and require ${spacewalk_oxygen} kg of oxygen.`;

  return spacewalk_string;
}

// Candidate data & crew array.
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

let crew = [candidateA,candidateC,candidateE];


// When you call oxygenExpended, feel free to use your selectRandomEntry to pick the crew member to pass into the function.
console.log('\n'+ oxygenExpended_1(selectRandomEntry(crew)))
console.log('\n'+ oxygenExpended(selectRandomEntry(crew), 3000, 45000))
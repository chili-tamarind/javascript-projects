// Code your selectRandomEntry function here:

function selectRandomEntry(my_array){

  my_number = my_array[Math.floor(Math.random()*my_array.length)];
  return my_number;
}

function selectRandomEntries(my_array, my_number){
  
  let entries = [];
  selected = selectRandomEntry(my_array);
  console.log()

  for (i = 0; i < my_number; i++) {    // For the number of times you want to select a number    

    while (entries.includes(selected)) { // Loop until unique number
      selected = selectRandomEntry(my_array);}
  
    entries.push(selected);
  }

  return entries.sort();

}


// Code your buildCrewArray function here:
function buildCrewArray(selected_IDs, candidates) {

  let crew = [];

    for (candidate in candidates) { // Check all candidates

      //let candidates_IDs = candidates.map(value => value.astronautID);
      
      if (selected_IDs.includes(candidates[candidate].astronautID)){ // <<<<<<<<< Works but would prefer it organized
        crew.push(candidates[candidate].name);} // Add to crew list
    }

  //crew = crew.sort();
  console.log(`${'\n'}${crew.slice(0, crew.length-1)}, and ${crew.slice(-1)} are going to space!`)
  return crew;

}

let idNumbers = [291, 414, 503, 599, 796, 890];

// Here are the candidates and the 'animals' array:
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

let animals = [candidateA,candidateB,candidateC,candidateD,candidateE,candidateF];

// Code your template literal and console.log statements:

candidates_Selected = selectRandomEntries(idNumbers, 3)
console.log('\nSelected IDs\n-------------------\n',candidates_Selected,'\n-------------------');

// Print list of animal name & ID
// https://stackoverflow.com/questions/19590865/from-an-array-of-objects-extract-value-of-a-property-as-array

console.log('\nAll Animals\n-------------------')
let animal_name_ID =  animals.map(animals => `[${animals.astronautID}] ${animals.name}`)
animal_name_ID = animal_name_ID.sort().join('\n'); 
console.log(animal_name_ID)

// Run script
buildCrewArray(candidates_Selected, animals)
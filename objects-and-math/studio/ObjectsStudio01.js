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
      selected = selectRandomEntry(my_array);
    }
  
    entries.push(selected);
  }

  return entries;
}


// Code your buildCrewArray function here:
function buildCrewArray(selected_IDs, candidates) {

  let crew = [];

 // for (i = 0; i < candidates.length; i++) {    
    for (candidate in crew) { // Check all candidates
      if (selected_IDs.includes(candidates[i].astronautID)){ 
        crew.push(candidates[i].name)} // Add to crew list
  }

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
console.log('\nSelected IDs\n--------------\n' + candidates_Selected);

// https://stackoverflow.com/questions/19590865/from-an-array-of-objects-extract-value-of-a-property-as-array
console.log('\nAll Animals\n--------------\n' + animals.map(animals => `${animals.name}-${animals.astronautID}`))
buildCrewArray(candidates_Selected, animals) 
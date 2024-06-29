let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6
};

let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5
};

// -------------------- myAnimals

let myAnimal_1 = {
   name: "Brad",
   species: "Chimpanzee",
   mass: 11,
   age: 6
};

let myAnimal_2 = {
   name: "Leroy",
   species: "Beagle",
   mass: 14,
   age: 5
};

let myAnimal_3 = {
   name: "Almina",
   species: "Tardigrade",
   mass: 0.0000000001,
   age: 1
};

// After you have created the other object literals, add the astronautID property to each one.

superChimpOne["astronautID"] = 4;
salamander["astronautID"] = 5;

myAnimal_1["astronautID"] = 1;
myAnimal_2["astronautID"] = 2;
myAnimal_3["astronautID"] = 3;

// Add a move method to each animal object

superChimpOne["move"] = function () {return Math.floor(Math.random()*11)}; // Random number between 0 and 10
salamander["move"] = function () {return Math.floor(Math.random()*11)}; ;

myAnimal_1["move"] = function () {return Math.floor(Math.random()*11)}; ;
myAnimal_2["move"] = function () {return Math.floor(Math.random()*11)}; ;
myAnimal_3["move"] = function () {return Math.floor(Math.random()*11)}; ;

// Create an array to hold the animal objects.
let crew = [superChimpOne, salamander, myAnimal_1, myAnimal_2, myAnimal_3];

// Print out the relevant information about each animal.
console.log(crew)

/* -----------------------------------------
Part 2: Crew Reports 
Start an animal race! */

function crewReports(myAnimal) {
   console.log(`${myAnimal.name} is a ${myAnimal.species}. They are ${myAnimal.age} years old and ${myAnimal.mass} kilograms. Their ID is ${myAnimal.astronautID}.`)
}

console.log('\n----- Crew Reports -----');
crewReports(superChimpOne);
crewReports(salamander);
crewReports(myAnimal_1);
crewReports(myAnimal_2);
crewReports(myAnimal_3);


/* -----------------------------------------
Part 3: Crew Fitness 

Within the function, race the five animals together by using the move method. An animal is done with the race when they reach 20 steps or greater. Store the result as a string: '____ took ____ turns to take 20 steps.' Fill in the blanks with the animal’s name and race result. Create a new array to store how many turns it takes each animal to complete the race. */

function fitnessTest(myAnimals) {
   
   let myTurns= [];
      
   for (let i = 0; i < myAnimals.length; i++) { // For each animal in the array
      
      let turns = 0; 
      let steps = 0; // Reset step count

      while (steps < 20) {
         turns++;
         steps += myAnimals[i].move();
      }
   
      myTurns.push(turns); // Store steps for each animal
      console.log(`${myAnimals[i].name} took ${turns} turns to take 20 steps.`)
   }
   
   return myTurns
}

console.log('\n----- Crew Fitness -----');
my_animals_steps = fitnessTest(crew)
console.log('\nmy_animals_steps = '+ my_animals_steps)

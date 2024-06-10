// The value of launchReady assigned in the first if/else block gets changed in the second if/else block. Dangerous waters...
// Since the issue is with launchReady, ONE way to fix the logic error is to use a different variable to store the fuel check result. 
// Refactor the code to do this. Verify that your change works by updating the console.log statements.

let launchReady = false;
let fuelLevel = 17000;
let crewStatus = true;
let computerStatus = 'green';

fuel_readiness = false;
crew_readiness = false;

//FUEL CHECK
if (fuelLevel >= 20000) {
   console.log('Fuel level cleared.');
   fuel_readiness = true;
} else {
   console.log('WARNING: Insufficient fuel!');
   fuel_readiness = false;
}
console.log("fuel_readiness = ", fuel_readiness);

//CREW CHECK
if (crewStatus && computerStatus === 'green'){
   console.log('Crew & computer cleared.');
   crew_readiness = true;
} else {
   console.log('WARNING: Crew or computer not ready!');
   crew_readiness = false;
}
console.log("crew_readiness = ", crew_readiness);

//LAUNCH CHECK
if (fuel_readiness && crew_readiness){
   console.log('READY: All cleared for launch!');
   launchReady = true;
} else {
   console.log('WARNING: Not cleared for launch!');
   launchReady = false;
}

//LAUNCH MESSAGE
if (launchReady) {
   console.log('10, 9, 8, 7, 6, 5, 4, 3, 2, 1...');
   console.log('Liftoff!');
} else {
   console.log('Launch scrubbed.');
}
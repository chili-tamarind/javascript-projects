//This block of code hides two syntax errors.

// Run the code and find the mistakes. 
// Only ONE error will be flagged at a time. 
// Fix that ONE problem, and then re-run the code to check yer work. Avoid trying to fix multiple issues at once.

let launchReady = false;
let crewStatus = true;
let computerStatus = 'green';

if (crewStatus && computerStatus === 'green'){ // Extra &
   console.log('Crew & computer cleared.');
   launchReady = true;
} else {
   console.log('WARNING: Crew or computer not ready!');
   launchReady = false;
}

if (launchReady) {
   console.log("10, 9, 8, 7, 6, 5, 4, 3, 2, 1..."); // Extra (
   console.log("Fed parrot...");
   console.log("Ignition...");
   console.log("Liftoff!");
} else {
   console.log("Launch scrubbed.");
}

/* ERROR MESSAGE
if (crewStatus &&& computerStatus === 'green'){
                 ^

SyntaxError: Unexpected token '&'
    at wrapSafe (internal/modules/cjs/loader:1281:20)
    at Module._compile (internal/modules/cjs/loader:1321:27)
    at Module._extensions..js (internal/modules/cjs/loader:1416:10)
    at Module.load (internal/modules/cjs/loader:1208:32)
    at Module._load (internal/modules/cjs/loader:1024:12)
    at executeUserEntryPoint (internal/modules/run_main:174:12)
    at <anonymous> (internal/main/run_main_module:28:49)
loader:1281
Process exited with code 1
*/
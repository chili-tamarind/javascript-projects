//Run this code first and examine the error message.
//Fix the syntax error then run the code again to check your work.

let launchReady = false;
let fuelLevel = 17000;

if (fuelLevel >= 20000) {
   console.log('Fuel level cleared.');
   launchReady = true;
} else {
   console.log('WARNING: Insufficient fuel!');
   launchReady = false;
}


/* ERROR MESSAGE

Process exited with code 1
if (fuelLevel >= 20000 {
                       ^

SyntaxError: Unexpected token '{'
    at wrapSafe (internal/modules/cjs/loader:1281:20)
    at Module._compile (internal/modules/cjs/loader:1321:27)
    at Module._extensions..js (internal/modules/cjs/loader:1416:10)
    at Module.load (internal/modules/cjs/loader:1208:32)
    at Module._load (internal/modules/cjs/loader:1024:12)
    at executeUserEntryPoint (internal/modules/run_main:174:12)
    at <anonymous> (internal/main/run_main_module:28:49)
*/
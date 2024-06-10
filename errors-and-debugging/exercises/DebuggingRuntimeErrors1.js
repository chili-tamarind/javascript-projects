//Run this code first and examine the error message.
//Pay close attention to any line numbers mentioned in the message - these will help locate and repair the mistake in the code.


let launchReady = false;
let fuelLevel = 17000;

if (fuelLevel >= 20000) { // Misspelt as fuellevel
   console.log('Fuel level cleared.');
   launchReady = true;
} else {
   console.log('WARNING: Insufficient fuel!');
   launchReady = false;
}

/*
Uncaught ReferenceError ReferenceError: fuellevel is not defined
    at Module._compile (internal/modules/cjs/loader:1358:14)
    at Module._extensions..js (internal/modules/cjs/loader:1416:10)
    at Module.load (internal/modules/cjs/loader:1208:32)
    at Module._load (internal/modules/cjs/loader:1024:12)
    at executeUserEntryPoint (internal/modules/run_main:174:12)
    at <anonymous> (internal/main/run_main_module:28:49)
    */
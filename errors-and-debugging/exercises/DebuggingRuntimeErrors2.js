let launchReady = false;
let fuelLevel = 27000;

if (fuelLevel >= 20000) {
   console.log('Fuel level cleared.');
   launchReady = true;
} else {
   console.log('WARNING: Insufficient fuel!');
   launchReady = false;
}

if (launchReady) {
   console.log("10, 9, 8...");
   console.log("Fed parrot...");
   console.log("6, 5, 4...");
   console.log("Ignition...");
   console.log("3, 2, 1..."); // Mispelt as consoul
   console.log("Liftoff!");
} else {
   console.log("Launch scrubbed.");
}

/*
Uncaught ReferenceError ReferenceError: consoul is not defined
    at Module._compile (internal/modules/cjs/loader:1358:14)
    at Module._extensions..js (internal/modules/cjs/loader:1416:10)
    at Module.load (internal/modules/cjs/loader:1208:32)
    at Module._load (internal/modules/cjs/loader:1024:12)
    at executeUserEntryPoint (internal/modules/run_main:174:12)
    at <anonymous> (internal/main/run_main_module:28:49)
*/
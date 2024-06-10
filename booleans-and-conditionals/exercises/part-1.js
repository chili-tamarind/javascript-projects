// Declare and initialize the variables for exercise 1 here:
let engineIndicatorLight =	"red blinking";
let spaceSuitsOn = true;
let shuttleCabinReady =	true;
let crewStatus =	spaceSuitsOn && shuttleCabinReady;
let computerStatusCode = 200;
let shuttleSpeed = 15000;


// BEFORE running the code, predict what will be printed to the console by the following statements:

if (engineIndicatorLight === "green") {
   console.log("engines have started");
} else if (engineIndicatorLight === "green blinking") {
   console.log("engines are preparing to start");
} else {
   console.log("engines are off"); // This will print 
}

// ************************** CREW 
if (crewStatus) { // ""=== true" not needed
   console.log("Crew Ready");}
else {
   console.log("Crew NOt Ready");}

// ************************** COMPUTER
if (computerStatusCode  === 200){
   console.log("Please stand by. Computer is rebooting.");
} else if (computerStatusCode  === 400){
   console.log("Success! Computer online.");
} else {
   console.log("ALERT: Computer offline!");
}

// ************************** SHUTTLE
if (shuttleSpeed > 17500){
   console.log("ALERT: Escape velocity reached!");
} else if (shuttleSpeed  < 8000){
   console.log("ALERT: Cannot maintain orbit!");
} else {
   console.log("Stable speed");
}

// ************************** PREDICT

if (crewStatus && computerStatusCode === 200 && spaceSuitsOn) { // All true, first message
   console.log("all systems go");
} else {
   console.log("WARNING. Not ready"); 
}

if (!crewStatus || computerStatusCode !== 200 || !spaceSuitsOn) { // All false, second message
   console.log("WARNING. Not ready");
} else {
   console.log("all systems go");
}

// ************************** FUEL
let fuelLevel = 0;
let engineTemperature = 0; 

//fuelLevel = 200;	   engineTemperature = 400; 	   engineIndicatorLight = "red blinking";
//fuelLevel = 21000;	   engineTemperature = 1200; 	   engineIndicatorLight = "NOT red blinking";
//fuelLevel = 900;	   engineTemperature = 300; 	   engineIndicatorLight = "red blinking";
//fuelLevel = 5000;	   engineTemperature = 1200; 	   engineIndicatorLight = "NOT red blinking";
//fuelLevel = 12000;	   engineTemperature = 2600; 	   engineIndicatorLight = "NOT red blinking";
//fuelLevel = 18000;	   engineTemperature = 2500; 	   engineIndicatorLight = "NOT red blinking";


if (fuelLevel < 1000 || engineTemperature > 3500 || engineIndicatorLight === "red blinking"){
   console.log("ENGINE FAILURE IMMINENT!");

} else if (fuelLevel <= 5000 || engineTemperature > 2500){
   console.log("Check fuel level. Engines running hot.");

} else if (fuelLevel > 5000 && engineTemperature <= 2500){
   console.log("Fuel level above 25%. Engines good.");

} else if (fuelLevel > 10000 && engineTemperature <= 2500){
   console.log("Fuel level above 50%. Engines good.");

} else if (fuelLevel > 20000 && engineTemperature <= 2500){
   console.log("Full tank. Engines good.”");

} else {
   console.log("Fuel and engine status pending…");
}

// ************************** OVERRIDE
let commandOverride =  true;

// commandOverride =  false ; fuelLevel = 1000;	 engineIndicatorLight = "red blinking";
// commandOverride =  false; 

if ((fuelLevel > 20000 && engineIndicatorLight !== "NOT red blinking") || commandOverride) { 
   console.log("Cleared to launch!");
} else {
   console.log("Launch scrubbed!"); 
}
/* Notes
- Using a single "if" condition with all the criteria wasn't the best way to show which parameter had the error
- Checking for negative values
- Not valid? (-300 <= fuelTempCelsius <= -150) 
*/

// Initialize Variables below
let date = "Monday 2019-03-18";
let time = "10:05:34 AM";

let astronautCount	= 7;
let astronautStatus	= "ready";

let averageAstronautMassKg	= 80.7;
let crewMassKg	= astronautCount * averageAstronautMassKg;
let fuelMassKg	= 760000;
let shuttleMassKg =	74842.31;
let totalMassKg = crewMassKg + fuelMassKg + shuttleMassKg;
let maximumMassLimit = 850000;

let fuelTempCelsius = -225;
let minimumFuelTemp = -300;
let maximumFuelTemp	= -150;
let fuelLevel =	"100%";

let weatherStatus = "clear";
let preparedForLiftOff = true;

launch_check_string = "";

// add logic below to verify total number of astronauts for shuttle launch does not exceed 7
if (!(astronautCount >= 0 && astronautCount <= 7)) {
    launch_check_string += "\n Error: Number of astronauts unacceptable";
    preparedForLiftOff = false}

// add logic below to verify all astronauts are ready
if (!(astronautStatus == "ready")) {
    launch_check_string += "\n Error: Astronauts are not ready";
    preparedForLiftOff = false}

// add logic below to verify the total mass does not exceed the maximum limit of 850000
if (!(totalMassKg >= 0 && totalMassKg <= maximumMassLimit)) {
    launch_check_string += "\n Error: Total mass unacceptable";
    preparedForLiftOff = false}

// add logic below to verify the fuel temperature is within the appropriate range of -150 and -300
if (!(fuelTempCelsius >= -300 && fuelTempCelsius <= -150)) {
    launch_check_string += "\n Error: Fuel temperature unacceptable";
    preparedForLiftOff = false}

// add logic below to verify the fuel level is at 100%
if (!(fuelLevel == "100%")) {
    launch_check_string += "\n Error: Fuel level unacceptable";
    preparedForLiftOff = false}

// add logic below to verify the weather status is clear
if (!(weatherStatus == "clear")) {
    launch_check_string += "\n Error: Weather status unacceptable";
    preparedForLiftOff = false}

// Verify shuttle launch can proceed based on above conditions
if (preparedForLiftOff == true) {
    console.log
    (` 
        All systems are a go! 
        Initiating space launch sequence!
        ----------------------------------
        Date = ${date};
        Time = ${time};

        Astronaut count = ${astronautCount}     
        Total mass = ${totalMassKg} kg

        Fuel temperature = ${fuelTempCelsius}°C;
        Fuel level = ${fuelLevel}

        Weather status = ${weatherStatus}
        Astronaut status = ${astronautStatus}
        ----------------------------------
        Have a safe trip, explorers!
    `)
} else {
    console.log(launch_check_string, 
        "\n --------------------------------------\n Conditions Not Met! Launch operations shut down.");
}
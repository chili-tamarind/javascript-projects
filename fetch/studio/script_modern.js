
// Add code that runs on the window load event.
// This is done because we can’t interact with the HTML elements until the page has loaded.

window.addEventListener('load', function() {    

    // Create object for container element
    //const container = document.querySelector('.container');
    const container = document.getElementById('container');

    // Using modern syntax
    async function fetchAstronautData() {
        let response = await fetch('https://handlers.education.launchcode.org/static/astronauts.json');
        let data = await response.json();

        // Bonus #1: Display the astronauts sorted from most to least time in space.

        // Return a comparison between hours in space in the list. If less return 1, else return -1
        data.sort(function (a,b) {
            return a.hoursInSpace < b.hoursInSpace ? 1 : -1; 
        });   
        
        // Bonus #3: Add a count of astronauts to the page.
        const astronautCount  = document.getElementById('astronaut-count');
        astronautCount.innerHTML = `All ${data.length} floating in space, Astronaut's silent ballet, Limitless wonder.!`;

        // Loop through all the data
        for(let i=0; i<data.length; i++){
            let astronaut = data[i];

            // Bonus #2: Make the “Active: true” text green, for astronauts that are still active (active is true)
            let active = astronaut.active ? "active" : "";

            // don't use innerText here. Don't forget to end the template literal!
            container.innerHTML += `     
            
            <div class="astronaut">
                <div class="bio">
                    <h3> ${astronaut.firstName} ${astronaut.lastName} </h3>
                    <ul>
                    <li>Hours in space: ${astronaut.hoursInSpace}</li>
                    <li class="active" >Active: ${astronaut.active}</li>
                    <li>Skills: ${astronaut.skills.join(", ")}</li>
                    </ul>
                </div>
                <img class="avatar" src=${astronaut.picture}>
            </div> `
        }
    }

    // Must call async function
    fetchAstronautData();
});

// Add code that runs on the window load event.
// This is done because we can’t interact with the HTML elements until the page has loaded.

window.addEventListener('load', function() {   

    // Create object for container element
    //const container = document.querySelector('.container');
    const container = document.getElementById('container');

    // Using traditional syntax
    fetch('https://handlers.education.launchcode.org/static/astronauts.json').then(function (response) {
        response.json().then(function (data) {
            console.log(data);

            for(let i=0; i<data.length; i++){
                let astronaut = data[i];

                // don't use innerText here. Don't forget to end the template literal!
                container.innerHTML += `     
                
                <div class="astronaut">
                    <div class="bio">
                        <h3> ${astronaut.firstName} ${astronaut.lastName} </h3>
                        <ul>
                        <li>Hours in space: ${astronaut.hoursInSpace}</li>
                        <li>Active: ${astronaut.active}</li>
                        <li>Skills: ${astronaut.skills.join(", ")}</li>
                        </ul>
                    </div>
                    <img class="avatar" src=${astronaut.picture}>
                </div> `

            }

        });    
    });
});
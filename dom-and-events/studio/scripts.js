// Write your JavaScript code here.
// Remember to pay attention to page loading!

/* Use the window load event to ensure all elements have loaded before attaching event handlers.
    window.addEventListener("load", function () {
    }
*/

function init () { 

    // Buttons
    const takeoff = document.getElementById("takeoff"); 
    const landing = document.getElementById("landing"); 
    const missionAbort = document.getElementById("missionAbort"); 
    
    // Values
    const shuttleBackground = document.getElementById("shuttleBackground");
    const spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
    const flightStatus = document.getElementById("flightStatus");    

    // Image
    const rocket = document.getElementById("rocket");
   // const launchBackground = parseInt(window.getComputedStyle(shuttleBackground). getPropertyValue('width')); // to get number without the pixels

    // Positions 
    let rocketAltitude = 0;
    let rocketImageX = 0;
    let rocketImageY = 0;
    
        // When the “Take off” button is clicked
        takeoff.addEventListener('click', event => {
            
            // A window confirm should crosscheck
            const takeoff_message = window.confirm("Confirm that the shuttle is ready for takeoff.");

            // If the shuttle is ready for liftoff
            if (takeoff_message === true){
                flightStatus.innerHTML = 'Shuttle in flight.';
                shuttleBackground.style.backgroundColor = "blue";                
                
                rocketAltitude = 10000;
                spaceShuttleHeight.innerHTML = rocketAltitude;    
                
                rocketImageY = 10;
                rocket.style.marginBottom =  rocketImageY + 'px';
            }
        });      
        
        // When the “Land” button is clicked, the following should happen:
        landing.addEventListener('click', event => {
            
            // A window confirm should crosscheck
            const land_message = window.alert("The shuttle is landing. Landing gear engaged.");
                flightStatus.innerHTML = 'The shuttle has landed.';
                rocketReset();       
        });

        // When the “Abort Mission” button is clicked, the following should happen:
        missionAbort.addEventListener('click', event => {
            
            // A window confirm should crosscheck
            const missionAbort_message = window.confirm("Confirm that you want to abort the mission.");

            // If the land_message is ready for liftoff
            if (missionAbort_message === true){
                flightStatus.innerHTML = 'Mission aborted.';
                rocketReset();                
            }
        });

        // Carrie - Use event delegation for direction buttons */

        document.addEventListener("click", function(event) {

            let launchBackgroundWidth = parseInt(window.getComputedStyle(shuttleBackground). getPropertyValue('width')); // to get number without the pixels
            
            // When the “Right” & “Left” buttons are clicked, the rocket rocket should move 10 px in the direction of the button that was clicked.
            if (event.target.id == "left" && (0.5*rocketImageX > 0)) {
                rocketImageX -= 10;                     
                rocket.style.marginLeft =  rocketImageX + 'px'; 
                // number plus string concatenate         
            } 
            if (event.target.id == "right" && (rocketImageX < (launchBackgroundWidth-75))) {
                rocketImageX += 10;
                rocket.style.marginLeft =  rocketImageX + 'px'; 
            }

            // When the “Up” & “Down” buttons are clicked, the shuttle height should increase or decrease by 10,000 miles. 
            if (event.target.id == "up" && rocketAltitude < 250000) { // 25 clicks to the top
                rocketImageY += 10;
                rocket.style.marginBottom =  rocketImageY + 'px';

                rocketAltitude += 10000;
                spaceShuttleHeight.innerHTML = rocketAltitude; 
            }
            if (event.target.id == "down" && rocketAltitude > 0) {
                rocketImageY -= 10;
                rocket.style.marginBottom =  rocketImageY + 'px';

                rocketAltitude -= 10000; 
                spaceShuttleHeight.innerHTML = rocketAltitude;
            }                
        });

        /* BONUS

        Keep the rocket from flying off of the background.
        
        Return the rocket to its original position on the background when it has been landed or the mission was aborted.  */

        // Helper/utility function 

        function rocketReset() {

            let launchBackgroundWidth = parseInt(window.getComputedStyle(shuttleBackground). getPropertyValue('width')); // to get number without the pixels

            shuttleBackground.style.backgroundColor = "green";              
            
            rocketAltitude = 0;    
            spaceShuttleHeight.innerHTML = rocketAltitude;        
            
            rocketImageX = launchBackgroundWidth/2 -75;
            rocket.style.marginLeft = rocketImageX + 'px';
            
            rocketImageY = 0;
            rocket.style.marginBottom = rocketImageY + 'px';
        }
    
        function rocketImagePositionY() {
            let launchBackgroundHeight = parseInt(window.getComputedStyle(shuttleBackground). getPropertyValue('height')); // to get number without the pixels
            
            //rocketAltitude = Number(y);
            // spaceShuttleHeight.innerHTML = rocketAltitude;      

            //rocketImageY = launchBackgroundHeight*rocketAltitude*;
            //rocket.style.marginBottom =  rocketImageY + 'px';
        }
}

window.addEventListener("load", init);
function init () {
    const missionAbort = document.getElementById("abortMission");
    const button = document.getElementById("liftoffButton");
    const paragraph = document.getElementById("statusReport");
    
    // Put your code for the exercises here.
    
    /* When the Take off button is clicked, the text The shuttle is on the ground changes to Houston, we have liftoff!. The Take off button has an id="liftoffButton" attribute.*/
    button.addEventListener('click', event => {
        paragraph.innerHTML = 'Houston! We have liftoff!';
    });

    /* When the user’s cursor goes over the Abort Mission button, the button’s background turns red. The Abort Mission button has id="abortMission".*/

    missionAbort.addEventListener("mouseover", function() {
        missionAbort.style.backgroundColor = "red";
    });
    missionAbort.addEventListener("mouseout", function() {
        missionAbort.style.backgroundColor = "";
    });

    /* When the user clicks the Abort Mission button, make a abort_message window that says Are you sure you want to abort the mission?. If the user confirms that they want to abort, the text changes to Mission aborted! Space shuttle returning home. */

    missionAbort.addEventListener("click", function(){
        const abort_message = window.confirm("Are you sure you want to abort the mission?");
            if (abort_message === true){
                paragraph.innerHTML = "Mission aborted! Space shuttle returning home"
            }
    })
    
}

window.addEventListener("load", init);
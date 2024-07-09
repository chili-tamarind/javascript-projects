
let launchcode = {

organization : "nonprofit",
executiveDirector : "Jeff",
percentageCoolEmployees : 100,
programsOffered : ["Web Development", "Data Analysis", "Liftoff"],

// method
launchOutput : function launchOutput(num) {

    //When passed a number that is ONLY divisible by 2, return 'Launch!'
    if (num % 2 === 0 && num % 3 !== 0 && num % 5 !== 0) {return 'Launch!'}
    
    //When passed a number that is ONLY divisible by 3, return 'Code!'
    else if (num % 2 !== 0 && num % 3 === 0 && num % 5 !== 0) {return 'Code!'}
    
    //When passed a number that is ONLY divisible by 5, return 'Rocks!'
    else if (num % 2 !== 0 && num % 3 !== 0 && num % 5 === 0) {return 'Rocks!'}
    
    //When passed a number that is divisible by 2 AND 3, return 'LaunchCode!'
    else if (num % 2 === 0 && num % 3 === 0 && num % 5 !== 0) {return 'LaunchCode!'}
    
    //When passed a number that is divisible by 3 AND 5, return 'Code Rocks!'
    else if (num % 2 !== 0 && num % 3 === 0 && num % 5 === 0) {return 'Code Rocks!'}
    
    //When passed a number that is divisible by 2 AND 5, return 'Launch Rocks!'
    else if (num % 2 === 0 && num % 3 !== 0 && num % 5 === 0) {return 'Launch Rocks! (CRASH!!!!)'}
    
    //When passed a number that is divisible by 2, 3, AND 5, return 'LaunchCode Rocks!'
    else if (num % 2 === 0 && num % 3 === 0 && num % 5 === 0) {return 'LaunchCode Rocks!'}
    
    //When passed a number that is NOT divisible by 2, 3, or 5, return 'Rutabagas! That doesn't work.'
    else if (num % 2 !== 0 && num % 3 !== 0 && num % 5 !== 0) {return "Rutabagas! That doesn't work."}

    }
}

module.exports = launchcode;
//npm install

// The function checks to see if a number is greater than, less than, or equal to 5.
function checkFive(num){

    let result = '';

    if (num < 5){ // (num < 3)
        result = num + " is less than 5.";
    } else if (num === 5){
        result = num + " is equal to 5.";
    } else {
        result = num + " is greater than 5.";
    }

    return result;
}

module.exports = {
    checkFive: checkFive,
};
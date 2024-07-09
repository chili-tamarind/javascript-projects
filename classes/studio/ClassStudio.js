//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.

class CrewCandidate {
    
    constructor(name = "", mass = 0, scores = [0]){
        this.name = name;
        this.mass = mass;
        this.scores = scores;
    }

    addScore(my_score){
        if (my_score > 100){
            console.log(`ERROR: Invalid score!`)
        }
        else (this.scores.push(my_score));
    }

    average(){
        
        let sum = 0;
        for (let i = 0; i < this.scores.length; i++) {
            sum += Number(this.scores[i]);
        }

        let score_average = sum / this.scores.length;
        return score_average.toFixed(1);
    }

    status(){

        let check_average = this.average();

        if (check_average >= 90) {return 'Accepted';}
        else if (check_average >= 89) {return 'Reserve';}
        else if (check_average >= 79) {return 'Probationary';}
        else {return 'Rejected';}
    }
}

let bear = new CrewCandidate('Bubba Bear', 135, [88, 85, 90]);
let maltese = new CrewCandidate('Merry Maltese', 1.5, [93, 88, 97]);
let gator = new CrewCandidate( 'Glad Gator', 225, [75, 78, 62]);

console.log(bear);
console.log(maltese);
console.log(gator);

//Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.

console.log("\nGATOR'S SCORES");
console.log(gator.scores);
gator.addScore(85)
console.log(gator.scores);

console.log("\nMERRY'S SCORES"); //92.7
console.log(maltese.average());

console.log("\n\STUFF");
console.log(`${bear.name} earned an average test score of ${bear.average()}% and has a status of ${bear.status()}.`)
console.log(`${maltese.name} earned an average test score of ${maltese.average()}% and has a status of ${maltese.status()}.`)
console.log(`${gator.name} earned an average test score of ${gator.average()}% and has a status of ${gator.status()}.`)

//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.

console.log("\nPART 4 - PLAY A BIT")

if (gator.average() < 90){
    
    let counter_Reserve = 0;
    let counter_Accepted = 0;

    while (gator.average() < 80) {            
        
        counter_Reserve++;

        let score_random = Math.floor(Math.random() * (100 - 80 + 1)) + 80;; // Generate a random integer between 0 and 100
        gator.addScore(score_random)
        
        //return counter_Reserve; >>>>>>>>>>> Bruh, this isn't a function...
    }
    console.log('How many tests will it take to reach Reserve status?', counter_Reserve);

    while (gator.average() < 90) {
        
        counter_Accepted++

        let score_random = Math.floor(Math.random() * (100 - 80 + 1)) + 80;; // Generate a random integer between 80 and 100
        gator.addScore(score_random)

        //return counter_Accepted;  >>>>>>>>>>> Bruh, this isn't a function...
    }
    console.log('How many tests will it take to reach Reserve status?', counter_Accepted);

    console.log('Total tests taken to improve grade: ', counter_Reserve+counter_Accepted);
}
const test = require('../RPS.js');

describe("checkFive", function(){
    /*
    test("Descriptive feedback...", function() {
        //code here...
    }); 
    */

    test("returns 'TIE!' if P1  === P2", function(){
        let output = test.whoWon('rock','rock');
        expect(output).toBe("TIE!");
    });

    test("returns 'Player 2 wins!' if P1 = rock & P2 = paper", function(){
        let output = test.whoWon('rock','paper');
        expect(output).toBe("Player 2 wins!");
    });
        
    test("returns 'Player 2 wins!' if P1 = paper & P2 = scissors", function(){
        let output = test.whoWon('paper','scissors');
        expect(output).toBe("Player 2 wins!");
    });

    test("returns 'ERROR: Incorrect hand played!' if an input is NOT rock, paper or scissors", function(){
        let output = test.whoWon('le_paper','scissors');
        expect(output).toBe("ERROR: Incorrect hand played!");
    });

});


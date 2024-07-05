// launchcode.test.js code:
const launchcode = require('../index.js');

describe("Testing launchcode", function(){

  // Write your unit tests here!

  // organization
  test("should return 'nonprofit' for value of organization", function(){
      expect(launchcode.organization).toBe("nonprofit");
  });

  //executiveDirector
  test("should return 'Jeff' for value of executiveDirector", function(){
    expect(launchcode.executiveDirector).toBe("Jeff");
  });

  //percentageCoolEmployees
  test("should return '100' for value of percentageCoolEmployees", function(){
    expect(launchcode.percentageCoolEmployees).toBe(100);
  });
  
  //programsOffered
  test("should return '3' for value of programsOffered", function(){
    expect((launchcode.programsOffered).length).toBe(3);
  });


  //launchOutput()
  test("if number is ONLY divisible by 2, return 'Launch!'", function(){
    expect(launchcode.launchOutput(2)).toBe('Launch!');
  });

  test("if number isONLY divisible by 3, return 'Code!'", function(){
    expect(launchcode.launchOutput(3)).toBe('Code!');
  });

    test("if number isONLY divisible by 5, return 'Rocks!'", function(){
    expect(launchcode.launchOutput(5)).toBe('Rocks!');
  });

    test("if number is divisible by 2 AND 3, return 'LaunchCode!'", function(){
    expect(launchcode.launchOutput(6)).toBe('LaunchCode!');
  });

    test("if number is divisible by 3 AND 5, return 'Code Rocks!'", function(){
    expect(launchcode.launchOutput(15)).toBe('Code Rocks!');
  });

    test("if number is divisible by 2 AND 5, return ''Launch Rocks! (CRASH!!!!)'", function(){
    expect(launchcode.launchOutput(10)).toBe('Launch Rocks! (CRASH!!!!)');
  });

    test("if number is divisible by 2, 3, AND 5, return 'LaunchCode Rocks!'", function(){
    expect(launchcode.launchOutput(30)).toBe('LaunchCode Rocks!');
  });

    test("if number isNOT divisible by 2, 3, or 5, return 'Rutabagas! That doesn't work.'", function(){
    expect(launchcode.launchOutput(7)).toBe("Rutabagas! That doesn't work.");
  });
    
});
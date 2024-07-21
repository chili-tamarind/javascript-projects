function gradeLabs(labs) {

  for (let i=0; i < labs.length; i++) {
    let lab = labs[i];

    try{
      let result = lab.runLab(3);
      console.log(`${lab.student} code worked: ${result === 27}`);
    }catch{
      let result = 'Error thrown';
      console.log(`${lab.student} code did not work: ${result}`);
    }
  }

  
}

let studentLabs = [
  {
    student: 'Carly',
    runLab: function (num) {
        return Math.pow(num, num);
    }
  },
  {
    student: 'Erica',
    runLab: function (num) {
        return num * num;
    }
  }
];




let studentLabs2 = [
  {
      student: 'Blake',
      myCode: function (num) {
        return Math.pow(num, num);
      }
  },
  {
      student: 'Jessica',
      runLab: function (num) {
        return Math.pow(num, num);
      }
  },
  {
      student: 'Mya',
      runLab: function (num) {
        return num * num;
      }
  }
];


console.log();
gradeLabs(studentLabs);
console.log();
gradeLabs(studentLabs2);
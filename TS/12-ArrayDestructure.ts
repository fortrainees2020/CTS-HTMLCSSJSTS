/*Array Detructuring */
const hobbies2 = ['Reading','Writing','Racing','Music'];
const [hobby1, hobby2, ...lefthobbies]=hobbies2;

console.log(hobby1);
console.log(hobby2);
console.log(lefthobbies);

//Object Destructuring
const Employee1 ={
  fname : 'Alex',
  salary: 100000
}

const { fname,salary } = Employee1; // properties are same
console.log(fname + " : "+ salary);

const { fname:username ,salary: income } = Employee1; // Alias given to fname
console.log(username + " : "+ income);















 /*Rest operators allow us to condense multiple elements into a single array or object.*/

/*const addSalary = ( ...salaries : number[])=>
{
    return salaries.reduce((a,b) => {
        return a+b;
    },0)
};
const total = addSalary(2000, 3000, 5000);
console.log( total );*/

/*
const person5 = {
    name: 'Max',
    age: 30
  };
const copiedPerson5 = { ...person5 };
const add5 = (sum : number, ...numbers: number[]) => {
  return numbers.reduce((curResult, curValue) => {
    sum= curResult + curValue;
    return sum
  }, 0);
};
const addedNumbers5 = add5(5, 10, 2, 3.7);
console.log(addedNumbers5);*/

/*function getAverage(...args : number[]) { 
    var avg = args.reduce(function (a, b) { 
        return a + b; 
      }, 0) / args.length; 
    return avg; 
  } 
  // Function call 
  console.log("Average of the given numbers is : " +  
      getAverage(10, 20, 30, 40, 50)); 
  console.log("Average of the given numbers is : " +  
      getAverage(1.5, 3.5, 5.5, 7.5, 9.5)); 
  console.log("Average of the given numbers is : " +  
      getAverage(2, 4, 6)); */
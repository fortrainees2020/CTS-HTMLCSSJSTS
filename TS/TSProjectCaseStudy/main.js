"use strict";
exports.__esModule = true;
var Employee_1 = require("./Employee");
var department_1 = require("./department");
/********Without Generic********** */
/* const employee1 = new Employee1(1, "John Doe", 50000);
 const employee2 = new Employee1(2, "Jane Smith", 60000);

// Create departments
 const department1 = new Department("HR");
 const department2 = new Department("Engineering");
 department1.addEmployee(employee1);
 department2.addEmployee(employee2);


// Get employees from departments
console.log("Employees in HR department:");
department1.getEmployees().forEach(employee => console.log(employee.getDetails()));

console.log("\nEmployees in Engineering department:");
department2.getEmployees().forEach(employee => console.log(employee.getDetails()));

*/
//*********With Generics */
// Define a class for employees
var employee1 = new Employee_1.Employee1(1, "John Doe", 50000);
var employee2 = new Employee_1.Employee1(2, "Jane Smith", 60000);
// Create departments
var department1 = new department_1.Department("HR");
var department2 = new department_1.Department("Engineering");
department1.addEmployee(employee1);
department2.addEmployee(employee2);
// Get employees from departments
console.log("Employees in HR department:");
department1.getEmployees().forEach(function (employee) { return console.log(employee.getDetails()); });
console.log("\nEmployees in Engineering department:");
department2.getEmployees().forEach(function (employee) { return console.log(employee.getDetails()); });

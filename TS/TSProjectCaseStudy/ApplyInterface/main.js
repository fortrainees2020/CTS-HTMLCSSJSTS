"use strict";
exports.__esModule = true;
var ContractualEmployee_1 = require("./ContractualEmployee");
var Employee_1 = require("./Employee");
var PermanentEmployee_1 = require("./PermanentEmployee");
// Create employee objects
var permanentEmployee = new Employee_1.Employee(1, "John Doe", new PermanentEmployee_1.PermanentEmployee());
var contractEmployee = new Employee_1.Employee(2, "Jane Smith", new ContractualEmployee_1.ContractEmployee());
// Display employee details and calculate salary
permanentEmployee.displayDetails();
console.log("Salary:", permanentEmployee.calculateSalary(50000));
contractEmployee.displayDetails();
console.log("Salary:", contractEmployee.calculateSalary(50000));

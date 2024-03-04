"use strict";
exports.__esModule = true;
var ContractualEmployee_1 = require("./ContractualEmployee");
var FullTimeEmployee_1 = require("./FullTimeEmployee");
var PartTimeEmployee_1 = require("./PartTimeEmployee");
// Create different types of employees
var fullTimeEmployee = new FullTimeEmployee_1.FullTimeEmployee(1, "John Doe", 50000);
var partTimeEmployee = new PartTimeEmployee_1.PartTimeEmployee(2, "Jane Smith", 20, 40);
var contractEmployee = new ContractualEmployee_1.ContractEmployee(3, "Alex Johnson", 6);
// Display employee details
console.log("Full-time Employee Details:");
fullTimeEmployee.displayDetails();
console.log("\nPart-time Employee Details:");
partTimeEmployee.displayDetails();
console.log("\nContract Employee Details:");
contractEmployee.displayDetails();

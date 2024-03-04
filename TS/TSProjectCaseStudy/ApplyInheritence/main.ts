import { ContractEmployee } from "./ContractualEmployee";
import { FullTimeEmployee } from "./FullTimeEmployee";

import { PartTimeEmployee } from "./PartTimeEmployee";

// Create different types of employees
const fullTimeEmployee = new FullTimeEmployee(1, "John Doe", 50000);
const partTimeEmployee = new PartTimeEmployee(2, "Jane Smith", 20, 40);
const contractEmployee = new ContractEmployee(3, "Alex Johnson", 6);

// Display employee details
console.log("Full-time Employee Details:");
fullTimeEmployee.displayDetails();

console.log("\nPart-time Employee Details:");
partTimeEmployee.displayDetails();

console.log("\nContract Employee Details:");
contractEmployee.displayDetails();


//--------Spread Operator with Employee
//1 . Copy one employee information to another
const fullTimeEmployee1 = new FullTimeEmployee(1, "John Doe", 50000);
const fullTimeEmployee2= {...fullTimeEmployee1}

console.log(fullTimeEmployee2);
import { ContractEmployee } from "./ContractualEmployee";
import { Employee } from "./Employee";
import { PermanentEmployee } from "./PermanentEmployee";

// Create employee objects
const permanentEmployee = new Employee(1, "John Doe", new PermanentEmployee());
const contractEmployee = new Employee(2, "Jane Smith", new ContractEmployee());

// Display employee details and calculate salary
permanentEmployee.displayDetails();
console.log("Salary:", permanentEmployee.calculateSalary(50000));

contractEmployee.displayDetails();
console.log("Salary:", contractEmployee.calculateSalary(50000));
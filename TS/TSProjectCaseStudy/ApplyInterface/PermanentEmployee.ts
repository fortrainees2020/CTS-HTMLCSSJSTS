import { EmployeeType } from "./EmployeeType";

// Derived classes for different types of employees
export class PermanentEmployee implements EmployeeType {
    calculateSalary(baseSalary: number): number {
        return baseSalary + (baseSalary * 0.1); // 10% bonus for permanent employees
    }
}
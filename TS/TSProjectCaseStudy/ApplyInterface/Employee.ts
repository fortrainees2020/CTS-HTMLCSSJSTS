import { EmployeeType } from "./EmployeeType";

// Base class for Employee
export class Employee {
    constructor(public id: number, public name: string, public type: EmployeeType) {}

    // Method to calculate salary based on employee type
    calculateSalary(baseSalary: number): number {
        return this.type.calculateSalary(baseSalary);
    }

    // Method to display employee details
    displayDetails(): void {
        console.log(`ID: ${this.id}, Name: ${this.name}`);
    }
}
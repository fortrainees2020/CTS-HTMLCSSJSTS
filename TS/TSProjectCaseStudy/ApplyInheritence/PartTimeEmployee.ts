import { Employee } from "./Employee";

// Derived class for PartTimeEmployee inheriting from Employee
export class PartTimeEmployee extends Employee {
    constructor(id: number, name: string, public hourlyRate: number, public hoursWorked: number) {
        super(id, name);
    }

    // Method to display employee details
    displayDetails(): void {
        super.displayDetails();
        console.log(`Type: Part-time, Hourly Rate: ${this.hourlyRate}, Hours Worked: ${this.hoursWorked}`);
    }
}
import { Employee } from "./Employee";

export class FullTimeEmployee extends Employee{
    constructor(id: number, name: string, public salary: number) {
        super(id, name);
    }

    // Method to display employee details
    displayDetails(): void {
        super.displayDetails();
        console.log(`Type: Full-time, Salary: ${this.salary}`);
    }
}
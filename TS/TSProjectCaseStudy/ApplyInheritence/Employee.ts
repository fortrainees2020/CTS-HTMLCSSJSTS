// Base class for Employee
export class Employee {
    constructor(public id: number, public name: string) {}

    // Method to display employee details
    displayDetails(): void {
        console.log(`ID: ${this.id}, Name: ${this.name}`);
    }
}
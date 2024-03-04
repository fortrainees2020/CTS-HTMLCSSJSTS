import { Employee } from "./Employee";

// Derived class for ContractEmployee inheriting from Employee
export class ContractEmployee extends Employee {
    constructor(id: number, name: string, public contractDuration: number) {
        super(id, name);
    }

    // Method to display employee details
    displayDetails(): void {
        super.displayDetails();
        console.log(`Type: Contract, Duration: ${this.contractDuration} months`);
    }
}

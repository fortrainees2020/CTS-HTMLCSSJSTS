export class Employee1 {
    private id: number;
    private name: string;
    private salary: number;

    constructor(id: number, name: string, salary: number) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }

    getDetails(): string {
        return `ID: ${this.id}, Name: ${this.name}, Salary: ${this.salary}`;
    }
}
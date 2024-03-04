class Employee {
    static totalEmployees: number = 0; // Static property to keep track of total employees

    constructor(public id: number, public name: string, public salary: number) {
        Employee.totalEmployees++; // Increment totalEmployees whenever a new instance is created
    }

    static displayTotalEmployees(): void {
        console.log(`Total Employees: ${Employee.totalEmployees}`);
    }
}

// Create instances of Employee
const employee1 = new Employee(1, "Martin Max", 50000);
const employee2 = new Employee(2, "Jim Smith", 60000);
const employee3 = new Employee(3, "Jay Rutherford", 63000);

// Display total employees using static method
Employee.displayTotalEmployees(); // Output: Total Employees: 2

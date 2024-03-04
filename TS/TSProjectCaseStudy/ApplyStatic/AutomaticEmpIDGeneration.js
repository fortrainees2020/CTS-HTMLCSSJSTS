var Employee = /** @class */ (function () {
    function Employee(id, name, salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
        Employee.totalEmployees++; // Increment totalEmployees whenever a new instance is created
    }
    Employee.displayTotalEmployees = function () {
        console.log("Total Employees: ".concat(Employee.totalEmployees));
    };
    Employee.totalEmployees = 0; // Static property to keep track of total employees
    return Employee;
}());
// Create instances of Employee
var employee1 = new Employee(1, "Martin Max", 50000);
var employee2 = new Employee(2, "Jim Smith", 60000);
var employee3 = new Employee(3, "Jay Rutherford", 63000);
// Display total employees using static method
Employee.displayTotalEmployees(); // Output: Total Employees: 2

"use strict";
exports.__esModule = true;
exports.Employee = void 0;
// Base class for Employee
var Employee = /** @class */ (function () {
    function Employee(id, name, type) {
        this.id = id;
        this.name = name;
        this.type = type;
    }
    // Method to calculate salary based on employee type
    Employee.prototype.calculateSalary = function (baseSalary) {
        return this.type.calculateSalary(baseSalary);
    };
    // Method to display employee details
    Employee.prototype.displayDetails = function () {
        console.log("ID: ".concat(this.id, ", Name: ").concat(this.name));
    };
    return Employee;
}());
exports.Employee = Employee;

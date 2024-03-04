"use strict";
exports.__esModule = true;
exports.Employee = void 0;
// Base class for Employee
var Employee = /** @class */ (function () {
    function Employee(id, name) {
        this.id = id;
        this.name = name;
    }
    // Method to display employee details
    Employee.prototype.displayDetails = function () {
        console.log("ID: ".concat(this.id, ", Name: ").concat(this.name));
    };
    return Employee;
}());
exports.Employee = Employee;

"use strict";
exports.__esModule = true;
exports.Employee1 = void 0;
var Employee1 = /** @class */ (function () {
    function Employee1(id, name, salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }
    Employee1.prototype.getDetails = function () {
        return "ID: ".concat(this.id, ", Name: ").concat(this.name, ", Salary: ").concat(this.salary);
    };
    return Employee1;
}());
exports.Employee1 = Employee1;

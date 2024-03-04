"use strict";
exports.__esModule = true;
exports.PermanentEmployee = void 0;
// Derived classes for different types of employees
var PermanentEmployee = /** @class */ (function () {
    function PermanentEmployee() {
    }
    PermanentEmployee.prototype.calculateSalary = function (baseSalary) {
        return baseSalary + (baseSalary * 0.1); // 10% bonus for permanent employees
    };
    return PermanentEmployee;
}());
exports.PermanentEmployee = PermanentEmployee;

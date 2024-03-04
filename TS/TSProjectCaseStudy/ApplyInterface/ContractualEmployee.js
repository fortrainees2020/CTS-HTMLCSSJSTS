"use strict";
exports.__esModule = true;
exports.ContractEmployee = void 0;
var ContractEmployee = /** @class */ (function () {
    function ContractEmployee() {
    }
    ContractEmployee.prototype.calculateSalary = function (baseSalary) {
        return baseSalary - (baseSalary * 0.05); // 5% deduction for contract employees
    };
    return ContractEmployee;
}());
exports.ContractEmployee = ContractEmployee;

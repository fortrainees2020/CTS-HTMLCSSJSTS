"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.ContractEmployee = void 0;
var Employee_1 = require("./Employee");
// Derived class for ContractEmployee inheriting from Employee
var ContractEmployee = /** @class */ (function (_super) {
    __extends(ContractEmployee, _super);
    function ContractEmployee(id, name, contractDuration) {
        var _this = _super.call(this, id, name) || this;
        _this.contractDuration = contractDuration;
        return _this;
    }
    // Method to display employee details
    ContractEmployee.prototype.displayDetails = function () {
        _super.prototype.displayDetails.call(this);
        console.log("Type: Contract, Duration: ".concat(this.contractDuration, " months"));
    };
    return ContractEmployee;
}(Employee_1.Employee));
exports.ContractEmployee = ContractEmployee;

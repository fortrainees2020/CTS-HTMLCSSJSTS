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
exports.PartTimeEmployee = void 0;
var Employee_1 = require("./Employee");
// Derived class for PartTimeEmployee inheriting from Employee
var PartTimeEmployee = /** @class */ (function (_super) {
    __extends(PartTimeEmployee, _super);
    function PartTimeEmployee(id, name, hourlyRate, hoursWorked) {
        var _this = _super.call(this, id, name) || this;
        _this.hourlyRate = hourlyRate;
        _this.hoursWorked = hoursWorked;
        return _this;
    }
    // Method to display employee details
    PartTimeEmployee.prototype.displayDetails = function () {
        _super.prototype.displayDetails.call(this);
        console.log("Type: Part-time, Hourly Rate: ".concat(this.hourlyRate, ", Hours Worked: ").concat(this.hoursWorked));
    };
    return PartTimeEmployee;
}(Employee_1.Employee));
exports.PartTimeEmployee = PartTimeEmployee;

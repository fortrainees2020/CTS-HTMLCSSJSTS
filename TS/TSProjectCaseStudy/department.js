"use strict";
exports.__esModule = true;
exports.Department = void 0;
/*export class Department {

    readonly name: string;
    private employees: Employee1[];

    constructor(name: string) {
        this.name = name;
        this.employees = [];
    }

    addEmployee(employee: Employee1): void {
        this.employees.push(employee);
    }

    getEmployees(): Employee1[] {
        return this.employees;
    }
}
*/
//-------Department with Generic class Department<T> {
var Department = /** @class */ (function () {
    function Department(name) {
        this.name = name;
        this.employees = [];
    }
    Department.prototype.addEmployee = function (employee) {
        this.employees.push(employee);
    };
    Department.prototype.getEmployees = function () {
        return this.employees;
    };
    return Department;
}());
exports.Department = Department;

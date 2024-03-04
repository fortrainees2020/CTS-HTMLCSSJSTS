import { EmployeeType } from "./EmployeeType";

export class ContractEmployee implements EmployeeType {
    calculateSalary(baseSalary: number): number {
        return baseSalary - (baseSalary * 0.05); // 5% deduction for contract employees
    }
}
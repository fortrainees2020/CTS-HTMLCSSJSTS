import { Employee1 } from "./Employee";
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
export class Department<T> {
        private name: string;
        private employees: T[];
    
        constructor(name: string) {
            this.name = name;
            this.employees = [];
        }
    
        addEmployee(employee: T): void {
            this.employees.push(employee);
        }
    
        getEmployees(): T[] {
            return this.employees;
        }
    }
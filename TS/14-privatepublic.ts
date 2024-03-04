class Department1 {
  public name: string;
  private employees: string[] = [];

  constructor(n: string) {
    this.name = n;
  }

  describe(this: Department1) {
    console.log('Department: ' + this.name);
  }

  addEmployee(employee: string) {
    // validation etc
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const accounting1 = new Department1('Accounting');
accounting1.addEmployee('Max');
accounting1.addEmployee('Manu');
// accounting.employees[2] = 'Anna';
accounting1.describe();
accounting1.name = 'NEW NAME';
accounting1.printEmployeeInformation(); //because it is private

// const accountingCopy = { name: 'DUMMY', describe: accounting.describe };

// accountingCopy.describe();
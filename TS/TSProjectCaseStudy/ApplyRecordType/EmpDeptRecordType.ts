// ----------Define a type for EmployeeData using Record type
type EmployeeData = Record<string, any>;

// Example employee data
const employee1: EmployeeData = {
    id: 1,
    name: "Anthony Rocks",
    salary: 50000,
    departmentId: 1
};

const employee2: EmployeeData = {
    id: 2,
    name: "Gini Martin",
    salary: 60000,
    departmentId: 2
};

// -------------Define a type for DepartmentData using Record type
type DepartmentData = Record<string, any>;
// Example department data
const department1: DepartmentData = {
    id: 1,
    name: "HR",
    location: "New York"
};

const department2: DepartmentData = {
    id: 2,
    name: "Engineering",
    location: "San Francisco"
};

// Function to display employee details
function displayEmployeeDetails(employee: EmployeeData) {
    console.log("Employee Details:");
    for (const key in employee) {
        console.log(`${key}: ${employee[key]}`);
    }
}

// Function to display department details
function displayDepartmentDetails(department: DepartmentData) {
    console.log("Department Details:");
    for (const key in department) {
        console.log(`${key}: ${department[key]}`);
    }
}

// Display details of employee1
displayEmployeeDetails(employee1);

// Display details of employee2
displayEmployeeDetails(employee2);

// Display details of department1
displayDepartmentDetails(department1);

// Display details of department2
displayDepartmentDetails(department2);

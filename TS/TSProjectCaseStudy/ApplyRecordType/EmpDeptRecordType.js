// Example employee data
var employee1 = {
    id: 1,
    name: "John Doe",
    salary: 50000,
    departmentId: 1
};
var employee2 = {
    id: 2,
    name: "Jane Smith",
    salary: 60000,
    departmentId: 2
};
// Example department data
var department1 = {
    id: 1,
    name: "HR",
    location: "New York"
};
var department2 = {
    id: 2,
    name: "Engineering",
    location: "San Francisco"
};
// Function to display employee details
function displayEmployeeDetails(employee) {
    console.log("Employee Details:");
    for (var key in employee) {
        console.log("".concat(key, ": ").concat(employee[key]));
    }
}
// Function to display department details
function displayDepartmentDetails(department) {
    console.log("Department Details:");
    for (var key in department) {
        console.log("".concat(key, ": ").concat(department[key]));
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

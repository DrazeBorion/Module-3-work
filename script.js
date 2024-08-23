// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');
let employees = [];
const employee = {
  firstname: "First Name",
  lastname: "Last Name",
  salary: ""
};

// Collect employee data
const collectEmployees = function() {
  // TODO: Get user input to create and return an array of employee objects
while (true) {
  let firstName = prompt("Employee First Name");

  let lastName = prompt("Employee Last Name");
  let salaryInput = prompt("Employee Salary");
  let salary = isNaN(parseInt(salaryInput)) ? 0 : parseInt(salaryInput);

  let employee = {
    firstName: firstName,
    lastName: lastName,
    salary: salary
  }
  employees.push(employee);

  let finished = confirm  ("Do you want to add another employee?");
  if (!finished) {
    break
  }
};
return employees;
  };
   

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary

  const sum = employeesArray.reduce((total,employee) => total + employee.salary, 0);
  const avg = (sum / employeesArray.length) || 0;
  console.log(sum);
  console.log(sum/employeesArray.length);
  return sum/employeesArray.length;
  
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
  const randomIndex = Math.floor(Math.random() * employeesArray.length);
  const randomEmployee = employeesArray[randomIndex];
  console.log(`Dear ${randomEmployee.firstName} ${randomEmployee.lastName}, you are our weekly sacrifice to the sun god Technotochtilan or however you spell it.`);
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  console.log(displayAverageSalary(employees));

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);

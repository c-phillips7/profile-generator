const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
let id = 0

// increament ID
function generateId() {
    id++;
    return id;
}

// prompt for Manager info from inquiere
const promptManager = () => {
    return inquirer.prompt([
        // get managers name
        {
            type: 'input',
            name: 'managerName',
            message: "Please enter the manager's name: ",
            validate: managerName => {
                if (managerName) {
                    return true;
                } else {
                    console.log("Please enter a manager's name!")
                    return false;
                }
            }
        },
        // get managers email
        {
            type: 'input',
            name: 'managerEmail',
            message: "Please enter the manager's Email",
            validate: managerEmail => {
                if (managerEmail) {
                    return true;
                } else {
                    console.log("Please enter a manager's Email!")
                    return false;
                }
            }
        },
        // get managers office number
        {
            type: 'input',
            name: 'managerNumber',
            message: "Please enter the manager's office number: ",
            validate: managerNumber => {
                if (managerNumber) {
                    return true;
                } else {
                    console.log("Please enter a manager's office number!")
                    return false;
                }
            }
        }
    ])
}
    

// prompt for new Employee info from inquiere
    // taking arguement of existing data so array can be added to
const promptEmployee = employeeData => {
    console.log(`
    ==================
    Add a New Employee
    ==================`
    );
    //create empty array of employees
    if (!employeeData.employees) {
        employeeData.employees = [];
    }
    // inquirer questions that will return answers
    return inquirer.prompt([
        //confirm if would like to add employee
        {
            type: 'confirm',
            name: 'newEmployee',
            message: "Would you like to add a new Employee?",
            default: true
        },
        // if newEmployee is true, ask for Employee's Name
        {
            type: 'input',
            name:'employeeName',
            message: "Please enter the employee's name: ",
            when: confirmEmployee => confirmEmployee.newEmployee,
            validate: name => {
                if (name) {
                    return true;
                } else {
                    console.log("Please enter a name!");
                    return false;
                }
            }
        },
        // if newEmployee is true, ask for Employee's Email
        {
            type: 'input',
            name: 'employeeEmail',
            message: "Please enter the employee's Email: ",
            when: confirmEmployee => confirmEmployee.newEmployee,
            validate: email => {
                if (email) {
                    return true;
                } else {
                    console.log("Please enter an email!");
                    return false;
                }
            }
        },
        // if newEmployee is true, ask for Employee's Role
        {
            type: 'list',
            name: 'employeeRole',
            message: "Select employee's role: ",
            when: confirmEmployee => confirmEmployee.newEmployee,
            choices: ['Engineer', 'Intern']
        },
        // If employeeRole is Engineer, ask for github
        {
            type: 'input',
            name: 'github',
            message: "Enter github username: ",
            when: role => role.employeeRole === 'Engineer',
            validate: github => {
                if (github) {
                    return true;
                } else {
                    console.log("Please enter a github username!");
                    return false;
                }
            }
        },
        // If employeeRole is Intern, ask for school
        {
            type: 'input',
            name: 'school',
            message: "Enter school name: ",
            when: role => role.employeeRole === 'Intern',
            validate: school => {
                if (school) {
                    return true;
                } else {
                    console.log("Please enter a School Name!");
                    return false;
                }
            }
        }
        ])
        .then(newEmployee => {
            //push new Employee info into employee array
            employeeData.employees.push(newEmployee);

            if (newEmployee.newEmployee) { // if answered yes to add new employee
                // call prompt again to add a new employee passing data
                return promptEmployee(employeeData)
            }
            else return employeeData
        });
}
    


// use async function to await answers, then use these with classes to generate team

promptManager()
    .then(promptEmployee)
    .then(answers => { //do stuff with answers
    //  console.log(answers);
    let team = [];
    // create manager object using Class definition
    const manager = new Manager(answers.managerName, generateId(), answers.managerEmail, answers.managerNumber)
    // push manager object into team array
    team.push(manager);
    //employees is an array of objects, so just push wont work...
    answers.employees.forEach(employee => {
        // check if any employee exists
        if (employee.newEmployee) {
            if (employee.employeeRole === 'Engineer'){
                const engineer = new Engineer(employee.employeeName, generateId(), employee.employeeEmail, employee.github);
                // console.log(engineer);
                team.push(engineer);
                return
            }
            else if (employee.employeeRole === 'Intern'){
                const intern = new Intern(employee.employeeName, generateId(), employee.employeeEmail, employee.school);
                // console.log(intern);
                team.push(intern);
                return
            }

        }
    })
    console.log(team);
    return team;
    })
    .then(teamData => {
        // take arrray of objects generated, and call function to generate HTML
            //returned as string of HTML template
    })
    .then(htmlData => {
        //take HTML template and add the css file (copy?)
    })
    .catch(e => {
        console.log(e);
    });
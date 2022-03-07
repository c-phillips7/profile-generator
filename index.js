const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

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
    //create empty array of employees
    //ask if would like to add employee
        // if no: 
            // return object created
        // if yes:
            // ask name
            // ask email
            // ask role
                // based on role ask relevant questions
    // push created employee into array and ask if would like to add employee again



// use async function to await answers, then use these with classes to generate team



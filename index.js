const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// prompt for Manager info from inquiere
    //managers name
    // managers email
    // managers office number

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



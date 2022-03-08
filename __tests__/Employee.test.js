const Employee = require('../lib/Employee.js');

// test Employee objects
test('create Employee Object', () => {
    const employee = new Employee('TestEmployee', 1, 'test@email.com');

    expect(employee.name).toBe('TestEmployee');
    expect(employee.id).toBe(1);
    expect(employee.email).toBe('test@email.com');
});

//test getName()
test('get Employees name as an object', () => {
    const employee = new Employee('TestEmployee', 1, 'test@email.com');

    expect(employee.getName()).toEqual('TestEmployee');
});
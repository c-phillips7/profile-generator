const Intern = require('../lib/Intern.js')

//test Intern object generation
test('create Intern Object', () => {
    const intern = new Intern('TestIntern', 1, 'test@email.com', 'school');

    expect(intern.name).toBe('TestIntern');
    expect(intern.id).toBe(1)
    expect(intern.email).toBe('test@email.com')
    expect(intern.school).toBe('school')
});

//test getSchool()
test('get Interns school as an object', () => {
    const intern = new Intern('TestIntern', 1, 'test@email.com', 'school');

    expect(intern.getSchool()).toEqual('school');
});

//test getRole() 
test('get interns name as an object', () => {
    const intern = new Intern('TestIntern', 1, 'test@email.com', 'school');

    expect(intern.getRole()).toEqual('Intern');
});
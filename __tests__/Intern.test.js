const Intern = require('../lib/Intern.js')

//test Intern object generation
test('create Intern Object', () => {
    const intern = new Intern('TestIntern', 1, 'test@email.com', 'school');

    expect(intern.name).toBe('TestIntern');
    expect(intern.id).toBe(1)
    expect(intern.email).toBe('test@email.com')
    expect(intern.school).toBe('school')
});


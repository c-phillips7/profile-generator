const Engineer = require('../lib/Engineer.js')

//test Engineer object generation
test('create Engineer Object', () => {
    const engineer = new Engineer('TestEngineer', 1, 'test@email.com', 'github');

    expect(engineer.name).toBe('TestEngineer');
    expect(engineer.id).toBe(1)
    expect(engineer.email).toBe('test@email.com')
    expect(engineer.github).toBe('github')
});
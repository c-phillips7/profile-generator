const { TestWatcher } = require('jest')
const Manager = require('../lib/Manager.js')

//test Manager object generation
test('create Manager Object', () => {
    const manager = new Manager('TestManager', 1, 'test@email.com', '420');

    expect(manager.name).toBe('TestManager');
    expect(manager.id).toBe(1)
    expect(manager.email).toBe('test@email.com')
    expect(manager.officeNumber).toBe('420')
})


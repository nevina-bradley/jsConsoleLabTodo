const {createTask} = require('../src/toDoList')

describe("To Do List", () =>{
    test ('create task', () => {
        const name = "new task";
        const description = "do something";
        const complete = false;
        const expected = {
            name, description, complete
        }
        const result = createTask(name, description);

        expect(result).toEqual(expected);
    })
})
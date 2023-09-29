const fs = require('fs');
let data;

const createTask = (titleName, descriptionName, filename) => {
    if (!fs.existsSync(filename) || fs.readFileSync(filename, "utf-8") == ""){
        const table = {taskTable:[]};
        fs.writeFileSync(filename,JSON.stringify(table, null, 2));
    }

    data = JSON.parse(fs.readFileSync(filename,'utf-8'));

    let taskObject = {
        title: titleName,
        description: descriptionName,
        id: (data.taskTable.length == 0)?0:data.taskTable[data.taskTable.length - 1].id + 1,
    }

   data.taskTable[data.taskTable.length] = taskObject;
   fs.writeFileSync(filename, JSON.stringify(data, null, 2));
}

createTask("bob", "steve", '../data/bob.json');

module.exports = {
    createTask,
};
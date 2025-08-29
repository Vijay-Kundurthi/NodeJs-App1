const { setTimeout: delay } = require("node:timers").promises;

const performTasks = async ()=> {
    const task1 = await delay(1000, 'First task completed..');
    console.log(task1);
    const task2 = await delay(1000, 'Second task complete..')
    console.log(task2);
}

performTasks();

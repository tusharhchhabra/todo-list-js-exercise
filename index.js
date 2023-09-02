function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    completed: false,

    markCompleted: function() {
      this.completed = true;
    },

    logState: function() {
      console.log(`${this.title} has${this.completed ? " " : " not "}been completed`);
    }
  };

  return task;
}

const task1 = newTask("Clean Cat Litter", "Take all the 💩 out of the litter box");
const task2 = newTask("Do Laundry", "😨");

const tasks = [task1, task2];

task1.logState();
task1.markCompleted();
task1.logState();

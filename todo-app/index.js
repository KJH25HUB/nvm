const todos = [];

function addTodo(task) {
  todos.push({ task, done: false });
}

function completeTodo(index) {
  if (todos[index]) {
    todos[index].done = true;
  }
}

function listTodos() {
  todos.forEach((todo, i) => {
    console.log(`${i + 1}. [${todo.done ? 'x' : ' '}] ${todo.task}`);
  });
}

addTodo('Install nvm');
addTodo('Use nvm to install Node.js');
addTodo('Build a todo app');
completeTodo(0);
completeTodo(1);
listTodos();

# m-code3
function removeTodo(index) {
  const todos = JSON.parse(localStorage.getItem("todos"));
  todos.splice(index, 1);
  localStorage.setItem("todos", JSON.stringify(todos));
}

/* removeManyTodo FUNCTION TO REMOVE MANY TODOS */

function removeManyTodo(indexes) {
  let todos = JSON.parse(localStorage.getItem("todos"));
  todos = todos.filter(function (todo, index) {
    return !indexes.includes(index);
  });
  localStorage.setItem("todos", JSON.stringify(todos));
}

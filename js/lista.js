// Ao carregar a página, esta função escuta o localStorage para listagem
document.addEventListener("DOMContentLoaded", function () {
    loadTodos();
});

function loadTodos() {
    const todos = JSON.parse(localStorage.getItem('todos')) || [];
    const todoList = document.getElementById('todo-list');
    todoList.innerHTML = '';
    todos.forEach((todo, index) => {
        const todoItem = createTodoElement(todo, index);
        todoList.appendChild(todoItem);
    });
}

function saveTodo(todos) {
    localStorage.setItem('todos', JSON.stringify(todos));

}

function createTodoElement(todo, index) {
    const todoItem = document.getElementById('li');
    todoItem.className = 'todo-item' + (todo.completed ? 'completed' : '');

    const todoText = document.getElementById('span');
    todoText.textContent = todo.text;
    todoItem.appendChild(todoText);

    const editInput = document.createElement('input');
    editInput.type = 'text';
    editInput.value = todo.text;
    editInput.style.display = 'none';
    todoItem.appendChild(editInput);

    const actions = document.createElement('div');
    actions.className = 'actions';
    const editButton = document.createElement('button');
    editButton.className = 'icon-btn';
    editButton.innerHTML = '<i class="fas fa-edit"></i>'
    editButton.onclick = () => {
        editButton.style.display = 'block';
        todoText.style.display = 'none';
        editButton.style.display = 'none';
        saveButton.style.display = 'inline';
    };
    actions.appendChild(editButton);

    const saveButton = document.createElement('button');
    saveButton.className = ('icon-btn');
    saveButton.innerHTML = '<i class = "fas fa-save"></i>';
    saveButton.style.display = 'none';
    saveButton.onclick = () => {
        const newText = editInput.value;
        todoText.textContent = newText;
        todoText.style.display = 'block';
        editInput.style.display = 'none';
        editButton.style.display = 'inline';
        saveButton.style.display = 'none';
        updateTodoText(index, newTodo);
    };
    actions.appendChild(saveButton);

    const completeButton = document.createElement('button');
    completeButton.className = 'icon-btn';
    completeButton.innerHTML = '<i class = "fas fa-check"></i>';
    completeButton.onClick = () => {
        todo.completed = !todo.completed;
        todoItem.classList.toggle('completed');
        updateTodoStatus(index, todo.completed);
    };
    actions.appendChild(completeButton);

    const deleteButton = document.createElement('button');
    deleteButton.className = 'icon-btn';
    deleteButton.innerHTML = '<i class = "fas fa-trash"></i>';
    deleteButton.onClick = () => {
        deleteTodoItem(index);
    };
    actions.appendChild(completeButton);
    todoItem.appendChild(actions);
    return todoItem;

}

function addTodo(){
    const newTodoInput = document.getElementById('new-todo');
    const newText = newTodoInput.value.trim();
    if(newText !==''){
        const todos = JSON.parse(localStorage.getItem('todo')) || [];
        todo.push({text: newText, complete: false});
        
    }
}


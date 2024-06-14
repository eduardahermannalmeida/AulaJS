/*  Objetivo do Script
   --------------------------------------------------------
   
    Função Principal */
document.addEventListener("DOMContentLoaded", function () {
    loadTodos();
});
/* Garante que a função loadTodos() seja chamada quando no 
   documento HTML estiver completamente carregado para que 
   os elementos do DOM estejam disponíveis.
*/

function loadTodos() {
    /* Carrega a lista de tarefas do localStorage e as exibe na
       tela.
       Usa JSON.parse para converter os dados de String JSON de
       volta para um array.
       Cria elementos HTML para cada tarefa e os adiciona à lista.
    */
    const todos = JSON.parse(localStorage.getItem('todos')) || [];
    const todoList = document.getElementById('todo-list');
    todoList.innerHTML = '';

    todos.forEach((todo, index) => {
        const todoItem = createTodoElement(todo, index);
        todoList.appendChild(todoItem);
    });
}

function saveTodos(todos) {
    /* Salva a lista de tarefas no localStorage. Usa JSON.stringify
       para converte o array de tarefas em uma string JSON antes de
       salvar.
    */
    localStorage.setItem('todos', JSON.stringify(todos));
}

function createTodoElement(todo, index) {
    /* Cria e retorna um elemento HTML para tarefa. Adiciona funcionalidades
       de edição, salvamento, conclusão e exclusão.
    */
    const todoItem = document.createElement('li');
    todoItem.className = 'todo-item' + (todo.completed ? ' completed' : '');

    const todoText = document.createElement('span');
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
    editButton.innerHTML = '<i class="fas fa-edit"></i>';
    editButton.onclick = () => {
        editInput.style.display = 'block';
        todoText.style.display = 'none';
        editButton.style.display = 'none';
        saveButton.style.display = 'inline';
    };
    actions.appendChild(editButton);

    const saveButton = document.createElement('button');
    saveButton.className = 'icon-btn';
    saveButton.innerHTML = '<i class="fas fa-save"></i>';
    saveButton.style.display = 'none';
    saveButton.onclick = () => {
        const newText = editInput.value;
        todoText.textContent = newText;
        todoText.style.display = 'block';
        editInput.style.display = 'none';
        editButton.style.display = 'inline';
        saveButton.style.display = 'none';
        updateTodoText(index, newText);
    };
    actions.appendChild(saveButton);

    const completeButton = document.createElement('button');
    completeButton.className = 'icon-btn';
    completeButton.innerHTML = '<i class="fas fa-check"></i>';
    completeButton.onclick = () => {
        todo.completed = !todo.completed;
        todoItem.classList.toggle('completed');
        updateTodoStatus(index, todo.completed);
    };
    actions.appendChild(completeButton);

    const deleteButton = document.createElement('button');
    deleteButton.className = 'icon-btn';
    deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
    deleteButton.onclick = () => {
        deleteTodoItem(index);
    };
    actions.appendChild(deleteButton);

    todoItem.appendChild(actions);

    return todoItem;
}

function addTodo() {
    /* Adiciona uma nova tarefa à lista. Atualiza o localStorage
       com uma nova lista de tarefas. Recarrega a lista na tela.
    */
    const newTodoInput = document.getElementById('new-todo');
    const newText = newTodoInput.value.trim();
    if (newText !== '') {
        const todos = JSON.parse(localStorage.getItem('todos')) || [];
        todos.push({ text: newText, completed: false });
        saveTodos(todos);
        newTodoInput.value = '';
        loadTodos();
    }
}

function updateTodoText(index, newTodo) {
    /* Atualiza o texto de uma tarefa específica e salva no
       localStorage.
    */
    const todos = JSON.parse(localStorage.getItem('todos')) || [];
    todos[index].text = newText;
    saveTodos('todos');
}

function updateTodosStatus(index, completed) {
    /* Atualiza o status de conclusão de uma tarefa específica
       e salva no localStorage. */
    const todos = JSON.parse(localStorage.getItem('todos')) || [];
    todos[index].completed = completed;
    saveTodos(todos);
}

function deleteTodoItem(index) {
    /* Remove uma tarefa da lista. Atualiza o localStorage e 
       recarrega a lista na tela.
    */
    const todos = JSON.parse(localStorage.getItem('todos')) || [];
    todos.splice(index, 1);
    saveTodos(todos);
    loadTodos();
}

/* Funções do localStorage:

   localStorage.getItem('todos');
   recupera a lista de tarefas armazenada no localStorage
   como uma String JSON.

   --------------------------------------------------------

   localStorage.setItem('todos', JSON.stringify(todos));
   salva a lista de tarefas no localStorage como uma String
   JSON.

*/

/* Funções de arrays utilizadas:

   JSON.parse(String)
   converte uma String JSON em um array de objetos.

   --------------------------------------------------------

   JSON.stringify(array)
   converte um array de objetos em uma string JSON.

   --------------------------------------------------------

   array.prototype.push(item)
   adiciona um novo item ao final do array.

   --------------------------------------------------------

   array.prototype.slice(index, 1)
   remove um item do array na posição especificada.

*/
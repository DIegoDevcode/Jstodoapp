// Variables con el método querySelector la lógica de los botones
let addBtn = document.querySelector('.btn');
let todoInput = document.querySelector('#todo-input');
let todoList = document.querySelector('.todo-list');
addBtn.addEventListener('click', (e) =>{
    e.preventDefault();

const newTodoText = todoInput.value;
const newLi = document.createElement('li'); 
newLi.innerHTML = `
<h3 class="todo-text">${newTodoText}</h3>
<div class="todo-buttons">
    <button class="todo-btn green">Done</button>
    <button class="todo-btn red">Remove</button>
</div>
`;
if(todoInput.value === ''){
    alert('Please enter some task here!')
}
else{
    todoList.append(newLi);
}
todoInput.value = '';
});

todoList.addEventListener('click', (e)=>{
    if (e.target.classList.contains('green')) {
        let lineTrough = e.target.parentNode.previousElementSibling;
        lineTrough.style.textDecoration = 'line-through';
        lineTrough.style.color = 'green';
    }
    if (e.target.classList.contains('red')) {
        let removeElem = e.target.parentNode.parentNode;
        removeElem.remove();
    }
    });
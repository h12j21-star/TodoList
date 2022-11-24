const Header = document.querySelector('.todoHeader');
const colorPicker = Header.querySelector('.inpColor');
const inpName = Header.querySelector('.inpName');
const pushNameBtn = Header.querySelector('.pushName')
const introduce = Header.querySelector('.introduce');
const introduceName = Header.querySelector('.introduce span')
const todoMain = document.querySelector('.todoMain')
const todoInput = todoMain.querySelector('.inpTodo');
const pushTodoBtn = todoMain.querySelector('.todoPush');
const todoList = todoMain.querySelector('.todList');


const colorChange = (e) =>{
  let pickColor = e.target.value;
  todoMain.style.backgroundColor=pickColor;
}
colorPicker.addEventListener('input',colorChange);


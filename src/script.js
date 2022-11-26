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


//할일 저장하기
// {todolist : [todos:{todo:[todo1,todo2],state:false},color:white]

const todoListItem=JSON.parse(localStorage.getItem('todoListItem')) || [{todos:{todo:[]},state:false,color:colorPicker.value},]


function setUp(){
  setStoreItem();
  render();
}
function getStoreItem(item){
  const todoListItem=JSON.parse(localStorage.getItem('todoListItem')) || [{todos:{todo:[]},state:false,color:colorPicker.value}]
  return todoListItem[0][item]

}
function render(){
  //NAME
  let getUserName = localStorage.getItem('name')
introduce.textContent = getUserName ? introduce.textContent + getUserName : 'hello' 
}

function setStoreItem(){
  const storeName = () =>{
    let userName = inpName.value;
    localStorage.setItem('name',userName);
    introduce.textContent="hello ";
    introduce.textContent = introduce.textContent + userName;
  }
  pushNameBtn.addEventListener('click',storeName);
}








setUp();

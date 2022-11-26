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


const todoListItem=JSON.parse(localStorage.getItem('todoListItem')) || [{todos:[{todo:[{ToDo:'',state:false}]}]}]
console.log(todoListItem)
function setUp(){
  setStoreItem();
  render();
}

function getStoreItem(item){
  const todoListItem=JSON.parse(localStorage.getItem('todoListItem')) || [{todos:[{todo:[{ToDo:'',state:false}]}]}]
  return todoListItem[0][item]
}

function render(){
  //NAME
  let getUserName = localStorage.getItem('Name')
  introduce.textContent = getUserName ? introduce.textContent + getUserName : 'hello' 
  //COLOR
  let getColor = localStorage.getItem('Color');
  todoMain.style.
  backgroundColor=getColor;
  colorPicker.value=getColor;
  //TODO


}

function setStoreItem(){
  const storeName = () =>{
    let userName = inpName.value;
    localStorage.setItem('Name',userName);
    introduce.textContent="hello ";
    introduce.textContent = introduce.textContent + userName;
  }
  const storeColor = (e) =>{
    let pickColor = e.target.value;
    todoMain.style.
    backgroundColor=pickColor;
    localStorage.setItem('Color',pickColor)
  }
  //1. 할일 입력
  //2. 등록 버튼
  //3. 할일이 li로 추가
  //3-1.새로고침해도 목록이 사라지지 않음
  //4. 새로고침해도 존재함
  const storeTodo = () =>{
 
  }
  pushNameBtn.addEventListener('click',storeName);
  colorPicker.addEventListener('input',storeColor);
  pushTodoBtn.addEventListener('click',storeTodo);
}

setUp();

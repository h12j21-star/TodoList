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

//상태관리 코드 짜기
//localstorge 저장 , 불러오기
// 했다 안했다는 true false형태로 상태저장하기
// 할일 리스트는 추가되거나 삭제되면 상태변경하기
// 인풋창 입력후 지우기
// 상태는 setState로 바뀌게 하기
pushNameBtn.addEventListener('click',()=>{
  let userName = inpName.value
  introduceName.textContent=userName;
})

const Header = document.querySelector('.todoHeader');
const colorPicker = Header.querySelector('.inpColor');
const inpName = Header.querySelector('.inpName');
const pushNameBtn = Header.querySelector('.pushName')
const introduce = Header.querySelector('.introduce');
const introduceName = Header.querySelector('.introduce span')
const todoMain = document.querySelector('.todoMain')
const todoInput = todoMain.querySelector('.inpTodo');
const pushTodoBtn = todoMain.querySelector('.todoPush');
const todoList = todoMain.querySelector('.todoList');

//할일 저장하기
const todoListItem=JSON.parse(localStorage.getItem('todoListItem')) || [];

function setUp(){
  setStoreItem();
  render();
  setState();
  delteTodo()
}
function getStoretoDo(){
  let getTodo = JSON.parse(localStorage.getItem('todoListItem'))
  let arrTodo = getTodo ? getTodo : [];
  console.log(getTodo)
  return arrTodo;
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

if(  getStoretoDo().length!==0){
  getStoretoDo().forEach((todo)=>{
    const done = document.createElement('button');
    done.textContent="완료"
    done.className='donebtn'
    const del = document.createElement('button');
    del.textContent="삭제"
    del.className='deletebtn'
    const todoLi = document.createElement('li');
    let todoItem = todo['Todos'][0]['ToDo']
    todoLi.textContent = (JSON.stringify(todoItem)).replaceAll('"',"");
    todoLi.append(done,del);
    todoList.append(todoLi);
    
  })
  
  }

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
  const storeTodo = (e) =>{
    const todoLi = document.createElement('li');
    const done = document.createElement('button');
    done.textContent="완료"
    done.className='donebtn'
    const del = document.createElement('button');
    del.textContent="삭제"
    del.className='deletebtn'
    todoLi.textContent = todoInput.value;
    if(!todoLi.textContent){
      return;
    }
    todoInput.value="";
    todoLi.append(done,del);
    todoList.append(todoLi);
    let ObjTodo = {Todos:[{
      ToDo:todoInput.value,
      State:false
    }]}

    todoListItem.push(ObjTodo)
    localStorage.setItem('todoListItem',JSON.stringify(todoListItem))
    setState(); 
    delteTodo()
  }
  pushNameBtn.addEventListener('click',storeName);
  colorPicker.addEventListener('input',storeColor);
  pushTodoBtn.addEventListener('click',storeTodo);
}
function setState(){
  const doneBtn = document.querySelectorAll('.todoList li .donebtn');
  console.log(doneBtn)
  doneBtn.forEach((btn,index)=>{
    btn.addEventListener('click',storeState);
   
  })
}
const storeState = (e) =>{
  let targetLi = e.target.parentElement
  targetLi.classList.toggle('done')
  let todoState = todoListItem[0]['Todos'][0]['State']
  if(todoState){
    todoListItem[0]['Todos'][0]['State']=false;
  }
  else{
    todoListItem[0]['Todos'][0]['State']=true;
  }
  localStorage.setItem('todoListItem',JSON.stringify(todoListItem))
}
function delteTodo(){
  const deleteBtn = document.querySelectorAll('.todoList li .deletebtn');
  deleteBtn.forEach((btn)=>{
    btn.addEventListener('click',deletItem)
  })
}
const deletItem = (e) =>{
  let targetLi = e.target.parentElement
  targetLi.remove();
  todoListItem[0]['Todos'][0];
  console.log( todoListItem)
  console.log( todoListItem[0])
  
  localStorage.setItem('todoListItem',JSON.stringify(todoListItem))
}
setUp();

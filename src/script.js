const Header = document.querySelector('.todoHeader');
const colorPicker = Header.querySelector('.inpColor');
const inpName = Header.querySelector('.inpName');
const pushNameBtn = Header.querySelector('.pushName')
const introduce = Header.querySelector('.introduce');
const introduceName = Header.querySelector('.introduce span')
const userName = Header.querySelector('.name')
const todoMain = document.querySelector('.todoMain')
const todoInput = todoMain.querySelector('.inpTodo');
const pushTodoBtn = todoMain.querySelector('.todoPush');
const todoList = todoMain.querySelector('.todoList');

//할일 저장하기
let todoListItem=JSON.parse(localStorage.getItem('todoListItem')) || [];

function setUp(){
  //Namerender();
  Colorrender();
  ToDorender();
}

function setStoreItem(){
  localStorage.setItem('todoListItem',JSON.stringify(todoListItem));
}

function changeTodo(){
  const li = document.querySelectorAll('.todoList li')
  li.forEach((li)=>{
    li.remove();
  })
  let ObjTodo = {Todos:[{
    ToDo:todoInput.value,
    State:false
  }]}
  todoListItem.push(ObjTodo);
  setStoreItem();
  ToDorender();
  todoInput.value=""
}

//입력->저장
function ToDorender(){
  pushTodoBtn.addEventListener('click',changeTodo);
  todoListItem.forEach((todo,index)=>{
    const li = document.createElement('li');
    li.id = index 
    const done = document.createElement('button');
    done.textContent="완료"
    done.className='donebtn'
    const del = document.createElement('button');
    del.textContent="삭제"
    del.className='deletebtn'
    li.textContent = todo['Todos'][0]['ToDo'];
    li.append(done,del)
    todoList.append(li);
    Selectbtn();
    SelectDelbtn()
  })
    checkDone()
}

function checkDone(){
console.log(todoListItem)
const li = document.querySelectorAll('.totoList li')
todoListItem.forEach((item,index)=>{
  if(item['Todos'][0]['State']){
    const li = document.getElementById(`${index}`)
    li.className='done'
   }    
 })
}

function Selectbtn(){
  const statebtn = document.querySelectorAll('.donebtn');
  statebtn.forEach((btn)=>{
    btn.addEventListener('click',changeState);
 })
}
function changeState(e){  
  let targetLi = e.target.parentElement
  let state = todoListItem[targetLi.id]['Todos'][0]['State']
  
  if(state){
      targetLi.classList.remove('done')
  todoListItem[targetLi.id]['Todos'][0]={
  ToDo: todoListItem[targetLi.id]['Todos'][0]['ToDo'],
      State:false
    };   
}
  else{
    targetLi.classList.add('done')
  todoListItem[targetLi.id]['Todos'][0]={
  ToDo: todoListItem[targetLi.id]['Todos'][0]['ToDo'],
  State:true
   }
 }
  setStoreItem();
}
function SelectDelbtn(){
  const statebtn = document.querySelectorAll('.deletebtn');
  statebtn.forEach((btn)=>{
    btn.addEventListener('click',deleteToDo);
 })
}
function deleteToDo(e){
  let targetLi = e.target.parentElement
  targetLi.remove();
  todoListItem.splice(targetLi.id,1)
  setStoreItem();
}

const storeColor = (e) =>{
    let pickColor = e.target.value;
    localStorage.setItem('Color',pickColor)
    Colorrender()
  }

/*function Namerender(){
  let getUserName = localStorage.getItem('Name')
  userName.textContent = getUserName ? getUserName : '' 
  pushNameBtn.addEventListener('click',storeName);
}*/
/*const storeName = () =>{
    let userName = inpName.value;
    localStorage.setItem('Name',userName);
    inpName.classList.toggle="off"
    Namerender()
  }*/
function Colorrender(){
  let getColor = localStorage.getItem('Color');
  todoMain.style.
  backgroundColor=getColor;
  colorPicker.value=getColor;
  colorPicker.addEventListener('input',storeColor);
}

setUp();

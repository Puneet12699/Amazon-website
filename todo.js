
displayItem();

function addTodo()
{
   let InputElement = document.querySelector('#todo-Input');
   let InputDate = document.querySelector('#todo-Date');

   let todoItem = InputElement.value;
   let todoDatē= InputDate.value;

   todolist.push({item:todoItem,dueDate:todoDatē});
   InputElement.value='';
   InputDate.value='';
   displayItem();
}
function displayItem(){
  let containerElement= document.querySelector('.todo-Container');
  let newHtml = '';
  for(let i=0;i < todolist.length; i++) 
  {
    let {item,dueDate} = todolist[i];
     newHtml +=`
      <span>${item}</span>
      <span>${dueDate}</span>
      <button class="delete button";  onclick="todolist.splice(${i},1); displayItem();">Delete</button>`;
  }
  containerElement.innerHTML = newHtml;
}
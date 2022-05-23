const template = ` 
    <div class="task-name">#TASKNAME</div>
    <div class=" tags-div"></div>
    <div class=" dates-div">#CREATIONDATE</div>
    <div class="line-div"></div>
    <div class="task-card-buttons">bottoni</div>
`
fetch('https://62860d1f96bccbf32d6e2bf5.mockapi.io/todos').then(responseCallBack).then(resultCallBack).catch(manageError)

function responseCallBack(response){
    console.log(response);
    return response.json();
}

function manageError(error){
    console.log(error);
}

function resultCallBack (result) {
    console.log(result);
    const toDoList = convertArrayToTodoList(result)
    console.log(toDoList);
    toDoList.map(obj => display(obj))
}

function convertArrayToTodoList(result) {
  const arrayOfTask = result.map(obj => ToDo.fromObjToTask(obj))  
  return arrayOfTask
}

function display(task) {
    const taskContainer = document.getElementById('tasks-container')
    const div = document.createElement('div')
    div.className = 'task-card'
    const content = template.replaceAll('#TASKNAME', task.name).replaceAll('#CREATIONDATE', ToDo.getHumanDate(task.creationDate))
    div.innerHTML = content
    taskContainer.appendChild(div)
}
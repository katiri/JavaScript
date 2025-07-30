const taskForm = document.querySelector('#task-form');
const taskList = document.querySelector('#task-list');

function getTaskValue(){
    return document.querySelector('#task').value;
}

function clearTaskValue(){
    document.querySelector('#task').value = '';
}

function createLi(){
    const li = document.createElement('li');
    return li;
}

function createRemoveTaskButton(li){
    const removeTaskButton = document.createElement('button');
    // removeTaskButton.classList.add('remove-task'); // Existe outra forma de adicionar classes
    removeTaskButton.setAttribute('class', 'remove-task');
    removeTaskButton.setAttribute('title', 'Apagar tarefa'); // Serve para adicionar qualquer atributo ao elemento

    removeTaskButton.innerText = 'Apagar';
    
    li.appendChild(removeTaskButton);
}

function addTaskLi(taskValue){
    if(taskValue){
        const li = createLi();
        li.innerText = taskValue;

        createRemoveTaskButton(li);

        taskList.appendChild(li);

        clearTaskValue();

        setLocalStorageTaskList();
    }
}

taskForm.addEventListener('submit', function (e){
    e.preventDefault();
    
    const taskValue = getTaskValue();

    addTaskLi(taskValue);
});

document.addEventListener('click', function (e){
    const el = e.target;

    if(el.classList.contains('remove-task')){
        el.parentElement.remove();

        setLocalStorageTaskList();
    }
});

function setLocalStorageTaskList(){
    const tasksLi = taskList.querySelectorAll('li');
    const tasksArr = [];

    for(let taskLi of tasksLi){
        const task = taskLi.innerText.replace('Apagar', '').trim();

        tasksArr.push(task);
    }

    if(tasksArr.length > 0){
        const tasksJSON = JSON.stringify(tasksArr);
        localStorage.setItem('tasks', tasksJSON);
    }
    else{
        localStorage.removeItem('tasks');
    }
}

function setTaskList(){
    const tasksJSON = localStorage.getItem('tasks');

    if(tasksJSON){
        const tasksArr = JSON.parse(tasksJSON);

        for(let task of tasksArr){
            addTaskLi(task);
        }
    }
}
setTaskList();
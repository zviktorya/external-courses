import {defaultData} from './data.js';

export {runBoard, addCard, addNewTaskToListByKeyboard, addNewTaskToList, closeTaskListDropDown, moveToList};
function runBoard() {
    renderTaskList(data);
}

let data = JSON.parse(JSON.stringify(defaultData));

function renderTaskList(tasks) {
    let taskList = '';

    tasks.forEach(list => {
        taskList += `
            <div class="taskList" id="${list.id}">
                <div class="taskListHeader">
                    <h3>${list.title}</h3>
                    <button class="taskListMenuBtn hoverAction">
                        <img class="taskListMenuImg" src="./src/img/dots.svg" alt="task list menu">
                    </button>
                </div>
                <ul class="taskListContent">
                    ${renderTasks(list.issues)}
                </ul>
                <div class="taskListFooter">
                    <button id="addCard${list.id}" class="addCard hoverAction disabledAction" onclick="addCard(${list.id})" >+  Add card</button>
                    <div class="taskDropdown" id="taskDropdown${list.id}"></div>
                </div>
            </div>
        `;
    });

    document.getElementsByClassName('main')[0].innerHTML = taskList;
    setVisibilityForAddCardButton();
}

function setVisibilityForAddCardButton() {
    for (let i = 1; i < data.length; i++) {
        document.getElementById(`addCard${data[i].id}`).disabled = data[i - 1].issues.length === 0;
    }
}

function renderTasks(issues) {
    let issueList = '';
    issues.forEach(function (issue) {
        issueList += `
            <li tabindex="0" class="task" id="${issue.id}" title="${issue.name}">${issue.name}</li>
        `;
    });
    return issueList;
}

/*add card*/
function addCard(listId) {
    const listIndex = getListIndex(listId);
    const isBacklogList = listIndex === 0;
    const taskDropdown = document.getElementById(`taskDropdown${listId}`);
    if (isBacklogList) {
        taskDropdown.innerHTML = getNewTask();
        document.getElementById('newTask').focus();
    } else {
        taskDropdown.innerHTML = getTaskList(listIndex - 1, listIndex);
    }
}

function getNewTask() {
    return `
        <div onmouseleave="closeTaskListDropDown()">
            <input class="newTaskInput"
                onkeydown="addNewTaskToListByKeyboard(event)"
                id="newTask"
            />
            <button onclick="addNewTaskToList()" onfocusout="closeTaskListDropDown()">Add</button>
        </div>    
    `;
}

function addNewTaskToListByKeyboard(event) {
    if (event.keyCode !== 13) return;
    addNewTaskToList();
}

function addNewTaskToList() {
    const newTaskName = document.getElementById('newTask').value;
    if (!newTaskName) return;

    data[0].issues.push({
        id: Date.now(),
        name: newTaskName
    });
    renderTaskList(data);
}

function getListIndex(listId) {
    return data.findIndex(function (list) {
        return list.id === listId;
    })
}

function getTaskList(listIndexFrom, listIndexTo) {
    let taskListDropDown = '<ul class="contextMenu" onmouseleave="closeTaskListDropDown()">';
    const taskListIssues = data[listIndexFrom].issues;

    if (taskListIssues && taskListIssues.length > 0) {
        taskListIssues.forEach(function (issue, index) {
            if (index === taskListIssues.length - 1) {
                taskListDropDown += `<li tabindex="0" onfocusout="closeTaskListDropDown()" onclick="moveToList(${listIndexFrom}, ${listIndexTo}, ${issue.id})">${issue.name}</li>`;
            } else {
                taskListDropDown += `<li tabindex="0" onclick="moveToList(${listIndexFrom}, ${listIndexTo}, ${issue.id})">${issue.name}</li>`;
            }
        });
    } else {
        taskListDropDown += '<li onfocusout="closeTaskListDropDown()">There are not issues</li>';
    }
    taskListDropDown += '</ul>';

    return taskListDropDown;
}

function closeTaskListDropDown() {
    const taskDropdowns = document.getElementsByClassName('taskDropdown');

    for (let i = 0; i < taskDropdowns.length; i++) {
        taskDropdowns[i].innerHTML = '';
    }
}

function moveToList(listFrom, listTo, taskId) {
    const taskIndex = data[listFrom].issues.findIndex(function (obj) {
        return obj.id === taskId;
    });
    const task = data[listFrom].issues[taskIndex];
    if (!task) return;
    data[listTo].issues.push(task);
    data[listFrom].issues.splice(taskIndex, 1)

    renderTaskList(data);
}
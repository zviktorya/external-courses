const dropDownUserMenuElement = document.getElementById("dropDownUserMenu");
const buttonDropDownElement = document.getElementById("buttonDropDown");

buttonDropDownElement.addEventListener('click', toggleUserMenu);
buttonDropDownElement.addEventListener('blur', closeUserMenu);

function toggleUserMenu() {
    if (dropDownUserMenuElement.classList.contains('visible')) {
        closeUserMenu();
    } else {
        openUserMenu();
    }
}

function openUserMenu() {
    dropDownUserMenuElement.classList.add("visible");
    dropDownUserMenuElement.classList.remove("hidden");

    buttonDropDownElement.classList.add("arrowUp");
}

function closeUserMenu() {
    dropDownUserMenuElement.classList.add("hidden");
    dropDownUserMenuElement.classList.remove("visible");

    buttonDropDownElement.classList.remove("arrowUp");
}

/*Task list*/
let dataMock = [
    {
        id: 5000,
        title: 'Backlog',
        issues: [
            {
                id: 1588614113700,
                name: 'Sprint bugfix'
            },
            {
                id: 1588614113701,
                name: 'Login page – performance issues'
            }
        ]
    }, {
        id: 5001,
        title: 'Ready',
        issues: [
            {
                id: 1588614113702,
                name: 'Shop bug1'
            },
            {
                id: 1588614113703,
                name: 'Shop bug2'
            },
            {
                id: 1588614113704,
                name: 'Shop bug3'
            },
            {
                id: 1588614113706,
                name: 'Shop bug4'
            },
            {
                id: 1588614113707,
                name: 'Shop bug5'
            },
            {
                id: 1588614113708,
                name: 'Shop bug6'
            },
            {
                id: 1588614113709,
                name: 'Shop bug7'
            }

        ]
    }, {
        id: 5500,
        title: 'In Progress',
        issues: [
            {
                id: 1588614113710,
                name: 'Auth bugfix'
            }
        ]
    }, {
        id: 5502,
        title: 'Finished',
        issues: [
            {
                id: 1588614113711,
                name: 'Main page bugfix'
            }
        ]
    }
];

function renderTaskList(taskListMock) {
    let taskList = '';

    taskListMock.forEach(list => {
        taskList += `
            <div class="taskList" id="${list.id}">
                <div class="taskListHeader">
                    <h3>${list.title}</h3>
                    <button class="taskListMenuBtn hoverAction">
                        <img class="taskListMenuImg" src="./imgKanban/dots.svg" alt="task list menu">
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
    for (let i = 1; i < dataMock.length; i++) {
        document.getElementById(`addCard${dataMock[i].id}`).disabled = dataMock[i - 1].issues.length === 0;
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

renderTaskList(dataMock);


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
    return `<input class="newTaskInput" onkeydown="addNewTaskToList(event)" onfocusout="closeTaskListDropDown()" onmouseleave="closeTaskListDropDown()" id="newTask"/>`;
}

function addNewTaskToList(event) {
    if (event.keyCode !== 13) return;
    dataMock[0].issues.push({
        id: Date.now(),
        name: document.getElementById('newTask').value
    });
    renderTaskList(dataMock);
}

function getListIndex(listId) {
    return dataMock.findIndex(function (list) {
        return list.id === listId;
    })
}

function getTaskList(listIndexFrom, listIndexTo) {
    let taskListDropDown = '<ul onmouseleave="closeTaskListDropDown()">';
    const taskListIssues = dataMock[listIndexFrom].issues;

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
    const taskIndex = dataMock[listFrom].issues.findIndex(function (obj) {
        return obj.id === taskId;
    });
    const task = dataMock[listFrom].issues[taskIndex];
    if (!task) return;
    dataMock[listTo].issues.push(task);
    dataMock[listFrom].issues.splice(taskIndex, 1)

    renderTaskList(dataMock);
}
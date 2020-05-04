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
const dataMock = [
    {
         id: 'list1',
         title: 'Backlog',
         issues: [
             {
                 id: 'task1',
                 name: 'Sprint bugfix'
             },
             {
                 id: 'task2',
                 name: 'Login page – performance issues'
             }
         ]
    }, {
        id: 'list2',
        title: 'Ready', 
        issues: [
            {
                id: 'task3',
                name: 'Shop bug1'
            },
            {
                id: 'task4',
                name: 'Shop bug2'
            },
            {
                id: 'task5',
                name: 'Shop bug3'
            },
            {
                id: 'task6',
                name: 'Shop bug4'
            },
            {
                id: 'task7',
                name: 'Shop bug5'
            },
            {
                id: 'task8',
                name: 'Shop bug6'
            },
            {
                id: 'task9',
                name: 'Shop bug7'
            }

        ]
    }, {
        id: 'list3',
        title: 'In Progress',
        issues: [
            {
                id: 'task10',
                name: 'Auth bugfix'
            }
        ]
   }, {
        id: 'list4',
        title: 'Finished',
        issues: [
            {
                id: 'task11',
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
                    <button class="addCard hoverAction">+  Add card</button>
                </div>
            </div>
        `;
    });

    document.getElementsByClassName('main')[0].innerHTML = taskList;    
 }

 function renderTasks(issues) {
    let issueList = '';
    issues.forEach(function(issue) {
        issueList += `
            <li class="task" id="${issue.id}">${issue.name}</li>
        `;
    });
    return issueList;
 }

 renderTaskList(dataMock);
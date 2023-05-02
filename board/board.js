// tasks = [{
//     "title": 'Putzen',
//     "description": 'Alles muss sauber sein',
//     "dueDate": "2023-05-06",
//     "prio": 2,
//     "category": { name: 'Category 1', color: 0 },
//     "assignedTo": guestUser.contacts,
//     "subtasks": ['sub 1', 'sub 2', 'sub 3'],
//     "boardColumn": 'board-column-todo'
// }, {
//     "title": 'Kochen',
//     "description": 'Alles muss lecker sein',
//     "dueDate": "2023-05-06",
//     "prio": 1,
//     "category": { name: 'Category 2', color: 1 },
//     "assignedTo": guestUser.contacts,
//     "subtasks": ['sub 1', 'sub 2', 'sub 3'],
//     "boardColumn": 'board-column-todo'
// }, {
//     "title": 'Einkaufen',
//     "description": 'Alles muss da sein',
//     "dueDate": "2023-05-06",
//     "prio": 0,
//     "category": { name: 'Category 3', color: 2 },
//     "assignedTo": guestUser.contacts,
//     "subtasks": ['sub 1', 'sub 2', 'sub 3'],
//     "boardColumn": 'board-column-progress'
// }, {
//     "title": 'Ausruhen',
//     "description": 'Alles muss entspannt sein',
//     "dueDate": "2023-05-06",
//     "prio": 2,
//     "category": { name: 'Category 1', color: 0 },
//     "assignedTo": guestUser.contacts,
//     "subtasks": ['sub 1', 'sub 2', 'sub 3'],
//     "boardColumn": 'board-column-done'
// }];


/**
 * Initializes the board by loading user data, initializing header navigation and rendering the board columns.
 */
async function initBoard() {
    await loadUserData();
    setActiveUser();

    initHeaderNav();
    renderBoardColumns();
}


/**
 * This function renders the four board-columns. 
 * It calls the function {@link renderColumn} for each column.
 */
function renderBoardColumns() {
    renderColumn('board-column-todo');
    renderColumn('board-column-progress');
    renderColumn('board-column-feedback');
    renderColumn('board-column-done');
}


/**
 * This function renders a board-column given as a parameter.
 * @param {string} boardColumn - The ID of the board-column to be rendered.
 */
function renderColumn(boardColumn) {
    let tasksOfColumn = activeUser.tasks.filter(t => t.boardColumn === boardColumn);
    let container = document.getElementById(boardColumn);

    if (tasksOfColumn.length) {
        container.innerHTML = renderCards(tasksOfColumn);
    }
    else {
        container.innerHTML = renderEmptyColumn();
    }
}


/**
 * This function renders the cards for all task objects in the given array.
 * @param {array} arrayOfTasks - The array of task JSONs to render.
 */
function renderCards(arrayOfTasks) {
    let html = '';
    for (let i = 0; i < arrayOfTasks.length; i++) {
        const task = arrayOfTasks[i];
        html += renderCard(task);
    }
    return html;
}


/**
 * This function renders an empty board-column.
 */
function renderEmptyColumn() {
    return `<div class="empty-column fs-16 fw-400 ta-c">No tasks here</div>`;
}


/**
 * This function renders the card for a task object.
 * @param {json} task - The task to render.
 */
function renderCard(task) {
    let index = activeUser.tasks.indexOf(task);
    return /*html*/`
        <div id="task-${index}" class="task" draggable="true" ondragstart="startDragging(${index})" onclick="openBoardCardOverlay()">
            <div class="board-card-category fs-16 fw-400 bg-${task.category.color} mb-20">${task.category.name}</div>
            <h3 class="fs-16 fw-700 m-0 mb-10">${task.title}</h3>
            <span class="fs-16 fw-400 mb-20">${task.description}</span>
            ${renderProgressBar(task)}
            <div class="assignedTo-and-prio">
                <div class="assigned-contacts">
                    ${renderAssignedContacts(task)}
                </div>
                <img src="../img/prio-${task.prio}.svg">
            </div>
        </div>
    `;
}


function renderProgressBar(task) {
    if (task.subtasks.length) {
        return /*html*/`
            <div class="progressbar-container mb-20">
                <div class="progressbar">
                    <div class="progress" style="width:${getProgressOfSubtasks(task)}%"></div>
                </div>
                <span class="fs-12 fw-400">${getNumberOfDoneSubtasks(task)}/${task.subtasks.length} Done</span>
            </div>
        `;
    }
    else {
        return '';
    }
}


function getProgressOfSubtasks(task) {
    let percentage = (getNumberOfDoneSubtasks(task) / task.subtasks.length) * 100;
    let roundedPercentage = Math.round(percentage);
    return roundedPercentage;
}


function getNumberOfDoneSubtasks(task) {
    return 1; // TODO
}


function renderAssignedContacts(task) {
    let html = '';
    if (task.assignedTo.length <= 3) {
        for (let i = 0; i < task.assignedTo.length; i++) {
            const contact = task.assignedTo[i];
            html += `
                <div class="contact-icon contact-icon-board fs-12 fw-400 ${contact.color}">
                    ${getInitials(contact)}
                </div>
            `;
        }
    }
    else {
        html += `
            <div class="contact-icon contact-icon-board fs-12 fw-400 ${task.assignedTo[0].color}">
                ${getInitials(task.assignedTo[0])}
            </div>
            <div class="contact-icon contact-icon-board fs-12 fw-400 ${task.assignedTo[1].color}">
                ${getInitials(task.assignedTo[1])}
            </div>
            <div class="contact-icon contact-icon-board fs-12 fw-400 bg-theme">
                +${task.assignedTo.length - 2}
            </div>
        `;
    }
    return html;
}


/*--------------------------------------------------
Overlays
---------------------------------------------------*/
function openAddTaskOverlay() {
    freezeBackground('overlay-fullscreen');
    // renderAddTaskCard();
    showElement('add-task-card');
    slideInOverlay('add-task-card');
}


function closeAddTaskOverlay() {
    hideOverlay('add-task-card');
    setTimeout(() => {
        removeElement('add-task-card');
        unfreezeBackground('overlay-fullscreen');
    }, 220);
}


function openBoardCardOverlay() {
    freezeBackground('overlay-fullscreen');
    // renderBoardCardOverlay();
    showElement('board-card');
}


function closeBoardCardOverlay() {
    removeElement('board-card');
    unfreezeBackground('overlay-fullscreen');
}

tasks = [{
    "title": 'Putzen',
    "description": 'Alles muss sauber sein',
    "dueDate": "2023-05-06",
    "prio": 2,
    "category": { name: 'Category 1', color: 0 },
    "assignTo": guestUser.contacts,
    "subtasks": ['sub 1', 'sub 2', 'sub 3'],
    "boardColumn": 'board-column-todo'
}, {
    "title": 'Kochen',
    "description": 'Alles muss lecker sein',
    "dueDate": "2023-05-06",
    "prio": 1,
    "category": { name: 'Category 2', color: 1 },
    "assignTo": guestUser.contacts,
    "subtasks": ['sub 1', 'sub 2', 'sub 3'],
    "boardColumn": 'board-column-todo'
}, {
    "title": 'Einkaufen',
    "description": 'Alles muss da sein',
    "dueDate": "2023-05-06",
    "prio": 0,
    "category": { name: 'Category 3', color: 2 },
    "assignTo": guestUser.contacts,
    "subtasks": ['sub 1', 'sub 2', 'sub 3'],
    "boardColumn": 'board-column-progress'
}, {
    "title": 'Ausruhen',
    "description": 'Alles muss entspannt sein',
    "dueDate": "2023-05-06",
    "prio": 2,
    "category": { name: 'Category 1', color: 0 },
    "assignTo": guestUser.contacts,
    "subtasks": ['sub 1', 'sub 2', 'sub 3'],
    "boardColumn": 'board-column-done'
}];


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
    let tasksOfColumn = tasks.filter(t => t.boardColumn === boardColumn);
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
    let index = tasks.indexOf(task);
    return /*html*/`
        <div id="task-${index}" class="task" draggable="true" ondragstart="startDragging(${index})" onclick="openBoardCardOverlay()">
            <div class="board-card-category fs-16 fw-400 bg-${task.category.color}">${task.category.name}</div>
            <h3 class="fs-16 fw-700">${task.title}</h3>
            <span class="fs-16 fw-400">${task.description}</span>
        </div>
    `;
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

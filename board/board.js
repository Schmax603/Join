/**
 * Initializes the board by loading user data, initializing header navigation and rendering the board columns.
 */
async function initBoard() {
    await loadUserData();
    setActiveUser();

    await initHeaderNav();
    activateNavSection('nav-board');
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
    return `<div class="empty-column cursor-d fs-16 fw-400 ta-c">No tasks here</div>`;
}


/**
 * This function renders the card for a task object.
 * @param {json} task - The task to render.
 */
function renderCard(task) {
    let index = activeUser.tasks.indexOf(task);
    return /*html*/`
        <div id="task-${index}" class="task" draggable="true" ondragstart="startDragging(${index})" onclick="openBoardCardOverlay(${index})">
            <div class="task-card-category fs-16 fw-400 bg-${task.category.color} mb-20">${task.category.name}</div>
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
function openBoardCardOverlay(taskIndex) {
    let task = activeUser.tasks[taskIndex];
    freezeBackground('overlay-fullscreen');
    renderBoardCardOverlay(task);
    showElement('board-card');
}


function closeBoardCardOverlay() {
    removeElement('board-card');
    removeElement('board-card-edit');
    unfreezeBackground('overlay-fullscreen');
    renderBoardColumns();
}


function renderBoardCardOverlay(task) {
    document.getElementById('category').innerHTML = task.category.name;
    document.getElementById('category').classList.add(`bg-${task.category.color}`);
    document.getElementById('title').innerHTML = task.title;
    document.getElementById('description').innerHTML = task.description;
    document.getElementById('dueDate').innerHTML = task.dueDate;
    document.getElementById('prio-container-board').classList = `prio-container-board bg-${getPriorityAsString(task.prio).toLowerCase()} ml-25`;
    document.getElementById('priority').innerHTML = getPriorityAsString(task.prio);
    document.getElementById('priority-icon').src = `../img/prio-${task.prio}_white.svg`;
    document.getElementById('assignedTo').innerHTML = renderAssignedContactsForOverlay(task);
    setBoardCardButtons(task);
}


function getPriorityAsString(prioAsNumber) {
    switch (prioAsNumber) {
        case 0:
            return 'Low';
        case 1:
            return 'Medium';
        case 2:
            return 'Urgent';
        default:
            return 'No priority defined';
    }
}


function renderAssignedContactsForOverlay(task) {
    let html = '';
    for (let i = 0; i < task.assignedTo.length; i++) {
        const contact = task.assignedTo[i];
        html += `
            <div class="assigned-contact">
                <div class="contact-icon contact-overlay-icon-board fs-16 fw-400 ${contact.color}">
                    ${getInitials(contact)}
                </div>
                <span class="fs-21 fw-400">${contact.name}</span>
            </div>
        `;
    }
    return html;
}


function setBoardCardButtons(task) {
    let index = activeUser.tasks.indexOf(task);
    document.getElementById('board-card-btn-edit').onclick = () => {
        openBoardCardEditing(index);
    };
    document.getElementById('board-card-btn-delete').onclick = () => {
        deleteTask(index);
        closeBoardCardOverlay();
        renderBoardColumns();
        saveUserData();
    };
}


function openBoardCardEditing(taskIndex) {
    removeElement('board-card');
    showElement('board-card-edit');
    renderBoardCardEditing(taskIndex);
}


function renderBoardCardEditing(taskIndex) {
    let task = activeUser.tasks[taskIndex];
    document.getElementById('title-edit-input').value = task.title;
    document.getElementById('description-edit-input').value = task.description;
    document.getElementById('dueDate-edit-input').value = task.dueDate;
    activatePrioButton(task.prio);
    // todo: assigned contacts
    renderAssignedContactsForEditing(task);

    setEditTaskSubmitButton(taskIndex);
}


function renderAssignedContactsForEditing(task) {
    let container = document.getElementById('assignedTo-icons');
    container.innerHTML = '';
    for (let i = 0; i < task.assignedTo.length; i++) {
        const contact = task.assignedTo[i];
        container.innerHTML += `
            <div class="contact-icon contact-icon-board fs-12 fw-400 ${contact.color}">
                ${getInitials(contact)}
            </div>
        `;
    }
}


function setEditTaskSubmitButton(taskIndex) {
    document.getElementById('board-card-edit').onsubmit = () => {
        let task = activeUser.tasks[taskIndex];
        saveEditedTask(task);
        removeElement('board-card-edit');
        renderBoardCardOverlay(task);
        showElement('board-card');
        saveUserData();
        return false;
    };
}


function saveEditedTask(task) {
    task.title = document.getElementById('title-edit-input').value;
    task.description = document.getElementById('description-edit-input').value;
    task.dueDate = document.getElementById('dueDate-edit-input').value;
    task.prio = getPrioViaActiveButton();
    // todo: assigned contacts
}


function deleteTask(taskIndex) {
    activeUser.tasks.splice(taskIndex, 1);
}


function activatePrioButton(prioAsNumber) {
    document.getElementById('edit-prio-btn-urgent').classList.remove('active');
    document.getElementById('edit-prio-btn-medium').classList.remove('active');
    document.getElementById('edit-prio-btn-low').classList.remove('active');
    document.getElementById(`edit-prio-btn-${getPriorityAsString(prioAsNumber).toLowerCase()}`).classList.add('active');
}


function getPrioViaActiveButton() {
    if (document.getElementById('edit-prio-btn-urgent').classList.contains('active')) return 2;
    if (document.getElementById('edit-prio-btn-medium').classList.contains('active')) return 1;
    if (document.getElementById('edit-prio-btn-low').classList.contains('active')) return 0;
}

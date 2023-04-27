function openAddTaskOverlay() {
    freezeBackground('overlay-fullscreen');
    // renderAddTaskCard();
    showElement('add-task-card');
    slideInOverlay('add-task-card');
}


function closeAddTaskOverlay() {
    hideOverlay('add-task-card');
    setTimeout(() => {
            unfreezeBackground('overlay-fullscreen');
    }, 220);
}


function freezeBackground(id) {
    showElement(id);
    document.getElementById('body').classList.add('no-scrolling');
}


function unfreezeBackground(id) {
    removeElement(id);
    document.getElementById('body').classList.remove('no-scrolling');
}


function slideInOverlay(id) {
    setTimeout(() => {
        showOverlay(id);
    }, 100);
}


/*--------------------------------------------------
Drag and Drop
---------------------------------------------------*/
tasks = [{
    'id': 0,
    'title': 'Putzen',
    'category': 'board-column-todo'
}, {
    'id': 1,
    'title': 'Kochen',
    'category': 'board-column-todo'
}, {
    'id': 2,
    'title': 'Einkaufen',
    'category': 'board-column-todo'
}];

let currentDraggedElement;


/**
 * This function updates the HTML container for Task categories (board-columns). 
 * It calls the function {@link updateDragAndDropHTMLForCategory} twice.
 */
function updateDragAndDropHTML() {
    updateDragAndDropHTMLForCategory('board-column-todo');
    updateDragAndDropHTMLForCategory('board-column-progress');
    updateDragAndDropHTMLForCategory('board-column-feedback');
    updateDragAndDropHTMLForCategory('board-column-done');
}


/**
 * This function updates the HTML container for a Task category given as a parameter.
 * @param {string} category - The category to be updated.
 */
function updateDragAndDropHTMLForCategory(category) {
    let tasksOfCategory = tasks.filter(t => t.category === category);

    document.getElementById(category).innerHTML = '';

    for (let i = 0; i < tasksOfCategory.length; i++) {
        const task = tasksOfCategory[i];
        document.getElementById(category).innerHTML += generateCardHTML(task);
    }
}


/**
 * This function determines the Task element that is currently dragged.
 * @param {number} id - The ID of the dragged task.
 */
function startDragging(id) {
    currentDraggedElement = id;
}


/**
 * This function renders a Task element.
 * @param {json} task - The task to render.
 */
function generateCardHTML(task) {
    return `<div class="task" draggable="true" ondragstart="startDragging(${task.id})">${task.title}</div>`;
}


/**
 * This function enables dropping of an element to the category over which it is dragged.
 */
function allowDrop(event) {
    event.preventDefault();
}

/**
 * This function changes the category of a Task element and [updates the category containers]{@link updateDragAndDropHTML}.
 * @param {string} category - The target category.
 */
function moveTo(category) {
    tasks[currentDraggedElement].category = category; 
    updateDragAndDropHTML();
    removeHighlight(category);
}


/**
 * This function highlights a category container when an element is dragged over, if the dragged element is not contained.
 * @param {string} category - The category to be highlighted.
 */
function highlight(category) {
    if (tasks[currentDraggedElement].category !== category)
        document.getElementById(category).classList.add('drag-area-highlight');
}


/**
 * This function removes the highlight effect of a category container.
 * @param {string} category - The category to be unhighlighted.
 */
function removeHighlight(category) {
    document.getElementById(category).classList.remove('drag-area-highlight');
}


/*--------------------------------------------------
Show / Hide
---------------------------------------------------*/
function showElement(id) {
    document.getElementById(id).classList.remove('d-none');
    document.getElementById(id).classList.remove('hidden');
}


function hideElement(id) {
    document.getElementById(id).classList.add('hidden');
}


function removeElement(id) {
    document.getElementById(id).classList.add('d-none');
}


function showOverlay(id) {
    document.getElementById(id).classList.add('show-overlay');
}


function hideOverlay(id) {
    document.getElementById(id).classList.remove('show-overlay');
}


function doNotClose(event) {
    event.stopPropagation();
}


function clearElement(id) {
    document.getElementById(id).innerHTML = '';
}
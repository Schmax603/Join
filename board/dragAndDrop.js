/*--------------------------------------------------
Drag and Drop
---------------------------------------------------*/
tasks = [{
    'title': 'Putzen',
    'description': 'Alles muss sauber sein',
    'category': 'board-column-todo'
}, {
    'title': 'Kochen',
    'description': 'Alles muss lecker sein',
    'category': 'board-column-todo'
}, {
    'title': 'Einkaufen',
    'description': 'Alles muss da sein',
    'category': 'board-column-progress'
}, {
    'title': 'Ausruhen',
    'description': 'Alles muss entspannt sein',
    'category': 'board-column-done'
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
    let container = document.getElementById(category);

    if (tasksOfCategory.length) {
        container.innerHTML = renderCards(tasksOfCategory);
    }
    else {
        container.innerHTML = renderEmptyCategory();
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
 * This function renders an empty category (board-column).
 */
function renderEmptyCategory() {
    return `<div class="empty-column fs-16 fw-400 ta-c">No tasks in this category</div>`;
}


/**
 * This function renders the card for a task object.
 * @param {json} task - The task to render.
 */
function renderCard(task) {
    let index = tasks.indexOf(task);
    return `
        <div class="task" draggable="true" ondragstart="startDragging(${index})">
            <h3>${task.title}</h3>
            <span class="ta-c">${task.description}</span>
        </div>
    `;
}


/**
 * This function determines the Task element that is currently dragged.
 * @param {number} index - The index of the dragged task.
 */
function startDragging(index) {
    currentDraggedElement = index;
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
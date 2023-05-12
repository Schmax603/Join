/*--------------------------------------------------
Drag and Drop
---------------------------------------------------*/
let currentDraggedElement;


/**
 * This function determines the Task element that is currently dragged.
 * @param {number} index - The index of the dragged task.
 */
function startDragging(index) {
    currentDraggedElement = index;
}


/**
 * This function enables dropping of an element to the board-column over which it is dragged.
 */
function allowDrop(event) {
    event.preventDefault();
}


/**
 * This function changes the board-column of a task element and [updates the column containers]{@link renderBoardColumns}.
 * @param {string} boardColumn - The target column.
 */
async function moveTo(boardColumn) {
    activeUser.tasks[currentDraggedElement].boardColumn = boardColumn;
    renderBoardColumns();
    removeHighlight(boardColumn);
    saveUserData();
}


/**
 * This function highlights a board-column container when an element is dragged over, if the dragged element is not contained.
 * @param {string} boardColumn - The column to be highlighted.
 */
function highlight(boardColumn) {
    if (activeUser.tasks[currentDraggedElement].boardColumn !== boardColumn)
        document.getElementById(boardColumn).classList.add('drag-area-highlight');
}


/**
 * This function removes the highlight effect of a board-column container.
 * @param {string} boardColumn - The column to be unhighlighted.
 */
function removeHighlight(boardColumn) {
    document.getElementById(boardColumn).classList.remove('drag-area-highlight');
}


/*--------------------------------------------------
Drag and Drop Mobile
---------------------------------------------------*/
/**
 * Sets up EventListeners to enable drag and drop on mobile devices via touch.
 */
function enableMobileDragAndDrop() {
    activeUser.tasks.forEach(task => {
        let taskIndex = activeUser.tasks.indexOf(task);

        // find the element that you want to drag.
        let taskElement = document.getElementById(`task-${taskIndex}`);
        let isDragging = false;
        let drag;

        /* listen to the touchstart event,
        and mark the taskElement as being dragged. */
        taskElement.addEventListener('touchstart', function (e) {
            drag = setTimeout(() => {
                isDragging = true;
                startDragging(taskIndex)
                taskElement.classList.add('task-ondrag');

                // grab the location of touch
                let touchLocation = e.targetTouches[0];
                // assign taskElement new coordinates based on the touch.
                taskElement.style.left = touchLocation.pageX - 0.5 * getTaskWidthOnDrag() + 'px';
                taskElement.style.top = touchLocation.pageY - 100 + 'px';
            }, 250);

        });

        /* listen to the touchmove event,
        every time it fires, grab the location
        of touch and assign it to taskElement */
        taskElement.addEventListener('touchmove', function (e) {
            if (isDragging) {
                taskElement.classList.add('task-ondrag');

                // prevent scrolling on the page while dragging
                e.preventDefault();

                // grab the location of touch
                let touchLocation = e.targetTouches[0];
                // assign taskElement new coordinates based on the touch.
                taskElement.style.left = touchLocation.pageX - 0.5 * getTaskWidthOnDrag() + 'px';
                taskElement.style.top = touchLocation.pageY - 100 + 'px';

                let left = parseInt(taskElement.style.left) + 0.5 * getTaskWidthOnDrag();
                let top = parseInt(taskElement.style.top) + 100;

                let dropTarget = findDropTarget(left, top);
                if (dropTarget) {
                    let boardColumn = dropTarget.id;
                    highlight(boardColumn);
                    taskElement.classList.add('task-ondrag-over-droptarget');
                }
                else {
                    removeHighlight('board-column-todo');
                    removeHighlight('board-column-progress');
                    removeHighlight('board-column-feedback');
                    removeHighlight('board-column-done');
                    taskElement.classList.remove('task-ondrag-over-droptarget');
                }
            }
            else {
                clearTimeout(drag);
            }
        }, { passive: false });

        /* record the position of the touch
        when released using touchend event.
        This will be the drop position. */

        taskElement.addEventListener('touchend', async function (e) {
            // console.log('touchend');
            if (isDragging) {
                isDragging = false;

                // current taskElement position.
                let left = parseInt(taskElement.style.left) + 0.5 * getTaskWidthOnDrag();
                let top = parseInt(taskElement.style.top) + 100;

                // check if taskElement is over a drop target
                let dropTarget = findDropTarget(left, top);

                if (dropTarget) {
                    // drop element on boardColumn
                    let boardColumn = dropTarget.id;
                    await moveTo(boardColumn);
                    // console.log('Dropped on ' + boardColumn);
                }
                else {
                    // taskElement.classList.remove('task-ondragstart');
                    taskElement.classList.remove('task-ondrag');
                    taskElement.classList.remove('task-ondrag-over-droptarget'); // in if-case above: this reset is done automatically
                }
            }
            else {
                clearTimeout(drag);
            }
        });
    });
}


/** 
 * Helper function to find a drop target element under the given coordinates
 * @param {number} x - The given x coordinate.
 * @param {number} y - The given y coordinate.
 * @returns {HTMLElement} An element that contains the class 'drop-target-mobile' if one exists.
 */
function findDropTarget(x, y) {
    let elements = document.elementsFromPoint(x, y);
    for (let i = 0; i < elements.length; i++) {
        if (elements[i].classList.contains('drop-target-mobile')) {
            return elements[i];
        }
    }
    return null;
}


/** 
 * Helper function to get the width of a currently dragged task card.
 * @returns {number} The calulated width.
 */
function getTaskWidthOnDrag() {
    let widthInPercent = 16;
    if (screenWidthIsAtMost('900px')) {
        widthInPercent = 80;
    }
    else if (screenWidthIsAtMost('1100px')) {
        widthInPercent = 45;
    }
    return Math.round(window.innerWidth * widthInPercent / 100);
}
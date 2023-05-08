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
// (function () {
window.onload = async function () {
    await initBoard();

    // find the element that you want to drag.
    let taskElement = document.getElementById(`task-0`);
    let isDragging = false;

    /* listen to the touchstart event,
    and mark the taskElement as being dragged. */
    taskElement.addEventListener('touchstart', function (e) {
        isDragging = true;
        startDragging(0)
        this.style.position = 'absolute';
        this.style.width = '20%';
    });

    /* listen to the touchmove event,
    every time it fires, grab the location
    of touch and assign it to taskElement */
    taskElement.addEventListener('touchmove', function (e) {
        if (isDragging) {
            // prevent scrolling on the page while dragging
            e.preventDefault();

            // grab the location of touch
            let touchLocation = e.targetTouches[0];

            // assign taskElement new coordinates based on the touch.
            taskElement.style.left = touchLocation.pageX - 50 + 'px';
            taskElement.style.top = touchLocation.pageY - 50 + 'px';

            let left = parseInt(taskElement.style.left);
            let top = parseInt(taskElement.style.top);
            let dropTarget = findDropTarget(left, top);
            if (dropTarget) {
                let boardColumn = dropTarget.id;
                highlight(boardColumn);
            }
            else {
                removeHighlight('board-column-todo');
                removeHighlight('board-column-progress');
                removeHighlight('board-column-feedback');
                removeHighlight('board-column-done');
            }
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
            let left = parseInt(taskElement.style.left);
            let top = parseInt(taskElement.style.top);

            // check if taskElement is over a drop target
            let dropTarget = findDropTarget(left, top);

            if (dropTarget) {
                // do something with the dropped element here
                let boardColumn = dropTarget.id;
                await moveTo(boardColumn);
                console.log('Dropped on ' + boardColumn);

            }
            taskElement.style.position = 'static';
            taskElement.style.width = 'unset';
            taskElement.style.background = 'red';
        }
    });

    // helper function to find the drop target element under the given coordinates
    function findDropTarget(x, y) {
        let elements = document.elementsFromPoint(x, y);
        for (let i = 0; i < elements.length; i++) {
            if (elements[i].classList.contains('drop-target-mobile')) {
                return elements[i];
            }
        }
        return null;
    }
};
// })();
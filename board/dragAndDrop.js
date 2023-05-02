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
function moveTo(boardColumn) {
    activeUser.tasks[currentDraggedElement].boardColumn = boardColumn;
    renderBoardColumns();
    removeHighlight(boardColumn);
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
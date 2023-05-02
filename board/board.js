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
    // renderBoardCard();
    showElement('board-card');
}


function closeBoardCardOverlay() {
    removeElement('board-card');
    unfreezeBackground('overlay-fullscreen');
}

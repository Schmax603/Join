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
/*-------------------------------------
Search
--------------------------------------*/
function search() {
    let search = document.getElementById('search-input').value;
    showTasks();
    removeNonrelevantTasks(search);
}


function removeNonrelevantTasks(search) {
    const tasksToRemove = getTasksToRemoveForSearch(search);

    for (let i = 0; i < tasksToRemove.length; i++) {
        const index = tasks.indexOf(tasksToRemove[i]);
        removeElement(`task-${index}`);
    }
}


function getTasksToRemoveForSearch(searchString) {
    let search = searchString.toLowerCase();
    return tasks.filter(obj =>
        !obj.title.toLowerCase().includes(search) &&
        !obj.description.toLowerCase().includes(search)
    )
}


function closeSearch() {
    document.getElementById('search-input').value = '';
    showTasks();
}


function showTasks() {
    for (let i = 0; i < tasks.length; i++) {
        showElement(`task-${i}`);
    }
}
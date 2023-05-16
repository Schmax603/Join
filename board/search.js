/**
 * Function to search tasks by a given string and remove non-relevant tasks.
 * @function
 * @returns {undefined} This function does not return a value.
 */
function search() {
    let search = document.getElementById('search-input').value;
    showTasks();
    removeNonrelevantTasks(search);
}


/**
 * Function to remove tasks that do not contain the search string in their title or description.
 * @function
 * @param {string} search - The search string to match tasks against.
 * @returns {undefined} This function does not return a value.
 */
function removeNonrelevantTasks(search) {
    const tasksToRemove = getTasksToRemoveForSearch(search);

    for (let i = 0; i < tasksToRemove.length; i++) {
        const index = activeUser.tasks.indexOf(tasksToRemove[i]);
        removeElement(`task-${index}`);
    }
}


/**
 * Function to get the list of tasks that do not match the search string in their title or description.
 * @function
 * @param {string} searchString - The search string to match tasks against.
 * @returns {Array} An array of task objects that do not match the search string in their title or description.
 */
function getTasksToRemoveForSearch(searchString) {
    let search = searchString.toLowerCase();
    return activeUser.tasks.filter(obj =>
        !obj.title.toLowerCase().includes(search) &&
        !obj.description.toLowerCase().includes(search)
    )
}


/**
 * Function to clear the search input field and show all tasks.
 * @function
 * @returns {undefined} This function does not return a value.
 */
function closeSearch() {
    document.getElementById('search-input').value = '';
    showTasks();
}


/**
 * Function to show all tasks.
 * @function
 * @returns {undefined} This function does not return a value.
 */
function showTasks() {
    for (let i = 0; i < activeUser.tasks.length; i++) {
        showElement(`task-${i}`);
    }
}

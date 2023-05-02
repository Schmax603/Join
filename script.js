/*--------------------------------------------------
Global Constants and Variables
---------------------------------------------------*/
const NUMBER_OF_BG_COLORS = 17; // see bgColors.css
let activeUser;


/*--------------------------------------------------
Support Functions
---------------------------------------------------*/
/**
 * Function to clear the inner HTML content of an element with a given ID.
 * @param {string} id - The ID of the element to clear.
 */
function clearElement(id) {
    document.getElementById(id).innerHTML = '';
}


/**
 * Function to scroll to an element with a given ID.
 * @param {string} id - The ID of the element to scroll to.
 */
function scrollToID(id) {
    location.hash = `#${id}`;
}


/**
 * Function to get a random background-color class out of NUMBER_OF_BG_COLORS classes (defined in bgColors.css).
 * @returns {string} A string representing the background-color class.
 */
function getRandomColorClass() {
    return `bg-${getRandomInt(NUMBER_OF_BG_COLORS)}`;
}


/**
 * Function to get a random integer between 0 and a given maximum value.
 * @param {number} max - The maximum value for the random integer.
 * @returns {number} A random integer between 0 and the given maximum value.
 */
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}


/*--------------------------------------------------
Show / Hide
---------------------------------------------------*/
/**
 * Function to show an element with a given ID by removing the 'd-none' and 'hidden' classes.
 * @param {string} id - The ID of the element to show.
 */
function showElement(id) {
    document.getElementById(id).classList.remove('d-none');
    document.getElementById(id).classList.remove('hidden');
}

/**
 * Function to hide an element with a given ID by adding the 'hidden' class.
 * @param {string} id - The ID of the element to hide.
 */
function hideElement(id) {
    document.getElementById(id).classList.add('hidden');
}

/**
 * Function to remove an element with a given ID by adding the 'd-none' class.
 * @param {string} id - The ID of the element to remove.
 */
function removeElement(id) {
    document.getElementById(id).classList.add('d-none');
}

/**
 * Function to show an overlay with a given ID by adding the 'show-overlay' class.
 *  @param {string} id - The ID of the overlay to show.
 */
function showOverlay(id) {
    document.getElementById(id).classList.add('show-overlay');
}


/**
 * Function to hide an overlay with a given ID by removing the 'show-overlay' class.
 * @param {string} id - The ID of the overlay to hide.
 */
function hideOverlay(id) {
    document.getElementById(id).classList.remove('show-overlay');
}


/**
 * Function to show an overlay with a given ID for a short time and then hide it.
 * @param {string} id - The ID of the overlay to show and hide.
 */
function showThenHideOverlay(id) {
    setTimeout(() => {
        showOverlay(id);
    }, 500);
    setTimeout(() => {
        hideOverlay(id);
    }, 2500);
}


/**
* Slides in an overlay element with the specified ID.
* @param {string} id - The ID of the overlay element to slide in.
*/
function slideInOverlay(id) {
    setTimeout(() => {
        showOverlay(id);
    }, 100);
}


/**
* Freezes the background scrolling and shows an overlay element with the specified ID.
* @param {string} id - The ID of the overlay element to show.
*/
function freezeBackground(id) {
    showElement(id);
    document.getElementById('body').classList.add('no-scrolling');
}


/**
* Unfreezes the background scrolling and hides an overlay element with the specified ID.
* @param {string} id - The ID of the overlay element to hide.
*/
function unfreezeBackground(id) {
    removeElement(id);
    document.getElementById('body').classList.remove('no-scrolling');
}


/**
* Stops the propagation of an event to its parent elements.
* @param {Event} event The event object.
*/
function doNotClose(event) {
    event.stopPropagation();
}


/*--------------------------------------------------
User Data
---------------------------------------------------*/
/**
* Sets the active user to guest or current signed user.
*/
function setActiveUser() {
    activeUser = loggedInAsGuest() ? guestUser : users[currentUser];
}


/**
* Saves the user data to local storage (guest) or backend (signed user).
*/
async function saveUserData() {
    if (loggedInAsGuest()) {
        saveGuestUserToLocalStorage();
    }
    else {
        await setItem('users', JSON.stringify(users));
    }
}


/**
* Loads the user data from local storage (guest) or backend (signed user).
*/
async function loadUserData() {
    await loadUsers();

    if (loggedInAsGuest()) {
        loadGuestUserFromLocalStorage();
    }
}


/**
* Checks if the user is logged in as a guest.
* @returns {boolean} True if the user is logged in as a guest, false otherwise.
*/
function loggedInAsGuest() {
    return currentUser.length === 0;
}


/**
* Saves the guest user data to local storage.
*/
function saveGuestUserToLocalStorage() {
    let guestUserAsText = JSON.stringify(guestUser);
    localStorage.setItem('guestUser', guestUserAsText);
}


/**
* Loads the guest user data from local storage.
*/
function loadGuestUserFromLocalStorage() {
    let guestUserAsText = localStorage.getItem('guestUser');

    if (guestUserAsText) {
        guestUser = JSON.parse(guestUserAsText);
    }
}
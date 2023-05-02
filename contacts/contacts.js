let activeUserContacts;
let contactInfoContainerIsActive = false;
let activeContactIndex;


/**
 * Initializes contacts by loading user data, initializing header navigation and rendering the contact list.
 */
async function initContacts() {
    await loadUserData();
    setActiveUser();

    initHeaderNav();
    changeContentOnWindowSize();

    activeUserContacts = activeUser.contacts;
    renderContactList();
}


/*--------------------------------------------------
Responsiveness
---------------------------------------------------*/
/**
 * Changes content displayed based on the current window size.
 */
function changeContentOnWindowSize() {
    if (screenWidthIsAtMost('1200px')) {
        if (contactInfoContainerIsActive) {
            removeElement('contacts-list-container');
            showElement('contacts-info-container');
        } else {
            showElement('contacts-list-container');
            removeElement('contacts-info-container');
        }
    }
    else {
        showElement('contacts-list-container');
        showElement('contacts-info-container');
    }
}

window.onresize = changeContentOnWindowSize;


/**
 * Checks if the current screen width is at most a specified width.
 * @param {string} screenWidth - The maximum screen width to check against.
 * @returns {boolean} Whether or not the current screen width is at most the specified width.
 */
function screenWidthIsAtMost(screenWidth) {
    return window.matchMedia(`(max-width: ${screenWidth})`).matches;
}
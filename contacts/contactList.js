/**
 * Renders the list of contacts on the page, grouped by initial letter.
 * Contacts are sorted alphabetically by name.
 */
function renderContactList() {
    sortContactsByName();
    clearElement('contacts-list');

    getInitialLetters().forEach(letter => {
        renderLetterContacts(letter);
    });
}


/**
 * Renders the contacts for a group with the given initial letter.
 * @param {string} letter - The initial letter of the group.
 */
function renderLetterContacts(letter) {
    renderLetterHeader(letter);
    activUserContacts.forEach(contact => {
        if (getInitialLetter(contact) === letter)
            renderContact(contact);
    });
}


/**
 * Renders the header for a group of contacts with the given initial letter.
 * @param {string} letter - The initial letter of the group.
 */
function renderLetterHeader(letter) {
    const container = document.getElementById('contacts-list');
    container.innerHTML += /*html*/`
        <div class="letter-container" id="letter-container-${letter}">
            <div class="letter-header fs-21 fw-400">${letter}</div>
            <div class="letter-header-bottom-border"></div>
        </div>
    `;
}


/**
 * Renders a single contact.
 * @param {object} contact - The contact to render.
 */
function renderContact(contact) {
    const letter = getInitialLetter(contact);
    const contactIndex = activUserContacts.indexOf(contact);
    const container = document.getElementById(`letter-container-${letter}`);
    container.innerHTML += /*html*/`
        <div id="contact-${contactIndex}" class="contact" onclick="showContactDetails(${contactIndex})">
            <div class="contact-icon contact-list-icon fs-12 fw-400 ${contact.color}">
                ${getInitials(contact)}
            </div>
            <div class="contact-name-email">
                <span class="contact-name fs-21 fw-400">${contact.name}</span>
                <span class="contact-email fs-16 fw-400">${contact.email}</span>
            </div>
        </div>
    `;
}


/**
 * Gets the initial letters of all the active user's contacts and returns them
 * in alphabetical order.
 * @returns {string[]} An array of initial letters.
 */
function getInitialLetters() {
    const initialLetters = [];
    activUserContacts.forEach(contact => {
        const initialLetter = getInitialLetter(contact);
        if (!initialLetters.includes(initialLetter))
            initialLetters.push(initialLetter);
    });
    return initialLetters.sort();
}


/**
 * Gets the initial letter of a contact's name.
 * @param {object} contact - The contact whose initial letter to get.
 * @returns {string} The initial letter of the contact's name.
 */
function getInitialLetter(contact) {
    return contact.name.charAt(0);
}


/**
 * Gets the initials of a contact's name.
 * @param {object} contact - The contact whose initials to get.
 * @returns {string} The initials of the contact's name.
 */
function getInitials(contact) {
    let fullName = contact.name;

    if (fullName.includes(' ')) {
        let firstName = fullName.substring(0, fullName.indexOf(' '));
        let lastName = fullName.substring(fullName.indexOf(' ') + 1);
        return firstName.charAt(0) + lastName.charAt(0);
    }
    else {
        return fullName.charAt(0);
    }
}


/**
 * Sorts the `activUserContacts` array of contacts by name, in alphabetical order.
 *
 * @returns {Array} The sorted `activUserContacts` array.
 */
function sortContactsByName() {
    return activUserContacts.sort((a, b) => {
        if (a.name < b.name) {
            return -1;
        }
    });
}
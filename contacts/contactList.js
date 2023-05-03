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
    activeUserContacts.forEach(contact => {
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
            <div class="letter-header cursor-d fs-21 fw-400">${letter}</div>
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
    const contactIndex = activeUserContacts.indexOf(contact);
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
 * Sorts the `activeUserContacts` array of contacts by name, in alphabetical order.
 *
 * @returns {Array} The sorted `activeUserContacts` array.
 */
function sortContactsByName() {
    return activeUserContacts.sort((a, b) => {
        if (a.name < b.name) {
            return -1;
        }
    });
}
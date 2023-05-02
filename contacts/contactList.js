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


function renderLetterContacts(letter) {
    renderLetterHeader(letter);
    activUserContacts.forEach(contact => {
        if (getInitialLetter(contact) === letter)
            renderContact(contact);
    });
}


function renderLetterHeader(letter) {
    const container = document.getElementById('contacts-list');
    container.innerHTML += /*html*/`
        <div class="letter-container" id="letter-container-${letter}">
            <div class="letter-header fs-21 fw-400">${letter}</div>
            <div class="letter-header-bottom-border"></div>
        </div>
    `;
}


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


function getInitialLetters() {
    const initialLetters = [];
    activUserContacts.forEach(contact => {
        const initialLetter = getInitialLetter(contact);
        if (!initialLetters.includes(initialLetter))
            initialLetters.push(initialLetter);
    });
    return initialLetters.sort();
}


function getInitialLetter(contact) {
    return contact.name.charAt(0);
}


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


function sortContactsByName() {
    return activUserContacts.sort((a, b) => {
        if (a.name < b.name) {
            return -1;
        }
    });
}
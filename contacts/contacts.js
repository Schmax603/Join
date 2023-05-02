let activUserContacts;
let contactInfoContainerIsActive = false;
let activeContactIndex;

async function initContacts() {
    await loadUserData();

    initHeaderNav();
    changeContentOnWindowSize();

    activUserContacts = loggedInAsGuest() ? guestUser.contacts : users[currentUser].contacts;
    renderContactList();
}


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


function showContactDetails(contactIndex, justEdited = false) {
    if (contactIsActive(contactIndex) && !justEdited)
        return;

    activateContact(contactIndex);
    contactInfoContainerIsActive = true;

    setTimeout(() => {
        const contact = activUserContacts[contactIndex];
        if (screenWidthIsAtMost('1200px')) {
            showElement('contacts-info-container');
            removeElement('contacts-list-container');
        }
        renderContactDetails(contact);
        setOpenEditContact(contact);
        showOverlay('contact-details-overlay');
    }, 220);
}


function activateContact(contactIndex) {
    activeContactIndex = contactIndex;
    activUserContacts.forEach(c => {
        document.getElementById(`contact-${activUserContacts.indexOf(c)}`).classList.remove('contact-active');
    });

    if (!screenWidthIsAtMost('1200px')) {
        document.getElementById(`contact-${contactIndex}`).classList.add('contact-active');
    }
}


function deactivateContact() {
    activeContactIndex = undefined;
    activUserContacts.forEach(c => {
        document.getElementById(`contact-${activUserContacts.indexOf(c)}`).classList.remove('contact-active');
    });
}


function getActiveContact() {
    return activUserContacts[activeContactIndex];
}


function contactIsActive(contactIndex) {
    return contactIndex === activeContactIndex;
}


function renderContactDetails(contact) {
    renderContactDetailsIcon(contact);
    renderContactDetailsName(contact);
    renderContactDetailsEmail(contact);
    renderContactDetailsPhone(contact);
}


function renderContactDetailsIcon(contact) {
    const iconElement = document.getElementById('contact-details-icon');
    iconElement.classList = `contact-icon contact-overlay-icon fs-47 fw-500 ${contact.color}`;
    iconElement.innerHTML = getInitials(contact);
}


function renderContactDetailsName(contact) {
    const nameElement = document.getElementById('contact-details-name');
    nameElement.innerHTML = contact.name;
}


function renderContactDetailsEmail(contact) {
    const emailElement = document.getElementById('contact-details-email');
    emailElement.innerHTML = `
        <b>Email</b>
        <a href="mailto:${contact.email}">${contact.email}</a>
    `;
}


function renderContactDetailsPhone(contact) {
    const phoneElement = document.getElementById('contact-details-phone');
    phoneElement.innerHTML = `
        <b>Phone</b>
        <a href="tel:${contact.phone}">${contact.phone}</a>
    `;
}


function setOpenEditContact(contact) {
    document.getElementById('contact-details-edit').onclick = () => {
        openEditContactOverlay(contact);
    };
    document.getElementById('contact-details-edit-mobile').onclick = () => {
        openEditContactOverlay(contact);
    };
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


function closeContactInfo() {
    contactInfoContainerIsActive = false;
    deactivateContact();
    removeElement('contacts-info-container');
    showElement('contacts-list-container');
}


/*--------------------------------------------------
Responsiveness
---------------------------------------------------*/
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


function screenWidthIsAtMost(screenWidth) {
    return window.matchMedia(`(max-width: ${screenWidth})`).matches;
}
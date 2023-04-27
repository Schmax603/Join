// aus backend: currentUser = getItem('currentUser') 
// users[currentUser].contacts 
let contacts = [
    {
        "name": "AntonMayer",
        "email": "antom@gmail.com",
        "phone": "+49 1111 111 11 1",
        "color": "bg-0",
        "tasks": []
    }
    ,
    {
        "name": "Anja Schulz",
        "email": "schulz@hotmail.com",
        "phone": "+49 1111 111 11 1",
        "color": "bg-1",
        "tasks": []
    }
    ,
    {
        "name": "David Eisenberg",
        "email": "davidberg@gmail.com",
        "phone": "+49 1111 111 11 1",
        "color": "bg-2",
        "tasks": []
    }
    ,
    {
        "name": "Benedict Ziegler",
        "email": "benedict@gmail.com",
        "phone": "+49 1111 111 11 1",
        "color": "bg-3",
        "tasks": []
    }
    ,
    {
        "name": "Eva Fischer",
        "email": "eva@gmail.com",
        "phone": "+49 1111 111 11 1",
        "color": "bg-4",
        "tasks": []
    }
    ,
    {
        "name": "Emmanuel Mauer",
        "email": "emmanuelMa@gmail.com",
        "phone": "+49 1111 111 11 1",
        "color": "bg-5",
        "tasks": []
    }
    ,
    {
        "name": "Marcel Bauer",
        "email": "bauer@gmail.com",
        "phone": "+49 1111 111 11 1",
        "color": "bg-6",
        "tasks": []
    }
    ,
    {
        "name": "Tatjana Wolf",
        "email": "wolf@gmail.com",
        "phone": "+49 1111 111 11 1",
        "color": "bg-7",
        "tasks": []
    }
]

const NUMBER_OF_BG_COLORS = 17; // see bgColors.css
let contactInfoContainerIsActive = false;
let activeContactIndex;


function initContacts() {
    changeContentOnWindowSize();
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
    const container = document.getElementById('contacts-list');
    container.innerHTML += /*html*/`
        <div class="letter-container" id="letter-container-${letter}">
            <div class="letter-header fs-21 fw-400">${letter}</div>
            <div class="letter-header-bottom-border"></div>
        </div>
    `;
    contacts.forEach(contact => {
        if (getInitialLetter(contact) === letter)
            renderContact(contact);
    });
}


function renderContact(contact) {
    const letter = getInitialLetter(contact);
    const contactIndex = contacts.indexOf(contact);
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
    // hideOverlay('contact-details-overlay');

    setTimeout(() => {
        const contact = contacts[contactIndex];
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
    contacts.forEach(c => {
        document.getElementById(`contact-${contacts.indexOf(c)}`).classList.remove('contact-active');
    });

    if (!screenWidthIsAtMost('1200px')) {
        document.getElementById(`contact-${contactIndex}`).classList.add('contact-active');
    }
}


function deactivateContact() {
    activeContactIndex = undefined;
    contacts.forEach(c => {
        document.getElementById(`contact-${contacts.indexOf(c)}`).classList.remove('contact-active');
    });
}


function getActiveContact() {
    return contacts[activeContactIndex];
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
    contacts.forEach(contact => {
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
    return contacts.sort((a, b) => {
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
Create Contact Overlay
---------------------------------------------------*/
function openCreateContactOverlay() {
    freezeBackground('create-or-edit-contact-screen');
    renderCreateContactHeadline();
    renderCreateContactIcon();
    renderCreateContactButtons();
    setCreateContactButtons();
    slideInOverlay('create-or-edit-contact-overlay');
}


function renderCreateContactHeadline() {
    document.getElementById('create-or-edit-contact-headline').classList = 'header-headline mt-12 mb-12';
    document.getElementById('create-or-edit-contact-headline').innerHTML = 'Add contact';
    showElement('create-or-edit-contact-subheadline');
    document.getElementById('create-or-edit-contact-subheadline').innerHTML = 'Tasks are better with a team!';
}


function renderCreateContactIcon() {
    document.getElementById('create-or-edit-contact-icon-container').innerHTML = '<img src="../img/emptyImg.png">';
}


function renderCreateContactButtons() {
    document.getElementById('form-contact-light-btn').classList.add('desktop-only');
    document.getElementById('form-contact-buttons').classList.remove('align-self-end');

    document.getElementById('form-contact-light-btn-text').innerHTML = 'Cancel';
    document.getElementById('form-contact-light-btn-symbol').style.display = 'flex';

    document.getElementById('form-contact-dark-btn').style.padding = '15px 10px';
    document.getElementById('form-contact-dark-btn-text').innerHTML = 'Create contact';
    document.getElementById('form-contact-dark-btn-symbol').style.display = 'flex';
}


function setCreateContactButtons() {
    document.getElementById('form-contact-light-btn').onclick = closeCreateOrEditContactOverlay;
    document.getElementById('form-contact-info').onsubmit = () => {
        addNewContact();
        return false;
    };
}


function slideInOverlay(id) {
    setTimeout(() => {
        showOverlay(id);
    }, 100);
}


function openEditContactOverlay(contact) {
    freezeBackground('create-or-edit-contact-screen');
    renderEditContactHeadline();
    renderEditContactIcon(contact);
    setEditContactInputValues(contact);
    renderEditContactButtons();
    setEditContactButtons();
    slideInOverlay('create-or-edit-contact-overlay');
}


function renderEditContactHeadline() {
    document.getElementById('create-or-edit-contact-headline').classList = 'header-headline mt-34';
    document.getElementById('create-or-edit-contact-headline').innerHTML = 'Edit contact';
    removeElement('create-or-edit-contact-subheadline');
}


function renderEditContactIcon(contact) {
    document.getElementById('create-or-edit-contact-icon-container').innerHTML = /*html*/`
        <div id="create-or-edit-contact-icon" class="contact-icon contact-overlay-icon fs-47 fw-500 ${contact.color}">
            ${getInitials(contact)}
        </div>
    `;
}


function setEditContactInputValues(contact) {
    document.getElementById('new-contact-name').value = contact.name;
    document.getElementById('new-contact-email').value = contact.email;
    document.getElementById('new-contact-phone').value = contact.phone;
}


function renderEditContactButtons() {
    if (screenWidthIsAtMost('1200px')) {
        document.getElementById('form-contact-light-btn').classList.remove('desktop-only');
    }
    else {
        document.getElementById('form-contact-buttons').classList.add('align-self-end');
    }

    document.getElementById('form-contact-light-btn-text').innerHTML = 'Delete';
    document.getElementById('form-contact-light-btn-symbol').style.display = 'none';

    document.getElementById('form-contact-dark-btn').style.padding = '15px 50px';
    document.getElementById('form-contact-dark-btn-text').innerHTML = 'Save';
    document.getElementById('form-contact-dark-btn-symbol').style.display = 'none';

}


function setEditContactButtons() {
    document.getElementById('form-contact-light-btn').onclick = () => {
        deleteContact(getActiveContact());
    };
    document.getElementById('form-contact-info').onsubmit = () => {
        editContact(getActiveContact());
        return false;
    };
}


function deleteContact(contact) {
    const contactIndex = contacts.indexOf(contact);
    contacts.splice(contactIndex, 1);
    closeCreateOrEditContactOverlay();
    renderContactList();
    hideOverlay('contact-details-overlay');

    if (screenWidthIsAtMost('1200px')) {
        setTimeout(() => {
            showElement('contacts-list-container');
            removeElement('contacts-info-container');
        }, 220);
    }
}

function editContact(contact) {
    contact.name = document.getElementById('new-contact-name').value;
    contact.email = document.getElementById('new-contact-email').value;
    contact.phone = document.getElementById('new-contact-phone').value;
    closeCreateOrEditContactOverlay();
    renderContactList();

    const contactIndex = contacts.indexOf(contact);
    showContactDetails(contactIndex, true);
    scrollToContact(contactIndex);
}


function closeCreateOrEditContactOverlay() {
    hideOverlay('create-or-edit-contact-overlay');
    setTimeout(() => {
            unfreezeBackground('create-or-edit-contact-screen');
        }, 220);
    document.getElementById('form-contact-info').reset();
}


function freezeBackground(id) {
    showElement(id);
    document.getElementById('body').classList.add('no-scrolling');
}


function unfreezeBackground(id) {
    removeElement(id);
    document.getElementById('body').classList.remove('no-scrolling');
}


function addNewContact() {
    const newContact = {
        "name": document.getElementById('new-contact-name').value,
        "email": document.getElementById('new-contact-email').value,
        "phone": document.getElementById('new-contact-phone').value,
        "color": getRandomColorClass(),
        "tasks": []
    };
    contacts.push(newContact);
    closeCreateOrEditContactOverlay();
    renderContactList();

    const contactIndex = contacts.indexOf(newContact);
    showContactDetails(contactIndex);
    scrollToContact(contactIndex);
    showSuccessMessage('contact-successfully-created');
}


function scrollToContact(contactIndex) {
    scrollToID(`contact-${contactIndex}`);
}


function scrollToID(id) {
    location.hash = `#${id}`;
}


function showSuccessMessage(id) {
    setTimeout(() => {
        showOverlay(id);
    }, 500);
    setTimeout(() => {
        hideOverlay(id);
    }, 2500);
}


function getRandomColorClass() {
    return `bg-${getRandomInt(NUMBER_OF_BG_COLORS)}`;
}


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}


/*--------------------------------------------------
Show / Hide
---------------------------------------------------*/
function showElement(id) {
    document.getElementById(id).classList.remove('d-none');
    document.getElementById(id).classList.remove('hidden');
}


function hideElement(id) {
    document.getElementById(id).classList.add('hidden');
}


function removeElement(id) {
    document.getElementById(id).classList.add('d-none');
}


function showOverlay(id) {
    document.getElementById(id).classList.add('show-overlay');
}


function hideOverlay(id) {
    document.getElementById(id).classList.remove('show-overlay');
}


function doNotClose(event) {
    event.stopPropagation();
}


function clearElement(id) {
    document.getElementById(id).innerHTML = '';
}


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
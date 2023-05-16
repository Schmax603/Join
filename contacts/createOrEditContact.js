/*--------------------------------------------------
Create Contact Overlay
---------------------------------------------------*/
/**
 * Opens/renders the create contact overlay.
 */
function openCreateContactOverlay() {
    freezeBackground('create-or-edit-contact-screen');
    renderCreateContactHeadline();
    renderCreateContactIcon();
    renderCreateContactButtons();
    setCreateContactButtons();
    slideInOverlay('create-or-edit-contact-overlay');
}


/**
 * Renders the headline for the create contact overlay.
 */
function renderCreateContactHeadline() {
    document.getElementById('create-or-edit-contact-headline').classList = 'header-headline cursor-d mt-12 mb-12';
    document.getElementById('create-or-edit-contact-headline').innerHTML = 'Add contact';
    showElement('create-or-edit-contact-subheadline');
    document.getElementById('create-or-edit-contact-subheadline').innerHTML = 'Tasks are better with a team!';
}


/**
 * Renders the icon for the create contact overlay.
 */
function renderCreateContactIcon() {
    document.getElementById('create-or-edit-contact-icon-container').innerHTML = '<img src="../img/emptyImg.png">';
}


/**
 * Renders the buttons for the create contact overlay.
 */
function renderCreateContactButtons() {
    document.getElementById('form-contact-light-btn').classList.add('desktop-only');
    document.getElementById('form-contact-buttons').classList.remove('align-self-end');

    document.getElementById('form-contact-light-btn-text').innerHTML = 'Cancel';
    document.getElementById('form-contact-light-btn-symbol').style.display = 'flex';

    document.getElementById('form-contact-dark-btn').style.padding = '15px 10px';
    document.getElementById('form-contact-dark-btn-text').innerHTML = 'Create contact';
    document.getElementById('form-contact-dark-btn-symbol').style.display = 'flex';
}


/**
 * Sets up the event handlers for the buttons in the create contact overlay.
 */
function setCreateContactButtons() {
    document.getElementById('form-contact-light-btn').onclick = closeCreateOrEditContactOverlay;
    document.getElementById('form-contact-info').onsubmit = () => {
        addNewContact();
        return false;
    };
}


/**
 * Opens the edit contact overlay and sets up its initial state.
 * @param {Object} contact - The contact to be edited.
 */
function openEditContactOverlay(contact) {
    freezeBackground('create-or-edit-contact-screen');
    renderEditContactHeadline();
    renderEditContactIcon(contact);
    setEditContactInputValues(contact);
    renderEditContactButtons();
    setEditContactButtons();
    slideInOverlay('create-or-edit-contact-overlay');
}


/**
 * Renders the headline for the edit contact overlay.
 */
function renderEditContactHeadline() {
    document.getElementById('create-or-edit-contact-headline').classList = 'header-headline mt-34';
    document.getElementById('create-or-edit-contact-headline').innerHTML = 'Edit contact';
    removeElement('create-or-edit-contact-subheadline');
}


/**
 * Renders the icon for the edit contact overlay.
 * @param {Object} contact - The contact whose icon should be displayed.
 */
function renderEditContactIcon(contact) {
    document.getElementById('create-or-edit-contact-icon-container').innerHTML = /*html*/`
        <div id="create-or-edit-contact-icon" class="contact-icon contact-overlay-icon fs-47 fw-500 ${contact.color}">
            ${getInitials(contact)}
        </div>
    `;
}


/**
 * Sets the initial values for the input fields in the edit contact overlay.
 * @param {Object} contact - The contact whose values should be set.
 */
function setEditContactInputValues(contact) {
    document.getElementById('new-contact-name').value = contact.name;
    document.getElementById('new-contact-email').value = contact.email;
    document.getElementById('new-contact-phone').value = contact.phone;
}


/**
 * Renders the buttons for the edit contact overlay.
 */
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


/**
 * Sets up the event handlers for the buttons in the edit contact overlay.
 */
function setEditContactButtons() {
    document.getElementById('form-contact-light-btn').onclick = () => {
        deleteContact(getActiveContact());
    };
    document.getElementById('form-contact-info').onsubmit = () => {
        editContact(getActiveContact());
        return false;
    };
}


/**
 * Deletes a contact from the user's list of contacts.
 * @param {Object} contact - The contact to be deleted.
 */
function deleteContact(contact) {
    const contactIndex = activeUserContacts.indexOf(contact);
    activeUserContacts.splice(contactIndex, 1);

    closeCreateOrEditContactOverlay();
    renderContactList();
    hideOverlay('contact-details-overlay');

    if (screenWidthIsAtMost('1200px')) {
        setTimeout(() => {
            showElement('contacts-list-container');
            removeElement('contacts-info-container');
        }, 220);
    }

    saveUserData();
}


/**
 * Updates the values of a contact with the new values entered in the edit contact overlay.
 * @param {Object} contact - The contact to be updated.
 */
function editContact(contact) {
    contact.name = document.getElementById('new-contact-name').value;
    contact.email = document.getElementById('new-contact-email').value;
    contact.phone = document.getElementById('new-contact-phone').value;
    closeCreateOrEditContactOverlay();
    renderContactList();

    const contactIndex = activeUserContacts.indexOf(contact);
    showContactDetails(contactIndex, true);
    scrollToContact(contactIndex);

    saveUserData();
}


/**
 * Closes the create or edit contact overlay.
 */
function closeCreateOrEditContactOverlay() {
    hideOverlay('create-or-edit-contact-overlay');
    setTimeout(() => {
        unfreezeBackground('create-or-edit-contact-screen');
    }, 220);
    document.getElementById('form-contact-info').reset();
}


/**
 * Adds a new contact to the user's list of contacts.
 */
async function addNewContact() {
    const newContact = {
        "name": document.getElementById('new-contact-name').value,
        "email": document.getElementById('new-contact-email').value,
        "phone": document.getElementById('new-contact-phone').value,
        "color": getRandomColorClass(),
        "tasks": []
    };
    activeUserContacts.push(newContact);

    closeCreateOrEditContactOverlay();
    renderContactList();
    const contactIndex = activeUserContacts.indexOf(newContact);
    showContactDetails(contactIndex);
    scrollToContact(contactIndex);
    showThenHideOverlay('contact-successfully-created');

    saveUserData();
}


/**
 * Scrolls the contacts list to the specified contact.
 * @param {number} contactIndex - The index of the contact to scroll to.
 */
function scrollToContact(contactIndex) {
    scrollToID(`contact-${contactIndex}`);
}
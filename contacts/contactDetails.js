/**
 * Displays the details of the given contact and highlights it in the contacts list.
 * @param {number} contactIndex - The index of the contact to display.
 * @param {boolean} [justEdited=false] - Whether the contact was just edited.
 */
function showContactDetails(contactIndex, justEdited = false) {
    if (contactIndex === activeContactIndex && !justEdited)
        return;
    activateContact(contactIndex);
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


/**
 * Sets the given contact as the active contact and highlights it in the contacts list.
 * @param {number} contactIndex - The index of the contact to activate.
 */
function activateContact(contactIndex) {
    activeContactIndex = contactIndex;
    contactInfoContainerIsActive = true;
    unhighlightAllContacts();
    if (!screenWidthIsAtMost('1200px')) {
        highlightActiveContact(contactIndex);
    }
}


/**
 * Deactivates the current active contact and unhighlights it in the contacts list.
 */
function deactivateContact() {
    activeContactIndex = undefined;
    contactInfoContainerIsActive = false;
    unhighlightAllContacts();
}


/**
 * Highlights the given contact in the contacts list.
 * @param {number} contactIndex - The index of the contact to highlight.
 */
function highlightActiveContact(contactIndex) {
    document.getElementById(`contact-${contactIndex}`).classList.add('contact-active');
}


/**
 * Unhighlights all contacts in the contacts list.
 */
function unhighlightAllContacts() {
    activUserContacts.forEach(c => {
        document.getElementById(`contact-${activUserContacts.indexOf(c)}`).classList.remove('contact-active');
    });
}


/**
 * Returns the currently active contact.
 * @returns {Object|undefined} - The currently active contact, or undefined if there is none.
 */
function getActiveContact() {
    return activUserContacts[activeContactIndex];
}


/**
 * Renders the details of the given contact in the contact details container.
 * @param {Object} contact - The contact to render details for.
 */
function renderContactDetails(contact) {
    renderContactDetailsIcon(contact);
    renderContactDetailsName(contact);
    renderContactDetailsEmail(contact);
    renderContactDetailsPhone(contact);
}


/**
 * Renders the icon of the given contact in the contact details container.
 * @param {Object} contact - The contact to render the icon for.
 */
function renderContactDetailsIcon(contact) {
    const iconElement = document.getElementById('contact-details-icon');
    iconElement.classList = `contact-icon contact-overlay-icon fs-47 fw-500 ${contact.color}`;
    iconElement.innerHTML = getInitials(contact);
}


/**
 * Renders the name of the given contact in the contact details container.
 * @param {Object} contact - The contact to render the name for.
 */
function renderContactDetailsName(contact) {
    const nameElement = document.getElementById('contact-details-name');
    nameElement.innerHTML = contact.name;
}


/**
 * Renders the email of the given contact in the contact details container.
 * @param {Object} contact - The contact to render the email for.
 */
function renderContactDetailsEmail(contact) {
    const emailElement = document.getElementById('contact-details-email');
    emailElement.innerHTML = `
        <b>Email</b>
        <a href="mailto:${contact.email}">${contact.email}</a>
    `;
}


/**
 * Renders the phone number of the given contact in the contact details container.
 * @param {Object} contact - The contact to render the phone number for.
 */
function renderContactDetailsPhone(contact) {
    const phoneElement = document.getElementById('contact-details-phone');
    phoneElement.innerHTML = `
        <b>Phone</b>
        <a href="tel:${contact.phone}">${contact.phone}</a>
    `;
}


/**
 * Sets the onclick function to open a contact for editing.
 * @param {Object} contact - The contact to set as open for editing.
 */
function setOpenEditContact(contact) {
    document.getElementById('contact-details-edit').onclick = () => {
        openEditContactOverlay(contact);
    };
    document.getElementById('contact-details-edit-mobile').onclick = () => {
        openEditContactOverlay(contact);
    };
}


/**
 * Closes the contact details container and deactivates the currently active contact.
 */
function closeContactInfo() {
    deactivateContact();
    removeElement('contacts-info-container');
    showElement('contacts-list-container');
}
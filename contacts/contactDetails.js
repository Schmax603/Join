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


function activateContact(contactIndex) {
    activeContactIndex = contactIndex;
    contactInfoContainerIsActive = true;
    unhighlightAllContacts();
    if (!screenWidthIsAtMost('1200px')) {
        highlightActiveContact(contactIndex);
    }
}


function deactivateContact() {
    activeContactIndex = undefined;
    contactInfoContainerIsActive = false;
    unhighlightAllContacts();
}


function highlightActiveContact(contactIndex) {
    document.getElementById(`contact-${contactIndex}`).classList.add('contact-active');
}


function unhighlightAllContacts() {
    activUserContacts.forEach(c => {
        document.getElementById(`contact-${activUserContacts.indexOf(c)}`).classList.remove('contact-active');
    });
}


function getActiveContact() {
    return activUserContacts[activeContactIndex];
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


function closeContactInfo() {
    deactivateContact();
    removeElement('contacts-info-container');
    showElement('contacts-list-container');
}

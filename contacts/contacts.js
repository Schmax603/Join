// aus backend: currentUser = getItem('currentUser') 
// users[currentUser].contacts 
// Farben zufällig ziehen und über CSS-Klasse bg-color-i einbinden
let contacts = [
    {
        "name": "AntonMayer",
        "email": "antom@gmail.com",
        "phone": "+49 1111 111 11 1",
        "tasks": []
    }
    ,
    {
        "name": "Anja Schulz",
        "email": "schulz@hotmail.com",
        "phone": "+49 1111 111 11 1",
        "tasks": []
    }
    ,
    {
        "name": "David Eisenberg",
        "email": "davidberg@gmail.com",
        "phone": "+49 1111 111 11 1",
        "tasks": []
    }
    ,
    {
        "name": "Benedict Ziegler",
        "email": "benedict@gmail.com",
        "phone": "+49 1111 111 11 1",
        "tasks": []
    }
]


function renderContactList() {
    sortContactsByName();

    getInitialLetters().forEach(letter => {
        renderLetterContacts(letter);
    });
}


function renderLetterContacts(letter) {
    const container = document.getElementById('contacts-list');
    container.innerHTML += /*html*/`
        <div class="letter-container" id="letter-container-${letter}">
            <div class="letter-header font-text">${letter}</div>
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
    const container = document.getElementById(`letter-container-${letter}`);
    container.innerHTML += /*html*/`
        <div class="contact">
            <div id="contact-icon" class="contact-icon font-text-12">
                ${getInitials(contact)}
            </div>
            <div class="contact-name-email">
                <b class="contact-name font-text">${contact.name}</b>
                <span class="contact-email font-text-16">${contact.email}</span>
            </div>
        </div>
    `;
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


function openNewContact() {
    freezeBackground();
    setTimeout(() => {
        document.getElementById('new-contact-overlay').classList.add('show-overlay');
    }, 100);
}


function closeNewContact() {
    document.getElementById('new-contact-overlay').classList.remove('show-overlay');
    setTimeout(unfreezeBackground, 220);
}




function freezeBackground() {
    showElement('new-contact-screen');
    document.getElementById('body').classList.add('no-scrolling');
}


function unfreezeBackground() {
    removeElement('new-contact-screen');
    document.getElementById('body').classList.remove('no-scrolling');
}


function showElement(id) {
    // if (document.getElementById(id).classList.contains('d-none'))
    document.getElementById(id).classList.remove('d-none');
    // if (document.getElementById(id).classList.contains('hidden'))
    document.getElementById(id).classList.remove('hidden');
}


function hideElement(id) {
    document.getElementById(id).classList.add('hidden');
}


function removeElement(id) {
    document.getElementById(id).classList.add('d-none');
}


function doNotClose(event) {
    event.stopPropagation();
}
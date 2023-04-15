let contacts = [
    {
        "firstname": "Anton",
        "lastname": "Mayer",
        "email": "antom@gmail.com",
        "phone": "+49 1111 111 11 1",
        "tasks": []
    }
    ,
    {
        "firstname": "Anja",
        "lastname": "Schulz",
        "email": "schulz@hotmail.com",
        "phone": "+49 1111 111 11 1",
        "tasks": []
    }
    ,
    {
        "firstname": "David",
        "lastname": "Eisenberg",
        "email": "davidberg@gmail.com",
        "phone": "+49 1111 111 11 1",
        "tasks": []
    }
    ,
    {
        "firstname": "Benedict",
        "lastname": "Ziegler",
        "email": "benedict@gmail.com",
        "phone": "+49 1111 111 11 1",
        "tasks": []
    }
]


function renderContactList() {
    sortContactsByFirstname();

    getInitialLetters().forEach(letter => {
        renderLetterContacts(letter);
    });
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
    return contact.firstname.charAt(0);
}


function renderLetterContacts(letter) {
    const container = document.getElementById('contact-list');
    container.innerHTML += /*html*/`
    `;
}


function sortContactsByFirstname() {
    return contacts.sort((a, b) => {
        if (a.firstname < b.firstname) {
            return -1;
        }
    });
}
/**init onload functions */
async function initAddTask() {
    await initHeaderNav();
    await loadUserData();
    media();
    setMinDate('date');
    // dropdownValueCheck(); 
    renderCategory();
    await renderContacts()
    giveContactListId();
}

let lastClickedImage = null;
let priority;

function setActiveButton(buttonId) {
    const buttons = [
        { id: "addtask-prio-bnt-urgent", img: "/img/prio-urgent.svg", activeImg: "/img/urgent-white.svg" },
        { id: "addtask-prio-bnt-medium", img: "/img/prio-medium.svg", activeImg: "/img/medium-white.svg" },
        { id: "addtask-prio-bnt-low", img: "/img/prio-low.svg", activeImg: "/img/low-white.svg" },
    ];
    const selectedButton = buttons.find((button) => button.id === buttons[buttonId].id);
    priority = buttonId;

    buttons.forEach((button) => {
        const element = document.getElementById(button.id);
        const imgElement = document.getElementById(`${button.id}-img`);

        if (button.id !== selectedButton.id) {
            element.classList.remove("active");
            imgElement.src = button.img;
        } else {
            element.classList.toggle("active");
            if (element.classList.contains("active")) {
                lastClickedImage = imgElement.src;
                imgElement.src = button.activeImg;
            } else {
                imgElement.src = lastClickedImage || button.img;
            }
        }
    });
}

function toggleActive(dropMaster) {
    if (dropMaster === 'category-selection') {
        document.getElementById("category-selection").classList.toggle("collapsed");
        document.getElementById('color-pick').classList.add('d-none');

    } else if (dropMaster === 'mail-selection') {
        document.getElementById("mail-selection").classList.toggle("collapsed");
    }
}

/**Save values into backend */
async function addTask() {
    await saveCheckedContacts();
    await saveCheckedSubtasks();
    const newTask = {
        "title": document.getElementById('task-title').value,
        "description": document.getElementById('task-description').value,
        "dueDate": document.getElementById('date').value,
        "prio": priority,
        "category": category[selectCategory],
        "assignedTo": contacts,
        "subtasks": subtasksChecked,
        "boardColumn": 'board-column-todo'
    };
    // Abfragen einfügen ?
    activeUser.tasks.push(newTask);
    await setItem('users', JSON.stringify(users));
    // Zurücksetzen der Eingabefelder
}

/**Render input field for new Catergory */
function newInput(section) {
    if (section === 'category') {
        generateHTMLNewCategory();
        document.getElementById('color-pick').classList.remove('d-none');
    }
    else if (section === 'new-mail') {
        window.location.href = '../contacts/contacts.html';
        // Figma Version
        // removeHTMLSubtaskImg();
    }
    else if (section === 'subtask') {
        setHTMLSubtaskImg();
    }
}

/**Render all contacts */
async function renderContacts() {
    let contactList = document.getElementById('apicontact-list');
    let contactsArray = activeUser.contacts;

    for (let i = 0; i < contactsArray.length; i++) {
        const contact = contactsArray[i].name;

        contactList.innerHTML += /*html*/`
        <div class="addtask-item paddings pos-re" onclick="checkboxSwitch(id)">${contact}
            <input id="contact-checkbox${i}" type="checkbox">
        <!-- <div id="addtask-checkbox${i}" class="addtask-checkbox"> 
                <div id="addtask-checkbox-active${i}" class="addtask-checkbox-active"></div>
            </div> -->
		</div>
        `;
    }
}

/**Save checked Contacts */
async function saveCheckedContacts() {
    let contactsArray = activeUser.contacts;

    for (let i = 0; i < contactsArray.length; i++) {
        const contact = contactsArray[i];
        if (document.getElementById(`contact-checkbox${i}`).checked == true) {
            contacts.push(contact);
        }
    }
}

/**Save & load subtasks */
function initSubtask() {
    let inputValue = document.getElementById('subtask');
    subtasks.push(inputValue.value);    // Save temporary subtasks
    inputValue.value = '';
    renderSubtaskArray();
}

/**Save only checked Subtasks */
async function saveCheckedSubtasks() {
    for (let i = 0; i < subtasks.length; i++) {
        const subtask = subtasks[i];
        if (document.getElementById(`subtask-checkbox${i}`).checked == true) {
            subtasksChecked.push(subtask);
        }
    }
}

/**Load temporary Subtasks */
function renderSubtaskArray() {
    let subtaskList = document.getElementById("dropNum(subtask)");

    subtaskList.innerHTML = '';
    for (let i = 0; i < subtasks.length; i++) {
        const subtask = subtasks[i];

        subtaskList.innerHTML += /*html*/`
    <div>
        <input type="checkbox" name="" id="subtask-checkbox${i}">
        <label for="subtask-checkbox${i}">${subtask}</label>
    </div>
    `;
    }
}

/**Change subtask img*/
function setHTMLSubtaskImg() {
    document.getElementById('subtask-img-add').classList.add('d-none');
    document.getElementById('subtask-img-activ').classList.remove('d-none');
}

/**Reset subtask img*/
function removeHTMLSubtaskImg() {
    document.getElementById('subtask-img-add').classList.remove('d-none');
    document.getElementById('subtask-img-activ').classList.add('d-none');


    document.getElementById('subtask').value = '';
}

function giveContactListId(params) {
    const idList = document.getElementById('apicontact-list');

    const childElements = idList.children;
    for (let index = 2; index <= childElements.length + 1; index++) {
        const currentElement = childElements[index - 2];
        currentElement.setAttribute('id', `contact-${index}`);
    }
}


function checkboxSwitch(id) {

}


async function trueFalesTranslater(params) {

    const activeList = document.querySelectorAll('.addtask-id-contact');
    console.log(activeList)
}

/*
function assignedToCheckbox(id) {

            document.getElementById(id).classList.toggle("collapsed");
    
        } else if (dropMaster === 'mail-selection') {
            document.getElementById("mail-selection").classList.toggle("collapsed");
        }

}

*/


function dropSelectValue(params) {
    if (params === "category-1") {
        console.log("id")
    }
    if (condition) {

    }
    if (condition) {

    }


}
/*
function dropdownValueCheck() {
    let dropNameQuery = document.querySelectorAll("[id*=dropNum]")
    const dropNameArray = [];

    dropNameQuery.forEach((element) => {
        const dropNameMatch = element.id.match(/\((.*)\)/);
        const dropName = dropNameMatch[1];
        dropNameArray.push(dropName);
    });

    for (let inum = 0; inum < 3; inum++) {
        let apiOutPutElements = document.getElementById("dropNum(" + dropNameArray[inum] + ")")
        let childElements = apiOutPutElements.querySelectorAll(".addtask-id");
        console.log(apiOutPutElements)
        for (let index = 1; index < childElements.length; index++) {
            childElements[index].setAttribute("id", dropNameArray[inum] + "-" + index);
            childElements[index].setAttribute("onclick", "dropSelectValue("+"'" + dropNameArray[inum] + "-" + index + "'" + ")");
        }
    }
}
*/
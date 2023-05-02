/**init onload functions */
async function initAddTask() {
    await initHeaderNav();
    await loadUsers();
    media();
    setMinDate();
    // dropdownValueCheck(); 
    renderCategory();
    await renderContacts()
    giveContactListId();
}

window.addEventListener('resize', media);
let minwidth = window.matchMedia('(min-width: 1300px)')

function media() {
    const imposter = document.getElementById("imposter");
    const amogus = document.getElementById("amogus");

    if (minwidth.matches) {
        moveContent("imposter");
    } else {
        moveContent("amogus");
    }
}

function moveContent(destination) {
    const container = document.getElementById(destination);

    const prio = document.getElementById("addtask-prio");
    const duedate = document.getElementById("addtask-duedate");
    const subtasks = document.getElementById("addtask-subtasks");

    container.appendChild(prio);
    container.appendChild(duedate);
    container.appendChild(subtasks);
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
        "discription": document.getElementById('task-discription').value,
        "dueDate": document.getElementById('date').value,
        "prio": priority,
        "category": category[selectCategory],
        "assignTo": contacts,
        "subtasks": subtasksChecked,
        "boardColumn": 'board-column-todo'
    };
    // Abfragen einfügen ?
    users[currentUser].tasks.push(newTask);
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

/**Cancel input and load drop down list */
function cancelSection(section) {
    if (section === 'category') {
        resetCetegory('category');
        renderCategory();
    } else if (section === 'new-mail') {
        generateHTMLSelectMail();
    } else if (section === 'subtask') {
        removeHTMLSubtaskImg();
    }
}

function selectedCategory(i) {
    let showSelectedCategory = document.getElementById('selected-element');

    selectCategory = i

    showSelectedCategory.innerHTML = `
        <div>${category[i].name}</div>
        <div class="addtask-item-color color-cicle img-20 bg-${category[i].color}"></div>
    `;
}

/**Load all categorys with color */
function renderCategory() {
    let categoryList = document.getElementById('dropNum(category)');

    for (let i = 0; i < category.length; i++) {
        let categoryElement = category[i];

        categoryList.innerHTML += /*html*/`
        <div onclick="selectedCategory(${i})" class="addtask-item paddings addtask-id">
            ${categoryElement.name}
            <div class="addtask-item-color color-cicle img-20 bg-${categoryElement.color}"></div>
		</div>
        `;
    }
}

/**Save new category */
async function saveNewCategory(section) {
    if (section === 'category') {
        let inputValue = document.getElementById('new-category');
        if (categoryColorPick !== undefined && inputValue.value !== '') {
            category.push({ name: inputValue.value, color: categoryColorPick });
            // Save backend
            await setItem('category', JSON.stringify(category));
            resetCetegory(inputValue);
            renderCategory();
        }
    }
    // Figma Version
    // else if (section === 'new-mail' ) {
    //     let inputValue = document.getElementById('new-mail').value; 

    //     assignTo.push(inputValue);
    // Save backend
    // await setItem('assignTo', JSON.stringify(assignTo));
    // }
    else if (section === 'subtask') {
        initSubtask();
    }
}

/**After save new category, reset the selection */
function resetCetegory(inputValue) {
    let editColor = document.getElementById('color-selected');
    let editContainer = document.getElementById('category-selection');

    document.getElementById('color-pick').classList.add('d-none');
    editColor.classList.remove(`bg-${categoryColorPick}`);
    editContainer.classList.remove('d-flex');
    editContainer.classList.remove('a-item');
    inputValue.value = '';
    categoryColorPick = undefined;
    generateHTMLSelectCategory();
}

/**Color pick category */
function addColorCategory(id) {
    let editContainer = document.getElementById('category-selection');
    let editColor = document.getElementById('color-selected');

    editContainer.classList.add('d-flex');
    editContainer.classList.add('a-item');

    categoryColorPick = id;
    editColor.classList.add(`bg-${id}`);
    document.getElementById('color-pick').classList.add('d-none');
}

/**Render all contacts */
async function renderContacts() {
    let contactList = document.getElementById('apicontact-list');
    let contactsArray = users[currentUser].contacts;

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
    let contactsArray = users[currentUser].contacts;

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
function assignToCheckbox(id) {

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
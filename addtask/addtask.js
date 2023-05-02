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
    if (dropMaster === 0) {
        document.querySelector(".addtask-gendrop-coll.collapsible").classList.toggle("collapsed");
    } else {
        document.getElementById("addtask-gendrop-coll").classList.toggle("collapsed");
    }
}

async function addTask() {
    const newTask = {
        "title": document.getElementById('task-title').value,
        "discription": document.getElementById('task-discription').value,
        "dueDate": document.getElementById('date').value,
        "prio": priority,
        // "category": .value, (Zuordnung einer Kategorie)
        // "assignTo": [],
        // "subtask": []
    };
    // Abfragen einfügen ?
    users[currentUser].tasks.push(newTask);
    await setItem('users', JSON.stringify(users));
    // Zurücksetzen der Eingabefelder
}

function newCategory() {
    // let imgfield = document.getElementById('category-img');
    let selectField = document.getElementById('category-selection');
    let imgDropdown = document.getElementById('category-img-dropdown');

    imgDropdown.classList.add('d-none');

    selectField.innerHTML = /*html*/`
    <input class="new-category select-task-category paddings" type="name" placeholder="New category name">
    <div class="selection-img selection-img-activ">
	    <img onclick="cancelNewCategory()" class="img-24 px-5" src="../img/clear.svg" alt="cancel">
	    <img class="border img-24 px-5" src="../img/check-black.svg" alt="check">
    </div>
    `;
}

function cancelNewCategory(){
    let selectField = document.getElementById('category-selection');
    selectField.innerHTML = /*html*/`
    <div class="select-task-category-img img-44">
		<img id="category-img-dropdown" src="../img/dropdown.svg" alt="drop down">
	</div>

	<div class="select-task-category" id="currentItem">
		<div class="paddings">
			Select task category
		</div>
	</div>
	<div class="addtask-gendrop-scroll">
		<div class="addtask-item paddings" onclick="newCategory();">
			New category
		</div>

		<div id="dropNum(category)">
			<div class="addtask-item paddings">Content for section 2 goes here.</div>
			<div class="addtask-item paddings">Content for section 3 goes here.</div>
			<div class="addtask-item paddings">Content for section 4 goes here.</div>
			<div class="addtask-item paddings">Content for section 5 goes here.</div>
			<div class="addtask-item paddings">Content for section 6 goes here.</div>
			<div class="addtask-item paddings">Content for section 7 goes here.</div>
			<div class="addtask-item paddings">Content for section 8 goes here.</div>
			<div class="addtask-item paddings">Content for section 9 goes here.</div>
		</div>

	</div>
    `;
}

function newContact() {

}

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
        let childElements = apiOutPutElements.querySelectorAll("*")
        childElements.forEach((element, index) => {element.setAttribute("id", dropNameArray[inum] + "-" + index);})
    }
}

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

function setActiveButton(buttonId) {
    const buttons = [
        { id: "addtask-prio-bnt-urgent", img: "/img/prio-urgent.svg", activeImg: "/img/urgent-white.svg" },
        { id: "addtask-prio-bnt-medium", img: "/img/prio-medium.svg", activeImg: "/img/medium-white.svg" },
        { id: "addtask-prio-bnt-low", img: "/img/prio-low.svg", activeImg: "/img/low-white.svg" },
    ];

    const selectedButton = buttons.find((button) => button.id === buttons[buttonId].id);

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


function dropdownValueCheck() {
    let dropNameQuery = document.querySelectorAll("[id*=dropNum]")
    const dropNameArray = [];

    dropNameQuery.forEach((element) => {
        const dropNameMatch = element.id.match(/\((.*)\)/);
        const dropName = dropNameMatch[1];
        dropNameArray.push(dropName);


    });
    console.log(dropNameArray)


    for (let i = 0; i < dropNameArray.length; i++) {
        const someNumber = i + 1;
        const id = `dropNameArray-${someNumber}`;
        console.log(id);
      }

}



function bntHover(prio) {
    const hoveredBtn = document.getElementById(`addtask-prio-bnt-${prio}`);

    hoveredBtn.addEventListener("mouseover", () => {
        console.log("The element is being hovered over.");
    });
}

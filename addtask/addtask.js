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

function toggleActive(condition) {
    if (condition === 0) {
        document.getElementById("collapsible0").classList.toggle("active")
    }
    if (condition === 1) {
        document.getElementById("collapsible1").classList.toggle("active")
    }
}

function dropdownValueCheck() {
    var coll = document.getElementById("apicategory");
    const divs = coll.getElementsByTagName("div");

    for (let dropid = 0; dropid < divs.length; dropid++) {
        divs[dropid].setAttribute("id", "apicategory-" + dropid);
        return dropid.length
    }

}



function bntHover(params) {
    const myElement = document.getElementById("addtask-prio-bnt-urgent");

    myElement.addEventListener("mouseover", () => {
        console.log("The element is being hovered over.");
    });
}

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
            element.classList.add("active");
            imgElement.src = button.activeImg;
        }
    });
}



function checkActive(params) {

}

function bntHover(params) {
    const myElement = document.getElementById("addtask-prio-bnt-urgent");

    myElement.addEventListener("mouseover", () => {
        console.log("The element is being hovered over.");
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

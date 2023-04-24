console.log("dadw")

function toggleButton(buttonNum) {
    const buttons = document.querySelectorAll('.addtask-prio-bnt-urgent');
    buttons.forEach(button => {
        if (button.id === `button-${buttonNum}`) {
            button.classList.add('active');
            console.log("0")
        } else {
            button.classList.remove('active');
            console.log("1")
        }
    });
}

function toggleActive() {
    document.getElementById("collapsible").classList.toggle("active")
}

function dropdownValueCheck() {
    var coll = document.getElementById("apicategory");
    const divs = coll.getElementsByTagName("div");

    for (let dropid = 0; dropid < divs.length; dropid++) {
        divs[dropid].setAttribute("id", "apicategory-" + dropid);
        return dropid.length
    }

}

function loadCategory() {
    const coll = document.getElementById("apicategory");
    const divs = coll.getElementsByTagName("div");


}

function newCategory() {
    const coll = document.getElementById("apicategory");
    const divs = coll.getElementsByTagName("div");
    const currentItem = document.getElementById("currentItem")
}
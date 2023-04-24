console.log("dadw")

let buttons;

function whichBnt(buttonNum, buttons) {


    if (buttonNum === 0) {
        buttons = document.querySelectorAll('.addtask-prio-bnt-urgent');
        console.log("urgent", buttonNum)
    } 
    if (buttonNum === 1) {
        buttons = document.querySelectorAll('.addtask-prio-bnt-medium');
        console.log("medium", buttonNum)
    } 
    if (buttonNum === 2) {
        buttons = document.querySelectorAll('.addtask-prio-bnt-urgent');
        console.log("low", buttonNum)
    } 
}

function isActive(buttonNum) {
    buttons.forEach(button => {
        if (button.id === `button-${buttonNum}`) {

            console.log(button.id)
            button.classList.toggle('active');
            console.log("add", buttonNum)

        } else {

            console.log(button.id)
            button.classList.remove('active');
            console.log("remove", buttonNum)

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
console.log("dadw")

function whichBnt(buttonNum) {


    if (buttonNum === 0) {
        
        document.querySelectorAll("addtask-prio-bnt-urgent").classList.add("active")

        console.log("urgent", buttonNum)
    } 
}

function isActive(buttonNum) {
    const buttons = document.querySelectorAll('.addtask-prio-bnt-urgent');
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
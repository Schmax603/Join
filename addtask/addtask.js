let buttons;

function whichBnt(buttonNum) {
    if (buttonNum === 0) {
        buttonNum = document.querySelectorAll('.addtask-prio-bnt-urgent');
        buttonNum.id = "0"
    } 
    if (buttonNum === 1) {
        buttonNum = document.querySelectorAll('.addtask-prio-bnt-medium');
        buttonNum.id = "1"
    } 
    if (buttonNum === 2) {
        buttonNum = document.querySelectorAll('.addtask-prio-bnt-low');
        buttonNum.id = "2"
    } 
    purgeActive(buttonNum)
}

function purgeActive(buttonNum) {
    if (buttonNum.id === "0") {
        document.getElementById('addtask-prio-bnt-medium').classList.remove('active');
        document.getElementById('addtask-prio-bnt-low').classList.remove('active');
    }
    if (buttonNum.id === "1") {
        document.getElementById('addtask-prio-bnt-low').classList.remove('active');
        document.getElementById('addtask-prio-bnt-urgent').classList.remove('active');
    }
    if (buttonNum.id === "2") {
        document.getElementById('addtask-prio-bnt-medium').classList.remove('active');
        document.getElementById('addtask-prio-bnt-urgent').classList.remove('active');
    }
    isActive(buttonNum)
}


function isActive(buttonNum) {
    buttonNum[0].classList.toggle('active');
}

function hover(params) {
    
}



function toggleActive() {

    for (let i = 0; i < 2; i++) {

        document.getElementById("collapsible`${i}`").classList.toggle("active")
        document.getElementById("collapsible`${i}`").classList.toggle("active")

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

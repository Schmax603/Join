let addTaskPrioBntUrgent = document.getElementById('addtask-prio-bnt-urgent');
console.log(addTaskPrioBntUrgent)
let addTaskPrioBntMedium = document.getElementById('addtask-prio-bnt-medium');
let addTaskPrioLow = document.getElementById('addtask-prio-bnt-low');



function bntUrgent(addTaskPrioBntUrgent) {
    console.log(addTaskPrioBntUrgent)
    addTaskPrioBntUrgent.classList.remove('addtask-prio-bnts');
}

function bntMedium(addTaskPrioBntMedium) {
    addTaskPrioBntMedium.classList.remove('addtask-prio-bnts')
}

function bntLow(addTaskPrioLow) {
    addTaskPrioLow.classList.remove('addtask-prio-bnts')
}
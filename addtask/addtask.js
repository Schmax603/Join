console.log("dadw")

function bnts() {

    const urgentButton = document.getElementById('addtask-prio-bnt-urgent');
    const mediumButton = document.getElementById('addtask-prio-bnt-medium');
    const lowButton = document.getElementById('addtask-prio-bnt-low');

    function bntUrgent() {

        if (!urgentButton.classList.contains('addtask-prio-bnts')) {
            urgentButton.classList.add('addtask-prio-bnts');
            urgentButton.style = ('background-color: #ff3d00; border: 0px solid #D1D1D1; color: white;');
            urgentButton.querySelector('img').src = ('../img/urgent-white.svg');

            mediumButton.classList.remove('addtask-prio-bnts');
            mediumButton.style = ('');
            mediumButton.querySelector('img').src = ('../img/prio-medium.svg');
            
            lowButton.classList.remove('addtask-prio-bnts');
            lowButton.style = ('');
            lowButton.querySelector('img').src = ('../img/prio-low.svg');
        } else {

            urgentButton.classList.remove('addtask-prio-bnts');
            urgentButton.style = ('');
            urgentButton.querySelector('img').src = ('../img/prio-urgent.svg');
        }
    }

    function bntMedium() {

        if (!mediumButton.classList.contains('addtask-prio-bnts')) {
            mediumButton.classList.add('addtask-prio-bnts');
            mediumButton.style = ('background-color: #ffac04; border: 0px solid #D1D1D1; color: white;')
            mediumButton.querySelector('img').src = ('../img/medium-white.svg');
            
            urgentButton.classList.remove('addtask-prio-bnts');
            urgentButton.style = ('');
            urgentButton.querySelector('img').src = ('../img/prio-urgent.svg');
            
            lowButton.classList.remove('addtask-prio-bnts');
            lowButton.style = ('');
            lowButton.querySelector('img').src = ('../img/prio-low.svg');
        } else {
            mediumButton.classList.remove('addtask-prio-bnts');
            mediumButton.style = ('');
            mediumButton.querySelector('img').src = ('../img/prio-medium.svg');
        }
    }

    function bntLow() {

        if (!lowButton.classList.contains('addtask-prio-bnts')) {
            lowButton.classList.add('addtask-prio-bnts');
            lowButton.style = ('background-color: #80e42c; border: 0px solid #D1D1D1; color: white;')
            lowButton.querySelector('img').src = ('../img/low-white.svg')
            
            urgentButton.classList.remove('addtask-prio-bnts');
            urgentButton.style = ('');
            urgentButton.querySelector('img').src = ('../img/prio-urgent.svg');
            
            mediumButton.classList.remove('addtask-prio-bnts');
            mediumButton.style = ('');
            mediumButton.querySelector('img').src = ('../img/prio-medium.svg');
        } else {
            lowButton.classList.remove('addtask-prio-bnts');
            lowButton.style = ('');
            lowButton.querySelector('img').src = ('../img/prio-medium.svg');
        }
    }

    urgentButton.onclick = bntUrgent;
    mediumButton.onclick = bntMedium;
    lowButton.onclick = bntLow;

    mediumButton.style = ('');
    mediumButton.classList.remove('addtask-prio-bnts')
    mediumButton.querySelector('img').src = ('../img/prio-medium.svg');
}


function diySection() {
    
}
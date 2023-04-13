window.onresize = changeContentOnWindowSize;

// var let const warscheinlich werden alle for loops nacher mit der api gesynct

const trueboardTaskcard = document.getElementsByClassName('trueboard-taskcard');

// var let const warscheinlich werden alle for loops nacher mit der api gesynct

function consoleLOGS() {
    console.log(tasks);
}

function changeContentOnWindowSize() {
    const mediaQuery1100px = window.matchMedia('(max-width: 1100px)')
    const mediaQuery900px = window.matchMedia('(max-width: 900px)')


    if (mediaQuery1100px.matches) {
        document.getElementById('board-AddtaskRe').style = ("display: flex;")
        document.getElementById('board-Addtask').style = ("display: none;")
    } else {
        document.getElementById('board-AddtaskRe').style = ("display: none;")
        document.getElementById('board-Addtask').style = ("display: flex;")
    }

    if (mediaQuery900px.matches) {
        document.getElementById('board-kanban').style = ("display: flex;")

    } else {
        document.getElementById('board-kanban').style = ("display: none;")

    }
}

function test() {
    alert("jadi jadi jada ")
}

// Warum cardInspect cardUnInspect weil ohne framework uh library gibt es keinen anderen weg //

function cardInspect() {

    for (let i = 0; i < trueboardTaskcard.length; i++) {
        trueboardTaskcard[i].style.backgroundColor = '#bebebf';
    }

    document.getElementById('body').style = ("background-color: #b8b9ba; position: fixed;")
    document.getElementById('taskcard-inspect').style = ("display: flex;")
    document.getElementById('fullviewport').style = ("display: flex;")
    document.getElementById('thebnt').style = ("display: flex;")
    document.getElementsByClassName('trueboard-taskcard').style = ('background-color: #bebebf;')
    document.getElementById('trueboard-progress-bar').style = ('accent-color: #1e81a9;')
    document.getElementById('board-Addtask').style = ('background-color: #1e2834')
    document.getElementById('board-Addtask-text').style = ('color: #bfbebe')
    document.getElementById('board-Addtask-plusicon-line').style = ('background-color: ##bfbebe')
    document.getElementById('board-Addtask-plusicon-linev').style = ('background-color: #bfbebe')
    document.getElementById('board-Addtask').style = ("display: none;")
    document.getElementById('trueboard-userIco-start').style = ("border: 1px solid #bebebf;")
    document.getElementById('trueboard-userIco-medium').style = ("border: 1px solid #bebebf;")
    document.getElementById('trueboard-userIco-end').style = ("border: 1px solid #bebebf;")
    document.getElementById('board-search').style = ("background: #bebebf;")
    document.getElementById('board-search-input').style = ("background: #bebebf;")
    document.getElementById('board-Addtask').style = ("background: #1e2834;")
    document.getElementById('board-Addtask-text').style = ("color: #bebebf")
    document.getElementById('board-Addtask-plusicon').style = ("color: #bebebf")
    document.getElementById('board-Addtask-plusicon-linev').style = ('border: 2px solid #bebebf;')
    document.getElementById('board-Addtask-plusicon-line').style = ('border: 2px solid #bebebf;')
    console.log("dadada")
}

function cardUnInspect() {

    for (let i = 0; i < trueboardTaskcard.length; i++) {
        trueboardTaskcard[i].style = '';
    }

    document.getElementById('body').style = ("background-color: #F6F7F8;")
    document.getElementById('taskcard-inspect').style = ("display: none;")
    document.getElementById('fullviewport').style = ("display: none;")
    document.getElementById('thebnt').style = ("display: none;")
    document.getElementById('board-Addtask').style = ('background-color: #2A3647')
    document.getElementById('board-Addtask-text').style = ('color: #FFFFFF')
    document.getElementById('board-Addtask-plusicon').style = ('background-color: #FFFFFF')
    changeContentOnWindowSize();
}
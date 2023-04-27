/*--------------------------------------------------
Show / Hide
---------------------------------------------------*/
function showElement(id) {
    document.getElementById(id).classList.remove('d-none');
    document.getElementById(id).classList.remove('hidden');
}


function hideElement(id) {
    document.getElementById(id).classList.add('hidden');
}


function removeElement(id) {
    document.getElementById(id).classList.add('d-none');
}


function showOverlay(id) {
    document.getElementById(id).classList.add('show-overlay');
}


function hideOverlay(id) {
    document.getElementById(id).classList.remove('show-overlay');
}


function doNotClose(event) {
    event.stopPropagation();
}


function clearElement(id) {
    document.getElementById(id).innerHTML = '';
}
let users = [];
setURL('https://gruppe-534.developerakademie.net/smallest_backend_ever');


function log() {
    console.log('Loaded', result);
}

async function init() {
    await downloadFromServer();
    users = JSON.parse(backend.getItem('users')) || [];
}
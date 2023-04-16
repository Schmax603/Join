// implement mini-backend.js before srcipt.js
let users = [];
setURL('https://gruppe-534.developerakademie.net/smallest_backend_ever');

async function init() {
    await downloadFromServer();
    users = JSON.parse(backend.getItem('users')) || [];
}


// function addUser() {
//     users.push(username.value);
//     backend.setItem('users', JSON.stringify(users));
// }

async function deleteUser(name) {
    await backend.deleteItem('users');
    console.log(users);
  }
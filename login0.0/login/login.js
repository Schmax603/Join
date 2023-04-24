/**
 * Check user login, if not create message
 * 
 * @param {string} userEmail - login email value
 * @param {string} userPassword - login password value
 * @param {number} i - user index
 */
async function userLogin(){
  let userEmail = document.getElementById('loginEmail');
  let userPassword = document.getElementById('loginPassword');
  let msgBox = document.getElementById('msg-box');
  let i = 0;

  let user = users.find(users => users.email.toLowerCase() == userEmail.value.toLowerCase() && users.password == userPassword.value); //tolowerCase = checks case-insensitive

  msgBox.innerHTML = '';
  if (user) {
    checkRemember(userEmail, userPassword);
    while (user != users[i]) {
      i++;
    }
    await setItem('currentUser', JSON.stringify({'currentUser':i}));
    console.log('geschafft')
    window.location.href = '../summary/summary.html';
  }else{
    msgBox.innerHTML = generateHtmlWrongLogin();
  }
}

/**
 * Guest log in
 */
async function userGuest(){
  await setItem('currentUser', JSON.stringify({'currentUser':''}));
  window.location.href = "../summary/summary.html"
}

/**
 * this function check the remember checkbox and save in the local storage
 * 
 * @param {string} userEmail - login email value
 * @param {string} userPassword - login password value
 */
function checkRemember(userEmail, userPassword){
  let remember = document.getElementById('remember-me');
  if(remember.checked == true){
    localStorage.setItem('user', userEmail.value);
    localStorage.setItem('pw', userPassword.value);
    localStorage.setItem('remember', true);
  }else{
    localStorage.setItem('user', '');
    localStorage.setItem('pw', '');
    localStorage.setItem('remember', false);
  }
}

/**this function check onload if remember checkbox in the local storage set*/
function remember(){
  let remember = localStorage.getItem('remember')
  if(remember == 'true'){
      document.getElementById('loginEmail').value = localStorage.getItem('user');
      document.getElementById('loginPassword').value = localStorage.getItem('pw');
      document.getElementById('remember-me').checked = localStorage.getItem('remember');
  }else{
    localStorage.setItem('user', '');
    localStorage.setItem('pw', '');
    localStorage.setItem('remember', false);
  }
}

/**this function clear array "currentUser" and navigate to index.html*/
async function logout(){
  await setItem('currentUser', JSON.stringify({'currentUser':''}));
  window.location.href = '../index.html';
}
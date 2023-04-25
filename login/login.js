const params = new Proxy(new URLSearchParams(window.location.search), {
  get: (searchParams, prop) => searchParams.get(prop),
});
// Get the value of "some_key" in eg "https://example.com/?some_key=some_value"
let msg = params.msg;


/**initiated login*/
function initLogin(){ /**@alias module:initLogin */
  loadUsers();  
  animationLogin();
  remember();
  displayMessage();
}

/**Start, stop animation */
function animationLogin(){
  let animationLogin = document.getElementById('animation-join');
  let joinLogo = document.getElementById('join-logo');
  
  setTimeout(function(){ 
    animationLogin.classList.add('d-none');
    joinLogo.classList.remove('d-none');
  }, 1000);
}

/**Check user input for login*/
async function userLogin(){
  let userEmail = document.getElementById('loginEmail');
  let userPassword = document.getElementById('loginPassword');
  let i = 0;

  let user = users.find(users => users.email.toLowerCase() == userEmail.value.toLowerCase() && users.password == userPassword.value); //tolowerCase = checks case-insensitive

  checkUserInput(user, userEmail, userPassword, i);
}

/**Check user input and call back
 * 
 * @param {string} user activ usser
 * @param {string} userEmail user login email
 * @param {string} userPassword user login password
 * @param {number} i array position
 */
async function checkUserInput(user, userEmail, userPassword, i){
  let msgBox = document.getElementById('msg-box');

  msgBox.innerHTML = '';

  if (user) {
    checkRemember(userEmail, userPassword);
    while (user != users[i]) {
      i++;
    }
    // currentUser.push({currentUser: i});
    await setItem('currentUser', JSON.stringify(i));
    console.log('geschafft')
    window.location.href = '../summary/summary.html';
  }else{
    window.location.href = 'index.html?msg=Incorrect email or password.';
  }
}

/**Guest log in*/
async function userGuest(){
  // currentUser.push({currentUser: ''});
  await setItem('currentUser', JSON.stringify(''));
  window.location.href = "../summary/summary.html"
}

/**this function check the remember checkbox and save in the local storage
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
  // currentUser.push({currentUser: ''});
  await setItem('currentUser', JSON.stringify(''));
  window.location.href = '../index.html';
}

function displayMessage(){
let msgBox = document.getElementById('msg-box');
if(msg){
  msgBox.classList.remove('d-none');
  msgBox.innerHTML = msg;
}else{
  msgBox.classList.add('d-none');
}
setTimeout(() => {
  msgBox.classList.add('d-none');
}, 2000);
}
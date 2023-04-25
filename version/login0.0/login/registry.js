let EmailIsAvailable = false;

/**
  *this function registry new User or checke Array users for existing email
  *
  *@param {Array} users - backend Array
  *@param {string} name - Name of the new user
  *@param {string} email - email of the new user
  *@param {string} password - password of the new user
 */
async function userSignUp() {
  let name = document.getElementById('signUpName');
  let email = document.getElementById('signUpEmail');
  let password = document.getElementById('signUpPassword');

  if (users.length === 0) {
    pushUserArray(name, email, password);
    returnToLogin();
  }else{
    checkEmailSignUp(name, email, password);
  }

  name.value = '';
  email.value = '';
  password.value = '';
}

/**
  *this function checked registerd User email and set boolean true or false
  *
  *@param {Array} users - backend Array
  *@param {string} name - Name of the new user
  *@param {string} email - email of the new user
  *@param {string} password - password of the new user
  *@param {string} userEmailSignedUp - registered user email
  *@param {boolean} EmailIsAvailable - toggle true or false if email exist
 */
function checkEmailSignUp(name, email, password){
  for (let i = 0; i < users.length; i++) {
    let userEmailSignedUp = users[i].email;
    if(EmailCheckAvailable(userEmailSignedUp, email)){
      EmailIsAvailable = true;
    }
    if(EmailIsAvailable == true){
      break;
    }
  }
  checkEmailAvailable(name, email, password);
}

/**
  *this function verify email
  *@param {string} email - email of the new user
  *@param {string} userEmailSignedUp - registered user email
 */
function EmailCheckAvailable(userEmailSignedUp, email){
  return userEmailSignedUp === email.value;
}

/**
  *this function look for exsited email
  *
  *@param {string} name - Name of the new user
  *@param {string} email - email of the new user
  *@param {string} password - password of the new user
  *@param {boolean} EmailIsAvailable - toggle true or false if email exist
 */
function checkEmailAvailable(name, email, password){
  if (EmailIsAvailable === true) {
    renderMsgBoxEmailNotAvailable();
    EmailIsAvailable = false;
  }else{
    pushUserArray(name, email, password);
    returnToLogin();
    EmailIsAvailable = false;
  }
}

/**
  *this function push array into backend
  *
  *@param {Array} users - backend Array
  *@param {*} backend - mini_backend.js variable
 */
async function pushUserArray(name, email, password){
  users.push({name: name.value, email: email.value, password: password.value, contacts, tasks});
  await setItem('users', JSON.stringify(users));
}

/**
  *this function return to login
  */
function returnToLogin(){
  let overlayCard = document.getElementById('login-card');

  overlayCard.innerHTML = '';
  overlayCard.innerHTML = generateHtmlLogin();
  document.getElementById('sign-up').classList.remove('d-none');
  renderMsgBoxRegestry();
}

/**
  *this function render message box "not available"
  */
function renderMsgBoxEmailNotAvailable(){
  let msgBox = document.getElementById('msg-box');

  msgBox.innerHTML = generateHtmlEmailNotAvailable();
  setTimeout(() => {
    msgBox.innerHTML = '';
  }, 2000);
}

/**
  *this function render message box "registered"
  */
function renderMsgBoxRegestry(){
  let msgBox = document.getElementById('msg-box');

  msgBox.innerHTML = generateHtmlRegistry();
  setTimeout(() => {
    msgBox.innerHTML = '';
  }, 2000);
}
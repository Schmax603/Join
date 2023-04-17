// 
// userLogin() => btn login
// userSignUp() => btn sign up
// newPasswordEmail() => btn forgot password
// 
let EmailIsAvailable = false;

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

function EmailCheckAvailable(userEmailSignedUp, email){
  return userEmailSignedUp === email.value;
}

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

async function pushUserArray(name, email, password){
  users.push({name: name.value, email: email.value, password: password.value});
  await backend.setItem('users', JSON.stringify(users));
}

function returnToLogin(){
  let overlayCard = document.getElementById('login-card');

  overlayCard.innerHTML = '';
  overlayCard.innerHTML = generateHtmlLogin();
  document.getElementById('sign-up').classList.remove('d-none');
  renderMsgBoxRegestry();
}

function renderMsgBoxEmailNotAvailable(){
  let msgBox = document.getElementById('msg-box');

  msgBox.innerHTML = generateHtmlEmailNotAvailable();
  setTimeout(() => {
    msgBox.innerHTML = '';
  }, 2000);
}

function renderMsgBoxRegestry(){
  let msgBox = document.getElementById('msg-box');

  msgBox.innerHTML = generateHtmlRegistry();
  setTimeout(() => {
    msgBox.innerHTML = '';
  }, 2000);
}
// 
// userLogin() => btn login
// userSignUp() => btn sign up
// newPasswordEmail() => btn forgot password
// 
async function userSignUp() {
  let name = document.getElementById('signUpName');
  let email = document.getElementById('signUpEmail');
  let password = document.getElementById('signUpPassword');

  users.push({name: name.value, email: email.value, password: password.value});
  await backend.setItem('users', JSON.stringify(users));

  name.value = '';
  email.value = '';
  password.value = '';
  returnToLogin();
}

function returnToLogin(){
  let overlayCard = document.getElementById('login-card');

  overlayCard.innerHTML = '';
  overlayCard.innerHTML = generateHtmlLogin();
  document.getElementById('sign-up').classList.remove('d-none');
  renderMsgBoxRegestry();
  
}
function renderMsgBoxRegestry(){
  let msgBox = document.getElementById('msg-box');

  msgBox.innerHTML = generateHtmlRegistry();
  setTimeout(() => {
    msgBox.innerHTML = '';
  }, 2000);
}
/**
 * Checks the email if it is registered
 */
function initNewPassword(){
  let requestEmail = localStorage.getItem('requestEmail');
  let checkedUser = users.find(users => users.email.toLowerCase() == requestEmail.toLowerCase()); //tolowerCase = checks case-insensitive
  
  if (checkedUser) {
    console.log(requestEmail);
    confirmPassword();
  }else{
    console.log('Wrong Email');
  }
}

async function confirmPassword(){
  let newPassword = document.getElementById('new-password');
  let confirmPassword = document.getElementById('confirm-password');
  let resetEmail = localStorage.getItem('requestEmail');

  if(newPassword.value == confirmPassword.value){
    for (let i = 0; i < users.length; i++) {
      let user = users[i];
      if(resetEmail == user['email']){
          user.password = newPassword.value;
          users[i]=user;
          await setItem('users', JSON.stringify(users));
          resetEmail = localStorage.setItem('requestEmail', '');
          window.location.href='../index.html?succsess=password';
          console.log(users, resetEmail);
      }
  }
  }else{
    console.log('Wrong Password');
  }
}


/**
 * generate Feedback succes password change
 */
function msgSuccesfullPasswordChange(){
  let overlayMsgBox = document.getElementById('overlay-msg-password');
  let msgBox = document.getElementById('msg-box-password');
  let body = document.getElementById('body-password');

  msgBox.classList.remove('d-none')
  overlayMsgBox.classList.add('overlay-msg');
  msgBox.classList.add('animate-msg');
  body.classList.add('overflow-h');

  setTimeout(() => {
    overlayMsgBox.classList.remove('overlay-msg');
    body.classList.remove('overflow-h');
    msgBox.classList.add('d-none')
  }, 2000);
  // todo link to index.html
}
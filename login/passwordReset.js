/**Save email into localStorage*/
function saveRequesterLocal(){
  let requestEmail = document.getElementById('requesterEmail');
  localStorage.setItem('requestEmail', '');
  localStorage.setItem('requestEmail', requestEmail.value);
}

/**Checks the email if it is registered*/
function initNewPassword(){
  let requestEmail = localStorage.getItem('requestEmail');
  let checkedUser = users.find(users => users.email.toLowerCase() == requestEmail.toLowerCase()); //tolowerCase = checks case-insensitive
  
  if (checkedUser) {
    console.log(requestEmail);
    confirmPassword();
  }else{
    window.location.href='../index.html?msg=Email does not exist';
  }
}

/**Checks the password input*/
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
          confirmMsg();
      }
  }
  }else{
    errorBox('confirm-password', 'confirm-password-label')
    // wrongPasswordInput();
  }
}

/**Generate message */
function confirmMsg(){
  window.location.href='../index.html?msg=You reset your password';
  // setTimeout(() => {
  //   window.location.href='..index.html'
  // }, 1000);
}

// function wrongPasswordInput(){
//   let newPassword = document.getElementById('new-password');
//   let confirmPassword = document.getElementById('confirm-password');

//   newPassword.value = '';
//   confirmPassword.value = '';
//   window.location.href='newPassword.html?msg=Make sure the second password you typed matches the first.';
// }


/**generate Feedback succes password change*/
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
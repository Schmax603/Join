function initNewPassword(){
  let requestEmail = localStorage.getItem('requestEmail');
  let checkedUser = users.find(users => users.email.toLowerCase() == requestEmail.value.toLowerCase()); //tolowerCase = checks case-insensitive
  
  if (checkedUser) {
    console.log(requestEmail);
  }else{
    console.log('Wrong Email')
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
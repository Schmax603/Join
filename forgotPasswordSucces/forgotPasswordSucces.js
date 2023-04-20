function saveRequesterLocal(){
  let requestEmail = document.getElementById('requesterEmail');

  localStorage.setItem('requestEmail', requestEmail.value);
}

function initMsg(){
  let overlayMsgBox = document.getElementById('overlay-msg');
  let msgBox = document.getElementById('msg-box');
  let body = document.getElementById('body');

  overlayMsgBox.classList.add('overlay-msg');
  msgBox.classList.add('animate-msg');
  body.classList.add('overflow-h');

  setTimeout(() => {
    overlayMsgBox.classList.remove('overlay-msg');
    msgBox.classList.add('d-none')
    body.classList.remove('overflow-h');
    window.location.href = "../login/newPassword.html";
  }, 2000);
}
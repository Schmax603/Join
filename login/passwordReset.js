function newPassword(){
  let userEmail = document.getElementById('requesterEmail');
}

function initMsgPassword(){
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
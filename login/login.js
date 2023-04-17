function userLogin(){
  let userEmail = document.getElementById('loginEmail');
  let userPassword = document.getElementById('loginPassword');
  let user = users.find(users => users.userEmail.toLowerCase() == userEmail.value.toLowerCase() && users.password == userPassword.value);
  let msgBox = document.getElementById('msg-box');

  msgBox.innerHTML = '';
  if (user) {
    console.log('user gefunden');
    window.location.href = '../summary/summary.html';
  }else{
    msgBox.innerHTML = generateHtmlWrongLogin();
  }
}

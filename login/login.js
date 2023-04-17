async function userLogin(){
  let userEmail = document.getElementById('loginEmail');
  let userPassword = document.getElementById('loginPassword');
  let msgBox = document.getElementById('msg-box');
  let i = 0;

  let user = users.find(users => users.email.toLowerCase() == userEmail.value.toLowerCase() && users.password == userPassword.value); //tolowerCase = checks case-insensitive

  msgBox.innerHTML = '';
  if (user) {
    checkRemember(userEmail, userPassword);
    while (user != users[i]) {
      i++;
    }
    await backend.setItem('currentUser', JSON.stringify({'currentUser':i}));
    console.log('geschafft')
    // window.location.href = '../summary/summary.html';
  }else{
    msgBox.innerHTML = generateHtmlWrongLogin();
  }
}

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

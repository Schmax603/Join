function initLogin(){
  let overlayCard = document.getElementById('login-card');
  let whiteLogo = document.getElementById('logo-white');

  setTimeout(function(){ 
    whiteLogo.classList.add('d-none');
  }, 1000);

  overlayCard.innerHTML = generateHtmlLogin();
}

function openSignUp(){
  let loginCard = document.getElementById('login-card');

  document.getElementById('sign-up').classList.add('d-none');
  loginCard.innerHTML = '';
  loginCard.innerHTML = generateHtmlSignUp();
}

function closeSignup(){
  let loginCard = document.getElementById('login-card');

  document.getElementById('sign-up').classList.remove('d-none');
  loginCard.innerHTML = '';
  initLogin();
}

function openForgotPassword(){
  let loginCard = document.getElementById('login-card');

  document.getElementById('sign-up').classList.add('d-none');
  loginCard.innerHTML = '';
  loginCard.innerHTML = generateHtmlForgotPassword();
}
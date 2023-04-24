/**
 * initiated login animation & generate login card
 */
function initLogin(){ /**@alias module:initLogin */
  let overlayCard = document.getElementById('login-card');
  let whiteLogo = document.getElementById('logo-white');

  setTimeout(function(){ 
    whiteLogo.classList.add('d-none');
  }, 1000);

  overlayCard.innerHTML = generateHtmlLogin();
}

/**open Sign up card */
function openSignUp(){
  let loginCard = document.getElementById('login-card');

  document.getElementById('sign-up').classList.add('d-none');
  loginCard.innerHTML = '';
  loginCard.innerHTML = generateHtmlSignUp();
}

/**
 * close Sign up card & jump to login card
 * @module initLogin
*/
function closeSignup(){
  let loginCard = document.getElementById('login-card');

  document.getElementById('sign-up').classList.remove('d-none');
  loginCard.innerHTML = '';
  initLogin();
}

/**open gorgot password card */
function openForgotPassword(){
  let loginCard = document.getElementById('login-card');

  document.getElementById('sign-up').classList.add('d-none');
  loginCard.innerHTML = '';
  loginCard.innerHTML = generateHtmlForgotPassword();
}
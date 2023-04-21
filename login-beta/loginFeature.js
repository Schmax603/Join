/**
 * initiated login animation
 * @module generateHtmlLogin
 */
function initLogin(){ /**@alias module:initLogin */
  let whiteLogo = document.getElementById('logo-white');

  setTimeout(function(){ 
    whiteLogo.classList.add('d-none');
  }, 1000);

}

/**open gorgot password card */
function openForgotPassword(){
  let loginCard = document.getElementById('login-card');

  document.getElementById('sign-up').classList.add('d-none');
  loginCard.innerHTML = '';
  loginCard.innerHTML = generateHtmlForgotPassword();
}
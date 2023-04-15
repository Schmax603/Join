function initLogin(){
  let overlayCard = document.getElementById('login-card');

  overlayCard.innerHTML = /*html*/`
        <div class="overlay-login-header">
          <h1 class="cursor-d fs-62-700">Log in</h1>
          <div class="border"></div>
        </div>

        <form class="overlay-login-form">
          <input type="email" placeholder="Email" required>
          <input type="password" placeholder="Password" required>
        </form>

        <div class="overlay-login-selection">

          <div class="overlay-login-selection-support">
            <div class="overlay-login-selection-support-remember">
              <input type="checkbox" class="cursor-p mr-20">
              <p class="cursor-d fs-16-400 mr-35">Remember me</p>
            </div>
            <p onclick="openForgotPassword()" class="cursor-p fc-lb fs-16-400">Forgot my password</p>
          </div>

          <div class="overlay-login-buttons">
            <button class="bg-c-db cursor-p fc-w fs-21-700">Log in</button>
            <button class="bg-c-w cursor-p fs-21-700">Guest Log in</button>
          </div>

        </div>
  `;
}

function openSignUp(){
  let loginCard = document.getElementById('login-card');

  document.getElementById('sign-up').classList.add('d-none');
  loginCard.innerHTML = '';

  loginCard.innerHTML = /*html*/`
     <img onclick="closeSignup()" class="overlay-login-arrow" src="../img/arrow_left_blue.png" alt="arrow left blue">
        <div class="overlay-login-header">
          <h1 class="cursor-d fs-62-700">Sign up</h1>
          <div class="border"></div>
        </div>

        <form class="overlay-login-form">
          <input type="name" placeholder="Name" required>
          <input type="email" placeholder="Email" required>
          <input type="password" placeholder="Password" required>
        </form>

        <div class="overlay-login-selection">

          <div class="overlay-login-buttons">
            <button class="bg-c-db cursor-p fc-w fs-21-700">Sign up</button>
          </div>
        </div>
  `;
}

function closeSignup(){
  let loginCard = document.getElementById('login-card');

  loginCard.innerHTML = '';
  initLogin();
  document.getElementById('sign-up').classList.remove('d-none');
}

function openForgotPassword(){
  let loginCard = document.getElementById('login-card');

  document.getElementById('sign-up').classList.add('d-none');
  loginCard.innerHTML = '';

  loginCard.innerHTML = /*html*/`
      <img onclick="closeSignup()" class="overlay-login-arrow" src="../img/arrow_left_blue.png" alt="arrow left blue">
        <div class="overlay-login-header">
          <h1 class="cursor-d fs-62-700">I forgot my password</h1>
          <div class="border"></div>
        </div>

        <form class="overlay-login-form">
          <p class="fs-21-400 ta-c mb-35">Don´t worry! We will send you an email with the instructions to reset your password.</p>
          <input type="email" placeholder="Email" required>
        </form>

          <div class="overlay-login-buttons">
            <button class="btn-send bg-c-db cursor-p fc-w fs-21-700">Send me the email</button>
          </div>
  `;
}
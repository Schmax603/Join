function generateHtmlLogin(){
  return /*html*/`
  <div class="overlay-login-header">
    <h1 class="cursor-d fs-62-700">Log in</h1>
    <div class="border"></div>
  </div>

  <!--!!! return false =>  prevents the page from reloading-->
  <form onsubmit="userLogin(); return false" class="overlay-login-form">
    <input id="loginEmail" type="email" placeholder="Email" autocomplete="current-password" required>
    <input id="loginPassword" type="password" placeholder="Password" autocomplete="current-password" required>
    
    <div class="overlay-login-selection">
      
      <div class="overlay-login-selection-support">
        <div class="overlay-login-selection-support-remember">
          <input id="remember-me" type="checkbox" class="cursor-p mr-20">
          <label for="remember" class="cursor-d fs-16-400 mr-35">Remember me</label>
        </div>
        <p onclick="openForgotPassword()" class="cursor-p fc-lb fs-16-400">Forgot my password</p>
      </div>
      
      <div class="overlay-login-buttons">
        <button type="submit" class="btn-dark bg-c-db cursor-p fc-w fs-21-700">Log in</button>
        <button onclick="location.href='../summary/summary.html'; generateHtmlGuest()" class="btn-bright bg-c-w cursor-p fs-21-700">Guest Log in</button>
      </div>
    </div>
  </form>
`
}

function generateHtmlWrongLogin(){
  return /*html*/`
  <div class="msg-box ta-c fs-21-400">
  Fehlerhafte Email oder Passwort.
</div>
`
}

function generateHtmlSignUp(){
  return /*html*/`
  <img onclick="closeSignup()" class="overlay-login-arrow cursor-p" src="../img/arrow_left_blue.png" alt="arrow left blue">
     <div class="overlay-login-header">
       <h1 class="cursor-d fs-62-700 ta-c">Sign up</h1>
       <div class="border"></div>
     </div>

     <!--!!! return false =>  prevents the page from reloading-->
     <form onsubmit="userSignUp(); return false" class="overlay-login-form">

       <input id="signUpName" type="name" placeholder="Name" autocomplete="current-password" required>
       <input id="signUpEmail" type="email" placeholder="Email" autocomplete="current-password" required>
       <input id="signUpPassword" type="password" placeholder="Password" autocomplete="current-password" required>

       <div class="overlay-login-buttons">
        <button type="submit" class="btn-dark bg-c-db cursor-p fc-w fs-21-700">Sign up</button>
      </div>

      </form>
      
      <!-- <div class="overlay-login-selection"></div> -->
`
}

function generateHtmlEmailNotAvailable(){
  return /*html*/`
  <div class="msg-box ta-c fs-21-400">
  Email bereits vorhanden.
</div>
`
}

function generateHtmlRegistry(){
  return /*html*/`
  <div class="msg-box ta-c fs-21-400">
  Du hast dich erfolgreich registriert.
</div>
`
}

function generateHtmlForgotPassword(){
  return /*html*/`
  <img onclick="closeSignup()" class="overlay-login-arrow cursor-p" src="../img/arrow_left_blue.png" alt="arrow left blue">
    <div class="overlay-login-header header-forgot-password">
      <h1 class="cursor-d fs-62-700 ta-c">I forgot my password</h1>
      <div class="border"></div>
    </div>

    <!--!!! return false =>  prevents the page from reloading-->
    <form onsubmit="newPasswordEmail(); return false" class="overlay-login-form">
      <p class="cursor-d fs-21-400 ta-c mb-35">Don´t worry! We will send you an email with the instructions to reset your password.</p>
      <input id="requesterEmail" type="email" placeholder="Email" autocomplete="current-password" required>
      
      <div class="overlay-login-buttons">
        <button type="submit" class="btn-dark btn-send bg-c-db cursor-p fc-w fs-21-700">Send me the email</button>
      </div>
    </form>
`
}
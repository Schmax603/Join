function generateHtmlLogin() {
  /**@alias module:generateHtmlLogin */
  return /*html*/`
  <div class="overlay-login-header">
    <h1 class="cursor-d fs-61 fw-700">Log in</h1>
    <div class="border"></div>
  </div>

  <!--!!! return false =>  prevents the page from reloading-->
  <form onsubmit="userLogin(); return false" class="overlay-login-form">
    <input id="loginEmail" type="email" placeholder="Email" autocomplete="current-password" title="" required>
    <input id="loginPassword" class="password-img" type="password" placeholder="Password" autocomplete="current-password" title="" required>
    
    <div class="overlay-login-selection">
      
      <div class="overlay-login-selection-support">
        <div class="checkbox">
          <input id="remember-me" type="checkbox" class="cursor-p">
          <label for="remember" class="cursor-d fs-16 fw-400 mr-35">Remember me</label>
        </div>
          <p onclick="openForgotPassword()" class="cursor-p c-lb fs-16 fw-400">Forgot my password</p>
      </div>
      
      <div class="overlay-login-buttons">
        <button type="submit" class="btn-dark bg-c-db cursor-p c-w fs-21 fw-700">Log in</button>
        <button onclick="userGuest(); return false" class="btn-bright bg-c-w cursor-p fs-21 fw-700">Guest Log in</button>
      </div>
    </div>
  </form>
`
}

function generateHtmlWrongLogin() {
  return /*html*/`
  <div class="msg-box ta-c fs-21 fw-400">
  Incorrect email or password.
</div>
`
}

function generateHtmlSignUp() {
  return /*html*/`
  <img onclick="closeSignup()" class="overlay-login-arrow arrow-black cursor-p img-16" src="../img/arrow_left.png" alt="arrow left black">
  <img onclick="closeSignup()" class="overlay-login-arrow arrow-blue cursor-p img-24" src="../img/arrow_left_blue.png" alt="arrow left blue">
     <div class="overlay-login-header">
       <h1 class="cursor-d fs-61 fw-700 ta-c">Sign up</h1>
       <div class="border"></div>
     </div>

     <!--!!! return false =>  prevents the page from reloading-->
     <form onsubmit="userSignUp(); return false" class="overlay-login-form">

       <input id="signUpName" type="name" placeholder="Name" autocomplete="current-password" title="" required>
       <input id="signUpEmail" type="email" placeholder="Email" autocomplete="current-password" title="" required>
       <input id="signUpPassword" class="password-img" type="password" placeholder="Password" autocomplete="current-password" title="" required>

       <div class="overlay-login-buttons">
        <button type="submit" class="btn-dark bg-c-db cursor-p c-w fs-21 fw-700">Sign up</button>
      </div>

    </form>
`
}

function generateHtmlEmailNotAvailable() {
  return /*html*/`
  <div class="msg-box ta-c fs-21 fw-400">
  Email already exists.
</div>
`
}

function generateHtmlRegistry() {
  return /*html*/`
  <div class="msg-box ta-c fs-21 fw-400">
  You have registered successfully.
</div>
`
}

function generateHtmlForgotPassword() {
  return /*html*/`
  <img onclick="closeSignup()" class="overlay-login-arrow arrow-black cursor-p img-16" src="../img/arrow_left.png" alt="arrow left black">
  <img onclick="closeSignup()" class="overlay-login-arrow arrow-blue cursor-p img-24" src="../img/arrow_left_blue.png" alt="arrow left blue">
    <div class="overlay-login-header header-forgot-password">
      <h1 class="cursor-d fs-61 fw-700-pw ta-c">I forgot my password</h1>
      <div class="border"></div>
    </div>

    <!--!!! return false =>  prevents the page from reloading-->
    <form onsubmit="saveRequesterLocal()" action="https://gruppe-534.developerakademie.net/send_mail.php" method="post" class="overlay-login-form">
      <p class="cursor-d fs-21  fw-400 ta-c mb-35">Don´t worry! We will send you an email with the instructions to reset your password.</p>
      
      <input id="requesterEmail" name="requesterEmail" type="email" placeholder="Email" autocomplete="current-password" title="" required>
      
      <div class="overlay-login-buttons">
        <button type="submit" class="btn-dark btn-send bg-c-db cursor-p c-w fs-21 fw-700">Send me the email</button>
      </div>
    </form>
`
}
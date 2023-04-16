function generateHtmlLogin(){
  return /*html*/`
  <div class="overlay-login-header">
    <h1 class="cursor-d fs-62-700">Log in</h1>
    <div class="border"></div>
  </div>

  <!--!!! return false =>  prevents the page from reloading-->
  <form onsubmit="addUser(), return false" class="overlay-login-form">
    <input id="loginEmail" type="email" placeholder="Email" required>
    <input id="loginPassword" type="password" placeholder="Password" required>
  </form>

  <div class="overlay-login-selection">

    <div class="overlay-login-selection-support">
      <div class="overlay-login-selection-support-remember">
        <input id="remember" type="checkbox" class="cursor-p mr-20">
        <label for="remember" class="cursor-d fs-16-400 mr-35">Remember me</label>
      </div>
      <p onclick="openForgotPassword()" class="cursor-p fc-lb fs-16-400">Forgot my password</p>
    </div>

    <div class="overlay-login-buttons">
      <button onclick="userLogin()" class="btn-dark bg-c-db cursor-p fc-w fs-21-700">Log in</button>
      <button onclick="location.href='../summary/summary.html';" class="btn-bright bg-c-w cursor-p fs-21-700">Guest Log in</button>
    </div>

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
     <form onsubmit="addUser(), return false" class="overlay-login-form">
       <input id="signUpName" type="name" placeholder="Name" required>
       <input id="signUpEmail" type="email" placeholder="Email" required>
       <input id="signUpPassword" type="password" placeholder="Password" required>
     </form>

     <div class="overlay-login-selection">

       <div class="overlay-login-buttons">
         <button onclick="userSignUp()" class="btn-dark bg-c-db cursor-p fc-w fs-21-700">Sign up</button>
       </div>
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
    <form onsubmit="addUser(), return false" class="overlay-login-form">
      <p class="cursor-d fs-21-400 ta-c mb-35">Don´t worry! We will send you an email with the instructions to reset your password.</p>
      <input id="requesterEmail" type="email" placeholder="Email" required>
    </form>

      <div class="overlay-login-buttons">
        <button onclick="newPasswordEmail()" class="btn-dark btn-send bg-c-db cursor-p fc-w fs-21-700">Send me the email</button>
      </div>
`
}
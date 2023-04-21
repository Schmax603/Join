function generateHtmlWrongLogin(){
  return /*html*/`
  <div class="msg-box ta-c fs-21-400">
  Incorrect email or password.
</div>
`
}

function generateHtmlEmailNotAvailable(){
  return /*html*/`
  <div class="msg-box ta-c fs-21-400">
  Email already exists.
</div>
`
}

function generateHtmlRegistry(){
  return /*html*/`
  <div class="msg-box ta-c fs-21-400">
  You have registered successfully.
</div>
`
}

function generateHtmlForgotPassword(){
  return /*html*/`
  <img onclick="closeSignup()" class="overlay-login-arrow arrow-black cursor-p img-16" src="../img/arrow_left.png" alt="arrow left black">
  <img onclick="closeSignup()" class="overlay-login-arrow arrow-blue cursor-p img-24" src="../img/arrow_left_blue.png" alt="arrow left blue">
    <div class="overlay-login-header header-forgot-password">
      <h1 class="cursor-d fs-62-700-pw ta-c">I forgot my password</h1>
      <div class="border"></div>
    </div>

    <!--!!! return false =>  prevents the page from reloading-->
    <form onsubmit="saveRequesterLocal()" action="https://gruppe-534.developerakademie.net/send_mail.php" method="post" class="overlay-login-form">
      <p class="cursor-d fs-21-400 ta-c mb-35">Don´t worry! We will send you an email with the instructions to reset your password.</p>
      
      <input id="requesterEmail" name="requesterEmail" type="email" placeholder="Email" autocomplete="current-password" required>
      
      <div class="overlay-login-buttons">
        <button type="submit" class="btn-dark btn-send bg-c-db cursor-p fc-w fs-21-700">Send me the email</button>
      </div>
    </form>
`
}
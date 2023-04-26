function generateHTMLGreetingGuest(greetings, mobileGreeting, timeOfDay){
greetings.innerHTML = /*html*/`
<p class="fs-47 fw-500 m-0">${timeOfDay}</p>
`;
return mobileGreeting.innerHTML = /*html*/`
<p class="fs-36 fw-400 m-0">${timeOfDay}</p>
`;
}

function generateHTMLGreetingUser(greetings, mobileGreeting, activUser, timeOfDay){
  greetings.innerHTML = /*html*/`
      <p class="fs-47 fw-500 m-0">${timeOfDay},</p>
      <p class="fs-64 fw-700 c-lb m-0">${users[activUser].name}</p>
    `;
  return mobileGreeting.innerHTML = /*html*/`
    <p class="fs-36 fw-400 m-0">${timeOfDay},</p>
    <p class="fs-47 fw-700 c-lb m-0">${users[activUser].name}</p>
  `; 
}
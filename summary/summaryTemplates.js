function generateHTMLGreetingGuest(greetings, mobileGreeting, timeOfDay){
greetings.innerHTML = /*html*/`
<p class="fs-47-500">${timeOfDay}</p>
`;
return mobileGreeting.innerHTML = /*html*/`
<p class="fs-36-400">${timeOfDay}</p>
`;
}

function generateHTMLGreetingUser(greetings, mobileGreeting, activUser, timeOfDay){
  greetings.innerHTML = /*html*/`
      <p class="fs-47-500">${timeOfDay},</p>
      <p class="fs-64-700 c-lb">${users[activUser].name}</p>
    `;
  return mobileGreeting.innerHTML = /*html*/`
    <p class="fs-36-400">${timeOfDay},</p>
    <p class="fs-47-700 c-lb">${users[activUser].name}</p>
  `; 
}
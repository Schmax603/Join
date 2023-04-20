function generateHTMLGreetingGuest(greetings, mobileGreeting){
greetings.innerHTML = /*html*/`
<p class="font-text-47">${timeOfDay}</p>
`;
return mobileGreeting.innerHTML = /*html*/`
<p class="font-text-36">${timeOfDay}</p>
`;
}

function generateHTMLGreetingUser(greetings, mobileGreeting, activUser){
  greetings.innerHTML = /*html*/`
      <p class="font-text-47">${timeOfDay},</p>
      <p class="username-64">${users[activUser].name}</p>
    `;
  return mobileGreeting.innerHTML = /*html*/`
    <p class="font-text-36">${timeOfDay},</p>
    <p class="username">${users[activUser].name}</p>
  `; 
}
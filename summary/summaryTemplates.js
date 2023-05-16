/**Render greeting for guests and time of day
 * 
 * @param {HTMLAnchorElement} greetings 
 * @param {HTMLAnchorElement} mobileGreeting 
 * @param {string} timeOfDay 
 * @returns 
 */
function generateHTMLGreetingGuest(greetings, mobileGreeting, timeOfDay) {
  greetings.innerHTML = /*html*/`
<p class="fs-47 fw-500 m-0">${timeOfDay}</p>
`;
  return mobileGreeting.innerHTML = /*html*/`
<p class="fs-36 fw-400 m-0">${timeOfDay}</p>
`;
}

/**Render greeting for user and time of day
 * 
 * @param {HTMLAnchorElement} greetings 
 * @param {HTMLAnchorElement} mobileGreeting 
 * @param {string} userIndex 
 * @param {string} timeOfDay 
 * @returns 
 */
function generateHTMLGreetingUser(greetings, mobileGreeting, userIndex, timeOfDay) {
  greetings.innerHTML = /*html*/`
      <p class="fs-47 fw-500 m-0">${timeOfDay},</p>
      <p class="fs-64 fw-700 c-lb m-0">${users[userIndex].name}</p>
    `;
  return mobileGreeting.innerHTML = /*html*/`
    <p class="fs-36 fw-400 m-0">${timeOfDay},</p>
    <p class="fs-47 fw-700 c-lb m-0">${users[userIndex].name}</p>
  `;
}
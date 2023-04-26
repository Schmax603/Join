let timeOfDay;

/**
 * Generate time of Day 
 */
function renderTimeOfDay(){
  let date = new Date;
  let hours = date.getHours();
  if(hours >= 7 && hours <= 13){
    timeOfDay = 'Good morning';
  }else if(hours >= 13 && hours <= 18){
    timeOfDay = 'Good afternoon';
  }else if(hours >= 18 && hours <= 22){
    timeOfDay = 'Good evening';
  }
  else if(hours >= 22 && hours <= 24 || hours >= 0 && hours <= 7){
    timeOfDay = 'Good night';
  }
}

/**
 * Generate greetings for user
 */
async function renderGreeting(){
  let greetings = document.getElementById('summary-infos-greeting');
  let mobileGreeting = document.getElementById('mobile-overlay');

  await loadUsers();
  let activUser = currentUser;
  renderTimeOfDay();

  greetings.innerHTML = '';
  mobileGreeting.innerHTML = '';

  if(activUser === ''){
    generateHTMLGreetingGuest(greetings, mobileGreeting, timeOfDay)
  }else{
    generateHTMLGreetingUser(greetings, mobileGreeting, activUser, timeOfDay)
  }
  
}
let timeOfDay;

function renderTimeOfDay(){
  let date = new Date;
  let hours = date.getHours();
  if(hours > 7 && hours < 13){
    timeOfDay = 'Good morning';
  }else if(hours > 13 && hours < 18){
    timeOfDay = 'Good afternoon';
  }else if(hours > 18 && hours < 22){
    timeOfDay = 'Good evening';
  }
  else if(hours > 22 && hours < 24 || hours > 0 && hours < 7){
    timeOfDay = 'Good night';
  }
}

function generateHtmlGuest(){
  let greetings = document.getElementById('summary-infos-greeting');

  greetings.innerHTML = /*html*/`
  <p class="font-text-47">${timeOfDay}</p>
  `;
}
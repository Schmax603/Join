/**This FUnction restricts the date so you can't pick dates in the past */
function setMinDate(){
  let dateToday = new Date();
  let month = dateToday.getMonth() + 1;
  let day = dateToday.getDate();
  let year = dateToday.getFullYear();

  if(month < 10)
      month = '0' + month.toString();
  if(day < 10)
      day = '0' + day.toString();
  let maxDate = year + '-' + month + '-' + day;    
  document.getElementById('date').setAttribute('min', maxDate);
}


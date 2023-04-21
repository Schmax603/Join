function saveRequesterLocal(){
  let requestEmail = document.getElementById('requesterEmail');
  localStorage.setItem('requestEmail', '');
  localStorage.setItem('requestEmail', requestEmail.value);
}
function toggleOverlays(className){  
  let callDocument = document.getElementById(`${className}`);

  callDocument.classList.toggle('d-none')
  if (className == 'help') {
    let helpIcon = document.getElementById('header-help-icon');
    helpIcon.classList.toggle('d-none');
  }
}
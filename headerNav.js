let checkMenu = false;

function toggleMenu(){
  let headerMenu = document.getElementById('mobile-drdo-menu');
  let body = document.getElementById('body');

  body.classList.toggle('of-hidden');
  headerMenu.classList.toggle('d-none');
  headerMenu.classList.add('animation');
  checkMenu = !checkMenu;
}

function toggleOverlays(className){  
  let callDocument = document.getElementById(`${className}`);
  let headerMenu = document.getElementById('mobile-drdo-menu');

  callDocument.classList.toggle('d-none')
  if (className == 'help') {
    let helpIcon = document.getElementById('header-help-icon');
    helpIcon.classList.toggle('d-none');
  }
  if (checkMenu == true) {
    headerMenu.classList.toggle('d-none');
    headerMenu.classList.add('animation');
    checkMenu = !checkMenu;
  }
}
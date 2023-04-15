let checkMenu = false;


async function initHeaderNav(){
  await includeHTML();
  // document.getElementById('headline').innerHTML = 'Herzlich Willkommen';
}

async function includeHTML(){
    // select all Elements with the same name "w3-include-html, [] = query ger.: abfrage"
  let includeElements = document.querySelectorAll('[w3-include-html]');
  for (let i = 0; i < includeElements.length; i++) {
    const element = includeElements[i];
      // read value from attribute
    file = element.getAttribute("w3-include-html");   // includes/header.html
    let resp = await fetch(file);   // load file ger.: Datei
      // security query
    if(resp.ok){
      element.innerHTML = await resp.text();
    }else{
      element.innerHTML = 'Page not found';
    }
  }
}

function toggleMenu(){
  let headerMenu = document.getElementById('mobile-drdo-menu');
  let body = document.getElementById('body');

  body.classList.toggle('of-hidden');
  headerMenu.classList.toggle('d-none');
  headerMenu.classList.add('animation');
  checkMenu = !checkMenu;
}

function closeMenu(){
  let headerMenu = document.getElementById('mobile-drdo-menu');
  let body = document.getElementById('body');

  body.classList.remove('of-hidden');
  headerMenu.classList.add('d-none');
  headerMenu.classList.remove('animation');
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
    body.classList.remove('of-hidden');
    headerMenu.classList.remove('d-none');
    headerMenu.classList.remove('animation');
    checkMenu = !checkMenu;
  }
}
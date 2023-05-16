checkMenu = false;

/**load async w3-school template loader */
async function initHeaderNav() {
    await includeHTML();
}

/**Load HTML-templates */
async function includeHTML() {
    // select all Elements with the same name "w3-include-html, [] = query ger.: abfrage"
    let includeElements = document.querySelectorAll('[w3-include-html]');
    for (let i = 0; i < includeElements.length; i++) {
        const element = includeElements[i];
        // read value from attribute
        file = element.getAttribute("w3-include-html");   // includes/header.html
        let resp = await fetch(file);   // load file ger.: Datei
        // security query
        if (resp.ok) {
            element.innerHTML = await resp.text();
        } else {
            element.innerHTML = 'Page not found';
        }
    }
}

/**Toggle Menu overlay */
function toggleMenu() {
    let headerMenu = document.getElementById('mobile-drdo-menu');
    let body = document.getElementById('body');

    body.classList.toggle('of-hidden');
    headerMenu.classList.toggle('d-none');
    headerMenu.classList.add('animation');
    checkMenu = !checkMenu;
}

/**Close menu outside overlay*/
function closeMenu() {
    let headerMenu = document.getElementById('mobile-drdo-menu');
    let body = document.getElementById('body');

    body.classList.remove('of-hidden');
    headerMenu.classList.add('d-none');
    headerMenu.classList.remove('animation');
    checkMenu = !checkMenu;
}

/**
 * Toggle following Overlays legal, help, menu 
 * 
 * @param {string} className - fill id legal, help
*/
function toggleOverlays(className) {
    let callDocument = document.getElementById(`${className}`);
    let headerMenu = document.getElementById('mobile-drdo-menu');

    document.getElementById('body').classList.toggle('o-flow-h');
    callDocument.classList.toggle('d-none')
    checkOverlays(className, headerMenu);
}

/**
 * Check overlays for closing or opening
 * 
 * @param {string} className - id legal, help
 * @param {string} headerMenu - call id
 */
function checkOverlays(className, headerMenu) {
    if (className == 'help') {
        document.getElementById('header-help-icon').classList.toggle('d-none');
        document.getElementById(`legal`).classList.add('d-none');
    }
    if (className == 'legal') {
        document.getElementById('header-help-icon').classList.remove('d-none');
        document.getElementById(`help`).classList.add('d-none');
    }
    if (checkMenu == true) {
        body.classList.remove('of-hidden');
        headerMenu.classList.remove('d-none');
        headerMenu.classList.remove('animation');
        checkMenu = !checkMenu;
    }
}
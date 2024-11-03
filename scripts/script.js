/////////////////////////////////////// VERANDERENDE HEADER //////////////////////////////////////

document.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector('nav');
    const navburger = document.querySelector('header button:nth-of-type(1) img');
    const navlogo = document.querySelector('header a:nth-of-type(1) img'); 
    const navaccount = document.querySelector('header a:nth-of-type(2) img');
    const navzoek = document.querySelector('header button:nth-of-type(2) img');

    function navVerander() {
        const scrollHoogte = 700;
        if (window.scrollY >= scrollHoogte) {
            navburger.src = 'images/menu_burger.png';
            navlogo.src = 'images/menu_logo.png';
            navaccount.src = 'images/menu_account.png';
            navzoek.src = 'images/menu_zoek.png';
            nav.classList.add('wit');
        } else {
            navburger.src = 'images/menu_burger_wit.png';
            navlogo.src = 'images/menu_logo_wit.png';
            navaccount.src = 'images/menu_account_wit.png';
            navzoek.src = 'images/menu_zoek_wit.png';
            nav.classList.remove('wit');
        }
    }

    window.addEventListener('scroll', navVerander);
});

// bronnen: hulp van julian, https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction, https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener, https://developer.mozilla.org/en-US/docs/Web/API/Element/classList

/////////////////////////////////////// HAMBURGERMENU //////////////////////////////////////

const hamburgerMenu = document.querySelector('.hamburger');
const burgerOpen = document.querySelector('#hamburgerknop');
const burgerSluit = document.querySelector('#hamburgerkruis');

function toggleHamburger() {
    if (hamburgerMenu.classList.contains('hamburgerhidden')) {
        hamburgerMenu.classList.remove('hamburgerhidden');
        hamburgerMenu.classList.add('visible');
        setTimeout(() => {
            hamburgerMenu.classList.add('animeren');
        }, 10);
    } else {
        hamburgerMenu.classList.remove('animeren');
        setTimeout(() => {
            hamburgerMenu.classList.remove('visible');
            hamburgerMenu.classList.add('hamburgerhidden');
        }, 200);
    }
}

burgerOpen.addEventListener('click', toggleHamburger);
burgerSluit.addEventListener('click', toggleHamburger);


// bronnen: opdracht op DLO, https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events#example_a_mobile_navigation_menu, en mijn eigen werk van Inleiding Programmeren vorig jaar

/////////////////////////////////////// ZOEKMENU //////////////////////////////////////

const zoekMenu = document.querySelector('.zoeken'); 
const knopZoeken = document.querySelector('#zoekknop');
const kruisZoeken = document.querySelector('#zoekkruis');


function toggleZoeken() {
    if (zoekMenu.classList.contains('zoekenhidden')) {
        zoekMenu.classList.remove('zoekenhidden');
        zoekMenu.classList.add('visible');
    
        setTimeout(() => {
            zoekMenu.classList.add('animate');
        }, 10);
    } else {
        zoekMenu.classList.remove('animate');
        setTimeout(() => {
            zoekMenu.classList.remove('visible');
            zoekMenu.classList.add('zoekenhidden');
        }, 200);
    }
}

knopZoeken.addEventListener('click', toggleZoeken);
kruisZoeken.addEventListener('click', toggleZoeken);

// bronnen: opdracht op DLO, https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events#example_a_mobile_navigation_menu, en mijn eigen werk van Inleiding Programmeren vorig jaar

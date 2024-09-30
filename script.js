function headerVerander(){
    const scrollHoogte = 300;

    if (window.scrollY >= scrollHoogte) {
        nav.classList.add('wit');
    } else {
        nav.classList.remove('wit');
    }
}

window.addEventListener('scroll', headerVerander);
// bron: hulp van julian!!!!





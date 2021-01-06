/**
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

//Global Variables
const mainNavigation = document.getElementById('navbar__list');
const sections = document.querySelectorAll('section');

// Build the nav
const navBuilder = () => {
    let navUI = '';
    //Looping over all sections
    sections.forEach(section => {

        const sectionId = section.id;
        const  sectionDataNav = section.dataset.nav;

        navUI += `<li><a class="menu__link" href="#${sectionId}">${sectionDataNav}</a></li>`
    });
    mainNavigation.innerHTML = navUI;
};

navBuilder();

// Add class 'active' to section when near top of viewport
const offset = (section) => {
    return Math.floor(section.getBoundingClientRect().top);
};
const removeActive = (section) => {
    section.classList.remove('active');
    //section.style.cssText = "background-color: linear-gradient(0deg, rgba(255,255,255,.1) 0%, rgba(255,255,255,.2) 100%)";
};
const addActive = (conditional, section) => {
    if(conditional){
        section.classList.add('active');
    };
};
const sectionActivation = () => {
    sections.forEach(section => {
        const elementOffset = offset(section);

        inviewport = () => elementOffset < 150 && elementOffset >= -150;

        removeActive(section);
        addActive(inviewport(),section);
    });
};

window.addEventListener('scroll' ,sectionActivation);

const scrolling = () => {
    const links = document.querySelectorAll('.navbar__menu a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            for(i = 0 ; i<sections ; i++){
                sections[i].addEventListener("click",sectionScroll(link));
            }
        });
    });

};

scrolling();

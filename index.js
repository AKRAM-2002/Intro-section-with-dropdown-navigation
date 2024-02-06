
function updateImage() {
    const desktopImage = document.getElementById('desktopImage');
    const mobileImage = document.getElementById('mobileImage');

    if (window.innerWidth <= 1024) {
        desktopImage.style.display = 'none';
        mobileImage.style.display = 'block';
    } else {
        desktopImage.style.display = 'block';
        mobileImage.style.display = 'none';
    }
}

// Call the function on page load and on window resize
window.addEventListener('load', updateImage);
window.addEventListener('resize', updateImage);

function toggleMenu() {
    const menuIcon = document.querySelector('.menu-icon');
    const closeIcon = document.querySelector('.close-icon');
    const mobileNav = document.querySelector('.nav-mobile');
    const header = document.querySelector('header');

    menuIcon.style.display = 'none';
    closeIcon.style.display = 'block';
    mobileNav.classList.add('active');
    header.classList.add('active');

   

    closeIcon.onclick = function () {
        menuIcon.style.display = 'block';
        closeIcon.style.display = 'none';
        mobileNav.classList.remove('active');
        header.classList.remove('active');
    };
}


/*

function toggleMenu() {

    const menuIcon = document.querySelector('menu-icon');
    const closeIcon = document.querySelector('close-icon');
    const navbar = document.querySelector('nav-mobile');
    const buttons = document.querySelector('.buttons');
    
    if (menuIcon.style.display === 'none' || menuIcon.style.display === '') {
        menuIcon.style.display = 'block';
        closeIcon.style.display = 'none';
    }
    else {
        menuIcon.style.display = 'none';
        closeIcon.style.display = 'block';
    }
    
    menuIcon.style.display = (menuIcon.style.display === 'none' || menuIcon.style.display === '')? 'block' : 'none';

    navbar.style.display = (navbar.style.display === 'none' || navbar.style.display === '') ? 'flex' : 'none';
    buttons.style.display = (buttons.style.display === 'none' || buttons.style.display === '') ? 'flex' : 'none';
}

*/

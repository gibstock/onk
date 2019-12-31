const sideNav = document.querySelector('.side-nav');
const mobileMenu = document.querySelector('.mobile-menu');


function toggleMenu(){
    if(mobileMenu.style.display === '' || mobileMenu.style.display === 'none'){
        mobileMenu.style.display = 'inherit';
        mobileMenu.style.opacity = '1';
    }else if(mobileMenu.style.display === 'inherit'){
        mobileMenu.style.display = 'none';
        mobileMenu.style.opacity = '0';
    }
}

sideNav.addEventListener('click', toggleMenu);


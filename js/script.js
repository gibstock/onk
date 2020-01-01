const sideNav = document.querySelector('.side-nav');
const mobileMenu = document.querySelector('.mobile-menu');
const img = document.querySelectorAll('img');
const banner = document.querySelector('.banner');
const logo = banner.querySelector('h3');


function toggleMenu(){
    if(mobileMenu.style.display === '' || mobileMenu.style.display === 'none'){
        mobileMenu.style.display = 'inherit';
        mobileMenu.style.opacity = '1';
    }else if(mobileMenu.style.display === 'inherit'){
        mobileMenu.style.display = 'none';
        mobileMenu.style.opacity = '0';
    }
}
function goHome(){
    location.assign('https://www.onk.gallery');
}
// function picLink(e){
//     alert('hi');
// }

sideNav.addEventListener('click', toggleMenu);
logo.addEventListener('click', goHome);
// picture.addEventListener('click', picLink);


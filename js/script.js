const sideNav = document.querySelector('.side-nav');
const mobileMenu = document.querySelector('.mobile-menu');
const img = document.querySelectorAll('img');


function toggleMenu(){
    if(mobileMenu.style.display === '' || mobileMenu.style.display === 'none'){
        mobileMenu.style.display = 'inherit';
        mobileMenu.style.opacity = '1';
    }else if(mobileMenu.style.display === 'inherit'){
        mobileMenu.style.display = 'none';
        mobileMenu.style.opacity = '0';
    }
}
// function picLink(e){
//     alert('hi');
// }

sideNav.addEventListener('click', toggleMenu);
// picture.addEventListener('click', picLink);


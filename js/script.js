const sideNav = document.querySelector('.side-nav');
const mobileMenu = document.querySelector('.mobile-menu');
const img = document.querySelectorAll('img');
const banner = document.querySelector('.banner');
const logo = banner.querySelector('h3');
document.addEventListener('DOMContentLoaded', function(){
    const artistMenu = document.querySelector('.floating-artist');
    if(artistMenu){
        const artBtn = artistMenu.querySelector('h1');
        const menuUl = artistMenu.querySelector('ul');
        artBtn.addEventListener('click', artListMenu);
        function artListMenu(){
            if(menuUl.style.display === '' || menuUl.style.display === 'none'){
                menuUl.style.display = 'inherit';
            }else if(menuUl.style.display === 'inherit'){
                menuUl.style.display = 'none';
            }
        }
    }
})




function goHome(){
    location.assign('https://www.onk.gallery');
}
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
logo.addEventListener('click', goHome);

// picture.addEventListener('click', picLink);


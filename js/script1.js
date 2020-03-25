const image = document.getElementById('image');
let currentPos = 0;
let images = ['/img-c/lrg-the-vineyard.jpg', '/img-c/peck-me-please.jpg', '/img-c/redwoods-green-hair.jpg'];

function photoSwitch(){
    if(++currentPos >= images.length){
        currentPos = 0;
    }
    image.src = images[currentPos];
    image.style.opacity = "1";
    
    
        
}
setInterval(photoSwitch, 6000);





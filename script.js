// Create a 16x16 grid of square divs
const container = document.querySelector('.container');





for (let i = 0; i <= 256; i++) {
    let square = document.createElement('div');
    square.className = 'squareDiv';

    container.appendChild(square);   

    square.addEventListener('mouseover', function(event) {
        if(event.buttons == 1) {
         event.preventDefault();
       
         square.style.background = 'black';
       
        }
       });
    
}

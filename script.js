let body = document.getElementsByTagName("body")[0];

let container = document.createElement("div");
    container.className = 'container';
    body.appendChild(container);

let buttons = document.querySelectorAll('button');

// dynamic grid size
    buttons.forEach((button)=>{
        button.addEventListener('click', ()=>{
            let size = Number(button.className);
            let squareNum = Math.sqrt(size);

            container.style.gridTemplateColumns = `repeat(${squareNum}, 1fr)`;
            container.style.gridTemplateRows = `repeat(${squareNum}, 1fr)`;

            for (let i = 0; i < size; i++) {
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
        })
    });

    




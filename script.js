let body = document.getElementsByTagName("body")[0];

let container = document.createElement("div");
    container.className = 'container';
   body.appendChild(container);




    let buttons = document.querySelectorAll('button');

    buttons.forEach((button)=>{
        button.addEventListener('click', ()=>{
            let size = Number(button.className);

            if(size == 64){
                container.style.gridTemplateColumns = 'repeat(8, 1fr)';
                container.style.gridTemplateRows = 'repeat(8, 1fr)';
            }else if(size == 256){
                container.style.gridTemplateColumns = 'repeat(16, 1fr)';
                container.style.gridTemplateRows = 'repeat(16, 1fr)';
            }else if(size == 576){
                container.style.gridTemplateColumns = 'repeat(24, 1fr)';
                container.style.gridTemplateRows = 'repeat(24, 1fr)';
            }else if(size == 1024){
                container.style.gridTemplateColumns = 'repeat(32, 1fr)';
                container.style.gridTemplateRows = 'repeat(32, 1fr)';
            }else if(size == 1600){
                container.style.gridTemplateColumns = 'repeat(40, 1fr)';
                container.style.gridTemplateRows = 'repeat(40, 1fr)';
            }else if(size == 2304){
                container.style.gridTemplateColumns = 'repeat(48, 1fr)';
                container.style.gridTemplateRows = 'repeat(48, 1fr)';
            }else if(size == 3136){
                container.style.gridTemplateColumns = 'repeat(56, 1fr)';
                container.style.gridTemplateRows = 'repeat(56, 1fr)';
            }else if(size == 4096){
                container.style.gridTemplateColumns = 'repeat(64, 1fr)';
                container.style.gridTemplateRows = 'repeat(64, 1fr)';
            }



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

    




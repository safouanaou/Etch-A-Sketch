let body = document.getElementsByTagName("body")[0];

let container = document.createElement("div");
    container.className = 'container';
    body.appendChild(container);

let buttons = document.querySelectorAll('button');

let color = document.getElementById('favcolor');

let clear = document.getElementById('clear');


// dynamic grid size
    // buttons.forEach((button)=>{
    //     button.addEventListener('click', ()=>{
    //         let size = Number(button.className);
    //         let squareNum = Math.sqrt(size);

            
            
    //     })
    // });

    function etchAsketch(){
        let rangeValue = document.getElementById('range').value;
        let gridSize = rangeValue**2;

        container.style.gridTemplateColumns = `repeat(${rangeValue}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${rangeValue}, 1fr)`;

        for (let i = 0; i < gridSize; i++) {
            let square = document.createElement('div');
            square.className = 'squareDiv';

            container.appendChild(square);   

            square.addEventListener('mouseover', function(event) {
                if(event.buttons == 1) {
                 event.preventDefault();
               
                 let colorInpt = color.value;
                 square.style.backgroundColor = colorInpt;
               
                }
               });

            //creating a button to clean the borad
            clear.addEventListener('click', ()=>{
            square.style.backgroundColor = 'white';
            })
        
            
        }
    }
    etchAsketch();


    


            
   
    




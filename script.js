let body = document.getElementsByTagName("body")[0];

let container = document.createElement("div");
    container.className = 'container';
    body.appendChild(container);

let buttons = document.querySelectorAll('button');

let color = document.getElementById('favcolor');

let range = document.getElementById('range');

let clear = document.getElementById('clear');

let rainbow = document.getElementById('rainbow');

let randomColor = Math.floor(Math.random()*16777215).toString(16);

let eraser = document.getElementById('eraser');

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


                //    making a button that makes random colors
                   rainbow.addEventListener('click', ()=>{
                    square.addEventListener('mouseover', function(event) {
                        if(event.buttons == 1) {
                         event.preventDefault();
    
                       
                        square.style.backgroundColor = `hsl(${Math.random()*360}, 100%, 50%)`
        
                        }
                       });
                   })



                   eraser.addEventListener('click', ()=>{
                        square.addEventListener('mouseover', function(event) {
                            if(event.buttons == 1) {
                                event.preventDefault();
    
                       
                             square.style.backgroundColor = 'white';
        
                            }
                       });
                   })
                   

            //creating a button to clean the borad
            clear.addEventListener('click', ()=>{
            square.style.backgroundColor = 'white';
            })
            
            // clear board when changing grid zize
            range.addEventListener('mousedown', ()=>{
                square.style.backgroundColor = 'white';
            })
        }
    }
    etchAsketch();


    


            
   
    




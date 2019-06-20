function loadKitchen(){
    clearScene();
    console.log(activeUser)
    const container = document.getElementById("content");
    document.body.style.backgroundImage ="url('../frontend/images/IMG-5707.JPG')"; 
    
    let gridContainer = document.createElement('div')
    gridContainer.classList.add('grid-container');
    for(let i=0; i < 83; i++){
        let newDiv = document.createElement('div');
        newDiv.id = i;
        gridContainer.appendChild(newDiv);
    }
    let textArea = document.createElement('text-area')
    textArea.classList.add('text-area')
    textArea.textContent = 'Click around for clues...'
    gridContainer.appendChild(textArea)
    container.appendChild(gridContainer);

  loadKitchenNavButton()
    
    // knightButton.addEventListener('click', ()=>{
    //     loadChessPage();
    // })
    let microwave = document.getElementById('38')
    microwave.addEventListener('click', ()=>{
        loadRiddlePage();
    })

    let dragButton = document.getElementById('60');
        dragButton.addEventListener('click', ()=>{
    loadDragPage();
    })


    function loadKitchenNavButton(){
        const backDiv = document.getElementById('20');
        const backbutton = document.createElement('img');
        backbutton.src = "./images/left.png";
        backDiv.appendChild(backbutton);
        backDiv.addEventListener('click', ()=>{
            loadCommons();
        })
    }


    if(activeUser.riddle_complete ==true){
    let coffeeButton = document.getElementById('34')
    coffeeButton.classList.add('clickable')
    microwave.classList.remove('clickable')
    coffeeButton.addEventListener('click', ()=>{
        loadCoffeePage(); 
        })
    } 

    if(activeUser.riddle_complete ==true){
        let letter1 = document.createElement('img')
        letter1.src = 'images/small-letter.png'
        let letterText = document.createElement('h1')
        letter1.classList.add('LETTER1')
        letterText.classList.add('LETTER1')
        letter1.style.border = "medium groove white";
        letterText.textContent = 'E'
        letterText.classList.add('letter-text-center')
        gridContainer.appendChild(letter1)
        gridContainer.appendChild(letterText)
        container.appendChild(gridContainer);
        } 

    if(activeUser.drag_complete ==true){
        let letter2 = document.createElement('img')
        letter2.src = 'images/small-letter.png'
        let letterText = document.createElement('h1')
        letter2.classList.add('LETTER2')
        letterText.classList.add('LETTER2')
        letter2.style.border = "medium groove white";
        letterText.textContent = 'C'
        letterText.classList.add('letter-text-center')
        gridContainer.appendChild(letter2)
        gridContainer.appendChild(letterText)
        container.appendChild(gridContainer);
        } 

    if(activeUser.chess_complete ==true){
        let letter3 = document.createElement('img')
        letter3.src = 'images/small-letter.png'
        let letterText = document.createElement('h1')
        letter3.classList.add('LETTER3')
        letterText.classList.add('LETTER3')
        letter3.style.border = "medium groove white";
        letterText.textContent = 'K'
        letterText.classList.add('letter-text-center')
        gridContainer.appendChild(letter3)
        gridContainer.appendChild(letterText)
        container.appendChild(gridContainer);
        } 

    if(activeUser.math_complete ==true){
        let letter4 = document.createElement('img')
        letter4.src = 'images/small-letter.png'
        let letterText = document.createElement('h1')
        letter4.classList.add('LETTER4')
        letterText.classList.add('LETTER4')
        letter4.style.border = "medium groove white";
        letterText.textContent = 'A'
        letterText.classList.add('letter-text-center')
        gridContainer.appendChild(letter4)
        gridContainer.appendChild(letterText)
        container.appendChild(gridContainer);
    } 
}

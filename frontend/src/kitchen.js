function loadKitchen(){
    clearScene();
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
    textArea.textContent = '[[TEXT BOX AREA. MAIN PAGE HELLO]]'
    gridContainer.appendChild(textArea)
    container.appendChild(gridContainer);

  
    let helpButton = document.getElementById('11')
    helpButton.setAttribute('id', 'help-button')
    let knightButton = document.getElementById('20')
    knightButton.setAttribute('id', 'knight-button')
    let microwave = document.getElementById('38')

    helpButton.addEventListener('click', ()=>{
        loadMessageBoard();
    })
    knightButton.addEventListener('click', ()=>{
        loadChessPage();
    })
    microwave.addEventListener('click', ()=>{
        loadRiddlePage();
    })
}
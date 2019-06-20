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

  loadKitchenNavButton()

    
    // knightButton.addEventListener('click', ()=>{
    //     loadChessPage();
    // })
    let microwave = document.getElementById('38')
    microwave.addEventListener('click', ()=>{
        loadRiddlePage();
    })
}

function loadKitchenNavButton(){
    const backDiv = document.getElementById('20');
    const backbutton = document.createElement('img');
    backbutton.src = "./images/left.png";
    backDiv.appendChild(backbutton);
    backDiv.addEventListener('click', ()=>{
        loadCommons();
    })
}
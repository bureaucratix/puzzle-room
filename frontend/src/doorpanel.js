function loadDoorPanel(){
    clearScene();
    console.log(activeUser)
    const container = document.getElementById("content");
    document.body.style.backgroundImage ="url('images/doorbackground.png')"; 
    
    let gridContainer = document.createElement('div')
    gridContainer.classList.add('grid-container');
    for(let i=0; i < 83; i++){
        let newDiv = document.createElement('div');
        newDiv.id = i;
        gridContainer.appendChild(newDiv);
    }
    let textArea = document.createElement('text-area')
    textArea.classList.add('text-area')
    textArea.textContent = 'Looks like you can type in a passcode here... 4 characters?'
    gridContainer.appendChild(textArea)
    container.appendChild(gridContainer);

  loadPanelBackButton()
} 

function loadPanelBackButton(){
    const backDiv = document.getElementById('41');
    const backbutton = document.createElement('img');
    backbutton.src = "./images/left.png";
    backDiv.appendChild(backbutton);
    backDiv.addEventListener('click', ()=>{
        loadCommons();
    })
}
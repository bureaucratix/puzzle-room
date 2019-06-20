function loadCommons(){
    clearScene();
    const container = document.getElementById("content");
    document.body.style.backgroundImage ="url('../frontend/images/commons.png')"; 
    
    let gridContainer = document.createElement('div')
    gridContainer.classList.add('grid-container');
    for(let i=0; i < 83; i++){
        let newDiv = document.createElement('div');
        newDiv.id = i;
        gridContainer.appendChild(newDiv);
    }
    let textArea = document.createElement('text-area')
    textArea.classList.add('text-area')
    textArea.textContent = 'In the common area, you see many interesting and very well-drawn things, not the least of which is the door to get out of here...'
    gridContainer.appendChild(textArea)
    container.appendChild(gridContainer);

  
    let whiteboard = document.getElementById('23')
    whiteboard.classList.add("clickable")
    whiteboard.addEventListener('click', ()=>{
        loadMessageBoard();
    })
    let whiteboard2 = document.getElementById('33')
    whiteboard2.classList.add("clickable")
    whiteboard2.addEventListener('click', ()=>{
        loadMessageBoard();
    })

    let chessboard = document.getElementById('45')
    chessboard.classList.add("clickable")
    chessboard.addEventListener('click', ()=>{
        loadChessPage();
    })
    let chessboard2 = document.getElementById('46')
    chessboard2.classList.add("clickable")
    chessboard2.addEventListener('click', ()=>{
        loadChessPage();
    })

    let note = document.getElementById('57')
    note.classList.add("clickable")
    note.addEventListener('click', ()=>{
        textArea.textContent ="The note reads: 14 + 22 = 40 | 2 + 2 = 4 | 24 + 2 = 30 ... A clue? Or is someone just really bad at math?"
    })

    let doorpanel = document.getElementById('20')
    doorpanel.classList.add("clickable")
    doorpanel.addEventListener('click', ()=>{
        loadDoorPanel();
    })
    let doorpanel2 = document.getElementById('21')
    doorpanel2.classList.add("clickable")
    doorpanel2.addEventListener('click', ()=>{
        loadDoorPanel();
    })
    let doorpanel3 = document.getElementById('30')
    doorpanel3.classList.add("clickable")
    doorpanel3.addEventListener('click', ()=>{
        loadDoorPanel();
    })
    let doorpanel4 = document.getElementById('31')
    doorpanel4.classList.add("clickable")
    doorpanel4.addEventListener('click', ()=>{
        loadDoorPanel();
    })

    // let chessboard = document.getElementById('38')
    // chessboard.classList.add("clickable")
    // knightButton.addEventListener('click', ()=>{
    //     loadChessPage();
    // })

    loadCommonsBackButton()
}

function loadCommonsBackButton(){
    const backDiv = document.getElementById('29');
    const backbutton = document.createElement('img');
    backbutton.src = "./images/right.png";
    backDiv.appendChild(backbutton);
    backDiv.addEventListener('click', ()=>{
        loadKitchen();
    })
}

// helpButton.addEventListener('click', ()=>{
//     loadMessageBoard();
// })
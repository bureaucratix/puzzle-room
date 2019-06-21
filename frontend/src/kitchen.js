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
    textArea.textContent = 'You find yourself in the kitchen, of all places. Better look around.'
    gridContainer.appendChild(textArea)
    container.appendChild(gridContainer);

  loadKitchenNavButton()
    
    // knightButton.addEventListener('click', ()=>{
    //     loadChessPage();
    // })
    let microwave = document.getElementById('38')
    microwave.classList.add('clickable')
    microwave.addEventListener('click', ()=>{
        loadRiddlePage();
    })

    let dragButton = document.getElementById('60');
    dragButton.classList.add('clickable')
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

        //fun color changer for text area
    let div44 = document.getElementById('44')
    let div43 = document.getElementById('43')
    let div42 = document.getElementById('42')
    let div41 = document.getElementById('41')
    let divArray = [div44, div43, div42, div41]
   
    function divColorChanger(divArray){
        divArray.forEach(function(div){
        div.addEventListener('mouseover', function(){
            var colors = ['#E6A7E0', '#A7A7E6', '#A7E6D1', '#E6A7E2', '#FDF694', '#D0FEBF'];
            var random_color = colors[Math.floor(Math.random() * colors.length)];
            textArea.style.backgroundColor = random_color;
        })
        })
    }
    
    divColorChanger(divArray)

    if(activeUser.riddle_complete ==true){
    let coffeeButton = document.getElementById('34')
    coffeeButton.classList.add('clickable')
    coffeeButton.addEventListener('click', ()=>{
        loadCoffeePage(); 
        })
    } 

    if(activeUser.found_complete ==true){
        const letter1div = document.getElementById('4')
        letter1div.classList.add('small-letter-div')

        let letter1 = document.createElement('img')
        letter1.src = 'images/small-letter.png'
        let letterText = document.createElement('h1')
        letter1.style.border = "medium groove white";
        letterText.textContent = 'E'
        letterText.classList.add('small-letter')
        letter1div.appendChild(letter1)
        letter1div.appendChild(letterText)
        } 

    if(activeUser.drag_complete ==true){
        const letter2div = document.getElementById('5')
        letter2div.classList.add('small-letter-div')
        let letter2 = document.createElement('img')
        letter2.src = 'images/small-letter.png'
        let letterText = document.createElement('h1')
        letter2.style.border = "medium groove white";
        letterText.textContent = 'C'
        letterText.classList.add('small-letter')
        letter2div.appendChild(letter2)
        letter2div.appendChild(letterText)
        } 

    if(activeUser.chess_complete ==true){
        const letter3div = document.getElementById('6')
        letter3div.classList.add('small-letter-div')
        let letter3 = document.createElement('img')
        letter3.src = 'images/small-letter.png'
        let letterText = document.createElement('h1')
        letter3.style.border = "medium groove white";
        letterText.textContent = 'K'
        letterText.classList.add('small-letter')
        letter3div.appendChild(letter3)
        letter3div.appendChild(letterText)
        } 

    if(activeUser.math_complete ==true){
        const letter4div = document.getElementById('7')
        letter4div.classList.add('small-letter-div')
        let letter4 = document.createElement('img')
        letter4.src = 'images/small-letter.png'
        let letterText = document.createElement('h1')
        letter4.style.border = "medium groove white";
        letterText.textContent = 'A'
        letterText.classList.add('small-letter')
        letter4div.appendChild(letter4)
        letter4div.appendChild(letterText)
    } 
}

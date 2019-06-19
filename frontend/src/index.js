window.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded and parsed');
    loadHomePage();
});

function loadHomePage(){
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

    //load listeners for homepage(HELP, MICROWAVE, MESSASGE BOARD)
    let help_button = document.getElementById('11')
    help_button.classList.add('help-button')
    let microwave = document.getElementById('38')

    help_button.addEventListener('click', ()=>{
        loadMessageBoard();
    })
    microwave.addEventListener('click', ()=>{
        loadRiddlePage();
    })
}


function loadRiddlePage(){
    clearScene();
    const container = document.getElementById("content");
    document.body.style.backgroundImage ="url('images/milan.jpg')";
    let gridContainer = document.createElement('div')
    gridContainer.classList.add('grid-container');
    for(let i=0; i < 69; i++){
        let newDiv = document.createElement('div');
        newDiv.id = i;
        gridContainer.appendChild(newDiv);
    }
    container.appendChild(gridContainer)
    loadBackButton();
    addRiddleForm();
}

function loadBackButton(){
    const backDiv = document.getElementById('59');
    const backbutton = document.createElement('img');
    backbutton.src = "./images/down.png";
    backDiv.appendChild(backbutton);
    backDiv.addEventListener('click', ()=>{
        loadHomePage();
    })
}


function addRiddleForm(){
    let riddleDiv = document.createElement('div')
    const container = document.getElementById("content");
    // document.body.prepend(riddleDiv)
    container.prepend(riddleDiv)
    riddleDiv.setAttribute('id', 'riddle-header')
    let form = document.createElement("form");
    form.id = 'riddle-form'

    let riddle = document.createElement('h1')
    riddle.id = 'riddle-input'

    riddleDiv.appendChild(riddle)
    riddleDiv.appendChild(form)  

    let r = document.createElement('h2')
    let answerField = document.createElement("input");
    form.appendChild(answerField)
    
    let submit = document.createElement('input');
    submit.setAttribute('type','submit');
    submit.classList.add('riddle-button')
    form.appendChild(submit)
    form.addEventListener('submit', function(event){
        
        event.preventDefault();
        let answer = (event.target[0].value)
        handleRiddleAnswer(answer, r.textContent)
      });

   
    let URL = 'http://localhost:3000//api/v1/riddles'

    fetch(URL, {mode: 'cors', headers: {
        'Content-Type': 'application/json',
        // 'Content-Type': 'application/x-www-form-urlencoded',
        }
    })
    .then(res=>{
        return res.json()
    })
    .then(json=>{getRiddle(json)})
}

let currentRiddle;

function getRiddle(json){
    let riddleDiv = document.getElementById("riddle-header");
    const riddle = json[Math.floor(Math.random()*json.length)];
    const r = document.getElementById('riddle-input')
    r.textContent = riddle.question
    r.classList.add('speech-bubble')
    riddleDiv.appendChild(r)
    currentRiddle = riddle
}


function clearScene(){
    const container = document.getElementById("content");
    while (container.firstChild) {
    container.removeChild(container.firstChild);
    }
}

// function loadMessageBoard(){
//     clearScene();
//     console.log("WILL LOAD MESSAGE BOARD PAGE HERE")
// }

function handleRiddleAnswer(answer){
    document.getElementById('riddle-form').remove()
    answer.toLowerCase()
    let riddleDiv = document.getElementById("riddle-header");
    let h = document.createElement('h1')
    let milanResponse;
    if (answer.includes(currentRiddle.answer)){
        milanResponse = 'Correct, young budding software developer!! I have unlocked a special feature in the kitchen just for you... perhaps forgo the booch and go get your caffeine fix *HINT HINT*'
        h.textContent = milanResponse
        setTimeout(function(){ loadHomePage()}, 3000);
      }else{
        milanResponse = `nope, dummy. The answer is ${currentRiddle.answer}! Don't come back here until you are ready for this HEAT.`
        h.textContent = milanResponse
        setTimeout(function(){loadHomePage()}, 3000);
      }
    h.classList.add('speech-bubble')
    riddleDiv.appendChild(h)
    
}





















function loadMessageBoard(){
    document.body.style.backgroundImage ="url('images/whiteboard.png')";
    clearScene();
    let URL = 'http://localhost:3000//api/v1/messages'
    fetch(URL).then(res=>res.json())
    .then(json=>{
        displayMessages(json, form)
    })
    let messagesDiv = document.createElement('div')
    let backButton = document.createElement('img');
    let topBar = document.createElement('div')
    let header = document.createElement('h1')
    let container = document.getElementById("content");
    let form = document.createElement("form");

    form.id = 'note-form' 
    messagesDiv.setAttribute('id', 'messages-div')
    header.textContent = 'Hints Left Behind'
    header.classList.add('white-board-title')
    topBar.appendChild(backButton)
    topBar.appendChild(header)
    container.appendChild(topBar)
    container.appendChild(form)
    container.appendChild(messagesDiv)

    backButton.src = "./images/left.png";
    topBar.appendChild(backButton);
    backButton.style= "position: absolute; top: 20px; left: 50px; height: 100px; width: 100px;"
    backButton.addEventListener('click', ()=>{
        loadHomePage();
    })

    let directions = document.createElement('h1')
    directions.textContent = 'Leave a clue for those who follow........'
    let answerField = document.createElement("input");
    let answerField2 = document.createElement("input");
    form.appendChild(directions)
    form.appendChild(answerField)
    form.appendChild(answerField2)
    
    let submit = document.createElement('input');
    submit.setAttribute('type','submit');
    submit.value = 'POST'

    submit.classList.add('riddle-button')
    answerField.classList.add('whiteboard-inputs')
    answerField2.classList.add('whiteboard-inputs')
    
    form.appendChild(submit)
    form.addEventListener('submit', function(event){
        
        event.preventDefault();
        let answer = event
       
        addNote(answer)}) 
}

function displayMessages(json, form){
      json.forEach(function(message){
        displayMessage(message);
    });
    
}

function displayMessage(message){
    let messageDiv = document.querySelector("#messages-div");
    let div = document.createElement('div')
    let h3 = document.createElement('h3')
    let p = document.createElement('p')
    h3.textContent = message.author
    p.textContent = message.content
    h3.classList.add('white-board-notes')
    p.classList.add('white-board-notes')

    div.appendChild(h3)
    div.appendChild(p)
    messageDiv.appendChild(div)

}

function addNote(answer){
    let author = answer.target.elements[0].value
    let content = answer.target.elements[1].value
    let URL = 'http://localhost:3000/api/v1/messages'
    let payload = {author: author, content: content}
    let config = {
        method: 'POST',
        body: JSON.stringify(payload), // data can be `string` or {object}!
        headers:{
          'Content-Type': 'application/json'
        }
      }
    fetch(URL, config)
        .then(response =>
            response.json()
        .then(json => {
            console.log(json);
            displayMessage(json)
        })
      );
}
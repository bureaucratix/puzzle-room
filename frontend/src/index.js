window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
    loadHomePage();
});


let container = document.getElementById("content");
const homepageNavigator = document.getElementById('82') 

function loadHomePage(){
    clearScene();
    const container = document.getElementById("content");
    document.body.style.backgroundImage ="url('../frontend/images/IMG-5707.JPG')"; 
    
    let homepageDiv = document.createElement('div')
    homepageDiv.classList.add('grid-container');
    for(let i=0; i < 83; i++){
        let newDiv = document.createElement('div');
        newDiv.id = i;
        homepageDiv.appendChild(newDiv);
}
    let textArea = document.createElement('text-area')
    textArea.classList.add('text-area')
    textArea.textContent = 'add content here for user to view'
    homepageDiv.appendChild(textArea)
    container.appendChild(homepageDiv);

        //load listeners for homepage(HELP, MICROWAVE, MESSASGE BOARD)
    let help_button = document.getElementById('11')
    help_button.classList.add('help-button')
    let microwave = document.getElementById('38')

    help_button.addEventListener('click', ()=>{
        loadMessageBoard();
    })
    microwave.addEventListener('click', ()=>{
        loadMicrowavePage(microwave);
    })
    
}


function loadMicrowavePage(microwave){
    document.body.style.backgroundImage ="url('images/milan.jpg')";
    loadMicrowaveListeners(microwave);
 
    addRiddleForm();
  }

function loadMicrowaveListeners(microwave){

//     microwave.removeEventListener('click', ()=>{
//         loadMicrowavePage(microwave);
//   })

    loadNavigator();
}

function loadNavigator(){
    const homepageNavigator = document.getElementById('82') 
    homepageNavigator.classList.add('navigator')
    homepageNavigator.addEventListener('click', ()=>{
        loadHomePage();
        loadHomePageListeners();
    })
}

// Dont think we need this with new clearScene addition...

//  function removeNavigator(){
//     const homepageNavigator = document.getElementById('82') 
//     homepageNavigator.classList.remove('navigator')
//     }

function addRiddleForm(){
    let riddleDiv = document.createElement('div')
    document.body.prepend(riddleDiv)
    riddleDiv.setAttribute('id', 'riddle-header')
    let form = document.createElement("form");
    form.id = 'riddle-form'

    let riddle = document.createElement('h1')
    riddle.id = 'riddle-input'

    riddleDiv.appendChild(riddle)
    riddleDiv.appendChild(form)  

    let r = document.createElement('h1')
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

    fetch(URL, {mode: 'cors'})
    .then(res=>res.json())
    .then(json=>{
        getRiddle(json)
    })
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
    let header = document.createElement('h1')
    header.textContent = 'Hints Left Behind'
    let container = document.getElementById("content");
    header.classList.add('white-board-title')
    container.appendChild(header)
    
    let form = document.createElement("form");
    form.id = 'note-form' 

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
    let container = document.getElementById("content");
    container.appendChild(form)
}

function displayMessage(message){
    let li = document.createElement('ul')
    let t = document.createElement('h1')
    let h3 = document.createElement('h3')
    let p = document.createElement('p')
    h3.textContent = message.author
    p.textContent = message.content
    h3.classList.add('white-board-notes')
    p.classList.add('white-board-notes')
    
    document.body.appendChild(li)
    li.appendChild(t)
    li.appendChild(h3)
    li.appendChild(p)
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
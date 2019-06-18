window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
    let textbox = document.querySelector(".TEXT-AREA")
   
    setHomePageImage();
    loadHomePageListeners();
    
});
const container = document.getElementById("content");
const homepageNavigator = document.getElementById('82') 

function setHomePageImage(){
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
    homepageDiv.appendChild(textArea)
    container.appendChild(homepageDiv);
    loadHomePageListeners();
}


function loadHomePageListeners(){
    let help_button = document.getElementById('11')
    help_button.classList.add('help-button')
    let microwave = document.getElementById('38')

    help_button.addEventListener('click', ()=>{
        loadMessageBoard();
    })
    microwave.addEventListener('click', ()=>{
        loadMicrowaveEvent();
    })
    
}

function loadMicrowaveEvent(){
    document.body.style.backgroundImage ="url('images/milan.jpg')";
    addRiddleForm();
    loadNavigator();

  }

function loadNavigator(){
    const homepageNavigator = document.getElementById('82') 
    homepageNavigator.classList.add('navigator')
    homepageNavigator.addEventListener('click', ()=>{
        setHomePageImage();
        loadHomePageListeners();
    })
}

// Dont think we need this with new clearScene addition...

//  function removeNavigator(){
//     const homepageNavigator = document.getElementById('82') 
//     homepageNavigator.classList.remove('navigator')
//     }

function addRiddleForm(){
    debugger
    let riddleHeader = document.createElement('div')
    riddleHeader.setAttribute("id", "riddle-header")
    document.body.prepend(riddleHeader)
    let form = document.createElement("form");
    form.id = 'riddle-form'

    let riddle = document.createElement('h1')
    riddle.id = 'riddle-input'

    riddleHeader.appendChild(riddle)
    riddleHeader.appendChild(form)  

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
    let riddleHeader = document.getElementById("riddle-header");
    const riddle = json[Math.floor(Math.random()*json.length)];
    const r = document.getElementById('riddle-input')

    r.textContent = riddle.question
    r.classList.add('speech-bubble')
    riddleHeader.appendChild(r)
    currentRiddle = riddle
}


function clearScene(){
    const container = document.getElementById("content");
    while (container.firstChild) {
    container.removeChild(container.firstChild);
    }
}

function loadMessageBoard(){
    clearScene();
    console.log("WILL LOAD MESSAGE BOARD PAGE HERE")
}

function handleRiddleAnswer(answer){
    document.getElementById('riddle-form').remove()
    answer.toLowerCase()
    let riddleHeader = document.getElementById("riddle-header");
    let h = document.createElement('h1')
    let milanResponse;
    if (answer.includes(currentRiddle.answer)){
        milanResponse = 'Correct, young budding software developer!! I have unlocked a special feature in the kitchen just for you... perhaps forgo the booch and go get your caffeine fix *HINT HINT*'
        h.textContent = milanResponse
        setTimeout(function(){ setHomePageImage(), loadHomePageListeners}, 3000);
      }else{
        milanResponse = `nope, dummy. The answer is ${currentRiddle.answer}! Don't come back here until you are ready for this HEAT.`
        h.textContent = milanResponse
        setTimeout(function(){setHomePageImage(), loadHomePageListeners()}, 3000);
      }
    h.classList.add('speech-bubble')
    riddleHeader.appendChild(h)
    
}


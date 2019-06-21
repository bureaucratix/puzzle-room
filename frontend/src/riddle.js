
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
    loadRiddleBackButton();
    addRiddleForm();
}

function loadRiddleBackButton(){
    const backDiv = document.getElementById('59');
    const backbutton = document.createElement('img');
    backbutton.src = "./images/down.png";
    backDiv.appendChild(backbutton);
    backDiv.addEventListener('click', ()=>{
        loadKitchen();
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
    answerField.classList.add('textinput')
    form.appendChild(answerField)
    
    let submit = document.createElement('input');
    submit.setAttribute('type','submit');
    submit.classList.add('textinput')
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

function handleRiddleAnswer(answer){
    
    let riddleDiv = document.getElementById("riddle-header");
    riddleDiv.removeChild(riddleDiv.lastChild)
    let h = document.createElement('h1')
    let milanResponse;
    if (answer.toLowerCase().includes(currentRiddle.answer)){
        milanResponse = 'Correct, young one! Perhaps you ought to celebrate with a nice warm cup of joe?'
        h.textContent = milanResponse 
        activeUser.riddle_complete = true
          updateUser(activeUser);

      }else{
        milanResponse = `No... Why would you think that?? Disgusting... 
        Don't come back here until you are ready for this HEAT.`
        h.textContent = milanResponse
        // setTimeout(function(){loadKitchen()}, 3000);
      }
    h.classList.add('speech-bubble')
    riddleDiv.appendChild(h)
    
}
function loadMessageBoard(){
    clearScene();
    document.body.style.backgroundImage ="url('images/whiteboard.png')";
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
    // topBar.appendChild(backButton)
    topBar.appendChild(header)
    container.appendChild(topBar)
    container.appendChild(form)
    container.appendChild(messagesDiv)

    backButton.src = "./images/left.png";
    topBar.appendChild(backButton);
    backButton.style= "position: absolute; top: 20px; left: 50px; height: 100px; width: 100px;"
    backButton.addEventListener('click', ()=>{
        loadCommons();
    })

    let directions = document.createElement('h1')
    directions.textContent = 'Leave a clue for those who follow...'
    let answerField = document.createElement("input");
    form.appendChild(directions)
    form.appendChild(answerField)
    
    let submit = document.createElement('input');
    submit.setAttribute('type','submit');
    submit.value = 'POST'

    submit.classList.add('riddle-button')
    answerField.classList.add('textinput')
    
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
    let author = activeUser.name
    let content = answer.target[0].value
    let URL = 'http://localhost:3000/api/v1/messages'
    let payload = {message: {author: activeUser.name, content: content, user_id: activeUser.id}}
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
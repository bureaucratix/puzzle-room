window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
    let textbox = document.querySelector(".TEXT-AREA")
    textbox.classList.add('text-area')
    textbox.textContent = 'Welcome to Flat Iron! Click around for a BIG SURPRISE'
  
    setHomePageImage();
    loadHomePageListeners();
    
});

const homepageNavigator = document.getElementById('82') 

function setHomePageImage(){
    document.body.style.backgroundImage ="url('../frontend/images/IMG-5707.JPG')";
    
    removeNavigator();
}


function loadHomePageListeners(){

    let help_button = document.getElementById('11')
    help_button.classList.add('help-button')

    let microwave = document.getElementById('39')
    
    help_button.addEventListener('click', ()=>{
        loadMessageBoard();
    })

    microwave.addEventListener('click', ()=>{
        loadMicrowaveEvent(microwave);
    })
    
}


function loadMicrowaveEvent(microwave){
    document.body.style.backgroundImage ="url('images/milan.jpg')";
    loadMicrowaveListeners(microwave);
    let textbox = document.querySelector(".TEXT-AREA")
    textbox.textContent = 'Milan has a riddle for you! :D '
    addRiddleForm();
  }

function loadMicrowaveListeners(microwave){

    microwave.removeEventListener('click', ()=>{
        loadMicrowaveEvent(microwave);
  })
    // document.querySelector(".chessboard").classList.remove("hidden");
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

function removeNavigator(){
    const homepageNavigator = document.getElementById('82') 
    homepageNavigator.classList.remove('navigator')
    }

function addRiddleForm(){
     
    var f = document.createElement("form");
    f.setAttribute('method',"post");
    f.setAttribute('action',"submit.php");

    // var r = document.createElement('p')
    
    // fetch('http://localhost:3000//api/v1/riddles')
    // .then(resp => resp.json())
    // .then(
    // )
    // r.textContent = Riddle[0]

    var i = document.createElement("input"); //input element, text
    i.setAttribute('type',"text");

    var s = document.createElement("input"); //input element, Submit button
    s.setAttribute('type',"submit");
    s.setAttribute('value',"Submit");
    f.appendChild(r);
    f.appendChild(i);
    f.appendChild(s);   
    document.body.appendChild(f)   
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




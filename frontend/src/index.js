window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
    let textbox = document.querySelector(".TEXT-AREA")
    textbox.classList.add('text-area')
    textbox.textContent = 'Welcome to Flat Iron! Click around for a BIG SURPRISE'
  
    
    loadHomePageListeners();
    
});

const homepageNavigator = document.getElementById('82') 

function setHomePageImage(){
    document.body.style.backgroundImage ="url('../frontend/images/IMG-5707.JPG')";
    
    removeNavigator();
}


function loadHomePageListeners(){

    
    let microwave = document.getElementById('39')
    
    microwave.addEventListener('click', ()=>{
        loadMicrowaveEvent(microwave);
    })
    
}


function loadMicrowaveEvent(microwave){
    document.body.style.backgroundImage ="url('images/microwave.jpg')";
    loadMicrowaveListeners(microwave);
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


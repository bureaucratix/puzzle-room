function loadCoffeePage(){
    clearScene();
    document.body.style.backgroundImage = "url('../frontend/images/coffee.jpg')";
    showLetter('E');
    activeUser.found_complete = true 
    updateUser(activeUser)

    

let backButton = document.createElement('img')
    let container = document.getElementById('content')
    backButton.src = "./images/left.png";
    container.appendChild(backButton);
    backButton.style= "float: left; height: 100px; width: 100px;"
    backButton.addEventListener('click', ()=>{
        loadKitchen();
    })

    
}


function loadMathPage(){
    
    clearScene();
    const container = document.getElementById("content");
    document.body.style.backgroundImage ="url('images/math-bg.png')"; 
 
    let gridContainer = document.createElement('div')
    gridContainer.classList.add('grid-container');
    for(let i=0; i < 83; i++){
        let newDiv = document.createElement('div');
        newDiv.id = i;
        gridContainer.appendChild(newDiv);
    }
    let textArea = document.createElement('text-area')
    textArea.classList.add('text-area')
    textArea.textContent = "Up in the vents, there's a scrap of paper and a broken, half-dusty calculator. Wait, how'd you even get up he-- whatever. Math?"
    gridContainer.appendChild(textArea)
    container.appendChild(gridContainer);
    loadMathBackButton()

    let formDiv = document.getElementById('53')
    formDiv.classList.add("math-form-div")
    let mathForm = document.createElement('form')
    let forminput = document.createElement('input')
    let formsub = document.createElement('input')
    forminput.classList.add('math-form-input')
    forminput.setAttribute('maxlength', '2')
    formsub.classList.add('math-form-submit')
    formsub.setAttribute('type','submit');
    mathForm.appendChild(forminput)
    mathForm.appendChild(formsub)
    formDiv.appendChild(mathForm)
    mathForm.addEventListener('submit', function(ev){
    ev.preventDefault();
    if (ev.target.elements[0].value === '12'){      
     showLetter('A');
     activeUser.math_complete = true 
    updateUser(activeUser)
    setTimeout(function(){ loadCommons()}, 2000);
    
        }else{
            window.alert('Nope! Here is a hint---this math problem is base 6')
        }
    })
}

function loadMathBackButton(){
    const backDiv = document.getElementById('60');
    const backbutton = document.createElement('img');
    backbutton.src = "./images/left.png";
    backbutton.style = "height: 100px; width: 100px; float:right;"
    backDiv.appendChild(backbutton);
    backDiv.addEventListener('click', ()=>{
        loadCommons();
    })
}
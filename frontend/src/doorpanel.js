function loadDoorPanel(){
    clearScene();
    console.log(activeUser)
    const container = document.getElementById("content");
    document.body.style.backgroundImage ="url('images/doorbackground.png')"; 
    
    let gridContainer = document.createElement('div')
    gridContainer.classList.add('door-grid-container');
    for(let i=0; i < 83; i++){
        let newDiv = document.createElement('div');
        newDiv.id = i;
        gridContainer.appendChild(newDiv);
    }
    let textArea = document.createElement('text-area')
    textArea.classList.add('text-area')
    textArea.textContent = 'Looks like you can type in a passcode here... 4 characters?'
    gridContainer.appendChild(textArea)
    container.appendChild(gridContainer);

  loadPanelBackButton()
  let div15 = document.getElementById('15')
  let div16 = document.getElementById('16')
  let div17 = document.getElementById('17')
  div15.remove();
  div16.remove();
  div17.remove();

  let formDiv = document.createElement('final-form-div')
  formDiv.classList.add("final-form-div")
  let finalForm = document.createElement('form')
  let forminput = document.createElement('input')
  forminput.classList.add('final-form-input')
  forminput.setAttribute('maxlength', '4')
  finalForm.appendChild(forminput)
  gridContainer.appendChild(formDiv)
  formDiv.appendChild(finalForm)

} 

function loadPanelBackButton(){
    const backDiv = document.getElementById('41');
    const backbutton = document.createElement('img');
    backbutton.src = "./images/left.png";
    backbutton.style = "height: 100px; width: 100px;"
    backDiv.appendChild(backbutton);
    backDiv.addEventListener('click', ()=>{
        loadCommons();
    })
}
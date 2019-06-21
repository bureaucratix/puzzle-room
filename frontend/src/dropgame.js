
function loadDragPage(){
  clearScene();
  var active = false;
  var currentX;
  var currentY;
  var initialX;
  var initialY;
  var xOffset = 0;
  var yOffset = 0;

  let answer1 = document.createElement('div')
  answer1.classList.add('contentBlock1')
  let answer2 = document.createElement('div')
  answer2.classList.add('contentBlock2')
  let answer3 = document.createElement('div')
  answer3.classList.add('contentBlock3')

  let contentDiv = document.getElementById("content");
  let circleDiv = document.createElement('div')
  let circle = document.createElement('IMG')
  let h3 = document.createElement('h1')
  h3.textContent = "Drag the images around to solve the puzzle!"
  h3.classList.add('instructions')
  
  circle.src = "images/b3.png"
  circleDiv.id = 'd-container'
  circle.id = 'd-item'
  document.body.style.backgroundColor = 'rgb(212, 221, 169)'
 

  //form 
  let form = document.createElement('form')
  let input = document.createElement('input')
  let submit = document.createElement('input')
  let formDiv = document.createElement('div')
  submit.setAttribute('type', 'submit')
  submit.classList.add('textinput')
  input.classList.add('textinput')
  input.placeholder = "Who said this..";
  form.id = 'form'
  
 
  
  form.appendChild(input)
  form.appendChild(submit)
  
  
  
  formDiv.appendChild(form)
  contentDiv.appendChild(circleDiv)
  circleDiv.appendChild(circle)
  circleDiv.addEventListener("mousedown", function(e){
      e.preventDefault();
      let dragItem = document.querySelector("#d-item");
      initialX = e.clientX - xOffset;
      initialY = e.clientY - yOffset;
    if (e.target === dragItem) {
      active = true;
    }
    });
  circleDiv.addEventListener("mouseup", function(e){
      e.preventDefault();
      initialX = currentX;
      initialY = currentY;
      active = false;
     });
    circleDiv.addEventListener("mousemove", function(e){
      e.preventDefault();
      let dragItem = document.querySelector("#d-item");
      if (active) {
          currentX = e.clientX - initialX;
          currentY = e.clientY - initialY;
        xOffset = currentX;
        yOffset = currentY;
       dragItem.style.transform = "translate3d(" + currentX + "px, " + currentY + "px, 0)";
      }
    });
    

    var activej = false;
    var currentXj;
    var currentYj;
    var initialXj;
    var initialYj;
    var xOffsetj = 0;
    var yOffsetj = 0;

    let circlej = document.createElement('IMG')
    circlej.src = "images/b1.png"
    circlej.id = 'j-item'
    circleDiv.appendChild(circlej)
    circleDiv.appendChild(h3)
    circlej.addEventListener("mousedown", function(e){
      e.preventDefault();
      
      
      let dragItem = document.getElementById("j-item");
      console.log(dragItem)
      initialXj = e.clientX - xOffsetj;
      initialYj = e.clientY - yOffsetj;
    if (e.target === dragItem) {
      activej = true;
    }
    });
    circleDiv.addEventListener("mouseup", function(e){
   
      e.preventDefault();
      initialXj = currentXj;
      initialYj = currentYj;
      activej = false;
    });
    circleDiv.addEventListener("mousemove", function(e){
      e.preventDefault(); 
      let dragItem = document.querySelector("#j-item");
      if (activej) {
          currentXj = e.clientX - initialXj;
          currentYj = e.clientY - initialYj;
        xOffsetj = currentXj;
        yOffsetj = currentYj;
      dragItem.style.transform = "translate3d(" + currentXj + "px, " + currentYj + "px, 0)";
      }
    });

  var activejk = false;
  var currentXjk;
  var currentYjk;
  var initialXjk;
  var initialYjk;
  var xOffsetjk = 0;
  var yOffsetjk = 0;

  let circlejk = document.createElement('IMG')
  circlejk.src = "images/b2.png"
  circlejk.id = 'jk-item'

  circleDiv.appendChild(circlejk)

    circlejk.addEventListener("mousedown", function(e){
      e.preventDefault();
      let dragItem = document.querySelector("#jk-item");
      initialXjk = e.clientX - xOffsetjk;
      initialYjk = e.clientY - yOffsetjk;
    if (e.target === dragItem) {
        activejk = true;
    }
    });

    circleDiv.addEventListener("mouseup", function(e){
    
      e.preventDefault();
      initialXjk = currentXjk;
      initialYjk = currentYjk;
      activejk = false;
    });

    circleDiv.addEventListener("mousemove", function(e){
      e.preventDefault();
      
      let dragItem = document.querySelector("#jk-item");
      //let elemBelow = document.elementFromPoint(event.clientX, event.clientY)
   
      if (activejk) {
          currentXjk = e.clientX - initialXjk;
          currentYjk = e.clientY - initialYjk;
        xOffsetjk = currentXjk;
        yOffsetjk = currentYjk;
      dragItem.style.transform = "translate3d(" + currentXjk + "px, " + currentYjk + "px, 0)";
      }
    });
    contentDiv.appendChild(formDiv)

    form.addEventListener('submit', function(ev){
      ev.preventDefault()
      let answer = ev.target.elements[0].value
      if (answer.toLowerCase().includes('hamlet')){
        console.log('correct!')
        while (contentDiv.firstChild) {
          contentDiv.removeChild(contentDiv.firstChild);
        }
          let h1 = document.createElement('h1')
          h1.classList.add('top')
          let letter = document.createElement('IMG')
          let h2 = document.createElement('h1')
          letter.src = 'images/letter.png'
          letter.classList.add('center-letter-paper')
          h2.classList.add('center-letter')
          h1.textContent = "That's right! Inexplicably, this leads you to look under the stool and find this:"
          contentDiv.appendChild(h1)
          contentDiv.appendChild(letter)
          contentDiv.appendChild(h2)
          h2.textContent = 'C'
          activeUser.drag_complete = true
          updateUser(activeUser);
          setTimeout(function(){ loadKitchen()}, 3000);
        }else{
        alert("Nothing happened...");
        }
  
  })
  let backButton = document.createElement('img')
  backButton.src = "./images/left.png";
  contentDiv.appendChild(backButton);
  backButton.style= "position: absolute; top: 20px; left: 50px; height: 100px; width: 100px;"
  backButton.addEventListener('click', ()=>{
    loadKitchen();
  })
}

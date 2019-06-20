
// let dragged;

// function drag(){
//     let container = document.getElementById("content");
//     let imgSection = document.createElement('section')
//     let ul = document.createElement('ul')
//     ul.id = 'students'
//     let li1 = document.createElement('li')
//     let img1 = document.createElement('img')
//     img1.id = 'milan'
//     img1.src = '/Users/hannaengel/Development/projects/puzzle-room/frontend/images/dd1.png'
//     img1.classList.add('drop-img')
//     let li2 = document.createElement('li')
//     let img2 = document.createElement('img')
//     img2.id = 'greg'
//     img2.src = '/Users/hannaengel/Development/projects/puzzle-room/frontend/images/dd2.png'
//     img2.classList.add('drop-img')
  

//     let section = document.createElement('section')
//     section.id = 'drop-zone'
//     section.classList.add('drop-zone')

//     container.appendChild(section)
    

//     container.appendChild(section)
//     section.appendChild(ul)
//     ul.appendChild(li1)
//     li1.appendChild(img1)
//     ul.appendChild(li2)
//     li2.appendChild(img2)

//     let dragged; // Keeps track of what's being dragged - we'll use this later! 
    
//      const students = document.getElementById('students');
//      students.addEventListener('dragstart', onDragStart);
//      students.addEventListener('dragend', onDragEnd);
//      const dropZone = document.getElementById('drop-zone');
//     dropZone.addEventListener('drop', onDrop);
//     dropZone.addEventListener('dragenter', onDragEnter);
//     dropZone.addEventListener('dragleave', onDragLeave);
//     dropZone.addEventListener('dragover', onDragOver);
    
//     }
    
// function onDragStart(event) {
//     let target = event.target;
//     console.log(event)
//     if (target && target.nodeName === 'IMG') { // If target is an image
//       dragged = target;
//       event.dataTransfer.setData('text', target.id);
//       event.dataTransfer.dropEffect = 'move';
//       // Make it half transparent when it's being dragged
//       event.target.style.opacity = .3;
//     }
//   }

//   function onDragEnd(event) {
//     console.log(event)
//     if (event.target && event.target.nodeName === 'IMG') {
//       // Reset the transparency
//       event.target.style.opacity = ''; // Reset opacity when dragging ends 
//       dragged = null; 
//     }
//   } 

  
//   function onDragOver(event) {
//     // Prevent default to allow drop
//     event.preventDefault();
//   }
  
//   function onDragLeave(event) {
//     event.target.style.background = '';
//   }
  
//   function onDragEnter(event) {
//     const target = event.target;
//     if (target) {
//         event.preventDefault();
        
//         event.dataTransfer.dropEffect = 'move'
//         target.style.background = 'pink';
//     }
//   }
  
//   function onDrop(event) {
//     const target = event.target;
//   //   while(target.hasChildNodes()){
//   //     target.removeChild('li');
//   // } 
//     if (target) {
//       target.style.backgroundColor = '';
//       event.preventDefault();
//       // Get the id of the target and add the moved element to the target's DOM
//       dragged.parentNode.removeChild(dragged);
//       dragged.style.opacity = '';
//       target.appendChild(dragged);
//     }
//   }
  



function drag(){
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
  
  circle.src = "/Users/hannaengel/Development/projects/puzzle-room/frontend/images/b3.png"
  circleDiv.id = 'd-container'
  circle.id = 'd-item'
  document.body.style.backgroundColor = 'rgb(212, 221, 169)'
 

  //form 
  let form = document.createElement('form')
  let input = document.createElement('input')
  let submit = document.createElement('input')
  let formDiv = document.createElement('div')
  submit.setAttribute('type', 'submit')
  input.placeholder = "Who wrote this..";
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
    circlej.src = "/Users/hannaengel/Development/projects/puzzle-room/frontend/images/b1.png"
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
  circlejk.src = "/Users/hannaengel/Development/projects/puzzle-room/frontend/images/b2.png"
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
      answer.toLowerCase()
      if (answer.includes('hamlet')){
        console.log('correct!')
        while (contentDiv.firstChild) {
          contentDiv.removeChild(contentDiv.firstChild);
        }
          let h1 = document.createElement('h1')
          h1.classList.add('top')
          let letter = document.createElement('IMG')
          let h2 = document.createElement('h1')
          letter.src = '/Users/hannaengel/Development/projects/puzzle-room/frontend/images/letter.png'
          letter.classList.add('center-letter-paper')
          h2.classList.add('center-letter')
          h1.textContent = 'Correct! Here is another piece of the puzzle...'
          contentDiv.appendChild(h1)
          contentDiv.appendChild(letter)
          contentDiv.appendChild(h2)
          h2.textContent = 'E'
          
          
    }else{
      alert("Nope! Try again.");
      }

    })
  }


//  function createDragItems(){

  //create variables in loop

//   let coords = [1,2,3,4]
//   for (var i = 0; i < coords.length; ++i) {
//       var str ="active"+ i+" = i";
//       eval(str);
//   }
//   for (var i = 0; i < coords.length; ++i) {
//       var str ="currentX"+ i+" = undefined";
//       eval(str);
//   }
//   for (var i = 0; i < coords.length; ++i) {
//          var str ="currentY"+ i+" = undefined";
//       eval(str);
//   }
//   for (var i = 0; i < coords.length; ++i) {
//       var str ="initialX"+ i+" = undefined";
//       eval(str);
//   }
//   for (var i = 0; i < coords.length; ++i) {
//        var str4="initialY"+ i+" = undefined";
//       eval(str);
//   }
//   for (var i = 0; i < coords.length; ++i) {
//       var str ="xOffset"+ i+" = '0'";
//       eval(str);
//   }
  
//   for (var i = 0; i < coords.length; ++i) {
//       var str ="yOffset"+ i+" = '0'";
//       eval(str);
//   }




  
//   console.log(initialX)
      
// }
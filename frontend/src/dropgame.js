
function dragDrop(){
    let container = document.getElementById("content");
    let ul = document.createElement('ul')
    ul.id = 'students'
    let li1 = document.createElement('li')
    let img1 = document.createElement('img')
    img1.id = 'milan'
    img1.src = '/Users/hannaengel/Development/projects/puzzle-room/frontend/images/milann.png'
    let li2 = document.createElement('li')
    let img2 = document.createElement('img')
    img2.id = 'greg'
    img2.src = '/Users/hannaengel/Development/projects/puzzle-room/frontend/images/greg.png'
    let li3 = document.createElement('li')
    let img3 = document.createElement('img')
    img3.src = '/Users/hannaengel/Development/projects/puzzle-room/frontend/images/Kristian.png'
    img3.id = 'kristian'

    container.appendChild(ul)
    ul.appendChild(li1)
    li1.appendChild(img1)
    ul.appendChild(li2)
    li2.appendChild(img2)
    ul.appendChild(li3)
    li3.appendChild(img3)

   
    let dragged; // Keeps track of what's being dragged - we'll use this later! 

    onDragStart(event) 
    
    onDragEnd(event) 
    
     const students = document.getElementById('students');
     students.addEventListener('dragstart', onDragStart);
     students.addEventListener('dragend', onDragEnd);
 
}
 
function onDragStart(event) {
    let target = event.target;
    console.log(event)
    if (target && target.nodeName === 'IMG') { // If target is an image
      dragged = target;
      event.dataTransfer.setData('text', target.id);
      event.dataTransfer.dropEffect = 'move';
      // Make it half transparent when it's being dragged
      event.target.style.opacity = .3;
    }
  }

  function onDragEnd(event) {
    console.log(event)
    if (event.target && event.target.nodeName === 'IMG') {
      // Reset the transparency
      event.target.style.opacity = ''; // Reset opacity when dragging ends 
      dragged = null; 
    }
  } 
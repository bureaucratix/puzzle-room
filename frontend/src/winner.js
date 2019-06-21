function loadWinnerPage(){
   
    document.body.style.backgroundImage = "url('../frontend/images/winner.jpg')";
    let content = document.getElementById('content')
    content.remove() 
    let container = document.createElement('div')
    document.body.appendChild(container)
    let h1 = document.createElement('h1')
    p1 = document.createElement('p')
    let linkDiv = document.createElement('div')
    let a = document.createElement('a')
    let h = document.createElement('a')
    h.href = 'https://github.com/hannaengel/'
    a.href = 'https://github.com/bureaucratix/'
    h.innerText = 'CLICK ME!'
    a.innerText = 'CLICK ME!'
    a.classList.add('winner-link-1')
    h.classList.add('winner-link-2')
    h1.classList.add('winner-text')
  
    h1.textContent = `${activeUser.name}, you've escaped!`
    container.appendChild(h1)
    container.appendChild(p1)
   
    container.appendChild(a)
    container.appendChild(h)

    console.log(activeUser)
}


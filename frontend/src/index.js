let activeUser = {}
window.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded and parsed');

   loadFrontPage()
    // loadKitchen()
});

function clearScene(){
    document.body.removeAttribute('style')
    const container = document.getElementById("content");
    while (container.firstChild) {
    container.removeChild(container.firstChild);
    }
}

function loadFrontPage(){
    clearScene()
    const container = document.getElementById('content')
    document.body.style.background = 'tan'
    let div = document.createElement('div')
    div.setAttribute('id', 'index-box')
    let h1 = document.createElement('h1')
    h1.textContent = 'Escape From School'
    h1.setAttribute('id', 'main-title')
    container.appendChild(h1)

    let p = document.createElement('p')
    p.textContent = 'Tell us-- what is your name?'
    

    let form = document.createElement('form')
    form.classList.add('user-form')

    let input = document.createElement('input')
    let submit = document.createElement('input')
    submit.setAttribute('type', 'submit')


    div.appendChild(p)
    div.appendChild(form)
    container.appendChild(div)
    form.appendChild(input)
    form.appendChild(submit)

    form.addEventListener('submit', function(event){
        event.preventDefault();
        let name = event.target[0].value
        createUser(name)
        loadKitchen()
    }) 
}

function createUser(name) {
    let payload = {name: name}
    let config = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(payload)
    }
    
    fetch('http://localhost:3000/api/v1/users', config)
    .then(res => res.json())
    .then(json => {
        activeUser = json
    })

}
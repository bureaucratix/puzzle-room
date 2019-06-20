window.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded and parsed');
    drag();
});

function clearScene(){
    const container = document.getElementById("content");
    while (container.firstChild) {
    container.removeChild(container.firstChild);
    }
}


function landingPage(){
    const chessboard = document.querySelector('.chessboard')
    chessboard.remove();
    const container = document.getElementById('content')
    document.body.style.background = 'blue'
    let h1 = document.createElement('h1')
    
    h1.textContent = 'Enter If You Dare'
    container.appendChild(h1)
    let form = document.createElement('form')
    let input = document.createElement('input')
    let submit = document.createElement('input')
    submit.setAttribute('type', 'submit')

    container.appendChild(form)
    form.appendChild(input)
    form.appendChild(submit)

    
}
const ChessPieceAssignment = {
    1: "♜",4: "♛",6: "♜",7: "♚",9: "♟",11: "♟",14: "♟",15: "♟",
    16: "♟",17: "♝",18: "♟",19: "♞",20: "♝",21: "♟",22: "♞",33: "♙",
    39: "♙",42: "♙",43: "♘",45: "♙",46: "♙",48: "♙",50: "♗",51: "♙",
    52: "♙",55: "♗",57: "♖",60: "♕",61: "♔",63: "♘",64: "♖"
}

function loadChessPage() {
    clearScene();

    let chessboard = document.createElement('div')
    chessboard.classList.add("chessboard")
    const container = document.getElementById("content");
    container.appendChild(chessboard)

    for(let row=0; row<8; row++){
        if (row%2==1){
            for(let i=1; i<=8; i++){
                let square = document.createElement('div')
                if (i%2==1){
                    square.classList.add('black')
                } else {
                    square.classList.add('white')
                }
                square.setAttribute('id', (8 * row) + i)
                let chessboard = document.querySelector(".chessboard")
                chessboard.appendChild(square)
                if (ChessPieceAssignment[(8 * row) + i]){
                    square.textContent = ChessPieceAssignment[(8 * row) + i]
                }
            }
        } else {
            for(let i=1; i<=8; i++){
                let square = document.createElement('div')
                if (i%2==1){
                    square.classList.add('white')
                } else {
                    square.classList.add('black')
                }
                square.setAttribute('id', (8 * row) + i)
                let chessboard = document.querySelector(".chessboard")
                chessboard.appendChild(square)
                if (ChessPieceAssignment[(8 * row) + i]){
                    square.textContent = ChessPieceAssignment[(8 * row) + i]
                }
            }
        }
    }
    addWinEvent()
    addClickToAll()

    let backButton = document.createElement('img')
    backButton.src = "./images/right.png";
    container.appendChild(backButton);
    backButton.style= "float: left; height: 100px; width: 100px;"
    backButton.addEventListener('click', ()=>{
        loadCommons();
    })

}


function wrongSquare(){
    let allSquares = document.querySelectorAll(".chessboard div");
    allSquares.forEach((square)=>{
        if (square.classList.contains("lightUp")){
            square.classList.remove("lightUp")
            square.classList.add("wrong")
            setTimeout(function(){ 
                square.classList.remove("wrong")
            }, 200);
            
        }
    })
}

function addClickToAll(){
    let allSquares = document.querySelectorAll(".chessboard div");
    allSquares.forEach((square)=>{
        square.addEventListener("click", ()=>{

            if (document.querySelectorAll(".lightUp").length != 0){
                wrongSquare()
                
            } else {
                square.classList.add("lightUp")
            }
        })
    })
}

function addWinEvent(){
    document.getElementById("47").addEventListener("click", ()=>{
        if (document.getElementById("20").classList.contains("lightUp")){
            document.getElementById("29").classList.add("chesshidden")
            document.getElementById("36").classList.add("chesshidden")
            document.getElementById("37").classList.add("chesshidden")
            let img = document.createElement("img")
            img.classList.add("breakout")
            img.src = "images/k.png"
            document.getElementById("28").appendChild(img)
            activeUser.chess_complete = true 
            updateUser(activeUser)

        }        
    })
}
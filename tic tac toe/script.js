let quadrados = document.querySelectorAll(".quadrados")
let turno = document.getElementById('vez')
const vitoria = document.getElementById('display')
const player1 = "O"
const player2 = "X"
var playtime = player1
var gameOver = false

atualizaDisplay()
clickUser()
function atualizaDisplay(){
    if(gameOver){
        return 
    }

    if(playtime == player1){
        turno.innerHTML = "Jogador: " + player1
    }
    else{
        turno.innerHTML = "Jogador: " + player2
    }
}

function clickUser(){
    quadrados.forEach((nome, indice) =>{
        quadrados[indice].onclick = () =>{
            if(gameOver) { return }
            if(playtime == player1){
                turno.innerHTML = "Jogador: " + player1
                quadrados[indice].innerHTML = player1
                quadrados[indice].setAttribute("jogada", player1)
                playtime = player2
                verificarVencedor()
               
               
            }else{
                turno.innerHTML = "Jogador: " + player2
                quadrados[indice].innerHTML = player2
                quadrados[indice].setAttribute("jogada", player2)
                playtime = player1
            }
            atualizaDisplay()
        }
    })
}

function verificarVencedor(){
    const vencedor = document.querySelector(".orga span")
    const c1 = quadrados[0].getAttribute("jogada")
    const c2 = quadrados[1].getAttribute("jogada")
    const c3 = quadrados[2].getAttribute("jogada")

  
    if(c1 != "" && c1 == c2 &&  c2 == c3) {
        vitoria.classList.remove("selected")
        vencedor.innerHTML = "Vencedor: " + c1
    }
}

let fim = document.getElementById('reload')
fim.addEventListener("click", function(){
    location.reload()
})

function teste(){
  
    quadrados.forEach((nome, indice) => {
        let aux = quadrados[indice].getAttribute("jogada")
        if(aux != ""){
            console.log(aux)
        }
    })
  
}
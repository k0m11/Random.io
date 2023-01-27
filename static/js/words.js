let alphabet = 'abcdefghijklmnopqrstuvwxyz'
let lenghtChoose = document.getElementById("range")
let sum = document.querySelector("#result")

function Start(){
    render()
}

function render(){
    let length = lenghtChoose.value
    let choose = alphabet[Math.floor(Math.random()*alphabet.length)]
    sum.innerHTML = choose.repeat(length)
}



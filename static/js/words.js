let alphabet = 'abcdefghijklmnopqrstuvwxyz'
let lenghtChoose = document.getElementById("range")
let sum = document.querySelector("#result")

function render(){
    let length = lenghtChoose.value
    let result = ' ';
    for(let i = 0; i < length; i++) {
        result += 
        String.fromCharCode(97 + Math.floor(Math.random() * alphabet.length));
    }
    sum.innerHTML = result
}




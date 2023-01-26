const From = document.querySelector("#fromNum")
const To = document.querySelector("#toNum")
let sum = document.querySelector("#result")

function Start(){
    render()
}

function render(){
    first = parseInt(From.value)
    second = parseInt(To.value)
    result = Math.floor(Math.random() * (second - first) + 1) + first;
    console.log(result + "  SUS")
    sum.innerHTML = result
    console.log(result)
}

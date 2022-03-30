let arr = new Array()

function criarElemento() {

    const valorInput = document.getElementById("text").value
    const divMostrar = document.querySelector(".mostrar")

    const paragrafo = document.createElement("p")

    paragrafo.innerHTML = valorInput

    divMostrar.appendChild(paragrafo)

    return valorInput
}
function adicionarBloco() {

    let resultado = criarElemento()

    arr.push(resultado)

    console.log(arr)
}

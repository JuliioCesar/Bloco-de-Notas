let arr = new Array()

function criarElemento() {

    const valorInput = document.getElementById("text").value

    const divMostrar = document.querySelector(".mostrar")
    
    const buttonExcluir = document.createElement('button')
    buttonExcluir.innerHTML = 'Excluir'
    const paragrafo = document.createElement("p")
    
    paragrafo.innerHTML = buttonExcluir
    paragrafo.innerHTML = valorInput
    
    paragrafo.appendChild(buttonExcluir)
    divMostrar.appendChild(paragrafo)

    buttonExcluir.onclick = function () {
        paragrafo.remove()
    }

    return valorInput
}
function adicionarBloco() {

    let resultado = criarElemento()

    arr.push(resultado)

    console.log(arr)
}

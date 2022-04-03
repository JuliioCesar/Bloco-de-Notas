let arr = new Array()

function criarElemento() {

    const valorInput = document.querySelector(".text").value
    
    const divMostrar = document.querySelector(".mostrar")
    
    const divContainer = document.createElement("div")
    const buttonCheck = document.createElement('input')
    buttonCheck.setAttribute("type", "checkbox")

    const buttonExcluir = document.createElement('button')
    buttonExcluir.innerHTML= "Excluir"

    buttonCheck.addEventListener("click", () => {
        paragrafo.style.textDecoration = "line-through"
    })
    
    const paragrafo = document.createElement("p")

    
    paragrafo.innerHTML = buttonCheck
    paragrafo.innerHTML = valorInput

    buttonExcluir.onclick = function () {
        divContainer.remove()
        paragrafo.remove()
    }

    divContainer.appendChild(buttonExcluir)
    paragrafo.append(buttonCheck)
    divMostrar.appendChild(paragrafo)
    divMostrar.appendChild(divContainer)
    
    return valorInput
}

function adicionarBloco() {

    let resultado = criarElemento()
    arr.push(resultado)
    console.log(arr)
}

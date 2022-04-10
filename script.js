let arr = new Array()

function criarElemento() {

    const valorInput = document.querySelector(".input-01").value
    
    const divMostrar = document.querySelector(".mostrar")
    
    const divContainer = document.createElement("div")
    divContainer.className = "c-div"
    
    const buttonCheck = document.createElement('input')
    buttonCheck.setAttribute("type", "checkbox")

    const buttonExcluir = document.createElement('button')
    buttonExcluir.innerHTML= "X"

    buttonCheck.addEventListener("click", () => {
        if (buttonCheck.checked) {
            paragrafo.style.textDecoration = "line-through"
        } else {
            paragrafo.style.textDecoration = "none"
        }
        
    })
    
    const paragrafo = document.createElement("p")

    
    paragrafo.innerHTML = buttonCheck
    paragrafo.innerHTML = valorInput

    buttonExcluir.onclick = function () {
        divContainer.remove()
        paragrafo.remove()
    }

    //paragrafo.append(buttonCheck)
    divMostrar.appendChild(paragrafo)
    divContainer.appendChild(paragrafo)
    divContainer.appendChild(buttonCheck)
    divContainer.appendChild(buttonExcluir)
    
    divMostrar.appendChild(divContainer)
    
    return valorInput
}

function adicionarBloco() {

    let resultado = criarElemento()
    arr.push(resultado)
    console.log(arr)
}

const formulario = document.querySelector("#formulario")
const texto = document.querySelector("#texto")

const lista = document.querySelector("#lista")

formulario.addEventListener("submit", (evento)=>{
    evento.preventDefault()

    const novo_elemento = document.createElement("li")
    const checkbox= document.createElement("input")
    const span = document.createElement("span")
    const button= document.createElement("button")

    button.textContent = "Excluir"
    button.textcontent = "img"

    novo_elemento.appendChild(checkbox)
    novo_elemento.appendChild(span)
    novo_elemento.appendChild(button)

    checkbox.type = "checkbox"

    span.textContent = texto.value 


    
    
    lista.appendChild(novo_elemento)

button.addEventListener("click", ()=> {
    novo_elemento.remove("li")
})

checkbox.addEventListener("click", ()=> {  span.style.textDecoration = checkbox.checked ? "line-through" : "none";
    
})



    

    texto.value = ""
    texto.focus()
} )
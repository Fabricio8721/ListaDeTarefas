function adicionar(){
let tarefa = document.querySelector("input").value

if(tarefa === ''){
    alert("Por favor, insira uma tarefa.")
    return
}

let li = document.createElement("li")
li.innerHTML = tarefa + '<span onclick="deletar(this)">❌</span>'

document.querySelector("ul").appendChild(li)

document.querySelector("input").value = ''
}

function deletar(span){
span.parentElement.remove()
}
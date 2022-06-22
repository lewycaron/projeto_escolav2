function sendForm()
{
    let data = document.getElementById("data").value
    let disciplina = document.getElementById("disciplina").value
    let descricao = document.getElementById("descricao").value
    insertEvento(data, disciplina, descricao)
}

function insertEvento(data, disciplina, descricao)
{
    let eventoHtml = 
        `<div class="mx-3 event alert alert-dark" role="alert" id="event">
            <h5>${data} - ${disciplina} - ${descricao}</h5>
        </div>`
    document.getElementById("seus-eventos").insertAdjacentHTML("afterend", eventoHtml)
}

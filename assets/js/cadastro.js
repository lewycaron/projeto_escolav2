
// CRUD - CREATE - READ   UPDATE - DELETAR 


function cadastrar() {

    let infosUsuario = {};
    let db_cliente = {}
    db_cliente.id = 7
    db_cliente.categoria = document.getElementById('categoria_cadastro').value
    db_cliente.name = document.getElementById('name_cadastro').value
    db_cliente.dtNasc = document.getElementById('dtNasc_cadastro').value
    db_cliente.endereco = document.getElementById('endereco_cadastro').value
    db_cliente.telefone = document.getElementById('telefone_cadastro').value
    db_cliente.cidade  = document.getElementById('cidade_cadastro').value
    db_cliente.anoLetivo  = document.getElementById('anoLetivo_cadastro').value
    db_cliente.email  = document.getElementById('email_cadastro').value
    db_cliente.atvExtra = ["Xadrez", "Judo","Volei", "Futsal"]
    db_cliente.materias = ["matematica", "quimica", "fisica", "portugues"]
    
    
    localStorage.setItem('clientes',  JSON.stringify(db_cliente))
    
}


const db_cliente = cadastrar()


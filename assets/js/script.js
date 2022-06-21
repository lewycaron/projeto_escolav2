// DADOS JSON
fetch("../../json/aluno.json")
.then(response => {
  return response.json();
})

.then(json => {
 const dadosJson = json

 var idUser = 1

var nome = (dadosJson[idUser].name);
var dtNasc = json[idUser].dtNasc;
var endereco = (json[idUser].endereco);
var telefone = (json[idUser].telefone);
var cidade = (json[idUser].cidade);
var email = (json[idUser].email);
var idade = (json[idUser].idade);
var anoLetivo = (json[idUser].anoLetivo);



// TABELAS DE NOTAS E FALTAS


    let tbody_mat = document.getElementById('tbody_mat');
    for (let i = 0; i < json.length; i++) {
    
        let tr_mat = tbody_mat.insertRow();
        let td_nomeDisciplina_mat = tr_mat.insertCell();
        let td_nomeAluno_mat = tr_mat.insertCell();
        let td_notaDisciplina_mat = tr_mat.insertCell();
        let td_faltasDisciplina_mat = tr_mat.insertCell();
                
        td_nomeAluno_mat.innerText = json[i].name; 
        td_nomeDisciplina_mat.innerText = json[i].materias[0].nomeMat; 
        td_notaDisciplina_mat.innerText = json[i].materias[0].notaMat;
        td_faltasDisciplina_mat.innerText = json[i].materias[0].faltasMat;
    }        




    let tbody_quim = document.getElementById('tbody_quimica');
    for (let i = 0; i < json.length; i++) {
    
        let tr_quim = tbody_quim.insertRow();
        let td_nomeDisciplina_quim = tr_quim.insertCell();
        let td_nomeAluno_quim = tr_quim.insertCell();
        let td_notaDisciplina_quim = tr_quim.insertCell();
        let td_faltasDisciplina_quim = tr_quim.insertCell();
                
        td_nomeAluno_quim.innerText = json[i].name; 
        td_nomeDisciplina_quim.innerText = json[i].materias[1].nomeMat; 
        td_notaDisciplina_quim.innerText = json[i].materias[1].notaMat;
        td_faltasDisciplina_quim.innerText = json[i].materias[1].faltasMat;
    }    
    




    let tbody_fis = document.getElementById('tbody_fisica');
    for (let i = 0; i < json.length; i++) {
    
        let tr_fis = tbody_fis.insertRow();
        let td_nomeDisciplina_fis = tr_fis.insertCell();
        let td_nomeAluno_fis = tr_fis.insertCell();
        let td_notaDisciplina_fis = tr_fis.insertCell();
        let td_faltasDisciplina_fis = tr_fis.insertCell();
        
        td_nomeAluno_fis.innerText = json[i].name; 
        td_nomeDisciplina_fis.innerText = json[i].materias[2].nomeMat; 
        td_notaDisciplina_fis.innerText = json[i].materias[2].notaMat;
        td_faltasDisciplina_fis.innerText = json[i].materias[2].faltasMat;
    }    
    



    let tbody_port = document.getElementById('tbody_portugues');
    for (let i = 0; i < json.length; i++) {
    
        let tr_port = tbody_port.insertRow();
        let td_nomeDisciplina_port = tr_port.insertCell();
        let td_nomeAluno_port = tr_port.insertCell();
        let td_notaDisciplina_port = tr_port.insertCell();
        let td_faltasDisciplina_port = tr_port.insertCell();
        
        td_nomeAluno_port.innerText = json[i].name; 
        td_nomeDisciplina_port.innerText = json[i].materias[3].nomeMat; 
        td_notaDisciplina_port.innerText = json[i].materias[3].notaMat;
        td_faltasDisciplina_port.innerText = json[i].materias[3].faltasMat;
    }    
    



// TABELA DE ATIVIDADES EXTRA 

    let tbody = document.getElementById('tbody_atvExtra');
    
    for (let i = 0; i < json.length; i++) {

        let nome_atv = json.atvExtra
        let tr = tbody.insertRow();
        let td_nomeAluno = tr.insertCell();
        let td_atvExtra = tr.insertCell();
        
        td_nomeAluno.innerText = json[i].name; 
        td_atvExtra.innerText = json[i].atvExtra
    }
    


})


//VALIDADOR DE FORMULÁRIO

window.addEventListener('load', function() {
    
    var forms = document.getElementsByClassName('needs-validation');
    
    var validation = Array.prototype.filter.call(forms, function(form) {
    form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
        }
        form.classList.add('was-validated');
    }, false);
    });
}, false);

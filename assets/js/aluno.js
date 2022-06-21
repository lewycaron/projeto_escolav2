
fetch("../../json/aluno.json")
.then(response => {
  return response.json();
})

.then(json => {
    

var idAluno = 1


var nome = (json[idAluno].name);
var dtNasc = (json[idAluno].dtNasc);
var endereco = (json[idAluno].endereco);
var telefone = (json[idAluno].telefone);
var cidade = (json[idAluno].cidade);
var email = (json[idAluno].email);
var anoLetivo = (json[idAluno].anoLetivo);


// Perfil do Aluno
document.getElementById('aluno_nome').innerHTML = nome;
document.getElementById('aluno_nasc').innerHTML = dtNasc;
document.getElementById('aluno_end').innerHTML = endereco;
document.getElementById('aluno_tel').innerHTML = telefone;
document.getElementById('aluno_city').innerHTML = cidade;
document.getElementById('aluno_anoLetivo').innerHTML = anoLetivo;
document.getElementById('aluno_email').innerHTML = email;


// Nome no menu Aluno
document.getElementById("nome_aluno_titulo").innerHTML = nome


// NOTAS E FALTAS 

let tbodynotas = document.getElementById('tbodynotas');
for (let i = 0; i < json[idAluno].materias.length; i++) {

    let tr_notas = tbodynotas.insertRow();
    let td_nomeAluno = tr_notas.insertCell();
    let td_nomeDisciplina = tr_notas.insertCell();
    let td_notaDisciplina = tr_notas.insertCell();
    let td_faltasDisciplina = tr_notas.insertCell();

    td_nomeAluno.innerText = json[idAluno].name; 
    td_notaDisciplina.innerText = json[idAluno].materias[i].notaMat
    td_nomeDisciplina.innerText = json[idAluno].materias[i].nomeMat
    td_faltasDisciplina.innerText = json[idAluno].materias[i].faltasMat
}


// TABELA DE ATIVIDADES EXTRA
let tbody_extra = document.getElementById('tbody_atvExtra_aluno'); 
let tr_extra = tbody_extra.insertRow();
let td_nomeAluno_extra = tr_extra.insertCell();
let td_atvExtra_extra = tr_extra.insertCell();
td_nomeAluno_extra.innerText = json[idAluno].name
td_atvExtra_extra.innerText = json[idAluno].atvExtra

}   
)

// VALIDAR FORMULARIO

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
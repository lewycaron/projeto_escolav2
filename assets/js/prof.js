function manipularprof(json){

var idUser = 2

// Perfil do Usuário

var nome = (json[idUser].name);
var dtNasc = json[idUser].dtNasc;
var endereco = (json[idUser].endereco);
var telefone = (json[idUser].telefone);
var cidade = (json[idUser].cidade);
var email = (json[idUser].email);
var anoLetivo = (json[idUser].anoLetivo);


// Nome no menu professor
var queryNome = document.querySelectorAll('#pf_nome .nm_prof');
for (let i = 0; i < queryNome.length; i++) {
    queryNome[i].innerHTML = nome;
}

// DADOS NO PERFIL Professor

document.getElementById('prof_nome').innerHTML = nome;
document.getElementById('prof_nasc').innerHTML = dtNasc;
document.getElementById('prof_end').innerHTML = endereco;
document.getElementById('prof_tel').innerHTML = telefone;
document.getElementById('prof_city').innerHTML = cidade;
document.getElementById('prof_anoLetivo').innerHTML = anoLetivo;
document.getElementById('prof_email').innerHTML = email;

}


fetch('../assets/json/aluno.json')
.then(response => {
    return response.json();
    })
.then(json => {
    console.log(json)
    manipularprof(json);
    })
.catch(error => {
    console.log(error)
});

function validate(){
    
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;


if ( username == "Aluno" && password == "123"){
window.location = "aluno.html";
} else if ( username == "Professor" && password == "123"){
    window.location = "prof.html";

} else if ( username == "Secretaria" && password == "123"){
    window.location = "secretaria.html";

} else if ( username == "Responsavel" && password == "123"){
    window.location = "responsavel.html";

}else{

    alert('Erro ao Logar!')
    if(password == '' ){
        alert('Senha em branco')
    }

}

}
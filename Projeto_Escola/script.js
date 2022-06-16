var json = [
{
    "id": "0",
    "name": "Maria Carolina cardozo",
    "dtNasc": "17 agosto 2008",
    "endereco": "R. Prof. Pedro Viriato Parigot de Souza, S/N",
    "telefone": "41 9999-9999",
    "cidade": "Curitiba",
    "idade" : "14 anos",
    "anoLetivo" : "2 Ano",
    "email": "mcc@gmail.com", 
    "atvExtra": ["Xadrez", "Volei"],
    "materias": [
        {
            "idMat": "1",
            "nomeMat": "matematica",
            "notaMat": 10,
            "faltasMat": 0
        }, 
        {
            "idMat": "2",
            "nomeMat": "Quimica",
            "notaMat": 9,
            "faltasMat": 2
        },

        {
            "idMat": "3",
            "nomeMat": "Fisica",
            "notaMat": 8,
            "faltasMat": 5
        }
    ]
}, 

{
    "id": "2",
    "name": "Acorda Pedrinho",
    "dtNasc": "15 Junho 2000",
    "endereco": "R. Prof. Pedro Viriato Parigot de Souza, S/N",
    "telefone": "41 9999-9999",
    "cidade": "Cianorte",
    "idade" : "22 anos",
    "anoLetivo" : "3 Ano",
    "email": "wakeuplitlepedro@gmail.com", 
    "atvExtra": ["Xadrez", "Futsal"],
    "materias": [
        {
            "idMat": "1",
            "nomeMat": "matematica",
            "notaMat": 6,
            "faltasMat": 6
        }, 
        {
            "idMat": "2",
            "nomeMat": "Quimica",
            "notaMat": 7,
            "faltasMat": 5
        },

        {
            "idMat": "3",
            "nomeMat": "Fisica",
            "notaMat": 8,
            "faltasMat": 3
        }
    ]
}
];


var nome = (json[0].name);
var dtNasc = (json[0].dtNasc);
var endereco = (json[0].endereco);
var telefone = (json[0].telefone);
var cidade = (json[0].cidade);
var email = (json[0].email);
var idade = (json[0].idade);
var anoLetivo = (json[0].anoLetivo);


document.getElementById('aluno_nome').innerHTML = nome;
document.getElementById('aluno_nasc').innerHTML = dtNasc;
document.getElementById('aluno_end').innerHTML = endereco;
document.getElementById('aluno_tel').innerHTML = telefone;
document.getElementById('aluno_city').innerHTML = cidade;
document.getElementById('aluno_idade').innerHTML = idade;
document.getElementById('aluno_anoLetivo').innerHTML = anoLetivo;
document.getElementById('aluno_email').innerHTML = email;







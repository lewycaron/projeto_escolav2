//JSON

var json = [
    {
        "id": "0",
        "name": "Maria Carolina cardozo",
        "dtNasc": "17 agosto 2008",
        "endereco": "R. Prof. Pedro Viriato Parigot de Souza, S/N",
        "telefone": "41 9999-9999",
        "cidade": "Curitiba",
        "idade": "14 anos",
        "anoLetivo": "2 Ano",
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
        "id": 2,
        "name": "Acorda Pedrinho",
        "dtNasc": "15 Junho 2000",
        "endereco": "R. Prof. Pedro Viriato Parigot de Souza, S/N",
        "telefone": "41 9999-9999",
        "cidade": "Cianorte",
        "idade": "22 anos",
        "anoLetivo": "3 Ano",
        "email": "wakeuplitlepedro@gmail.com",
        "atvExtra": ["Xadrez", "Futsal"],
        "materias": [
            {
                "idMat": "1",
                "nomeMat": "Matematica",
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
    },
    {
        "id": 3,
        "name": "Acorda Joaquina",
        "dtNasc": "15 Junho 2000",
        "endereco": "R. Prof. Pedro Viriato Parigot de Souza, S/N",
        "telefone": "41 9999-9999",
        "cidade": "Araucaria",
        "idade": "22 anos",
        "anoLetivo": "3 Ano",
        "email": "wakeuplitlepedro@gmail.com",
        "atvExtra": ["Xadrez", "Futsal"],
        "materias": [
            {
                "idMat": "1",
                "nomeMat": "Matematica",
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

// Inserçao de dados dos alunos

var nome = json[1].name;
var dtNasc = json[1].dtNasc;
var endereco = (json[1].endereco);
var telefone = (json[1].telefone);
var cidade = (json[1].cidade);
var email = (json[1].email);
var idade = (json[1].idade);
var anoLetivo = (json[1].anoLetivo);


document.getElementById('aluno_nome').innerHTML = nome;
document.getElementById('aluno_nasc').innerHTML = dtNasc;
document.getElementById('aluno_end').innerHTML = endereco;
document.getElementById('aluno_tel').innerHTML = telefone;
document.getElementById('aluno_city').innerHTML = cidade;
document.getElementById('aluno_idade').innerHTML = idade;
document.getElementById('aluno_anoLetivo').innerHTML = anoLetivo;
document.getElementById('aluno_email').innerHTML = email;


let tbody = document.getElementById('tbody');
for (let i = 0; i < json.length; i++) {

    let tr = tbody.insertRow();
    let td_nomeAluno = tr.insertCell();
    let td_nomeDisciplina = tr.insertCell();
    let td_notaDisciplina = tr.insertCell();
    let td_faltasDisciplina = tr.insertCell();

    td_nomeAluno.innerText = json[i].name;
    td_nomeDisciplina.innerText = json[i].materias[i].nomeMat;
    td_notaDisciplina.innerText = json[i].materias[i].notaMat;
    td_faltasDisciplina.innerText = json[i].materias[i].faltasMat;
    
 
}



//Cadastro de notas e faltas
class Aluno {




    constructor() {
        this.id = 1;
        this.arrayAlunos = {};
    }


    salvar() {

        let dadosalunos = this.lerdados();


        if (this.validacampo(alunos)) {
            this.adicionar(alunos)

        }

        console.log(this.arrayAlunos)
        this.listaTabela()
    }

    lerdados() {

        let alunos = {};
        alunos.id = this.id;
        alunos.nomeAluno = document.getElementById('input_nome_aluno').value;
        alunos.nomeDisciplina = document.getElementById('input_aluno_materia').value;
        alunos.notaDisciplina = document.getElementById('input_aluno_nota').value;
        alunos.faltasMateria = document.getElementById('input_aluno_falta').value;

        return alunos;
    }





    // listaTabela(){

    //     let tbody = document.getElementById('tbody');

    //     for (let i = 0; i < this.arrayAlunos.length; i++) {

    //         let tr = tbody.insertRow();
    //         let td_nomeAluno = tr.insertCell();
    //         let td_nomeDisciplina = tr.insertCell();
    //         let td_notaDisciplina = tr.insertCell();
    //         let td_faltasDisciplina = tr.insertCell();

    //     }

    // }

    adicionar(alunos) {
        this.arrayAlunos.push(alunos);
        this.id++
    }


    validacampo(alunos) {

        let msg = '';

        if (aluno.nomeAluno == '') {
            msg += 'Informe o Nome do aluno \n';
        }
        if (aluno.nomeDisciplina == '') {
            msg += 'Informe qual a Disciplina \n';
        }
        if (aluno.notaDisciplina == '') {
            msg += 'Informe qual a Nota \n';
        }
        if (aluno.faltasMateria == '') {
            msg += 'Informe a quantidade de faltas \n';
        }

        if (msg != '') {
            alert(msg);
            return false
        }
        return true;
    }


    cancelar() {
        alert('teset')
    }
}

var aluno = new Aluno();
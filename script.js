
//Funcao criada em um ficheiro externo que mostra uma mensagem
function msg() {
	alert("AIA");
}

function mOver(obj) {
  document.getElementById("lampada").src = 'lamp1.png'
}

function mOut(obj) {
  document.getElementById("lampada").src = 'lamp2.png'
}

var nomecompleto = prompt("Digite seu nome completo:");
nomes = nomecompleto.split(" ");
for (x in nomes) {
	alert(nomes[x]);
}

var nome=nomes[0];
var sobrenome=nomes[nomes.length-1];

alert('Ola ' + nome + ' ' + sobrenome);
document.getElementById("nome").innerHTML = nomecompleto;
document.getElementById("sobrenome").innerHTML = sobrenome;



/*
if (resposta == "Cruzeiro") {
    alert("Você torce para o melhor time");
}
else {
    alert("Você torce para o pior time");
}

function validaCpf(cpf) {
    if (cpf.length == 11 ) {
        alert("CPF VÁLIDO");
    }
    else {
        alert("CPF INVÁLIDO");
    }
} 

var cpf = prompt("Qual é o seu cpf? (Somente números)");
validaCpf(cpf);

carro = {
    marca: "Fiat",
    modelo: "Bravo",
    ano: 2012
}

console.log(carro.marca);
console.log(carro.modelo);

var nomecompleto = prompt("Digite seu nome completo:");
nomes = nomecompleto.split(" ");
console.log(nomes);

var nome="joao"
var sobrenome="teodoro"



*/
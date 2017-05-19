//console.log("carregando do arquivo");
var titulo=document.querySelector('#titulo');

var trPaciente=document.querySelector('#primeiro-paciente');
var pesoPaciente = trPaciente.querySelector('.info-peso').textContent;
var alturaPaciente = trPaciente.querySelector('.info-altura').textContent;

var calculoImc= pesoPaciente/(alturaPaciente*alturaPaciente);
console.log(calculoImc);

var imcPaciente = trPaciente.querySelector('.info-imc');
imcPaciente.textContent=calculoImc;
//console.log(tituloPacientes.textContent);

//console.log(titulo.textContent);
titulo.textContent="Aparecida Nutricionista";

//Novas alterações para a branch javascript-v0.1

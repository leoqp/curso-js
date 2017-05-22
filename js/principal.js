//console.log("carregando do arquivo");
var titulo=document.querySelector('#titulo');

var trPaciente=document.querySelector('#primeiro-paciente');
var pesoPaciente = trPaciente.querySelector('.info-peso').textContent;
var alturaPaciente = trPaciente.querySelector('.info-altura').textContent;
var imcPaciente = trPaciente.querySelector('.info-imc');

var pesoValidador=true;
var alturaValidador=true;

if((pesoPaciente<=0) || (pesoPaciente>=300))
{
  pesoValidador=false;
}

if((alturaPaciente <= 0) || (alturaPaciente > 3.00))
{
  alturaValidador=false;
}

if(alturaValidador && pesoValidador)
{
  var calculoImc= pesoPaciente/(alturaPaciente*alturaPaciente);
  imcPaciente.textContent=calculoImc;
}
else {
  imcPaciente.textContent="Dados inválidos!";
}
//console.log(tituloPacientes.textContent);

//console.log(titulo.textContent);
titulo.textContent="Aparecida Nutricionista";

//Novas alterações para a branch javascript-v0.1

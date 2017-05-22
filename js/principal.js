var titulo=document.querySelector('#titulo');

//Busca todos os pacientes com a classe paciente
var pacientes = document.querySelectorAll('.paciente');

//For de 0 até o indice do último paciente
for (var i=0;i < pacientes.length;i++)
{
  var trPaciente = pacientes[i];
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
    //Traz apenas 2 casas decimais do numéro calculado
    imcPaciente.textContent=calculoImc.toFixed(2);
  }
  else {
    imcPaciente.textContent="Dados inválidos!";
  }
  //console.log(tituloPacientes.textContent);
}



//console.log(titulo.textContent);
titulo.textContent="Aparecida Nutricionista";

//Novas alterações para a branch javascript-v0.1

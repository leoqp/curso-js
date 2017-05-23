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
  //Adiciona mensagem ao imc e altera a cor de fundo(classe css)
  else {
    trPaciente.classList.add('paciente-invalido');
    imcPaciente.textContent="Dados inválidos!";
  }
}

//Ação em cima do botão de adicionar paciente

//Botão
var botaoAdicionar = document.querySelector('#adicionar-paciente');
botaoAdicionar.addEventListener('click',function(event){
    event.preventDefault();
    console.log('teste');
});

titulo.textContent="Aparecida Nutricionista";

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
    var formAdiciona = document.querySelector('#form-adiciona');
    //Busca os valores dos campos(value) do formulario, usando o atributo name
    //form.name.value
    var nome = formAdiciona.nome.value;
    var peso = formAdiciona.peso.value;
    var altura = formAdiciona.altura.value;
    var gordura = formAdiciona.gordura.value;
    var imc = peso/(altura*altura);

    //Iremos criar um novo tr dentro da table-layout

    //busca a tabela
    var tabelaPacientes = document.querySelector('#tabela-pacientes');

    //Cria nova tr para o novo paciente - recebera as novas trs
    var pacienteTr = document.createElement("tr");

    //Cria as tds da nova tr
    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var imcTd = document.createElement("td");

    //Adicionamos o conteúdo das tds na tabela
    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;
    imcTd.textContent = imc.toFixed(2);

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    tabelaPacientes.appendChild(pacienteTr);
});

titulo.textContent="Aparecida Nutricionista";

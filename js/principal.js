var titulo=document.querySelector('#titulo');
titulo.textContent="Sistema Nutricionista";

//Busca todos os pacientes com a classe paciente
var pacientes = document.querySelectorAll('.paciente');

//For de 0 até o indice do último paciente
for (var i=0;i < pacientes.length;i++)
{
  var trPaciente = pacientes[i];
  var pesoPaciente = trPaciente.querySelector('.info-peso').textContent;
  var alturaPaciente = trPaciente.querySelector('.info-altura').textContent;
  var imcPaciente = trPaciente.querySelector('.info-imc');

  if(validarDados(pesoPaciente,alturaPaciente))
  {
    imcPaciente.textContent=calcularImc(pesoPaciente,alturaPaciente);
  }
  //Adiciona mensagem ao imc e altera a cor de fundo(classe css)
  else {
    trPaciente.classList.add('paciente-invalido');
    imcPaciente.textContent="Dados inválidos!";
  }
}

function validarDados(pesoPaciente,alturaPaciente)
{
  var alturaValidador=true;
  var pesoValidador=true;

  if((pesoPaciente<=0) || (pesoPaciente>=250))
  {
    pesoValidador=false;
  }

  if((alturaPaciente <= 0) || (alturaPaciente > 3.00))
  {
    alturaValidador=false;
  }

  if (alturaValidador && pesoValidador)
  {
    return true;
  }
  else{
    return false;
  }

}

function calcularImc(peso,altura)
{
  var imc = peso/(altura*altura);
  return imc.toFixed(2);
}

function retornaPacienteDoForm(form)
{
  //Busca os valores dos campos(value) do formulario, usando o atributos

  //Cria um objeto paciente
  var paciente = {
    nome:form.nome.value,
    peso:form.peso.value,
    altura:form.altura.value,
    gordura:form.gordura.value,
    imc:calcularImc(peso.value,altura.value),
  }

  return paciente;


}

function montarTabela(paciente)
{
  //Cria nova tr para o novo paciente - recebera as novas trs
  var pacienteTr = document.createElement("tr");

  //Cria as tds da nova tr
  var nomeTd = document.createElement("td");
  var pesoTd = document.createElement("td");
  var alturaTd = document.createElement("td");
  var gorduraTd = document.createElement("td");
  var imcTd = document.createElement("td");

  //Adicionamos o conteúdo das tds na tabela
  nomeTd.textContent = paciente.nome;
  pesoTd.textContent = paciente.peso;
  alturaTd.textContent = paciente.altura;
  gorduraTd.textContent = paciente.gordura;
  imcTd.textContent = paciente.imc;

  pacienteTr.appendChild(nomeTd);
  pacienteTr.appendChild(pesoTd);
  pacienteTr.appendChild(alturaTd);
  pacienteTr.appendChild(gorduraTd);
  pacienteTr.appendChild(imcTd);

  //busca a tabela
  var tabelaPacientes = document.querySelector('#tabela-pacientes');
  tabelaPacientes.appendChild(pacienteTr);
}

//Ação em cima do botão de adicionar paciente

//Botão
var botaoAdicionar = document.querySelector('#adicionar-paciente');
botaoAdicionar.addEventListener('click',function(event){
    event.preventDefault();

    var formAdiciona = document.querySelector('#form-adiciona');
    var paciente = retornaPacienteDoForm(formAdiciona);

    console.log(paciente);

    //Iremos criar um novo tr dentro da table-layout

    montarTabela(paciente);

});

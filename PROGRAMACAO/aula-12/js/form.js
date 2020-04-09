var botaoAdiconar = document.querySelector("#adicionar-paciente")

botaoAdiconar.addEventListener("click", function(event){
    event.preventDefault();

    const grupo = grupo[i];

    // console.log(`Nome : ${nome} Peso: ${peso} Altura: ${altura} Gordura: ${gordura}`);

    var tdNome = grupo.querySelector(".nome");
    var nome = tdNome.textContent;
    // console.log(peso);

    var tdPeso = grupo.querySelector(".peso");
    var peso = tdPeso.textContent;
    // console.log(peso);

    var tdAltura = grupo.querySelector(".altura");
    var altura = tdAltura.textContent;
    // console.log(altura);

    var tdGordura = grupo.querySelector(".gordura");
    var gordura = tdGordura.textContent;
    // console.log(altura);

    var nomeEhValido = true;

    var pesoEhValido = true;

    var alturaEhValida = true;

    var gorduraEhValida = true;

    if(peso <= 0 || peso >= 1000){
        console.log("Peso inválido!");
        pesoEhValido = false;
        tdImc.textContent = "Peso inválido!";
        alert("peso invalido");
        CloseEvent;
    }
    if(altura <= 0 || altura >= 3.0){
        console.log("Altura inválida!");
        alturaEhValida = false;
        tdImc.textContent = "Altura inválida!";
        
    }



    var form = document.querySelector("#form-adiciona");    

    var pacienteRetornado = obtemPacienteDoFormulario(form);

    var pacienteTr =  montaTr(pacienteRetornado);

    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);

    // console.log(pacienteTr);
});


function obtemPacienteDoFormulario(form){
        // VALORES INFORMADOS NO FORMULARIO
    let paciente = {
        nome : form.nome.value,
        peso : form.peso.value,
        altura : form.altura.value,
        gordura : form.gordura.value,
        imc : calculaImc(form.peso.value, form.altura.value)
    }
    // console.log(paciente);
    return paciente;
}

function montaTr(pacienteRetornado){
     // ELEMENTO LINHA CRIADA DA TABELA
     var pacienteTr = document.createElement("tr"); 
     pacienteTr.classList.add("paciente");

     pacienteTr.appendChild(montaTd(pacienteRetornado.nome, "info-nome"));
     pacienteTr.appendChild(montaTd(pacienteRetornado.peso, "info-peso"));
     pacienteTr.appendChild(montaTd(pacienteRetornado.altura, "info-altura"));
     pacienteTr.appendChild(montaTd(pacienteRetornado.gordura, "info-gordura"));
     pacienteTr.appendChild(montaTd(pacienteRetornado.imc, "info-imc"));
     
     return pacienteTr;
    
    // como era antes:

    //  var nomeTd = ;
    //  var pesoTd = ;
    //  var alturaTd = ;
    //  var gorduraTd = ;
    //  var imcTd = ;

    //  var nomeTd = document.createElement("td");
    //  nomeTd.classList.add("info-nome");
    //  nomeTd.textContent = pacienteRetornado.nome;

    //  var pesoTd = document.createElement("td");
    //  pesoTd.classList.add("info-peso");
    //  pesoTd.textContent = pacienteRetornado.peso;

    //  var alturaTd = document.createElement("td");
    //  alturaTd.classList.add("info-altura");
    //  alturaTd.textContent = pacienteRetornado.altura;

    //  var gorduraTd = document.createElement("td");
    //  gorduraTd.classList.add("info-gordura");
    //  gorduraTd.textContent = pacienteRetornado.gordura;

    //  var imcTd = document.createElement("td");    
    //  imcTd.classList.add("info-imc");
    //  imcTd.textContent = pacienteRetornado.imc;

     // PASSANDO OS VALORES PARA AS VARIAVEIS
     // imcTd.textContent = imc.toFixed(2);
 
     
}

function montaTd(dado, classe){
    var td = document.createElement("td");
    td.classList.add(classe);
    td.textContent = dado;   
    return td;
}
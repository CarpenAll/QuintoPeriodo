var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function (event) {
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");

    var pacienteRetornado = obtemPacienteDoFormulario(form);

    var pacienteTr = montarTr(pacienteRetornado);

    /* 1° Exemplo - Validação com retorno booleano */
    // if (!validarPaciente(pacienteRetornado)) {
    //     console.log("Dados inválidos!");
    //     return;
    // }

    /* 2° Exemplo - Validação com retorno de uma String */
    // var erro = validarPaciente(pacienteRetornado);
    // if (erro != undefined) {
    //     var spanMensagemErro = document.querySelector("#mensagem-erro");
    //     spanMensagemErro.textContent = erro;
    //     return;
    // }

    /*3º exemplo - Validação com retorno de uma lista de erros */

    var erros = validarPaciente(pacienteRetornado);
    if(erros.length > 0){
        exibeMensagensErro(erros);
        return;
    }

    inserirAtualizarLista();

    
    /* Pegar o elemento da tabela */
    var tabela = document.querySelector("#tabela-pacientes");

    /* Inserir a linha na tabela */
    tabela.appendChild(pacienteTr);
});

function obtemPacienteDoFormulario(form) {
    /* Valores informados no formulário. */
    let paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    return paciente;
}

function montarTr(pacienteRetornado) {
     /* Elemento de linha da tabela criada. */
     var pacienteTr = document.createElement("tr");
     pacienteTr.classList.add("paciente");

     pacienteTr.appendChild(montaTd(pacienteRetornado.nome, "info-nome"));
     pacienteTr.appendChild(montaTd(pacienteRetornado.peso, "info-peso"));
     pacienteTr.appendChild(montaTd(pacienteRetornado.altura, "info-altura"));
     pacienteTr.appendChild(montaTd(pacienteRetornado.gordura, "info-gordura"));
     pacienteTr.appendChild(montaTd(pacienteRetornado.imc, "info-imc"));
     pacienteTr.appendChild(montaTd("", "deletar"));
    ;

    //  pacienteTr.createElement("<button class=\"btndel\">Deletar</button></<button>")
    

     return pacienteTr;
}

function criaButton(){
    td = document.createElement("button");
    td.textContent = "Deletar";
    td.classList.add("btndel");

    return td;
}

function montaTd(dado, classe) {
    var td = document.createElement("td");
    td.classList.add(classe);
    td.textContent = dado;

    if(dado == ""){
        td.appendChild(criaButton());
    }
    

    return td;
}

function validarPaciente(paciente) {

    var erros = [];

    if(!validaPeso(paciente.peso)){
        erros.push("O peso é inválido");
    }

    if(!validaAltura(paciente.altura)){
        erros.push("A altura é inválida");
    }




    return erros;





    /* 1° Exemplo - Validação com retorno booleano */
    // if (validaPeso(paciente.peso) && validaAltura(paciente.altura)) {
    //     return true;
    // } else {
    //     return false;
    // }

    /* 2° Exemplo - Validação com retorno de uma String */
    // if (!validaPeso(paciente.peso)) {
    //     return "O peso é inválido!";
    // }

    // if (!validaAltura(paciente.altura)) {
    //     return "A altura é inválida!"
    // }
    
    // if (!validaPeso(paciente.nome)) {
    //     return "O peso é inválido!";
    // }

    // if (!validaAltura(paciente.gordura)) {
    //     return "A altura é inválida!"
    // }

}

function exibeMensagensErro(erros){
    var ul = inserirAtualizarLista();

    // for (let index = 0; index < erros.length; index++) {
    //     const element = erros[index];        
    // }

    erros.forEach(erro => {
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}

function inserirAtualizarLista(){
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";

    return ul;
}
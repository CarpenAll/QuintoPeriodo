/* Introdução 
    console.log("Aula Teste");
    console.log(document.querySelector(".titulo-alunos"));
    let tituloAlunos = document.querySelector(".titulo-alunos");
    console.log('varTituloAlunos: ', tituloAlunos);
    tituloAlunos.textContent = "Unidep Teste IMC";
*/
/********************************************************************/

/* Atividade */
var pacientes = document.querySelectorAll(".paciente");


for(let i = 0 ;i < pacientes.length; i++){
    const paciente = pacientes[i];
    // console.log(paciente);

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;
    // console.log(peso);

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;
    // console.log(altura);

    var tdImc = paciente.querySelector(".info-imc");

    var pesoEhValido = true;

    var alturaEhValida = true;

    if(peso <= 0 || peso >= 1000){
        console.log("Peso inválido!");
        pesoEhValido = false;
        tdImc.textContent = "Peso inválido!";
        paciente.classList.add("paciente-invalido");
    }
    if(altura <= 0 || altura >= 3.0){
        console.log("Altura inválida!");
        alturaEhValida = false;
        tdImc.textContent = "Altura inválida!";
        paciente.classList.add("paciente-invalido");
    }

    if(pesoEhValido && alturaEhValida){
        let imc = calculaImc(peso,altura);
        tdImc.textContent = imc;
        // console.log(imc);
    }
}

function calculaImc(peso, altura){

    let imc = 0;

    imc = peso / (altura * altura);

    return imc.toFixed(2);
}

// calculaImc(){
    
// }


var titulo = document.querySelector(".titulo-unidep");
// console.log(titulo);

titulo.addEventListener("click", mostrarTitulo);

function mostrarTitulo() {
    // console.log("Clicou no Titulo");
}

// let tdPeso = pacientes.querySelector(".info-peso");
// let peso = tdPeso.textContent;

// let tdAltura = pacientes.querySelector(".info-altura");
// let altura = tdAltura.textContent;

// let tdImc = pacientes.querySelector(".info-imc");

// let pesoEhValido = true;
// let alturaEhValida = true;


// if (peso <=0 || peso >=1000 ){
//     console.log("Peso inválido");
//     pesoEhValido = false;
//     tdImc.textContent = "Peso "

// }
// let nome = 15;
// console.log(nome);
// console.log(tdPeso);

/* Exemplo Java
String  nome = "";
double  valor = 1.20;
Integer codigo = 1;
char    sexo = 'F';

chave | valor
nome  | "Lucas"

 */
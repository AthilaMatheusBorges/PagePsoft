var peso = imc.querySelector('peso');
var altura = imc.querySelector('altura');


function imc(peso, altura){
    return peso / (altura ^ 2);
}
//Variables 
let NumeroMaxposible = 100;
let numeroSecreto = Math.floor(Math.random()*NumeroMaxposible)+1;
let numeroDeUsuario ;
let intentos = 1;
//let palabraVeces = 'vez';
let maximosIntentos = 6;

console.log(numeroSecreto)
while(numeroDeUsuario != numeroSecreto){ 
    numeroDeUsuario = parseInt(prompt(`Me indicas un numero por favor del 1 al ${NumeroMaxposible} : `));

    console.log(typeof(numeroDeUsuario));
    /*Este codigo realiza la codificacion
    */
    if (numeroDeUsuario == numeroSecreto) {
        //fue verdadera la condicion
        alert(`Acertaste, el numero es: ${numeroDeUsuario}.Lo hiciste en ${intentos} ${intentos == 1 ? 'vez' : 'veces' }.`);

    } else {
        if(numeroDeUsuario > numeroSecreto){
            alert('El numero secreto es menor.');
        } else {
            alert('El numero secreto es mayor.');
        }
        //Incrementamos el contador cuando no acierta
        intentos++;
        palabraVeces = 'veces';
        if (intentos > maximosIntentos) {
            alert(`Llegaste al numero maximo de intentos ${maximosIntentos} ${intentos == 1 ? 'vez' : 'veces' }.`);
            break;
        }
        //la condicion no se cumplio 
        //alert('Lo siento , no acertaste el numero');
    }

 }

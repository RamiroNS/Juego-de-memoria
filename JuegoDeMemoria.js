let tarjetasDestapadas = 0;
let tarjeta1 = null;
let tarjeta2 = null;
let primerResultado = null;
let segundoResultado = null;
let movmientos = 0;
let aciertos = 0;
let temporizador = false;
let timer = 30;
let timerInicial = 30;
let tiempoRegresivo = null;

let mostrarMovimiento = document.getElementById('movimientos')
let mostrarAciertos = document.getElementById('aciertos');
let mostrarTiempo = document.getElementById('t-restante');

//generacion de numeros aleatorios
let number = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];
number = number.sort(()=>{return Math.random() - .5});
console.log(number);

//funcio contar tiempo

function contarTiempo(){
    tiempoRegresivo = setInterval(()=>{
        timer--;
        mostrarTiempo.innerHTML = `Tiempo: ${timer} segundos`;
        if(timer == 0){
            clearInterval(tiempoRegresivo);
            bloqueartarjeta();
        }
    },1000)
}

function bloqueartarjeta(){
    for(i=0; i<=15; i++){
        let tarjetaBloqueada = document.getElementById(i);
        tarjetaBloqueada.innerHTML = number[i];
        tarjetaBloqueada.disabled = true;

    }
}

function destapar(id){

    if(temporizador == false){
        contarTiempo();
        temporizador = true;
    }

    tarjetasDestapadas ++;
    console.log(tarjetasDestapadas);

    if(tarjetasDestapadas == 1){
        tarjeta1 = document.getElementById(id);
        primerResultado = number[id];
        tarjeta1.innerHTML = primerResultado;
        tarjeta1.disabled = true;
    }else if(tarjetasDestapadas == 2){
        tarjeta2 = document.getElementById(id);
        segundoResultado = number[id];
        tarjeta2.innerHTML = segundoResultado;
        tarjeta2.disabled = true;
        movmientos ++;
        mostrarMovimiento.innerHTML = `Movimientos: ${movmientos}`;

        if(primerResultado == segundoResultado){
            tarjetasDestapadas = 0;
            aciertos++;
            mostrarAciertos.innerHTML = `Aciertos: ${aciertos}`;
            if(aciertos == 8){
                clearInterval(tiempoRegresivo)
                mostrarAciertos.innerHTML = `Tuviste ${aciertos} aciertos!!`;
                mostrarTiempo.innerHTML = `Fantastico!! solo demoraste ${timerInicial - timer} segundos!!`;
                mostrarMovimiento.innerHTML = `Movimientos: ${movmientos} 😎🤘🏻`;
            }

        }else{
            setTimeout(()=>{
                tarjeta1.innerHTML = ' ';
                tarjeta2.innerHTML = ' ';
                tarjeta1.disabled = false;
                tarjeta2.disabled = false;
                tarjetasDestapadas = 0;
            },800)
            
        }
        
    }
    let resetBtn = document.querySelector('.div-button__reinicio');
        resetBtn.addEventListener('click', ()=>{
        location.reload();
        }); 
    
}




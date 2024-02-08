let PIEDRA = "piedra";
let PAPEL = "papel";
let TIJERA = "tijera";

const empate  = 0;
const victoria = 1;
const derrota = 2;

let jugando = false;

let piedrabtn = document.getElementById("piedra");
let papelbtn = document.getElementById("papel");
let tijerabtn = document.getElementById("tijera");
let resultText = document.getElementById("start-text");
let imgmaquina = document.getElementById("img-maquina");
let imgusuario = document.getElementById("img-usuario");

piedrabtn.addEventListener("click", ()=>{
    jugar(PIEDRA);
});

papelbtn.addEventListener("click", ()=>{
    jugar(PAPEL);
});

tijerabtn.addEventListener("click", ()=>{
    jugar(TIJERA)
});

function jugar(usuario){
    if(jugando) return;

    jugando = true;

    imgusuario.src = usuario + ".png";

    let intervalo = setInterval(function (){
        const maquina = calcMaquina()
    },200);

    setTimeout (function () {
        clearInterval(intervalo)

        const maquina = calcMaquina();
        let resultado = calcResultado(usuario, maquina);

        imgmaquina.src = maquina + ".png";
        switch(resultado){
            case empate:
                resultText.innerHTML = "Hubo un empate";
            break;
            case victoria:
                resultText.innerHTML = "Has ganado";
                break;
            case derrota:
                resultText.innerHTML = "Has perdido";
                break;
        }
        jugando = false;
    }, 2000);
}

function calcMaquina() {
    let numero = Math.floor(Math.random() * 3);
    switch (numero){
        case 0:
            return PIEDRA;
        case 1:
            return PAPEL;
        case 2:
            return TIJERA;
    }
}

function calcResultado(usuario, maquina){
    if(usuario === maquina){
        return empate;
    }else if (usuario === PIEDRA){
        if(maquina === PAPEL) return derrota;
        if(maquina === TIJERA) return victoria;    
    }else if (usuario === PAPEL){
        if(maquina === PIEDRA) return victoria;
        if(maquina === TIJERA) return derrota;
    }else if (usuario === TIJERA){
        if(maquina === PIEDRA) return derrota;
        if(maquina === PAPEL) return victoria;
    }   
}

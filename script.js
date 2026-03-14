let tiempo = 0;
let intervalo;
let tiempos = [];

function iniciar(){
    intervalo = setInterval(()=>{
        tiempo += 0.01;
        document.getElementById("tiempo").innerText = tiempo.toFixed(2);
    },10);
}

function pausar(){
    clearInterval(intervalo);
}

function reiniciar(){
    clearInterval(intervalo);
    tiempo = 0;
    tiempos = [];
    document.getElementById("tiempo").innerText = "0.00";
    document.getElementById("tablaResultados").innerHTML = "";
}

function registrarTiempo(){

    tiempos.push(tiempo);

    let primero = tiempos[0];
    let diferencia = tiempo - primero;

    let tabla = document.getElementById("tablaResultados");

    let fila = document.createElement("tr");

    fila.innerHTML =
    "<td>Competidor "+tiempos.length+"</td>"+
    "<td>"+tiempo.toFixed(2)+"</td>"+
    "<td>"+diferencia.toFixed(2)+"</td>";

    tabla.appendChild(fila);
}

var tiro1;
var tiro2;
var posiciones = [0, -160,-320,-481,-642,-803];
var dado1,dado2,boton_tirar;
window.onload = init;

function init(){
	boton_tirar = document.getElementById("boton_tirar");
	boton_tirar.addEventListener("click", jugar);

	dado1 = document.getElementById("dado1");
	dado2 = document.getElementById("dado2");
}

function tirardado(){
	return Math.floor(Math.random() * 6) + 1;
}

function actualizarDado (ref, cara){
	ref.style.backgroundPosition = posiciones [cara-1]+"px";
}

function jugar () {
	tiro1 = tirardado();
	tiro2 = tirardado();
	actualizarDado(dado1,tiro1);
	actualizarDado(dado2,tiro2);
}
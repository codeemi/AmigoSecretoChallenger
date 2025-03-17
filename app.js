// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.



let amigosSecretos=[];

function agregarAmigo () {
   let input = document.getElementById("amigo");
   let nombre = input.value.trim ();
   
   if(nombre === ""){
alert ( "Por favor, inserte un nombre.");
return; 
   }

amigosSecretos.push (nombre);
input.value = "";
actualizarLista ();

}

function actualizarLista ()  {
 let lista =  document.getElementById("listaAmigos");



 lista.innerHTML = ""

for (let i=0; i < amigosSecretos.length; i++){
   let li = document.createElement ("li");

   li.textContent = amigosSecretos[i];
   lista.appendChild (li)
}

}


function sortearAmigo () {
if (amigosSecretos.length === 0 ) {
    alert ("La lista se encuentra vacío"); 
    return;
}

let aleatorio =  Math.floor (Math.random()*amigosSecretos.length )
let ganador = amigosSecretos [aleatorio];


document.getElementById("resultado").innerHTML = "El amigo secreto es:"+ ganador
}



var palabras = [];
var cadena = "CUERVO MARIPOSA CANGREJO MEDUSA CONEJO PANDA GALLINA TIGRE KOALA VACA FOCA PERRO OSO LORO CERDO LLAMA PATO BALLENA GATO RATA DELFIN TIBURON GALLO PEZ BURRO MULA AGUILA HALCON TERO HURON ABEJA CAMELLO CISNE ASNO AVISPA TORTUGA ERIZO GANSO GORILA MONO GRILLO LEON ZEBRA LOBO LEMUR RANA SAPO PALOMA TOPO TORO TRITON URRACA VENADO ZORRO YACARE"
palabras = cadena.split(" ");
var letrasMayus = "QWERTYUIOPASDFGHJKLÑZXCVBNM";
var letraMala = "";
const pantalla1 = document.querySelector(".flex-inicio");
const pantalla2 = document.querySelector(".flex-juego");
const pantalla3 = document.querySelector(".flex-agregar");
const botonJugar = document.querySelector(".flex-inicio__boton1");
const botonAgregar = document.querySelector(".flex-inicio__boton2");
const botonAtras = document.querySelector(".flex-juego__boton2");
const botonDesistir = document.querySelector(".flex-juego__boton1");
const botonJugarDeNuevo = document.querySelector(".flex-juego__boton3");
const botonAceptar = document.querySelector(".caja__boton");
const botonAdd = document.querySelector(".botones__add");
const botonBack = document.querySelector(".botones__back");
const mensajeGanador = document.querySelector(".flex-juego__ganador");
const mensajePerdedor = document.querySelector(".flex-juego__perdedor");
const ventanaEmergente = document.querySelector(".flex-juego__caja");
const mensajePalabra = document.querySelector(".caja__palabra");
const agregarPalabra = document.querySelector(".flex-agregar__textarea");
let letra;
let nAleatorio = aleatorio(palabras);
let puedoTeclear = false;
let contHorca = 0;
let cont = 0;
let verificarLetra0 = false;
let verificarLetra1 = false;
let verificarLetra2 = false;
let verificarLetra3 = false;
let verificarLetra4 = false;
let verificarLetra5 = false;
let verificarLetra6 = false;
let verificarLetra7 = false;
let mensaje0;
let mensaje1;
let mensaje2;
let mensaje3;
let mensaje4;
let mensaje5;
let mensaje6;
let mensaje7;
let letraErrada = document.querySelector(".flex-juego__letraErrada");

function aleatorio(palabras){
    var numeroaleatorio = Math.floor(Math.random()*palabras.length);
    console.log(numeroaleatorio);
    return numeroaleatorio;
} 
function crear(array, numero){
    for(var i=0;i<array[numero].length;i++){
        const newElement = document.createElement("textarea");
        newElement.classList.add("textarea"+(i));
        newElement.setAttribute("disabled" , "");
        newElement.style = "text-align: center; resize: none; border: none; border-bottom: 5px solid black; margin: 15px; background-color: transparent; font-size: 25px; display: inline-block; height: 30px; width: 70px";
        document.querySelector(".flex-juego__renglones").appendChild(newElement)
    }
}
function leerLetra(evt){
    letra = String.fromCharCode(evt.charCode);
    letra = letra.toUpperCase();
    console.log(letra);
    if ((puedoTeclear==true)&&(letrasMayus.includes(letra))){
        if (palabras[nAleatorio].includes(letra)){
            agregarLetra();
        }
        else {
            actualizarHorca();
        }
    }
    condicionGanar();
    condicionPerder();
}
function condicionGanar(){
    if (cont==palabras[nAleatorio].length){
        mensajeGanador.style = "opacity: 1;";
        botonJugarDeNuevo.style = "display: inline-block;"
    }
}
function condicionPerder(){
    if (contHorca==8){
        mensajePerdedor.style = "opacity: 1;";
        botonJugarDeNuevo.style = "display: inline-block;"
        agregarRestoDeLetras();
        puedoTeclear = false;
    }
}
function agregarLetra(){
    for (var i = 0 ; i < palabras[nAleatorio].length; i++){
        if ((letra==palabras[nAleatorio][i])&&((eval('verificarLetra'+i))==false)){
            eval('mensaje' +i+ ' = document.querySelector(".textarea' +i+ '")');
            eval('mensaje'+i+'.style="text-align: center; resize: none; border: none; border-bottom: 5px solid black; margin: 15px; background-color: transparent; font-size: 25px; display: inline-block; height: 30px; color: black; font-height: bold; width: 70px";');
            eval('mensaje'+i+'.value = letra;');
            eval('verificarLetra'+i+'= true;');
            cont++;
        }
    }
}
function agregarRestoDeLetras(){
    for (var i = 0 ; i < letrasMayus.length; i++){
        for (var k = 0 ; k < palabras[nAleatorio].length ; k++){
            if ((letrasMayus[i]==palabras[nAleatorio][k])&&(eval('verificarLetra'+k))==false){
                eval('mensaje' +k+ ' = document.querySelector(".textarea' +k+ '")');
                eval('mensaje'+k+'.style="text-align: center; resize: none; border: none; border-bottom: 5px solid black; margin: 15px; background-color: transparent; font-size: 25px; display: inline-block; height: 30px; color: red; font-height: bold; width: 70px";');
                eval('mensaje'+k+'.value = "'+letrasMayus[i]+'";');
                eval('verificarLetra'+k+'= true;');
                cont++;
            }    
        }
    }
}
function actualizarHorca(){
    const var1 = document.querySelector(".linea-base-horizontal");
    const var2 = document.querySelector(".linea-base-vertical");
    const var3 = document.querySelector(".linea-sup-horizontal");
    const var4 = document.querySelector(".linea-sup-vertical");
    const var5 = document.querySelector(".cabeza");
    const var6 = document.querySelector(".cuerpo");
    const var7 = document.querySelector(".brazo1");
    const var8 = document.querySelector(".brazo2");
    const var9 = document.querySelector(".pierna1");
    const var10 = document.querySelector(".pierna2");

    if (!letraMala.includes(letra)){
        contHorca++;
        letraErrada.value = letraMala + letra;
        letraMala = letraMala + letra;
        if (contHorca==1){
            var1.style = "display: inline-block;";
            var2.style = "display: inline-block;";
        }
        if (contHorca==2){
            var3.style = "display: inline-block;";
            var4.style = "display: inline-block;"
        }
        if (contHorca==3){
            var5.style = "display: inline-block;";
        }
        if (contHorca==4){
            var6.style = "display: inline-block;";
        }
        if (contHorca==5){
            var7.style = "display: inline-block;";
        }
        if (contHorca==6){
            var8.style = "display: inline-block;";
        }
        if (contHorca==7){
            var9.style = "display: inline-block;";
        }
        if (contHorca==8){
            var10.style = "display: inline-block;";
        }
    }
}
function desistir(){
    puedoTeclear=true;
    if (cont!=palabras[nAleatorio].length){
        mostrarVentana();
    }
    for (i=0 ; i<palabras[nAleatorio].length ; i++){
        document.querySelector(".flex-juego__renglones textarea").remove();
    }
    const var1 = document.querySelector(".linea-base-horizontal");
    const var2 = document.querySelector(".linea-base-vertical");
    const var3 = document.querySelector(".linea-sup-horizontal");
    const var4 = document.querySelector(".linea-sup-vertical");
    const var5 = document.querySelector(".cabeza");
    const var6 = document.querySelector(".cuerpo");
    const var7 = document.querySelector(".brazo1");
    const var8 = document.querySelector(".brazo2");
    const var9 = document.querySelector(".pierna1");
    const var10 = document.querySelector(".pierna2");

    var1.style = "display: none;"
    var2.style = "display: none;"
    var3.style = "display: none;"
    var4.style = "display: none;"
    var5.style = "display: none;"
    var6.style = "display: none;"
    var7.style = "display: none;"
    var8.style = "display: none;"
    var9.style = "display: none;"
    var10.style = "display: none;"

    const limpiarLetrasGrises = document.querySelector(".flex-juego__letraErrada");
    limpiarLetrasGrises.value = null;
    nAleatorio = aleatorio(palabras);
    crear(palabras, nAleatorio);
    contHorca=0;
    cont=0;
    letraMala= ""
    verificarLetra0 = false;
    verificarLetra1 = false;
    verificarLetra2 = false;
    verificarLetra3 = false;
    verificarLetra4 = false;
    verificarLetra5 = false;
    verificarLetra6 = false;
    verificarLetra7 = false;
}
function jugarOtraVez(){
    puedoTeclear=true;
    botonJugarDeNuevo.style = "display= none;"
    mensajeGanador.style = "opacity= 0;"
    mensajePerdedor.style = "opacity= 0;"
    desistir();
}
function nuevaPalabra(){
    var palabraNueva = agregarPalabra.value;
    if ((palabraNueva.length<9)&&(palabraNueva!="")){
        palabraNueva = palabraNueva.replace(/\n/g, " ");
        palabraNueva = palabraNueva.replace(/ /g, "");
        palabras.push(palabraNueva.toUpperCase());

        const tick = document.querySelector(".tick__img");
        tick.style = "opacity: 1;";
        setTimeout(function(){
            tick.style = "opacity: 0;";
        }, 300);
    }
    else{
        const tick2 = document.querySelector(".tick__img2");
        tick2.style = "opacity: 1;";
        setTimeout(function(){
            tick2.style = "opacity: 0;";
        }, 300);
    }
    agregarPalabra.value = null;
}
function nuevaPalabraEnter(e){
    if (e.code == "Enter"){
        botonAdd.onclick();
    }
}
function cambiarPantallaJugar(){
    pantalla2.style = "display: flex;";
    pantalla1.style = "display: none;";
    puedoTeclear = true;
}
function cambiarPantallaAgregar(){
    pantalla3.style = "display: flex;";
    pantalla1.style = "display: none;";
}
function cambiarPantallaAtras(){
    pantalla1.style = "display: flex;";
    pantalla2.style = "display: none;";
    puedoTeclear=false;
}
function cambiarPantallaBack(){
    pantalla1.style = "display: flex;";
    pantalla3.style = "display: none;";
}
function quitarVentana(){
    ventanaEmergente.style = "display: none;"
}
function mostrarVentana(){
    mensajePalabra.value = "LA PALABRA ERA: "+palabras[nAleatorio];
    ventanaEmergente.style = "display: flex;"
}

botonJugar.onclick = cambiarPantallaJugar;
botonAgregar.onclick = cambiarPantallaAgregar;
botonAtras.onclick = cambiarPantallaAtras;
botonBack.onclick = cambiarPantallaBack;
botonDesistir.onclick = desistir;
botonJugarDeNuevo.onclick = jugarOtraVez;
botonAdd.onclick = nuevaPalabra;
botonAceptar.onclick = quitarVentana;



crear(palabras, nAleatorio);

//TECLADO MOVILE//
const Qtecla = document.querySelector(".Q");
const Wtecla = document.querySelector(".W");
const Etecla = document.querySelector(".E");
const Rtecla = document.querySelector(".R");
const Ttecla = document.querySelector(".T");
const Ytecla = document.querySelector(".Y");
const Utecla = document.querySelector(".U");
const Itecla = document.querySelector(".I");
const Otecla = document.querySelector(".O");
const Ptecla = document.querySelector(".P");
const Atecla = document.querySelector(".A");
const Stecla = document.querySelector(".S");
const Dtecla = document.querySelector(".D");
const Ftecla = document.querySelector(".F");
const Gtecla = document.querySelector(".G");
const Htecla = document.querySelector(".H");
const Jtecla = document.querySelector(".J");
const Ktecla = document.querySelector(".K");
const Ltecla = document.querySelector(".L");
const Ñtecla = document.querySelector(".Ñ");
const Ztecla = document.querySelector(".Z");
const Xtecla = document.querySelector(".X");
const Ctecla = document.querySelector(".C");
const Vtecla = document.querySelector(".V");
const Btecla = document.querySelector(".B");
const Ntecla = document.querySelector(".N");
const Mtecla = document.querySelector(".M");
Qtecla.onclick = function(){
    detectarLetra("Q")};
Wtecla.onclick = function (){
    detectarLetra("W")};
Etecla.onclick = function (){
    detectarLetra("E")};
Rtecla.onclick = function (){
    detectarLetra("R")};
Ttecla.onclick = function (){
    detectarLetra("T")};
Ytecla.onclick = function (){
    detectarLetra("Y")};
Utecla.onclick = function (){
    detectarLetra("U")};
Itecla.onclick = function (){
    detectarLetra("I")};
Otecla.onclick = function (){
    detectarLetra("O")};
Ptecla.onclick = function (){
    detectarLetra("P")};
Atecla.onclick = function (){
    detectarLetra("A")};
Stecla.onclick = function (){
    detectarLetra("S")};
Dtecla.onclick = function (){
    detectarLetra("D")};
Ftecla.onclick = function (){
    detectarLetra("F")};
Gtecla.onclick = function (){
    detectarLetra("G")};
Htecla.onclick = function (){
    detectarLetra("H")};
Jtecla.onclick = function (){
    detectarLetra("J")};
Ktecla.onclick = function (){
    detectarLetra("K")};
Ltecla.onclick = function (){
    detectarLetra("L")};
Ñtecla.onclick = function (){
    detectarLetra("Ñ")};
Ztecla.onclick = function (){
    detectarLetra("Z")};
Xtecla.onclick = function (){
    detectarLetra("X")};
Ctecla.onclick = function (){
    detectarLetra("C")};
Vtecla.onclick = function (){
    detectarLetra("V")};
Btecla.onclick = function (){
    detectarLetra("B")};
Ntecla.onclick = function (){
    detectarLetra("N")};
Mtecla.onclick = function (){
    detectarLetra("M")};

function detectarLetra(x){
    letra = x; 
    if ((puedoTeclear==true)&&(letrasMayus.includes(letra))){
        if (palabras[nAleatorio].includes(letra)){
            agregarLetra();
        }
        else {
            actualizarHorca();
        }
    }
    condicionGanar();
    condicionPerder();
}
/* Reglas de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras 
*/

/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras   
*/

//Encriptar mensaje
function encriptarMensaje(){
    let encriptar = document.getElementById("input-texto").value;
    let encriptado = encriptar.replace(/e/gi, 'enter').replace(/i/gi, 'imes').replace(/a/gi, 'ai').replace(/o/gi, 'ober').replace(/u/gi, 'ufat');
    document.getElementById("msg").value = encriptado;
    return encriptado;
}

//Desencriptar mensaje
function desencriptarMensaje(){
    let desencriptar = document.getElementById("input-texto").value;
    let desencriptado = desencriptar.replace(/ai/gi, 'a').replace(/enter/gi, 'e').replace(/imes/gi, 'i').replace(/ober/gi, 'o').replace(/ufat/gi, 'u');
    document.getElementById("msg").value = desencriptado;
    return desencriptado;
}

//Validar texto
function validarTexto(){
    let validar = document.getElementById("input-texto").value;
    if (validar.toUpperCase()){
        validar.value ="Solo letras minusculas sin acento";
        return document.getElementById("input-texto").value = validar;
    }

}

//Boton encriptar
let botonEncriptar = document.querySelector("#btn-encriptar");
botonEncriptar.addEventListener("click", function (event){
    event.preventDefault();
    validarTexto();
    encriptarMensaje();
    form.reset()
});

//Boton desencriptar
let botonDesencriptar = document.querySelector("#btn-desencriptar");
botonDesencriptar.addEventListener("click", function (event){
    event.preventDefault();
    desencriptarMensaje();
    form.reset()
});

//Boton copiar
let botonCopiar = document.querySelector("#btn-copy");
botonCopiar.addEventListener("click", function (event){
    event.preventDefault();
    let copiar = document.getElementById("msg");
    copiar.focus();
    document.execCommand("selectAll");
    document.execCommand("copy");
})

let entrada = document.getElementById("input-texto");
entrada.focus();

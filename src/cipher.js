
let textoUsuario = "";
let offset = 0 ;

let textoCifrado ="";



//se hace un for para recorrer el texto ingresado x el user
function encode() {
    textoUsuario = document.getElementById("text").value;
    offsetUser = document.getElementById("OffSet").value; 
    textoCifrado = document.getElementById("textoCifrado").innerHTML = textoCifrado;

    for (i = 0; i <= textoUsuario.length; i++){
let mensaje = textoUsuario.toUpperCase().charCodeAt(i);
let codigoCesarCipher = (mensaje- 65+ offset ) %26 + 65;
let caracterCipher = String.fromCharCode(codigoCesarCipher);

textoCifrado = textoCifrado+caracterCipher; 

}
return textoCifrado;

//funcion concatena los caracteres cifrados y forma el nuevo mensaje



}
function decode() {

    for (i = 0; i < textoUsuario.length; i++){
    let mensaje = textoUsuario.toUpperCase().charCodeAt(i);
    let codigoCesarCipher = (mensaje+65 - offset) %26 - 65;
    let caracterCipher = String.fromCharCode(codigoAscciCipher);
    
    textoCifrado = textoCifrado + caracterCipher; 
    
    }
    return textoCifrado
    //funcion concatena los caracteres cifrados y forma el nuevo mensaje
    
    
    
    }

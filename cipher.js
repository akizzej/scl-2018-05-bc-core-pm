//se declara una variable "textoUsuario" para guardar el texto que ingrese el usuario
let textoUsuario = "";
let offset = 0;
let cifrado ="";

//se hace un for para recorrer el texto ingresado x el user
function cipher (){
for (i = 0; i < textoUsuario.length; i++)
let codigoAscci = textoUsuario.toUpperCase().charCodeAt(i);
let codigoAscciCipher = (codigoAscci- 65 + offset) %26 + 65;
let caracterCipher = String.fromCharCode(codigoAscciCipher);

cifrado = cifrado+ caracterCipher; 

}
//funcion concatena los caracteres cifrados y forma el nuevo mensaje
return cifrado
